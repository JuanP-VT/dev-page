"use client";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
	strings: string[];
	className?: string;
	onComplete?: () => void;
};

function TypingAnimation({ strings, className, onComplete = () => {} }: Props) {
	const typing = useRef<HTMLSpanElement>(null);
	const typedInstance = useRef<Typed | null>(null);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (typing.current) {
			// Destroy previous instance if exists
			if (typedInstance.current) {
				typedInstance.current.destroy();
			}
			// Create new Typed instance
			typedInstance.current = new Typed(typing.current, {
				strings,
				startDelay: 500,
				onComplete: (self) => {
					self.cursor.innerText = "";
					onComplete();
				},
				typeSpeed: 20,
				loop: false,
				cursorChar: "_",
			});
		}
		// Cleanup on unmount
		return () => {
			if (typedInstance.current) {
				typedInstance.current.destroy();
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<span ref={typing} className={cn(`subpixel-antialiased ${className}`)} />
		</div>
	);
}

export default TypingAnimation;
