import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';

@Module({
  providers: [SharedService],
  exports: [SharedService],
  imports: [ConfigModule, DatabaseModule],
})
export class SharedModule {}
