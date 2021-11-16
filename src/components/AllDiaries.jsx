import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../Helper/Data";
import { FaTrash } from "react-icons/fa";

const AllDiaries = ({ diaries, handleDelete, handleEdit }) => {
	return (
		<div className="diaries-list">
			<h3>All Diaries</h3>

			{diaries.map((obj) => {
				return (
					<div key={obj.date} className="diaries-item">
						<Link
							className="diaries-item links"
							to={`/diary/${obj.date}`}
							onClick={() => {
								handleEdit(obj.date);
							}}
						>
							<p className="diary-date">{obj.date}</p>
							<h4 className="diary-title">
								{obj.title || `Feeling ${icons[obj.mood].label}`}
							</h4>
							<span className="diaries-item-mood">{icons[obj.mood].icon}</span>
						</Link>

						<FaTrash
							className="delete-btn"
							onClick={() => {
								handleDelete(obj.date);
							}}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default AllDiaries;
