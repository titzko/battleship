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
	game.addPlaceShipEventListener(player, board2, computer);

	computer.placeShipsRandomly(board1);

	// TODO -> create const with shiplength as array "[4,4,3,3,2,2]"							-> done
	// TODO -> place ships for computer randomly -> player gets function placeShipsRandomly		-> done
	// TODO -> on cell click -> place ship for player
	// TODO -> some styles

	//game.startGame(player, computer);
}

init();
