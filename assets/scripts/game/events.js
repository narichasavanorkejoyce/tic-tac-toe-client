'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const gameStore = require('../gameStore')

let currentPlayer = 'x'
let gameBoard = ['', '', '', '', '', '', '', '', '']


const onCreateGame = function (event) {
  currentPlayer = 'x'
  event.preventDefault()
  $('h1').html('tic-tac-toe')
  console.log('i clicked new game ')
  gameBoard = ['', '', '', '', '', '', '', '', '']
  // let data = {}
  api.createGame() //deleted this from argument: this.data
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
  // $('.0').on('click', onClickBoard)
  // $('.1').on('click', onClickBoard)
  // $('.2').on('click', onClickBoard)
  // $('.3').on('click', onClickBoard)
  // $('.4').on('click', onClickBoard)
  // $('.5').on('click', onClickBoard)
  // $('.6').on('click', onClickBoard)
  // $('.7').on('click', onClickBoard)
  // $('.8').on('click', onClickBoard)
  // $("#element").click(function(){
  // if ($('.boardpiece').data('clicked', true)) {
  //   $('#id'),.border: #d04090)
  // } else {
  //   $('#id'), border: #4e4e4e)
  // }
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
    // $(this).off('click', onClickBoard)
    // gameBoard[index] = value
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
    // $(this).off('click', onClickBoard)
    gameBoard[index] = value
    let over = isWin(gameBoard, value)
    const data = {
      'game': {
        'cell': {
          'index': +index,
          'value': 'o'
        },
        'over': over
      }
    }
    api.updateGame(data)
      .then(ui.updateGameSuccess)
    console.log('just played a(n) ', currentPlayer, ' in index ', index)
    if (over) {
      console.log('Game Over')
//      $('.h1').text('Player ' + player + ' won')
    }
    //hide board
    currentPlayer = 'x'
  }
//  $(this).unbind('click', onClickBoard)
  return currentPlayer
}

const isWin = function (board, currentPlayer) {
  const gameBoard = board
  const player = currentPlayer
  let over = false
  if ((gameBoard[0] === gameBoard[1]) && (gameBoard[1] === gameBoard[2]) && (gameBoard[2] === player)) {
    console.log('player ', player, ' won') // 1st row win
    $('h1').html('<p>Game over.  Player ' + player + ' won.</p>')
    onClearGame()
    return over
  } else if ((gameBoard[3] === gameBoard[4]) && (gameBoard[4] === gameBoard[5]) && (gameBoard[5] === player)) {
    console.log('player ', player, ' won') // 2nd row win
    $('h1').html('<p>Game over.  Player ' + player + ' won.</p>')
    over = true
    onClearGame()
    return over
  } else if ((gameBoard[6] === gameBoard[7]) && (gameBoard[7] === gameBoard[8]) && (gameBoard[8] === player)) {
    console.log('player ', player, ' won') // 3rd row win
    $('h1').html('<p>Game over.  Player ' + player + ' won.</p>')
    over = true
    // onClearGame()
    return over
  } else if ((gameBoard[0] === gameBoard[3]) && (gameBoard[3] === gameBoard[6]) && (gameBoard[6] === player)) {
    console.log('player ', player, ' won') // 1st column win
    $('h1').html('<p>Game over.  Player ' + player + ' won.</p>')
    over = true
    // onClearGame()
    return over
  } else if ((gameBoard[1] === gameBoard[4]) && (gameBoard[4] === gameBoard[7]) && (gameBoard[7] === player)) {
    console.log('player ', player, ' won') // 2nd column win
    $('h1').html('<p>Game over.  Player ' + player + ' won.</p>')
    over = true
    // onClearGame()
    return over
  } else if ((gameBoard[2] === gameBoard[5]) && (gameBoard[5] === gameBoard[8]) && (gameBoard[8] === player)) {
    console.log('player ', player, ' won') // 3rd column win
    $('h1').html('<p>Game over.  Player ' + player + ' won.</p>')
    over = true
    // onClearGame()
    return over
  } else if ((gameBoard[0] === gameBoard[4]) && (gameBoard[4] === gameBoard[8]) && (gameBoard[8] === player)) {
    console.log('player ', player, ' won') // L to R diagonal win
    $('h1').html('<p>Game over.  Player ' + player + ' won.</p>')
    over = true
    // onClearGame()
    return over
  } else if ((gameBoard[2] === gameBoard[4]) && (gameBoard[4] === gameBoard[6]) && (gameBoard[6] === player)) {
    console.log('player ', player, ' won') // R to L diagonal win
    $('h1').html('<p>Game over.  Player ' + player + ' won.</p>')
    over = true
    // onClearGame()
    return over
  } else if (((gameBoard[0] === 'x') || (gameBoard[0] === 'O')) && ((gameBoard[1] === 'x') || (gameBoard[1] === 'O')) && ((gameBoard[2] === 'x') || (gameBoard[2] === 'O')) && ((gameBoard[3] === 'x') || (gameBoard[3] === 'O')) && ((gameBoard[4] === 'x') || (gameBoard[4] === 'O')) && ((gameBoard[5] === 'x') || (gameBoard[5] === 'O')) && ((gameBoard[6] === 'x') || (gameBoard[6] === 'O')) && ((gameBoard[7] === 'x') || (gameBoard[7] === 'O')) && ((gameBoard[8] === 'x') || (gameBoard[8] === 'O'))) {
    console.log('Nobody won! Ending is a cat like Meow!')
    $('h1').html('<p>Game over.  Nobody won.  End is a CAT (like meow).</p>')
    over = true
    let over = true // draw
    return over
  } else {
    let over = false
  }
  return over
}

const onClearGame = function (event) {
//  event.preventDefault()
  console.log('clearBoard started')
  $('.0').html('&nbsp;')
  $('.1').html('&nbsp;')
  $('.2').html('&nbsp;')
  $('.3').html('&nbsp;')
  $('.4').html('&nbsp;')
  $('.5').html('&nbsp;')
  $('.6').html('&nbsp;')
  $('.7').html('&nbsp;')
  $('.8').html('&nbsp;')
  const data = {
    'game': {
      'cell': {
        // 'index': +index,
        // 'value': ' '
      },
      'over': false
    }
  }
  api.clearGame(data)
//  gameBoard = ['', '', '', '', '', '', '', '', '']
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
  onTotalGamesByUser,
  onDispLayOneGame
}
