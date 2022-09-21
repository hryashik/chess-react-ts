import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colors-type";
import whiteLogo from '../../assets/white-pawn.png'
import blackLogo from '../../assets/black-pawn.png'
import { Cell } from "../Cell";

export class Pawn extends Figure {
	readonly name: FigureNames
	readonly color: Colors
	readonly logo: typeof whiteLogo
	constructor(cell: Cell, color: Colors) {
		super(cell, color);
		this.name = FigureNames.Pawn
		this.color = color
		this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
	}
}
