import { gameBoardFactory } from "./gameBoardFactory";
import { shipFactory } from "./shipFactory";
import { GAME_DIMENSION, DIRECTION_HORIZONTAL, DIRECTION_VERTICAL, SHIP_DIMENSIONS } from "../constants/constants";
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

	const placeShipOnClick = (cell, _player, _board, ships, computer) => {
		if (ships.length === 0) {
			return;
		}
		let x = cell.dataset.x;
		let y = cell.dataset.y;
		let ship_length = ships.shift();
		let ship = shipFactory(ship_length);

		_player.placeShip(position(Number(y), Number(x)), ship, DIRECTION_HORIZONTAL, _board);
		if (ships.length === 0) {
			startGame(_player, computer);
		}
	};

	const addPlaceShipEventListener = (_player, _board, computer) => {
		const computerCells = document.querySelectorAll('[data-user="computer"]');
		const ships = SHIP_DIMENSIONS();
		computerCells.forEach((cell) => {
			cell.addEventListener("click", function () {
				placeShipOnClick(cell, _player, _board, ships, computer);
			});
		});
	};

	const changeBoardState = () => {
		const playerCells = document.querySelectorAll('[data-user="player"]');
		playerCells.forEach((cell) => {
			cell.classList.add("active");
		});

		const computerCells = document.querySelectorAll('[data-user="computer"]');
		computerCells.forEach((cell) => {
			cell.classList.remove("active");
		});

		document.getElementById("player-board").style.cursor = "pointer";
		document.getElementById("computer-board").style.cursor = "not-allowed";
	};

	const startGame = (player, computer) => {
		changeBoardState();
		const cells = [...document.querySelectorAll(`[data-user*="player"]`)];
		cells.map((cell) => {
			cell.addEventListener("click", () => {
				handleCellClick(event, player, computer);
			});
		});
	};

	return { createUser, startGame, createBoard, addPlaceShipEventListener };
};

export { gameFactory };
