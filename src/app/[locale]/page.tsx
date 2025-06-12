import NavBar from "@/components/composed/NavBar";
import HeroSection from "@/components/sections/HeroSection";
import Terminal from "@/components/composed/Terminal";
import TechStack from "@/components/sections/TechStack";
import ProjectSection from "@/components/sections/ProjectSection";
import ScrollbarMount from "@/components/ScrollbarMount";
import FloatingElements from "@/components/FloatingElements";
import ExperienceSection from "@/components/sections/ExperienceSection";

export default function Page() {
	return (
		<div>
			<NavBar />
			<FloatingElements />
			<div
				id="portfolio"
				className="px-4 md:px-24 h-[calc(100dvh-70px)] overflow-y-scroll relative"
			>
				<HeroSection />
				<Terminal />
				<TechStack />
				<ProjectSection />
				<ExperienceSection />
				<ScrollbarMount id="#portfolio" />
			</div>
		</div>
	);
}
