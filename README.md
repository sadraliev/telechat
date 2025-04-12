<p align="center">
  <a href="" target="blank"><img src="./assets/telescope-logo.png" width="200" alt="Telescope Logo" /></a>
</p>

# Telescope — see your chat info. In detail.

This bot is designed to return basic information about a chat. It is primarily used by engineers to easily retrieve chat details such as the chat ID and type, which can be useful for sending notifications in CI/CD systems, monitoring, alerts, and more.

## Features
- Retrieve chat information (ID, type, title, etc.)
- **We do not store any user data.**

## How It Works

The bot will return the following information:
- **Chat ID**: A unique identifier for the chat.
- **Chat Type**: Can be one of the following: "private", "group", "supergroup", or "channel".
- **Title**: Optional. The title of the chat (if it's a group or channel).
- **Username**: Optional. The username associated with the chat.
- **First Name**: Optional. The first name of the other party (in a private chat).
- **Last Name**: Optional. The last name of the other party (in a private chat).

## How to Use

Simply start the bot by sending ["/start", "/show"] message. The bot will respond with the chat details and some information about itself.

Example of usage:

1. Start a conversation with the bot - [telescope bot](https://t.me/tele_scope_bot). 
2. The bot will send a message with your chat ID and other details.
3. Use the information for CI/CD notifications or monitoring purposes.

## Contributions
Feel free to contribute to this !

The bot is hosted on [Vercel](https://vercel.com/), and you can find the [Vercel documentation for Functions here](https://vercel.com/docs/functions).


## License
This project is licensed under the MIT License.
