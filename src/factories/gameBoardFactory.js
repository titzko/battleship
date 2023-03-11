import { DIRECTION_HORIZONTAL, DIRECTION_VERTICAL, GAME_DIMENSION } from "../constants/constants";

const gameBoardFactory = () => {
	let cells = undefined;
	const ships = [];
	const createBoard = function (dimension) {
		this.cells = [];
		for (let i = 0; i < dimension; i++) {
			this.cells.push([]);
			for (let n = 0; n < dimension; n++) {
				this.cells[i].push(null);
			}
		}
	};

	function isValidPlacement(ship, position, direction) {
		return direction === DIRECTION_HORIZONTAL
			? isValidHorizontalPlacement.call(this, ship, position)
			: isValidVerticalPlacement.call(this, ship, position);
	}

	function isValidHorizontalPlacement(ship, position) {
		let unused = true;
		for (let i = 0; i < ship.length; i++) {
			if (this.cells[position.y][position.x + i] != null) {
				console.log("cell is used");
				unused = false;
			}
		}
		return position.x + ship.length <= GAME_DIMENSION && unused;
	}

	function isValidVerticalPlacement(ship, position) {
		let unused = true;
		for (let i = 0; i < ship.length; i++) {
			if (this.cells[position.y + i][position.x] != null) {
				console.log("cell is used");
				unused = false;
			}
		}
		return position.y + ship.length <= GAME_DIMENSION && unused;
	}

	function placeShipHorizontal(ship, position) {
		if (isValidPlacement.call(this, ship, position, DIRECTION_HORIZONTAL)) {
			for (let i = 0; i < ship.length; i++) {
				this.cells[position.y][position.x + i] = ship;
			}
		} else {
			console.error(`Ship ${ship} cant be placed here`);
		}
	}

	function placeShipVertical(ship, position) {
		if (isValidPlacement.call(this, ship, position, DIRECTION_VERTICAL)) {
			for (let i = 0; i < ship.length; i++) {
				this.cells[position.y + i][position.x] = ship;
			}
		} else {
			console.error(`Ship ${ship} cant be placed here`);
		}
	}

	const placeShip = function (ship, position, direction = DIRECTION_HORIZONTAL) {
		direction === DIRECTION_HORIZONTAL
			? placeShipHorizontal.call(this, ship, position)
			: placeShipVertical.call(this, ship, position);

		ships.push(ship);
	};
	return { cells, createBoard, placeShip, ships };
};

export { gameBoardFactory };
