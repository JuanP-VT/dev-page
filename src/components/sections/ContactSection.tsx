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
      <div className="text-center mb-16">
        <div className="inline-block px-3 py-1  rounded-md text-sm font-mono mb-4 border text-teal-400 bg-gray-100  border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <span className="text-pink-400">ssh</span>{" "}
          <span className="text-teal-400">jp@contact</span>
        </div>
        <h2 className="text-3xl font-bold mb-2 font-mono text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
          {t("title")}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto font-mono">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 max-w-3xl mx-auto">
        <div className="bg-gray-200 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-xl">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
            <Terminal className="h-4 w-4 text-teal-400" />
            <span className="font-mono text-gray-600 dark:text-gray-300">
              {t("reach")}
            </span>
          </div>
          <div className="p-4 pb-8 font-mono text-sm sm:text-base overflow-hidden">
            <div className="border-gray-800 pt-2 ">
              <div className="space-y-3 sm:space-y-5">
                <button
                  type="button"
                  onClick={handleMail}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-teal-400 transition-colors cursor-pointer"
                >
                  <Mail className="h-4 w-4" />
                  <span>cv.juanp@gmail.com</span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsapp}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-teal-400 transition-colors cursor-pointer"
                >
                  <Phone className="h-4 w-4" />
                  <span>+52 668 231-5176(WhatsApp)</span>
                </button>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <MapPin className="h-4 w-4" />
                  <span>Los Mochis Sinaloa, Mexico</span>
                </div>
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://github.com/JuanP-VT"
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    <FaGithub className="h-8 w-8" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pavatbdev/"
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    <FaLinkedin className="h-8 w-8" />
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
