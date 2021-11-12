import { useState } from "react";
// import { useEffect } from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Diary from "./components/NewDiary";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AllDiaries from "./components/AllDiaries";
import { sampleDiaryData } from "./data/Data";
// import useFetch from "./useFetch";

const App = () => {
	// const { users } = useFetch();

	const [dailyDiary, setDailyDiary] = useState();
	const [diaries, setDiaries] = useState(sampleDiaryData);
	const [editing, setEditing] = useState({ status: false, data: null });

	// form submitted data
	console.log(dailyDiary);

	function handleDelete(id) {
		const newdata = diaries.filter((diary) => diary.date !== id);
		setDiaries(newdata);
	}

	function handleEdit(id) {
		const newdata = diaries.filter((diary) => diary.date === id);
		setEditing({ status: true, data: newdata[0] });
		//data to edit & retrieved
		console.log(editing.data);
	}

	// not working, trying to update data.
	// useEffect(() => {
	// 	console.log("diary changed");
	// 	console.log(dailyDiary);
	// 	if (dailyDiary) {
	// 		const index = diaries.findIndex((e) => e.date === dailyDiary.date);
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
									diaries={diaries}
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
							path="editdiary"
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
