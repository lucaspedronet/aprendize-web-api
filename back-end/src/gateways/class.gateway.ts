import {
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { Server } from 'ws';

type OpenSockets = {
  room: string;
  id: string;
};

@WebSocketGateway({ namespace: 'classes' })
export class ClassGateway implements OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  private openSockets: OpenSockets[] = [];

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
}
