import { useState } from "react";
// import { useEffect } from "react";
// import { db } from "../firebase/firebase-config";
// import { collection, getDocs } from "firebase/firestore";
import { preText } from "./data";

import Quote from "./Quote";
import MoodTracker from "./MoodTracker";

const randomText = preText[Math.floor(Math.random() * preText.length)];

// Diary Component function
const Diary = ({ setDailyDiary }) => {
	// all variables & states...

	const today = new Date();

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

	//firebase
	// const [users, setUsers] = useState([]);
	// const usersCollectionRef = collection(db, "users");

	// useEffect(() => {
	// 	const getUsers = async () => {
	// 		const data = await getDocs(usersCollectionRef);
	// 		//getting back the users data and id
	// 		setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
	// 		console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
	// 	};

	// 	getUsers();
	// }, []);

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
			{/* {users[0] && <h4>{users[0].name}</h4>} */}

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

			<button type="submit">Add</button>
		</form>
	);
};

export default Diary;
