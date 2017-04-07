'use strict'

//const gameEvents = require("./events")

//this is an empty gameBoard
const gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "] //empty game board

const IsPlayer = {
  id,
  piece,
  email
}
//}"X" //X if it's X's turn, O if it's not X's turn
//
/*const play = function(isPlayer){
  console.log(isPlayer)
  let play = isPlayer
  console.log(play)
  if (play === "X") {
    boardpiece = play //replace w display on click: $('#boardpiece[this.id]').text(playerIs)
    console.log(boardpiece)
    isPlayer = "0"
    console.log(play)
  }
  else {
      boardpiece = "O"
      isPlayer = "X"
        //$(‘#boardpiece[this.id]’).text(playerIs)
     }
     return boardpiece
}
*/

const makeMove = function(isPlayer) { //function accepts isPlayer (X or O as arg
  if(isPlayer === "X") {  //if isPlayer passed is an X (goes first)
    boardpiece = "X"
    console.log(boardpiece)
    isPlayer = "O"
//    $('#0').on('click', text(isPlayer)
  } else {
    isPlayer = "O"
    boardpiece = "O"
    console.log(boardpiece)
    isPlayer("X")
  }
    return boardpiece
}

/*
if (playerIs === ‘X’) {
       playerIs = ‘O’
       $(‘.playerDiv’).text(playerIs)
     } else playerIs = ‘X’
     */


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
  isPlayer,
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
