/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect, useRef, type RefObject } from "react";
import { Terminal as TerminalIcon } from "lucide-react";
import TypingAnimation from "../TypingAnimation";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { useTheme } from "next-themes";

export default function Terminal() {
	const [visible, setVisible] = useState(false);
	const [hasMounted, setHasMounted] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const [currentLine, setCurrentLine] = useState(1);
	const t = useTranslations("terminal");
	const { theme = "dark" } = useTheme();

	//Reset animation on close
	useEffect(() => {
		if (visible) return;
		setCurrentLine(0);
		setTimeout(() => {
			setCurrentLine(1);
		}, 500);
	}, [visible]);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	if (!hasMounted) {
		return null;
	} // avoid rendering during SSR

	return (
		<div className="relative mt-8">
			<div className="absolute right-3 -top-3 z-10">
				<button
					type="button"
					onClick={() => setVisible(!visible)}
					className="p-1 px-2 text-xs text-gray-700 bg-gray-300 rounded-md cursor-pointer dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
				>
					{visible ? t("close") : t("open")}
				</button>
			</div>
			<div className="overflow-hidden bg-white rounded-lg border border-gray-200 shadow-xl dark:bg-gray-900 dark:border-gray-700">
				<div className="flex gap-2 items-center py-2 px-4 bg-gray-100 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
					<TerminalIcon className="w-4 h-4 text-teal-400" />
					<span className="font-mono text-sm text-gray-700 dark:text-gray-300">
						terminal
					</span>
				</div>
				<div
					ref={containerRef}
					className={clsx(
						"overflow-y-auto font-mono text-sm transition-all duration-700",
						{
							"h-72 p-4 opacity-100": visible,
							"h-0 opacity-0": !visible,
							"scrollbar-dark": theme === "dark",
							"scrollbar-light": theme === "light",
						},
					)}
				>
					{visible && currentLine >= 1 && (
						<CommandLine
							containerRef={containerRef}
							command={t("1-command")}
							output={t("1-output")}
							onComplete={() => setCurrentLine((prev) => prev + 1)}
						/>
					)}
					{visible && currentLine >= 2 && (
						<CommandLine
							containerRef={containerRef}
							command={t("2-command")}
							onComplete={() => setCurrentLine((prev) => prev + 1)}
							output={t("2-output")}
						/>
					)}
					{visible && currentLine >= 3 && (
						<CommandLine
							containerRef={containerRef}
							command={t("3-command")}
							onComplete={() => setCurrentLine((prev) => prev + 1)}
							output={t("3-output")}
						/>
					)}
					{visible && currentLine >= 4 && (
						<CommandLine
							containerRef={containerRef}
							command={t("4-command")}
							output={t("4-output")}
							onComplete={() => setCurrentLine((prev) => prev + 1)}
						/>
					)}
					{visible && currentLine >= 5 && (
						<CommandLine
							containerRef={containerRef}
							command={t("5-command")}
							output={t("5-output")}
							onComplete={() => setCurrentLine((prev) => prev + 1)}
						/>
					)}
					{visible && currentLine >= 6 && (
						<CommandLine
							containerRef={containerRef}
							command={t("6-command")}
							output={t("6-output")}
							onComplete={() => setCurrentLine((prev) => prev + 1)}
						/>
					)}
					{visible && currentLine >= 7 && (
						<FinalCommandLine containerRef={containerRef} />
					)}
				</div>
			</div>
		</div>
	);
}

type CommandLineTypes = {
	command: string;
	output: string;
	containerRef?: RefObject<HTMLDivElement | null>;
	onComplete?: () => void;
};

// The component activates after x time
function CommandLine({
	command,
	output,
	containerRef,
	onComplete = () => {},
}: CommandLineTypes) {
	const [outputReady, setOutputReady] = useState(false);

	useEffect(() => {
		scrollBottom(containerRef);
	}, [containerRef]);

	return (
		<div className="mb-3">
			<div className="flex gap-2 items-center">
				<span className="font-medium text-teal-600 dark:text-teal-400">
					dev@portfolio:~$
				</span>
				<TypingAnimation
					strings={[command]}
					className="text-gray-800 dark:text-gray-300"
					onComplete={() => {
						setTimeout(() => {
							setOutputReady(true);
							onComplete();
						}, 300);
					}}
				/>
			</div>
			{outputReady && (
				<div className="pl-6 mt-1 text-gray-600 dark:text-gray-400">
					{output}
				</div>
			)}
		</div>
	);
}

function FinalCommandLine({
	containerRef,
}: {
	containerRef?: RefObject<HTMLDivElement | null>;
}) {
	useEffect(() => {
		scrollBottom(containerRef);
	}, [containerRef]);

	return (
		<div className="flex gap-2 items-center">
			<span className="text-teal-600 dark:text-teal-400">dev@portfolio:~$</span>
			<span className="font-bold text-gray-300 animate-caret-blink">_</span>
		</div>
	);
}

function scrollBottom(
	containerRef: RefObject<HTMLDivElement | null> | undefined,
) {
	if (containerRef?.current) {
		const { scrollHeight, clientHeight } = containerRef.current;
		containerRef.current.scrollTo({
			top: scrollHeight - clientHeight,
			behavior: "smooth",
		});
	}
}
