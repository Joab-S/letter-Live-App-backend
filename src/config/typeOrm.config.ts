import { ConfigService } from "@nestjs/config";
import { config } from "dotenv";
import { join } from "path";
import { DataSource } from "typeorm";

config();

const configService = new ConfigService();

const dataSourceConfig = new DataSource({
  type: 'mysql',
  host: configService.get('DATABASE_HOST'),
  port: configService.get('DATABASE_PORT'),
  username: configService.get('DATABASE_USERNAME'),
  password: configService.get('DATABASE_PASSWORD'),
  database: configService.get('DATABASE_NAME'),
  synchronize: process.env.DATABASE_SYNCHRONIZE == 'true' ? true : false,
  logging: true,
  entities: [join(__dirname, '../**', '*.entity.{js,ts}')],
  subscribers: [],
  migrations: [join(__dirname, '../**', 'external/migrations/*{.ts,.js}')],
})

dataSourceConfig
    .initialize()
    .then(() => {
        console.log(`Data Source foi bem inicializado`);
    })
    .catch((err) => {
        console.error(`Erro na inicialização do Data Source`, err);
    })

export default dataSourceConfig;