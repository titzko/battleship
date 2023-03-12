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

	const placeShips = (board) => {
		let ship1 = shipFactory(4);
		board.placeShip(ship1, position(3, 5), DIRECTION_HORIZONTAL);

		let ship2 = shipFactory(4);
		board.placeShip(ship2, position(1, 1), DIRECTION_HORIZONTAL);

		let ship3 = shipFactory(4);
		board.placeShip(ship3, position(6, 6), DIRECTION_HORIZONTAL);
	};

	const createUser = (name, isComputer = false) => {
		const board = createBoard();
		placeShips(board);
		const user = player(board, name, isComputer);
		return user;
	};

	const handleWin = (player) => {
		alert(`${player.name} won! Well played`);
	};

	const handleCellClick = (event, player, computer) => {
		const element = event.target;
		player.turn(position(element.dataset.y, element.dataset.x));
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

	return { createUser, startGame };
};

export { gameFactory };
