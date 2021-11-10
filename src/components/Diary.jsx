import React, { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { preText } from "./data";

import Quote from "./Quote";
import MoodTracker from "./MoodTracker";

// Diary Component function
const Diary = () => {
	// all variables & states...
	const randomText = preText[Math.floor(Math.random() * preText.length)];
	const today = new Date();

	const [users, setUsers] = useState([]);
	const usersCollectionRef = collection(db, "users");

	const [mood, setMood] = useState();
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

	useEffect(() => {
		const getUsers = async () => {
			const data = await getDocs(usersCollectionRef);
			//getting back the users data and id
			setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getUsers();
	}, []);

	function handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		const id = Date.now();
		setTodayDiaryObj((prevState) => ({ ...prevState, [name]: value, id }));
		console.log(todayDiaryObj);
	}

	return (
		<form className="form container">
			<Quote />

			<label htmlFor="date">Date: </label>
			<input
				className="daily-input-form"
				type="date"
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
				name="title"
				value={todayDiaryObj.title}
				onChange={handleChange}
			></input>
			<br />

			<label htmlFor="tag">Tags: </label>
			<input
				className="daily-input-form"
				type="tag"
				name="tag"
				value={todayDiaryObj.tag}
				onChange={handleChange}
			></input>
			<br />

			<textarea
				className="daily-input-form"
				name="story"
				rows="5"
				cols="30"
				placeholder={randomText}
				value={todayDiaryObj.story}
				onChange={handleChange}
			></textarea>
		</form>
	);
};

export default Diary;
