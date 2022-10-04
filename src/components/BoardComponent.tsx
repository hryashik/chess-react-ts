import React, { useEffect, useState } from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";
import { Cell } from "../models/Cell";

interface BoardProps {
	board: Board
	setBoard: (board: Board) => void
}

const BoardComponent: React.FC<BoardProps> = ({ board, setBoard }) => {
	const [ selectedCell, setSelectedCell ] = useState<Cell | null>(null)

	function click(cell: Cell) {
		if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
			selectedCell.moveFigure(cell)
			setSelectedCell(null)
		} else if (cell.figure) {
			setSelectedCell(cell)
		}
	}

	function highlightCells() {
		board.highlightCells(selectedCell)
		updateBoard()
	}

	function updateBoard() {
		const newBoard = board.getCopyBoard()
		setBoard(newBoard)
	}
	useEffect(() => {
		highlightCells()
	}, [selectedCell])

	return (
		<div className={'board'}>
			{board.cells.map((row, idx) =>
				<React.Fragment key={idx}>
					{row.map(cell =>
						<CellComponent
							key={cell.id}
							cell={cell}
							selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
							click={click}
						/>
					)}
				</React.Fragment>
			)}
		</div>
	)
}

export default BoardComponent
