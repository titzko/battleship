import "./style.scss";

import { initPage } from "./ui/dom";
import { gameFactory } from "./factories/game";
import { shipFactory } from "./factories/shipFactory";
import { DIRECTION_HORIZONTAL, SHIP_DIMENSIONS } from "./constants/constants";
import { position } from "./factories/position";

function init() {
	initPage();
	const game = gameFactory();
	const board1 = game.createBoard();
	const board2 = game.createBoard();
	const player = game.createUser("player", board1, false);
	const computer = game.createUser("computer", board2, true);

	// TODO -> create const with shiplength as array "[4,4,3,3,2,2]"
	// TODO -> place ships for computer randomly -> player gets function placeShipsRandomly
	// TODO -> on cell click -> place ship for player
	// TODO -> some styles
	let ship1 = shipFactory(4);
	player.placeShip(position(3, 5), ship1, DIRECTION_HORIZONTAL, board2);

	let ship2 = shipFactory(4);
	player.placeShip(position(1, 1), ship2, DIRECTION_HORIZONTAL, board2);

	let ship3 = shipFactory(4);
	player.placeShip(position(6, 6), ship3, DIRECTION_HORIZONTAL, board2);

	computer.placeShipsRandomly(board1);

	game.startGame(player, computer);
}

init();
