"use client";

import NavBar from "@/components/composed/NavBar";
import HeroSection from "@/components/sections/HeroSection";
import Terminal from "@/components/composed/Terminal";
import TechStack from "@/components/sections/TechStack";
import ProjectSection from "@/components/sections/ProjectSection";

export default function Page() {
	return (
		<div id="about" className="relative">
			<NavBar />
			<div className="py-20 px-4 md:px-24">
				<HeroSection />
				<Terminal />
				<TechStack />
				<ProjectSection />
			</div>
		</div>
	);
}
