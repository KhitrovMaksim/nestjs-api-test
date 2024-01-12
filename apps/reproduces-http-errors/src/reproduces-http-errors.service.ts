import { Injectable } from '@nestjs/common';

@Injectable()
export class ReproducesHttpErrorsService {
  isActive(): boolean {
    return true;
  }
}
