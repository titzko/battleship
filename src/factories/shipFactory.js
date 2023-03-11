const shipFactory = (initLength) => {
	const hits = 0;
	const gotHit = function () {
		return (this.hits += 1);
	};
	const isSunk = function () {
		return this.hits >= this.length;
	};

	const length = initLength;
	return { hits, length, isSunk, gotHit };
};

export { shipFactory };
