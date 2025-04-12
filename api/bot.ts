import { Bot } from "grammy";
import { getBotToken } from "./config";
import { renderChatInfo } from "./handlers";

const bot = new Bot(getBotToken());

bot.command("start", (ctx) => {
  const messageId = ctx.message?.message_thread_id;
  const message = renderChatInfo(ctx.chat, messageId);
  bot.api.sendMessage(ctx.chat.id, message, {
    parse_mode: "HTML",
  });
});

bot.on("message", (ctx) => {
  const messageId = ctx.message?.message_thread_id;
  const message = renderChatInfo(ctx.chat, messageId);
  bot.api.sendMessage(ctx.chat.id, message, {
    parse_mode: "HTML",
  });
});

export { bot };
