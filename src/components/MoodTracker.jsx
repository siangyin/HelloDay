import { moodIcons } from "../helper/Data";

export default function MoodTracker({ setMood, mood, setTodayDiaryObj }) {
	const listing = moodIcons.map((icon) => {
		return (
			<span
				key={icon.id}
				className="mood-icon"
				onClick={() => {
					setMood(icon.id);
					console.log("mood clicked", icon.id);
					setTodayDiaryObj((prevState) => ({
						...prevState,
						mood: icon.id,
					}));
				}}
			>
				{icon.icon}
			</span>
		);
	});

	if (mood !== null) {
		return (
			<div className="mood-tracker">
				<p>
					Mood of the day:
					<span className="mood-icon active">{moodIcons[mood].icon}</span>
					<span>{moodIcons[mood].label}</span>
				</p>
				{listing}
			</div>
		);
	}
	return (
		<div className="mood-tracker">
			<h4>Mood of the day:</h4>
			{listing}
		</div>
	);
}
