"use client";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LanguageChanger = () => {
	const router = useRouter();
	const t = useTranslations("lang");
	const pathname = usePathname();

	const restOfPath = pathname.split("/").slice(2).join("/");

	const [selectedLanguage, setSelectedLanguage] = useState("");
	const [isOpen, setIsOpen] = useState(false);

	const languages = [
		{ value: "en", label: t("english") },
		{ value: "es", label: t("spanish") },
	];

	const toggleDropdown = () => setIsOpen(!isOpen);
	const selectLanguage = async (language: (typeof languages)[number]) => {
		setIsOpen(false);
		const newPath = `/${language.value}${restOfPath ? `/${restOfPath}` : ""}`;
		router.push(newPath);
	};

	useEffect(() => {
		const currentLang = pathname.split("/")[1];
		setSelectedLanguage(currentLang);
	}, [pathname]);

	return (
		<div className="relative w-28 ">
			<button
				type="button"
				onClick={toggleDropdown}
				className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium rounded-lg border cursor-pointer
                  bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600
                  text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent                  "
				aria-haspopup="listbox"
				aria-expanded={isOpen}
			>
				<span className="truncate text-xs">
					{languages.find((lang) => lang.value === selectedLanguage)?.label}
				</span>
				<svg
					className={`w-5 h-5  transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<title>Open status icon</title>
					<path
						fillRule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clipRule="evenodd"
					/>
				</svg>
			</button>

			{/* Dropdown Options */}
			{isOpen && (
				<div
					className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 rounded-md shadow-lg
                    border border-gray-300 dark:border-gray-600 overflow-hidden"
				>
					<ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
						{languages.map((language) => (
							<li
								key={language.value}
								onClick={() => selectLanguage(language)}
								onKeyDown={() => {}}
								className={clsx(
									"px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-xs",
									{
										"bg-blue-50 dark:bg-gray-600 text-blue-600 dark:text-blue-300":
											selectedLanguage === language.value,
									},
								)}
								aria-selected={selectedLanguage === language.value}
							>
								{language.label}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default LanguageChanger;
