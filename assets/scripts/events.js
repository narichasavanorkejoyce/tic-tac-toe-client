'use strict'
const gameApi = require('./api')
const gameUI = require('./ui')

//where we write our event handlers

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked

const onSignUp = function(data) {
  event.preventDefault()
  //since buttons refresh pages, need to tell it to ignore that default
  //if a button is not part of a form, it does not refresh page
  console.log('You clicked the sign-in button')
  gameApi.index()
  .then(gameUi.onSuccess)//UI concerns
  .catch(gameUi.onFailure) // UI concerns; build in JS file
    //do some stuff
})

module.exports = {
  onSignIn
}
