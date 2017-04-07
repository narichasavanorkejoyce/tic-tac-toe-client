'use strict'

//const gameEvents = require("./events")

//this is an empty gameBoard
const gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "] //empty game board

let isPlayer = "X"

//call makeMove like this:  let player = makeMove(isPlayer) and will return opp value
const makeMove = function makeMove (isPlayer) {
  let boardpiece = isPlayer
  if (boardpiece === "X") {
    console.log("X") // here we would want to add text to gameBoard
    //like this:        $(‘.boardpiece’).text(boardpiece)
    $('.boardpiece').text(boardpiece)
    boardpiece = "O"
  } else {
    boardpiece = "X"
  }
  return boardpiece
}

let gameStats = {
  totalGames,
  totalWins
}

let player = "X"
let testBoard = ["X","O"," ","X","O"," ","X"," "," "]

//this function determines if the game over over.  if it is over, returns T or F
const isWin = function(board, player){
  let over = false
  let gameBoard = board
  let player = player
  if (
     // First row check
     (gameBoard[0] === player && gameBoard[1] === player && gameBoard[2] === player) ||
     //example: ["X"," "," ","X"," "," ","X"," "," "]
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
