'use strict'

const config = require('../config')
const store = require('../store')

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

const makeMove = function (data) {
  console.log(data)
  console.log(store)
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.game.token
    },
    data
  })
}

const showGame = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'GET'
  })
}

const updateGame = () => {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.game.token
    }
    // passing cell index, value
  })
}

module.exports = {
  createGame,
  showGame,
  makeMove,
  updateGame
}
