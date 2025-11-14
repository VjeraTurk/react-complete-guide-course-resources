import { useState } from "react"

import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"
import GameOver from "./components/GameOver.jsx"

import { WINNING_COMBINATIONS } from './winning-combinations.js'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
  ]


// Helper function
function deriveActivePlayer(gameTurns){

  let currentPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer
}

function App() {

  // You want to avoid adding a state that handles similar ( the same) data
  // Lift the state from Game Board to App
  // const [activePlayer, setActivePlayer] = useState('X')

  const [gameTurns, setGameTurns] = useState([]);

  let gameBoard = [...initialGameBoard.map(array=>[...array])];

  const activePlayer =  deriveActivePlayer(gameTurns)

  for ( const turn of gameTurns) {

    const {square, player} = turn;
    const {row, col} = square;

    gameBoard[row][col] = player;
  }

  let winner = undefined;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol  = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]


    if(firstSquareSymbol
      && firstSquareSymbol === secondSquareSymbol
      && firstSquareSymbol === thirdSquareSymbol){
        winner = firstSquareSymbol;
      }

  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      let currentPlayer = deriveActivePlayer(prevTurns)
      // The state of activePlayer is not guaranteed, and states should not be merged
      // const updatedTurns = [{ square: {rowIndex, colIndex}, player : activePlayer},...prevTruns]
      const updatedTurns = [{ square: {row: rowIndex, col: colIndex}, player : currentPlayer},...prevTurns]
      return updatedTurns
    })
  }

  function handleRestart() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}></Player>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}></Player>
        </ol>
        { (winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}></GameOver>}
        <GameBoard board = {gameBoard} onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
