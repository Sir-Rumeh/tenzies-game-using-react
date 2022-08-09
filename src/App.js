import "./App.css";
import React, { useEffect, useState } from "react";
// dependencies
import { nanoid } from "nanoid";
// components
import Die from "./Die";
import RollButton from "./RollButton";
import InfoBar from "./InfoBar";

function App() {
	// initialize states
	const [dice, setDice] = useState(allNewDice);
	const [tenzies, setTenzies] = useState(false);
	const [clicks, setClicks] = useState(0);

	// check for win condition
	useEffect(() => {
		const allHeld = dice.every((die) => die.isHeld);
		const allValue = dice.every((die) => die.value === dice[0].value);
		if (allHeld && allValue) {
			setTenzies(true);
			alert("You Won");
			console.log("won");
		} else {
			console.log("not yet");
		}
	}, [dice]);

	// get new random dice
	function allNewDice() {
		const newDice = [];

		for (let i = 0; i < 10; i++) {
			let randomDice = Math.floor(Math.random() * 6 + 1);
			newDice.push({
				value: randomDice,
				isHeld: false,
				id: nanoid(),
			});
		}
		return newDice;
	}

	// rolldice button function
	function rollNewDice(e) {
		if (!tenzies) {
			setDice((prevDice) =>
				prevDice.map((die) => {
					return die.isHeld
						? die
						: {
								value: Math.floor(
									Math.random() * 6 + 1
								),
								isHeld: false,
								id: nanoid(),
						  };
				})
			);
		} else {
			setTenzies(false);
			setDice(allNewDice);
			setClicks(0);
		}

		// set number of clicks per game
		if (!tenzies) {
			let moves = e.currentTarget;
			moves = clicks + 1;
			setClicks(moves);
			// console.log clicks after a while
			setTimeout(() => console.log(clicks), 1000);
		} else {
			setClicks(0);
		}
	}

	// keep selected dice
	function holdSelected(id) {
		setDice((prevDice) =>
			prevDice.map((die) => {
				return die.id === id
					? { ...die, isHeld: !die.isHeld }
					: die;
			})
		);
		console.log("tsting");
	}

	// initialize/display dice
	const diceElements = dice.map((die) => (
		<Die
			value={die.value}
			key={die.id}
			isHeld={die.isHeld}
			holdSelected={() => holdSelected(die.id)}
		/>
	));

	return (
		<div className="main">
			<h1 className="title">tenzies</h1>
			<div className="description">
				<p>
					Roll until all dice are the same. click each die to
					freeze it at its current value between rolls.
				</p>
			</div>
			<div className="container">{diceElements}</div>
			<RollButton rollNewDice={rollNewDice} tenzies={tenzies} />
			<InfoBar clicks={clicks} />
			<script>{console.log("hello")}</script>
		</div>
	);
}

export default App;
