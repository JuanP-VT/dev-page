"use client";
import { useTranslations } from "next-intl";

export function getPKT1Experience() {
	const t = useTranslations("experience.1.bullet");

	const experience = [
		{
			main: t("1.main"),
			sub: {
				"1": t("1.sub.1"),
				"2": t("1.sub.2"),
				"3": t("1.sub.3"),
			},
		},
		{
			main: t("2.main"),
			sub: {
				"1": t("2.sub.1"),
				"2": t("2.sub.2"),
				"3": t("2.sub.3"),
			},
		},
		{
			main: t("3.main"),
			sub: {
				"1": t("3.sub.1"),
				"2": t("3.sub.2"),
				"3": t("3.sub.3"),
			},
		},
		{
			main: t("4.main"),
			sub: {
				"1": t("4.sub.1"),
				"2": t("4.sub.2"),
			},
		},
		{
			main: t("5.main"),
			sub: {
				"1": t("5.sub.1"),
				"2": t("5.sub.2"),
			},
		},
		{
			main: t("6.main"),
			sub: {
				"1": t("6.sub.1"),
				"2": t("6.sub.2"),
			},
		},
	];

	return experience;
}
