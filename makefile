.PHONY: dev build

include .env
include .env.development.local

dev:
	export DEBUG="grammy*" && npm run start:dev

build:
	npm run build

set-webhook:
	curl -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook?url=${HOST_URL}"