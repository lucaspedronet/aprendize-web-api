import {
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { Server } from 'ws';
import { Logger } from '@nestjs/common';

type OpenSockets = {
  room: string;
  id: string;
};

@WebSocketGateway({ namespace: 'class' })
export class ClassGateway implements OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  private openSockets: OpenSockets[] = [];

  private logger: Logger = new Logger('MessageGateway');

  @SubscribeMessage('joinClass')
  public joinClass(client: Socket, room: string): void {
    const foundSocket = this.openSockets?.find(
      (socket) => socket.room === room && socket.id === client.id,
    );

    if (!foundSocket) {
      this.openSockets = [...this.openSockets, { id: client.id, room }];
      client.emit(`${room}-update-users`, {
        users: this.openSockets
          .filter((socket) => socket.room === room && socket.id !== client.id)
          .map((existingSocket) => existingSocket.id),
      });

      client.broadcast.emit(`${room}-update-users`, {
        users: [client.id],
      });
    }

    this.logger.log(`User ${client.id} joined the class #${room}`);
  }

  public handleDisconnect(client: Socket): void {
    const foundSocket = this.openSockets.find(
      (socket) => socket.id === client.id,
    );

    if (!foundSocket) return;

    this.openSockets = this.openSockets.filter(
      (socket) => socket.id !== client.id,
    );

    client.broadcast.emit(`${foundSocket.room}-remove-user`, {
      socketId: client.id,
    });
  }

  @SubscribeMessage('start-call')
  public startCall(client: Socket, data: any): void {
    client.to(data.to).emit('call-started', {
      offer: data.offer,
      socket: client.id,
    });
  }

  @SubscribeMessage('accept-call')
  public acceptCall(client: Socket, data: any): void {
    client.to(data.to).emit('call-accepted', {
      socket: client.id,
      answer: data.answer,
    });
  }

  @SubscribeMessage('reject-call')
  public rejectCall(client: Socket, data: any): void {
    client.to(data.from).emit('call-rejected', {
      socket: client.id,
    });
  }
}
