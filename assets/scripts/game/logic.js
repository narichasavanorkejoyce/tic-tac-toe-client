'use strict'

//this is an empty gameBoard
const gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "]

let isPlayer = 'X' //X if it's X's turn, O if it's not X's turn

let play = function(playerIs){
  let play = playerIs
  if (playerIs === ‘X’) {
      $('boardpiece[this.id]').text(playerIs)
       playerIs = ‘O’
        $(‘#boardpiece[index]’).text(playerIs)
     } else playerIs = ‘X’
     return play
}

let gameStats = {
  totalGames,
  totalWins
}

//this function determines if the game over over.  if it is over, returns T or F
const isWin = function(boardpiece, player){
  let over = false
  if (
     // First row check
     (gameBoard[0] === player && gameBoard[1] === player && gameBoard[2] === player) ||
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
     } else {
       over = false
     }
  return over
}

let game = {
  id,
  cells,
  over,
  Player_x,
  Player_y,
}


createGame(player_x, password) {
  let symbol = X
}

resetGame(){}



module.exports = {
  gameBoard,
  isPlayer,
  player,
  gameStats,
  game,
  isWin
}
