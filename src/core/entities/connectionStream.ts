import { Entity } from "./entity";

export class ConnectionStreamEntity extends Entity {
  id: string;
  connectionCode: string;

  constructor ({
    id,
    connectionCode,
  }: {
    id: string,
    connectionCode: string,
  }) {
    super(id);
    this.connectionCode = connectionCode;
  }

  public static create({
    id,
    connectionCode,
  }: {
    id?: string,
    connectionCode: string,
  }) {
    const music = new ConnectionStreamEntity({
      id,
      connectionCode
    });
    return music;
  }

  public static update(
    music: ConnectionStreamEntity,
    {
      connectionCode,
    }: {
      connectionCode: string,
    }) {
      music.connectionCode = connectionCode;
    }
}