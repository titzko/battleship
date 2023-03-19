import { GAME_DIMENSION } from "../constants/constants";

const dom = () => {
	const headline = null;
	const footer = null;
	const shipsToPlace = null;

	const createElement = (htmlTag, id, appender = document.querySelector("body"), _class = "") => {
		const element = document.createElement(htmlTag);
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
		computerBoard.addEventListener("dragover", handleDragableEvent);

		pageWrapper.appendChild(playerBoard);
		pageWrapper.appendChild(computerBoard);

		const btn = createElement("button", "direction-btn");
		btn.innerHTML = "change Direction";
		btn.classList.add("btn");
		btn.addEventListener("click", changePlacementDirection);
		document.getElementById("computer-board").classList.add("active-border");

		this.footer = createElement("div", "footer");
	};

	const handleDragableEvent = (event) => {
		event.preventDefault();
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
		this.headline.innerHTML = "Place your ships on your own board!";
		ships.forEach((ship) => drawShip.call(this, ship));
	}

	function drawShip(ship) {
		const wrapper = createElement("div", "", this.footer, "ship-wrapper");
		for (let i = 0; i < ship; i++) {
			let cell = createElement("div", "", wrapper, "cell");
			cell.addEventListener("mousedown", function () {
				wrapper.dataset.dragedCellPosition = i;
			});
		}

		wrapper.setAttribute("draggable", "true");
		wrapper.dataset.length = ship;
		wrapper.dataset.direction = "x";

		wrapper.addEventListener("dragstart", function (event) {
			handleDragStart(event, ship);
		});
		wrapper.addEventListener("dragend", function (event) {
			event.target.classList.remove("dragging");
		});
	}

	const handleDragStart = (event, ship) => {
		const direction = event.target.dataset.direction;
		const cellPos = event.target.dataset.dragedCellPosition;

		event.target.classList.add("dragging");
		event.dataTransfer.setData("text/plain", JSON.stringify({ direction, amount: ship, cellPos }));
	};

	const changePlacementDirection = () => {
		const elements = [...document.querySelectorAll(".ship-wrapper")];
		const direction = elements[0].dataset.direction;
		const changeToY = direction === "x";
		elements.forEach((element) => {
			element.style.flexDirection = changeToY ? "column" : "row";
			element.dataset.direction = changeToY ? "y" : "x";
		});
	};

	function updateLabel(label) {
		this.headline.innerHTML = label;
	}

	function removePlacementShip() {
		this.footer.firstElementChild.remove();
	}

	function changeBoardState() {
		document.getElementById("direction-btn").remove();
		document.getElementById("computer-board").classList.remove("active-border");
		document.getElementById("player-board").classList.add("active-border");

		const playerCells = document.querySelectorAll('[data-user="player"]');
		playerCells.forEach((cell) => {
			cell.classList.add("active");
		});

		const computerCells = document.querySelectorAll('[data-user="computer"]');
		computerCells.forEach((cell) => {
			cell.classList.remove("active");
		});

		document.getElementById("player-board").style.cursor = "pointer";
		document.getElementById("computer-board").style.cursor = "not-allowed";
	}

	return {
		initPage,
		initShipPlacements,
		headline,
		footer,
		shipsToPlace,
		removePlacementShip,
		updateLabel,
		changeBoardState,
	};
};

export { dom };
