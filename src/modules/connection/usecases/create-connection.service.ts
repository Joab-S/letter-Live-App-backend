import { Injectable } from '@nestjs/common';
import { AbstractUserRepository } from '@/modules/user/interfaces/repositories/abstract-user.repository';
import { AbstractConnectionRepository } from '../interfaces/repositories/abstract-connection.repository';
import { ConnectionStreamEntity } from '@/core/entities/connectionStream';
import { v4 as uuidv4 } from 'uuid';
import * as dotenv from 'dotenv';

@Injectable()
export class CreateConnectionService {
  constructor(
    private readonly usersRepository: AbstractUserRepository,
    private readonly connectionRepository: AbstractConnectionRepository,
  ) {}

  async execute(
  ): Promise<string> {

    const code: string = uuidv4(); // Gerar um UUID
    const newConnection = ConnectionStreamEntity.create({
      connectionCode: code,
    });
    const connection = await this.connectionRepository.create(newConnection);
    //return process.env.BASE_URL + 'set-stream-message/' + connection.connectionCode;

    return connection.connectionCode;
  }
}
