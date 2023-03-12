import { GAME_DIMENSION } from "../constants/constants";
import { position } from "./position";

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

	const isWinner = () => hasWon;

	return { name, turn, isWinner, board };
};

export { player };
