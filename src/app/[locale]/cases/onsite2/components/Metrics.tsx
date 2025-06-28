"use client";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Metrics() {
	const t = useTranslations("cases.onsite2.i&r.metrics");
	const [currentIndex, setCurrentIndex] = useState(0);
	const metrics = useGetOSMetrics();

	const handleNext = () => {
		if (currentIndex + 1 < metrics.length) {
			setCurrentIndex((prev) => prev + 1);
			return;
		}
		setCurrentIndex(0);
	};
	const handlePrev = () => {
		if (currentIndex - 1 >= 0) {
			setCurrentIndex((prev) => prev - 1);
			return;
		}
		setCurrentIndex(metrics.length - 1);
	};

	return (
		<div className="flex flex-col">
			<span>{t("description")}</span>
			<div className="relative flex-flex-col pb-5">
				<Button
					aria-label="Previous"
					className="absolute top-1/2 z-10 transition-all bg-zinc-200 hover:bg-zinc-200/90 active:bg-zic-200"
					onClick={handlePrev}
				>
					<FaAngleLeft className="text-zinc-500" />
				</Button>
				<Button
					aria-label="Next"
					className="absolute right-0 top-1/2 z-10 transition-all bg-zinc-200 hover:bg-zinc-200/70 active:bg-zic-200"
					onClick={handleNext}
				>
					<FaAngleRight className="text-zinc-500" />
				</Button>
				<span className="flex p-2 text-2xl justify-center font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 dark:to-emerald-400 from-sky-500 dark:from-sky-500">
					{metrics[currentIndex].title}
				</span>
				<div className="flex gap-4">
					<span className="absolute dark:bg-zinc-700 bg-zinc-300 rounded-full px-2 py-1 text-sm">
						{t("before")}
					</span>
					<span className="absolute right-0 dark:bg-zinc-700 bg-zinc-300 rounded-full px-2 py-1 text-sm">
						{t("after")}
					</span>
					<Image
						src={metrics[currentIndex].old}
						alt={metrics[currentIndex].title}
						className="w-1/2 rounded-lg dark:border-zinc-700 border-2 border-zinc-500"
						width={800}
						height={400}
					/>
					<Image
						src={metrics[currentIndex].new}
						alt={metrics[currentIndex].title}
						className="w-1/2 rounded-lg dark:border-zinc-700 border-2 border-zinc-500"
						width={800}
						height={400}
					/>
				</div>
			</div>
		</div>
	);
}

function useGetOSMetrics() {
	const t = useTranslations("cases.onsite2.i&r.metrics");
	return useMemo(
		() => [
			{
				title: t("account-summary"),
				old: "/img/projects/onsite2/metrics/old/account-summary.webp",
				new: "/img/projects/onsite2/metrics/new/account-summary.webp",
			},
			{
				title: t("boxes"),
				old: "/img/projects/onsite2/metrics/old/boxes.webp",
				new: "/img/projects/onsite2/metrics/new/boxes.webp",
			},
			{
				title: t("customers"),
				old: "/img/projects/onsite2/metrics/old/customers.webp",
				new: "/img/projects/onsite2/metrics/new/customers.webp",
			},
			{
				title: t("dashboard"),
				old: "/img/projects/onsite2/metrics/old/dashboard.webp",
				new: "/img/projects/onsite2/metrics/new/dashboard.webp",
			},
			{
				title: t("login"),
				old: "/img/projects/onsite2/metrics/old/login.webp",
				new: "/img/projects/onsite2/metrics/new/login.webp",
			},
			{
				title: t("mass-shipping"),
				old: "/img/projects/onsite2/metrics/old/mass-doc.webp",
				new: "/img/projects/onsite2/metrics/new/mass-doc.webp",
			},
			{
				title: t("pickup-request"),
				old: "/img/projects/onsite2/metrics/old/pickuprequest.webp",
				new: "/img/projects/onsite2/metrics/new/pickuprequest.webp",
			},
			{
				title: t("shipments"),
				old: "/img/projects/onsite2/metrics/old/shipments.webp",
				new: "/img/projects/onsite2/metrics/new/shipments.webp",
			},
		],
		[t],
	);
}
