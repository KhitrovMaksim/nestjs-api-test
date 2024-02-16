import { Controller, Get, Query } from '@nestjs/common';
import { YandexService } from './yandex.service';

@Controller('yandex')
export class YandexController {
  constructor(private readonly yandexService: YandexService) {}

  @Get('taxi/request/history')
  history(@Query('request_id') request_id: string) {
    return this.yandexService.getHistory(request_id);
  }
}
