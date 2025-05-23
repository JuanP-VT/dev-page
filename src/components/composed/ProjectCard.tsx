import { forwardRef } from "react";
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

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
	({ project }, ref) => {
		return (
			<div
				ref={ref}
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
							<Folder className="h-5 w-5 dark:text-teal-400 text-teal-600 shrink-0" />
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
								<FaGithub className="h-4 w-4" /> GitHub
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	},
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
