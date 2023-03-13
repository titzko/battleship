import { DIRECTION_HORIZONTAL, DIRECTION_VERTICAL, GAME_DIMENSION } from "../constants/constants";

const gameBoardFactory = () => {
	const cells = [];
	const ships = [];
	const attacks = [];

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
			console.error(
				`Ship ${ship} with ${ship.length} cant be placed here horizontal: y: ${position.y}, x: ${position.x}`
			);
		}
	};

	const placeShipVertical = (ship, position) => {
		if (isValidPlacement(ship, position, DIRECTION_VERTICAL)) {
			for (let i = 0; i < ship.length; i++) {
				cells[position.y + i][position.x] = ship;
			}
		} else {
			console.error(
				`Ship ${ship} with ${ship.length} cant be placed here vertical: y: ${position.y}, x: ${position.x}`
			);
		}
	};

	const placeShip = (ship, position, direction = DIRECTION_HORIZONTAL) => {
		direction === DIRECTION_HORIZONTAL ? placeShipHorizontal(ship, position) : placeShipVertical(ship, position);
		ships.push(ship);
	};

	const checkRemainingShips = () => {
		return !ships.every((ship) => ship.isSunk());
	};

	const handleShipGotHit = (ship) => {
		ship.gotHit();
	};

	const isValidAttack = (pos) => {
		return !attacks.some((attack) => attack.x == pos.x && attack.y == pos.y);
	};

	const receiveAttack = (position, attacker) => {
		let gotHit = false;

		if (!isValidAttack(position)) {
			return;
		}

		attacks.push(position);
		if (cells[position.y][position.x] != null) {
			let ship = cells[position.y][position.x];
			handleShipGotHit(ship);
			gotHit = true;
		}
		markCell(position, attacker, gotHit);
	};

	const markCell = (position, attacker, gotHit) => {
		const cell = document.querySelector(`[data-user='${attacker}'][data-y='${position.y}'][data-x='${position.x}']`);
		if (cell) {
			gotHit ? (cell.style.backgroundColor = "red") : (cell.style.backgroundColor = "black");
		}
	};

	return { cells, createBoard, placeShip, ships, receiveAttack, attacks, checkRemainingShips, isValidPlacement };
};

export { gameBoardFactory };
