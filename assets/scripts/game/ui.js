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

const clearGameSuccess = () => {
  console.log('clearGame success ran.  and nothing was returned')
  console.log('store is: ', store)
  store.game = null
  console.log('store is: ', store)
//  $('#clearGame').modal('hide')
}

const clearGameFailure = (error) => {
  console.error('clear-game failure ran.  error is: ', error)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  //  makeMoveSuccess,
  //  makeMoveFailure,
  updateGameSuccess,
  updateGameFailure,
  clearGameSuccess,
  clearGameFailure
}
