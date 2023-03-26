import { ConnectionStreamEntity } from "@/core/entities/connectionStream";

export abstract class AbstractConnectionRepository {
  abstract create(ConnectionData: ConnectionStreamEntity): Promise<ConnectionStreamEntity>;
  abstract findById(id: string): Promise<ConnectionStreamEntity | undefined>;
  abstract findByCode(code: string): Promise<ConnectionStreamEntity | undefined>;
  abstract update(Connection: ConnectionStreamEntity): Promise<void>;
}