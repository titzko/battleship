import { GAME_DIMENSION } from "../constants/constants";
import { position } from "../factories/position";

function initPage() {
	let pageWrapper = document.createElement("div");
	pageWrapper.classList.add("container");
	document.querySelector("body").appendChild(pageWrapper);

	const playerBoard = renderBoard("player-board", "Enemy Board", "player");
	const computerBoard = renderBoard("player-board", "Your Board", "computer");
	pageWrapper.appendChild(playerBoard);
	pageWrapper.appendChild(computerBoard);
}

function renderBoard(id, labelText, user) {
	console.log(user);

	const wrapper = document.createElement("div");
	wrapper.classList.add("board-wrapper");

	const board = document.createElement("div");
	board.classList.add("board");
	board.id = id;
	wrapper.appendChild(board);
	renderCells(board, user);

	const label = document.createElement("div");
	label.classList.add("board-label");
	label.innerHTML = labelText;
	wrapper.appendChild(label);
	return wrapper;
}

function renderCells(board, user) {
	for (let i = 0; i < GAME_DIMENSION; i++) {
		let row = document.createElement("div");
		row.classList.add("row");
		for (let j = 0; j < GAME_DIMENSION; j++) {
			let cell = document.createElement("div");
			cell.classList.add("cell");
			cell.dataset.user = user;
			cell.dataset.y = i;
			cell.dataset.x = j;

			row.appendChild(cell);
			board.appendChild(row);
		}
	}
}

function renderShips() {
	console.log("render ships");
}

function renderButtons() {
	console.log("render buttons");
}

export { initPage };
