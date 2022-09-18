import React, { useEffect, useState } from 'react';
import './App.css';
import { Board } from "./models/Board";
import BoardComponent from "./components/BoardComponent";

function App() {
  const [board, setBoard] = useState(new Board())

  function restart() {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  useEffect(() => {
    restart()
  }, [])

  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard}/>
    </div>
  );
}

export default App;
