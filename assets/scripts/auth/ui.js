'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data)
  console.log('sign up success ran.  data is : ', data)
  $('#sign-up-modal').modal('hide')
  store.user=data.user
}

const signUpFailure = (error) => {
  console.error(error)
//  $('#sign-up-modal').modal('hide')

}

const signInSuccess = (data) => {
  console.log('signIn success ran.  data is : ', data)
  store.user = data.user
  $('#sign-in-modal').modal('hide')
}

const signInFailure = (error) => {
  console.error('signIn failure ran.  error is: ', error)
//  $('#sign-in-modal').modal('hide')
}

const signOutSuccess = () => {
  console.log('sign-out success ran.  and nothing was returned')
  console.log('store is: ', store)
  store.user = null
  console.log('store is: ', store)
  $('#sign-out-modal').modal('hide')
}

const signOutFailure = (error) => {
  console.error('sign-out failure ran.  error is: ', error)
//  $('#sign-out-modal').modal('hide')

}

const changePasswordSuccess = () => {
  console.log('change-password success ran.  and nothing was returned')
  console.log('store is: ', store)
  store.user = null
  console.log('store is: ', store)
  $('#change-password-modal').modal('hide')

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
