import { Controller, Get, HttpCode, HttpStatus, InternalServerErrorException } from '@nestjs/common';
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

  @Get('200')
  @HttpCode(HttpStatus.OK)
  ok(): void {}
}
