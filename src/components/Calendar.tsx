import convertMonthToNumber from "@/utils/convertMonthToNumber";
import { data } from "@/utils/data";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface IProps {
	month: string;
}

type Day = {
	date: number;
	events: { id: string; title: string }[];
};

export default function Calendar({ month }: IProps) {
	const [selectedDate, setSelectedDate] = useState<number | null>(null);

	const router = useRouter();

	const monthData = data
		.map((i) => i.months)
		.flat()
		.find((i) => i.name === month)?.days;

	console.log(monthData);
	if (selectedDate) {
		router.push(`/month/${month}/day/${selectedDate}`);
	}

	// const used = data
	// 	.filter((item) => item.year === year)
	// 	.map((item) => item.months)
	// 	.flat();

	const currentDate = new Date();

	const monthNumber: number | undefined = convertMonthToNumber(month as string);

	if (!monthNumber) return null;

	const daysInMonth = new Date(currentDate.getFullYear(), monthNumber, 0).getDate();

	const daysInPrevMonth = new Date(currentDate.getFullYear(), monthNumber - 1, 0).getDate();

	const firstDayOfWeek = new Date(currentDate.getFullYear(), monthNumber - 1, 1).getDay();

	const weekdays: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	const weekdayCells: React.ReactNode[] = weekdays.map((weekday) => (
		<p key={weekday} className="p-2 text-lg font-semibold tracking-wider cursor-default">
			{weekday}
		</p>
	));

	const days: Day[] = [];
	for (let i = 1; i <= daysInMonth; i++) {
		days.push({ date: i, events: [] });
	}
	const prevMonthCells: React.ReactNode[] = [];
	for (let i = firstDayOfWeek - 1; i >= 0; i--) {
		prevMonthCells.push(
			<p
				key={`prev-${i}`}
				className="p-4 border-2 border-red-500 cursor-pointer hover:text-white hover:border-black hover:bg-red-500 flex-center rounded-xl prev-month"
			>
				{daysInPrevMonth - i}
			</p>
		);
	}

	const currentMonthCells: React.ReactNode[] = [];
	for (let i = 1; i <= daysInMonth; i++) {
		currentMonthCells.push(
			<div
				key={`current-${i}`}
				className={`border-2 cursor-pointer flex-center rounded-xl hover:text-white hover:border-black hover:bg-green-500 border-green-500 p-4 
				${monthData?.find((day) => day.day === i) && "bg-green-500 text-white"}	
				${selectedDate === i && "bg-blue-500 text-white"} `}
				onClick={() => setSelectedDate(i)}
				// i don't think i need selected
			>
				<p className="text-xl">{i}</p>
				{days[i - 1].events.map((event) => (
					<div key={event.id} className="event">
						{event.title} 1
					</div>
				))}
			</div>
		);
	}

	const remainingCells =
		monthNumber === 1
			? 42 - currentMonthCells.length
			: 42 - (prevMonthCells.length + currentMonthCells.length);

	const nextMonthCells: React.ReactNode[] = [];
	for (let i = 1; i <= remainingCells; i++) {
		nextMonthCells.push(
			<p
				key={`next-${i}`}
				className="p-4 text-xl border-2 border-yellow-400 cursor-pointer hover:text-white hover:border-black hover:bg-yellow-400 flex-center rounded-xl next-month"
			>
				{i}
			</p>
		);
	}

	const allCells: React.ReactNode[] = [
		monthNumber !== 1 && prevMonthCells,
		...currentMonthCells,
		...nextMonthCells,
	];

	return (
		<div>
			<div className="grid grid-cols-7 px-5 py-2.5 rounded-2xl shadow-pop text-center bg-white border-b-2  border-solid">
				{weekdayCells}
			</div>
			<div className="grid grid-cols-7 gap-4 p-5 mt-4 bg-white border-2 border-black rounded-2xl shadow-pop">
				{allCells}
			</div>
		</div>
	);
}
