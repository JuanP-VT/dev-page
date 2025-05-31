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
import { GrOverview } from "react-icons/gr";
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
				<section className="py-10 md:py-16">
					<div className="container px-4 mx-auto">
						<div className="mx-auto max-w-4xl text-center">
							<div className="justify-self-center py-1 px-3 mb-4 text-sm rounded-full border w-fit ">
								Case Study
							</div>
							<h1 className="mb-6 text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 md:text-6xl dark:to-emerald-400 from-sky-500 dark:from-sky-500">
								Onsite 2 | Full Rebuild
							</h1>
							<p className="mb-8 text-xl md:text-2xl text-muted-foreground">
								A ground-up redesign of a core legacy logistics app.
							</p>

							{/* Project Meta */}
							<div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
								<div className="flex gap-2 items-center">
									<Users className="w-4 h-4" />
									<span>Frontend Developer</span>
								</div>
								<div className="flex gap-2 items-center">
									<Calendar className="w-4 h-4" />
									<span>Ago 2024 – Ongoing Development</span>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Main Content */}
				<div className="container px-4 pb-16 mx-auto">
					<div className="mx-auto max-w-4xl">
						{/* Project Image */}
						<div className="mb-16">
							<ThemeImage
								imgSrc="/img/projects/onsite2/main2.png"
								imgSrcDark="/img/projects/onsite2/main2-dark.png"
							/>
						</div>

						{/* Overview Section */}
						<section className="mb-16">
							<div className="flex gap-3 items-center mb-6">
								<GrOverview className="w-6 h-6 text-sky-500" />
								<h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 dark:to-emerald-400 from-sky-500 dark:from-sky-500">
									Overview
								</h2>
							</div>
							<Card>
								<CardContent>
									<div className="max-w-none prose prose-lg">
										<div className="mb-4 text-lg leading-relaxed">
											Onsite is our company’s main logistics platform, used by
											business clients to manage every step of their shipping
											operations. Clients can quote and send packages, track
											shipments, download invoices, view historical data, and
											handle account settings from a single interface. The
											original version was a legacy jQuery application that grew
											without a clear structure, resulting in a fragile,
											inconsistent codebase that was hard to maintain and
											extend. The goal was to replace it with a fully modern web
											application built with Next.js, React, TypeScript, and
											Tailwind CSS. The result is a significantly improved user
											experience and a much more scalable and maintainable
											system.
										</div>
									</div>
								</CardContent>
							</Card>
						</section>

						{/* Goals & Challenges */}
						<section className="mb-16">
							<div className="flex gap-3 items-center mb-6">
								<Target className="w-6 h-6 text-sky-500" />
								<h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 dark:to-emerald-400 from-sky-500 dark:from-sky-500">
									Goals & Challenges
								</h2>
							</div>

							<div className="grid gap-8 md:grid-cols-2">
								<Card>
									<CardContent className="p-6">
										<h3 className="mb-4 text-xl font-semibold text-emerald-600 dark:text-emerald-500">
											Goals
										</h3>
										<ul className="space-y-3">
											<BulletPoint
												text="Modernize the user experience by replacing the
													outdated interface with a clean, responsive UI"
											/>
											<BulletPoint text="Improve maintainability by adopting a modern tech stack with reusable, well-structured components" />
											<BulletPoint text="Optimize performance and reliability, particularly in data-heavy views and complex form interactions" />
											<BulletPoint text="Ensure mobile compatibility for a seamless experience across all devices" />
										</ul>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-6">
										<h3 className="mb-4 text-xl font-semibold text-blue-600 dark:text-blue-500">
											Key Challenges
										</h3>
										<ul className="space-y-3">
											<BulletPoint
												text="Rebuilding UI components under tight business constraints and incomplete backend support"
												className="bg-blue-500"
											/>
											<BulletPoint
												text="Managing complex forms and application state while maintaining UI responsiveness"
												className="bg-blue-500"
											/>
											<BulletPoint
												text="Balancing fast delivery with long-term reusability and maintainability of the codebase"
												className="bg-blue-500"
											/>
											<BulletPoint
												text="Integrating with legacy backend systems that introduced technical debt and limitations"
												className="bg-blue-500"
											/>
										</ul>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="p-6">
										<h3 className="mb-4 text-xl font-semibold text-red-600 dark:text-red-500">
											Major Problems
										</h3>
										<ul className="space-y-3">
											<BulletPoint
												text="Inconsistent UI patterns across different parts of the app, leading to confusion and poor UX"
												className="bg-red-500"
											/>
											<BulletPoint
												text="Performance bottlenecks when rendering or filtering large datasets"
												className="bg-red-500"
											/>
											<BulletPoint
												text="Broken or unusable mobile experience, making the app frustrating on phones and tablets"
												className="bg-red-500"
											/>
											<BulletPoint
												text="Unstructured legacy codebase with no documentation"
												className="bg-red-500"
											/>
										</ul>
									</CardContent>
								</Card>
							</div>
						</section>

						<Separator className="my-16" />

						{/* Solutions & Contributions */}
						<section className="mb-16">
							<div className="flex gap-3 items-center mb-6">
								<Code className="w-6 h-6 text-sky-500" />
								<h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 dark:to-emerald-400 from-sky-500 dark:from-sky-500">
									Solutions & My Contributions
								</h2>
							</div>

							<div className="space-y-8">
								<div>
									<h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 dark:to-emerald-400 from-sky-500 dark:from-sky-500">
										Technical Architecture
									</h3>
									<div className="p-6 rounded-lg">
										<div className="flex flex-wrap gap-2">
											<Badge variant="outline">React 18</Badge>
											<Badge variant="outline">TypeScript</Badge>
											<Badge variant="outline">Next.js 14</Badge>
											<Badge variant="outline">Tailwind CSS</Badge>
											<Badge variant="outline">Hero ui</Badge>
											<Badge variant="outline">Zustand</Badge>
										</div>
									</div>
									<Card>
										<CardContent>
											<ul className="space-y-3">
												<BulletPoint text="Built a modular, component-based architecture with React and TypeScript to improve scalability and long-term maintainability." />
												<BulletPoint text="Rebuilt the UI using Next.js App Router, leveraging server components and nested layouts for faster load times and clearer structure." />
												<BulletPoint text="Applied Tailwind CSS and Hero UI to deliver a fully responsive, accessible interface across all devices." />
												<BulletPoint text="Created reusable, business-specific UI components used across key modules like quotations, shipments, and invoices." />
											</ul>
										</CardContent>
									</Card>
								</div>

								<div>
									<h3 className="mb-4 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 dark:to-emerald-400 from-sky-500 dark:from-sky-500">
										Performance Optimizations
									</h3>
									<Card>
										<CardContent>
											<ul className="space-y-3">
												<BulletPoint text="Implemented pagination and virtual scrolling for data-heavy tables, drastically improving load performance on shipment and tracking views.." />
												<BulletPoint text="Used Next.js server components to cache key views and reduce redundant API calls, improving perceived speed." />
												<BulletPoint text="Minimized re-renders and reduced bundle size with code-splitting and lazy loading strategies." />
											</ul>
										</CardContent>
									</Card>
								</div>

								<div>
									<h3 className="mb-4 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 dark:to-emerald-400 from-sky-500 dark:from-sky-500">
										Collaboration & Process
									</h3>
									<Card>
										<CardContent>
											<ul className="space-y-3">
												<BulletPoint text="Co-led the frontend rewrite as one of two developers, taking ownership of full modules from design to deployment" />
												<BulletPoint text="Partnered closely with our coordinator (acting as UX) to iterate on flows and interfaces using client feedback." />
												<BulletPoint text="Integrated with legacy backend APIs, building resilient error handling and working around inconsistent data and undocumented endpoints." />
											</ul>
										</CardContent>
									</Card>
								</div>
							</div>
						</section>

						<Separator className="my-16" />

						{/* Before vs After */}
						<section className="flex flex-col mb-16 w-full">
							<h2 className="mb-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 dark:to-emerald-400 from-sky-500 dark:from-sky-500">
								Before vs. After
							</h2>
							<span className="block text-xs text-primary font-light ">
								(Move the slider in the center of the image)
							</span>

							<div className="flex flex-col w-full">
								<OnsiteComparison />
								<div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
									<Card>
										<CardContent className="p-6">
											<h3 className="mb-4 text-xl font-semibold text-red-600">
												Before
											</h3>
											<ul className="space-y-2 text-sm">
												<BulletPoint
													className="bg-red-500"
													text="Outdated interface that “felt like a 2004 government page”"
												/>
												<BulletPoint
													className="bg-red-500"
													text="Unpredictable loading times"
												/>
												<BulletPoint
													className="bg-red-500"
													text="Broken or unreliable mobile experience"
												/>
												<BulletPoint
													className="bg-red-500"
													text="Clunky user flows with frequent UX issues"
												/>
											</ul>
										</CardContent>
									</Card>

									<Card>
										<CardContent className="p-6">
											<h3 className="mb-4 text-xl font-semibold text-emerald-500">
												After
											</h3>
											<ul className="space-y-2 text-sm">
												<BulletPoint text="Clean, consistent design system with modern UI" />
												<BulletPoint text="Faster load times and smoother interactions" />
												<BulletPoint text="Responsive across devices" />
												<BulletPoint text="Clearer navigation and more intuitive user experience" />
											</ul>
										</CardContent>
									</Card>
								</div>
							</div>
						</section>

						<Separator className="my-16" />

						{/* Impact & Results */}
						<section className="mb-16">
							<div className="flex gap-3 items-center mb-6">
								<TrendingUp className="w-6 h-6 text-sky-500" />
								<h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 dark:to-emerald-400 from-sky-500 dark:from-sky-500">
									Impact & Results
								</h2>
							</div>

							<div className="grid gap-6 md:grid-cols-3">
								<Card>
									<CardContent className="p-6 text-center">
										<div className="mb-2 text-3xl font-bold text-emerald-500">
											80%
										</div>
										<div className="text-sm text-muted-foreground">
											Faster render times
										</div>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="p-6 text-center">
										<div className="mb-2 text-3xl font-bold text-teal-500">
											60%
										</div>
										<div className="text-sm text-muted-foreground">
											Estimated UI code reduction
										</div>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="p-6 text-center">
										<div className="mb-2 text-3xl font-bold text-cyan-500">
											95%
										</div>
										<div className="text-sm text-muted-foreground">
											Positive feedback from internal stakeholders
										</div>
									</CardContent>
								</Card>
							</div>

							<Card className="mt-6">
								<CardContent>
									<div className=" max-w-none prose prose-lg">
										<p className="text-lg leading-relaxed">
											The rebuild marks a major leap in usability and
											maintainability. Internal stakeholders involved in testing
											have praised the cleaner design and clearer structure,
											noting that previously confusing workflows are now
											streamlined. From a development perspective, the new
											modular architecture has significantly improved
											scalability and speed of implementation, setting the
											foundation for faster iteration and long-term product
											evolution.
										</p>
									</div>
								</CardContent>
							</Card>
						</section>

						<Separator className="my-16" />

						{/* Reflection */}
						<section className="mb-16">
							<div className="flex gap-3 items-center mb-6">
								<Lightbulb className="w-6 h-6 text-sky-500" />
								<h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 dark:to-emerald-400 from-sky-500 dark:from-sky-500">
									Reflection
								</h2>
							</div>

							<div className="space-y-6">
								<div>
									<h3 className="mb-3 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 dark:to-emerald-400 from-sky-500 dark:from-sky-500">
										What I Learned
									</h3>
									<Card>
										<CardContent>
											{" "}
											<div className="text-lg leading-relaxed">
												Working on Onsite 2 pushed me to a new level of
												ownership and problem-solving. As one of only two
												developers on the project, I was responsible for
												independently delivering entire modules from
												architectural decisions to final UI details often
												without direct guidance. This experience sharpened my
												ability to:
												<div className="flex flex-col gap-2 py-1">
													<BulletPoint text="Make architectural and tech decisions confidently" />
													<BulletPoint text="Balance maintainability with business-driven deadlines" />
													<BulletPoint text="Break down large, ambiguous tasks into achievable steps" />
													<BulletPoint text="Communicate effectively with non-technical stakeholders to clarify requirements" />
												</div>
												While the autonomy was challenging, it helped me grow
												significantly as a frontend developer. I left this
												project with stronger technical instincts, more
												confidence in my judgment, and a deeper understanding of
												how to build scalable interfaces in real-world product
												environments.
											</div>
										</CardContent>
									</Card>
								</div>

								<div>
									<h3 className="mb-3 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 dark:to-emerald-400 from-sky-500 dark:from-sky-500">
										What I'd Do Differently
									</h3>
									<Card>
										<CardContent>
											<div className="text-lg leading-relaxed">
												Due to the company's lack of a testing culture and
												resource constraints, we didn’t implement automated
												unit, integration, or end-to-end tests. This made manual
												testing more time-consuming and occasionally led to
												regressions during development If given the chance to
												revisit this project or in future projects I would
												advocate for:
												<div className="flex flex-col gap-2 py-1">
													<BulletPoint text="Introducing automated testing early in the development lifecycle" />
													<BulletPoint text="Establishing a testing strategy appropriate to the project size" />
													<BulletPoint text="Educating the team on how testing improves confidence, speeds up iteration, and reduces support overhead" />
												</div>
											</div>
										</CardContent>
									</Card>
								</div>

								<div>
									<h3 className="mb-3 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 dark:to-emerald-400 from-sky-500 dark:from-sky-500">
										What I'm Proudest Of
									</h3>
									<Card>
										<CardContent>
											<div className="text-lg leading-relaxed">
												This project tested me in a real-world where I had to
												deliver production-ready software with minimal guidance,
												legacy constraints, and full responsibility over
												multiple modules. Despite the pressure and challenges, I
												shipped high-quality features, learned to own my work
												end-to-end, and contributed to a product that truly
												matters to users. What makes me most proud is the
												personal growth: I went from dealing with impostor
												syndrome to feeling confident in my ability to solve
												complex problems, collaborate effectively, and make
												solid technical decisions. This experience solidified my
												identity as a capable, reliable developer and I'm ready
												for what’s next
											</div>
										</CardContent>
									</Card>
								</div>
							</div>
						</section>

						{/* CTA */}
						<div className="text-center">
							<Button asChild size="lg">
								<Link
									className="bg-gradient-to-r to-emerald-400 dark:to-emerald-400 from-sky-500 dark:from-sky-500"
									href="/#projects"
								>
									View More Projects
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
