import { webhookCallback } from "grammy";
import { bot } from "../bot/bot";
export const config = {
  api: {
    bodyParser: false,
  },
};
export default webhookCallback(bot, "https");
