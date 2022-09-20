import { Figure, FigureNames } from "./Figure";
import { Cell } from "../Cell";
import { Colors } from "../Colors";
import whiteLogo from '../../assets/white-queen.png'
import blackLogo from '../../assets/black-queen.png'

export class Queen extends Figure {
	constructor(cell: Cell, color: Colors) {
		super(cell, color);
		this.name = FigureNames.Queen
		this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
	}
}
