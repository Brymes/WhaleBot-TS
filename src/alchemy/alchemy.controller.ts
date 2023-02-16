import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AlchemyService } from './alchemy.service';
import { NotifyPayloadDTO } from './dto/create-alchemy.dto';

@Controller('alchemy')
export class AlchemyController {
  constructor(private readonly alchemyService: AlchemyService) {}

  @Post()
  @HttpCode(200)
  whaleWebhook(@Body() notifyPayload: NotifyPayloadDTO) {
    return this.alchemyService.handleWebHook(notifyPayload);
  }
}
