import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { AppModule } from './app.module';
import { setupWebsocket } from './modules/websocket/websocket.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(join(__dirname, '../src/views'));
  app.setBaseViewsDir(join(__dirname, '../src/views'));

  app.setViewEngine('hbs');
  app.useGlobalPipes(new ValidationPipe());
  
  const config = new DocumentBuilder()
  .setTitle('Letter Live APP')
  .setDescription('Aplicativo Mobile para letras em live.')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  setupWebsocket(app);
  await app.listen(process.env.SERVER_PORT);

}
bootstrap();
