import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";
import whiteLogo from '../../assets/white-bishop.png'
import blackLogo from '../../assets/black-bishop.png'

export class Bishop extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
		this.name = FigureNames.BISHOP
	}
	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false
		}
		return true
	}
}
