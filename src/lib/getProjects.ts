import type { Project } from "@/types/project.type";
import { useTranslations } from "next-intl";

export function useProjects() {
	const t = useTranslations("projects");
	const data: Project[] = [
		{
			title: t("os2-title"),
			description: t("os2-description"),
			image: "/img/projects/onsite2/main.webp",
			tags: ["C#",".NET","TypeScript", "React", "Next.js", "Tailwind CSS"],
			featured: true,
			level: "Professional",
			caseStudyLink: "/cases/onsite2",
			liveLink: "https://onsite-pkt1-v2-test.vercel.app/",
		},
		{
			title: t("management-title"),
			description: t("management-description"),
			image: "/img/projects/management/main.webp",
			tags: ["C#",".NET","JavaScript", "React", "Tailwind CSS"],
			liveLink: "https://mgmtview.pktuno.mx/",
			featured: false,
			level: "Professional",
			caseStudyLink: "/cases/management",
		},
		{
			title: t("regina-title"),
			description: t("regina-description"),
			image: "/img/projects/regina/main.webp",
			tags: [
				"TypeScript",
				"React",
				"Next.js",
				"Tailwind CSS",
				"MongoDB",
				"AWS",
			],
			githubLink: "https://github.com/JuanP-VT/regis",
			caseStudyLink: "/cases/regina",
			featured: false,
			level: "Freelance",
		},
		{
			title: t("temazcal-title"),
			description: t("temazcal-description"),
			image: "/img/projects/okahey/main.webp",
			tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
			githubLink: "https://github.com/JuanP-VT/okahey",
			featured: false,
			level: "Freelance",
		},

		{
			title: t("pchub-title"),
			description: t("pchub-description"),
			image: "/img/projects/learning/pc-hub.webp",
			tags: ["TypeScript", "React", "Next.js", "Tailwind CSS", "MongoDB"],
			liveLink: "https://store-juanp-vt.vercel.app",
			githubLink: "https://github.com/JuanP-VT/pc-ecommerce",
			featured: true,
			level: "Learning",
			caseStudyLink: "/cases/pc-hub",
		},
		{
			title: t("inventory-title"),
			description: t("inventory-description"),
			image: "/img/projects/learning/inventory.webp",
			tags: ["JavaScript", "React", "Express.js", "MongoDB"],
			liveLink: "https://juanp-vt.github.io/store-inventory/",
			githubLink: "https://github.com/JuanP-VT/store-inventory",
			featured: false,
			level: "Learning",
		},
		{
			title: t("curriculum-title"),
			description: t("curriculum-description"),
			image: "/img/projects/learning/cv.webp",
			tags: ["TypeScript", "React", "CSS"],
			liveLink: "https://juanp-vt.github.io/cv-app/",
			githubLink: "https://github.com/JuanP-VT/cv-app",
			featured: false,
			level: "Learning",
		},
		{
			title: t("weather-title"),
			description: t("weather-description"),
			image: "/img/projects/learning/weather.webp",
			tags: ["JavaScript", "HTML", "CSS"],
			liveLink: "https://juanp-vt.github.io/Weather-App/",
			githubLink: "https://github.com/JuanP-VT/Weather-App",
			featured: false,
			level: "Learning",
		},		
	];

	const getProjects = () => data;
	return { getProjects };
}
