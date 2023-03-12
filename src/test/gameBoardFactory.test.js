import { gameBoardFactory } from "../factories/gameBoardFactory";
import { DIRECTION_HORIZONTAL, DIRECTION_VERTICAL, GAME_DIMENSION } from "../constants/constants";
import { shipFactory } from "../factories/shipFactory";
import { position } from "../factories/position";

test("gameBoardFactory createBoardFunction", () => {
	const board = gameBoardFactory();
	expect(board.boardArr).toBe(undefined);
	board.createBoard(GAME_DIMENSION);
	expect(board.cells.length).toBe(GAME_DIMENSION);
});

test("gameBoardFactory placeShip horizontal", () => {
	const board = gameBoardFactory();
	const ship = shipFactory(3);
	const pos = position(0, 0);

	board.createBoard(GAME_DIMENSION);
	board.placeShip(ship, pos, DIRECTION_HORIZONTAL);

	expect(board.cells[0][0]).not.toBe(null);
	expect(board.cells[0][1]).not.toBe(null);
	expect(board.cells[0][2]).not.toBe(null);
	expect(board.cells[0][3]).toBe(null);
});

test("gameBoardFactory placeShip vertical", () => {
	const board = gameBoardFactory();
	const ship = shipFactory(3);
	const pos = position(0, 0);

	board.createBoard(GAME_DIMENSION);
	board.placeShip(ship, pos, DIRECTION_VERTICAL);

	expect(board.cells[0][0]).not.toBe(null);
	expect(board.cells[1][0]).not.toBe(null);
	expect(board.cells[2][0]).not.toBe(null);
	expect(board.cells[0][3]).toBe(null);
});

test("gameBoardFactory placeShip invalid Position", () => {
	const board = gameBoardFactory();
	const ship = shipFactory(10);
	const pos = position(9, 9);

	board.createBoard(GAME_DIMENSION);
	board.placeShip(ship, pos, DIRECTION_HORIZONTAL);

	expect(board.cells.every((cell) => cell === null)).toBe(false);
});
