'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
//const gameEvents = require('/events')

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('i clicked new game ')
  const data = '{}'
  api.createGame(this.data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onMakeMove = function (event) {
  event.preventDefault()
  console.log('onSubmitMove worked!')
  const data = store.game.id
  console.log(this)
  console.log(event.target)
  api.submitMove(data)
    .done(ui.makeMoveSuccess)
    .fail(ui.makeMoveFailure)
}

const onPlayerIs = function (event) {
  event.preventDefault()
  console.log('onPlayerIs ran')
  //const data = getFormFields(this)
  //console.log(data)
  const id = data.id
  console.log('the current player played a ' + this.player)
  api.onPlayerIs(data)
    .then(ui.onPlayerIsSuccess)
    .catch(ui.onPlayerIsFailure)
}

const onClearGame = function (event) {
  event.preventDefault()
  console.log('i clicked clear game ')
//  const data = id
  api.clearGame(data)
    .then(ui.clearGameSuccess)
    .catch(ui.clearGameFailure)
}

const addHandlers = () => {
  $('#createGame').on('click', onCreateGame),
  $('.boardpiece').on('click', onMakeMove),
  $('#clearGame').on('click', onClearGame)
}

module.exports = {
  addHandlers
}
