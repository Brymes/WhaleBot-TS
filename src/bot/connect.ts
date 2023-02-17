import { Client, GatewayIntentBits } from 'discord.js';

let Bot: Client;

function initClient() {
  const { Guilds, MessageContent, GuildMessages, GuildMembers } =
    GatewayIntentBits;

  Bot = new Client({
    intents: [Guilds, MessageContent, GuildMessages, GuildMembers],
  });
  Bot.login(process.env.BOT_TOKEN);
}

export function getClient() {
  if (Bot === undefined || Bot.isReady() === false) {
    initClient();
    return Bot;
  }
  return Bot;
}
