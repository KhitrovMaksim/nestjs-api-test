import { Controller, Get, InternalServerErrorException, RequestTimeoutException } from '@nestjs/common';
import { ReproducesHttpErrorsService } from './reproduces-http-errors.service';

@Controller('http-errors')
export class ReproducesHttpErrorsController {
  constructor(
    private readonly reproducesHttpErrorsService: ReproducesHttpErrorsService,
  ) {}

  @Get('health')
  health(): boolean {
    return this.reproducesHttpErrorsService.isActive();
  }

  @Get('internal-server-error')
  async eTimedOut(): Promise<string> {
    throw new InternalServerErrorException();
  }
}
