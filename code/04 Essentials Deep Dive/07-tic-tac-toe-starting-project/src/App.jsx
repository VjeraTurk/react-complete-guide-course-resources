import { useState } from "react"

import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"

function App() {

  // You want to avoid adding a state that handles similar ( the same) data
  // Lift the state from Game Board to App
  const [activePlayer, setActivePlayer] = useState('X')

  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer)=> curActivePlayer === "X" ? "O" : "X")
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';
      if(prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O'
      }
      // The state of activePlayer is not guaranteed, and states should not be merged
      // const updatedTurns = [{ square: {rowIndex, colIndex}, player : activePlayer},...prevTruns]
      const updatedTurns = [{ square: {row: rowIndex, col: colIndex}, player : currentPlayer},...prevTurns]
      return updatedTurns
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}></Player>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}></Player>
        </ol>
        <GameBoard turns = {gameTurns} onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      <Log/>
    </main>
  )
}

export default App
