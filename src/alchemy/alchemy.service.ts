import { Injectable } from '@nestjs/common';
import { NotifyPayloadDTO } from './dto/create-alchemy.dto';

@Injectable()
export class AlchemyService {
  handleWebHook(notifyPayload: NotifyPayloadDTO) {
    const bk = new Promise((resolve, reject) => {
      resolve(() => {
        console.log('Function Start');
        //Call EtherScan API
        //Send Message
        setTimeout(() => {
          console.log(notifyPayload);
        }, 10000);
        console.log('Function END');
      });
    });

    console.log('MAIN START');
    bk.then((f: any) => f());
    console.log('MAIN end');

    return;
  }
}
