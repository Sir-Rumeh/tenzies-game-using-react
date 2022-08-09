import React from "react";

export default function Die({ value, isHeld, holdSelected }) {
	// set style for dice depending on if its selected or not
	const styles = {
		backgroundColor: isHeld ? "green" : "#f1f0f0",
		color: isHeld ? "white" : "black",
	};

	return (
		<div className="die-face" style={styles} onClick={holdSelected}>
			<h2>{value}</h2>
		</div>
	);
}
