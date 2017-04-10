'use strict'

//  const gameEvents = require("./events")
//  const gameUI = require("./ui")

//  this is an empty gameBoard
const cells = new Array(9) // empty game board

const isPlayer = 'X'

//  $('.boardpiece').on('click', getBoardpieceID)

//  const getBoardpieceID = function () {
//  let boardpieceID = $(this).attr('id')
//  console.log(boardpieceID)
//  }

//  const boardpiece = game.value

const data = {
  'game': {
    'cell': {
      'index': 0,
      'value': 'x'
    },
    'over': false
  }
}

//  call makeMove like this:  let player = makeMove(isPlayer) and will return opp value
const makeMove = function makeMove (isPlayer) {
  let boardpiece = isPlayer
  if (boardpiece === 'X') {
    console.log('X') // here we would want to add text to gameBoard
    //  like this:        $(‘.boardpiece’).text(boardpiece)
    $('.boardpiece').text(boardpiece)
    boardpiece = 'O'
  } else {
    boardpiece = 'X'
  }
  return boardpiece
}

const player = makeMove('X')

const gameStats = {
  totalGames,
  totalWins
}

//  testBoard1 = ['X', 'O', 'X', 'X', 'O', '', 'X', '', '']
//  const testBoard2 = ['X', 'O', 'X', 'X', 'O', '', 'O', 'O', '']

//  this function determines if the game over over.  if it is over, returns T or F

//  need a draw

const isWin = function (board, currentPlayer) {
  const gameBoard = board
  const player = currentPlayer
  if (
     // First row check
     (gameBoard[0] === player && gameBoard[1] === player && gameBoard[2] === player) ||
     // example: ["X"," "," ","X"," "," ","X"," "," "]
     // Second row check
     (gameBoard[3] === player && gameBoard[4] === player && gameBoard[5] === player) ||
      // Third row check
     (gameBoard[6] === player && gameBoard[7] === player && gameBoard[8] === player) ||
     // First column check
     (gameBoard[0] === player && gameBoard[3] === player && gameBoard[6] === player) ||
     // Second column check
     (gameBoard[1] === player && gameBoard[4] === player && gameBoard[7] === player) ||
      // Third column check
     (gameBoard[2] === player && gameBoard[5] === player && gameBoard[8] === player) ||
     // Downward Diag check
     (gameBoard[0] === player && gameBoard[4] === player && gameBoard[8] === player) ||
      // Upward Diag check
     (gameBoard[6] === player && gameBoard[4] === player && gameBoard[2] === player)) {
    over = true
    return over
  } else if { // draw scenario in here -

  } else {
    over = false
  }
  return over
}

const game = {
  cells,
  over,
  isPlayer
}

module.exports = {
  cells,
  boardpieceID,
  isPlayer,
  player,
  gameStats,
  game,
  isWin
}
