"use client";

import NavBar from "@/components/composed/NavBar";
import HeroSection from "@/components/composed/HeroSection";
import Terminal from "@/components/composed/Terminal";
import TechStack from "@/components/composed/TechStack";

export default function Page() {
	return (
		<div className="relative">
			<NavBar />
			<div className="px-4 py-20 md:px-24">
				<Terminal />
				<HeroSection />
				<TechStack />
			</div>
		</div>
	);
}
