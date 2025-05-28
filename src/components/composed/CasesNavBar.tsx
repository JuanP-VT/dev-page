"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
import LanguageChanger from "./buttons/LanguageChanger";
import { ThemeChanger } from "./buttons/ThemeChanger ";

export default function CasesNavBar() {
	const t = useTranslations("cases");
	return (
		<div className="border-b border-gray-500 p-4 flex justify-between">
			<Link
				href="/"
				className="flex items-center group cursor-pointer gap-2 text-sm"
			>
				<IoArrowBackOutline
					size="1rem"
					className="group-hover:text-teal-500 group transition-all duration-300"
				/>
				<span className="group-hover:text-teal-500 transition-all duration-300 ">
					{t("common.back")}
				</span>
			</Link>
			<div className="flex gap-4">
				<LanguageChanger />
				<ThemeChanger />
			</div>
		</div>
	);
}
