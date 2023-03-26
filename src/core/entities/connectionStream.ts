import { Entity } from "./entity";

export class ConnectionStreamEntity extends Entity {
  id: string;
  connectionCode: string;
  message: string;

  constructor ({
    id,
    connectionCode,
    message
  }: {
    id: string,
    connectionCode: string,
    message: string;
  }) {
    super(id);
    this.connectionCode = connectionCode;
    this.message = message;
  }

  public static create({
    id,
    connectionCode,
    message
  }: {
    id?: string,
    connectionCode: string,
    message: string
  }) {
    const music = new ConnectionStreamEntity({
      id,
      connectionCode,
      message
    });
    return music;
  }

  public static update(
    music: ConnectionStreamEntity,
    {
      connectionCode,
      message
    }: {
      connectionCode: string,
      message: string
    }) {
      music.connectionCode = connectionCode;
      music.message = message;
    }
}