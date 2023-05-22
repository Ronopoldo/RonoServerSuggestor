const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;
const { Telegraf , Markup, Telegram} = require('telegraf')
console.log('READY1')
const bot = new Telegraf(process.env['TOKEN'])
const telegram = new Telegram(process.env['TOKEN'])
 
app.get('/', function(request, response){ response.send(`Монитор активен. Локальный адрес: http://localhost:${port}`); });
app.listen(port, () => console.log());

// const fs = require('fs');

// const Telegram = require('node-telegram-bot-api')
// const bot1 = new Telegram('6114524938:AAFzgSOByjBvL8DrVLfOzIi0Z0BtRXPHpHE', { polling: true })
console.log('READY')


function ae(){
    console.log('test')
}


function forwarder(ctx, fwdID) {

            // console.log([ctx][0] + ' \n XDDDD')
            // let arrayOf = []
            // arrayOf[arrayOf.length] = ctx


            ctx.forwardMessage(fwdID)

            ;
            // console.log(arrayOf[0])

            // console.log(ctx.message)}
            return -1


}
let whiteList = [925304597, 5930017558]
let delayArray = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000]
let delayVar = 0
bot.on('photo', async (ctx) =>
{

    if (whiteList.includes(ctx.from.id)) {
        await new Promise(r => setTimeout(r, Math.floor(Math.random() * (1000 - 12 + 1)) + 12));
        delayVar++
        if (delayVar == 12) {
            delayVar = 0
        }

        // console.log(ctx)
        await new Promise(r => setTimeout(r, delayArray[delayVar]));
        await console.log('ae' + delayArray[delayVar])
        await forwarder(ctx, 925304597)
        await new Promise(r => setTimeout(r, 500))
        await telegram.sendMessage(925304597, '⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆', Markup.inlineKeyboard([{text: '✅Опубликовать✅', callback_data: 'accept'}, {text: '❌Отклонить❌', callback_data: 'decline'}])
            .resize())
        await ctx.reply('✅Загружено в предложку!✅')
    }


})

bot.command('start', async (ctx) => {
stx.reply('Привет!\nДобро пожаловать в предложку для Роносервера! Если ты есть в вайт листе, то ты можешь скидывать сюда мемы на рассмотрение перед публикацией.\n\n\nМемы скидываются без каких-либо команд, просто СЖАТЫМИ версиями файлов.\n\nПринимаемые форматы: фото, видео\n\n⚠️Рекомендуется скидывать не больше 10 мемов за 5 секунд⚠️\n\nС уважением!\nRonoServer Services')
})

bot.action('accept', async (ctx) => {

    console.log()

        await telegram.forwardMessage(-1001517704313, ctx.update.callback_query.message.chat.id, ctx.update.callback_query.message.message_id - 1, error => console.log('ae'))

        await new Promise(r => setTimeout(r, 1500))
    await telegram.deleteMessage(ctx.update.callback_query.message.chat.id, ctx.update.callback_query.message.message_id)
    await telegram.deleteMessage(ctx.update.callback_query.message.chat.id, ctx.update.callback_query.message.message_id - 1)
    // ctx.update.callback_query.message.message_id
    return console.log('DONED')
})

bot.action('decline', (ctx) => {
    telegram.deleteMessage(ctx.update.callback_query.message.chat.id, ctx.update.callback_query.message.message_id)
    telegram.deleteMessage(ctx.update.callback_query.message.chat.id, ctx.update.callback_query.message.message_id - 1)
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
