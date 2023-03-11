import { DIRECTION_HORIZONTAL, DIRECTION_VERTICAL, GAME_DIMENSION } from "../constants/constants";

const gameBoardFactory = () => {
	let boardArr = undefined;
	const ships = [];
	const createBoard = function (dimension) {
		this.boardArr = [];
		for (let i = 0; i < dimension; i++) {
			this.boardArr.push([]);
			for (let n = 0; n < dimension; n++) {
				this.boardArr[i].push(0);
			}
		}
	};

	function isValidPlacement(ship, startPosition, direction) {
		return direction === DIRECTION_HORIZONTAL
			? isValidHorizontalPlacement(ship, startPosition)
			: isValidVerticalPlacement(ship, startPosition);
	}

	function isValidHorizontalPlacement(ship, startPosition) {
		return startPosition[1] + ship.length <= GAME_DIMENSION;
	}

	function isValidVerticalPlacement(ship, startPosition) {
		return startPosition[0] + ship.length <= GAME_DIMENSION;
	}

	function placeShipHorizontal(ship, startPosition) {
		if (isValidPlacement(ship, startPosition, DIRECTION_HORIZONTAL)) {
			const length = ship.length;
			const x = startPosition[0];
			const y = startPosition[1];
			for (let i = 0; i < length; i++) {
				this.boardArr[x][y + i] = ship;
			}
		} else {
			console.error(`Ship ${ship} cant be placed here`);
		}
	}

	function placeShipVertical(ship, startPosition) {
		if (isValidPlacement(ship, startPosition, DIRECTION_VERTICAL)) {
			const length = ship.length;
			const x = startPosition[0];
			const y = startPosition[1];
			for (let i = 0; i < length; i++) {
				this.boardArr[x + i][y] = ship;
			}
		} else {
			console.error(`Ship ${ship} cant be placed here`);
		}
	}

	const placeShip = function (ship, startPosition, direction = DIRECTION_HORIZONTAL) {
		direction === DIRECTION_HORIZONTAL
			? placeShipHorizontal.call(this, ship, startPosition)
			: placeShipVertical.call(this, ship, startPosition);

		ships.push(ship);
	};
	return { boardArr, createBoard, placeShip, ships };
};

export { gameBoardFactory };
