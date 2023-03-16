import "./style.scss";
import { gameFactory } from "./factories/game";

function init() {
	gameFactory().init();
}

init();
