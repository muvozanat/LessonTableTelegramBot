//const TOKEN = '2031323019:AAE9hiIng2APgdr03SQor9_6pamXDsVeGNI';
//const TelegramBot = require('node-telegram-bot-api');
//const options = {
//  webHook: {
    // Port to which you should bind is assigned to $PORT variable
    // See: https://devcenter.heroku.com/articles/dynos#local-environment-variables
    //port: 443
    // you do NOT need to set up certificates since Heroku provides
    // the SSL certs already (https://<app-name>.herokuapp.com)
    // Also no need to pass IP because on Heroku you need to bind to 0.0.0.0
//  }
//};
// Heroku routes from port :443 to $PORT
// Add URL of your app to env variable or enable Dyno Metadata
// to get this automatically
// See: https://devcenter.heroku.com/articles/dyno-metadata
//const url = 'https://fillbot.herokuapp.com:443';
//const bot = new TelegramBot(TOKEN, options);


// This informs the Telegram servers of the new webhook.
// Note: we do not need to pass in the cert, as it already provided
//bot.setWebHook(`${url}/bot${TOKEN}`)


// process.env.NTBA_FIX_319 = 1;

//Inserindo seu bot-Token na constante 'TOKEN'
//const TOKEN ='2031323019:AAE9hiIng2APgdr03SQor9_6pamXDsVeGNI';



  
   process.env.NTBA_FIX_319 = 1;

//Inserindo seu bot-Token na constante 'TOKEN'
const TOKEN = process.env.TELEGRAM_TOKEN || '1998089943:AAEOwndrlH5h6bNXLjSSDiFfpwY7EnRG-Gc';

const TelegramBot = require('node-telegram-bot-api')
const options = {
  webHook: {
    port: process.env.PORT
  }
};
const url = process.env.APP_URL || 'https://commandrirbot.herokuapp.com:443';
const bot = new TelegramBot(TOKEN, options);

bot.setWebHook(`${url}/bot${TOKEN}`);

 







let emoji = require("node-emoji").emoji;

bot.on("message", (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  const name = "Salom kunni tanlang" ;
  if (text === "/start") {
    bot.sendMessage(chatId, name, {
      reply_markup: {
        keyboard: [
          [`${emoji.arrow_right} Dushanba`, `${emoji.arrow_right} Seshanba`],
          [`${emoji.arrow_right} Chorshanba`, `${emoji.arrow_right} Payshanba`],
          [`${emoji.arrow_right} Juma`, `${emoji.arrow_right} Shanba`],
        ],
      },
    });
  }

  if (text === `${emoji.arrow_right} Dushanba`) {
    bot.sendMessage(
      chatId,
      `${emoji.one} Kompyuter arxitekturasi (leksiya) <i>O'razmetov T.</i> ${emoji.door} <b>314</b> \n${emoji.two} Kompyuter tarmoqlari (leksiya) <i>Axmedov J.</i> ${emoji.door} <b>314</b>`,
      { parse_mode: "HTML" }
    );
  }
  if (text === `${emoji.arrow_right} Seshanba`) {
    bot.sendMessage(
      chatId,
      `${emoji.one} Kompyuter arxitekturasi (amaliyot) <i>O'razmetov T.</i> ${emoji.door} <b>302</b> \n${emoji.two} Raqamli qurilmalarni loyihalashga kirish (leksiya) <i>Setmetov N.U.</i> ${emoji.door} <b>314</b> \n${emoji.three} Raqamli qurilmalarni loyihalashga kirish (tajriba) <i>Omonov I. / Samandarov B.</i> ${emoji.door} <b>206 / 209</b> `,
      { parse_mode: "HTML" }
    );
  }
  if (text === `${emoji.arrow_right} Chorshanba`) {
    bot.sendMessage(
      chatId,
      `${emoji.one} Tizimlar va signallarni qayta ishlash (leksiya) <i>Masharipov O.</i> ${emoji.door} <b>314</b> \n${emoji.two} Pedagogika. Psixologiya (leksiya) <i>Xajiyeva I.</i> ${emoji.door} <b>314</b> \n${emoji.three} Kompyuter tarmoqlari (tajriba) <i>Axmedov J. / Djumaniyazov O</i> \n ${emoji.door} <b>206 / 209</b>`,
      { parse_mode: "HTML" }
    );
  }
  if (text === `${emoji.arrow_right} Payshanba`) {
    bot.sendMessage(
      chatId,
      `${emoji.one} Kompyuter tarmoqlari (leksiya) <i>Axmedov J.</i> ${emoji.door} <b>312</b> \n${emoji.two} Tizimlar va signallarni qayta ishlash (amaliyot) <i>Masharipov O.</i> ${emoji.door} <b>302</b> \n${emoji.three} Raqamli qurilmalarni loyihalashga kirish (tajriba) <i>Omonov I. / Samandarov B.</i> ${emoji.door} <b>206 / 209</b>`,
      { parse_mode: "HTML" }
    );
  }
  if (text === `${emoji.arrow_right} Juma`) {
    bot.sendMessage(
      chatId,
      `${emoji.one} Tizimlar va signallarni qayta ishlash (leksiya) <i>Masharipov O.</i> ${emoji.door} <b>314</b> \n${emoji.two} Murabbiylik soati ${emoji.door} <b>Ochiq xona</b>`,
      { parse_mode: "HTML" }
    );
  }
  if (text === `${emoji.arrow_right} Shanba`) {
    bot.sendMessage(
      chatId,
      `${emoji.one} Kompyuter arxitekturasi (leksiya) <i>O'razmetov T.</i> ${emoji.door} <b>314</b> \n${emoji.two} Pedagogika. Psixologiya (seminar) <i>Matyazova N.</i> ${emoji.door} <b>303</b> `,
      { parse_mode: "HTML" }
    );
  }
});
