import React, { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

import "./styles/App.css";
import Quote from "./components/Quote";
import Diary from "./components/Diary";

function App() {
	const [users, setUsers] = useState([]);
	const usersCollectionRef = collection(db, "users");

	useEffect(() => {
		const getUsers = async () => {
			const data = await getDocs(usersCollectionRef);
			//getting back the users data and id
			setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getUsers();
	}, []);

	return (
		<div className="App">
			<h1>Hello Day</h1>

			<Quote />
			<Diary />
		</div>
	);
}

export default App;
