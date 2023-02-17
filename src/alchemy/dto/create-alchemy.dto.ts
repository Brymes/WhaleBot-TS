export class NotifyPayloadDTO {
  type: string;
  event: Event;
}

class Event {
  network: string;
  activity: Activity[];
}

export class Activity {
  fromAddress: string;
  toAddress: string;
  hash: string;
  value: number;
  typeTraceAddress: string;
  asset: string;
}
