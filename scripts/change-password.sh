#!/bin/bash
#ID=13 OLDPW=pass NEWPW=passwd TOKEN=$2a$10$5.DoqrSsKGThA1/Zj1ACmOSBZ/qNKsnaxh2Y3mu24NTgHXsfMV5Pe sh scripts/change-password.sh
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
