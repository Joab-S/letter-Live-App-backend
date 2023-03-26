import { AbstractConnectionRepository } from '@/modules/Connection/interfaces/repositories/abstract-Connection.repository';
import { StreamMessageGateway } from '@/modules/websocket/websocket.gateway';
import { Injectable } from '@nestjs/common';
import { SetStreamMessageDto } from '../dto/set-stream-message.dto';



@Injectable()
export class SetStreamMusicService {
  constructor(
    private readonly connectionRepository: AbstractConnectionRepository,
    private readonly streamMessageGateway: StreamMessageGateway
  ) {}

  async execute(
    code: string,
    input: SetStreamMessageDto,
  ): Promise<void> {
    const connection = await this.connectionRepository.findByCode(code);
    if (!connection) {
      throw new Error('Código não encontrado');
    }
    await this.streamMessageGateway.handleUpdate(code, input.message);
  }
}