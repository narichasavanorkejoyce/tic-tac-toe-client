'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onCreateGame = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('i clicked new game')
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onPlayerIs = function (event) {
  event.preventDefault()
  console.log('onPlayerIs ran')
  //const data = getFormFields(this)
  //console.log(data)
  const boardpieceID = game.id
  console.log('the current player played a ' + this.player)
  api.onPlayerIs(data)
    .then(ui.onPlayerIsSuccess)
    .catch(ui.onPlayerIsFailure)
}

const onClearGame = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('i cleared a game')
  api.clearGame(data)
    .then(ui.clearGameSuccess)
    .catch(ui.clearGameFailure)
}

const addHandlers = () => {

  $('#createGame').on('click', onCreateGame),
  $('.boardpiece').on('click', onPlayerIs),
  $('#clearGame').on('click', onClearGame)
}

module.exports = {
  addHandlers
}
