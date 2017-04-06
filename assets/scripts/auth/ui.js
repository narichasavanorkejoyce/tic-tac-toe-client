'use strict'

const store = require('../store')

const newGameSuccess = (data) => {
  console.log(data)
  $('#new-game-modal').modal('hide')
}

const newGameFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
 console.log(‘SignIn success ran. Data is: ‘, data)
 $(‘.sign-out-button’).show()
 $(‘#signInModal’).modal(‘toggle’)
 store.user = data.user
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
  placeYSuccess,
  placeYFailure,
  clearGameSuccess,
  clearGameFailure
}
