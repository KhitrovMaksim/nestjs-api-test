import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ECONNRESET')
  async getECONNRESET(): Promise<any> {
    try {
      return this.httpService.get(
        'http://localhost:3001/http-errors/ETIMEDOUT',
      );
    } catch (e) {
      console.log(e);
      return 'Error';
    }
  }
}
