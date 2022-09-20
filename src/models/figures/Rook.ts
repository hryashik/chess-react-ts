import { Figure, FigureNames } from "./Figure";
import { Cell } from "../Cell";
import { Colors } from "../Colors";
import whiteLogo from '../../assets/white-rook.png'
import blackLogo from '../../assets/black-rook.png'

export class Rook extends Figure {
	constructor(cell: Cell, color: Colors) {
		super(cell, color);
		this.name = FigureNames.Rook
		this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
	}
}
