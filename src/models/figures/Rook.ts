import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colors-type";
import whiteLogo from '../../assets/white-rook.png'
import blackLogo from '../../assets/black-rook.png'
import { Cell } from "../Cell";

export class Rook extends Figure {
	readonly name: FigureNames
	readonly color: Colors
	readonly logo: typeof whiteLogo
	constructor(cell: Cell, color: Colors) {
		super(cell, color);
		this.name = FigureNames.Rook
		this.color = color
		this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
	}
}
