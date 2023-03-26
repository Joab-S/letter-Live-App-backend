import { ConnectionStreamEntity } from '@/core/entities/connectionStream';
import { AbstractConnectionRepository } from '@/modules/Connection/interfaces/repositories/abstract-Connection.repository';
import { Injectable } from '@nestjs/common';
import { QueryRunner } from 'typeorm';
import { ConnectionStream } from '../entities/connectionStream.entity';
import { setQueryRunner } from '../queryrunner';


@Injectable()
export class ConnectionRepositoryImpl extends AbstractConnectionRepository {
  
  @setQueryRunner(true)
  async create(
    ConnectionData: ConnectionStreamEntity,
    queryrunner?: QueryRunner,
  ): Promise<ConnectionStreamEntity> {
    const ConnectionStreamEntity: ConnectionStream = queryrunner.manager.create(ConnectionStream, {
      connectionCode: ConnectionData.connectionCode,
      message: ConnectionData.message || null,
    });

    const savedConnection = await queryrunner.manager.save(ConnectionStreamEntity); 

    return savedConnection;
  }

  @setQueryRunner(false)
  async findById(
    id: string,
    queryrunner?: QueryRunner,
  ): Promise<ConnectionStreamEntity | undefined> {
    const ConnectionStreamEntity: ConnectionStream = await queryrunner.manager.findOneBy(ConnectionStream, {
      id,
    });

    if (!ConnectionStreamEntity) {
      return undefined;
    }
    return ConnectionStreamEntity;
  }

  @setQueryRunner(false)
  async findByCode(
    code: string,
    queryrunner?: QueryRunner,
  ): Promise<ConnectionStreamEntity | undefined> {
    const ConnectionStreamEntity: ConnectionStream = await queryrunner.manager.findOneBy(ConnectionStream, {
      connectionCode: code,
    });

    if (!ConnectionStreamEntity) {
      return undefined;
    }
    return ConnectionStreamEntity;
  }

  @setQueryRunner(true)
  async update(
    Connection: ConnectionStreamEntity,
    queryrunner?: QueryRunner,
  ): Promise<void> {
    await queryrunner.manager.save(Connection);
  }
}