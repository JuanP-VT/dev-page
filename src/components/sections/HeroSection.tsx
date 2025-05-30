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
			className="flex flex-col gap-20 items-center py-20 lg:flex-row lg:gap-10"
			ref={containerRef}
		>
			<div className="flex-1 opacity-0" ref={textRef}>
				<div className="inline-block py-1 px-3 mb-4 font-mono text-sm text-teal-600 bg-gray-100 rounded-md border border-gray-200 dark:text-teal-400 dark:bg-gray-800 dark:border-slate-700">
					<span className="text-pink-500 dark:text-pink-400">const</span>{" "}
					<span className="text-teal-600 dark:text-teal-400">
						{t("role-t")}
					</span>{" "}
					= <span className="dark:text-cyan-400 text-sky-600">{t("role")}</span>
					;
				</div>
				<h1 className="pt-4 mb-4 font-mono text-4xl font-bold md:text-5xl">
					{t("greeting")}{" "}
					<span className="relative text-transparent bg-clip-text from-teal-500 dark:from-teal-300 bg-linear-to-r to-sky-600 dark:to-sky-400">
						Juan Pablo
						<span className="absolute bottom-0 left-0 w-full h-1 from-teal-600 bg-linear-to-r to-sky-600" />
					</span>
				</h1>

				<p className="pb-4 mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
					{t("description")}
				</p>
				<div className="flex gap-4">
					<a
						href="#contact"
						className="flex gap-2 items-center py-3 px-4 font-mono text-sm text-white from-teal-500 rounded-md transition-all md:px-6 hover:shadow-lg group bg-linear-to-r to-sky-500 dark:text-black/70"
					>
						<Terminal className="w-4 h-4" />
						{t("contact")}
					</a>
					<a
						href="#projects"
						className="py-3 px-2 font-mono text-sm text-teal-600 rounded-md border-2 border-teal-500 transition-all md:px-6 dark:text-teal-400 dark:hover:bg-teal-800/50 hover:bg-teal-100/50"
					>
						<Code className="inline-block mr-2 w-4 h-4" />
						{t("projects")}
					</a>
				</div>
			</div>
			<div className="flex flex-1 justify-center opacity-0" ref={imageRef}>
				<div className="relative">
					<div className="flex h-64 w-64 rotate-3 items-center justify-center rounded-lg bg-linear-to-r from-teal-500 to-sky-500 text-6xl font-bold text-white shadow-[0_0_25px_8px_rgba(20,184,166,0.6)] md:h-80 md:w-80">
						<div className="flex absolute justify-center items-center bg-white rounded-lg inset-[3px]">
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
					<div className="absolute -top-10 -left-10 p-3 bg-white rounded-md border border-gray-200 shadow-md rotate-6 dark:bg-gray-800 animate-float dark:border-slate-700">
						<pre className="font-mono text-xs">
							<span className="text-pink-600 dark:text-pink-400">const</span>{" "}
							<span className="dark:text-cyan-400 text-sky-600">
								{t("developer")}
							</span>{" "}
							= <span className="text-teal-600 dark:text-teal-400">true</span>
							{";"}
						</pre>
					</div>

					<div className="absolute -right-5 -bottom-10 p-3 bg-white rounded-md border border-gray-200 shadow-md -rotate-6 dark:bg-gray-800 animate-float-delay dark:border-slate-700">
						<pre className="font-mono text-xs">
							<span className="text-pink-600 dark:text-pink-400">import</span>{" "}
							&#123;{" "}
							<span className="dark:text-cyan-400 text-sky-600">
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
