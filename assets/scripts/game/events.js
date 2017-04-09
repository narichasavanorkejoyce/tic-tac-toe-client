'use strict'

//  const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('i clicked new game ')
  const data = '{}'
  api.createGame(this.data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onClickBoard = function (event) {
  const data = {
    'game': {
      'cell': {
        'index': 0,
        'value': 'x'
      },
      'over': false
    }
  }
  let currentPlayer = 'X'
  let boardpieceID = $(this).attr('class')
  console.log(boardpieceID)
  console.log('player is ', currentPlayer)
  console.log('enter for loop next')
  for (let i = 0; i < 9; i++) {
    if (currentPlayer === 'X') {
      $(this).text('X')
      currentPlayer = 'O'
      console.log('just played a(n) ', currentPlayer, ' in boardpieceID ', boardpieceID)
      return currentPlayer
    } else {
      $(this).text('O')
      currentPlayer = 'X'
      console.log('just played a(n) ', currentPlayer, ' in boardpieceID ', boardpieceID)
      return currentPlayer
    }
  }
//   let boardpieceID = $(this).attr('class')
//   currentPlayer = 'O'
//   $(this).text(currentPlayer)
//   boardpieceID = $(this).attr('class')
//   console.log('just played a(n) ', currentPlayer, ' in boardpieceID ', boardpieceID)
//   return currentPlayer
//
}

const addHandlers = () => {
  $('#createGame').on('click', onCreateGame)
  $('.0').on('click', onClickBoard)
  $('.1').on('click', onClickBoard)
  $('.2').on('click', onClickBoard)
  $('.3').on('click', onClickBoard)
  $('.4').on('click', onClickBoard)
  $('.5').on('click', onClickBoard)
  $('.6').on('click', onClickBoard)
  $('.7').on('click', onClickBoard)
  $('.8').on('click', onClickBoard)
}

module.exports = {
  addHandlers,
  onClickBoard
}
