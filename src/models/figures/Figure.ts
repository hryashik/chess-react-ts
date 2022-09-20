import { Colors } from "../Colors";
import { Cell } from "../Cell";
import logo from '../../assets/black-bishop.png'

export enum FigureNames {
	Figure = 'Фигура',
	Pawn = 'Пешка',
	Rook = 'Ладья',
	Knight = 'Конь',
	Bishop = 'Слон',
	Queen = 'Ферзь',
	King = 'Король',
}

export class Figure {
	color: Colors
	name: FigureNames
	cell: Cell
	id: number
	logo: typeof logo | null
	constructor(cell: Cell, color: Colors) {
		this.cell = cell
		this.cell.figure = this
		this.color = color
		this.name = FigureNames.Figure
		this.id = Math.random()
		this.logo = null
	}
}
