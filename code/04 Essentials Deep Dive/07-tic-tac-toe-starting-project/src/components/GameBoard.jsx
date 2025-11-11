
import { useState } from "react"
const initialGameBoard = [
[null, null, null],
[null, null, null],
[null, null, null],
]

export default function GameBoard() {

    const [gameBoard, setGameBoard] = useState(initialGameBoard)


    function handleSelectSquare(rowIndex, colIndex){
        setGameBoard((prevGameBoard)=>{
            /**
             * it's also strongly recommended that if your state
             * is an object or array, you update that state
             * in an immutable way, which simply means you create a copy
             * of the old state, so a new object or a new array first,
             * and you then just change that copy instead
             * of that existing object or array.
             */
            const updatedBoard =  [...prevGameBoard.map(innerArray => [...innerArray])]
            updatedBoard[rowIndex][colIndex] = 'X';
            // console.log(updatedBoard[rowIndex][colIndex])
            return updatedBoard;
        })
    }

    return <ol id="game-board">
        {
            gameBoard.map(( row, rowIndex)=><li key={rowIndex}>
                <ol>
                    { row.map( (playerSymbol, colIndex) =>
                    <li key={colIndex}>
                        <button onClick={() => handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)

        }
    </ol>
}