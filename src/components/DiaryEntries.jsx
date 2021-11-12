import React from "react";
import { sampleDiaryData } from "./data";

const DiaryEntries = () => {
	return (
		<div>
			<h2>All Diary Entries</h2>
			{sampleDiaryData.map((day) => {
				return (
					<div key={day.date} className="entries-list">
						{day.mood.icon} <strong>{day.title} </strong>
						{day.tag.map((tag) => (
							<em>{tag} </em>
						))}
						<button>delete</button>
					</div>
				);
			})}
		</div>
	);
};

export default DiaryEntries;
