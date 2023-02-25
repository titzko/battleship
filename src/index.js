import "./style.scss";
import { shipFactory } from "./factories/shipFactory";

function component() {
	const el = document.createElement("div");
	el.innerHTML = "hello Worlddd";
	let ship1 = shipFactory("my first battleship");
	ship1.printParam();

	return el;
}

document.body.appendChild(component());
