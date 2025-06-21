import { cn } from "@/lib/utils";
import type React from "react";

type Props = {
	text: string | React.ReactNode;
	className?: string;
};

export default function BulletPoint({ text, className = "" }: Props) {
	return (
		<li className="flex gap-2 items-start">
			<div
				className={cn(
					`w-2 h-2 bg-emerald-600 dark:bg-emerald-400 rounded-full mt-2 flex-shrink-0 ${className}`,
				)}
			/>
			<span>{text}</span>
		</li>
	);
}
