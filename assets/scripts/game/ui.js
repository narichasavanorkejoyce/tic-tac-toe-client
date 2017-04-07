'use strict'

const store = require('../store')

const createGameSuccess = (data) => {
  console.log(data)
  console.log('game has been created')
  $('#new-game-modal').modal('hide')
  store.game = data.game
  
}

const createGameFailure = (error) => {
  console.error(error)
}

const showGameSuccess = (data) => {
  console.log('games for a user are show successfully.  data is : ', data)
  store.user = data.user
  $('#place-X-modal').modal('hide')
}

const showGameFailure = (error) => {
  console.error('showGame failure ran.  error is: ', error)
}

const updateGameSuccess = (data) => {
  console.log('update game success ran.  data is : ', data)
  store.game = data.game
  $('#place-Y-modal').modal('hide')
}

const updateGameFailure = (error) => {
  console.error('update game failure ran.  error is: ', error)
}

const clearGameSuccess = () => {
  console.log('clearGame success ran.  and nothing was returned')
  console.log('store is: ', store)
  store.game = null
  console.log('store is: ', store)
  $('#clear-game-modal').modal('hide')
}

const clearGameFailure = (error) => {
  console.error('clear-game failure ran.  error is: ', error)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  showGameSuccess,
  showGameFailure,
  updateGameSuccess,
  updateGameFailure,
  clearGameSuccess,
  clearGameFailure
}
