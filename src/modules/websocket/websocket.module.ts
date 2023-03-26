import { INestApplication } from '@nestjs/common';
import * as http from 'http';
import * as socketIo from 'socket.io';

export async function setupWebsocket(app: INestApplication): Promise<void> {
  const server = http.createServer(app.getHttpServer());
  const io = new socketIo.Server(server);

  // aqui você pode adicionar a lógica do seu websocket
  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
}