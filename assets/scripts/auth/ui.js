'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data)
  console.log('sign up success ran.  data is : ', data)
  $('#sign-up-modal').modal('hide')
  $('.sign-up-button').hide()
  $('.sign-out-button').hide()
  $('.navbar-brand').html('<p>You have successfully signed up! To play, sign in.</p>')
  $('.change-password-button').hide()
  $('.display-one-game-button').hide()
  store.user = data.user
}

const signUpFailure = (error) => {
  console.error(error)
  $('.sign-out-button').hide()
  $('.change-password-button').hide()
  $('#change-password-button-modal').hide()
  $('.navbar-brand').html('<p>Your signup was not successful!</p>')
}

const signInSuccess = (data) => {
  console.log('signIn success ran.  data is : ', data)
  store.user = data.user
  $('#sign-up-modal').modal('hide')
  $('#sign-in-modal').modal('hide')
  $('.sign-up-button').hide()
  $('.sign-in-button').hide()
  $('.navbar-brand').html('<p>Your signin was successful!  Choose Game > then Create Game to play.</p>')
  // $('.sign-out-button').show()
  // $('#sign-out-modal').show()
  // $('#sign-out').on('submit', gameEvents.onSignOut)
  // $('#change-password-button').show()
  // $('#change-password').on('submit', gameEvents.onChangePassword)
  // $('.sign-out-button').on('click', gameEvents.onSignOut)
  // // $('.change-password-button').show()
  // $('.change-password-button').on('click', gameEvents.onSignOut)
}

const signInFailure = (error) => {
  console.error('signIn failure ran.  error is: ', error)
  $('#sign-out-button').hide()
  $('#change-password-button').hide()
  $('.navbar-brand').html('<p>Your signin was not successful!</p>')
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
  $('.navbar-brand').html('<p>Your signout was successful!</p>')
}

const signOutFailure = (error) => {
  console.error('sign-out failure ran.  error is: ', error)
  $('.navbar-brand').html('<p>Your signout was not successful!</p>')
  //  $('#sign-out-modal').modal('hide')
}

const changePasswordSuccess = () => {
  console.log('change-password success ran.  and nothing was returned')
  console.log('store is: ', store)
  data.user = null
  console.log('store is: ', store)
  $('.navbar-brand').html('<p>Password change was successful!</p>')
  store.user = data.user
}

const changePasswordFailure = (error) => {
  console.error('change-password failure ran.  error is: ', error)
  $('.navbar-brand').html('<p>Password change was successful!</p>')
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
