import { Colors } from "../Colors-type";
import { Cell } from "../Cell";
import logo from '../../assets/white-pawn.png'

export enum FigureNames {
	Figure = 'Фигура',
	Pawn = 'Пешка',
	Rook = 'Ладья',
	Bishop = 'Слон',
	Knight = 'Конь',
	Queen = 'Ферзь',
	King = 'Король',
}

export class Figure {
	readonly color: Colors
	cell: Cell
	name: FigureNames
	logo: typeof logo | null
	constructor(cell: Cell, color: Colors) {
		this.cell = cell
		this.cell.figure = this
		this.color = color
		this.name = FigureNames.Figure
	}
}
