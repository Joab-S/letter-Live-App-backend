import { Socket } from 'socket.io';

interface SocketWithId extends Socket {
  id: string;
  client: Socket;
  nsp: any;
  rooms: string[];
  adapter: any;
  conn: any;
  request: any;
  handshake: any;
  data: any;
}
