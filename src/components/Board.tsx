import { calculateWinner } from "../utils"
import { Player, SquareArray } from "../types"
import { Square } from "./Square"

export const Board = ({ xIsNext, squares, onMove } : { xIsNext: boolean, squares: SquareArray, onMove: (newSquares: SquareArray) => void}) => {
    
    const handleMove = (i : number) => {
        if (calculateWinner(squares) || squares[i]) return;

        const newSquares = [...squares]
        if (xIsNext) {
            newSquares[i] = Player.X;
        } else {
            newSquares[i] = Player.O;
        }
        onMove(newSquares)
    }

    const winner = calculateWinner(squares);
    if (winner) {
        var status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <div className="flex flex-col space-y-4 p-4">
            <span>{status}</span>
            <div className="w-64 h-64 grid grid-cols-3 grid-rows-3 gap-2">
                {squares.map((square, i) => (
                    <Square key={i} value={square} onClick={() => handleMove(i)} />
                ))}
            </div>
        </div>
    )
}