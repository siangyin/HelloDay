import { useState } from "react";
// import { useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Diary from "./components/NewDiary";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AllDiaries from "./components/AllDiaries";
import { sampleDiaryData } from "./data/Data";
import useFetch from "./useFetch";

const App = () => {
	const { diaries } = useFetch();

	const [dailyDiary, setDailyDiary] = useState();
	const [diariesEntries, setDiariesEntries] = useState(sampleDiaryData);
	const [editing, setEditing] = useState({ status: false, data: null });
	// const [userLoginStatus, setUserLoginStatus] = useState(true);

	// form submitted data
	console.log(dailyDiary);

	function handleDelete(id) {
		const newdata = diariesEntries.filter((diary) => diary.date !== id);
		setDiariesEntries(newdata);
	}

	function handleEdit(id) {
		const newdata = diariesEntries.filter((diary) => diary.date === id);
		setEditing({ status: true, data: newdata[0] });
		//data to edit & retrieved
		console.log(editing.data);
	}

	// not working, trying to update data.
	// useEffect(() => {
	// 	console.log("diary changed");
	// 	console.log(dailyDiary);
	// 	if (dailyDiary) {
	// 		const index = diariesEntries.findIndex((e) => e.date === dailyDiary.date);
	// 		console.log(index);
	// 	}
	// }, []);

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
									diaries={diariesEntries}
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
