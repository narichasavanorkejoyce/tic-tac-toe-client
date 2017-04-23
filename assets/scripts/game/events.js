'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

let currentPlayer = 'x'
let gameWinner = false
let numberMoves = 0
let gameBoard = ['', '', '', '', '', '', '', '', '']
let over = false

const onCreateGame = function (event) {
  onClearGame()
  // event.preventDefault()
  $('h1').html('tic-tac-toe.<br/>you have created a new game')
  currentPlayer = 'x'
  gameWinner = false
  numberMoves = 0
  gameBoard = ['', '', '', '', '', '', '', '', '']
  over = false
  $('.0').on('click', onClickBoard)
  $('.1').on('click', onClickBoard)
  $('.2').on('click', onClickBoard)
  $('.3').on('click', onClickBoard)
  $('.4').on('click', onClickBoard)
  $('.5').on('click', onClickBoard)
  $('.6').on('click', onClickBoard)
  $('.7').on('click', onClickBoard)
  $('.8').on('click', onClickBoard)
  api.createGame()
      .then(ui.createGameSuccess)
  // currentPlayer = 'x'
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

const onDispLayOneGame = function (event) {
  event.preventDefault()
  console.log('display one game was clicked')
  const data = getFormFields(data)
  api.displayOneGame(data)
    .then(ui.displayOneGameSuccess)
    .catch(ui.displayOneGameFailure)
}

const onClickBoard = function (event) {
  const value = currentPlayer
  if (currentPlayer === 'x') {
    console.log('player is ', currentPlayer)
    const index = $(this).attr('class')
    console.log('index is ', index)
    console.log('the value is ', value)
    $(this).text('x')
    gameBoard[index] = 'x'
    $(this).off('click', onClickBoard)
    // gameBoard[index] = value
    over = isOver(gameBoard, value)
    console.log('over equals ' + over)
    const data = {
      'game': {
        'cell': {
          'index': +index,
          'value': 'x'
        },
        'over': over
      }
    }
    numberMoves = numberMoves + 1
    console.log(store)
    api.updateGame(data)
      .then(ui.updateGameSuccess)
    console.log('just played a(n) ', currentPlayer, ' in index ', index)
    if (over) {
      console.log('Game Over')
    }
    currentPlayer = 'o'
  } else {
    const index = $(this).attr('class')
    console.log('index is ', index)
    console.log('the value is ', value)
    console.log('player is ', currentPlayer)
    $(this).text('o')
    $(this).off('click', onClickBoard)
    gameBoard[index] = value
    over = isOver(gameBoard, value)
    const data = {
      'game': {
        'cell': {
          'index': +index,
          'value': 'o'
        },
        'over': over
      }
    }
    numberMoves += 1
    api.updateGame(data)
      .then(ui.updateGameSuccess)
    console.log('just played a(n) ', currentPlayer, ' in index ', index)
    if (over) {
      console.log('Game Over')
    }
    // hide board
    currentPlayer = 'x'
  }
  return currentPlayer
}

const isOver = function (board, currentPlayer) {
  gameBoard = board
  let player = currentPlayer
  over = false
  if ((gameBoard[0] === gameBoard[1]) && (gameBoard[1] === gameBoard[2]) && (gameBoard[2] === player)) {
    console.log('player ', player, ' won') // 1st row win
    $('h1').html('<p>Game over.  Player ' + player + ' won.<br/>Click Games > Clear Board then Choose Create Game to Play Again</p>')
    // onClearGame()
    $('.0').off('click')
    $('.1').off('click')
    $('.2').off('click')
    $('.3').off('click')
    $('.4').off('click')
    $('.5').off('click')
    $('.6').off('click')
    $('.7').off('click')
    $('.8').off('click')
    gameWinner = true
    console.log(gameWinner)
    // onClearGame()
    return over
  } else if ((gameBoard[3] === gameBoard[4]) && (gameBoard[4] === gameBoard[5]) && (gameBoard[5] === player)) {
    console.log('player ', player, ' won') // 2nd row win
    $('h1').html('<p>Game over.  Player ' + player + ' won.  Clear Board then Choose Create Game to Play Again</p>')
    over = true
    // onClearGame()
    $('.0').off('click', onClickBoard)
    $('.1').off('click', onClickBoard)
    $('.2').off('click', onClickBoard)
    $('.3').off('click', onClickBoard)
    $('.4').off('click', onClickBoard)
    $('.5').off('click', onClickBoard)
    $('.6').off('click', onClickBoard)
    $('.7').off('click', onClickBoard)
    $('.8').off('click', onClickBoard)
    gameWinner = true
    console.log(gameWinner)
    // onClearGame()
    return over
  } else if ((gameBoard[6] === gameBoard[7]) && (gameBoard[7] === gameBoard[8]) && (gameBoard[8] === player)) {
    console.log('player ', player, ' won') // 3rd row win
    $('h1').html('<p>Game over.  Player ' + player + ' won.  Clear Board then Choose Create Game to Play Again</p>')
    over = true
    // onClearGame()
    $('.0').off('click', onClickBoard)
    $('.1').off('click', onClickBoard)
    $('.2').off('click', onClickBoard)
    $('.3').off('click', onClickBoard)
    $('.4').off('click', onClickBoard)
    $('.5').off('click', onClickBoard)
    $('.6').off('click', onClickBoard)
    $('.7').off('click', onClickBoard)
    $('.8').off('click', onClickBoard)
    gameWinner = true
    console.log(gameWinner)
    // onClearGame()
    return over
  } else if ((gameBoard[0] === gameBoard[3]) && (gameBoard[3] === gameBoard[6]) && (gameBoard[6] === player)) {
    console.log('player ', player, ' won') // 1st column win
    $('h1').html('<p>Game over.  Player ' + player + ' won.  Clear Board then Choose Create Game to Play Again</p>')
    over = true
    // onClearGame()
    $('.0').off('click', onClickBoard)
    $('.1').off('click', onClickBoard)
    $('.2').off('click', onClickBoard)
    $('.3').off('click', onClickBoard)
    $('.4').off('click', onClickBoard)
    $('.5').off('click', onClickBoard)
    $('.6').off('click', onClickBoard)
    $('.7').off('click', onClickBoard)
    $('.8').off('click', onClickBoard)
    gameWinner = true
    console.log(gameWinner)
    // onClearGame()
    return over
  } else if ((gameBoard[1] === gameBoard[4]) && (gameBoard[4] === gameBoard[7]) && (gameBoard[7] === player)) {
    console.log('player ', player, ' won') // 2nd column win
    $('h1').html('<p>Game over.  Player ' + player + ' won.  Clear Board then Choose Create Game to Play Again</p>')
    over = true
    // onClearGame()
    $('.0').off('click', onClickBoard)
    $('.1').off('click', onClickBoard)
    $('.2').off('click', onClickBoard)
    $('.3').off('click', onClickBoard)
    $('.4').off('click', onClickBoard)
    $('.5').off('click', onClickBoard)
    $('.6').off('click', onClickBoard)
    $('.7').off('click', onClickBoard)
    $('.8').off('click', onClickBoard)
    gameWinner = true
    console.log(gameWinner)
    // onClearGame()
    return over
  } else if ((gameBoard[2] === gameBoard[5]) && (gameBoard[5] === gameBoard[8]) && (gameBoard[8] === player)) {
    console.log('player ', player, ' won') // 3rd column win
    $('h1').html('<p>Game over.  Player ' + player + ' won.  Clear Board then Choose Create Game to Play Again</p>')
    over = true
    // onClearGame()
    $('.0').off('click', onClickBoard)
    $('.1').off('click', onClickBoard)
    $('.2').off('click', onClickBoard)
    $('.3').off('click', onClickBoard)
    $('.4').off('click', onClickBoard)
    $('.5').off('click', onClickBoard)
    $('.6').off('click', onClickBoard)
    $('.7').off('click', onClickBoard)
    $('.8').off('click', onClickBoard)
    gameWinner = true
    console.log(gameWinner)
    // onClearGame()
    return over
  } else if ((gameBoard[0] === gameBoard[4]) && (gameBoard[4] === gameBoard[8]) && (gameBoard[8] === player)) {
    console.log('player ', player, ' won') // L to R diagonal win
    $('h1').html('<p>Game over.  Player ' + player + ' won.  Clear Board then Choose Create Game to Play Again</p>')
    over = true
    // onClearGame()
    $('.0').off('click', onClickBoard)
    $('.1').off('click', onClickBoard)
    $('.2').off('click', onClickBoard)
    $('.3').off('click', onClickBoard)
    $('.4').off('click', onClickBoard)
    $('.5').off('click', onClickBoard)
    $('.6').off('click', onClickBoard)
    $('.7').off('click', onClickBoard)
    $('.8').off('click', onClickBoard)
    gameWinner = true
    console.log(gameWinner)
    // onClearGame()
    return over
  } else if ((gameBoard[2] === gameBoard[4]) && (gameBoard[4] === gameBoard[6]) && (gameBoard[6] === player)) {
    console.log('player ', player, ' won') // R to L diagonal win
    $('h1').html('<p>Game over.  Player ' + player + ' won.  Clear Board then Choose Create Game to Play Again</p>')
    over = true
    // onClearGame()
    $('.0').off('click', onClickBoard)
    $('.1').off('click', onClickBoard)
    $('.2').off('click', onClickBoard)
    $('.3').off('click', onClickBoard)
    $('.4').off('click', onClickBoard)
    $('.5').off('click', onClickBoard)
    $('.6').off('click', onClickBoard)
    $('.7').off('click', onClickBoard)
    $('.8').off('click', onClickBoard)
    gameWinner = true
    console.log(gameWinner)
    // onClearGame()
    return over
  } else if ((numberMoves === 8) && (over === false)) {
    console.log('player ', player, ' won')
    console.log('numberMoves: ', numberMoves)
    console.log(gameWinner)
    console.log('Nobody won! Ending is a cat like Meow!')
    $('h1').html('<p>Game over.  Nobody won.  End is a CAT (like meow).  Clear Board then Choose Create Game to Play Again</p>')
    gameWinner = true
    over = true
  } else {
    over = false
  }
  return over
}

const onClearGame = function (event) {
//  event.preventDefault()
  console.log('clearBoard started')
  currentPlayer = 'x'
  gameWinner = false
  numberMoves = 0
  over = false
  gameBoard = ['', '', '', '', '', '', '', '', '']
  $('.0').html('&nbsp;')
  $('.1').html('&nbsp;')
  $('.2').html('&nbsp;')
  $('.3').html('&nbsp;')
  $('.4').html('&nbsp;')
  $('.5').html('&nbsp;')
  $('.6').html('&nbsp;')
  $('.7').html('&nbsp;')
  $('.8').html('&nbsp;')
  $('.0').off('click', onClickBoard)
  $('.1').off('click', onClickBoard)
  $('.2').off('click', onClickBoard)
  $('.3').off('click', onClickBoard)
  $('.4').off('click', onClickBoard)
  $('.5').off('click', onClickBoard)
  $('.6').off('click', onClickBoard)
  $('.7').off('click', onClickBoard)
  $('.8').off('click', onClickBoard)
  $('h1').html('tic-tac-toe.<br/>You cleared the game.  Click Games > Create Game to play again.')
}

const addHandlers = () => {
  $('#createGame').on('click', onCreateGame)
  $('#clearBoard').on('click', onClearGame)
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
  $('#display-one-game-modal').on('click', onDispLayOneGame)
  $('.dropdown-games').on()
}

module.exports = {
  addHandlers,
  onClickBoard,
  onClearGame,
  onTotalGamesByUser
}
