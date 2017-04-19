'use strict'

const config = require('../config')
const store = require('../store')

const createGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data is same as just plain data
  })
}

// const clearGame = (data) => {
//   return $.ajax({
//     url: config.apiOrigin + '/games/',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + data.game.token
//     }
//     // data: data is same as just plain data
//   })
// }

// const makeMove = function (data) {
//   console.log(data)
//   console.log(store)
//   return $.ajax({
//     url: config.apiOrigin + '/games/' + store.game.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }

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

const totalGamesByUser = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
     // data: data is same as just plain data
  })
}

const displayOneGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/:id',  //  store.game.id
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
//    data
     // data: data is same as just plain data
  })
}

module.exports = {
  createGame,
  // clearGame,
  totalGamesByUser,
  // makeMove,
  updateGame,
  displayOneGame
}
