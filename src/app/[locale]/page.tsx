import NavBar from "@/components/composed/NavBar";
import HeroSection from "@/components/sections/HeroSection";
import Terminal from "@/components/composed/Terminal";
import TechStack from "@/components/sections/TechStack";
import ProjectSection from "@/components/sections/ProjectSection";
import ScrollbarMount from "@/components/ScrollbarMount";

export default function Page() {
	return (
		<div>
			<NavBar />
			<div
				id="portfolio"
				className="py-20 px-4 md:px-24 h-[calc(100dvh-70px)] overflow-y-scroll"
			>
				<HeroSection />
				<Terminal />
				<TechStack />
				<ProjectSection />
				<ScrollbarMount id="#portfolio" />
			</div>
		</div>
	);
}
