import { Chat } from "grammy/types";

export function renderChatInfo(chat: Chat, threadId?: number): string {
  const lines: string[] = [];

  lines.push(`<b>📦 Current Chat Details</b>`);
  lines.push(
    `Here is the technical info about this chat — useful for setting up bots, automations, or integrations:`
  );

  const chatInfoDict: Record<string, any> = {
    id: chat.id,
    type: chat.type,
    ...(chat.title && { title: chat.title }),
    ...(chat.username && { username: chat.username }),
    ...(chat.first_name && { first_name: chat.first_name }),
    ...(chat.last_name && { last_name: chat.last_name }),
    ...(chat.is_forum && { is_forum: true }),
    ...(threadId && { message_thread_id: threadId }),
  };

  lines.push(
    `<pre><code class="language-json">${JSON.stringify(
      chatInfoDict,
      null,
      2
    )}</code></pre>`
  );

  lines.push("— — —");
  lines.push(`🔐 <i>We don’t store any user data.</i>`);
  lines.push(
    `🛠 <a href="https://github.com/sadraliev/telescope">Source on GitHub</a>`
  );
  lines.push(
    `<a href="https://vercel.com/docs/functions">🚀 Hosted on Vercel</a>`
  );
  lines.push(`<a href="https://grammy.dev">🤖 Built with grammY</a>`);

  return lines.join("\n");
}

export function renderStartMessage(): string {
  const message = [];
  message.push(
    "👋 <b>Hello!</b> I'm <b>Telescope</b> — your chat information assistant."
  );
  message.push(
    "🔍 I help you retrieve basic details about your chat, such as the chat <b>ID</b> and <b>type</b>."
  );
  message.push("\n<b>Here are the commands you can use:</b>");
  message.push("• <b>/start</b> — Get a greeting and information about me.");
  message.push(
    "• <b>/show</b> — Get details about the current chat (ID, type, title, etc)."
  );
  message.push(
    "\n🛠 You can use me for <b>CI/CD notifications</b>, <b>monitoring</b>, <b>alerts</b>, and more."
  );
  message.push(
    '💻 You can check out the source code on <a href="https://github.com/sadraliev/telescope">GitHub</a>.'
  );
  message.push("\nLet me know how I can assist you! 😊");

  return message.join("\n");
}
