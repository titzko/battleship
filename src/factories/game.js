import { gameBoardFactory } from "./gameBoardFactory";
import { shipFactory } from "./shipFactory";
import { GAME_DIMENSION, DIRECTION_HORIZONTAL, DIRECTION_VERTICAL } from "../constants/constants";
import { position } from "./position";
import { player } from "./playerFactory";

let gameFactory = () => {
	const createBoard = () => {
		const board = gameBoardFactory();
		board.createBoard(GAME_DIMENSION);
		return board;
	};

	const createUser = (name, board, isComputer = false) => {
		const user = player(board, name, isComputer);
		return user;
	};

	const handleWin = (player) => {
		alert(`${player.name} won! Well played`);
	};

	const handleCellClick = (event, player, computer) => {
		const element = event.target;
		const amountAttacks = player.board.attacks.length;
		player.turn(position(element.dataset.y, element.dataset.x));

		// return if user clicks a cell more than once
		if (amountAttacks === player.board.attacks.length) {
			return;
		}
		player.isWinner() ? handleWin(player) : computer.turn();

		if (computer.isWinner()) {
			handleWin(computer);
		}
	};

	const startGame = (player, computer) => {
		const cells = [...document.querySelectorAll(`[data-user*="player"]`)];
		cells.map((cell) => {
			cell.addEventListener("click", () => {
				handleCellClick(event, player, computer);
			});
		});
	};

	return { createUser, startGame, createBoard };
};

export { gameFactory };
