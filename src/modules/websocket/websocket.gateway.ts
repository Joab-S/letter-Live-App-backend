import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable } from '@nestjs/common';

@Injectable()
@WebSocketGateway()
export class StreamMessageGateway { 
  @WebSocketServer() server: Server;

  @SubscribeMessage('join-room')
  async handleJoinRoom(client: Socket, room: string) {
    await client.join(room);
    console.log(`Client ${client.id} joined room ${room}`);
  }

  async handleUpdate(code: string, message: string) {
    // envia a atualização para todos os clientes conectados
    const room = `letter-${code}`;
    this.server.to(room).emit('update-letter', message);
    console.log(`message has been sent to room ${room}`);
  }
}
