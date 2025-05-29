"use client";
import type React from "react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

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
		<div className="relative w-full max-w-full mx-auto flex flex-col items-center">
			<span className="flex p-2 text-xl">{title}</span>
			<div
				ref={containerRef}
				className="relative overflow-hidden rounded-lg shadow-lg w-full"
				style={{ height: `${height}px`, maxWidth: `${width}px` }}
			>
				{/* After image (full width) */}
				<Button className="absolute top-1/2 z-10" onClick={onClickPrev}>
					<FaAngleLeft />
				</Button>
				<Button className="absolute top-1/2 right-0 z-10" onClick={onClickNext}>
					<FaAngleRight />
				</Button>
				<div className="absolute inset-0">
					<Image
						src={afterImage || "/placeholder.svg"}
						alt={afterLabel}
						fill
						style={{ objectFit: "cover" }}
					/>
					<div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
						{afterLabel}
					</div>
				</div>

				{/* Before image (clipped) */}
				<div
					className="absolute inset-0 overflow-hidden"
					style={{ width: `${sliderPosition}%` }}
				>
					<Image
						src={beforeImage || "/placeholder.svg"}
						alt={beforeLabel}
						fill
						style={{ objectFit: "cover" }}
					/>
					<div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
						{beforeLabel}
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
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
						{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.5 18.5L3 12M3 12L8.5 5.5M3 12H21"
								stroke="black"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M15.5 18.5L21 12M21 12L15.5 5.5M21 12H3"
								stroke="black"
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
