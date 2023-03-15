import "./style.scss";

import { initPage } from "./ui/dom";
import { gameFactory } from "./factories/game";
import { shipFactory } from "./factories/shipFactory";
import { DIRECTION_HORIZONTAL, DIRECTION_VERTICAL, SHIP_DIMENSIONS } from "./constants/constants";
import { position } from "./factories/position";

function init() {
	initPage();
	const game = gameFactory();
	const board1 = game.createBoard();
	const board2 = game.createBoard();
	const player = game.createUser("player", board1, false);
	const computer = game.createUser("computer", board2, true);
	console.log(game);
	game.addPlaceShipEventListener(player, board2, computer);

	computer.placeShipsRandomly(board1);
}

init();
