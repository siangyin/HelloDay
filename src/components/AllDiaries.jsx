import React from "react";

const AllDiaries = ({ diaries, handleDelete }) => {
	return (
		<div>
			<h2>All Diaries list component</h2>
			{diaries.map((day) => {
				return (
					<div key={day.date} className="entries-list">
						{day.mood.icon} <strong>{day.title}</strong>
						{day.tag.map((tag) => (
							<em key={tag.id}>{tag} </em>
						))}
						<button
							onClick={() => {
								handleDelete(day.date);
							}}
						>
							delete
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default AllDiaries;
