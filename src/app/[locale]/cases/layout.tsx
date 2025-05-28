import type { Metadata } from "next";
import CasesNavBar from "@/components/composed/CasesNavBar";
import { Geist } from 'next/font/google'
 
const geist = Geist({
  subsets: ['latin'],
})
export const metadata: Metadata = {
	title: "Case Study",
	description: "Case Study",
};

type LayoutProps = {
	children: React.ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
	return (
		<div className={geist.className}>
			<CasesNavBar />
			{children}
		</div>
	);
}
