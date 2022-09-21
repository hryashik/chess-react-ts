import React, { useEffect, useState } from "react";
import './app.css'
import { BoardComponent } from "./components/BoardComponent";
import { Board } from "./models/Board";

const App: React.FC = () => {
	const [board, setBoard] = useState(new Board())

	useEffect(() => {
		start()
	}, [])

	function start() {
		const newBoard = new Board()
		newBoard.initCells()
		newBoard.addFigures()
		setBoard(newBoard)
	}

	return (
		<div className={'app'}>
			<BoardComponent board={board}/>
		</div>
	)
}

export default App
