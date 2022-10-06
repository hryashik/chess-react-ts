import React, {useEffect, useState} from "react";
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";

import {Player} from "../models/Player";
import {Colors} from "../models/Colors";

const BoardComponent: React.FC<BoardProps> = ({ board, setBoard, currentPlayer, swapPlayer }) => {
	const [ selectedCell, setSelectedCell ] = useState<Cell | null>(null)

	function click(cell: Cell) {
		if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
			selectedCell.moveFigure(cell)
			setSelectedCell(null)
			swapPlayer()
		} else {
			if (cell.figure?.color === currentPlayer?.color) {
				setSelectedCell(cell)
			}
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
		<div>
			<h4 className={"title-step"}>Ход: {currentPlayer?.color === Colors.WHITE ? "Белые" : "Черные"}</h4>
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
		</div>

)
}

interface BoardProps {
	board: Board
	setBoard: (board: Board) => void
	currentPlayer: Player | null
	swapPlayer: () => void
}

export default BoardComponent
