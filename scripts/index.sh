#!/bin/bash
#ID=23 TOKEN=BAhJIiUxZTU5YWVlYzQ2YTk5MDQwNWRlNWI5YzVlMWI5ZTJjMQY6BkVG--762724d1a53fa5704477fd9323d376795361385b sh scripts/index.sh

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games[?over=]"
  curl "${API}${URL_PATH}" \
    --include \
    --request POST \
    --header "Authorization: Token token=$TOKEN" \
