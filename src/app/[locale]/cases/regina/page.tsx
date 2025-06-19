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
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BulletPoint from "../components/BulletPoint";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ReginaGaelPage() {
	const t = useTranslations("cases.regina");
	return (
		<div className="">
			<div className="flex flex-col">
				{/* Hero Section */}
				<section className="py-10 md:py-16">
					<div className="container px-4 mx-auto">
						<div className="mx-auto max-w-4xl text-center">
							<div className="justify-self-center py-1 px-3 mb-4 text-sm rounded-full border w-fit bg-zinc-200/60 dark:bg-zinc-800">
								{t("common.case-study")}
							</div>
							<h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl case-gradient-text">
								{t("title")}
							</h1>
							<p className="mb-8 text-xl md:text-2xl text-muted-foreground">
								{t("sub-title")}
							</p>

							{/* Project Meta */}
							<div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
								<div className="flex gap-2 items-center">
									<Users className="w-4 h-4" />
									<span>{t("role")}</span>
								</div>
								<div className="flex gap-2 items-center">
									<Calendar className="w-4 h-4" />
									<span>{t("duration")}</span>
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
							<Image
								src="/img/projects/regina/main.webp"
								alt="Regina&GaelStudio Screenshot"
								quality={100}
								width={800}
								height={400}
								className="w-full rounded-lg border shadow-lg"
							/>
						</div>

						{/* Overview Section */}
						<section className="mb-16">
							<div className="flex gap-3 items-center mb-6">
								<GrOverview className="w-6 h-6 text-sky-500" />
								<h2 className="text-3xl font-bold case-gradient-text">
									{t("overview-title")}
								</h2>
							</div>
							<Card>
								<CardContent>
									<div className="max-w-none prose prose-lg">
										<div className="mb-4 text-lg leading-relaxed">
											<p>{t("overview-description")}</p>
											<br />
											<p>{t("overview-description2")}</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</section>

						{/* Goals & Challenges */}
						<section className="mb-16">
							<div className="flex gap-3 items-center mb-6">
								<Target className="w-6 h-6 text-sky-500" />
								<h2 className="text-3xl font-bold case-gradient-text">
									{t("g&c.title")}
								</h2>
							</div>

							<div className="grid gap-8 md:grid-cols-2">
								<Card>
									<CardContent className="p-6">
										<h3 className="mb-4 text-xl font-semibold text-red-600 dark:text-red-500">
											{t("g&c.problems.title")}
										</h3>
										<ul className="space-y-3">
											<BulletPoint
												text={t("g&c.problems.1")}
												className="bg-red-500"
											/>
											<BulletPoint
												text={t("g&c.problems.2")}
												className="bg-red-500"
											/>
											<BulletPoint
												text={t("g&c.problems.3")}
												className="bg-red-500"
											/>
											<BulletPoint
												text={t("g&c.problems.4")}
												className="bg-red-500"
											/>
										</ul>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="p-6">
										<h3 className="mb-4 text-xl font-semibold text-emerald-600 dark:text-emerald-500">
											{t("g&c.goals.title")}
										</h3>
										<ul className="space-y-3">
											<BulletPoint text={t("g&c.goals.1")} />
											<BulletPoint text={t("g&c.goals.2")} />
											<BulletPoint text={t("g&c.goals.3")} />
											<BulletPoint text={t("g&c.goals.4")} />
										</ul>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="p-6">
										<h3 className="mb-4 text-xl font-semibold text-blue-600 dark:text-blue-500">
											{t("g&c.challenges.title")}
										</h3>
										<ul className="space-y-3">
											<BulletPoint
												text={t("g&c.challenges.1")}
												className="bg-blue-500"
											/>
											<BulletPoint
												text={t("g&c.challenges.2")}
												className="bg-blue-500"
											/>
											<BulletPoint
												text={t("g&c.challenges.3")}
												className="bg-blue-500"
											/>
											<BulletPoint
												text={t("g&c.challenges.4")}
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
							<div className="flex gap-3 items-center mb-6">
								<Code className="w-6 h-6 text-sky-500" />
								<h2 className="text-3xl font-bold case-gradient-text">
									{t("solutions&contribution.title")}
								</h2>
							</div>

							<div className="space-y-8">
								<div>
									<h3 className="text-xl font-semibold case-gradient-text">
										{t("solutions&contribution.technical.title")}
									</h3>

									<Card className="mt-3">
										<CardContent>
											<div className="flex flex-wrap gap-2 pb-4">
												<Badge variant="outline">TypeScript</Badge>
												<Badge variant="outline">React 18</Badge>
												<Badge variant="outline">Tailwind CSS</Badge>
												<Badge variant="outline">MongoDB</Badge>
												<Badge variant="outline">AWS S3</Badge>
												<Badge variant="outline">PAYPAL SDK</Badge>
											</div>
											<ul className="space-y-3">
												<BulletPoint
													text={t("solutions&contribution.technical.1")}
												/>
												<BulletPoint
													text={t("solutions&contribution.technical.2")}
												/>
												<BulletPoint
													text={t("solutions&contribution.technical.3")}
												/>
												<BulletPoint
													text={t("solutions&contribution.technical.4")}
												/>
											</ul>
										</CardContent>
									</Card>
								</div>

								<div>
									<h3 className="mb-4 text-xl font-semibold case-gradient-text">
										{t("solutions&contribution.performance.title")}
									</h3>
									<Card>
										<CardContent>
											<ul className="space-y-3">
												<BulletPoint
													text={t("solutions&contribution.performance.1")}
												/>
												<BulletPoint
													text={t("solutions&contribution.performance.2")}
												/>
												<BulletPoint
													text={t("solutions&contribution.performance.3")}
												/>
											</ul>
										</CardContent>
									</Card>
								</div>

								<div>
									<h3 className="mb-4 text-xl font-semibold case-gradient-text">
										{t("solutions&contribution.collaboration.title")}
									</h3>
									<Card>
										<CardContent>
											<ul className="space-y-3">
												<BulletPoint
													text={t("solutions&contribution.collaboration.1")}
												/>
												<BulletPoint
													text={t("solutions&contribution.collaboration.2")}
												/>
												<BulletPoint
													text={t("solutions&contribution.collaboration.3")}
												/>
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
								<h2 className="text-3xl font-bold case-gradient-text">
									{t("i&r.title")}
								</h2>
							</div>
							<div className="flex flex-col">
								<Card>
									<CardContent className="flex flex-col gap-3">
										<BulletPoint text={t("i&r.1")} />
										<BulletPoint text={t("i&r.2")} />
										<BulletPoint text={t("i&r.3")} />
										<BulletPoint text={t("i&r.4")} />
										<BulletPoint text={t("i&r.5")} />
									</CardContent>
								</Card>
							</div>
						</section>

						<Separator className="my-16" />

						{/* Reflection */}
						<section className="mb-16">
							<div className="flex gap-3 items-center mb-6">
								<Lightbulb className="w-6 h-6 text-sky-500" />
								<h2 className="text-3xl font-bold case-gradient-text">
									{t("reflection.title")}
								</h2>
							</div>

							<div className="space-y-6">
								<div>
									<h3 className="mb-3 text-xl font-semibold case-gradient-text">
										{t("reflection.learned.title")}
									</h3>
									<Card>
										<CardContent>
											<div className="text-lg leading-relaxed">
												{t("reflection.learned.description")}
											</div>
										</CardContent>
									</Card>
								</div>

								<div>
									<h3 className="mb-3 text-xl font-semibold case-gradient-text">
										{t("reflection.dif.title")}
									</h3>
									<Card>
										<CardContent>
											<div className="text-lg leading-relaxed">
												{t("reflection.dif.description")}
											</div>
										</CardContent>
									</Card>
								</div>

								<div>
									<h3 className="mb-3 text-xl font-semibold case-gradient-text">
										{t("reflection.proud.title")}
									</h3>
									<Card>
										<CardContent>
											<div className="text-lg leading-relaxed">
												<p>{t("reflection.proud.description")}</p>
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
									className="bg-gradient-to-r to-emerald-400 dark:to-emerald-400 text-zinc-100 from-sky-500 dark:from-sky-500"
									href="/#projects"
								>
									{t("common.view")}
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
