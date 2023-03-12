import { DIRECTION_HORIZONTAL, DIRECTION_VERTICAL, GAME_DIMENSION } from "../constants/constants";

const gameBoardFactory = () => {
	const cells = [];
	const ships = [];

	const createBoard = (dimension) => {
		for (let i = 0; i < dimension; i++) {
			cells.push([]);
			for (let n = 0; n < dimension; n++) {
				cells[i].push(null);
			}
		}
	};

	const isValidPlacement = (ship, position, direction) => {
		return direction === DIRECTION_HORIZONTAL
			? isValidHorizontalPlacement(ship, position)
			: isValidVerticalPlacement(ship, position);
	};

	const isValidHorizontalPlacement = (ship, position) => {
		const unused = Array.from({ length: ship.length }).every((_, i) => cells[position.y][position.x + i] === null);
		return position.x + ship.length <= GAME_DIMENSION && unused;
	};

	const isValidVerticalPlacement = (ship, position) => {
		const unused = Array.from({ length: ship.length }).every((_, i) => cells[position.y + i][position.x] === null);
		return position.y + ship.length <= GAME_DIMENSION && unused;
	};

	const placeShipHorizontal = (ship, position) => {
		if (isValidPlacement(ship, position, DIRECTION_HORIZONTAL)) {
			for (let i = 0; i < ship.length; i++) {
				cells[position.y][position.x + i] = ship;
			}
		} else {
			console.error(`Ship ${ship} cant be placed here`);
		}
	};

	const placeShipVertical = (ship, position) => {
		if (isValidPlacement(ship, position, DIRECTION_VERTICAL)) {
			for (let i = 0; i < ship.length; i++) {
				cells[position.y + i][position.x] = ship;
			}
		} else {
			console.error(`Ship ${ship} cant be placed here`);
		}
	};

	const placeShip = (ship, position, direction = DIRECTION_HORIZONTAL) => {
		direction === DIRECTION_HORIZONTAL ? placeShipHorizontal(ship, position) : placeShipVertical(ship, position);
		ships.push(ship);
	};

	return { cells, createBoard, placeShip, ships };
};

export { gameBoardFactory };
