'use strict'

const store = require('../store')
const gameEvents = require('../game/events.js')

// if (store.user === null) {
//   $('.sign-out-button').hide()
//   $('.change-password-button').hide()
//   $('.display-one-game-button').hide()
// }

const signUpSuccess = (data) => {
  console.log(data)
  console.log('sign up success ran.  data is : ', data)
  $('#sign-up-modal').modal('hide')
  $('.sign-up-button').hide()
  $('.sign-out-button').hide()
  $('.change-password-button').hide()
  $('.display-one-game-button').hide()
  store.user = data.user
}

const signUpFailure = (error) => {
  console.error(error)
  $('#sign-out-button').hide()
  $('#change-password-button-modal').hide()
}

const signInSuccess = (data) => {
  console.log('signIn success ran.  data is : ', data)
  store.user = data.user
  $('#sign-in-modal').modal('hide')
  $('.sign-up-button').hide()
  $('.sign-in-button').hide()
  $('.sign-out-button').on()
  // $('.change-password-button').show()
  // $('.sign-out-button').on()
  $('.change-password-button').on()
  // $('#sign-out-button').on('click', events.onSignOut)
  // $('#change-password-button').on('click', events.onChangePassword)
}

const signInFailure = (error) => {
  console.error('signIn failure ran.  error is: ', error)
  $('#sign-out-button').hide()
  $('#change-password-button').hide()
}

const signOutSuccess = () => {
  console.log('sign-out success ran.  and nothing was returned')
  console.log('store is: ', store)
  store.user = null
  console.log('store is: ', store)
  $('#sign-out-modal').modal('hide')
  $('.sign-up-button').show()
  $('.sign-in-button').show()
  $('.change-password-button').hide()
  $('.sign-out-button').hide()
}

const signOutFailure = (error) => {
  console.error('sign-out failure ran.  error is: ', error)
//  $('#sign-out-modal').modal('hide')
}

const changePasswordSuccess = () => {
  console.log('change-password success ran.  and nothing was returned')
  console.log('store is: ', store)
  data.user = null
  console.log('store is: ', store)
  store.user = data.user
}

const changePasswordFailure = (error) => {
  console.error('change-password failure ran.  error is: ', error)
//  $('#change-password-modal').modal('hide')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
