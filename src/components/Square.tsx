import React from "react"
import { Player } from "../types"


export const Square = ({ value, onClick } : {value: Player | null, onClick: () => void}) => {

    return (
        <div onClick={onClick} className={`flex items-center justify-center border border-black rounded-lg font-bold ${value === Player.X ? 'text-green-500' : 'red-green-500'}`}>
            {value}
        </div>
    )
}