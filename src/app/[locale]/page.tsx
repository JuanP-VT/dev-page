"use client";

import NavBar from "@/components/composed/NavBar";
import HeroSection from "@/components/composed/HeroSection";
import Terminal from "@/components/composed/Terminal";

export default function Page() {
	return (
		<div className="relative">
			<NavBar />
			<div className="px-4 py-20 md:px-24">
				<Terminal />
				<HeroSection />
			</div>
		</div>
	);
}
