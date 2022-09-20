import { Figure, FigureNames } from "./Figure";
import { Cell } from "../Cell";
import { Colors } from "../Colors";
import whiteLogo from '../../assets/white-knight.png'
import blackLogo from '../../assets/black-knight.png'

export class Knight extends Figure {
	constructor(cell: Cell, color: Colors) {
		super(cell, color);
		this.name = FigureNames.Knight
		this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
	}
}
