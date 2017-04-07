'use strict'

const config = require('../config')
const store = require('../store')
const gameEvents = require('./events')
//const logic = require('/logic')

const createGame = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: data is same as just plain data
  })
}

const showGame = function (id) {
  return $.ajax({
    url: app.apiOrigin + '/games/' + store.game.id,
    method: 'GET',
  })
}

const updateGame = () => {
  return $.ajax({
    url: config.apiOrigin + '/game/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.game.token
    }
    // passing cell index, value
  })
}

/*const clearGame = () => {
  return $.ajax({_store.user.token
    url: config.apiOrigin + '/game/' + store.game.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.game.token
    }
    // data: data is same as just plain data
  })
}
*/
module.exports = {
  createGame,
  showGame,
  updateGame
//  clearGame
}
