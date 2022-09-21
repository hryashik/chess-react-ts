import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colors-type";
import whiteLogo from '../../assets/white-king.png'
import blackLogo from '../../assets/black-king.png'
import { Cell } from "../Cell";

export class King extends Figure {
	readonly name: FigureNames
	readonly color: Colors
	readonly logo: typeof whiteLogo
	constructor(cell: Cell, color: Colors) {
		super(cell, color);
		this.name = FigureNames.King
		this.color = color
		this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
	}
}
