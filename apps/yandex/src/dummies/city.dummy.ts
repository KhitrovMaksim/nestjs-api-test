import { PickupPointsListResponseDto } from '../dtos/pickup-points-list-response.dto';

export const cityDummy: PickupPointsListResponseDto = {
  points: [
    {
      id: "03840f16-3c53-400c-b382-1ecf30e06b64",
      operator_station_id: "10001016752",
      name: "Пункт выдачи заказов Яндекс Маркета",
      type: "pickup_point",
      position: {
        latitude: 55.751243,
        longitude: 37.58401
      },
      address: {
        geoId: 117065,
        country: "",
        region: "Москва",
        subRegion: "",
        locality: "Москва",
        street: "Новинский бульвар",
        house: "8 стр2",
        housing: "",
        apartment: "",
        building: "",
        comment: "плаза",
        full_address: "Москва Новинский бульвар 8 стр2",
        postal_code: "121099"
      },
      payment_methods: [
        "already_paid",
        "cash_on_receipt",
        "card_on_receipt"
      ],
      contact: {
        first_name: "",
        last_name: "",
        patronymic: "",
        phone: "+79151005429",
        email: ""
      },
      schedule: {
        time_zone: 3,
        restrictions: [
          {
            days: [
              1
            ],
            time_from: {
              hours: 11,
              minutes: 0
            },
            time_to: {
              hours: 22,
              minutes: 0
            }
          },
          {
            days: [
              2
            ],
            time_from: {
              hours: 12,
              minutes: 0
            },
            time_to: {
              hours: 22,
              minutes: 0
            }
          },
          {
            days: [
              3
            ],
            time_from: {
              hours: 10,
              minutes: 0
            },
            time_to: {
              hours: 22,
              minutes: 0
            }
          },
          {
            days: [
              4
            ],
            time_from: {
              hours: 10,
              minutes: 0
            },
            time_to: {
              hours: 22,
              minutes: 0
            }
          },
        ]
      },
      is_yandex_branded: true,
      is_market_partner: true,
      is_dark_store: false,
      is_post_office: false,
      return_station_id: "8716abcc-0faf-4efa-a89d-00125d845830",
      return_station: {
        id: "8716abcc-0faf-4efa-a89d-00125d845830",
        operator_station_id: "10001014083",
        name: "СЦ Хамовники Ленинградский проспект 5",
        type: "warehouse",
        position: {
          "latitude": 55.77917,
          "longitude": 37.577903
        },
        address: {
          geoId: 117017,
          country: "",
          region: "Москва и Московская область",
          subRegion: "",
          locality: "Москва",
          street: "Ленинградский проспект",
          house: "5 стр7",
          housing: "",
          apartment: "",
          building: "",
          comment: "",
          full_address: "Москва Ленинградский проспект 5 стр7",
          postal_code: "125041"
        },
        payment_methods: [],
        contact: {
          first_name: "Иван",
          last_name: "Петров",
          patronymic: "",
          phone: "79254448812",
          email: ""
        },
        schedule: {
          time_zone: 3,
          restrictions: [
            {
              "days": [
                1,
                2,
                3,
                4,
                5,
                6,
                7
              ],
              time_from: {
                hours: 0,
                minutes: 0
              },
              time_to: {
                hours: 23,
                minutes: 59
              }
            },
            {
              days: [
                1,
                2,
                3,
                4,
                5,
                6,
                7
              ],
              time_from: {
                hours: 23,
                minutes: 59
              },
              time_to: {
                hours: 0,
                minutes: 0
              }
            }
          ]
        },
        is_yandex_branded: false,
        is_market_partner: false,
        is_dark_store: false,
        is_post_office: false,
        dayoffs: [],
        deactivation_date: null,
        deactivation_date_predicted_debt: null,
        available_for_dropoff: true,
        available_for_c2c_dropoff: false
      },
      dayoffs: [],
      deactivation_date: null,
      deactivation_date_predicted_debt: null,
      available_for_dropoff: true,
      available_for_c2c_dropoff: false
    }
  ]
}
