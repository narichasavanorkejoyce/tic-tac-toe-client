'use strict'

//  const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const blankBoardPiece0 = $('.0').clone()
const blankBoardPiece1 = $('.1').clone()
const blankBoardPiece2 = $('.2').clone()
const blankBoardPiece3 = $('.3').clone()
const blankBoardPiece4 = $('.4').clone()
const blankBoardPiece5 = $('.5').clone()
const blankBoardPiece6 = $('.6').clone()
const blankBoardPiece7 = $('.7').clone()
const blankBoardPiece8 = $('.8').clone()

let currentPlayer = 'X'
let gameBoard = ['', '', '', '', '', '', '', '', '']

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('i clicked new game ')
  currentPlayer = 'X'
  const data = '{}'
  api.createGame(this.data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onClearBoard = function (event) {
  event.preventDefault()
  console.log('clearBoard worked')
  $('.0').replaceWith(blankBoardPiece0.clone())
  $('.1').replaceWith(blankBoardPiece1.clone())
  $('.2').replaceWith(blankBoardPiece2.clone())
  $('.3').replaceWith(blankBoardPiece3.clone())
  $('.4').replaceWith(blankBoardPiece4.clone())
  $('.5').replaceWith(blankBoardPiece5.clone())
  $('.6').replaceWith(blankBoardPiece6.clone())
  $('.7').replaceWith(blankBoardPiece7.clone())
  $('.8').replaceWith(blankBoardPiece8.clone())
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
  let over = false
  if ((gameBoard[0] === gameBoard[1]) && (gameBoard[1] === gameBoard[2]) && (gameBoard[2] === player)) {
    console.log('player ', player, ' won') // 1st row win
    $('p').text('Player ', player, ' won!')
    over = true
    return over
  } else if ((gameBoard[3] === gameBoard[4]) && (gameBoard[4] === gameBoard[5]) && (gameBoard[5] === player)) {
    console.log('player ', player, ' won') // 2nd row win
    $('.displayWinner').text('Player ', player, ' won!')
    over = true
    return over
  } else if ((gameBoard[6] === gameBoard[7]) && (gameBoard[7] === gameBoard[8]) && (gameBoard[8] === player)) {
    console.log('player ', player, ' won') // 3rd row win
    $('.displayWinner').text('Player ', player, ' won!')
    over = true
    return over
  } else if ((gameBoard[0] === gameBoard[3]) && (gameBoard[3] === gameBoard[6]) && (gameBoard[6] === player)) {
    console.log('player ', player, ' won') // 1st column win
    $('.displayWinner').text('Player ', player, ' won!')
    over = true
    return over
  } else if ((gameBoard[1] === gameBoard[4]) && (gameBoard[4] === gameBoard[7]) && (gameBoard[7] === player)) {
    console.log('player ', player, ' won') // 2nd column win
    $('.displayWinner').text('Player ', player, ' won!')
    over = true
    return over
  } else if ((gameBoard[2] === gameBoard[5]) && (gameBoard[5] === gameBoard[8]) && (gameBoard[8] === player)) {
    console.log('player ', player, ' won') // 3rd column win
    $('.displayWinner').text('Player ', player, ' won!')
    over = true
    return over
  } else if ((gameBoard[0] === gameBoard[4]) && (gameBoard[4] === gameBoard[8]) && (gameBoard[8] === player)) {
    console.log('player ', player, ' won') // L to R diagonal win
    $('.displayWinner').text('Player ', player, ' won!')
    over = true
    return over
  } else if ((gameBoard[2] === gameBoard[4]) && (gameBoard[4] === gameBoard[6]) && (gameBoard[6] === player)) {
    console.log('player ', player, ' won') // R to L diagonal win
    $('.displayWinner').text('Player ', player, ' won!')
    over = true
    return over
  } else if ((gameBoard[0] === ('X' || 'O')) && (gameBoard[1] === ('X' || 'O')) && (gameBoard[2] === ('X' || 'O')) && (gameBoard[3] === ('X' || 'O')) && (gameBoard[4] === ('X' || 'O')) && (gameBoard[5] === ('X' || 'O')) && (gameBoard[6] === ('X' || 'O')) && (gameBoard[7] === ('X' || 'O'))) {
    $('.displayWinner').text('Nobody won! Ending is a cat like Meow!')
    let over = true // draw
    return over
  } else {
    let over = false
  }
  return over
}

const addHandlers = () => {
  $('#createGame').on('click', onCreateGame)
  $('#clearBoard').on('click', onClearBoard)
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
  onClearBoard,
  onTotalGamesByUser
}
