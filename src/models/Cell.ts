import { Board } from "./Board";
import { Figure } from "./figures/Figure";
import { Colors } from "./Colors";

export class Cell {
	readonly color: Colors
	readonly x: number
	readonly y: number
	figure: Figure | null
	id: number
	available: boolean
	board: Board
	constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
		this.board = board
		this.x = x
		this.y = y
		this.color = color
		this.figure = figure
		this.id = Math.random()
		this.available = false
	}
}
