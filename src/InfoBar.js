import React from "react";

export default function InfoBar({ clicks }) {
	return (
		<div className="info-bar">
			<h2>You have made {clicks} moves</h2>
			{/* <script>{console.log("hello")}</script> */}
		</div>
	);
}
