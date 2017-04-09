'use strict'

//  const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

let currentPlayer = 'X'
let gameBoard = ["", "", "", "", "", "", "", "", ""]

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('i clicked new game ')
  currentPlayer = 'X'
  const data = '{}'
  api.createGame(this.data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onTotalGamesByUser = function (event) {
//  event.preventDefault()
  console.log('i clicked to get all games')
  const data = '{}'
  api.totalGamesByUser(this.data)
   .then(ui.totalGamesSuccess)
   .catch(ui.totalGamesFailure)
}

const onClickBoard = function (event) {
  const value = currentPlayer
//  let store.game = data.game
  console.log('enter for loop next')
    if (currentPlayer === 'X') {
        const index = $(this).attr('class')
        console.log('index is ', index)
  //      let games[pieceID] = value
        console.log('the value is ', value)
        console.log('player is ', currentPlayer)
        $(this).text('X')
        gameBoard[index] = value
        let over = isWin(gameBoard, value)
        const data = {
          'game': {
            'cell': {
              'index': +index,
              'value': 'x'
            },
            'over': over
          }
        }
        api.updateGame(data)
          .then(ui.updateGameSuccess)
        console.log('just played a(n) ', currentPlayer, ' in index ', index)
        currentPlayer = 'O'
      } else {
        const index = $(this).attr('class')
        console.log('index is ', index)
        console.log('the value is ', value)
        console.log('player is ', currentPlayer)
        $(this).text('O')
        gameBoard[index] = value
        let over = isWin(gameBoard, value)
        const data = {
          'game': {
            'cell': {
              'index': +index,
              'value': 'o'
            },
            'over': false
          }
        }
        api.updateGame(data)
          .then(ui.updateGameSuccess)
        console.log('just played a(n) ', currentPlayer, ' in index ', index)
        currentPlayer = 'X'
      }
      return currentPlayer
    }

const isWin = function (board, currentPlayer) {
  const gameBoard = board
  const player = currentPlayer
  if (
     // First row check
     ((gameBoard[0] === player) && (gameBoard[1] === player) && (gameBoard[2] === player)) ||
     // example: ["X"," "," ","X"," "," ","X"," "," "]
     // Second row check
     ((gameBoard[3] === player) && (gameBoard[4] === player) && (gameBoard[5] === player)) ||
      // Third row check
     ((gameBoard[6] === player) && (gameBoard[7] === player) && (gameBoard[8] === player)) ||
     // First column check
     ((gameBoard[0] === player) && (gameBoard[3] === player) && (gameBoard[6] === player)) ||
     // Second column check
     ((gameBoard[1] === player) && (gameBoard[4] === player) && (gameBoard[7] === player)) ||
      // Third column check
     ((gameBoard[2] === player) && (gameBoard[5] === player) && (gameBoard[8] === player)) ||
     // Downward Diag check
     ((gameBoard[0] === player) && (gameBoard[4] === player) && (gameBoard[8] === player)) ||
      // Upward Diag check
     ((gameBoard[6] === player) && (gameBoard[4] === player) && (gameBoard[2] === player))) {
    over = true
    return over
  } else if { // draw scenario in here -
    ((gameBoard[0] !== '&nbsp') && (gameBoard[1] !== '&nbsp') && (gameBoard[2] !== '&nbsp') &&
      (gameBoard[3] !== '&nbsp') && (gameBoard[4] !== '&nbsp') && (gameBoard[5] !== '&nbsp') &&
      (gameBoard[6] !== '&nbsp') && (gameBoard[7] !== ''&nbsp') && (gameBoard[8] !== '&nbsp')
      over = true
      return over
  } else {
    over = false
  }
  return over
}
//   let boardpieceID = $(this).attr('class')
//   currentPlayer = 'O'
//   $(this).text(currentPlayer)
//   boardpieceID = $(this).attr('class')
//   console.log('just played a(n) ', currentPlayer, ' in boardpieceID ', boardpieceID)
//   return currentPlayer
//

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
  $('#totalGamesByUser').on('click', onTotalGamesByUser)
}

module.exports = {
  addHandlers,
  onClickBoard,
  onTotalGamesByUser
}
