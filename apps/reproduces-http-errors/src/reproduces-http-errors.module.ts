import { Module } from '@nestjs/common';
import { ReproducesHttpErrorsController } from './reproduces-http-errors.controller';
import { ReproducesHttpErrorsService } from './reproduces-http-errors.service';

@Module({
  imports: [],
  controllers: [
    ReproducesHttpErrorsController,
  ],
  providers: [
    ReproducesHttpErrorsService,
  ],
})
export class ReproducesHttpErrorsModule {
}
