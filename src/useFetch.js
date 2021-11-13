// import { useState } from "react";
// import { useEffect } from "react";
// import { db } from "./firebase/firebase-config";
// import { collection, onSnapshot } from "firebase/firestore";
// import { getDocs } from "firebase/firestore";

const useFetch = () => {
	// firebase;
	// const [diaries, setDiaries] = useState([]);

	// alternative option
	// useEffect(
	// 	() =>
	// 		onSnapshot(collection(db, "diaries"), (snapshot) => {
	// 			setDiaries(snapshot.docs.map((doc) => doc.data()));
	// 		}),
	// 	[]
	// );

	// console.log(diaries);

// 	// alternative option
// 	const diariesCollectionRef = collection(db, "diaries");
// 	useEffect(() => {
// 		const getDiaries = async () => {
// 			const data = await getDocs(diariesCollectionRef);
// 			//getting back the diaries data and id
// 			setDiaries(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
// 			console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
// 		};

// 		getDiaries();
// 	}, []);

	return diaries;
};

export default useFetch;
