// @ts-ignore
import * as io from 'socket.io-client';

const { RTCPeerConnection, RTCSessionDescription } = window;

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class PeerConnectionSession {
  _onConnected: any;
  _onDisconnected: any;
  _room: any;

  socket: any;
  peerConnection: any & { connectionState: string };

  constructor(socket: any, peerConnection: any) {
    this.socket = socket;
    this.peerConnection = peerConnection;

    this.peerConnection.addEventListener('connectionstatechange', (event: any) => {
      console.log(this.peerConnection.connectionState);
      // @ts-ignore
      const fn = this['_on' + capitalizeFirstLetter(this.peerConnection.connectionState)];
      fn && fn(event);
    });
    this.onCallMade();
  }

  isAlreadyCalling = false;
  getCalled = false;

  async callUser(to: any) {
    const offer = await this.peerConnection.createOffer();
    await this.peerConnection.setLocalDescription(new RTCSessionDescription(offer));

    this.socket.emit('call-user', { offer, to });
  }

  onConnected(callback: any) {
    this._onConnected = callback;
  }

  onDisconnected(callback: any) {
    this._onDisconnected = callback;
  }

  joinClass(room: any) {
    this._room = room;
    this.socket.emit('joinClass', room);
  }

  onCallMade() {
    this.socket.on('call-started', async (data: any) => {
      if (this.getCalled) {
        const confirmed = window.confirm(`${data.socket} está te ligando. Deseja iniciar esta chamada?`);

        if (!confirmed) {
          this.socket.emit('reject-call', {
            from: data.socket,
          });

          return;
        }
      }

      await this.peerConnection.setRemoteDescription(new RTCSessionDescription(data.offer));
      const answer = await this.peerConnection.createAnswer();
      await this.peerConnection.setLocalDescription(new RTCSessionDescription(answer));

      this.socket.emit('accept-call', {
        answer,
        to: data.socket,
      });
      this.getCalled = true;
    });
  }

  onRemoveUser(callback: any) {
    // @ts-ignore
    this.socket.on(`${this._room}-remove-user`, ({ socketId }) => {
      callback(socketId);
    });
  }

  onUpdateUserList(callback: any) {
    // @ts-ignore
    this.socket.on(`${this._room}-update-users`, ({ users }) => {
      callback(users);
    });
  }

  onCallAccepted(callback: any) {
    this.socket.on('call-accepted', async (data: any) => {
      await this.peerConnection.setRemoteDescription(new RTCSessionDescription(data.answer));

      if (!this.isAlreadyCalling) {
        callback(data.socket);
        this.isAlreadyCalling = true;
      }
    });
  }

  onCallRejected(callback: any) {
    this.socket.on('call-rejected', (data: any) => {
      callback(data);
    });
  }

  onTrack(callback: any) {
    // @ts-ignore
    this.peerConnection.ontrack = function ({ streams: [stream] }) {
      callback(stream);
    };
  }
}

export const createPeerConnectionContext = () => {
  const peerConnection = new RTCPeerConnection({
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
  });
  console.log('Socket URL', process.env.REACT_APP_SOCKET_URL);
  const socket = io(process.env.REACT_APP_SOCKET_URL);

  return new PeerConnectionSession(socket, peerConnection);
};
