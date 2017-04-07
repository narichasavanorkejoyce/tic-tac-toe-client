#!/bin/bash
#ID=1 INDEX=0 VALUE=X OVER=false TOKEN=BAhJIiUxZTU5YWVlYzQ2YTk5MDQwNWRlNWI5YzVlMWI5ZTJjMQY6BkVG--762724d1a53fa5704477fd9323d376795361385b sh scripts/update.sh

#The show action is a GET specifing the id of the game to retrieve.
#If the request is successful the status will be 200, OK, and the response
#body will contain JSON for the game requested

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games/:id"
curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "game": {
      "id": 1,
      "cells": ["o","x","o","x","o","x","o","x","o"],
      "over": true,
      "player_x": {
        "id": 1,
        "email": "and@and.com"
      },
      "player_o": {
        "id": 3,
        "email": "dna@dna.com"
      }
    }'
