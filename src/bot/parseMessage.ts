import { Activity } from '../alchemy/dto/create-alchemy.dto';

export function parseMessage(payload: Activity) {
  const message = {
    color: 0x0099ff,
    // TODO Label addresses.
    title: 'Transaction by ',
    url: 'https://etherscan.io/tx/${payload.hash}',
    fields: [
      {
        name: `Asset`,
        value: payload.asset,
        inline: true,
      },
      {
        name: `Value`,
        value: payload.value,
        inline: true,
      },
      {
        name: `Transaction Hash`,
        value: `https://etherscan.io/tx/${payload.hash}`,
      },
    ],
    timestamp: new Date().toISOString(),
  };

  return message;
}
