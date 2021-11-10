import React, { useState } from "react";
import { preText } from "./data";

function Diary() {
	const randomText = preText[Math.floor(Math.random() * preText.length)];

	const today = new Date();
	const [todayDiaryObj, setTodayDiaryObj] = useState({
		date:
			today.getFullYear() +
			"-" +
			(today.getMonth() + 1) +
			"-" +
			today.getDate(),
		header: "",
		text: "",
		tag: [],
	});

	function handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;

		setTodayDiaryObj((prevState) => ({ ...prevState, [name]: value }));
		console.log(todayDiaryObj);
	}

	return (
		<form className="form container">
			<label htmlFor="date">Date: </label>
			<input
				className="daily-input-form"
				type="date"
				id="date"
				name="date"
				value={todayDiaryObj.date}
				onChange={handleChange}
			></input>
			<br />
			<label htmlFor="header">Header: </label>
			<input
				className="daily-input-form"
				type="text"
				id="header"
				name="header"
				value={todayDiaryObj.header}
				onChange={handleChange}
			></input>
			<br />
			<label htmlFor="tag">Tags: </label>
			<input
				className="daily-input-form"
				type="tag"
				id="tag"
				name="tag"
				value={todayDiaryObj.tag}
				onChange={handleChange}
			></input>
			<br />
			<textarea
				className="daily-input-form"
				id="text"
				name="text"
				rows="5"
				cols="33"
				placeholder={randomText}
				value={todayDiaryObj.text}
				onChange={handleChange}
			></textarea>
		</form>
	);
}

export default Diary;
