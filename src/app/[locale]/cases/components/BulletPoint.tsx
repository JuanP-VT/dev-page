import { cn } from "@/lib/utils";
import type React from "react";

type Props = {
	text: string | React.ReactNode;
	className?: string;
};

export default function BulletPoint({ text, className = "" }: Props) {
	return (
		<li className="flex items-start gap-2">
			<div
				className={cn(
					`w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0 ${className}`,
				)}
			/>
			<span>{text}</span>
		</li>
	);
}
