'use strict'

//  const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('i clicked new game ')
  const data = '{}'
  api.createGame(this.data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onMakeMove = function (event) {
  console.log('onMakeMove worked!')
  $(this).text('X')
  //  const data = data.game
  //  console.log(this)
  //  console.log(event.target)
  //  api.submitMove(data)
  //  .done(ui.makeMoveSuccess)
  //  .fail(ui.makeMoveFailure)
}

const onPlayerIs = function (event) {
  event.preventDefault()
  console.log('onPlayerIs ran')
  //  const data = getFormFields(this)
  //  console.log(data)
  //  const store.user.id = data
  console.log('the current player played a ' + this.player)
  //  api.onPlayerIs(data)
    .then(ui.onPlayerIsSuccess)
    .catch(ui.onPlayerIsFailure)
}

const addHandlers = () => {
  $('#createGame').on('click', onCreateGame)
  $('.boardpiece').on('click', onMakeMove)
}

module.exports = {
  addHandlers,
  onMakeMove
}
