import _ from "lodash";
import "./style.scss";
import { shipFactory } from "./factories/shipFactory";

function component() {
	const element = document.createElement("div");
	const btn = document.createElement("button");

	element.innerHTML = _.join(["Hello", "webpack"], " ");

	btn.innerHTML = "Click me and check the console!";
	btn.onclick = () => alert("hi");

	element.appendChild(btn);

	let ship1 = shipFactory("my first battleship");
	ship1.printParam();

	return element;
}

document.body.appendChild(component());
