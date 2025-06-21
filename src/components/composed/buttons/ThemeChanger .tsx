"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import clsx from "clsx";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";

export const ThemeChanger = () => {
	const { theme, setTheme } = useTheme();
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	const handleThemeSwitch = () => {
		if (!theme) {
			return;
		}
		setTheme(theme === "light" ? "dark" : "light");
	};

	if (!hasMounted) {
		return null;
	} // avoid rendering during SSR

	return (
		<Button
			size="sm"
			aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
			onClick={handleThemeSwitch}
			className={clsx(
				"relative  flex border-1 h-[32px] dark:border-slate-700 w-20 gap-7  rounded-xl bg-gradient-to-r from-red-200 via-orange-300 to-lime-300 dark:from-indigo-900 dark:via-purple-700 dark:to-blue-500",
			)}
		>
			<LuMoonStar className="text-white opacity-0 transition-all duration-200 dark:opacity-100 dark:animate-pulse" />
			<MdOutlineWbSunny className="text-white transition-all duration-200 animate-pulse dark:opacity-0 dark:animate-none" />
			<span
				className={clsx(
					"absolute left-1 h-[22px] w-[22px] rounded-xl shadow-lg transition-all duration-500 border border-zinc-300/20 dark:border-zinc-300/40 ",
					{
						"translate-x-12 bg-white/40": theme === "dark",
						"bg-white/40": theme === "light",
					},
				)}
			/>
		</Button>
	);
};
