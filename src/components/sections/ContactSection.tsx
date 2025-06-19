"use client";

import type React from "react";

import { Mail, Phone, MapPin, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { toast } from "sonner";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

export default function ContactSection() {
	const t = useTranslations("contact");
	const { theme = "light" } = useTheme();

	const toastOptions = {
		duration: 2000,
		style: {
			background: theme === "light" ? "#86efac" : "#065f46",
			border: "none",
			color: theme === "light" ? "#064e3b" : "#d1fae5",
		},
	};
	const handleWhatsapp = () => {
		window.navigator.clipboard.writeText("526682315176");
		toast.success(t("toast.whatsapp"), toastOptions);
	};

	const handleMail = () => {
		window.navigator.clipboard.writeText("cv.juanp@gmail.com");
		toast.success(t("toast.email"), toastOptions);
	};
	return (
		<section id="contact" className="py-20">
			<div className="mb-16 text-center">
				<div className="inline-block py-1 px-3 mb-4 font-mono text-sm text-teal-400 bg-gray-100 rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
					<span className="text-pink-400">ssh</span>{" "}
					<span className="text-teal-400">jp@contact</span>
				</div>
				<h2 className="mb-2 font-mono text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
					{t("title")}
				</h2>
				<p className="mx-auto max-w-2xl font-mono text-gray-400">
					{t("subtitle")}
				</p>
			</div>

			<div className="grid grid-cols-1 gap-10 mx-auto max-w-3xl">
				<div className="overflow-hidden bg-gray-200 rounded-lg border border-gray-200 shadow-xl dark:bg-gray-900 dark:border-gray-700">
					<div className="flex gap-2 items-center py-2 px-4 bg-gray-200 border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700">
						<Terminal className="w-4 h-4 text-teal-400" />
						<span className="font-mono text-gray-600 dark:text-gray-300">
							{t("reach")}
						</span>
					</div>
					<div className="overflow-hidden p-4 pb-8 font-mono text-sm sm:text-base">
						<div className="pt-2 border-gray-800">
							<div className="space-y-3 sm:space-y-5">
								<button
									type="button"
									onClick={handleMail}
									className="flex gap-2 items-center text-gray-600 transition-colors cursor-pointer dark:text-gray-300 hover:text-teal-400 dark:hover:text-teal-400"
								>
									<Mail className="w-4 h-4" />
									<span>cv.juanp@gmail.com</span>
								</button>
								<button
									type="button"
									onClick={handleWhatsapp}
									className="flex gap-2 items-center text-gray-600 transition-colors cursor-pointer dark:text-gray-300 hover:text-teal-400 dark:hover:text-teal-400"
								>
									<Phone className="w-4 h-4" />
									<span>+52 668 231-5176(WhatsApp)</span>
								</button>
								<div className="flex gap-2 items-center text-gray-600 dark:text-gray-300">
									<MapPin className="w-4 h-4" />
									<span>Los Mochis Sinaloa, Mexico</span>
								</div>
								<div className="flex gap-4 mt-6">
									<a
										href="https://github.com/JuanP-VT"
										className="text-gray-600 transition-colors dark:text-gray-300 hover:text-teal-400 dark:hover:text-teal-400"
									>
										<FaGithub className="w-8 h-8" />
									</a>
									<a
										href="https://www.linkedin.com/in/pavatbdev/"
										className="text-gray-600 transition-colors dark:text-gray-300 hover:text-teal-400 dark:hover:text-teal-400"
									>
										<FaLinkedin className="w-8 h-8" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
