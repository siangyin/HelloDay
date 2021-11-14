import React from "react";
import { icons } from "../data/Data";

const MoodTracker = ({ setMood, mood, setTodayDiaryObj, todayDiaryObj }) => {
	return (
		<div>
			<h4>
				How's your day?{" "}
				{icons.map((icon) => {
					return (
						<span
							key={icon.id}
							className="mood-icon"
							onClick={() => {
								setMood(icon.id);
								setTodayDiaryObj((prevState) => ({
									...prevState,
									mood: icon.id,
								}));
							}}
						>
							{icon.icon}
						</span>
					);
				})}
			</h4>

			{mood && (
				<h4>
					Mood of the day : {icons[mood].icon} feeling {icons[mood].label}
				</h4>
			)}
		</div>
	);
};

export default MoodTracker;
