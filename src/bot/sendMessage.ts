import { Activity } from '../alchemy/dto/create-alchemy.dto';
import { getClient } from './connect';
import { parseMessage } from './parseMessage';
import { Embed, TextChannel } from 'discord.js';

export function SendNotification(payload: Activity) {
  const bot = getClient();
  const message = parseMessage(payload);

  bot.on('ready', (client) => {
    const channel = client.channels.cache.get('1076011264716832838');
    (channel as TextChannel).send({ embeds: [message as Embed] });
  });
}
