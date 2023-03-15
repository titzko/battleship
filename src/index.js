import "./style.scss";
import { gameFactory } from "./factories/game";

function init() {
	const game = gameFactory();
	game.init();
}

init();
