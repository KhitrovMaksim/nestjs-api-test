import { NestFactory } from '@nestjs/core';
import { YandexModule } from './yandex.module';
import { INestApplication } from '@nestjs/common';

async function bootstrap(): Promise<void> {
  const app: INestApplication = await NestFactory.create(YandexModule);
  await app.listen(3333);
}

bootstrap().catch();
