import "../styles/diary.css";
import { FaPlusCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { preText, tags } from "../helper/Data";
import MoodTracker from "../components/MoodTracker";
import GetQuote from "../components/GetQuote";

import TagsSelection from "../components/TagsSelection";

const randomText = preText[Math.floor(Math.random() * preText.length)];

export default function NewDiary({ setDailyDiary }) {
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

	// states:
	const [tagsList, setTagsList] = useState(tags);
	const [isDisableSubmitBtn, setIsDisableSubmitBtn] = useState(true);
	const [mood, setMood] = useState(null);
	const [todayDiaryObj, setTodayDiaryObj] = useState(blankObj);

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
			<h3>Diary: {todayDiaryObj.date}</h3>
			<GetQuote />
			<form className="diary-form" onSubmit={handleSubmit}>
				<MoodTracker
					mood={mood}
					setMood={setMood}
					setTodayDiaryObj={setTodayDiaryObj}
					todayDiaryObj={todayDiaryObj}
				/>

				<input
					placeholder="title"
					className="diary-form-input"
					type="text"
					name="title"
					value={todayDiaryObj.title}
					onChange={handleChange}
				></input>

				<section className="subtagsection">
					<h5 className="sub-tag-selected">
						Tags selected:
						{todayDiaryObj.tag && (
							<TagsSelection
								classTag="active"
								tagsList={todayDiaryObj.tag}
								clickHandler={handleTagsRemoving}
							/>
						)}
					</h5>
					<h5 className="sub-tag-option">Tags option:</h5>
					<TagsSelection tagsList={tagsList} clickHandler={handleTagsAdding} />
				</section>

				<textarea
					className="diary-form-longinput"
					name="story"
					placeholder={randomText}
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
