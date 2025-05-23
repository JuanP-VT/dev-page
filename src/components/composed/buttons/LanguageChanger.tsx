"use client";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useUiStore } from "@/store/global-store";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function LanguageChanger() {
	const router = useRouter();
	const t = useTranslations("lang");
	const pathname = usePathname().split("/")[1];

	const setIsOpen = useUiStore.use.setIsDrawerOpen();

	return (
		<Select onValueChange={(val) => router.push(val)} value={pathname}>
			<SelectTrigger
				size="sm"
				className="cursor-pointer text-gray-600 dark:text-gray-300"
			>
				<SelectValue placeholder={t("language")} />
			</SelectTrigger>
			<SelectContent className="text-gray-600 dark:bg-gray-800 dark:text-gray-300">
				<SelectItem
					className="cursor-pointer"
					value="es"
					onClick={() => setIsOpen(false)}
				>
					{t("spanish")}
				</SelectItem>
				<SelectItem
					className="cursor-pointer"
					value="en"
					onClick={() => setIsOpen(false)}
				>
					{t("english")}
				</SelectItem>
			</SelectContent>
		</Select>
	);
}
