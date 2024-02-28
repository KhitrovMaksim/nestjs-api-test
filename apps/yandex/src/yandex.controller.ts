import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query } from '@nestjs/common';
import { YandexService } from './yandex.service';
import { PickupPointsListRequestDto } from './dtos/pickup-points-list-request.dto';
import { PickupPointsListResponseDto } from './dtos/pickup-points-list-response.dto';

@Controller('yandex')
export class YandexController {
  constructor(
    private readonly yandexService: YandexService,
  ) {
  }

  @Get('taxi/request/history')
  history(@Query('request_id') request_id: string) {
    return this.yandexService.getHistory(request_id);
  }

  @Post('taxi/pickup-points/list')
  @HttpCode(HttpStatus.OK)
  pickupPointsList(@Body() body: PickupPointsListRequestDto): PickupPointsListResponseDto {
    return this.yandexService.getPickupPointsList(body);
  }
}
