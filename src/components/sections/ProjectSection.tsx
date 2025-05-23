"use client";

import { useEffect, useRef, useState } from "react";
import ProjectCard from "../composed/ProjectCard";
import clsx from "clsx";
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

const profesionalProjects: Project[] = [
	{
		title: "Onsite 2 | Full Rebuild of Core Logistics App",
		description:
			"As one of two developers, I contributed significantly to rebuilding our company’s main logistics app used by clients to quote and ship packages. We replaced a legacy jQuery-based version with a fully modern tech stack, delivering a fresh UI/UX, better performance, and long-term maintainability. This rewrite became the new foundation for the product’s continued growth.",
		image: "/img/projects/onsite2/main.webp",
		tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
		liveLink: "#",
		githubLink: "#",
		featured: true,
		level: "Professional",
	},
	{
		title: "Management | Enhancements and Maintenance",
		description:
			"Contributed to the ongoing development of our company's internal logistics platform, which supports operational monitoring, analytics, and administrative controls. Although the system was established prior to my tenure, I was responsible for implementing new modules, resolving bugs, and enhancing existing features.",
		image: "/img/projects/management/main.webp",
		tags: ["JavaScript", "React", "Tailwind CSS"],
		liveLink: "#",
		githubLink: "#",
		featured: false,
		level: "Professional",
	},
	{
		title: "Onsite 1 | Legacy Code Maintenance",
		description:
			"Maintained and debugged a legacy application critical to the company’s logistics operations. The project was built with jQuery, HTML, and CSS, and had grown without architectural planning — resulting in long, unstructured files and inconsistent modularization. Despite the technical debt and lack of documentation, I successfully implemented fixes and improvements when needed.",
		image: "/img/projects/onsite/main.webp",
		tags: ["JavaScript", "jQuery", "HTML", "CSS"],
		liveLink: "#",
		githubLink: "#",
		featured: false,
		level: "Professional",
	},
	{
		title: "Internal Tooling | Temporary Node.js Backend APIs",
		description:
			"To help our .NET team manage load during peak demand, I proactively developed several Node.js endpoints to enable frontend progress and unblock workflows. These APIs were later replaced by .NET microservices, but played a key role in accelerating initial development and testing phases.",
		image: "/img/projects/onsite/main.webp",
		tags: ["TypeScript", "Node.js", "SQL", "NestJS"],
		liveLink: "#",
		githubLink: "#",
		featured: false,
		level: "Professional",
	},
	{
		title: "Okayhey Temazcal | Freelance Web Presence + CMS Integration",
		description:
			"Designed and developed a modern, responsive website for my brother´s temazcal business. Integrated Contentful CMS to allow non-technical users to manage dynamic content such as blogs, gallery, and FAQs. The site included a homepage, blog, photo gallery, FAQ, and contact section — all aimed at boosting their online presence and improving client engagement.",
		image: "/img/projects/okahey/main.webp",
		tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
		liveLink: "#",
		githubLink: "#",
		featured: false,
		level: "Freelance",
	},
	{
		title: "Regina & Gael Studio | Fullstack E-commerce Platform",
		description:
			"Built a complete e-commerce platform for my sister-in-law’s digital craft store. The app included user authentication, product management, PayPal payment integration, and secure digital file delivery via signed URLs. Developed the full backend and frontend architecture from scratch, creating a scalable solution for selling downloadable content online.",
		image: "/img/projects/regina/main.webp",
		tags: ["TypeScript", "React", "Next.js", "Tailwind CSS", "MongoDB", "AWS"],
		liveLink: "#",
		githubLink: "#",
		featured: false,
		level: "Freelance",
	},
	{
		title: "PC Hub | Fullstack Ecommerce Learning Project",
		description:
			"Developed a fully functional eCommerce prototype from scratch to showcase fullstack skills. Features include user authentication, product catalog with filters, shopping cart, checkout, user profiles, and an admin panel for product management.",
		image: "/img/projects/learning/pc-hub.webp",
		tags: ["TypeScript", "React", "Next.js", "Tailwind CSS", "MongoDB"],
		liveLink: "#",
		githubLink: "#",
		featured: true,
		level: "Learning",
	},
	{
		title: "Inventory Manager App | Fullstack CRUD System",
		description:
			"Developed a fullstack inventory management tool. Practiced API integration, CRUD operations, and NoSQL data modeling. This project laid the foundation for more complex work like PC-Hub.",
		image: "/img/projects/learning/inventory.webp",
		tags: ["JavaScript", "React", "Express.js", "MongoDB"],
		liveLink: "#",
		githubLink: "#",
		featured: false,
		level: "Learning",
	},
];

export default function Projects() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [filter, setFilter] = useState<string>("");
	const [currentLevel, setCurrentLevel] = useState<Level>("Professional");

	const filteredProjects = profesionalProjects.filter(
		(project) =>
			project.level === currentLevel &&
			project.tags.some((tag) =>
				tag.toLowerCase().includes(filter.toLowerCase()),
			),
	);

	const allTags = Array.from(
		new Set(
			profesionalProjects
				.filter((p) => p.level === currentLevel)
				.flatMap((p) => p.tags),
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
