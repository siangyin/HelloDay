// import { useState } from "react";
// import { useEffect } from "react";
// import { db } from "./firebase/firebase-config";
// import { collection, getDocs } from "firebase/firestore";

// const useFetch = () => {
// 	// firebase;
// 	const [users, setUsers] = useState([]);
// 	const usersCollectionRef = collection(db, "users");

// 	useEffect(() => {
// 		const getUsers = async () => {
// 			const data = await getDocs(usersCollectionRef);
// 			//getting back the users data and id
// 			setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
// 			console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
// 		};

// 		getUsers();
// 	}, []);

// 	return users;
// };

// export default useFetch;
