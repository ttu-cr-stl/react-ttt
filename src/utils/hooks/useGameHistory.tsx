import axios from "axios"
import { useState, useEffect } from "react"
import { Score } from "src/types"


export const useGameHistory = () => {
    const [ history, setHistory ] = useState<Score[] | null>(null)

    useEffect(() => {
        const fetchgGameHistory = async () => {
            try {
                const gameHistory = await axios.get("http://localhost:5050/games").then(res => res.data)
                setHistory(gameHistory)
            } catch (e) {
                console.log(e)
            }
        }

        if (history === null) {
            fetchgGameHistory()
        }
    }, [ history ])

    return ({ history })
}