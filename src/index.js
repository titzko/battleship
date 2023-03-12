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

/*
	while (!gameOver) {
		player1.turn();
		player2.turn();

		if (player1.isWinner()) {
			gameOver = true;
			console.log("Player 1 win");
		}

		if (player2.isWinner()) {
			gameOver = true;
			console.log("player 2 did win");
		}
	}

	*/
