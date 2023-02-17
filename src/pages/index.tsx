import { data } from "@/utils/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
	const currentYear = new Date().getFullYear();

	const monthsInYear = [...Array(12).keys()].map((i) =>
		new Date(0, i).toLocaleString("default", { month: "long" })
	);

	const [year, setYear] = useState(currentYear);
	const router = useRouter();

	useEffect(() => {
		if (localStorage.getItem("token")) {
			router.push("/login");
		}
	}, [router]);

	const handleSetYear = (year: number) => setYear(year);

	const month = data
		.filter((item) => item.year === year)
		.map((item) => item.months)
		.flat();

	return (
		<div className="px-10 py-2.5">
			<h2 className="my-5 text-center text-white drop-shadow-xl">Spending statistics in {year}</h2>
			<div className="flex space-x-5">
				<div className="w-1/12">
					{data.map((item) => (
						<div key={item.id}>
							<button
								className={`px-5 py-3 mb-5 font-medium text-white outline-none bg-secondary rounded-2xl hover:scale-105 shadow-pop ${
									item.year === year ? "bg-green-500" : ""
								}`}
								onClick={() => handleSetYear(item.year)}
							>
								{item.year}
							</button>
						</div>
					))}
					{!data.some((item) => item.year === year) && (
						<button
							className={`px-5 py-3 mb-5 font-medium text-white outline-none bg-secondary rounded-2xl hover:scale-105 shadow-pop ${
								year ? "bg-green-500" : ""
							}`}
							onClick={() => handleSetYear(year)}
						>
							{year}
						</button>
					)}
				</div>
				<div className="flex-1 py-5 bg-white shadow-pop rounded-2xl">
					<div className="flex-wrap gap-7 flex-center">
						{monthsInYear.map((i) => (
							<Link
								href={`/month/${i}`}
								className="flex flex-col justify-between h-40 p-5 text-white border-2 w-60 hover:scale-105 bg-secondary shadow-pop rounded-2xl"
								key={i}
							>
								<p className="text-2xl font-semibold tracking-wider capitalize drop-shadow-lg">
									{i}
								</p>
								<p className="flex justify-end text-xl">
									{month
										.find((item) => item.name === i)
										?.total.toFixed(0)
										.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
									VND
								</p>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
