import React, { useEffect, useState } from "react";
import './App.css'
import { BoardComponent } from "./components/BoardComponent";
import { Board } from "./models/Board";

const App: React.FC = () => {
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
    <div className={"app"}>
      <BoardComponent board={board}/>
    </div>
  )
}
export default App
