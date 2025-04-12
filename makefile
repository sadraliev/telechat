.PHONY: dev build

include .env
include .env.development.local

dev:
	export DEBUG="grammy*" && npm run start:dev
build:
	npm run build
set-webhook:
	curl -X POST "https://api.telegram.org/bot${BOT_TOKEN}/setWebhook?url=${HOST_URL}"
get-webhook-info:
	curl "https://api.telegram.org/bot${BOT_TOKEN}/getWebhookInfo"
get-updates:
	curl "https://api.telegram.org/bot${BOT_TOKEN}/getUpdates"
delete-webhook:
	curl -X POST "https://api.telegram.org/bot${BOT_TOKEN}/deleteWebhook"