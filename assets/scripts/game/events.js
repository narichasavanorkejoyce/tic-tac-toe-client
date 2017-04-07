'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateGame = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onPlayerIs = function (event) {
  event.preventDefault()
  console.log('onPlayerIs ran')
  const data = getFormFields(this)
  console.log(data)
  const boardpieceId = game.id

  api.onPlayerIs(data)
    .then(ui.placeXSuccess)
    .catch(ui.placeXFailure)
}
/*
const onPlaceY = function (event) {
  event.preventDefault()
  console.log('game/events/onPlaceY ran')
  console.log(data)
  const data = getFormFields(this)
  api.onPlaceY(data)
    .then(ui.placeYSuccess)
    .catch(ui.placeYFailure)
}

const onClearGame = function (event) {
  event.preventDefault()
  console.log('game/events/onClearGame ran')
  api.clearGame()
    .then(ui.clearGameSuccess)
    .catch(ui.clearGameFailure)
}

/*const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran')

const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
*/
const addHandlers = () => {
//  ("#new-game").on('click', onNewGame)
  //event.preventDefault();
//  });
  $('#new-game').on('click', onNewGame)
  $('#place-X').on('click', onPlaceX)
  $('#place-Y').on('click', onPlaceX)
  $('#clear-game').on('click', onClearGame)
  $('#boardpiece').on('click', sonPlaceX)
}

module.exports = {
  addHandlers,
  onCreateGame
}
