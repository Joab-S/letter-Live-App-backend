import { Injectable } from '@nestjs/common';
import { UserEntity } from '@/core/entities/user';
import { AbstractUserRepository } from '@/modules/user/interfaces/repositories/abstract-user.repository';
import { QueryRunner } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepositoryImpl extends AbstractUserRepository {
  async create(
    UserData: UserEntity,
    queryrunner?: QueryRunner,
  ): Promise<UserEntity> {
    const userEntity: User = queryrunner.manager.create(User, {
      name: UserData.name || null,
      email: UserData.email || null,
      password: UserData.password || null,
    });

    const savedUser = await queryrunner.manager.save(userEntity);

    return savedUser;
  }

  async findById(
    id: string,
    queryrunner?: QueryRunner,
  ): Promise<UserEntity | undefined> {
    const userEntity: User = await queryrunner.manager.findOneBy(User, {
      id,
    });

    if (!userEntity) {
      return undefined;
    }
    return userEntity;
  }

  async update(
    User: UserEntity,
    queryrunner?: QueryRunner,
  ): Promise<void> {
    await queryrunner.manager.save(User);
  }
}