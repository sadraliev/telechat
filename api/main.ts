import { webhookCallback } from "grammy";
import { bot } from "../bot/bot";
export const config = {
  api: {
    bodyParser: false,
  },
};
console.log("Webhook function has been invoked");
export default webhookCallback(bot, "https");
