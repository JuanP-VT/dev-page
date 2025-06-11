"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

type FloatingElement = {
	x: number;
	y: number;
	size: number;
	speedX: number;
	speedY: number;
	element: string;
};

export default function FloatingElements() {
	const [numberOfElements, setNumberOfElements] = useState(30);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const { theme = "dark" } = useTheme();

	//Initialize canvas
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		// Set canvas dimensions
		const setCanvasDimensions = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		setCanvasDimensions();
		window.addEventListener("resize", setCanvasDimensions);

		// Create floating elements
		const elements: FloatingElement[] = [];
		const codeElements = [
			"</>",
			"{ }",
			"=>",
			"||",
			"&&",
			"==",
			"===",
			"!=",
			"!==",
			"++",
			"--",
			"+=",
			"-=",
			"*=",
			"/=",
			"%=",
			"**",
			"??",
			"?.",
			"...",
			"[]",
			"()",
			";",
			"://",
			"#",
			"@",
			"$",
			"~",
		];

		for (let i = 0; i < numberOfElements; i++) {
			elements.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				size: Math.random() * 14 + 10,
				speedX: (Math.random() - 0.5) * 0.5,
				speedY: (Math.random() - 0.5) * 0.5,
				element: codeElements[Math.floor(Math.random() * codeElements.length)],
			});
		}

		function animate() {
			if (!ctx || !canvas) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			elements.forEach((el, _) => {
				// Update position
				el.x += el.speedX;
				el.y += el.speedY;

				// Bounce off edges
				if (el.x > canvas.width || el.x < 0) el.speedX *= -1;
				if (el.y > canvas.height || el.y < 0) el.speedY *= -1;

				// Draw element
				ctx.font = `${el.size}px monospace`;
				ctx.fillStyle =
					theme === "dark"
						? "rgba(99, 230, 190, 0.25)"
						: "rgba(99, 230, 190, 0.45)";
				ctx.fillText(el.element, el.x, el.y);
			});

			requestAnimationFrame(animate);
		}

		animate();

		return () => {
			window.removeEventListener("resize", setCanvasDimensions);
		};
	}, [numberOfElements, theme]);

	//Mobile adjustment
	useEffect(() => {
		const isMobile = window.matchMedia("(max-width: 768px)").matches;
		setNumberOfElements(isMobile ? 10 : 30);
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
		/>
	);
}
