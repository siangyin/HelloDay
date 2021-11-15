import { useState, useEffect } from "react";

import { preText, tags } from "../data/Data";

import Quote from "./Quote";
import MoodTracker from "./MoodTracker";
import { useParams } from "react-router-dom";

const randomText = preText[Math.floor(Math.random() * preText.length)];

// Diary Component function
const NewDiary = ({ setDailyDiary }) => {
	// all variables & states...
	// const { id } = useParams();
	// console.log("useParam ID:", id);
	const today = new Date();
	const [tagsList, setTagsList] = useState();

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
		// revising tags list (to remove selected tags for map)
		let newTagArr = tags.filter(function (item) {
			return !todayDiaryObj.tag.includes(item);
		});
		// console.log(newTagArr);
		setTagsList(newTagArr);

		if (
			(todayDiaryObj.date && todayDiaryObj.mood) ||
			(todayDiaryObj.date && todayDiaryObj.title && todayDiaryObj.story)
		) {
			setIsDisableSubmitBtn(false);
			console.log("ok");
		}
	}, [todayDiaryObj]);

	function handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;

		setTodayDiaryObj((prevState) => ({
			...prevState,
			[name]: value,
			mood: mood,
		}));
	}

	// all console.log
	// console.log(tagsList);
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

			<h4 className="diary-form-label">
				Tags:
				{todayDiaryObj.tag &&
					todayDiaryObj.tag.map((tag) => {
						<span className="tag">{tag}</span>;
					})}
			</h4>
			<select name="tags" multiple>
				{tagsList &&
					tagsList.map((item, i) => {
						<option
							key={i}
							value={item}
							onDoubleClick={(e) => {
								todayDiaryObj.tag.push(e.target.value);
								console.log(todayDiaryObj.tag);
							}}
						>
							{item}
						</option>;
					})}
			</select>
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

export default NewDiary;
