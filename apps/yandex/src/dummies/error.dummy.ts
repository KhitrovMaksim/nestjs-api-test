import { PickupPointsListResponseDto } from '../dtos/pickup-points-list-response.dto';

export const errorDummy: PickupPointsListResponseDto = {
  message: "object_not_found",
  code: "404",
  error_details: "No pick up points available within this geo_id. Please check the correctness",
  details: {
    http_code: 404,
    meta_code: 404,
    details: "No pick up points available within this geo_id. Please check the correctness",
    errors: [
      "404"
    ]
  }
}
