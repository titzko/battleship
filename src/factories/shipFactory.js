const shipFactory = (initLength) => {
	const position = [1, 2, 3, 4];
	const hits = 0;
	const isSunk = function () {
		return this.hits >= this.length;
	};

	const length = initLength;
	return { position, hits, isSunk, length };
};

export { shipFactory };

/*
const changeColor = function () {
    this.color = "green";
};
*/
