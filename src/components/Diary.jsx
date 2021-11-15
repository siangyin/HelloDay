import { useState, useEffect } from "react";

import { preText } from "../data/Data";

import Quote from "./Quote";
import MoodTracker from "./MoodTracker";
import { useParams } from "react-router-dom";

const randomText = preText[Math.floor(Math.random() * preText.length)];

// Diary Component function
const Diary = ({ setDailyDiary, diary }) => {
	// all variables & states...
	const { id } = useParams();
	console.log("useParam ID:", id);
	const today = new Date();
	console.log(diary);
	console.log(JSON.parse(window.localStorage.getItem(id)));
	const [isDisableSubmitBtn, setIsDisableSubmitBtn] = useState(true);
	const [mood, setMood] = useState(diary.mood);
	const [todayDiaryObj, setTodayDiaryObj] = useState(diary);

	// for editing, passing data
	useEffect(() => {
		if (
			(todayDiaryObj.date && todayDiaryObj.mood) ||
			(todayDiaryObj.date && todayDiaryObj.title && todayDiaryObj.story)
		) {
			setIsDisableSubmitBtn(false);
			console.log("ok");
		}
	}, [diary, todayDiaryObj]);

	function handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;

		setTodayDiaryObj((prevState) => ({
			...prevState,
			[name]: value,
			mood: mood,
		}));
	}

	// function handleSubmit

	return (
		<form
			className="form container"
			onSubmit={(e) => {
				e.preventDefault();
				setDailyDiary(todayDiaryObj);
				localStorage.setItem(todayDiaryObj.date, JSON.stringify(todayDiaryObj));
			}}
		>
			<Quote />
			<br />

			<h4 className="diary-form-label">Date: </h4>
			<input
				className="diary-form-input"
				type="date"
				name="date"
				value={todayDiaryObj.date}
				onChange={handleChange}
			></input>
			<br />

			<MoodTracker
				mood={mood}
				setMood={setMood}
				setTodayDiaryObj={setTodayDiaryObj}
				todayDiaryObj={todayDiaryObj}
			/>
			<h4 className="diary-form-label">Title: </h4>
			<input
				className="diary-form-input"
				type="text"
				name="title"
				value={todayDiaryObj.title}
				onChange={handleChange}
			></input>
			<br />

			<h4 className="diary-form-label">Tags: </h4>
			<input
				className="diary-form-input"
				type="tag"
				name="tag"
				value={todayDiaryObj.tag}
				onChange={handleChange}
			></input>
			<br />

			<h4 className="diary-form-label">Diary: </h4>
			<textarea
				className="diary-form-longinput"
				name="story"
				rows="5"
				cols="30"
				placeholder={todayDiaryObj.story}
				onChange={handleChange}
			></textarea>
			{isDisableSubmitBtn ? (
				<button type="submit" disabled>
					Add
				</button>
			) : (
				<button type="submit">Add</button>
			)}
		</form>
	);
};

export default Diary;
