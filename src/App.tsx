import { useState } from "react";
import { Board } from "./components/Board";
import { Player, SquareArray } from "./types";

function App() {
  const [squares, setSquares] = useState<SquareArray>(Array(9).fill(null));
  const xIsNext = squares.filter(Boolean).length % 2 === 0;

  const onMove = (newSquares: Array<Player | null>) => {
    setSquares(newSquares);
  }

  return (
    <main className="w-screen h-screen">
      <Board xIsNext={xIsNext} squares={squares} onMove={onMove} />
    </main>
  );
}

export default App;
