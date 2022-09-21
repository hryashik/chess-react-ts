import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colors-type";
import whiteLogo from '../../assets/white-queen.png'
import blackLogo from '../../assets/black-queen.png'
import { Cell } from "../Cell";

export class Queen extends Figure {
	readonly name: FigureNames
	readonly color: Colors
	readonly logo: typeof whiteLogo
	constructor(cell: Cell, color: Colors) {
		super(cell, color);
		this.name = FigureNames.Queen
		this.color = color
		this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
	}
}
