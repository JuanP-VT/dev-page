"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, Star, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
	project: {
		title: string;
		description: string;
		image: string;
		tags: string[];
		liveLink: string;
		githubLink: string;
		featured: boolean;
	};
}

export default function ProjectCard({ project }: ProjectCardProps) {
	const cardRef = useRef<HTMLDivElement | null>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect(); // Only animate once
				}
			},
			{ threshold: 0.1 },
		);

		if (cardRef.current) {
			observer.observe(cardRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={cardRef}
			className={`transition-all duration-700 ease-out transform ${
				visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
			} rounded-lg overflow-hidden dark:bg-gray-800/50 bg-gray-200/50 backdrop-blur-sm border border-gray-300 dark:border-gray-700/50 hover:border-teal-500/30 group ${
				project.featured ? "md:col-span-2" : ""
			}`}
		>
			<div className="flex items-center p-2 bg-gray-200 border-b border-gray-300 dark:bg-gray-900 dark:border-gray-700">
				<div className="flex gap-1.5 mr-3">
					<div className="w-3 h-3 bg-red-500 rounded-full" />
					<div className="w-3 h-3 bg-yellow-500 rounded-full" />
					<div className="w-3 h-3 bg-green-500 rounded-full" />
				</div>
				<div className="flex-1 font-mono text-xs text-center text-gray-700 dark:text-gray-400 truncate">
					{project.title}
				</div>
			</div>

			<div className="grid gap-0 md:grid-cols-2">
				<div
					className={`relative ${project.featured ? "md:col-span-1" : "md:col-span-2"}`}
				>
					<div className="overflow-hidden relative w-full h-60">
						<Image
							src={project.image}
							alt={project.title}
							fill
							className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-90 group-hover:brightness-100"
						/>
					</div>
					{project.featured && (
						<div className="flex absolute top-4 right-4 gap-1 items-center py-1 px-3 font-mono text-sm text-gray-100 bg-teal-500 rounded-md dark:text-gray-900">
							<Star className="w-3 h-3" /> Featured
						</div>
					)}
				</div>

				<div
					className={`p-6 ${project.featured ? "md:col-span-1" : "md:col-span-2"}`}
				>
					<h3 className="flex gap-2 items-center mb-2 font-mono text-xl font-semibold text-gray-700 dark:text-gray-200">
						<Folder className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" />
						{project.title}
					</h3>
					<p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
						{project.description}
					</p>
					<div className="flex flex-wrap gap-2 mb-6">
						{project.tags.map((tag) => (
							<span
								key={tag}
								className="py-1 px-2 font-mono text-xs text-teal-600 bg-gray-200 rounded-md dark:text-teal-400 dark:bg-gray-700"
							>
								{tag}
							</span>
						))}
					</div>
					<div className="flex gap-4">
						<a
							href={project.liveLink}
							className="flex gap-1 items-center font-mono text-sm text-teal-600 transition-colors dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300"
						>
							<ExternalLink className="w-4 h-4" /> Live Demo
						</a>
						<a
							href={project.githubLink}
							className="flex gap-1 items-center font-mono text-sm text-teal-600 transition-colors dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300"
						>
							<FaGithub className="w-4 h-4" /> GitHub
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
