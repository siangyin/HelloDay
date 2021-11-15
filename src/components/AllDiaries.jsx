import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../Helper/Data";

const AllDiaries = ({ diaries, handleDelete, handleEdit }) => {
	return (
		<div>
			<h2>All Diaries list component</h2>
			<ul>
				{diaries.map((day) => {
					return (
						<li key={day.date} className="entries-list">
							<Link
								to={`/diary/${day.date}`}
								onClick={() => {
									handleEdit(day.date);
								}}
							>
								<strong>
									{day.date} : {day.title || `Feeling ${icons[day.mood].label}`}
								</strong>
							</Link>
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
