import { Module } from '@nestjs/common';
import { AlchemyService } from './alchemy.service';
import { AlchemyController } from './alchemy.controller';

@Module({
  controllers: [AlchemyController],
  providers: [AlchemyService],
})
export class AlchemyModule {}
