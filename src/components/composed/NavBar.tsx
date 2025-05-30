"use client";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import LanguageChanger from "./buttons/LanguageChanger";
import { ThemeChanger } from "./buttons/ThemeChanger ";
import { useGlobalStore } from "@/store/global-store";

import MobileDrawer from "./dialogs/MobileDrawer";

export default function NavBar() {
	const t = useTranslations("navbar");
	const setIsDrawerOpen = useGlobalStore.use.setIsDrawerOpen();
	const isDrawerOpen = useGlobalStore.use.isDrawerOpen();

	function NavBarOption({ id }: { id: string }) {
		return (
			<a
				href={`#${id}`}
				className="relative font-mono font-medium text-gray-600 transition-colors dark:text-gray-300 hover:text-teal-400 group"
			>
				{t(id)}
				<span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full" />
			</a>
		);
	}

	return (
		<>
			<MobileDrawer />
			<nav className="flex fixed z-50 justify-between py-4 px-6 w-full h-16 text-gray-800 bg-white shadow-sm sm:rounded-xl dark:text-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700/50">
				<div className="flex text-lg font-bold">
					<span className="text-teal-400">jp</span>
					<span>@{t("portfolio")}</span>
					<span className="text-sky-500">:~$</span>
				</div>
				<div className="hidden gap-6 lg:flex">
					<div className="flex gap-5 items-center font-mono text-gray-300">
						<NavBarOption id="about" />
						<NavBarOption id="tech" />
						<NavBarOption id="projects" />
						<NavBarOption id="experience" />
						<NavBarOption id="contact" />
					</div>
					<div className="flex gap-6">
						<span className="h-full rounded-lg w-[1px] bg-zinc-300/60" />
						<LanguageChanger />
						<ThemeChanger />
					</div>
				</div>
				<Button
					className="transition-opacity duration-300 lg:hidden group"
					variant="outline"
					size="sm"
					onClick={() => {
						setIsDrawerOpen(!isDrawerOpen);
					}}
				>
					{isDrawerOpen ? (
						<RxCross2 className="text-gray-600 transition-all duration-300 dark:text-gray-300 group-hover:text-teal-400 group-active:text-teal-400 dark:group-hover:text-teal-400 dark:group-active:text-teal-400" />
					) : (
						<FaBars className="text-gray-600 transition-all duration-300 dark:text-gray-300 group-hover:text-teal-400 group-active:text-teal-400 dark:group-hover:text-teal-400 dark:group-active:text-teal-400" />
					)}
				</Button>
			</nav>
		</>
	);
}
