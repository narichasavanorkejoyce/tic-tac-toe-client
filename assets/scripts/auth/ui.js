'use strict'

const store = require('../store')

const newGameSuccess = (data) => {
  console.log(data)
  $('#new-game-modal').modal('hide')
}

const newGameFailure = (error) => {
  console.error(error)
}

const placeXSuccess = (data) => {
  console.log('placeX success ran.  data is : ', data)
  store.user = data.user
  $('#place-X-modal').modal('hide')
}

const placeXFailure = (error) => {
  console.error('signIn failure ran.  error is: ', error)
}

const placeYSuccess = (data) => {
  console.log('placeY success ran.  data is : ', data)
  store.game = data.game
  $('#place-Y-modal').modal('hide')
}

const placeYFailure = (error) => {
  console.error('placeY failure ran.  error is: ', error)
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
  newGameSuccess,
  newGameFailure,
  placeXSuccess,
  placeXFailure,
  placeXSuccess,
  placeXFailure,
  clearGameSuccess,
  clearGameFailure
}
