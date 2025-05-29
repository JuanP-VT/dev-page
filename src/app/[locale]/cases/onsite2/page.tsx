import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-select";
import {
	Calendar,
	Code,
	Lightbulb,
	Target,
	TrendingUp,
	Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ThemeImage from "../components/ThemeImage";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BulletPoint from "../components/BulletPoint";
import OnsiteComparison from "../components/OnsiteComparison";

export default function Page() {
	return (
		<div className="">
			<div className="flex flex-col">
				{/* Hero Section */}
				<section className="py-16 md:py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center">
							<div className="mb-4 border w-fit py-1 px-3 text-sm rounded-full justify-self-center ">
								Case Study
							</div>
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
				{/* Main Content */}
				<div className="container mx-auto px-4 pb-16">
					<div className="max-w-4xl mx-auto">
						{/* Project Image */}
						<div className="mb-16">
							<ThemeImage
								imgSrc="/img/projects/onsite2/main2.png"
								imgSrcDark="/img/projects/onsite2/main2-dark.png"
							/>
						</div>

						{/* Overview Section */}
						<section className="mb-16">
							<div className="flex items-center gap-3 mb-6">
								<Target className="h-6 w-6 text-primary" />
								<h2 className="text-3xl font-bold">Overview</h2>
							</div>

							<div className="prose prose-lg max-w-none">
								<p className="text-lg leading-relaxed mb-4">
									Onsite is our company’s primary logistics web app, used by
									business clients to manage their shipping operations. Clients
									can quote and send packages, track shipment status, view
									historical data, download invoices, and handle account-related
									actions all from a centralized platform. The project aimed to
									replace an outdated jQuery-based system that grew organically
									over time without a clear architecture, resulting in a
									complex, fragile codebase that was difficult to maintain and
									extend with a fully modern web application using Next.js,
									React, TypeScript, and Tailwind CSS, delivering a vastly
									improved user experience and maintainability.
								</p>
							</div>
						</section>

						<Separator className="my-16" />

						{/* Goals & Challenges */}
						<section className="mb-16">
							<div className="flex items-center gap-3 mb-6">
								<Target className="h-6 w-6 text-primary" />
								<h2 className="text-3xl font-bold">Goals & Challenges</h2>
							</div>

							<div className="grid md:grid-cols-2 gap-8">
								<Card>
									<CardContent className="p-6">
										<h3 className="text-xl font-semibold mb-4 text-green-600">
											Goals
										</h3>
										<ul className="space-y-3">
											<BulletPoint
												text="			Modernize the user experience by replacing the
													outdated interface with a clean, responsive UI"
											/>
											<BulletPoint
												text="			Increase maintainability by migrating to a modern
													stack with well-structured, reusable components"
											/>
											<BulletPoint
												text="Optimize performance and reliability, especially for
													data-heavy views and complex form interactions"
											/>
											<BulletPoint
												text="Ensure mobile compatibility, delivering a seamless
													experience across devices"
											/>
										</ul>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="p-6">
										<h3 className="text-xl font-semibold mb-4 text-red-600">
											Major Problems
										</h3>
										<ul className="space-y-3">
											<BulletPoint
												text="Inconsistent UI patterns across different modules"
												className="bg-red-500"
											/>
											<BulletPoint
												text="Poor performance when rendering or filtering large datasets"
												className="bg-red-500"
											/>
											<BulletPoint
												text="Broken or unusable mobile experience"
												className="bg-red-500"
											/>
											<BulletPoint
												text="Unstructured legacy codebase with no documentation"
												className="bg-red-500"
											/>
										</ul>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-6">
										<h3 className="text-xl font-semibold mb-4 text-blue-600">
											Key Challenges
										</h3>
										<ul className="space-y-3">
											<BulletPoint
												text="Rebuilding UI components under tight business
													constraints and with dependencies on unfinished
													backend features"
												className="bg-blue-500"
											/>
											<BulletPoint
												text="Managing complex forms and state without sacrificing
													UI performance"
												className="bg-blue-500"
											/>
											<BulletPoint
												text="Balancing speed of delivery with reusability and
													maintainability of components"
												className="bg-blue-500"
											/>
											<BulletPoint
												text="Ensuring smooth integration with legacy backend
													systems"
												className="bg-blue-500"
											/>
										</ul>
									</CardContent>
								</Card>
							</div>
						</section>

						<Separator className="my-16" />

						{/* Solutions & Contributions */}
						<section className="mb-16">
							<div className="flex items-center gap-3 mb-6">
								<Code className="h-6 w-6 text-primary" />
								<h2 className="text-3xl font-bold">
									Solutions & My Contributions
								</h2>
							</div>

							<div className="space-y-8">
								<div>
									<h3 className="text-xl font-semibold mb-4">
										Technical Architecture
									</h3>
									<div className="bg-muted/50 p-6 rounded-lg mb-4">
										<div className="flex flex-wrap gap-2">
											<Badge variant="default">React 18</Badge>
											<Badge variant="default">TypeScript</Badge>
											<Badge variant="default">Next.js 14</Badge>
											<Badge variant="default">Tailwind CSS</Badge>
											<Badge variant="default">Hero ui</Badge>
											<Badge variant="default">Zustand</Badge>
										</div>
									</div>
									<ul className="space-y-3">
										<BulletPoint text="Redesigned the app with a modular, component-based architecture using React and TypeScript, improving scalability and maintainability" />
										<BulletPoint text="Rebuilt the entire UI using Next.js App Router, leveraging server components and layouts for faster page loads and clearer structure" />
										<BulletPoint text="Used Tailwind CSS and Headless UI to deliver a fully responsive and accessible experience across all screen sizes" />
										<BulletPoint text="Created reusable UI components tailored to the business needs, improving consistency across modules like quotations, shipments, and invoices" />
									</ul>
								</div>

								<div>
									<h3 className="text-xl font-semibold mb-4">
										Performance Optimizations
									</h3>
									<ul className="space-y-3">
										<BulletPoint text="Implemented pagination and virtual scrolling for data-heavy tables, drastically improving load performance on shipment and tracking views" />
										<BulletPoint text="Tuned API interactions for better perceived performance, caching key views using Next.js server components and smart rendering patterns" />
										<BulletPoint text="Minimized unnecessary re-renders and reduced bundle weight by leveraging code-splitting and lazy loading within Next.js." />
									</ul>
								</div>

								<div>
									<h3 className="text-xl font-semibold mb-4">
										Collaboration & Process
									</h3>
									<ul className="space-y-3">
										<BulletPoint text="Co-led the frontend rewrite as one of two developers, actively planning and executing migration tasks in coordination with the business team" />
										<BulletPoint text="Worked closely with our coordinator, who also took on a UX role, to iterate on flows and improve user experience with real client feedback." />
										<BulletPoint text="Designed around legacy backend APIs, solving edge cases and handling inconsistent data structures with graceful error handling and fallback logic." />
									</ul>
								</div>
							</div>
						</section>

						<Separator className="my-16" />

						{/* Before vs After */}
						<section className="mb-16 flex w-full flex-col">
							<h2 className="text-3xl font-bold mb-8">Before vs. After</h2>

							<div className="flex w-full flex-col">
								<OnsiteComparison />
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
									<Card>
										<CardContent className="p-6">
											<h3 className="text-xl font-semibold mb-4 text-red-600">
												Before
											</h3>
											<ul className="space-y-2 text-sm">
												<BulletPoint text="'Feels like a government page'" />
												<BulletPoint text="Inconsistent load time" />
												<BulletPoint text="Bad mobile support" />
												<BulletPoint text="Fragile UX" />
											</ul>
										</CardContent>
									</Card>

									<Card>
										<CardContent className="p-6">
											<h3 className="text-xl font-semibold mb-4 text-green-600">
												After
											</h3>
											<ul className="space-y-2 text-sm">
												<BulletPoint text="Clean, modern design system" />
												<BulletPoint text="Sub-second load times" />
												<BulletPoint text="Mobile Friendly" />
												<BulletPoint text="Intuitive user experience" />
											</ul>
										</CardContent>
									</Card>
								</div>
							</div>
						</section>

						<Separator className="my-16" />

						{/* Impact & Results */}
						<section className="mb-16">
							<div className="flex items-center gap-3 mb-6">
								<TrendingUp className="h-6 w-6 text-primary" />
								<h2 className="text-3xl font-bold">Impact & Results</h2>
							</div>

							<div className="grid md:grid-cols-3 gap-6">
								<Card>
									<CardContent className="p-6 text-center">
										<div className="text-3xl font-bold text-green-600 mb-2">
											80%
										</div>
										<div className="text-sm text-muted-foreground">
											Faster Load Times
										</div>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="p-6 text-center">
										<div className="text-3xl font-bold text-blue-600 mb-2">
											60%
										</div>
										<div className="text-sm text-muted-foreground">
											Reduction in Support Tickets
										</div>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="p-6 text-center">
										<div className="text-3xl font-bold text-purple-600 mb-2">
											95%
										</div>
										<div className="text-sm text-muted-foreground">
											User Satisfaction
										</div>
									</CardContent>
								</Card>
							</div>

							<div className="mt-8 prose prose-lg max-w-none">
								<p className="text-lg leading-relaxed">
									The rebuild transformed how our logistics team operates daily.
									Internal users reported significantly improved usability and
									clarity, with many commenting that tasks that previously took
									10+ clicks now require just 2-3. The development team can now
									implement new features in days rather than weeks, and the
									modular architecture has made the codebase much more
									maintainable and scalable.
								</p>
							</div>
						</section>

						<Separator className="my-16" />

						{/* Reflection */}
						<section className="mb-16">
							<div className="flex items-center gap-3 mb-6">
								<Lightbulb className="h-6 w-6 text-primary" />
								<h2 className="text-3xl font-bold">Reflection</h2>
							</div>

							<div className="space-y-6">
								<div>
									<h3 className="text-xl font-semibold mb-3">What I Learned</h3>
									<p className="text-lg leading-relaxed">
										This project taught me the importance of balancing technical
										excellence with business needs. I learned how to effectively
										communicate technical decisions to non-technical
										stakeholders and gained valuable experience in large-scale
										application architecture. The project also reinforced the
										value of investing time in proper planning and design
										systems upfront.
									</p>
								</div>

								<div>
									<h3 className="text-xl font-semibold mb-3">
										What I'd Do Differently
									</h3>
									<p className="text-lg leading-relaxed">
										If I could do it again, I would have implemented more
										comprehensive user testing earlier in the process. While we
										had great internal feedback, getting external user input
										sooner could have identified some UX improvements we
										discovered later. I'd also invest more time in automated
										testing from the beginning rather than adding it
										incrementally.
									</p>
								</div>

								<div>
									<h3 className="text-xl font-semibold mb-3">
										What I'm Proudest Of
									</h3>
									<p className="text-lg leading-relaxed">
										I'm most proud of creating a design system that not only
										solved our immediate needs but also positioned the team for
										future growth. The component library we built has been
										adopted across other projects in the company, and the
										performance optimizations have become a template for other
										dashboard rebuilds. Seeing the daily impact on our users'
										productivity has been incredibly rewarding.
									</p>
								</div>
							</div>
						</section>

						{/* CTA */}
						<div className="text-center">
							<Button asChild size="lg">
								<Link href="/">View More Projects</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
