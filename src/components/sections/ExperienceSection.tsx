"use client";

import { useEffect, useRef } from "react";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";
import { FaCircle } from "react-icons/fa";
import { getPKT1Experience } from "@/lib/getPKT1Experience";

export default function ExperienceSection() {
	const t = useTranslations("experience");
	const sectionRef = useRef<HTMLDivElement>(null);
	const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
	const pkt1Experience = getPKT1Experience();

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					timelineRefs.current.forEach((item, index) => {
						if (item) {
							setTimeout(() => {
								item.classList.add("animate-slide-right");
								item.classList.remove("opacity-0");
							}, index * 300);
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
	}, []);

	return (
		<section id="experience" className="py-20" ref={sectionRef}>
			<div className="mb-16 text-center">
				<div className="inline-block py-1 px-3 mb-4 font-mono text-sm text-teal-400 bg-gray-100 rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
					<span className="text-pink-400">git</span>{" "}
					<span className="text-teal-400">log</span>{" "}
					<span className="text-cyan-400">--oneline</span>
				</div>
				<h2 className="mb-2 font-mono text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
					{t("title")}
				</h2>
				<p className="mx-auto max-w-2xl font-mono text-gray-600 dark:text-gray-400">
					{t("subtitle")}
				</p>
			</div>

			<div className="mx-auto max-w-5xl">
				<div className="relative pb-10 sm:pl-10 sm:border-l-4 sm:border-teal-500/30">
					<div className="hidden absolute top-0 w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full shadow-md sm:block -left-[13px]" />

					<div
						ref={(el) => {
							timelineRefs.current[0] = el;
						}}
						className="relative p-4 mb-12 rounded-lg border border-gray-300 opacity-0 transition-opacity sm:p-6 bg-gray-200/70 backdrop-blur-sm dark:bg-gray-800/50 dark:border-gray-700/50 hover:border-teal-500/30"
					>
						<div className="hidden absolute top-6 justify-center items-center w-10 h-10 text-gray-900 bg-teal-500 rounded-full shadow-md sm:flex left-[-62]">
							<Briefcase className="w-5 h-5" />
						</div>
						<div className="flex gap-2 items-center mb-2 font-mono text-sm text-gray-800 dark:text-gray-400">
							<Calendar className="w-4 h-4 text-teal-400" />
							<span className="text-sm font-medium">
								{t("1.startDate")} - {t("1.endDate")}
							</span>
							<MapPin className="ml-2 w-4 h-4 text-teal-400" />
							<span>Los Mochis, Sinaloa Mexico</span>
						</div>
						<h3 className="mb-3 font-mono text-2xl font-bold text-teal-500">
							{t("1.role")}
						</h3>
						<p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-400">
							{t("1.description")}
						</p>
						<ul className="space-y-5">
							{pkt1Experience.map((item) => (
								<li key={item.main} className="flex gap-2 items-start">
									<div className="flex flex-col">
										<div className="flex gap-2">
											<span className="flex flex-shrink-0 justify-center items-center mt-px w-5 h-5 text-xs text-teal-800 rounded-full dark:text-teal-400 bg-teal-500/70 dark:bg-teal-500/20">
												✓
											</span>
											<span className="text-teal-600 dark:text-teal-400">
												{item.main}
											</span>
										</div>
										<div className="flex flex-col gap-2 mt-2 ml-10">
											{Object.values(item.sub).map((sub) => (
												<div className="flex gap-2" key={sub}>
													<span className="flex pt-2">
														<FaCircle size="0.5rem" className="text-teal-500" />
													</span>
													<span className="text-gray-600 dark:text-gray-300">
														{sub}
													</span>
												</div>
											))}
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>

					<div className="hidden sm:block absolute w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full -left-[13px] top-[calc(100%-40px)] shadow-md" />
					<div
						ref={(el) => {
							timelineRefs.current[1] = el;
						}}
						className="relative p-6 rounded-lg border border-gray-300 opacity-0 transition-opacity bg-gray-200/70 backdrop-blur-sm dark:bg-gray-800/50 dark:border-gray-700/50 hover:border-teal-500/30"
					>
						<div className="flex absolute top-6 justify-center items-center w-10 h-10 text-gray-900 bg-teal-500 rounded-full shadow-md left-[-62]">
							<GraduationCap className="w-5 h-5" />
						</div>
						<div className="flex gap-2 items-center mb-2 font-mono text-sm text-gray-800 dark:text-gray-400">
							<Calendar className="w-4 h-4 text-teal-400" />
							<span className="text-sm font-medium">
								{t("2.startDate")} - {t("2.endDate")}
							</span>
						</div>
						<h3 className="mb-3 font-mono text-2xl font-bold text-teal-500">
							{t("2.role")}
						</h3>
						<p className="mb-4 leading-relaxed text-gray-800 dark:text-gray-400">
							{t("2.description")}
						</p>
						<ul className="space-y-5">
							{[
								t("2.bullet.1"),
								t("2.bullet.2"),
								t("2.bullet.3"),
								t("2.bullet.4"),
							].map((item) => (
								<li key={item} className="flex gap-2 items-start">
									<span className="flex flex-shrink-0 justify-center items-center mt-px w-5 h-5 text-xs text-teal-800 rounded-full dark:text-teal-400 bg-teal-500/70 dark:bg-teal-500/20">
										✓
									</span>
									<span className="text-gray-600 dark:text-gray-300">
										{item}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
