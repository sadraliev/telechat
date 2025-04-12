import dotenv from "dotenv";

dotenv.config({ path: ".env" });
dotenv.config({ path: ".env.development.local", override: true });

if (!process.env.BOT_TOKEN) {
  throw new Error("BOT_TOKEN is unset");
}

export const getBotToken = () => process.env.BOT_TOKEN as string;
export const isDev = () => process.env.NODE_ENV === "development";
export const isProd = () => process.env.NODE_ENV === "production";
export const isLocal = () => process.env.NODE_ENV === "local";
