import { Injectable } from '@nestjs/common';
import { MusicEntity } from '@/core/entities/music';
import { AbstractUserRepository } from '@/modules/user/interfaces/repositories/abstract-user.repository';
import { CreateMusicDto } from '../dto/create-music.dto';
import { AbstractMusicRepository } from '../interfaces/repositories/abstract-music.repository';

@Injectable()
export class CreateMusicService {
  constructor(
    private readonly MusicRepository: AbstractMusicRepository,
    private readonly usersRepository: AbstractUserRepository,
  ) {}

  async execute(
    input: CreateMusicDto,
  ): Promise<void> {

    const newMusic = MusicEntity.create({
      ...input
    });

    console.log("newMusic:", newMusic);

    await this.MusicRepository.create(newMusic);
  }
}
