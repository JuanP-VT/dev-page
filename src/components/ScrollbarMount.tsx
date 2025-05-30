"use client";
import { useTheme } from "next-themes";
import { useEffect } from "react";
/**
 * Workaround for Tailwind's dynamic scrollbar theming limitation
 *
 * Tailwind does not automatically switch between `scrollbar-light` and `scrollbar-dark`
 * classes when the theme changes (e.g., light/dark mode toggles). Since these classes
 * are not natively reactive, we must manually apply them after the client hydrates.
 */

type Props = {
	id: string;
};
export default function ScrollbarMount({ id }: Props) {
	const { theme = "dark" } = useTheme();

	useEffect(() => {
		const element = document.querySelector(id);

		if (!element) return;

		if (theme === "dark") {
			element.classList.remove("scrollbar-light");
			element.classList.add("scrollbar-dark");
		} else {
			element.classList.remove("scrollbar-dark");
			element.classList.add("scrollbar-light");
		}
	}, [theme, id]);

	return null;
}
