import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicRepositoryImpl } from '@/external/adapters/music-repository.impl';
import { UserRepositoryImpl } from '@/external/adapters/user-repository.impl';
import { Music } from '@/external/entities/Music.entity';
import { AbstractUserRepository } from '../user/interfaces/repositories/abstract-user.repository';
import { CreateMusicController } from './controllers/create-music.controller';
import { AbstractMusicRepository } from '../music/interfaces/repositories/abstract-music.repository';
import { CreateMusicService } from './usecases/create-music.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Music]),
  ],
  controllers: [
    CreateMusicController,
  ],
  providers: [
    {
      provide: AbstractMusicRepository,
      useClass: MusicRepositoryImpl,
    },
    {
      provide: AbstractUserRepository,
      useClass: UserRepositoryImpl,
    },
    CreateMusicService,
  ],
})
export class MusicModule {}