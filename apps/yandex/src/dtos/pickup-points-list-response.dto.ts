import { PaymentMethodTypeDto } from './payment-method-type.dto';

export class ReturnStation {
  id: string;
  operator_station_id: string;
  name: string;
  type: string;
  position: Position;
  address: Address;
  payment_methods: PaymentMethodTypeDto[];
  contact: Contact;
  schedule: Schedule;
  is_yandex_branded: boolean;
  is_market_partner: boolean;
  is_dark_store: boolean;
  is_post_office: boolean;
  dayoffs: [];
  deactivation_date?: any;
  deactivation_date_predicted_debt?: any;
  available_for_dropoff: boolean;
  available_for_c2c_dropoff: boolean;
}

export class ErrorDetailsDto {
  http_code: number;
  meta_code: number;
  details: string;
  errors: string[];
}

export class PickupPointsListResponseDto {
  points?: PointDto[];
  message?: string;
  code?: string;
  error_details?: string;
  details?: ErrorDetailsDto;
}
export class PointDto {
  id: string;
  operator_station_id: string;
  position: Position;
  name: string;
  address: Address;
  payment_methods: PaymentMethodTypeDto[];
  schedule: Schedule;
  contact: Contact;
  type: 'pickup_point' | 'terminal' | 'post_office' | 'sorting_center' | 'warehouse';
  is_yandex_branded: boolean;
  is_market_partner: boolean;
  is_dark_store: boolean;
  is_post_office: boolean;
  return_station_id: string;
  return_station: ReturnStation;
  dayoffs: any[];
  deactivation_date?: any;
  deactivation_date_predicted_debt?: any;
  available_for_c2c_dropoff?: boolean;
  available_for_dropoff: boolean;
}

class Contact {
  first_name: string;
  last_name: string;
  patronymic: string;
  phone: string;
  email: string;
}

class Schedule {
  time_zone: number;
  restrictions: Restriction[];
}

class Restriction {
  time_from: Timefrom;
  time_to: Timefrom;
  days: number[];
}

class Timefrom {
  hours: number;
  minutes: number;
}

class Address {
  geoId: number;
  country: string;
  region: string;
  subRegion: string;
  locality: string;
  street: string;
  house: string;
  housing: string;
  building: string;
  apartment: string;
  comment: string;
  full_address: string;
  postal_code: string;
}

class Position {
  longitude: number;
  latitude: number;
}
