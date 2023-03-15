import { gameBoardFactory } from "./gameBoardFactory";
import { shipFactory } from "./shipFactory";
import { GAME_DIMENSION, DIRECTION_HORIZONTAL, DIRECTION_VERTICAL, SHIP_DIMENSIONS } from "../constants/constants";
import { position } from "./position";
import { player } from "./playerFactory";

let gameFactory = () => {
	let _player = null;
	let computer = null;

	const createBoard = () => {
		const board = gameBoardFactory();
		board.createBoard(GAME_DIMENSION);
		return board;
	};

	const createUser = function (name, board, isComputer = false) {
		const user = player(board, name, isComputer);
		isComputer ? (this.computer = user) : (this._player = user);
		return user;
	};

	const handleWin = (player) => {
		alert(`${player.name} won! Well played`);
	};

	const handleCellClick = function (event) {
		const element = event.target;
		const amountAttacks = this._player.board.attacks.length;
		this._player.turn(position(element.dataset.y, element.dataset.x));

		// return if user clicks a cell more than once
		if (amountAttacks === this._player.board.attacks.length) {
			return;
		}
		this._player.isWinner() ? handleWin(this._player) : this.computer.turn();

		if (this.computer.isWinner()) {
			handleWin(this.computer);
		}
	};

	const placeShipOnClick = function (cell, ships) {
		if (ships.length === 0) {
			return;
		}
		let x = cell.dataset.x;
		let y = cell.dataset.y;
		let ship_length = ships.shift();
		let ship = shipFactory(ship_length);

		this._player.placeShip(position(Number(y), Number(x)), ship, DIRECTION_HORIZONTAL, this.computer.board);
		if (ships.length === 0) {
			startGame.call(this);
		}
	};

	const addPlaceShipEventListener = function (_player, _board, computer) {
		const computerCells = document.querySelectorAll('[data-user="computer"]');
		const ships = SHIP_DIMENSIONS();
		computerCells.forEach((cell) => {
			cell.addEventListener("click", () => {
				placeShipOnClick.call(this, cell, ships);
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

	const startGame = function () {
		changeBoardState();
		const cells = [...document.querySelectorAll(`[data-user*="player"]`)];
		const self = this;
		cells.map((cell) => {
			cell.addEventListener("click", function () {
				handleCellClick.call(self, event);
			});
		});
	};

	return { createUser, startGame, createBoard, addPlaceShipEventListener, _player, computer };
};

export { gameFactory };
