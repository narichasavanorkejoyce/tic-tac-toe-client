'use strict'

const store = require('../store')

const createGameSuccess = (data) => {
  console.log(data)
  console.log('game has been created')
  $('#createGame').modal('hide')
  store.game = data.game
}

const createGameFailure = (error) => {
  console.error(error)
}

const totalGamesSuccess = (data) => {
  console.log(data)
  console.log('games have been retrieve')
  $('#totalGamesbyUser').modal('hide')
  store.game = data.game
}

const totalGamesFailure = (error) => {
  console.error(error)
}
/*  const makeMoveSuccess = (game.id) ==> {
  console.log('the data for making a move is : ', data)
  store.game = data.game
  console.log('makeMoveSuccess')
}

const makeMoveFailure = (data) ==> {
  console.error('makeMove failure ran.  error is: ', error)
}
*/
const updateGameSuccess = (data) => {
  console.log('update game success ran.  data is : ', data)
  store.game = data.game
}

const updateGameFailure = (error) => {
  console.error('update game failure ran.  error is: ', error)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  totalGamesSuccess,
  totalGamesFailure,
  //  makeMoveSuccess,
  //  makeMoveFailure,
  updateGameSuccess,
  updateGameFailure
}
