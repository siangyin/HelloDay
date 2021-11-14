import React from "react";
import { Link } from "react-router-dom";

const AllDiaries = ({ diaries, handleDelete, handleEdit }) => {
	return (
		<div>
			<h2>All Diaries list component</h2>
			<ul>
				{diaries.map((day) => {
					return (
						<li key={day.id} className="entries-list">
							<Link to={`/diary/${day.date}`}>
							
								<strong>
									{day.date} : {day.title} >
								</strong>
								{day.tag.map((tag, i) => (
									<em key={i}>{tag} </em>
								))}{" "}
							</Link>
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
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default AllDiaries;
