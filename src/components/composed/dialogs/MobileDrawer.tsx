"use client";
import { useUiStore } from "@/store/ui/ui-store";
import React from "react";
import { ThemeChanger } from "../buttons/ThemeChanger ";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import LanguageChanger from "../buttons/LanguageChanger";

export default function MobileDrawer() {
	const isOpen = useUiStore.use.isDrawerOpen();
	const t = useTranslations("navbar");

	function NavBarOption({ id }: { id: string }) {
		return (
			<a
				href={id}
				className="group relative rounded-sm p-3 font-mono font-medium text-gray-600 transition-colors hover:bg-neutral-50 hover:text-teal-500 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-teal-400"
			>
				{t(id)}
			</a>
		);
	}

	return (
		<div
			className={clsx(
				"fixed top-[64px] flex  h-fit w-full flex-col rounded-b-lg bg-white p-2 shadow-lg transition-transform duration-500 lg:hidden dark:border-r dark:border-gray-700/50 dark:bg-gray-800 dark:text-gray-200",
				{
					"z-20": isOpen,
					"pointer-events-none -z-10 -translate-y-full": !isOpen,
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
			<div className="flex gap-5 py-5">
				<LanguageChanger />
				<ThemeChanger />
			</div>
		</div>
	);
}
