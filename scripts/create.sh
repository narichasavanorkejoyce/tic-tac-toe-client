#!/bin/bash
#ID=23 TOKEN=BAhJIiVmYjNjMzM3MTcwMjc2ODIyNTMxZWFiMDQ3NDFlNmQ2OAY6BkVG--797ff868af4f1d602ec25c7cfb6124ad76d6e39f sh scripts/create.sh

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games"
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Authorization: Token token=$TOKEN" \
