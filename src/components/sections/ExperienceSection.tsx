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
			<div className="text-center mb-16">
				<div className="inline-block py-1 px-3 mb-4 font-mono text-sm text-teal-400 bg-gray-100 rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
					<span className="text-pink-400">git</span>{" "}
					<span className="text-teal-400">log</span>{" "}
					<span className="text-cyan-400">--oneline</span>
				</div>
				<h2 className="text-3xl font-bold mb-2 font-mono text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
					{t("title")}
				</h2>
				<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-mono">
					{t("subtitle")}
				</p>
			</div>

			<div className="max-w-5xl mx-auto">
				<div className="relative sm:border-l-4 sm:border-teal-500/30 sm:pl-10 pb-10">
					<div className="hidden sm:block absolute w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full -left-[13px] top-0 shadow-md" />

					<div
						ref={(el) => {
							timelineRefs.current[0] = el;
						}}
						className="mb-12 dark:bg-gray-800/50 bg-gray-200/70 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-300 dark:border-gray-700/50 hover:border-teal-500/30 transition-opacity  opacity-0 relative"
					>
						<div className="absolute hidden left-[-62] top-6 w-10 h-10 bg-teal-500 text-gray-900 rounded-full sm:flex items-center justify-center shadow-md">
							<Briefcase className="h-5 w-5" />
						</div>
						<div className="flex items-center gap-2 text-gray-800 dark:text-gray-400 mb-2 font-mono text-sm">
							<Calendar className="h-4 w-4 text-teal-400" />
							<span className="font-medium">
								{t("1.startDate")} - {t("1.endDate")}
							</span>
							<MapPin className="h-4 w-4 text-teal-400 ml-2" />
							<span>Los Mochis, Sinaloa Mexico</span>
						</div>
						<h3 className="text-2xl font-bold mb-3 text-teal-500 font-mono">
							{t("1.role")}
						</h3>
						<p className="dark:text-gray-400 text-gray-700 mb-4 leading-relaxed">
							{t("1.description")}
						</p>
						<ul className="space-y-5">
							{pkt1Experience.map((item) => (
								<li key={item.main} className="flex items-start gap-2">
									<div className="flex flex-col">
										<div className="flex gap-2">
											<span className="h-5 w-5 mt-px flex-shrink-0 rounded-full bg-teal-500/70 text-teal-800 dark:bg-teal-500/20 dark:text-teal-400 flex items-center justify-center text-xs">
												✓
											</span>
											<span className="dark:text-teal-400 text-teal-800">
												{item.main}
											</span>
										</div>
										<div className="flex flex-col ml-10 mt-2">
											{Object.values(item.sub).map((sub) => (
												<div className="flex gap-2" key={sub}>
													<span className="flex items-center">
														<FaCircle size="0.5rem" className="text-teal-500" />
													</span>
													<span className="dark:text-gray-300 text-gray-600">
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
						className="dark:bg-gray-800/50 bg-gray-200/70 backdrop-blur-sm p-6 rounded-lg border border-gray-300 dark:border-gray-700/50 hover:border-teal-500/30 transition-opacity opacity-0 relative"
					>
						<div className="absolute left-[-62] top-6 w-10 h-10 bg-teal-500 text-gray-900 rounded-full flex items-center justify-center shadow-md">
							<GraduationCap className="h-5 w-5" />
						</div>
						<div className="flex items-center gap-2 text-gray-800 dark:text-gray-400 mb-2 font-mono text-sm">
							<Calendar className="h-4 w-4 text-teal-400" />
							<span className="font-medium text-xs sm:text-base">
								{t("2.startDate")} - {t("2.endDate")}
							</span>
						</div>
						<h3 className="text-2xl font-bold mb-3 text-teal-500 font-mono">
							{t("2.role")}
						</h3>
						<p className="text-gray-800 dark:text-gray-400 mb-4 leading-relaxed">
							{t("2.description")}
						</p>
						<ul className="space-y-5">
							{[
								t("2.bullet.1"),
								t("2.bullet.2"),
								t("2.bullet.3"),
								t("2.bullet.4"),
							].map((item) => (
								<li key={item} className="flex items-start gap-2">
									<span className="h-5 w-5 mt-px flex-shrink-0 rounded-full bg-teal-500/70 text-teal-800 dark:bg-teal-500/20 dark:text-teal-400 flex items-center justify-center text-xs">
										✓
									</span>
									<span className="dark:text-gray-300 text-gray-600">
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
