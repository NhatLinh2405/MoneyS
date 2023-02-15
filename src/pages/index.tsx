import Link from "next/link";
import { data } from "../utils/data";

export default function Home() {
	return (
		<div className="px-10 py-2.5">
			<h2 className="my-5 text-center text-white drop-shadow-xl">Spending statistics in 2023</h2>
			<div className="flex-wrap gap-5 my-10 flex-center">
				{data?.map((i) => (
					<Link
						href={`/month/${i.slug}`}
						className="flex flex-col justify-between h-40 p-5 text-white border-2 w-72 hover:scale-105 bg-secondary shadow-pop rounded-2xl"
						key={i.id}
					>
						<p className="text-2xl font-semibold tracking-wider capitalize drop-shadow-lg">
							{i.name}
						</p>
						<p className="flex justify-end text-xl">
							{i.total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND
						</p>
					</Link>
				))}
			</div>
		</div>
	);
}
