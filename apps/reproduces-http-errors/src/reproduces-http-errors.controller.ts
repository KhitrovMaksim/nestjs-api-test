import { Controller, Get, RequestTimeoutException } from '@nestjs/common';
import { ReproducesHttpErrorsService } from './reproduces-http-errors.service';
import * as net from 'net';

@Controller('http-errors')
export class ReproducesHttpErrorsController {
  constructor(
    private readonly reproducesHttpErrorsService: ReproducesHttpErrorsService,
  ) {}

  @Get('health')
  health(): boolean {
    return this.reproducesHttpErrorsService.isActive();
  }

  // ECONNRESET [Error: socket hang up] code: 'ECONNRESET'
  @Get('ETIMEDOUT')
  async eTimedOut(): Promise<string> {
    try {
      throw new RequestTimeoutException();
      return 'ETIMEDOUT';
    } catch (e) {
      console.log(e);
    }
  }
}
