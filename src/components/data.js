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
import React from "react";

export const icons = [
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

export const preText = [
	"I am grateful for...",
	"3 amazing things that happened today",
	"What did I achieve today?",
	"What lessons did I learn?",
	"How could I have made today better?",
	"Wins and Challenges of the Day",
];

export const sampleDiaryData = [
	{
		date: "2021-11-10",
		mood: {
			id: 2,
			label: "Content",
			icon: <FaSmile />,
		},
		title: "Relaxing day",
		story: ` ✅ woke up 6 am,
		✅ went to gym,
		✅ grocery shopping,
		✅ clean the house,
		✅ DIY pizza
		✅ chill and movie`,
		tag: ["relax", "chill"],
	},
	{
		date: "2021-11-12",
		mood: {
			id: 0,
			label: "Lovely",
			icon: <FaGrinHearts />,
		},
		title: "A Letter to My Future Self",
		story: `Dear Future Self, 

Whatever you’re doing right now, stop. Go outside. Call your parents (if you’re lucky enough that they’re both still here). Take a moment and go have yourself a proper personal day. And don’t—don’t you dare—feel guilty for taking the time for yourself. 

You need to know that whatever decision you made, it was the right one. You’re here now, and you’re exactly where you need to be. 

A couple things to remember: You learned how to honor and treat your body well this year, and how to honor and treat those around you. Don’t ever settle for the easy way—just don’t settle, period. Life is too short. And remember that this current version of yourself loves you… And that’s not going to change. 

❤️❤️❤️ I love you!`,
		tag: ["selfcare", "love"],
	},
];
