"use client";
import { useEffect } from "react";
import ProjectCard from "../composed/ProjectCard";
import clsx from "clsx";
import { useProjects } from "@/lib/getProjects";
import { useGlobalStore } from "@/store/global-store";
import { levels } from "@/types/project.type";
import { useTranslations } from "next-intl";

export default function Projects() {
	const t = useTranslations("projects");
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

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const projects = getProjects();
		setProjects(projects);
	}, []);

	return (
		<section id="projects" className="py-20 min-h-[100vh]">
			<div className="mb-10 text-center">
				<div className="inline-block py-1 px-3 mb-4 font-mono text-sm text-teal-400 bg-gray-100 rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
					<span className="text-pink-500 dark:text-pink-400">git</span>{" "}
					<span className="text-teal-600 dark:text-teal-400">checkout</span>{" "}
					<span className="text-cyan-600 dark:text-cyan-400">projects</span>
				</div>
				<h2 className="mb-2 font-mono text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
					{t("title")}
				</h2>
				<p className="mx-auto max-w-2xl font-mono text-gray-600 dark:text-gray-400">
					{t("description")}
				</p>
			</div>

			<div className="flex p-1 mb-2 w-full bg-gray-200 rounded-md dark:bg-gray-800">
				{levels.map((level) => (
					<button
						key={level}
						type="button"
						className={clsx(
							"flex w-full text-sm cursor-pointer transition-all duration-500 rounded-sm justify-center p-2 active:-translate-y-1",
							{
								"dark:bg-gray-700 bg-slate-300": level === currentLevel,
							},
						)}
						onClick={() => {
							setFilter("");
							setLevel(level);
						}}
					>
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 dark:from-teal-200 to-sky-900 dark:to-sky-300">
							{t(`levels.${level}`)}
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
					{t("all")}
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

			<div className="grid grid-cols-1 gap-8 mx-auto max-w-6xl md:grid-cols-2">
				{filteredProjects.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</div>
		</section>
	);
}
