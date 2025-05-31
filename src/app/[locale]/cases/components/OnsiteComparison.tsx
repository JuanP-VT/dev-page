"use client";
import React, { useEffect, useState } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";
import clsx from "clsx";
const desktopData: CarrouselEntry[] = [
	{
		title: "Dashboard",
		beforeImage: "/img/projects/onsite/carrousel/desktop/oldonsite-main.webp",
		afterImage: "/img/projects/onsite2/carrousel/desktop/onsite-main.webp",
	},
	{
		title: "Account Summary",
		beforeImage:
			"/img/projects/onsite/carrousel/desktop/oldonsite-accountstate.webp",
		afterImage:
			"/img/projects/onsite2/carrousel/desktop/onsite-accountstate.webp",
	},
	{
		title: "Shipping",
		beforeImage: "/img/projects/onsite/carrousel/desktop/oldonsite-doc.webp",
		afterImage: "/img/projects/onsite2/carrousel/desktop/onsite-doc.webp",
	},
	{
		title: "Mass Shipping",
		beforeImage:
			"/img/projects/onsite/carrousel/desktop/oldonsite-massdoc.webp",
		afterImage: "/img/projects/onsite2/carrousel/desktop/onsite-massdoc.webp",
	},
	{
		title: "My Profile",
		beforeImage:
			"/img/projects/onsite/carrousel/desktop/oldonsite-profile.webp",
		afterImage: "/img/projects/onsite2/carrousel/desktop/onsite-profile.webp",
	},
	{
		title: "My Shipments",
		beforeImage:
			"/img/projects/onsite/carrousel/desktop/oldonsite-shipments.webp",
		afterImage: "/img/projects/onsite2/carrousel/desktop/onsite-shipments.webp",
	},
];

const mobileData: CarrouselEntry[] = [
	{
		title: "Dashboard",
		beforeImage:
			"/img/projects/onsite/carrousel/mobile/oldonsite-dashboard-m.webp",
		afterImage:
			"/img/projects/onsite2/carrousel/mobile/onsite-dashboard-m.webp",
	},
	{
		title: "Account Summary",
		beforeImage:
			"/img/projects/onsite/carrousel/mobile/oldonsite-accountstate-m.webp",
		afterImage:
			"/img/projects/onsite2/carrousel/mobile/onsite-accoutstate-m.webp",
	},
	{
		title: "Shipping",
		beforeImage: "/img/projects/onsite/carrousel/mobile/oldonsite-doc-m.webp",
		afterImage: "/img/projects/onsite2/carrousel/mobile/onsite-doc-m.webp",
	},

	{
		title: "My Profile",
		beforeImage:
			"/img/projects/onsite/carrousel/mobile/oldonsite-profile-m.webp",
		afterImage: "/img/projects/onsite2/carrousel/mobile/onsite-profile-m.webp",
	},
	{
		title: "My Shipments",
		beforeImage:
			"/img/projects/onsite/carrousel/mobile/oldonsite-shipments-m.webp",
		afterImage:
			"/img/projects/onsite2/carrousel/mobile/onsite-shipments-m.webp",
	},
];

type CarrouselEntry = {
	title: string;
	beforeImage: string;
	afterImage: string;
};
const filters = ["Desktop", "Mobile"] as const;
type Filter = (typeof filters)[number];
export default function OnsiteComparison() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentFilter, setCurrentFilter] = useState<Filter>("Desktop");
	const [data, setData] = useState<CarrouselEntry[]>([]);

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
	}, [currentFilter]);

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
			<div className="hidden sm:flex bg-gray-200 dark:bg-gray-800 rounded-sm p-1">
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
					width={currentFilter === "Desktop" ? 900 : 305}
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
