import { webhookCallback } from "grammy";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { bot } from "../bot/bot";

export const config = {
  api: {
    bodyParser: false,
  },
};
const handler = webhookCallback(bot, "https");

export default async function vercelHandler(
  req: VercelRequest,
  res: VercelResponse
) {
  console.log("Incoming request to webhook!");
  return handler(req, res);
}
