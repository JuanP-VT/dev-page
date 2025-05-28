import { Calendar, Users } from "lucide-react";
import React from "react";

export default function Page() {
	return (
		<div className="">
			<div className="flex flex-col">
				{/* Hero Section */}
				<section className="py-16 md:py-24">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center">
							<div className="mb-4 border w-fit py-1 px-3 text-sm rounded-full justify-self-center ">Case Study</div>
							<h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r dark:from-emerald-300 dark:to-sky-400 from-emerald-400 to-sky-500 bg-clip-text text-transparent">
								Onsite 2 | Full Rebuild
							</h1>
							<p className="text-xl md:text-2xl text-muted-foreground mb-8">
								A ground-up redesign of a core legacy logistics app.
							</p>

							{/* Project Meta */}
							<div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
								<div className="flex items-center gap-2">
									<Users className="h-4 w-4" />
									<span>Frontend Developer</span>
								</div>
								<div className="flex items-center gap-2">
									<Calendar className="h-4 w-4" />
									<span>Ago 2024 – Ongoing Development</span>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
