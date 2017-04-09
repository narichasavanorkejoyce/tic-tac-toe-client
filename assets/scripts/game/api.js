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
      Authorization: 'Token token=' + store.user.token
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

const updateGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const totalGamesbyUser = function (data) {
  return $.ajax({
  url: config.apiOrigin + '/games/' + store.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
     // data: data is same as just plain data
  })
}

module.exports = {
  createGame,
  totalGamesbyUser,
  showGame,
  makeMove,
  updateGame
}
