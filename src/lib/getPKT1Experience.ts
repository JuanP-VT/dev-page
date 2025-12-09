"use client";
import { useTranslations } from "next-intl";

export function getPKT1Experience() {
	const t = useTranslations("experience.1.bullet");

	const experience = [
		{
			main: t("1.main"),
		},
		{
			main: t("2.main"),
		},
		{
			main: t("3.main"),
		},
		{
			main: t("4.main"),
		},
		{
			main: t("5.main"),
		},
		{
			main: t("6.main"),
		},
	];

	return experience;
}
