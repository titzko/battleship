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
			pos = position(getRandInt(GAME_DIMENSION), getRandInt(GAME_DIMENSION));
		} while (!board.attacks.every((attack) => attack.x != pos.x || attack.y != pos.y));
		board.receiveAttack(pos, name);
	};

	const getRandInt = (max) => {
		return Math.floor(Math.random() * (max - 0) + 0);
	};

	const placeShip = (position, ship, direction, _board) => {
		_board.placeShip(ship, position, direction);
	};

	const createShip = (length) => {
		return shipFactory(length);
	};

	const placeShipsRandomly = (_board) => {
		SHIP_DIMENSIONS().map((length, i) => {
			let dir;
			getRandInt(2) === 1 ? (dir = DIRECTION_HORIZONTAL) : (dir = DIRECTION_VERTICAL);

			let ship = createShip(length);
			let pos;
			do {
				pos = position(getRandInt(GAME_DIMENSION - length), getRandInt(GAME_DIMENSION - length));
			} while (!_board.isValidPlacement(ship, pos, dir));
			placeShip(pos, ship, dir, _board);
		});
		console.log(_board.cells);
	};

	const isWinner = () => hasWon;

	return { name, turn, isWinner, board, placeShip, placeShipsRandomly };
};

export { player };
