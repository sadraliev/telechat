import { webhookCallback } from "grammy";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { bot } from "../bot/bot";

const handler = webhookCallback(bot, "https");

export default async function vercelHandler(
  req: VercelRequest,
  res: VercelResponse
) {
  return handler(req, res);
}
