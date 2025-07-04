"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function VideoDemo() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;
	return (
		<div>
			<ReactPlayer
				url="https://www.youtube.com/watch?v=HdrY0wZqlFk"
				width="100%"
				controls
			/>
		</div>
	);
}
