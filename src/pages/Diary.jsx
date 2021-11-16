import "../styles/diary.css";
import { FaPlusCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MoodTracker from "../components/MoodTracker";
import GetQuote from "../components/GetQuote";
import { tags } from "../helper/Data";
import TagsSelection from "../components/TagsSelection";

export default function Diary({ setDailyDiary, diary }) {
	// all variables & states...
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

	const { id } = useParams();
	//retrieving local storage diary by key:date
	console.log(JSON.parse(window.localStorage.getItem(id)));

	// states:
	const [tagsList, setTagsList] = useState(tags);
	const [isDisableSubmitBtn, setIsDisableSubmitBtn] = useState(true);
	const [mood, setMood] = useState(diary.mood);
	const [todayDiaryObj, setTodayDiaryObj] = useState(diary);

	// useEffect
	useEffect(() => {
		if (
			(todayDiaryObj.date && todayDiaryObj.mood) ||
			(todayDiaryObj.date && todayDiaryObj.title && todayDiaryObj.story)
		) {
			setIsDisableSubmitBtn(false);
		}
	}, [todayDiaryObj]);

	// functions

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
		<div className="diaries-container">
			<h3>New Diary</h3>
			<GetQuote />
			<form className="diary-form" onSubmit={handleSubmit}>
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
				<label className="diary-form-label">
					Tags selected:
					{todayDiaryObj.tag && (
						<TagsSelection
							classTag="active"
							tagsList={todayDiaryObj.tag}
							clickHandler={handleTagsRemoving}
						/>
					)}
				</label>
				<label>Tags option:</label>
				<TagsSelection tagsList={tagsList} clickHandler={handleTagsAdding} />

				<textarea
					className="diary-form-longinput"
					name="story"
					rows="5"
					cols="30"
					placeholder={todayDiaryObj.story}
					value={todayDiaryObj.story}
					onChange={handleChange}
				></textarea>

				{isDisableSubmitBtn ? (
					<button className="add-btn" type="submit" disabled>
						<FaPlusCircle />
					</button>
				) : (
					<button className="add-btn" type="submit">
						<FaPlusCircle />
					</button>
				)}
			</form>
		</div>
	);
}
