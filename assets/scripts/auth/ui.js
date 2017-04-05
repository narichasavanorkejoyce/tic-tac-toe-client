'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('signIn success ran.  data is : ', data)
  store.user = data.user
}

const signInFailure = (error) => {
  console.error('signIn failure ran.  error is: ', error)
}

const signOutSuccess = () => {
  console.log('sign-out success ran.  and nothing was returned')
  console.log('store is: ', store)
  store.user = null
  console.log('store is: ', store)
}

const signOutFailure = (error) => {
  console.error('sign-out failure ran.  error is: ', error)
}

const changePasswordSuccess = () => {
  console.log('change-password success ran.  and nothing was returned')
  console.log('store is: ', store)
  store.user = null
  console.log('store is: ', store)
}

const changePasswordFailure = (error) => {
  console.error('change-password failure ran.  error is: ', error)
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
