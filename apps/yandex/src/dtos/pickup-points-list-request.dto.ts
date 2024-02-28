import { DeliveryTypeDto } from './delivery-point-type.dto';
import { PaymentMethodTypeDto } from './payment-method-type.dto';

export class PickupPointsListRequestDto {
  available_for_c2c_dropoff?: boolean;
  geo_id?: number;
  is_not_branded_partner_station?: boolean;
  is_post_office?: boolean;
  is_yandex_branded?: boolean;
  latitude?: Latitude;
  longitude?: Longitude;
  payment_method?: PaymentMethodTypeDto;
  payment_methods?: PaymentMethodTypeDto[];
  pickup_point_ids?: string[];
  type?: DeliveryTypeDto;
}

export class Latitude {
  from: number;
  to: number;
}

export class Longitude {
  from: number;
  to: number;
}
