"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
import LanguageChanger from "./buttons/LanguageChanger";
import { ThemeChanger } from "./buttons/ThemeChanger ";

export default function CasesNavBar() {
	const t = useTranslations("cases");
	return (
		<div className="flex justify-between p-3 w-full shadow-sm dark:border-b dark:border-gray-500 bg-slate-100 dark:bg-slate-900">
			<Link
				href="/"
				className="flex gap-2 items-center text-sm cursor-pointer group"
			>
				<IoArrowBackOutline
					size="1rem"
					className="transition-all duration-300 group-hover:text-teal-500 text-zinc-600 dark:group-hover:text-teal-500 dark:text-zinc-300"
				/>
				<span className="transition-all duration-300 group-hover:text-teal-500 text-zinc-600 dark:group-hover:text-teal-500 dark:text-zinc-300">
					{t("common.back")}
				</span>
			</Link>
			<div className="flex gap-4 items-center">
				<LanguageChanger />
				<ThemeChanger />
			</div>
		</div>
	);
}
