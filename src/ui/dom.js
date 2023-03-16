import { GAME_DIMENSION } from "../constants/constants";

const dom = () => {
	const headline = null;
	const footer = null;
	const shipsToPlace = null;

	const createElement = (htmlTag, id, appender = document.querySelector("body"), _class = "") => {
		const element = document.createElement(`${htmlTag}`);
		id && (element.id = `${id}`);
		_class && element.classList.add(_class);
		appender.appendChild(element);
		return element;
	};

	const initPage = function () {
		const body = document.querySelector("body");
		this.headline = createElement("h1", "headline", body);

		const pageWrapper = createElement("div", "headline", body, "container");
		const playerBoard = renderBoard("player-board", "Enemy Board", "player");
		const computerBoard = renderBoard("computer-board", "Your Board", "computer");
		pageWrapper.appendChild(playerBoard);
		pageWrapper.appendChild(computerBoard);

		this.footer = createElement("div", "footer");
	};

	function renderBoard(id, labelText, user) {
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
			}
			board.appendChild(row);
		}
	}

	function initShipPlacements(ships) {
		this.shipsToPlace = [...ships];
		this.headline.innerHTML = "Place your ships!";
		ships.forEach((ship) => drawShip.call(this, ship));
		console.log(this);
	}

	function drawShip(ship) {
		const wrapper = createElement("div", "", this.footer, "ship-wrapper");
		for (let i = 0; i < ship; i++) {
			createElement("div", "", wrapper, "cell");
		}
	}

	function removePlacementShip() {
		this.footer.firstElementChild.remove();
	}

	return { initPage, initShipPlacements, headline, footer, shipsToPlace, removePlacementShip };
};

export { dom };
