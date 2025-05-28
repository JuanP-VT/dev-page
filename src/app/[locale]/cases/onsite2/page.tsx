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
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeImage from "../components/ThemeImage";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
										<h3 className="text-xl font-semibold mb-4 text-red-600">
											Major Problems
										</h3>
										<ul className="space-y-3">
											<li className="flex items-start gap-2">
												<div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
												<span>
													Inconsistent UI patterns across different modules
												</span>
											</li>
											<li className="flex items-start gap-2">
												<div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
												<span>
													Poor performance when rendering or filtering large
													datasets
												</span>
											</li>
											<li className="flex items-start gap-2">
												<div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
												<span>Broken or unusable mobile experience</span>
											</li>
											<li className="flex items-start gap-2">
												<div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
												<span>
													Unstructured legacy jQuery codebase with no
													documentation
												</span>
											</li>
										</ul>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-6">
										<h3 className="text-xl font-semibold mb-4 text-blue-600">
											Key Challenges
										</h3>
										<ul className="space-y-3">
											<li className="flex items-start gap-2">
												<div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
												<span>
													Rebuilding UI components under tight business
													constraints and with dependencies on unfinished
													backend features
												</span>
											</li>
											<li className="flex items-start gap-2">
												<div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
												<span>
													Managing complex forms and state without sacrificing
													UI performance
												</span>
											</li>
											<li className="flex items-start gap-2">
												<div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
												<span>
													Balancing speed of delivery with reusability and
													maintainability of components
												</span>
											</li>
											<li className="flex items-start gap-2">
												<div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
												<span>
													Ensuring smooth integration with legacy backend
													systems
												</span>
											</li>
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
										<li className="flex items-start gap-2">
											<div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
											<span>
												<strong>Designed component-based architecture</strong>{" "}
												using React and TypeScript for better maintainability
												and type safety
											</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
											<span>
												<strong>Implemented design system</strong> with HeroUi
												components, ensuring consistency across all modules
											</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
											<span>
												<strong>Built responsive layouts</strong> with Tailwind
												CSS, making the dashboard fully mobile-friendly
											</span>
										</li>
									</ul>
								</div>

								<div>
									<h3 className="text-xl font-semibold mb-4">
										Performance Optimizations
									</h3>
									<ul className="space-y-3">
										<li className="flex items-start gap-2">
											<div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
											<span>
												<strong>Implemented virtual scrolling</strong> for large
												data tables, reducing render time by 80%
											</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
											<span>
												<strong>Added intelligent caching</strong> with React
												Query, minimizing unnecessary API calls
											</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
											<span>
												<strong>Optimized bundle size</strong> through code
												splitting and lazy loading, reducing initial load by 60%
											</span>
										</li>
									</ul>
								</div>

								<div>
									<h3 className="text-xl font-semibold mb-4">
										Collaboration & Process
									</h3>
									<ul className="space-y-3">
										<li className="flex items-start gap-2">
											<div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
											<span>
												<strong>Worked closely with UX designer</strong> to
												translate wireframes into pixel-perfect, interactive
												components
											</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
											<span>
												<strong>Collaborated with backend team</strong> to
												design efficient API contracts and error handling
												strategies
											</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
											<span>
												<strong>Implemented comprehensive testing</strong> with
												Jest and React Testing Library, achieving 85% code
												coverage
											</span>
										</li>
									</ul>
								</div>
							</div>
						</section>

						<Separator className="my-16" />

						{/* Before vs After */}
						<section className="mb-16">
							<h2 className="text-3xl font-bold mb-8">Before vs. After</h2>

							<div className="grid md:grid-cols-2 gap-8">
								<Card>
									<CardContent className="p-6">
										<h3 className="text-xl font-semibold mb-4 text-red-600">
											Before
										</h3>
										<Image
											src="/placeholder.svg?height=200&width=300"
											alt="Old Dashboard Interface"
											width={300}
											height={200}
											className="w-full rounded border mb-4"
										/>
										<ul className="space-y-2 text-sm">
											<li>• Cluttered, inconsistent interface</li>
											<li>• 5+ second load times</li>
											<li>• No mobile support</li>
											<li>• Difficult navigation</li>
										</ul>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="p-6">
										<h3 className="text-xl font-semibold mb-4 text-green-600">
											After
										</h3>
										<Image
											src="/placeholder.svg?height=200&width=300"
											alt="New Dashboard Interface"
											width={300}
											height={200}
											className="w-full rounded border mb-4"
										/>
										<ul className="space-y-2 text-sm">
											<li>• Clean, modern design system</li>
											<li>• Sub-second load times</li>
											<li>• Fully responsive</li>
											<li>• Intuitive user experience</li>
										</ul>
									</CardContent>
								</Card>
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
