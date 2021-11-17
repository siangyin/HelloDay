import "../styles/alldiaries.css";
import { moodIcons } from "../helper/Data";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AllDiaries({ diaries, handleDelete, handleEdit }) {
	const listing = diaries.map((obj) => {
		return (
			<article key={obj.date} className="daily-diary-item">
				<Link
					className="daily-diary-item-links"
					to={`/diary/${obj.date}`}
					onClick={() => {
						handleEdit(obj.date);
					}}
				>
					<header className="diary-info">
						<p className="diary-date">{obj.date}</p>
						<span className="diaries-item-mood">
							{moodIcons[obj.mood].icon}
						</span>
						<h4 className="diary-title">
							{obj.title || `Feeling ${moodIcons[obj.mood].label}`}
						</h4>
					</header>
				</Link>
				<FaTrash
					className="delete-btn"
					onClick={() => {
						handleDelete(obj.date);
					}}
				/>
			</article>
		);
	});

	return (
		<div className="diaries-container">
			<h3>All diaries</h3>
			<section className="listing"> {listing} </section>
		</div>
	);
}
