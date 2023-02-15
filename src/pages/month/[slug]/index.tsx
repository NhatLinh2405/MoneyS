import Calendar from "@/components/Calendar";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function MonthName() {
	const router = useRouter();
	const month = router.query.slug;

	return (
		<div className="px-10 py-1.5">
			<div className="flex-center-y">
				<Link href="/" className="py-5 text-white flex-center-y hover:scale-105">
					<IoIosArrowRoundBack className="text-5xl" />
					<h4 className="capitalize">{month}</h4>
				</Link>
			</div>
			<Calendar month={month as string} />
		</div>
	);
}
