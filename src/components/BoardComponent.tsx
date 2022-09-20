import React, { useEffect, useState } from "react";
import { Board } from "../models/Board";
import { CellComponent } from "./CellComponent";

interface BoardProps {
	board: Board
}

export const BoardComponent: React.FC<BoardProps> = ({board}) => {
	return (
		<div className={'board'}>
			{board.cells.map((row, idx) =>
				<React.Fragment key={idx}>
					{row.map(cell =>
						<CellComponent cell={cell} key={cell.id}/>
					)}
				</React.Fragment>
			)}
		</div>
	)
}
