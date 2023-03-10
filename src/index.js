import "./style.scss";
import { shipFactory } from "./factories/shipFactory";
import { player } from "./factories/playerFactory";

function component() {
	const el = document.createElement("div");
	el.innerHTML = "hello World";

	let ship1 = shipFactory(4);
	let player1 = player(["a", "b"], "player-A");

	return el;
}

document.body.appendChild(component());
