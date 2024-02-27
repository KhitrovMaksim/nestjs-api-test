import { Module } from '@nestjs/common';
import { ReproducesHttpErrorsController } from './reproduces-http-errors.controller';

@Module({
  imports: [],
  controllers: [
    ReproducesHttpErrorsController,
  ],
  providers: [
  ],
})
export class ReproducesHttpErrorsModule {
}
