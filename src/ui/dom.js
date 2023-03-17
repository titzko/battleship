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
		computerBoard.addEventListener("dragover", function (event) {
			event.preventDefault();
		});
		computerBoard.addEventListener("drop", function (event) {
			event.preventDefault();
			//console.log(event.dataTransfer.getData("text/plain"));

			//console.log(event.target); <- this is a cell
			const data = JSON.parse(event.dataTransfer.getData("text/plain"));
			const target = event.target;

			let valid = false;
			data.direction === "x"
				? (valid = data.amount + Number(target.dataset.x) <= GAME_DIMENSION)
				: (valid = data.amount + Number(target.dataset.y) <= GAME_DIMENSION);

			valid && event.target.click();
		});

		pageWrapper.appendChild(playerBoard);
		pageWrapper.appendChild(computerBoard);

		this.footer = createElement("div", "footer");
	};

	const renderBoard = (id, labelText, user) => {
		const wrapper = document.createElement("div");
		wrapper.classList.add("board-wrapper");

		const board = createElement("div", id, wrapper, "board");
		renderCells(board, user);

		const label = createElement("div", "", wrapper, "board-label");
		label.innerHTML = labelText;
		return wrapper;
	};

	const renderCells = (board, user) => {
		for (let i = 0; i < GAME_DIMENSION; i++) {
			let row = createElement("div", "", board, "row");
			for (let j = 0; j < GAME_DIMENSION; j++) {
				let cell = createElement("div", "", row, "cell");
				cell.dataset.user = user;
				cell.dataset.y = i;
				cell.dataset.x = j;
			}
		}
	};

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

		wrapper.setAttribute("draggable", "true");
		wrapper.dataset.length = ship;
		wrapper.dataset.direction = "x";

		wrapper.addEventListener("dragstart", function (event) {
			event.target.classList.add("dragging");
			event.dataTransfer.setData("text/plain", JSON.stringify({ direction: "x", amount: ship }));
		});
		wrapper.addEventListener("dragend", function (event) {
			// Remove the 'dragging' class from the element
			event.target.classList.remove("dragging");
		});
	}

	function updateLabel() {
		this.headline.innerHTML = "Attack the enemy now!";
	}

	function removePlacementShip() {
		this.footer.firstElementChild.remove();
	}

	return { initPage, initShipPlacements, headline, footer, shipsToPlace, removePlacementShip, updateLabel };
};

export { dom };
