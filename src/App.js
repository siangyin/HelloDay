import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Diary from "./components/NewDiary";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AllDiaries from "./components/AllDiaries";

const App = () => {
	const [dailyDiary, setDailyDiary] = useState();
	const [diaryEntries, setDiaryEntries] = useState([]);
	const [editing, setEditing] = useState({ status: false, data: null });
	// const [userLoginStatus, setUserLoginStatus] = useState(true);

	// form submitted data
	console.log("dailyDiary:", dailyDiary);
	console.log("diaryEntries:", diaryEntries);

	// get today date
	// function getToDate() {
	// 	const today = new Date();
	// 	const date =
	// 		today.getFullYear() +
	// 		"-" +
	// 		(today.getMonth() + 1) +
	// 		"-" +
	// 		today.getDate();
	// 	return date;
	// }

	function handleDelete(id) {
		const newdata = diaryEntries.filter((diary) => diary.date !== id);
		setDiaryEntries(newdata);
	}

	function handleEdit(id) {
		const newdata = diaryEntries.filter((diary) => diary.date === id);
		setEditing({ status: true, data: newdata[0] });
		//data to edit & retrieved
		console.log(editing.data);
	}

	// TBC get index of the data, try to replace diary entry (for editing)
	useEffect(() => {
		// local storage
		function retrievingLocalStorage() {
			const dateKeys = Object.keys(localStorage);
			let localdb = [];

			for (const obj of dateKeys) {
				localdb.push(JSON.parse(localStorage.getItem(obj)));
			}

			console.log(
				localdb.sort((a, b) => {
					return new Date(b.date) - new Date(a.date);
				})
			);

			setDiaryEntries(localdb);
			return localdb;
		}

		retrievingLocalStorage();
		console.log("diary changed", dailyDiary);
		console.log("diaries entries", diaryEntries);

		if (dailyDiary) {
			const index = diaryEntries.findIndex((e) => e.date === dailyDiary.date);
			console.log(index);
		}
	}, [dailyDiary]);

	// console.log
	// console.log(diaries);

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
							element={<Diary setDailyDiary={setDailyDiary} />}
						/>

						<Route
							exact
							path="diary/:id"
							element={
								editing.status && (
									<Diary setDailyDiary={setDailyDiary} diary={editing.data} />
								)
							}
						/>
					</Routes>
					{editing.status && (
						<Diary setDailyDiary={setDailyDiary} diary={editing.data} />
					)}
				</div>
			</div>
		</Router>
	);
};

export default App;
