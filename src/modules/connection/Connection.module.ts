import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionRepositoryImpl } from '@/external/adapters/connection-repository.impl';
import { UserRepositoryImpl } from '@/external/adapters/user-repository.impl';
import { AbstractUserRepository } from '../user/interfaces/repositories/abstract-user.repository';
import { CreateConnectionController } from './controllers/create-connection.controller';
import { AbstractConnectionRepository } from '../connection/interfaces/repositories/abstract-connection.repository';
import { CreateConnectionService } from './usecases/create-connection.service';
import { ConnectionStream } from '@/external/entities/connectionStream.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ConnectionStream]),
  ],
  controllers: [
    CreateConnectionController,
  ],
  providers: [
    {
      provide: AbstractConnectionRepository,
      useClass: ConnectionRepositoryImpl,
    },
    {
      provide: AbstractUserRepository,
      useClass: UserRepositoryImpl,
    },
    CreateConnectionService,
  ],
})
export class ConnectionModule {}