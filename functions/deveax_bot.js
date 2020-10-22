const Telegraf = require('telegraf');
const startAction = require('./deveax_bot/start')
const inlineAction = require('./deveax_bot/inline')
const bot = new Telegraf(process.env.DEVEAX_BOT_TOKEN);
//token insterted on netlify environment
bot.start(ctx => {
return startAction(ctx)
})

bot.on('inline_query', (ctx) => {
return inlineAction(ctx)
})

exports.handler = async event => {
await bot.handleUpdate(JSON.parse(event.body));
return { statusCode: 200, body: '' };
}