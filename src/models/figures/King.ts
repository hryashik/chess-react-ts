import { Figure, FigureNames } from "./Figure";
import { Cell } from "../Cell";
import { Colors } from "../Colors";
import whiteLogo from '../../assets/white-king.png'
import blackLogo from '../../assets/black-king.png'

export class King extends Figure {
	constructor(cell: Cell, color: Colors) {
		super(cell, color);
		this.name = FigureNames.King
		this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
	}
}
