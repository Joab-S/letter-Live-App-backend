import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionModule } from './modules/connection/Connection.module';
import { MusicModule } from './modules/music/Music.module';
import { StreamMusicModule } from './modules/stream-music/streamMusic.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [],
        autoLoadEntities: true,
      }),
    }),
    MusicModule,
    StreamMusicModule,
    ConnectionModule,
  ],
})
export class AppModule {}
