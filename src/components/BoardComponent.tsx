import React, { useState } from "react";
import { Board } from "../models/Board";
import { CellComponent } from "./CellComponent";
import { Cell } from "../models/Cell";

type BoardProps = {
	board: Board
}

export const BoardComponent: React.FC<BoardProps> = ({ board }) => {
	const [ selectedCell, setSelectedCell ] = useState<null | Cell>(null)

	function click(cell: Cell): void {
		if (cell.figure) {
			setSelectedCell(cell)
		}
		if (selectedCell) {

		}
	}

	return (
		<div className={'board'}>
			{board.cells.map((raw, idx) =>
				<React.Fragment key={idx}>
					{raw.map(cell =>
						<CellComponent
							cell={cell}
							key={cell.id}
							selected={selectedCell?.x === cell.x && selectedCell?.y === cell.y}
							click={click}
						/>
					)}
				</React.Fragment>
			)}
		</div>
	)
}
