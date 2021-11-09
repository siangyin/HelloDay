import React, { useState } from "react";
import { preText } from "./data";

function Diary() {
	const randomText = preText[Math.floor(Math.random() * preText.length)];
	const today = new Date();
	const [date, setDate] = useState(
		today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
	);

	function handleChange(e) {
		const label = e.target;
		const value = e.target.value;
		console.log(label, value);
		setDate(value);
	}

	return (
		<form>
			<label htmlFor="date">Date: </label>
			<input
				type="date"
				id="date"
				name="date"
				value={date}
				onChange={handleChange}
			></input>
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
