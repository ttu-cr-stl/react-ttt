import { useGameHistory } from "src/utils/hooks/useGameHistory"
import { Square } from "./Square"


export const History = () => {

    const { history } = useGameHistory()

    return (
        <div className="">
            <span>Games History:</span>
            {history ? history.map((game, i) => (
                <div key={i} className="flex flex-col w-fit mx-12 p-4 space-y-2 border border-black">
                    <div className="flex flex-col space-y-1">
                        <span>Player X:{game.player_X}</span>
                        <span>Player Y:{game.player_O}</span>
                    </div>
                    <div className="flex space-x-2">
                        <span>Winner <b>{game.winner}</b></span>
                        <span>{game.date && game.date.toString()}</span>
                    </div>
                    <div className="w-24 h-24 grid grid-cols-3 grid-rows-3 gap-2">
                        {game.board.map((square, i) => (
                            <Square key={i} value={square} onClick={() => {}} />
                        ))}
                    </div>
                </div>
            )):
                <span>No Games Played Yet or Error</span>
            }
        </div>
    )
}