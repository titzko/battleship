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
		this.headline = createElement("h1", "headline");

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

		const board = createElement("div", id, wrapper, "board");
		renderCells(board, user);

		const label = createElement("div", "", wrapper, "board-label");
		label.innerHTML = labelText;
		return wrapper;
	}

	function renderCells(board, user) {
		for (let i = 0; i < GAME_DIMENSION; i++) {
			let row = createElement("div", "", board, "row");
			for (let j = 0; j < GAME_DIMENSION; j++) {
				let cell = createElement("div", "", row, "cell");
				cell.dataset.user = user;
				cell.dataset.y = i;
				cell.dataset.x = j;
			}
		}
	}

	function initShipPlacements(ships) {
		this.shipsToPlace = [...ships];
		this.headline.innerHTML = "Place your ships!";
		ships.forEach((ship) => drawShip.call(this, ship));
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
