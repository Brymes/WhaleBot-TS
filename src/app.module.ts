import { Module } from '@nestjs/common';
import { AlchemyModule } from './alchemy/alchemy.module';

@Module({
  imports: [AlchemyModule],
})
export class AppModule {}
