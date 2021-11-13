import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { db } from "./firebase/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";

import Diary from "./components/NewDiary";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AllDiaries from "./components/AllDiaries";
// import { sampleDiaryData } from "./data/Data";
// import useFetch from "./useFetch";

const App = () => {
	// const { diaries } = useFetch();

	const [dailyDiary, setDailyDiary] = useState();
	const [diaryEntries, setDiaryEntries] = useState([]);
	const [editing, setEditing] = useState({ status: false, data: null });
	// const [userLoginStatus, setUserLoginStatus] = useState(true);

	// console.log(diaries);
	// console.log(sampleDiaryData);

	// form submitted data
	// console.log(dailyDiary);
	console.log(diaryEntries);
	//fetch
	useEffect(
		() =>
			onSnapshot(collection(db, "diaries"), (snapshot) => {
				const data = snapshot.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}));
				setDiaryEntries(data);
			}),

		[]
	);

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

	// not working, trying to update data.
	useEffect(() => {
		console.log("diary changed");
		console.log(dailyDiary);
		if (dailyDiary) {
			const index = diaryEntries.findIndex((e) => e.date === dailyDiary.date);
			console.log(index);
		}
	}, [dailyDiary]);

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
