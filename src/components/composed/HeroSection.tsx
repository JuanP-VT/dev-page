"use client";

import { useEffect, useRef } from "react";
import { Code, Terminal } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HeroSection() {
	const containerRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLDivElement>(null);
	const t = useTranslations("hero");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				// biome-ignore lint/complexity/noForEach: <explanation>
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (textRef.current) {
							textRef.current.classList.add("animate-slide-up");
							textRef.current.classList.remove("opacity-0");
						}
						if (imageRef.current) {
							imageRef.current.classList.add("animate-slide-in");
							imageRef.current.classList.remove("opacity-0");
						}
					}
				});
			},
			{ threshold: 0.1 },
		);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => {
			if (containerRef.current) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer.unobserve(containerRef.current);
			}
		};
	}, []);

	return (
		<section
			id="about"
			className="flex flex-col items-center gap-20 lg:flex-row lg:gap-10"
			ref={containerRef}
		>
			<div className="flex-1 opacity-0" ref={textRef}>
				<div className="mb-4 inline-block rounded-md border border-gray-200 bg-gray-100 px-3 py-1 font-mono text-sm text-teal-600 dark:border-slate-700 dark:bg-gray-800 dark:text-teal-400">
					<span className="text-gray-500 dark:text-gray-400">const</span>{" "}
					<span className="text-teal-600 dark:text-teal-400">
						{t("role-t")}
					</span>{" "}
					= <span className="text-sky-600 dark:text-cyan-400">{t("role")}</span>
					;
				</div>
				<h1 className="mb-4 font-mono text-4xl font-bold md:text-5xl">
					{t("greeting")}{" "}
					<span className="relative bg-linear-to-r from-teal-500 to-sky-600 bg-clip-text text-transparent dark:from-teal-300 dark:to-sky-400">
						Juan Pablo
						<span className="absolute bottom-0 left-0 h-1 w-full bg-linear-to-r from-teal-600 to-sky-600" />
					</span>
				</h1>
				<h2 className="mb-6 font-mono text-2xl text-gray-600 md:text-3xl dark:text-gray-300">
					<span className="text-teal-600 dark:text-teal-400">function</span>{" "}
					<span className="text-sky-600 dark:text-cyan-400">
						buildDigitalExperiences
					</span>
					() &#123; ... &#125;
				</h2>
				<p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
					{t("description")}
				</p>
				<div className="flex gap-4">
					<a
						href="#contact"
						className="group flex items-center gap-2 rounded-md bg-linear-to-r from-teal-500 to-sky-500 px-4 py-3 font-mono text-sm text-white transition-all hover:shadow-lg md:px-6 dark:text-black/70"
					>
						<Terminal className="h-4 w-4" />
						{t("contact")}
					</a>
					<a
						href="#projects"
						className="rounded-md border-2 border-teal-500 px-2 py-3 font-mono text-sm text-teal-600 transition-all hover:bg-teal-100/50 md:px-6 dark:text-teal-400 dark:hover:bg-teal-800/50"
					>
						<Code className="mr-2 inline-block h-4 w-4" />
						{t("projects")}
					</a>
				</div>
			</div>
			<div className="flex flex-1 justify-center opacity-0" ref={imageRef}>
				<div className="relative">
					<div className="flex h-64 w-64 rotate-3 items-center justify-center rounded-lg bg-linear-to-r from-teal-500 to-sky-500 text-6xl font-bold text-white shadow-[0_0_25px_8px_rgba(20,184,166,0.6)] md:h-80 md:w-80">
						<div className="absolute inset-[3px] flex items-center justify-center rounded-lg bg-white">
							<Image
								src="/Dobberman.webp"
								width={200}
								height={200}
								alt="profile picture"
								className="h-full w-full rounded-lg object-cover object-[25%_15%]"
							/>
						</div>
					</div>

					{/* Code snippets floating around */}
					<div className="animate-float absolute -top-10 -left-10 rotate-6 rounded-md border border-gray-200 bg-white p-3 shadow-md dark:border-slate-700 dark:bg-gray-800">
						<pre className="font-mono text-xs">
							<span className="text-pink-600 dark:text-pink-400">const</span>{" "}
							<span className="text-sky-600 dark:text-cyan-400">
								{t("developer")}
							</span>{" "}
							= <span className="text-teal-600 dark:text-teal-400">true</span>
							{";"}
						</pre>
					</div>

					<div className="animate-float-delay absolute -right-5 -bottom-10 -rotate-6 rounded-md border border-gray-200 bg-white p-3 shadow-md dark:border-slate-700 dark:bg-gray-800">
						<pre className="font-mono text-xs">
							<span className="text-pink-600 dark:text-pink-400">import</span>{" "}
							&#123;{" "}
							<span className="text-sky-600 dark:text-cyan-400">
								{t("creativity")}
							</span>{" "}
							&#125;{" "}
							<span className="text-pink-600 dark:text-pink-400">from</span>{" "}
							<span className="text-teal-600 dark:text-teal-400">
								{t("brain")}
							</span>
							;
						</pre>
					</div>
				</div>
			</div>
		</section>
	);
}
