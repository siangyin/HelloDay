import React from "react";

const AllDiaries = ({ sampleDiaryData }) => {
	return (
		<div>
			<h2>All Diaries list component</h2>
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

export default AllDiaries;
