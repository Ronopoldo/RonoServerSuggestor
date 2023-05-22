// const fs = require('fs');
const { Telegraf , Markup, Extra} = require('telegraf')
const bot = new Telegraf()

console.log('READY')


async function forwarder(ctx, fwdID) {
    ctx.forwardMessage(fwdID)
    console.log(ctx.message)
    // ctx.reply('ae',
    //     Extra.markup(
    //     Markup.inlineKeyboard([[Markup.callbackButton('Далее', 'next')]])
    // ).HTML())
}

bot.on('text', (ctx) =>
{
    forwarder(ctx, 925304597)
})



bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))