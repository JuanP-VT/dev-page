"use client";

import { useEffect, useRef, useState } from "react";
import ProjectCard from "../composed/ProjectCard";
import clsx from "clsx";
import { useTranslations } from "next-intl";
const levels = ["Professional", "Freelance", "Learning"] as const;
type Level = (typeof levels)[number];
type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	liveLink: string;
	githubLink: string;
	featured: boolean;
	level: Level;
};

export default function Projects() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [filter, setFilter] = useState<string>("");
	const [currentLevel, setCurrentLevel] = useState<Level>("Professional");
	const t = useTranslations("projects");

	const projects: Project[] = [
		{
			title: t("os2-title"),
			description: t("os2-description"),
			image: "/img/projects/onsite2/main.webp",
			tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
			liveLink: "#",
			githubLink: "#",
			featured: true,
			level: "Professional",
		},
		{
			title: t("management-title"),
			description: t("management-description"),
			image: "/img/projects/management/main.webp",
			tags: ["JavaScript", "React", "Tailwind CSS"],
			liveLink: "#",
			githubLink: "#",
			featured: false,
			level: "Professional",
		},
		{
			title: t("onsite1-title"),
			description: t("onsite1-description"),
			image: "/img/projects/onsite/main.webp",
			tags: ["JavaScript", "jQuery", "HTML", "CSS"],
			liveLink: "#",
			githubLink: "#",
			featured: false,
			level: "Professional",
		},
		{
			title: t("internal-tooling-title"),
			description: t("internal-tooling-description"),
			image: "/img/projects/tooling/main.webp",
			tags: ["TypeScript", "Node.js", "SQL", "NestJS"],
			liveLink: "#",
			githubLink: "#",
			featured: false,
			level: "Professional",
		},
		{
			title: t("temazcal-title"),
			description: t("temazcal-description"),
			image: "/img/projects/okahey/main.webp",
			tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
			liveLink: "#",
			githubLink: "#",
			featured: false,
			level: "Freelance",
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
			liveLink: "#",
			githubLink: "#",
			featured: false,
			level: "Freelance",
		},
		{
			title: t("pchub-title"),
			description: t("pchub-description"),
			image: "/img/projects/learning/pc-hub.webp",
			tags: ["TypeScript", "React", "Next.js", "Tailwind CSS", "MongoDB"],
			liveLink: "#",
			githubLink: "#",
			featured: true,
			level: "Learning",
		},
		{
			title: t("inventory-title"),
			description: t("inventory-description"),
			image: "/img/projects/learning/inventory.webp",
			tags: ["JavaScript", "React", "Express.js", "MongoDB"],
			liveLink: "#",
			githubLink: "#",
			featured: false,
			level: "Learning",
		},
		{
			title: t("fortnite-title"),
			description: t("fortnite-description"),
			image: "/img/projects/learning/shopping-card.webp",
			tags: ["TypeScript", "React", "CSS"],
			liveLink: "#",
			githubLink: "#",
			featured: false,
			level: "Learning",
		},
		{
			title: t("curriculum-title"),
			description: t("curriculum-description"),
			image: "/img/projects/learning/cv.webp",
			tags: ["TypeScript", "React", "CSS"],
			liveLink: "#",
			githubLink: "#",
			featured: false,
			level: "Learning",
		},
		{
			title: t("weather-title"),
			description: t("weather-description"),
			image: "/img/projects/learning/weather.webp",
			tags: ["JavaScript", "HTML", "CSS"],
			liveLink: "#",
			githubLink: "#",
			featured: false,
			level: "Learning",
		},
		{
			title: t("library-title"),
			description: t("library-description"),
			image: "/img/projects/learning/library.webp",
			tags: ["JavaScript", "HTML", "CSS"],
			liveLink: "#",
			githubLink: "#",
			featured: false,
			level: "Learning",
		},
		{
			title: t("todo-title"),
			description: t("todo-description"),
			image: "/img/projects/learning/todo.webp",
			tags: ["JavaScript", "HTML", "CSS"],
			liveLink: "#",
			githubLink: "#",
			featured: false,
			level: "Learning",
		},
		{
			title: t("restaurant-title"),
			description: t("restaurant-description"),
			image: "/img/projects/learning/restaurant.webp",
			tags: ["JavaScript", "HTML", "CSS"],
			liveLink: "#",
			githubLink: "#",
			featured: false,
			level: "Learning",
		},
		{
			title: t("etch-title"),
			description: t("etch-description"),
			image: "/img/projects/learning/etch.webp",
			tags: ["JavaScript", "HTML", "CSS"],
			liveLink: "#",
			githubLink: "#",
			featured: false,
			level: "Learning",
		},
		{
			title: t("tictactoe-title"),
			description: t("tictactoe-description"),
			image: "/img/projects/learning/tic.webp",
			tags: ["JavaScript", "HTML", "CSS"],
			liveLink: "#",
			githubLink: "#",
			featured: false,
			level: "Learning",
		},
		{
			title: t("rps-title"),
			description: t("rps-description"),
			image: "/img/projects/learning/rps.webp",
			tags: ["JavaScript", "HTML", "CSS"],
			liveLink: "#",
			githubLink: "#",
			featured: false,
			level: "Learning",
		},
		{
			title: t("admin-title"),
			description: t("admin-description"),
			image: "/img/projects/learning/admin.webp",
			tags: ["HTML", "CSS"],
			liveLink: "#",
			githubLink: "#",
			featured: false,
			level: "Learning",
		},
		{
			title: t("signup-title"),
			description: t("signup-description"),
			image: "/img/projects/learning/sign.webp",
			tags: ["HTML", "CSS"],
			liveLink: "#",
			githubLink: "#",
			featured: false,
			level: "Learning",
		},
		{
			title: t("landing-title"),
			description: t("landing-description"),
			image: "/img/projects/learning/landing.webp",
			tags: ["HTML", "CSS"],
			liveLink: "#",
			githubLink: "#",
			featured: false,
			level: "Learning",
		},
	];

	const filteredProjects = projects.filter(
		(project) =>
			project.level === currentLevel &&
			project.tags.some((tag) =>
				tag.toLowerCase().includes(filter.toLowerCase()),
			),
	);

	const allTags = Array.from(
		new Set(
			projects.filter((p) => p.level === currentLevel).flatMap((p) => p.tags),
		),
	);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <we want to execute this effect only when the filter changes>
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					projectRefs.current.forEach((project, index) => {
						if (project) {
							setTimeout(() => {
								project.classList.add("animate-slide-up");
								project.classList.remove("opacity-0");
							}, index * 200);
						}
					});
				}
			},
			{ threshold: 0.1 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, [filter, currentLevel]);

	return (
		<section id="projects" className="py-20" ref={sectionRef}>
			<div className="text-center mb-10">
				<div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-teal-400 rounded-md text-sm font-mono mb-4 border border-gray-200 dark:border-gray-700">
					<span className="text-gray-500 dark:text-gray-400">git</span>{" "}
					<span className="text-teal-500 dark:text-teal-400">checkout</span>{" "}
					<span className="text-cyan-500 dark:text-cyan-400">projects</span>
				</div>
				<h2 className="text-3xl font-bold mb-2 font-mono text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
					Projects
				</h2>
				<p className="text-gray-400 max-w-2xl mx-auto font-mono">
					A selection of my recent work and personal projects
				</p>
			</div>
			<div className="flex w-full bg-gray-800 rounded-md mb-2 p-1">
				{levels.map((level) => (
					<button
						key={level}
						type="button"
						className={clsx(
							"flex w-full text-sm cursor-pointer transition-all duration-500 rounded-sm justify-center p-2 active:-translate-y-1 ",
							{
								"bg-gray-700 text-gray-100": level === currentLevel,
							},
						)}
						onClick={() => {
							setFilter("");
							setCurrentLevel(level);
						}}
					>
						<span className="bg-gradient-to-r from-teal-200 to-sky-300 bg-clip-text text-transparent">
							{level}
						</span>
					</button>
				))}
			</div>

			<div className="flex flex-wrap gap-2 justify-center mb-8">
				<button
					type="button"
					onClick={() => setFilter("")}
					className={`px-3 py-1 rounded-md text-sm font-mono transition-colors cursor-pointer ${
						filter === ""
							? "bg-teal-500 dark:text-gray-900 text-gray-100"
							: "dark:bg-gray-800 bg-gray-200 text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 hover:bg-gray-300"
					}`}
				>
					All
				</button>
				{allTags.map((tag) => (
					<button
						type="button"
						key={tag}
						onClick={() => setFilter(tag)}
						className={`px-3 py-1 rounded-md text-sm font-mono transition-colors cursor-pointer ${
							filter === tag
								? "bg-teal-500 dark:text-gray-900 text-gray-100"
								: "dark:bg-gray-800 bg-gray-200 text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 hover:bg-gray-300"
						}`}
					>
						{tag}
					</button>
				))}
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
				{filteredProjects.map((project, index) => (
					<ProjectCard
						key={project.title}
						project={project}
						ref={(el) => {
							if (el) projectRefs.current[index] = el;
						}}
					/>
				))}
			</div>
		</section>
	);
}
