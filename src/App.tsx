import { useState } from "react";
import { Board } from "./components/Board";
import { Player, SquareArray } from "./types";
import { History } from "./components/History";

function App() {
  const [squares, setSquares] = useState<SquareArray>(Array(9).fill(null));
  const xIsNext = squares.filter(Boolean).length % 2 === 0;

  const onMove = (newSquares: Array<Player | null>) => {
    setSquares(newSquares);
  }

  return (
    <main className="flex flex-row w-screen h-screen space-x-10 py-8">
      <Board xIsNext={xIsNext} squares={squares} onMove={onMove} />
      <History />
    </main>
  );
}

export default App;
