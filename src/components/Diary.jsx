import { useState, useEffect } from "react";

import Quote from "./Quote";
import MoodTracker from "./MoodTracker";
import { tags } from "../Helper/Data";
import { useParams } from "react-router-dom";
import TagsDropdown from "./TagsDropdown";

// Diary Component function
const Diary = ({ setDailyDiary, diary }) => {
	// all variables & states...

	const { id } = useParams();
	//retrieving local storage diary by key:date
	console.log(JSON.parse(window.localStorage.getItem(id)));

	const today = new Date();
	const blankObj = {
		date:
			today.getFullYear() +
			"-" +
			(today.getMonth() + 1) +
			"-" +
			today.getDate(),
		mood: null,
		title: "",
		story: "",
		tag: [],
	};

	const [tagsList, setTagsList] = useState(tags);
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

	function handleTagsAdding(obj) {
		todayDiaryObj.tag.push(obj);
		// revising tags list (to remove selected tags for map)
		let newTagArr = tags.filter(function (item) {
			return !todayDiaryObj.tag.includes(item);
		});

		setTagsList(newTagArr);
	}

	function handleTagsRemoving(obj) {
		tagsList.push(obj);
		const sortList = tagsList.sort((a, b) => {
			return a.label - b.label;
		});

		setTagsList(sortList);

		let newTagArr = todayDiaryObj.tag.filter((item) => item.id !== obj.id);
		setTodayDiaryObj((prevState) => ({
			...prevState,
			tag: newTagArr,
		}));
	}

	function handleSubmit(e) {
		e.preventDefault();
		setDailyDiary(todayDiaryObj);
		localStorage.setItem(todayDiaryObj.date, JSON.stringify(todayDiaryObj));
		setTodayDiaryObj(blankObj);
		setMood(null);
	}

	return (
		<form className="form container" onSubmit={handleSubmit}>
			<Quote />

			<label className="diary-form-label">Date: </label>
			<input
				className="diary-form-input"
				type="date"
				name="date"
				value={todayDiaryObj.date}
				onChange={handleChange}
			></input>

			<MoodTracker
				mood={mood}
				setMood={setMood}
				setTodayDiaryObj={setTodayDiaryObj}
				todayDiaryObj={todayDiaryObj}
			/>
			<label className="diary-form-label">Title: </label>
			<input
				className="diary-form-input"
				type="text"
				name="title"
				value={todayDiaryObj.title}
				onChange={handleChange}
			></input>
			<br />
			<TagsDropdown tagsList={tagsList} clickHandler={handleTagsAdding} />
			<label className="diary-form-label">
				Tags:
				{todayDiaryObj.tag && (
					<TagsDropdown
						classTag="active"
						tagsList={todayDiaryObj.tag}
						clickHandler={handleTagsRemoving}
					/>
				)}
			</label>

			<label className="diary-form-label">Diary: </label>
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
