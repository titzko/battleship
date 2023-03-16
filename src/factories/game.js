import { gameBoardFactory } from "./gameBoardFactory";
import { shipFactory } from "./shipFactory";
import { GAME_DIMENSION, DIRECTION_HORIZONTAL, DIRECTION_VERTICAL, SHIP_DIMENSIONS } from "../constants/constants";
import { dom } from "./../ui/dom";
import { position } from "./position";
import { player } from "./playerFactory";

let gameFactory = () => {
	let _player = null;
	let computer = null;
	let _dom = null;

	const init = function () {
		setupDom.call(this);
		createPlayers.call(this);
	};

	const setupDom = function () {
		this._dom = dom();
		this._dom.initPage();
	};

	const createBoard = () => {
		const board = gameBoardFactory();
		board.createBoard(GAME_DIMENSION);
		return board;
	};

	const createPlayers = function () {
		const board1 = createBoard();
		const board2 = createBoard();
		createUser.call(this, "player", board1, false);
		createUser.call(this, "computer", board2, true);
		this.computer.placeShipsRandomlyOnBoard(board1);
		// alternative of using call would be to export the function and then -> this.startShipPlacementPhase()
		startShipPlacementPhase.call(this);
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

		this._dom.removePlacementShip();
	};

	const startShipPlacementPhase = function () {
		const ships = SHIP_DIMENSIONS();
		this._dom.initShipPlacements(ships);
		const computerCells = document.querySelectorAll('[data-user="computer"]');
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

	return { _player, computer, init };
};

export { gameFactory };
