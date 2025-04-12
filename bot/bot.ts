import { Bot, GrammyError, HttpError } from "grammy";
import { getBotToken } from "./config";
import { renderChatInfo, renderStartMessage } from "./handlers";

const bot = new Bot(getBotToken());

bot.command("start", (ctx) => {
  const message = renderStartMessage();

  bot.api.sendMessage(ctx.chat.id, message, {
    parse_mode: "HTML",
    link_preview_options: {
      is_disabled: true,
    },
  });
});

bot.command("show", (ctx) => {
  const messageId = ctx.message?.message_thread_id;
  const message = renderChatInfo(ctx.chat, messageId);

  bot.api.sendMessage(ctx.chat.id, message, {
    parse_mode: "HTML",
    link_preview_options: {
      is_disabled: true,
    },
  });
});

bot.catch((err) => {
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`);
  const e = err.error;
  if (e instanceof GrammyError) {
    console.error("Error in request:", e.description);
  } else if (e instanceof HttpError) {
    console.error("Could not contact Telegram:", e);
  } else {
    console.error("Unknown error:", e);
  }
});
export { bot };
