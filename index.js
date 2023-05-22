// const fs = require('fs');
const { Telegraf , Markup, Telegram} = require('telegraf')
const bot = new Telegraf('6114524938:AAFzgSOByjBvL8DrVLfOzIi0Z0BtRXPHpHE')
const telegram = new Telegram('6114524938:AAFzgSOByjBvL8DrVLfOzIi0Z0BtRXPHpHE')
// const Telegram = require('node-telegram-bot-api')
// const bot1 = new Telegram('6114524938:AAFzgSOByjBvL8DrVLfOzIi0Z0BtRXPHpHE', { polling: true })
console.log('READY')


function ae(){
    console.log('test')
}

async function forwarder(ctx, fwdID) {
    ctx.forwardMessage(fwdID)
    ctx.reply('^ ^ ^ ^', Markup.inlineKeyboard([{ text: 'AAA', callback_data: 'accept'}])
        .resize())
    // console.log(ctx.message)
}

bot.on('photo', (ctx) =>
{
    forwarder(ctx, 925304597)
})

bot.action('accept', (ctx) => {

    // let tempCTX = new context()
    telegram.forwardMessage(-1001537684385, 925304597, ctx.update.callback_query.message.message_id - 1)

    // ctx.update.callback_query.message.message_id
    return console.log('DONED')
})

// bot.on('text', async ctx => {
//     ctx.reply(
//         "What do you think? Any thoughts are welcome 🤗",
//         Markup.inlineKeyboard([{ text: 'AAA', callback_data: 'AAA' }])
//             .resize()
//
//     );
// });


// bot.action('next', (ctx) => { ctx.editMessageText(
//     'Как дела?',
//     Extra.markup(
//         Markup.inlineKeyboard ([
//             [
//                 Markup.callbackButton('Xopowo', 'good'),
//                 Markup.callbackButton('Плоxо', 'bad'),
//                 ],
//                 [Markup.callbackButton('Yдaлить сообшение', 'delete')],
//             ])
//     )
// )
// })


bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
