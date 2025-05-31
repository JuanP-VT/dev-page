import type { Metadata } from "next";
import CasesNavBar from "@/components/composed/CasesNavBar";
import { Geist } from "next/font/google";
import ScrollbarMount from "@/components/ScrollbarMount";

const geist = Geist({
	subsets: ["latin"],
});
export const metadata: Metadata = {
	title: "Case Study",
	description: "Case Study",
};

type LayoutProps = {
	children: React.ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
	return (
		<div className={`${geist.className} dark:bg-gray-950/70`}>
			<CasesNavBar />
			{/* Scroll style is added in ScrollbarMount component*/}
			<div
				id="cases-layout"
				className="h-[calc(100dvh-57px)] overflow-y-scroll"
			>
				{children}
				<ScrollbarMount id="#cases-layout" />
			</div>
		</div>
	);
}
