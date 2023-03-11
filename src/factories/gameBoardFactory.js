import { DIRECTION_HORIZONTAL, DIRECTION_VERTICAL } from "../constants/constants";

const gameBoardFactory = () => {
	let boardArr = undefined;
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
		// TODO - dont forget to check initialisation of the board
		return true;
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
			console.error("Shipment cant be placed here");
		}
	}

	function placeShipVertical(ship, startPosition) {
		if (isValidPlacement(ship, startPosition, DIRECTION_HORIZONTAL)) {
			console.log(DIRECTION_VERTICAL);
		} else {
			console.error("Shipment cant be placed here");
		}
	}

	const placeShip = function (ship, startPosition, direction = DIRECTION_HORIZONTAL) {
		if (direction === DIRECTION_HORIZONTAL) {
			//placeShipHorizontal(this, ship, startPosition);
			placeShipHorizontal.call(this, ship, startPosition);
		} else if (direction === DIRECTION_VERTICAL) {
			placeShipVertical(ship, startPosition);
		} else {
			console.error(`placeShip() call with unknown directon: ${direction}`);
		}
	};
	return { boardArr, createBoard, placeShip };
};

export { gameBoardFactory };
