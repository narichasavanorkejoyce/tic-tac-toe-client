#!/bin/bash

#ID=1 TOKEN=BAhJIiUzNWFjOTJjZjMxYzBmNDIwOTg5MzA2MDM5ZDVmYTUzNgY6BkVG--b52d25898d839c01fe3f03e9912e46d9e3c3dea1 sh scripts/sign-out.sh
API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/sign-out/$ID"
curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=$TOKEN"

    echo
