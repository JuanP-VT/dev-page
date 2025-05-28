"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGlobalStore } from "@/store/global-store";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function LanguageChanger() {
  const router = useRouter();
  const t = useTranslations("lang");
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1];
  const restOfPath = pathname.split("/").slice(2).join("/");

  const setIsOpen = useGlobalStore.use.setIsDrawerOpen();

  const handleLanguageChange = (newLang: string) => {
    const newPath = `/${newLang}${restOfPath ? `/${restOfPath}` : ''}`;
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <Select onValueChange={handleLanguageChange} value={currentLang}>
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
        >
          {t("spanish")}
        </SelectItem>
        <SelectItem
          className="cursor-pointer"
          value="en"
        >
          {t("english")}
        </SelectItem>
      </SelectContent>
    </Select>
  );
}