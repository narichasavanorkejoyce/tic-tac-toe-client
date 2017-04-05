#!/bin/bash
#ID=15 OLDPW=pass NEWPW=password TOKEN=BAhJIiUxMGQyYjgyNTRiNjExNmUyMTQ3Zjk1MzA0ZWY5YWY2MAY6BkVG--aa3a4fb7406394ec35ec879450fc2a4c96b5188e sh scripts/change-password-json.sh
API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/change-password/$ID"
curl --include --request PATCH "${API}${URL_PATH}" \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'
