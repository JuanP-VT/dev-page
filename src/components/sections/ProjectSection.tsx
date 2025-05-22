"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Star, Folder } from "lucide-react";
import Image from "next/image";

const profesionalProjects = [
	{
		title: "Onsite 2 | Full Rebuild of Core Logistics App",
		description:
			"As one of two developers, I contributed significantly to rebuilding our company’s main logistics app used by clients to quote and ship packages. We replaced a legacy jQuery-based version with a fully modern tech stack (Next.js, Tailwind CSS, TypeScript), delivering a fresh UI/UX, better performance, and long-term maintainability. This rewrite became the new foundation for the product’s continued growth.",
		image: "/img/projects/onsite2/main.webp",
		tags: ["Typescript", "React", "Next.js", "Tailwind CSS"],
		liveLink: "#",
		githubLink: "#",
		featured: true,
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
	},
	{
		title: "Onsite 1 | Legacy Code Maintenance",
		description:
			"Maintained and debugged a legacy application critical to the company’s logistics operations. The project was built with jQuery, HTML, and CSS, and had grown without architectural planning — resulting in long, unstructured files and inconsistent modularization. Despite the technical debt and lack of documentation, I successfully implemented fixes and improvements when needed.",
		image: "/img/projects/onsite/main.webp",
		tags: ["JavaScript", "jQuery", "Html", "CSS"],
		liveLink: "#",
		githubLink: "#",
		featured: false,
	},
];

export default function Projects() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [filter, setFilter] = useState<string | null>(null);

	const filteredProjects = filter
		? profesionalProjects.filter((project) =>
				project.tags.some((tag) =>
					tag.toLowerCase().includes(filter.toLowerCase()),
				),
			)
		: profesionalProjects;

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
	}, [filter]);

	const allTags = Array.from(
		new Set(profesionalProjects.flatMap((p) => p.tags)),
	);

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

			<div className="flex flex-wrap gap-2 justify-center mb-8">
				<button
					type="button"
					onClick={() => setFilter(null)}
					className={`px-3 py-1 rounded-md text-sm font-mono transition-colors cursor-pointer ${
						filter === null
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
					<div
						key={project.title}
						ref={(el) => {
							if (el) projectRefs.current[index] = el;
						}}
						className={`rounded-lg overflow-hidden dark:bg-gray-800/50 bg-gray-200/50 backdrop-blur-sm border border-gray-300 dark:border-gray-700/50 hover:border-teal-500/30 transition-all opacity-0 group ${
							project.featured ? "md:col-span-2" : ""
						}`}
					>
						<div className="p-2 bg-gray-200 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 flex items-center">
							<div className="flex gap-1.5 mr-3">
								<div className="w-3 h-3 rounded-full bg-red-500" />
								<div className="w-3 h-3 rounded-full bg-yellow-500" />
								<div className="w-3 h-3 rounded-full bg-green-500" />
							</div>
							<div className="flex-1 text-center text-xs text-gray-700 dark:text-gray-400 font-mono truncate">
								{project.title}
							</div>
						</div>

						<div className="grid md:grid-cols-2 gap-0">
							<div
								className={`relative ${project.featured ? "md:col-span-1" : "md:col-span-2"}`}
							>
								<div className="relative h-60 w-full overflow-hidden">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover transition-transform group-hover:scale-105 duration-500  brightness-90 group-hover:brightness-100"
									/>
								</div>
								{project.featured && (
									<div className="absolute top-4 right-4 bg-teal-500 text-gray-100 dark:text-gray-900 px-3 py-1 rounded-md flex items-center gap-1 text-sm font-mono">
										<Star className="h-3 w-3" /> Featured
									</div>
								)}
							</div>

							<div
								className={`p-6 ${project.featured ? "md:col-span-1" : "md:col-span-2"}`}
							>
								<h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200 font-mono flex items-center gap-2">
									<Folder className="h-5 w-5 dark:text-teal-400 text-teal-600" />
									{project.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-6">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-teal-600 dark:text-teal-400 text-xs rounded-md font-mono"
										>
											{tag}
										</span>
									))}
								</div>
								<div className="flex gap-4">
									<a
										href={project.liveLink}
										className="flex items-center gap-1 text-teal-600 hover:text-teal-500 dark:text-teal-400  dark:hover:text-teal-300 transition-colors font-mono text-sm"
									>
										<ExternalLink className="h-4 w-4" /> Live Demo
									</a>
									<a
										href={project.githubLink}
										className="flex items-center gap-1 text-teal-600 hover:text-teal-500 dark:text-teal-400  dark:hover:text-teal-300 transition-colors font-mono text-sm"
									>
										<Github className="h-4 w-4" /> GitHub
									</a>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
