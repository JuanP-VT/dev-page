"use client";
import { useGlobalStore } from "@/store/global-store";
import React from "react";
import { ThemeChanger } from "../buttons/ThemeChanger ";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import LanguageChanger from "../buttons/LanguageChanger";

export default function MobileDrawer() {
	const isOpen = useGlobalStore.use.isDrawerOpen();
	const t = useTranslations("navbar");

	function NavBarOption({ id }: { id: string }) {
		return (
			<a
				href={`#${id}`}
				className="relative p-3 font-mono font-medium text-gray-600 rounded-sm transition-colors dark:text-gray-300 hover:text-teal-500 group dark:hover:bg-gray-700 dark:hover:text-teal-400 hover:bg-neutral-50"
			>
				{t(id)}
			</a>
		);
	}

	return (
		<div
			className={clsx(
				"fixed top-[55px] z-10 flex h-fit w-full flex-col rounded-b-lg bg-white p-2 shadow-lg transition-[opacity,translate] duration-500 lg:hidden dark:border-r dark:border-gray-700/50 dark:bg-gray-800 dark:text-gray-200",
				{
					"h-96": isOpen,
					"pointer-events-none -translate-x-full opacity-0": !isOpen,
				},
			)}
		>
			<div className="flex flex-col font-mono">
				<NavBarOption id="about" />
				<NavBarOption id="tech" />
				<NavBarOption id="projects" />
				<NavBarOption id="experience" />
				<NavBarOption id="contact" />
			</div>
			<div className="flex gap-5 py-5 w-full">
				<LanguageChanger />
				<ThemeChanger />
			</div>
		</div>
	);
}
