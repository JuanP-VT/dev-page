"use client";

import { useEffect, useRef } from "react";
import { Terminal, Cpu, GitBranch, Cloud } from "lucide-react";

import { IoLogoJavascript } from "react-icons/io";
import {
	SiExpress,
	SiJest,
	SiMongodb,
	SiMysql,
	SiNestjs,
	SiNextdotjs,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";
import {
	FaAws,
	FaCss3Alt,
	FaFigma,
	FaHtml5,
	FaNodeJs,
	FaReact,
} from "react-icons/fa";
import { useGlobalStore } from "@/store/global-store";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

// Organized technologies by category
const technologies = {
	frontend: [
		{
			name: "JavaScript",
			icon: (
				<IoLogoJavascript className="w-6 h-6 text-yellow-500 dark:text-yellow-300" />
			),
		},
		{
			name: "TypeScript",
			icon: (
				<SiTypescript className="w-6 h-6 text-blue-800 dark:text-blue-500" />
			),
		},
		{
			name: "HTML",
			icon: (
				<FaHtml5 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
			),
		},
		{
			name: "CSS",
			icon: <FaCss3Alt className="w-6 h-6 text-blue-700 dark:text-blue-500" />,
		},
		{
			name: "React",
			icon: <FaReact className="w-6 h-6 text-sky-600 dark:text-sky-500" />,
		},
		{ name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" /> },
		{
			name: "Tailwind",
			icon: (
				<SiTailwindcss className="w-6 h-6 text-sky-500 dark:text-sky-300" />
			),
		},
	],
	backend: [
		{
			name: "Node.js",
			icon: <FaNodeJs className="w-6 h-6 text-green-600 dark:text-green-400" />,
		},
		{ name: "Express.js", icon: <SiExpress className="w-6 h-6" /> },
		{
			name: "NestJS",
			icon: <SiNestjs className="w-6 h-6 text-red-600 dark:text-red-400" />,
		},
		{
			name: "SQL",
			icon: <SiMysql className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
		},
		{
			name: "MongoDB",
			icon: (
				<SiMongodb className="w-6 h-6 text-green-600 dark:text-green-400" />
			),
		},
	],
	tools: [
		{
			name: "Git",
			icon: <GitBranch className="w-6 h-6 text-red-600 dark:text-red-500" />,
		},
		{
			name: "Figma",
			icon: <FaFigma className="w-6 h-6 text-orange-500" />,
		},
		{
			name: "Jest",
			icon: <SiJest className="w-6 h-6 text-amber-800 dark:text-red-500" />,
		},
		{
			name: "AWS",
			icon: <FaAws className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
		},
	],
};

export default function TechStack() {
	const t = useTranslations("tech");
	const sectionRef = useRef<HTMLDivElement>(null);
	const router = useRouter();
	const categoryRefs = {
		frontend: useRef<HTMLDivElement>(null),
		backend: useRef<HTMLDivElement>(null),
		tools: useRef<HTMLDivElement>(null),
	};
	const itemsRef = {
		frontend: useRef<(HTMLDivElement | null)[]>([]),
		backend: useRef<(HTMLDivElement | null)[]>([]),
		tools: useRef<(HTMLDivElement | null)[]>([]),
	};
	const setSelectedTech = useGlobalStore.use.setSelectedTech();
	const setLevel = useGlobalStore.use.setLevel();
	const projects = useGlobalStore.use.projects();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <We only want the function to be called once, when the component mounts>
	useEffect(() => {
		// Create separate observers for each category
		const observers: IntersectionObserver[] = [];

		// Function to create observer for a category
		const createCategoryObserver = (category: keyof typeof technologies) => {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry, _) => {
						if (entry.isIntersecting) {
							// Mark as animated
							entry.target.setAttribute("data-animated", "true");

							// Animate category heading
							if (categoryRefs[category].current) {
								categoryRefs[category].current?.classList.add(
									"animate-slide-up",
								);
								categoryRefs[category].current?.classList.remove("opacity-0");
							}

							// Animate items with delay
							animateItems(category, 0);

							// Stop observing after animation
							observer.unobserve(entry.target);
						}
					});
				},
				{
					threshold: 0.2,
					rootMargin: "0px 0px -50px 0px", // Trigger when 50px from bottom of viewport
				},
			);

			if (categoryRefs[category].current) {
				observer.observe(categoryRefs[category].current);
				observers.push(observer);
			}
		};

		// Create observers for each category
		(Object.keys(technologies) as Array<keyof typeof technologies>).forEach(
			(category, _) => {
				createCategoryObserver(category);
			},
		);

		return () => {
			// Cleanup all observers
			observers.forEach((observer, _) => {
				observer.disconnect();
			});
		};
	}, []);

	const animateItems = (
		category: keyof typeof technologies,
		baseDelay: number,
	) => {
		itemsRef[category].current.forEach((item, index) => {
			if (item) {
				setTimeout(
					() => {
						item.classList.add("animate-tech-reveal");
						item.classList.remove("opacity-0");
					},
					baseDelay + index * 100,
				);
			}
		});
	};

	const handleOnClick = (tech: string) => {
		//Check if a professional project exists with the selected tech
		const hasProfessionalProject = projects.some((project) => {
			return (
				project.level === "Professional" &&
				project.tags.some((tag) => tag.toLowerCase() === tech.toLowerCase())
			);
		});

		if (hasProfessionalProject) {
			setSelectedTech(tech);
			setLevel("Professional");
			router.push("#projects");
			return;
		}

		//Check if a freelance project exists with the selected tech
		const hasFreelanceProject = projects.some((project) => {
			return (
				project.level === "Freelance" &&
				project.tags.some((tag) => tag.toLowerCase() === tech.toLowerCase())
			);
		});

		if (hasFreelanceProject) {
			setSelectedTech(tech);
			setLevel("Freelance");
			router.push("#projects");
			return;
		}
	};

	const renderTechCategory = (
		category: keyof typeof technologies,
		_: number,
	) => {
		// Reset refs array for this category
		itemsRef[category].current = [];

		return (
			<div key={category} className="mt-1">
				<div
					ref={categoryRefs[category]}
					className="mb-8 text-center opacity-0"
				>
					<h3 className="font-mono text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-500">
						{t(category)}
					</h3>
					<div className="mx-auto mt-1 w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full dark:from-teal-400 dark:to-blue-500" />
				</div>

				<div className="grid grid-cols-1 gap-6 mx-auto max-w-5xl cursor-pointer sm:grid-cols-2 lg:grid-cols-3">
					{technologies[category].map((tech, techIndex) => (
						<div
							key={tech.name}
							ref={(el) => {
								itemsRef[category].current[techIndex] = el;
							}}
							onClick={() => handleOnClick(tech.name)}
							onKeyDown={() => handleOnClick(tech.name)}
							className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 transition-all dark:bg-gray-800 dark:border-gray-700 hover:border-teal-400 backdrop-blur-sm group dark:hover:border-teal-500"
						>
							<div className="flex gap-3 items-center mb-3">
								<div className="p-2 bg-gray-100 rounded-md dark:bg-gray-700">
									{tech.icon}
								</div>
								<span className="font-mono text-gray-800 dark:text-gray-200">
									{tech.name}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	};

	return (
		<section id="tech" className="py-20" ref={sectionRef}>
			<div className="mb-16 text-center">
				<div className="inline-block py-1 px-3 mb-4 font-mono text-sm bg-gray-100 rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
					<span className="text-pink-700 dark:text-pink-400">import</span>{" "}
					&#123;{" "}
					<span className="text-teal-700 dark:text-teal-400">skills</span>{" "}
					&#125; <span className="text-pink-700 dark:text-pink-400">from</span>{" "}
					<span className="text-sky-700 dark:text-sky-400">'./tech-stack'</span>
					
				</div>
				<h2 className="mb-2 font-mono text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-500">
					Tech Stack
				</h2>
				<p className="mx-auto max-w-2xl font-mono text-gray-600 dark:text-gray-400">
					{t("description")}
				</p>
			</div>
			{/* Render each category */}
			{renderTechCategory("frontend", 0)}
			{renderTechCategory("backend", 1)}
			{renderTechCategory("tools", 2)}
		</section>
	);
}
