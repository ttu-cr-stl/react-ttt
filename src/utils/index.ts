import axios from "axios";
import { Player, PlayerNameType, SquareArray } from "../types";

export const calculateWinner = (
  squares: SquareArray
): Player | null | "Draw" => {
  if (squares.every((e) => e !== null)) return "Draw";

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export const saveGame = async (players: PlayerNameType, winner: Player | "Draw", squares: SquareArray) => {
    const game = await axios.post("http://localhost:5050/games", {
      player_X: players.Player_X,
      player_O: players.Player_O,
      winner: winner,
      board: squares,
      date: new Date(),
    });
    return game;
}
