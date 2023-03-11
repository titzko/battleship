import { gameBoardFactory } from "../factories/gameBoardFactory";

test("gameBoardFactory createBoardFunction", () => {
	let board = gameBoardFactory();
	expect(board.boardArr).toBe(undefined);
	board.createBoard(10);
	expect(board.boardArr.length).toBe(10);
});
