import React from "react";

export default function RollButton({ rollNewDice, tenzies }) {
	return (
		<button onClick={rollNewDice}>
			{tenzies ? "New Game" : "Roll Dice"}
		</button>
	);
}
