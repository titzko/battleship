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
		computerBoard.addEventListener("dragover", handleDragableEvent);
		computerBoard.addEventListener("drop", handleDropEvent);

		pageWrapper.appendChild(playerBoard);
		pageWrapper.appendChild(computerBoard);

		const btn = createElement("button", "direction-btn");
		btn.innerHTML = "change Direction";
		btn.classList.add("btn");
		btn.addEventListener("click", changePlacementDirection);

		this.footer = createElement("div", "footer");
		// dirty solution, which handles the problem that a cell has to be clicked in order a ship placement happens
		// should refactor the code, that its not a cell click but the drop event itself
		// right now, the drop event triggers a cell click
		document.getElementById("computer-board").addEventListener("click", stopClickPropagation, true);
	};

	function stopClickPropagation(e) {
		e.stopPropagation();
	}

	const handleDragableEvent = (event) => {
		event.preventDefault();
	};

	const removeDirectionButton = () => {
		document.getElementById("direction-btn").remove();
	};

	const handleDropEvent = (event) => {
		event.preventDefault();
		const data = JSON.parse(event.dataTransfer.getData("text/plain"));
		const target = event.target;
		target.dataset.direction = data.direction;

		const adjustment = data.cellPos;
		const y = target.dataset.y - adjustment;
		const x = target.dataset.x;

		let valid = false;
		data.direction === "x"
			? (valid = data.amount + Number(target.dataset.x) <= GAME_DIMENSION)
			: (valid = data.amount + Number(target.dataset.y - adjustment) <= GAME_DIMENSION);

		if (!valid) {
			document.getElementById("computer-board").addEventListener("click", stopClickPropagation, true);
			return;
		}

		const adjustedCell = document.querySelector(`.cell[data-user="computer"][data-y="${y}"][data-x="${x}"]`);

		data.direction === "x" ? event.target.click() : adjustedCell.click();
		document.getElementById("computer-board").addEventListener("click", stopClickPropagation, true);
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
		document.getElementById("computer-board").removeEventListener("click", stopClickPropagation, true);
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

	return {
		initPage,
		initShipPlacements,
		headline,
		footer,
		shipsToPlace,
		removePlacementShip,
		updateLabel,
		removeDirectionButton,
	};
};

export { dom };
