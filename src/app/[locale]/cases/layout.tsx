import type { Metadata } from "next";
import CasesNavBar from "@/components/composed/CasesNavBar";

export const metadata: Metadata = {
	title: "Case Study",
	description: "Case Study",
};

type LayoutProps = {
	children: React.ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
	return (
		<div>
			<CasesNavBar />
			{children}
		</div>
	);
}
