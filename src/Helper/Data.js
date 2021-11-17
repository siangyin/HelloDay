import {
	FaTired,
	FaAngry,
	FaLaughBeam,
	FaSmile,
	FaSadCry,
	FaFrown,
	FaMeh,
	FaGrinHearts,
	FaGrinTongue,
	FaFlushed,
} from "react-icons/fa";

// DataArr: preText
// DataObj: tags, moodIcons

export const preText = [
	"I am grateful for...",
	"3 amazing things that happened today",
	"What did I achieve today?",
	"What lessons did I learn?",
	"How could I have made today better?",
	"Wins and Challenges of the Day",
];

export const tags = [
	{ id: 1, label: "family" },
	{ id: 2, label: "friend" },
	{ id: 3, label: "love" },
	{ id: 4, label: "social" },
	{ id: 5, label: "self-care" },
	{ id: 6, label: "movie" },
	{ id: 7, label: "meditation" },
	{ id: 8, label: "work" },
	{ id: 9, label: "habit" },
	{ id: 10, label: "happiness" },
	{ id: 11, label: "health" },
	{ id: 12, label: "home" },
	{ id: 13, label: "fitness" },
	{ id: 14, label: "finance" },
];

export const moodIcons = [
	{
		id: 0,
		label: "Lovely",
		icon: <FaGrinHearts />,
	},
	{
		id: 1,
		label: "Amazing",
		icon: <FaLaughBeam />,
	},
	{
		id: 2,
		label: "Content",
		icon: <FaSmile />,
	},
	{
		id: 3,
		label: "Silly",
		icon: <FaGrinTongue />,
	},
	{
		id: 4,
		label: "Neutral",
		icon: <FaMeh />,
	},
	{
		id: 5,
		label: "Embarassed",
		icon: <FaFlushed />,
	},
	{
		id: 6,
		label: "Tired",
		icon: <FaTired />,
	},
	{
		id: 7,
		label: "Disappointed",
		icon: <FaFrown />,
	},
	{
		id: 8,
		label: "Upset",
		icon: <FaSadCry />,
	},
	{
		id: 9,
		label: "Frustrated",
		icon: <FaAngry />,
	},
];
