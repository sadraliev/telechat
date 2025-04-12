import { webhookCallback } from "grammy";
import { bot } from "../bot/bot";

export default webhookCallback(bot, "https");
