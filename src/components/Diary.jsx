import React from "react";
import { preText } from "./data";

function Diary() {
	const randomText = preText[Math.floor(Math.random() * preText.length)];

	return (
		<form>
			<label htmlFor="date">Date: </label>
			<input type="date" id="date" name="date"></input>
			<br />
			<textarea
				id="story"
				name="story"
				rows="5"
				cols="33"
				placeholder={randomText}
			></textarea>
		</form>
	);
}

export default Diary;
