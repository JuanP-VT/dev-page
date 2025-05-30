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
				<section className="py-16 md:py-20">
					<div className="container px-4 mx-auto">
						<div className="mx-auto max-w-4xl text-center">
							<div className="justify-self-center py-1 px-3 mb-4 text-sm rounded-full border w-fit">
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

							<div className="max-w-none prose prose-lg">
								<div className="mb-4 text-lg leading-relaxed">
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
								</div>
							</div>
						</section>

						<Separator className="my-16" />

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
											<BulletPoint
												text="Increase maintainability by migrating to a modern
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
										<h3 className="mb-4 text-xl font-semibold text-blue-600 dark:text-blue-500">
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
								<Card>
									<CardContent className="p-6">
										<h3 className="mb-4 text-xl font-semibold text-red-600 dark:text-red-500">
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
									<h3 className="mb-4 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 dark:to-emerald-400 from-sky-500 dark:from-sky-500">
										Technical Architecture
									</h3>
									<div className="p-6 mb-4 rounded-lg bg-muted/50">
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
									<h3 className="mb-4 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 dark:to-emerald-400 from-sky-500 dark:from-sky-500">
										Performance Optimizations
									</h3>
									<ul className="space-y-3">
										<BulletPoint text="Implemented pagination and virtual scrolling for data-heavy tables, drastically improving load performance on shipment and tracking views" />
										<BulletPoint text="Tuned API interactions for better perceived performance, caching key views using Next.js server components and smart rendering patterns" />
										<BulletPoint text="Minimized unnecessary re-renders and reduced bundle weight by leveraging code-splitting and lazy loading within Next.js." />
									</ul>
								</div>

								<div>
									<h3 className="mb-4 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 dark:to-emerald-400 from-sky-500 dark:from-sky-500">
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
						<section className="flex flex-col mb-16 w-full">
							<h2 className="mb-8 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 dark:to-emerald-400 from-sky-500 dark:from-sky-500">
								Before vs. After
								<span className="block text-xs font-light text-primary">
									(Move the slider in the center of the image)
								</span>
							</h2>

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
													text="Outdated interface, 'felt like a 2004 government page'"
												/>
												<BulletPoint
													className="bg-red-500"
													text="Unpredictable loading times"
												/>
												<BulletPoint
													className="bg-red-500"
													text="Broken mobile experience"
												/>
												<BulletPoint
													className="bg-red-500"
													text="Clunky and fragile user flows"
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
												<BulletPoint text="Noticeably faster load times and smoother interactions" />
												<BulletPoint text="Responsive across devices" />
												<BulletPoint text="Improved user experience with clearer navigation" />
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

							<div className="mt-8 max-w-none prose prose-lg">
								<p className="text-lg leading-relaxed">
									The rebuild marks a major leap in usability and
									maintainability. Internal stakeholders involved in testing
									have praised the cleaner design and clearer structure, noting
									that previously confusing workflows are now streamlined. From
									a development perspective, the new modular architecture has
									significantly improved scalability and speed of
									implementation, setting the foundation for faster iteration
									and long-term product evolution.
								</p>
							</div>
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
									<div className="text-lg leading-relaxed">
										Working on Onsite 2 pushed me to a new level of ownership
										and problem-solving. As one of only two developers on the
										project, I was responsible for independently delivering
										entire modules from architectural decisions to final UI
										details often without direct guidance. This experience
										sharpened my ability to:
										<div className="flex flex-col gap-2 py-1">
											<BulletPoint text="Make architectural and tech decisions confidently" />
											<BulletPoint text="Prioritize maintainability while working under business pressure" />
											<BulletPoint text="Break down large, ambiguous tasks into achievable steps" />
											<BulletPoint text="Communicate proactively with non-technical stakeholders to clarify requirements" />
										</div>
										While it was challenging at times, the autonomy helped me
										grow significantly as a frontend developer. I left this
										project with stronger technical instincts and a clearer
										understanding of how to build scalable interfaces in
										real-world product environments.
									</div>
								</div>

								<div>
									<h3 className="mb-3 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 dark:to-emerald-400 from-sky-500 dark:from-sky-500">
										What I'd Do Differently
									</h3>
									<div className="text-lg leading-relaxed">
										Due to the company's lack of a testing culture and resource
										constraints, we didn’t implement automated unit,
										integration, or end-to-end tests. This made manual testing
										more time-consuming and occasionally led to regressions
										during development If given the chance to revisit this
										project or in future projects I would advocate for:
										<div className="flex flex-col gap-2 py-1">
											<BulletPoint text="Introducing automated testing early in the development lifecycle" />
											<BulletPoint text="Establishing a testing strategy appropriate to the project size (unit tests for logic-heavy code, integration tests for critical flows, and light e2e )" />
											<BulletPoint text="Educating the team on how testing improves confidence, speeds up iteration, and reduces support overhead" />
										</div>
									</div>
								</div>

								<div>
									<h3 className="mb-3 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 dark:to-emerald-400 from-sky-500 dark:from-sky-500">
										What I'm Proudest Of
									</h3>
									<div className="text-lg leading-relaxed">
										This project tested me in a real-world where I had to
										deliver production-ready software with minimal guidance,
										legacy constraints, and full responsibility over multiple
										modules. Despite the pressure and challenges, I shipped
										high-quality features, learned to own my work end-to-end,
										and contributed to a product that truly matters to users.
										What makes me most proud is the personal growth: I went from
										dealing with impostor syndrome to feeling confident in my
										ability to solve complex problems, collaborate effectively,
										and make solid technical decisions. This experience
										solidified my identity as a capable, reliable developer and
										I'm ready for what’s next
									</div>
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
