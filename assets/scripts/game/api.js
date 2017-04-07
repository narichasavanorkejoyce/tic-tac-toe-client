'use strict'

const config = require('../config')
const store = require('../store')

const newGame = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/game-new',
    method: 'POST',
    data
    // data: data is same as just plain data
  })
}


const clearGame = () => {
  return $.ajax({
    url: config.apiOrigin + '/game/' + store.game.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.game.token
    }
    // data: data is same as just plain data
  })
}

module.exports = {
  newGame,
  placeX,
  placeY,
  clearGame
}
