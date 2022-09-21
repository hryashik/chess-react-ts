import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colors-type";
import whiteLogo from '../../assets/white-knight.png'
import blackLogo from '../../assets/black-knight.png'
import { Cell } from "../Cell";

export class Knight extends Figure {
	readonly name: FigureNames
	readonly color: Colors
	readonly logo: typeof whiteLogo
	constructor(cell: Cell, color: Colors) {
		super(cell, color);
		this.name = FigureNames.Knight
		this.color = color
		this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
	}
}
