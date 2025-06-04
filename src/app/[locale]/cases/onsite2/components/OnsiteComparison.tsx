"use client";
import React, { useEffect, useMemo, useState } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";
import clsx from "clsx";
import { useTranslations } from "next-intl";

const filters = ["Desktop", "Mobile"] as const;
type Filter = (typeof filters)[number];
export default function OnsiteComparison() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentFilter, setCurrentFilter] = useState<Filter>("Desktop");
	const [data, setData] = useState<CarrouselEntry[]>([]);
	const [desktopData, mobileData] = useGetCarrousel();

	const handleNext = () => {
		if (currentIndex + 1 < data.length) {
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
		setCurrentIndex(data.length - 1);
	};

	useEffect(() => {
		setCurrentIndex(0);
		if (currentFilter === "Desktop") {
			setData(desktopData);
		} else {
			setData(mobileData);
		}
	}, [currentFilter, desktopData, mobileData]);

	//Check if user is in a mobile device
	useEffect(() => {
		const checkMobile = () => {
			return window.matchMedia("(max-width: 767px)").matches;
		};
		if (checkMobile()) {
			setCurrentFilter("Mobile");
		} else {
			setCurrentFilter("Desktop");
		}
	}, []);

	return (
		<div className="flex flex-col">
			<div className="hidden p-1 bg-gray-200 rounded-sm sm:flex dark:bg-gray-800">
				{filters.map((filter) => (
					<button
						key={filter}
						type="button"
						className={clsx(
							"flex w-full text-sm cursor-pointer transition-all duration-500 rounded-sm justify-center p-2 active:-translate-y-1",
							{
								"dark:bg-gray-700 bg-slate-300": filter === currentFilter,
							},
						)}
						onClick={() => {
							setCurrentFilter(filter);
						}}
					>
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 dark:from-teal-200 to-sky-900 dark:to-sky-300">
							{filter}
						</span>
					</button>
				))}
			</div>
			<div className="flex justify-center items-center w-full">
				<BeforeAfterSlider
					title={data[currentIndex]?.title}
					width={currentFilter === "Desktop" ? 815 : 305}
					height={currentFilter === "Desktop" ? 450 : 650}
					beforeImage={data[currentIndex]?.beforeImage}
					afterImage={data[currentIndex]?.afterImage}
					onClickNext={handleNext}
					onClickPrev={handlePrev}
				/>
			</div>
		</div>
	);
}
type CarrouselEntry = {
	title: string;
	beforeImage: string;
	afterImage: string;
};
const useGetCarrousel = () => {
	const t = useTranslations("cases.onsite2.BvsA");
	const desktopData: CarrouselEntry[] = useMemo(
		() => [
			// Use useMemo for desktopData
			{
				title: t("dashboard"),
				beforeImage:
					"/img/projects/onsite/carrousel/desktop/oldonsite-main.webp",
				afterImage: "/img/projects/onsite2/carrousel/desktop/onsite-main.webp",
			},
			{
				title: t("account-summary"),
				beforeImage:
					"/img/projects/onsite/carrousel/desktop/oldonsite-accountstate.webp",
				afterImage:
					"/img/projects/onsite2/carrousel/desktop/onsite-accountstate.webp",
			},
			{
				title: t("shipping"),
				beforeImage:
					"/img/projects/onsite/carrousel/desktop/oldonsite-doc.webp",
				afterImage: "/img/projects/onsite2/carrousel/desktop/onsite-doc.webp",
			},
			{
				title: t("mass-shipping"),
				beforeImage:
					"/img/projects/onsite/carrousel/desktop/oldonsite-massdoc.webp",
				afterImage:
					"/img/projects/onsite2/carrousel/desktop/onsite-massdoc.webp",
			},
			{
				title: t("profile"),
				beforeImage:
					"/img/projects/onsite/carrousel/desktop/oldonsite-profile.webp",
				afterImage:
					"/img/projects/onsite2/carrousel/desktop/onsite-profile.webp",
			},
			{
				title: t("shipments"),
				beforeImage:
					"/img/projects/onsite/carrousel/desktop/oldonsite-shipments.webp",
				afterImage:
					"/img/projects/onsite2/carrousel/desktop/onsite-shipments.webp",
			},
		],
		[t],
	); // Dependency array for desktopData

	const mobileData: CarrouselEntry[] = useMemo(
		() => [
			// Use useMemo for mobileData
			{
				title: t("dashboard"),
				beforeImage:
					"/img/projects/onsite/carrousel/mobile/oldonsite-dashboard-m.webp",
				afterImage:
					"/img/projects/onsite2/carrousel/mobile/onsite-dashboard-m.webp",
			},
			{
				title: t("account-summary"),
				beforeImage:
					"/img/projects/onsite/carrousel/mobile/oldonsite-accountstate-m.webp",
				afterImage:
					"/img/projects/onsite2/carrousel/mobile/onsite-accoutstate-m.webp",
			},
			{
				title: t("shipping"),
				beforeImage:
					"/img/projects/onsite/carrousel/mobile/oldonsite-doc-m.webp",
				afterImage: "/img/projects/onsite2/carrousel/mobile/onsite-doc-m.webp",
			},
			{
				title: t("profile"),
				beforeImage:
					"/img/projects/onsite/carrousel/mobile/oldonsite-profile-m.webp",
				afterImage:
					"/img/projects/onsite2/carrousel/mobile/onsite-profile-m.webp",
			},
			{
				title: t("shipments"),
				beforeImage:
					"/img/projects/onsite/carrousel/mobile/oldonsite-shipments-m.webp",
				afterImage:
					"/img/projects/onsite2/carrousel/mobile/onsite-shipments-m.webp",
			},
		],
		[t],
	); // Dependency array for mobileData

	return [desktopData, mobileData];
};
