import "./style.scss";

import { initPage } from "./ui/dom";
import { gameFactory } from "./factories/game";

function init() {
	initPage();
	const game = gameFactory();
	const player = game.createUser("player", false);
	const computer = game.createUser("computer", true);
	game.startGame(player, computer);
}

init();
