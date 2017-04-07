'use strict'

const config = require('../config')
const store = require('../store')
const logi = require('/logic')

const createGame = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    data
    // data: data is same as just plain data
  })
}

const showGame = function (id) {
  return $.ajax({
    url: app.host + '/games/' + id,
    method: 'GET',
  })
}

const updateGame = () => {
  return $.ajax({
    url: config.apiOrigin + '/game/' + store.game.id, + store.game.value
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.game.token
    }
    // passing cell index, value
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
  createGame,
  showGame,
  updateGame,
  clearGame
}
