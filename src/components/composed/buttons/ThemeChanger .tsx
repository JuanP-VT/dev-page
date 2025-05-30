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
			onClick={handleThemeSwitch}
			className={clsx(
				"relative border flex w-28 gap-10 rounded-xl bg-gradient-to-r from-red-200 via-orange-300 to-lime-300 dark:from-purple-800 dark:via-indigo-700 dark:to-green-600",
			)}
		>
			<LuMoonStar className="text-black/50 opacity-0 transition-all duration-200 dark:opacity-100" />
			<MdOutlineWbSunny className="text-white/90 transition-all duration-200 dark:opacity-0" />
			<span
				className={clsx(
					"absolute left-1 h-6 w-6 rounded-xl shadow-lg transition-all duration-500",
					{
						"translate-x-20 bg-white/50": theme === "dark",
						"bg-white/50": theme === "light",
					},
				)}
			/>
		</Button>
	);
};
