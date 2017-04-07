#!/bin/bash
#ID=1 INDEX=0 VALUE=X OVER=false TOKEN=BAhJIiUxZTU5YWVlYzQ2YTk5MDQwNWRlNWI5YzVlMWI5ZTJjMQY6BkVG--762724d1a53fa5704477fd9323d376795361385b sh scripts/update.sh

#PATCH	`/games/:id`	game delta	200, OK	game updated
#400 Bad Request	errors
#404 Not Found	empty

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games/:id"
curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
  "game": {
    "cell": {
      "index": 0,
      "value": "x"
    },
    "over": false
  }
}'
