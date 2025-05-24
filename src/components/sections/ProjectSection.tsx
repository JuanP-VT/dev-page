"use client";
import { useEffect, useRef, useState } from "react";
import ProjectCard from "../composed/ProjectCard";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useGlobalStore } from "@/store/global-store";
import { levels, type Level, type Project } from "@/types/project.type";
import { useProjects } from "@/lib/getProjects";

export default function Projects() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
	const filter = useGlobalStore.use.selectedTech();
	const setFilter = useGlobalStore.use.setSelectedTech();
	const { getProjects } = useProjects();
	const setProjects = useGlobalStore.use.setProjects();
	const currentLevel = useGlobalStore.use.level();
	const setLevel = useGlobalStore.use.setLevel();
	const projects = useGlobalStore.use.projects();
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

	// biome-ignore lint/correctness/useExhaustiveDependencies: <execute this effect only when the component mounts>
	useEffect(() => {
		const projects = getProjects();
		setProjects(projects);
	}, []);

	return (
		<section id="projects" className="py-20" ref={sectionRef}>
			<div className="text-center mb-10">
				<div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-teal-400 rounded-md text-sm font-mono mb-4 border border-gray-200 dark:border-gray-700">
					<span className="text-pink-500 dark:text-pink-400">git</span>{" "}
					<span className="text-teal-600 dark:text-teal-400">checkout</span>{" "}
					<span className="text-cyan-600 dark:text-cyan-400">projects</span>
				</div>
				<h2 className="text-3xl font-bold mb-2 font-mono text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
					Projects
				</h2>
				<p className="text-gray-400 max-w-2xl mx-auto font-mono">
					A selection of my recent work and personal projects
				</p>
			</div>
			<div className="flex w-full dark:bg-gray-800 bg-gray-200 rounded-md mb-2 p-1">
				{levels.map((level) => (
					<button
						key={level}
						type="button"
						className={clsx(
							"flex w-full text-sm cursor-pointer transition-all duration-500 rounded-sm justify-center p-2 active:-translate-y-1 ",
							{
								"dark:bg-gray-700 bg-slate-300 ": level === currentLevel,
							},
						)}
						onClick={() => {
							setFilter("");
							setLevel(level);
						}}
					>
						<span className="bg-gradient-to-r dark:from-teal-200 dark:to-sky-300 bg-clip-text text-transparent from-teal-600 to-sky-900">
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
