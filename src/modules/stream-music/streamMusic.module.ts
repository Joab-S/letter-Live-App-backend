import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbstractUserRepository } from '../user/interfaces/repositories/abstract-user.repository';
import { SetStreamMusicController } from './controllers/set-stream-music.controller';
import { GetStreamMusicController } from './controllers/get-stream-music.controller';
import { GetStreamMusicService } from './usecases/get-stream-music.service';
import { SetStreamMusicService } from './usecases/set-stream-music.service';
import { ConnectionRepositoryImpl } from '@/external/adapters/connection-repository.impl';
import { AbstractConnectionRepository } from '../Connection/interfaces/repositories/abstract-Connection.repository';
import { StreamMessageGateway } from '../websocket/websocket.gateway';

@Module({
  imports: [
    TypeOrmModule.forFeature([]),
  ],
  controllers: [
    GetStreamMusicController,
    SetStreamMusicController,
  ],
  providers: [
    {
      provide: AbstractConnectionRepository,
      useClass: ConnectionRepositoryImpl,
    },
    GetStreamMusicService,
    SetStreamMusicService,
    StreamMessageGateway
  ],
})
export class StreamMusicModule {}
