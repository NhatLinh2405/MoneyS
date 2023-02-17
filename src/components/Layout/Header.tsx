import Image from "next/image";
import Link from "next/link";
import { LottieAnimationData } from "../../types/interface";
import LogoAnimation from "../LogoAnimation";

export default function Header() {
	const logoAnimationData: LottieAnimationData = require("../../../public/assets/logo.json");

	return (
		<div className="px-10 py-2.5 shadow-pop sticky top-0 z-10 bg-primary flex-center-y justify-between sm:px-5">
			<Link href="/">
				<LogoAnimation animationData={logoAnimationData} />
			</Link>
			<div className="cursor-pointer w-14 h-14">
				<Image
					className="border-2 rounded-2xl bg-secondary"
					src="/assets/bighead-5.svg"
					alt="bighead"
					width={100}
					height={100}
				/>
			</div>
		</div>
	);
}
