import Link from "next/link";
import { useRouter } from "next/router";
import { IoIosArrowRoundBack } from "react-icons/io";
import { data } from "../../../../utils/data";

import { BsPencil } from "react-icons/bs";
import { CiCircleRemove } from "react-icons/ci";

export default function DayOfMonth() {
	const router = useRouter();
	const month = router.query.slug;
	const day = router.query.id;

	const monthData = data.find((i) => i.slug === month)?.days.find((i) => i.day === Number(day));

	return (
		<div className="px-10 py-1.5">
			<div className="justify-between flex-center-y">
				<Link href="/" className="py-5 text-white flex-center-y hover:scale-105">
					<IoIosArrowRoundBack className="text-5xl" />
					<h4 className="capitalize">
						{month} / {day}
					</h4>
				</Link>
				<div className="">
					<form className="relative flex space-x-5" action="" method="post">
						<input
							className="py-2.5 px-5 w-60 lg:w-44 shadow-none outline-none rounded-2xl"
							type="text"
							name="name"
							id="name"
							placeholder="ex: Food"
						/>
						<input
							className="py-2.5 pl-5 pr-16 w-60 lg:w-44 shadow-none outline-none rounded-2xl"
							type="text"
							name="total"
							id="total"
							placeholder="ex: 82,000"
						/>
						<span className="absolute-center-y border-l-2 border-black right-40 py-3.5 pl-2">
							VND
						</span>
						<button
							className="outline-none border-none px-5 py-2.5 bg-secondary rounded-2xl shadow-pop text-white tracking-widest text-xl font-semibold"
							type="submit"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
			<div className="">
				{monthData?.detail.map((i) => (
					<div key={i.id} className="grid grid-cols-3 px-10 py-5 border-b-2 border-black">
						<p className="text-2xl font-semibold tracking-wider capitalize flex-center-y">
							{i.name}
						</p>
						<p className="text-xl flex-center">
							{i.total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND
						</p>
						<div className="space-x-5 text-right">
							<button className="outline-none">
								<BsPencil className="text-3xl hover:scale-105" />
							</button>
							<button className="outline-none">
								<CiCircleRemove className="text-4xl text-red-500 hover:scale-105" />
							</button>
						</div>
					</div>
				))}
			</div>
			<div className="float-right w-1/4 px-4 py-3 mt-10 bg-white rounded-2xl">
				<p className="text-2xl font-semibold tracking-wider capitalize">Total</p>
				<p className="flex justify-end text-xl">
					{monthData?.total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND
				</p>
			</div>
		</div>
	);
}
