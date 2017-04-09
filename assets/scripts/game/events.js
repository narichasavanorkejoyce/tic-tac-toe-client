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

const onTotalGamesbyUser = function (event) {
  event.preventDefault()
  console.log('i clicked to get all games')
  const data = '{}'
  api.totalGamesbyUser(this.data)
   .then(ui.totalGamesSuccess)
   .catch(ui.totalGamesFailure)
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
  console.log(data)
  let currentPlayer = 'X'
  const value = currentPlayer
//  const games = []
  console.log('enter for loop next')
  for (let i = 0; i < 9; i++) {
    if (currentPlayer === 'X') {
      const index = $(this).attr('class')
      console.log('index is ', index)
//      let games[pieceID] = value
      console.log('the value is ', value)
      console.log('player is ', currentPlayer)
      $(this).text('X')
      $(this).innerhtml = value
      store.game = data.game
      api.updateGame(this.data)
      console.log('just played a(n) ', currentPlayer, ' in index ', index)
      currentPlayer = 'O'
    } else {
      const index = $(this).attr('class')
      console.log('index is ', index)
      data.game[index] = value
      console.log('the value is ', value)
      console.log('player is ', currentPlayer)
      $(this).text('O')
      console.log('just played a(n) ', currentPlayer, ' in index ', index)
    }
    console.log(data.game)
    return currentPlayer
  }
//   let boardpieceID = $(this).attr('class')
//   currentPlayer = 'O'
//   $(this).text(currentPlayer)
//   boardpieceID = $(this).attr('class')
//   console.log('just played a(n) ', currentPlayer, ' in boardpieceID ', boardpieceID)
//   return currentPlayer
//
}
//
// const clearBoard = function (game) {
//   console.log('Clearboard ran!')
//   const board = game
//   for (let i = 0; i < 9; i++) {
//     boardpieceID = $(this).attr('class')
//     board[boardpieceID] = $(this).text('')
//   }
//   return board
// }

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
  $('#totalGamesbyUser').on('click', totalGamesbyUser)
}

module.exports = {
  addHandlers,
  onClickBoard
}
