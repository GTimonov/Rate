const TelegramBot = require('node-telegram-bot-api');
const tokens = require('../tokens');
const messages = require('./messages')
const token = tokens.LI_TOKEN;

exports.startBot = function (){
    var bot = new TelegramBot(token, {polling: true}); 
    
    bot.onText(/\/start/, (msg) => {
        bot.sendMessage(msg.chat.id, messages.MESSAGE.WELCOME, {parse_mode:'HTML'});
    });

}

