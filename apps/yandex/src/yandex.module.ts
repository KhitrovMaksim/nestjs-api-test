import { Module } from '@nestjs/common';
import { YandexController } from './yandex.controller';
import { YandexService } from './yandex.service';

@Module({
  imports: [],
  controllers: [YandexController],
  providers: [YandexService],
})
export class YandexModule {}
