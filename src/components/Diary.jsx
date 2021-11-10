import React, { useState } from "react";
import { preText } from "./data";
import MoodTracker from "./MoodTracker";

function Diary() {
	const randomText = preText[Math.floor(Math.random() * preText.length)];
	const [mood, setMood] = useState();
	const today = new Date();
	const [todayDiaryObj, setTodayDiaryObj] = useState({
		date:
			today.getFullYear() +
			"-" +
			(today.getMonth() + 1) +
			"-" +
			today.getDate(),
		title: "",
		story: "",
		tag: [],
	});

	function handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		const id = Date.now();
		setTodayDiaryObj((prevState) => ({ ...prevState, [name]: value, id }));
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
			<MoodTracker mood={mood} setMood={setMood} />
			<label htmlFor="title">Title: </label>
			<input
				className="daily-input-form"
				type="text"
				id="title"
				name="title"
				value={todayDiaryObj.title}
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
				id="story"
				name="story"
				rows="5"
				cols="30"
				placeholder={randomText}
				value={todayDiaryObj.story}
				onChange={handleChange}
			></textarea>
		</form>
	);
}

export default Diary;
