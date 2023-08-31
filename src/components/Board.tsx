import { useState } from "react"
import { Player, PlayerNameType, SquareArray } from "../types"
import { calculateWinner, saveGame } from "../utils"
import { Square } from "./Square"

export const Board = ({ xIsNext, squares, onMove } : { xIsNext: boolean, squares: SquareArray, onMove: (newSquares: SquareArray) => void}) => {

    const [players , setPlayers] = useState<PlayerNameType>({Player_X: "", Player_O: ""})
    
    const handleMove = async (i : number) => {

        if (squares[i]) return;

        const newSquares = [...squares]
        if (xIsNext) {
            newSquares[i] = Player.X;
        } else {
            newSquares[i] = Player.O;
        }

        const winner = calculateWinner(newSquares);
        if (winner !== null) {
            await saveGame(players, winner, newSquares);
        };

        onMove(newSquares)
    }

    const winner = calculateWinner(squares);
    var status
    switch (winner) {
        case Player.X || Player.O:
            status = 'Winner: ' + winner
            break;
        case "Draw":
            status = "Game is A Draw"
            break;
        default:
            status = 'Next player: ' + (xIsNext ? 'X' : 'O');
            break;
    }

    const newGame = () => {
        window.location.reload();
    }

    return (
        <div className="flex flex-col space-y-4 p-4">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                    <span>Player X</span>
                    <input className="border border-black rounded-sm w-24 h-6" value={players.Player_X} onChange={(e) => setPlayers({...players, Player_X: e.target.value})} type="text" />
                </div>
                <div className="flex items-center space-x-2">
                    <span>Player O</span>
                    <input className="border border-black rounded-sm w-24 h-6" value={players.Player_O} onChange={(e) => setPlayers({...players, Player_O: e.target.value})} type="text" />
                </div>
            </div>
            <span>{status}</span>
            <div className="w-64 h-64 grid grid-cols-3 grid-rows-3 gap-2">
                {squares.map((square, i) => (
                    <Square key={i} value={square} onClick={() => handleMove(i)} />
                ))}
            </div>
            <div onClick={() => newGame()} className="flex items-center justify-center w-fit border border-black rounded-md px-4 py-2 cursor-pointer hover:shadow-md">
                <span>New Game</span>
            </div>
        </div>
    )
}