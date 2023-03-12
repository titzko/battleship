import "./style.scss";
import { shipFactory } from "./factories/shipFactory";
import { gameBoardFactory } from "./factories/gameBoardFactory";
import { position } from "./factories/position";
import { DIRECTION_HORIZONTAL, DIRECTION_VERTICAL, GAME_DIMENSION } from "./constants/constants";

function component() {
	const el = document.createElement("div");
	el.innerHTML = "battleship";

	let ship1 = shipFactory(4);
	let ship2 = shipFactory(3);
	let ship3 = shipFactory(6);

	let board = gameBoardFactory();
	board.createBoard(GAME_DIMENSION);
	board.placeShip(ship1, position(3, 6), DIRECTION_HORIZONTAL);
	board.placeShip(ship3, position(8, 4), DIRECTION_HORIZONTAL);
	board.placeShip(ship2, position(5, 5), DIRECTION_VERTICAL);

	console.log(board);

	return el;
}

document.body.appendChild(component());
