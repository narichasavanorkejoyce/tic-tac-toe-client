'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('sign in ran')
  console.log(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
//  $('#sign-up').button('hide')
}

const onSignOut = function (event) {
  // event.preventDefault()
  console.log('sign out ran')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  // event.preventDefault()
  console.log('change password ran')
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

// const displayAuthButtons = function (event) {
//
//   if (ui.onSignInSuccess) {
//     $('sign-out-modal').display()
//     $('change-password-modal').display()
//     $('sign-up-modal').hide()
//   }
// }

module.exports = {
  addHandlers,
  onSignOut,
  onChangePassword
}
