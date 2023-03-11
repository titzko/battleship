import { shipFactory } from "./../factories/shipFactory";

test("test isSunk from shipFactory", () => {
	const ship = shipFactory(3);
	ship.hits = ship.hits + 3;
	expect(ship.isSunk()).toBe(true);
});

test("test gotHit from shipFactory", () => {
	const ship = shipFactory(3);
	ship.gotHit();
	expect(ship.hits).toBe(1);
});
