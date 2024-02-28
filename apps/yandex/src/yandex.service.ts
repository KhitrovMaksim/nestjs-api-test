import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PickupPointsListResponseDto } from './dtos/pickup-points-list-response.dto';
import { PickupPointsListRequestDto } from './dtos/pickup-points-list-request.dto';
import { errorDummy } from './dummies/error.dummy';
import { cityDummy } from './dummies/city.dummy';

@Injectable()
export class YandexService {
  getHistory(requestId: string): {
    state_history: Array<{
      status?: string;
      description?: string;
      timestamp?: number;
      timestamp_utc?: string;
    }>;
  } | null {
    if (requestId === 'test-empty-history-from-yandex') {
      return { state_history: [] };
    }
    if (
      requestId === 'test-undefined') {
      return {
        state_history: [{}],
      };
    }
    if (
      requestId === 'test-full-history-not-final' ||
      requestId === 'test-empty-history-from-order-with-null' ||
      requestId === 'test-empty-history-from-order'
    ) {
      return {
        state_history: [
          {
            status: 'CREATED',
            description: 'Заказ подтвержден',
            timestamp: 1695407028,
            timestamp_utc: '2023-09-22T18:23:48.000000Z',
          },
        ],
      };
    }
    if (requestId === 'test-null-from-yandex-history') {
      return null;
    }
    if (requestId === 'test-500') {
      throw new InternalServerErrorException();
    }
    if (requestId === 'test-full-history-final') {
      return {
        state_history: [
          {
            status: 'CREATED',
            description: 'Заказ подтвержден',
            timestamp: 1695407028,
            timestamp_utc: '2023-09-22T18:23:48.000000Z',
          },
          {
            status: 'SORTING_CENTER_AT_START',
            description: 'На складе сортировочного центра',
            timestamp: 1695407328,
            timestamp_utc: '2023-09-22T18:28:48.000000Z',
          },
          {
            status: 'SORTING_CENTER_PREPARED',
            description: 'Готов к отправке в службу доставки',
            timestamp: 1695407388,
            timestamp_utc: '2023-09-22T18:29:48.000000Z',
          },
          {
            status: 'SORTING_CENTER_TRANSMITTED',
            description: 'Заказ отгружен в СД',
            timestamp: 1695407448,
            timestamp_utc: '2023-09-22T18:30:48.000000Z',
          },
          {
            status: 'DELIVERY_AT_START',
            description: 'На складе службы доставки',
            timestamp: 1695407508,
            timestamp_utc: '2023-09-22T18:31:48.000000Z',
          },
          {
            status: 'DELIVERY_ARRIVED_PICKUP_POINT',
            description: 'В пункте самовывоза',
            timestamp: 1695407568,
            timestamp_utc: '2023-09-22T18:32:48.000000Z',
          },
          {
            status: 'DELIVERY_DELIVERED',
            description: 'Доставлен',
            timestamp: 1695407748,
            timestamp_utc: '2023-09-22T18:35:48.000000Z',
          },
        ],
      };
    }
    if (requestId === '' || requestId === 'test-400') {
      throw new BadRequestException({
        message: 'cannot_restore_request_ids',
        code: '400',
        error_details: '',
        details: {
          http_code: 400,
          meta_code: 400,
          details: '',
          errors: ['400'],
        },
      });
    }
    throw new BadRequestException({
      message:
        'Incorrect request id. Did you use request_code instead of request_id?',
      code: '400',
      error_details: '',
      details: {
        http_code: 400,
        meta_code: 400,
        details: '',
        errors: ['400'],
      },
    });
  }

  getPickupPointsList(body: PickupPointsListRequestDto): PickupPointsListResponseDto {
    const geoIdsForInternalServerError = [10776, 11162, 11131, 10174, 2, 11146, 10795];
    if (geoIdsForInternalServerError.includes(body.geo_id)) {
      throw new InternalServerErrorException();
    }
    if (body.geo_id === 213) {
      return cityDummy;
    }
    return errorDummy;
  }
}
