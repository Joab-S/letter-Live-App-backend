import { AbstractConnectionRepository } from '@/modules/Connection/interfaces/repositories/abstract-Connection.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetStreamMusicService {
  constructor(
    private readonly connectionRepository: AbstractConnectionRepository,
  ) {}
  async execute(
    code: string,
  ): Promise<string> {
    const connection = await this.connectionRepository.findByCode(code);
    if (!connection) {
      return null;
    }

    return connection.message;
  }
}