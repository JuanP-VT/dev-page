"use client";
import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type CarrouselProps = {
	imgList: string[];
};

export default function Carrousel({ imgList = [] }: CarrouselProps) {
	return (
		<section>
			<Carousel className="w-full rounded-sm">
				<CarouselContent>
					{imgList.map((img) => (
						<CarouselItem key={img}>
							<Image
								className="w-full h-full rounded-sm noselect"
								src={img}
								alt="Management Demo"
								width={900}
								height={500}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	);
}
