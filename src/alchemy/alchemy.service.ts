import { Injectable } from '@nestjs/common';
import { NotifyPayloadDTO } from './dto/create-alchemy.dto';
import { SendNotification } from '../bot/sendMessage';

@Injectable()
export class AlchemyService {
  handleWebHook(notifyPayload: NotifyPayloadDTO) {
    const handler = new Promise((resolve, reject) => {
      resolve(() => {
        const activities = notifyPayload.event.activity;
        for (let i = 0; i < activities.length; i++) {
          SendNotification(activities[i]);
        }
      });
    });

    handler.then((fn: any) => fn());

    return;
  }
}
