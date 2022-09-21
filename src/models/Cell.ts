import { Colors } from "./Colors-type";
import { Figure } from "./figures/Figure";

export class Cell {
	x: number
	y: number
	color: Colors
	figure: Figure | null
	id: number
	constructor(x: number, y: number, color: Colors) {
		this.x = x
		this.y = y
		this.color = color
		this.figure = null
		this.id = Math.random()
	}
}
