import { Telegraf } from "telegraf";
console.log(import.meta);
const bot = new Telegraf('TELEGRAM_TOKEN');

const web_link = "https://inspiring-otter-5d331b.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();