import React from "react";
import { Link } from "react-router-dom";

const AllDiaries = ({ diaries, handleDelete, handleEdit }) => {
	return (
		<div>
			<h2>All Diaries list component</h2>
			{diaries.map((day) => {
				return (
					<div key={day.date} className="entries-list">
						<Link to={`/diary/${day.date}`}>
							{day.mood.icon} <strong>{day.title}</strong>
							{day.tag.map((tag, i) => (
								<em key={i}>{tag} </em>
							))}
							<button
								onClick={() => {
									handleEdit(day.date);
								}}
							>
								Edit
							</button>
							<button
								onClick={() => {
									handleDelete(day.date);
								}}
							>
								delete
							</button>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default AllDiaries;
