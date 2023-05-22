// const fs = require('fs');
const { Telegraf , Markup} = require('telegraf')
const bot = new Telegraf()

console.log('READY')


function ae(){
    console.log('test')
}

async function forwarder(ctx, fwdID) {
    ctx.forwardMessage(fwdID)
    ctx.reply('^ ^ ^ ^', Markup.inlineKeyboard([{ text: 'AAA', callback_data: 'accept'}])
        .resize())
    console.log(ctx.message)
}

bot.on('text', (ctx) =>
{
    forwarder(ctx, 925304597)
})

bot.action('accept', (ctx) => {
    return console.log('xd')
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
