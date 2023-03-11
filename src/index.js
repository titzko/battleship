import "./style.scss";
import { shipFactory } from "./factories/shipFactory";
import { gameBoardFactory } from "./factories/gameBoardFactory";
import { player } from "./factories/playerFactory";
import { VERTICAL, HORIZONTAL } from "./constants/constants";

function component() {
	const el = document.createElement("div");
	el.innerHTML = "hello World";

	let ship1 = shipFactory(4);

	let board = gameBoardFactory();
	board.createBoard(10);
	console.log(board.boardArr);
	board.placeShip(ship1, [3, 4]);

	return el;
}

document.body.appendChild(component());
