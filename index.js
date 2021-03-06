const TOKEN = process.env.TELEGRAM_TOKEN;
const emoji = require("node-emoji").emoji;
const TelegramBot = require('node-telegram-bot-api')
const options = {
  webHook: {
    port: process.env.PORT
  }
};
const url = process.env.APP_URL || 'url manzil';
const bot = new TelegramBot(TOKEN, options);

bot.setWebHook(`${url}/bot${TOKEN}`);


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
