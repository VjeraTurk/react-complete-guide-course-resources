/* moved to App.jsx
const initialGameBoard = [
[null, null, null],
[null, null, null],
[null, null, null],
]
*/
export default function GameBoard({onSelectSquare, board}) {

    /* Logic moved to App.jsx

    let gameBoard = initialGameBoard;

    // deriving state from turns
    for ( const turn of turns) {

        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }*/

    /* Logic moved to App.jsx (state lifted up)
    const [gameBoard, setGameBoard] = useState(initialGameBoard)


    function handleSelectSquare(rowIndex, colIndex){
        setGameBoard((prevGameBoard)=>{

             // it's also strongly recommended that if your state
             // is an object or array, you update that state
             // in an immutable way, which simply means you create a copy
             // of the old state, so a new object or a new array first,
             // and you then just change that copy instead
             // of that existing object or array.

            const updatedBoard =  [...prevGameBoard.map(innerArray => [...innerArray])]
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            // console.log(updatedBoard[rowIndex][colIndex])
            return updatedBoard;
        })

        onSelectSquare();

    }
    */
    return <ol id="game-board">
        {
            board.map(( row, rowIndex)=><li key={rowIndex}>
                <ol>
                    { row.map( (playerSymbol, colIndex) =>
                    <li key={colIndex}>
                        <button onClick={() => onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol!==null}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)

        }
    </ol>
}