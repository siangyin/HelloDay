import { useState } from "react";
import { useEffect } from "react";

import { preText } from "../data/Data";

import Quote from "./Quote";
import MoodTracker from "./MoodTracker";

const randomText = preText[Math.floor(Math.random() * preText.length)];

// Diary Component function
const Diary = ({ setDailyDiary, diary }) => {
	// all variables & states...

	const today = new Date();

	const [isDisableSubmitBtn, setIsDisableSubmitBtn] = useState(true);
	const [mood, setMood] = useState(null);
	const [todayDiaryObj, setTodayDiaryObj] = useState({
		date:
			today.getFullYear() +
			"-" +
			(today.getMonth() + 1) +
			"-" +
			today.getDate(),
		mood: mood,
		title: "",
		story: "",
		tag: [],
	});

	// for editing, passing data
	useEffect(() => {
		if (diary) {
			setTodayDiaryObj(diary);
			setMood(diary.mood);
		}

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
				placeholder={randomText}
				value={todayDiaryObj.story}
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
