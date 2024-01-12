import { NestFactory } from '@nestjs/core';
import { ReproducesHttpErrorsModule } from './reproduces-http-errors.module';

async function bootstrap() {
  const app = await NestFactory.create(ReproducesHttpErrorsModule);
  await app.listen(3001);
}
bootstrap();
