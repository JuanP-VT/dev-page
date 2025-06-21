"use client";
import type React from "react";
import { useState, useRef, useEffect, useTransition } from "react";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

type BeforeAfterSliderProps = {
	beforeImage: string;
	afterImage: string;
	title: string;
	beforeLabel?: string;
	afterLabel?: string;
	height?: number;
	width?: number;
	onClickNext?: () => void;
	onClickPrev?: () => void;
};

export default function BeforeAfterSlider({
	beforeImage = "",
	afterImage = "",
	title = "",
	beforeLabel = "Before",
	afterLabel = "After",
	height = 600,
	width = 700,
	onClickNext = () => {},
	onClickPrev = () => {},
}: BeforeAfterSliderProps) {
	const t = useTranslations("cases.onsite2.BvsA");
	const [sliderPosition, setSliderPosition] = useState(50);
	const [isDragging, setIsDragging] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleMouseDown = () => {
		setIsDragging(true);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const handleMouseMove = (e: MouseEvent | TouchEvent) => {
		if (!isDragging || !containerRef.current) return;

		let clientX: number;

		if ("touches" in e) {
			clientX = e.touches[0].clientX;
		} else {
			clientX = e.clientX;
		}

		const rect = containerRef.current.getBoundingClientRect();
		const x = clientX - rect.left;
		const position = Math.max(0, Math.min(100, (x / rect.width) * 100));

		setSliderPosition(position);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const handleMouseUpGlobal = () => {
			setIsDragging(false);
		};

		const handleTouchMove = (e: TouchEvent) => {
			if (isDragging) {
				handleMouseMove(e);
			}
		};

		window.addEventListener("mouseup", handleMouseUpGlobal);
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("touchend", handleMouseUpGlobal);
		window.addEventListener("touchmove", handleTouchMove);

		return () => {
			window.removeEventListener("mouseup", handleMouseUpGlobal);
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("touchend", handleMouseUpGlobal);
			window.removeEventListener("touchmove", handleTouchMove);
		};
	}, [isDragging]);

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "ArrowLeft") {
			setSliderPosition((prev) => Math.max(0, prev - 1));
		} else if (e.key === "ArrowRight") {
			setSliderPosition((prev) => Math.min(100, prev + 1));
		}
	};

	return (
		<div className="flex relative flex-col items-center mx-auto w-full max-w-full">
			<span className="flex p-4 py-5 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 dark:to-emerald-400 from-sky-500 dark:from-sky-500">
				{title}
			</span>
			<div
				ref={containerRef}
				className="overflow-hidden relative w-full rounded-lg shadow-lg"
				style={{ height: `${height}px`, maxWidth: `${width}px` }}
			>
				{/* After image (full width) */}
				<Button
				aria-label="Previous"
					className="absolute top-1/2 z-10 transition-all bg-zinc-200 hover:bg-zinc-200/90 active:bg-zic-200"
					onClick={onClickPrev}
				>
					<FaAngleLeft className="text-zinc-500" />
				</Button>
				<Button
				aria-label="Next"
					className="absolute right-0 top-1/2 z-10 transition-all bg-zinc-200 hover:bg-zinc-200/70 active:bg-zic-200"
					onClick={onClickNext}
				>
					<FaAngleRight className="text-zinc-500" />
				</Button>
				<div className="absolute inset-0">
					<Image
						src={afterImage || "/placeholder.svg"}
						alt={afterLabel}
						fill
						style={{ objectFit: "cover" }}
					/>
					<div className="absolute right-4 bottom-4 py-1 px-3 text-sm font-medium text-white rounded-full bg-black/70">
						{t("after.title")}
					</div>
				</div>

				{/* Before image (clipped) */}
				<div
					className="overflow-hidden absolute inset-0"
					style={{ width: `${sliderPosition}%` }}
				>
					<Image
						src={beforeImage || "/placeholder.svg"}
						alt={beforeLabel}
						fill
						style={{ objectFit: "cover" }}
					/>
					<div className="absolute bottom-4 left-4 py-1 px-3 text-sm font-medium text-white rounded-full bg-black/70">
						{t("before.title")}
					</div>
				</div>

				{/* Slider handle */}
				<div
					className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_0_2px_rgba(255,255,255,0.9)]"
					style={{ left: `${sliderPosition}%` }}
					onMouseDown={handleMouseDown}
					onTouchStart={handleMouseDown}
					onTouchEnd={handleMouseUp}
					onKeyDown={handleKeyDown}
					role="slider"
					aria-valuenow={sliderPosition}
					aria-valuemin={0}
					aria-valuemax={100}
					aria-label="Comparison slider"
					tabIndex={0}
				>
					<div className="flex absolute top-1/2 left-1/2 justify-center items-center w-8 h-8 bg-gray-300 rounded-full shadow-md -translate-x-1/2 -translate-y-20">
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Slider</title>
							<path
								d="M8.5 18.5L3 12M3 12L8.5 5.5M3 12H21"
								stroke="#71717a"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M15.5 18.5L21 12M21 12L15.5 5.5M21 12H3"
								stroke="#71717a"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}
