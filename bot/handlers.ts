import { Chat } from "grammy/types";

export function renderChatInfo(chat: Chat, threadId?: number): string {
  const lines: string[] = [];

  lines.push(`<b>👋 Welcome!</b>`);
  lines.push(
    `This bot provides basic information about the current Telegram chat — helpful when you need to set up alerts, notifications, or integrations for CI/CD, monitoring, and more.`
  );

  lines.push("\n");
  lines.push(`<b>🔍 Chat Info</b>`);

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

  lines.push("\n");
  lines.push("— — —");
  lines.push(`<u>No user data is stored.</u>`);
  lines.push(
    `Code on <a href="https://github.com/your-repo-url">GitHub</a>, hosted via <a href="https://vercel.com/docs/functions">Vercel Functions</a>.`
  );
  lines.push(`Want to contribute? You're very welcome!`);

  return lines.join("\n");
}
