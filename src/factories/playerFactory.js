import { GAME_DIMENSION, DIRECTION_HORIZONTAL, DIRECTION_VERTICAL, SHIP_DIMENSIONS } from "../constants/constants";
import { position } from "./position";
import { shipFactory } from "./shipFactory";

const player = (board, name = "", isComputer = false) => {
	let hasWon = false;

	const turn = (position) => {
		isComputer ? randomAttack() : board.receiveAttack(position, name);
		board.checkRemainingShips() ? (hasWon = false) : (hasWon = true);
	};

	const randomAttack = () => {
		let pos = undefined;

		do {
			pos = position(getRandInt(), getRandInt());
		} while (!board.attacks.every((attack) => attack.x != pos.x || attack.y != pos.y));
		board.receiveAttack(pos, name);
	};

	const getRandInt = () => {
		return Math.floor(Math.random() * (GAME_DIMENSION - 0) + 0);
	};

	const placeShip = (position, ship, direction, _board) => {
		_board.placeShip(ship, position, direction);
	};

	const createShip = (length) => {
		return shipFactory(length);
	};

	const checkFreeCellsHorizontal = (cellsWithShips, pos, length) => {
		let result = true;
		console.log(cellsWithShips);

		for (let i = 0; i < length; i++) {
			result = cellsWithShips.every((cell) => cell.x != pos.x + i && cell.y != pos.y);
		}
		return result;
	};

	const checkFreeCellsVertical = (cellsWithShips, x, y) => {};

	const placeShipsRandomly = (_board) => {
		const cellsWithShips = [];
		SHIP_DIMENSIONS().map((length, i) => {
			const dir = DIRECTION_HORIZONTAL;
			const validPlacement = false;
			let ship = createShip(length);
			let pos;

			do {
				pos = position(getRandInt(), getRandInt());
			} while (
				!(
					checkFreeCellsHorizontal(cellsWithShips, pos, length) &&
					_board.isValidPlacement(ship, pos, DIRECTION_HORIZONTAL)
				)
			);
			placeShip(pos, ship, dir, _board);
		});
		console.log(_board);
	};

	const isWinner = () => hasWon;

	return { name, turn, isWinner, board, placeShip, placeShipsRandomly };
};

export { player };
