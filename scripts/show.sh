#!/bin/bash
#ID=172 TOKEN=BAhJIiU2YjgxZWVhNjQxZDBjOTA0YWE0YjM3MDA4MGZhMTZmOAY6BkVG--09ead02a3e17aa3172c551363c6ef99f4b5426d1 sh scripts/show.sh

#The show action is a GET specifing the id of the game to retrieve.
#If the request is successful the status will be 200, OK, and the response
#body will contain JSON for the game requested

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games/:id"
curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token id=$ID" \

  const displayOneGame = function (data) {
    return $.ajax({
      url: config.apiOrigin + '/games/:id',  //  store.game.id
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + store.game.id
      }
  //    data
       // data: data is same as just plain data
    })
  }
