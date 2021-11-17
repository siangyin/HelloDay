import "./styles/app.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AllDiaries from "./pages/AllDiaries";
import Diary from "./pages/Diary";
import NewDiary from "./pages/NewDiary";

export default function App() {
	const [dailyDiary, setDailyDiary] = useState();
	const [diaryEntries, setDiaryEntries] = useState([]);
	const [editing, setEditing] = useState();
	const [datedEditing, setDatedEditing] = useState();
	// const [userLoginStatus, setUserLoginStatus] = useState(true);

	// functions handler

	function handleDelete(id) {
		const newdata = diaryEntries.filter((diary) => diary.date !== id);
		setDiaryEntries(newdata);
	}

	function handleEdit(id) {
		setDatedEditing(id);
		const i = diaryEntries.findIndex((diary) => diary.date === id);
		setEditing(i);
	}

	useEffect(() => {
		// local storage
		function retrievingLocalStorage() {
			const dateKeys = Object.keys(localStorage);
			let localdb = [];

			for (const obj of dateKeys) {
				localdb.push(JSON.parse(localStorage.getItem(obj)));
			}

			localdb = localdb.sort((a, b) => {
				return new Date(b.date) - new Date(a.date);
			});

			setDiaryEntries(localdb);
			return localdb;
		}

		retrievingLocalStorage();

		if (dailyDiary) {
			const index = diaryEntries.findIndex((e) => e.date === dailyDiary.date);
			console.log(index);
		}
	}, [dailyDiary]);

	// console.logsssssssssssssssss

	// console.log("dailyDiary:", dailyDiary);
	// console.log("diaryEntries:", diaryEntries);
	// console.log("datedEditing:", datedEditing);
	// console.log(diaryEntries[editing]);

	return (
		<Router>
			<div className="App">
				<NavBar />
				<div className="content">
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route
							exact
							path="alldiaries"
							element={
								<AllDiaries
									diaries={diaryEntries}
									handleDelete={handleDelete}
									handleEdit={handleEdit}
								/>
							}
						/>
						<Route
							exact
							path="newdiary"
							element={<NewDiary setDailyDiary={setDailyDiary} />}
						/>

						<Route
							exact
							path="diary/:id"
							element={
								<Diary
									setDailyDiary={setDailyDiary}
									diary={diaryEntries[editing]}
									datedEditing={datedEditing}
								/>
							}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	);
}
