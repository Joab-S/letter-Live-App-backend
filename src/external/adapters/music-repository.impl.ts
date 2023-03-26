import { MusicEntity } from '@/core/entities/music';
import { AbstractMusicRepository } from '@/modules/music/interfaces/repositories/abstract-music.repository';
import { Injectable } from '@nestjs/common';
import { QueryRunner } from 'typeorm';
import { Music } from '../entities/Music.entity';
import { setQueryRunner } from '../queryrunner';


@Injectable()
export class MusicRepositoryImpl extends AbstractMusicRepository {
  
  @setQueryRunner(true)
  async create(
    MusicData: MusicEntity,
    queryrunner?: QueryRunner,
  ): Promise<MusicEntity> {
    const MusicEntity: Music = queryrunner.manager.create(Music, {
      author: MusicData.author || null,
      title: MusicData.title || null,
      letter: MusicData.letter || null,
    });

    const savedMusic = await queryrunner.manager.save(MusicEntity); 

    return savedMusic;
  }

  @setQueryRunner(false)
  async findById(
    id: string,
    queryrunner?: QueryRunner,
  ): Promise<MusicEntity | undefined> {
    const musicEntity: Music = await queryrunner.manager.findOneBy(Music, {
      id,
    });

    if (!musicEntity) {
      return undefined;
    }
    return musicEntity;
  }

//  filterByName(value: string): GetUserBuilder {
//    const name = value.replace(/-/g, ' ');
//    const filter = `(user.name like '%${name}%')`;
//
//    if (!this.haveWhere) {
//      this.query.where(filter);
//      this.haveWhere = true;
//    } else {
//      this.query.orWhere(filter);
//    }
//    return this;
//  }

  async findByAuthor(
    author: string,
    queryrunner?: QueryRunner,
  ): Promise<MusicEntity | undefined> {
    const musicEntity: Music = await queryrunner.manager.findOneBy(Music, {
      author,
    });

    if (!musicEntity) {
      return undefined;
    }
    return musicEntity;
  }

  async findByLetter(
    letter: string,
    queryrunner?: QueryRunner,
  ): Promise<MusicEntity | undefined> {
    const musicEntity: Music = await queryrunner.manager.findOneBy(Music, {
      letter,
    });

    if (!musicEntity) {
      return undefined;
    }
    return musicEntity;
  }

  @setQueryRunner(true)
  async update(
    music: MusicEntity,
    queryrunner?: QueryRunner,
  ): Promise<void> {
    await queryrunner.manager.save(music);
  }
}