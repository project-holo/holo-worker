const DiscordWorkerFramework = require('discord-worker-framework');

// Create Discord worker and REST client
const worker = new DiscordWorkerFramework.Worker({
  messageBrokerConsumer: new DiscordWorkerFramework.STOMPMessageBrokerConsumer(
    process.env.STOMP_BROKER_URL
  )
});
const restClient = new DiscordWorkerFramework.DiscordRestClient({
  token: process.env.DISCORD_TOKEN,
  enableRatelimits: true
});

// Listen for new messages and respond to "ping"
worker.on('discord:MESSAGE_CREATE', e => {
  if (e.data.content === 'ping') {
    restClient.createMessage(e.data.channel_id, 'pong!');
  }
});

// Start consuming messages from the broker
worker.startConsuming().then(() => {
  console.log('Ready to rumble!');
}).catch(err => {
  console.error('Failed to start consuming:');
  console.error(err.stack);
  process.exit(1);
});
