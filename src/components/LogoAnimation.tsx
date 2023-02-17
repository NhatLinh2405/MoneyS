import lottie, { AnimationItem } from "lottie-web";
import React, { useEffect, useRef } from "react";
import { LottieAnimationData } from "../types/interface";

interface LogoAnimationProps {
	animationData: LottieAnimationData;
}

const LogoAnimation: React.FC<LogoAnimationProps> = ({ animationData }) => {
	const container = useRef<HTMLDivElement>(null);
	const animation = useRef<AnimationItem | null>(null);

	useEffect(() => {
		if (container.current) {
			animation.current = lottie.loadAnimation({
				container: container.current,
				renderer: "svg",
				loop: true,
				autoplay: true,
				animationData: animationData,
			});
		}
		return () => {
			animation.current?.destroy();
		};
	}, [animationData]);

	return <div className="w-16 h-16" ref={container} />;
};

export default LogoAnimation;
