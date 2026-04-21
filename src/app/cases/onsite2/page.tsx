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
import OnsiteComparison from "./components/OnsiteComparison";
import Metrics from "./components/Metrics";

export default function Page() {
  return (
    <div className="">
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="py-10 md:py-16">
          <div className="container px-4 mx-auto">
            <div className="mx-auto max-w-4xl text-center">
              <div className="justify-self-center py-1 px-3 mb-4 text-sm bg-teal-700 rounded-full border w-fit text-zinc-50">
                Case Study
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl case-gradient-text">
                Onsite 2 | From jQuery to React: Total Overhaul
              </h1>
              <p className="mb-8 text-xl md:text-2xl text-zinc-600 dark:text-muted-foreground">
                Redesign from scratch of the main logistics application for clients.
              </p>

              {/* Project Meta */}
              <div className="flex flex-wrap gap-6 justify-center text-sm text-zinc-600 dark:text-muted-foreground">
                <div className="flex gap-2 items-center">
                  <Users className="w-4 h-4" />
                  <span>Full-Stack Developer</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Calendar className="w-4 h-4" />
                  <span>Ago 2024 - Ongoing Development</span>
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
                imgSrc="/img/projects/onsite2/main2.webp"
                imgSrcDark="/img/projects/onsite2/main2-dark.webp"
              />
            </div>

            {/* Overview Section */}
            <section className="mb-16">
              <div className="flex gap-3 items-center mb-6">
                <GrOverview className="w-6 h-6 text-sky-500" />
                <h2 className="text-3xl font-bold case-gradient-text">
                  Overview
                </h2>
              </div>
              <Card>
                <CardContent>
                  <div className="max-w-none prose prose-lg">
                    <div className="mb-4 text-lg leading-relaxed">
                      <p>Onsite is the company's main logistics platform, used by business clients to manage the entire lifecycle of their shipments. From quoting and scheduling pickups to tracking packages, downloading invoices, and accessing historical reports, users can handle their entire logistics operation from a single interface.</p>
                      <br />
                      <p>The previous version, built with jQuery, had evolved without a defined architecture, resulting in a fragile, hard-to-maintain, and poorly scalable codebase. The goal was to completely replace it with a modern, robust, and user-centered application. The result: a significantly smoother experience, a faster system, and a tech foundation ready to scale.</p>
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
                  Goals & Challenges
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-semibold text-red-700 dark:text-red-400">
                      Major Problems
                    </h3>
                    <ul className="space-y-3">
                      <BulletPoint
                        text="Inconsistent UI patterns across different parts of the app, leading to confusion and poor UX."
                        className="bg-red-700 dark:bg-red-400"
                      />
                      <BulletPoint
                        text="Performance bottlenecks when rendering or filtering large datasets."
                        className="bg-red-700 dark:bg-red-400"
                      />
                      <BulletPoint
                        text="Broken or unusable mobile experience, making the app frustrating on phones."
                        className="bg-red-700 dark:bg-red-400"
                      />
                      <BulletPoint
                        text="Unstructured legacy codebase with no documentation."
                        className="bg-red-700 dark:bg-red-400"
                      />
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-semibold text-emerald-700 dark:text-emerald-400">
                      Goals
                    </h3>
                    <ul className="space-y-3">
                      <BulletPoint
                        text="Modernize the user experience by replacing the outdated interface with a clean, responsive UI."
                        className="bg-emerald-700"
                      />
                      <BulletPoint
                        text="Improve maintainability by adopting a modern tech stack with reusable, well-structured components."
                        className="bg-emerald-700"
                      />
                      <BulletPoint
                        text="Optimize performance and reliability, particularly in data-heavy views and complex form interactions."
                        className="bg-emerald-700"
                      />
                      <BulletPoint
                        text="Ensure mobile compatibility for a seamless experience across all devices."
                        className="bg-emerald-700"
                      />
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-semibold text-blue-700 dark:text-blue-400">
                      Key Challenges
                    </h3>
                    <ul className="space-y-3">
                      <BulletPoint
                        text="Rebuilding UI components under tight business constraints and incomplete backend support."
                        className="bg-blue-700 dark:bg-blue-400"
                      />
                      <BulletPoint
                        text="Managing complex forms and application state while maintaining UI responsiveness."
                        className="bg-blue-700 dark:bg-blue-400"
                      />
                      <BulletPoint
                        text="Balancing fast delivery with long-term reusability and maintainability of the codebase."
                        className="bg-blue-700 dark:bg-blue-400"
                      />
                      <BulletPoint
                        text="Integrating with legacy backend systems that introduced technical debt and limitations."
                        className="bg-blue-700 dark:bg-blue-400"
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
                  Solutions & My Contributions
                </h2>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold case-gradient-text">
                    Technical Architecture
                  </h3>

                  <Card className="mt-3">
                    <CardContent>
                      <div className="flex flex-wrap gap-2 pb-4">
                        <Badge variant="outline">React 18</Badge>
                        <Badge variant="outline">TypeScript</Badge>
                        <Badge variant="outline">Next.js 14</Badge>
                        <Badge variant="outline">Tailwind CSS</Badge>
                        <Badge variant="outline">Zustand</Badge>
                        <Badge variant="outline">Jest</Badge>
                        <Badge variant="outline">React Testing Library</Badge>
                      </div>
                      <ul className="space-y-3">
                        <BulletPoint
                          text="Built a modular, component-based architecture with React and TypeScript to improve scalability and long-term maintainability."
                        />
                        <BulletPoint
                          text="Rebuilt the UI using Next.js App Router, leveraging server components and nested layouts for faster load times and clearer structure."
                        />
                        <BulletPoint
                          text="Applied Tailwind CSS and Hero UI to deliver a fully responsive, accessible interface across all devices."
                        />
                        <BulletPoint
                          text="Created reusable, business-specific UI components used across key modules like quotations, shipments, and invoices."
                        />
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-semibold case-gradient-text">
                    Performance Optimizations
                  </h3>
                  <Card>
                    <CardContent>
                      <ul className="space-y-3">
                        <BulletPoint
                          text="Implemented pagination and virtual scrolling for data-heavy tables, drastically improving load performance on shipment and tracking views."
                        />
                        <BulletPoint
                          text="Used Next.js server components to cache key views and reduce redundant API calls, improving perceived speed."
                        />
                        <BulletPoint
                          text="Optimized user interaction by implementing a debounce on searches and filters, preventing excessive server requests."
                        />
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-semibold case-gradient-text">
                    Collaboration & Process
                  </h3>
                  <Card>
                    <CardContent>
                      <ul className="space-y-3">
                        <BulletPoint
                          text="Co-led the frontend rewrite as one of two developers, taking ownership of full modules from design to deployment"
                        />
                        <BulletPoint
                          text="Partnered closely with our coordinator (acting as UX) to iterate on flows and interfaces using client feedback."
                        />
                        <BulletPoint
                          text="Integrated with legacy backend APIs, building resilient error handling and working around inconsistent data and undocumented endpoints"
                        />
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Impact & Results */}
            <section className="mb-16">
              <div className="flex gap-3 items-center mb-2">
                <TrendingUp className="w-6 h-6 text-sky-500" />
                <h2 className="text-3xl font-bold case-gradient-text">
                  Impact & Results
                </h2>
              </div>
              <Metrics/>

              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mb-2 text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                      0.4s FCP
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-muted-foreground">
                      4.5 times better than Google's standard (1.8s)
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mb-2 text-3xl font-bold text-teal-700 dark:text-teal-400">
                      1.4s max LCP
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-muted-foreground">
                      Surpassing Google's 2.5-second standard by 44%
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mb-2 text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                      ~60%
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-muted-foreground">
                      Cost savings compared to outsourcing (approx. 20,000 USD)
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6">
                <CardContent>
                  <div className="max-w-none prose prose-lg">
                    <p className="text-lg leading-relaxed">
                      My role in the complete rebuild of Onsite 2 was key. With significant autonomy, I was able to define and execute the technical vision of the project, driving substantial improvements in performance and maintainability with proactive solutions. Not only did I modernize and optimize the platform in just 10 months, but this approach also generated 95% positive feedback from the internal team.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>            

            {/* Before vs After */}
            <section className="flex flex-col mb-16 w-full">
              <h2 className="mb-2 text-3xl font-bold case-gradient-text">
                Before vs. After
              </h2>
              <span className="block text-xs font-light text-primary">
                (Move the slider in the center of the image)
              </span>

              <div className="flex flex-col w-full">
                <OnsiteComparison />
                <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="mb-4 text-xl font-semibold text-red-700 dark:text-red-400">
                        Before
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <BulletPoint
                          className="bg-red-700 dark:bg-red-400"
                          text="Outdated interface that “felt like a 2004 government page”."
                        />
                        <BulletPoint
                          className="bg-red-700 dark:bg-red-400"
                          text="Unpredictable loading times."
                        />
                        <BulletPoint
                          className="bg-red-700 dark:bg-red-400"
                          text="Broken or unreliable mobile experience."
                        />
                        <BulletPoint
                          className="bg-red-700 dark:bg-red-400"
                          text="Clunky user flows with frequent UX issues."
                        />
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="mb-4 text-xl font-semibold text-emerald-700 dark:text-emerald-400">
                        After
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <BulletPoint
                          text="Clean, consistent design system with modern UI."
                          className="bg-emerald-700"
                        />
                        <BulletPoint
                          text="Faster load times and smoother interactions."
                          className="bg-emerald-700"
                        />
                        <BulletPoint
                          text="Responsive across devices."
                          className="bg-emerald-700"
                        />
                        <BulletPoint
                          text="Clearer navigation and more intuitive user experience."
                          className="bg-emerald-700"
                        />
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>    

            {/* Reflection */}
            <section className="mb-16">
              <div className="flex gap-3 items-center mb-6">
                <Lightbulb className="w-6 h-6 text-sky-500" />
                <h2 className="text-3xl font-bold case-gradient-text">
                  Reflection
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-xl font-semibold case-gradient-text">
                    What I Learned
                  </h3>
                  <Card>
                    <CardContent>
                      <div className="text-lg leading-relaxed">
                        Working on Onsite 2 pushed me to a new level of ownership and problem-solving. As one of only two developers on the project, I was responsible for independently delivering entire modules from architectural decisions to final UI details often without direct guidance. This experience sharpened my ability to:
                        <ul className="my-2 space-y-2">
                          <BulletPoint text="Balance maintainability with business-driven deadlines." />
                          <BulletPoint text="Break down large, ambiguous tasks into achievable steps." />
                          <BulletPoint text="Communicate effectively with stakeholders to clarify requirements." />
                        </ul>
                        While the autonomy was challenging, it helped me grow significantly as a developer. I left this project with stronger technical instincts, more confidence in my judgment, and a deeper understanding of how to build scalable interfaces in real-world product environments.
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold case-gradient-text">
                    What I'd Do Differently
                  </h3>
                  <Card>
                    <CardContent>
                      <div className="text-lg leading-relaxed">
                        While I implemented unit tests for critical components and integration tests for core workflows, the project faced limitations due to a company culture that didn't prioritize test automation, alongside significant time and resource constraints. This meant a comprehensive automated testing strategy, including extensive end-to-end coverage, wasn't established, leading to a higher reliance on manual testing and occasional regressions, i would advocate for:
                        <ul className="my-2 space-y-2">
                          <BulletPoint text="Introducing automated testing early in the development lifecycle." />
                          <BulletPoint text="Establishing a testing strategy appropriate to the project size." />
                          <BulletPoint text="Educating the team on how testing improves confidence, speeds up iteration, and reduces support ." />
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold case-gradient-text">
                    What I'm Proudest Of
                  </h3>
                  <Card>
                    <CardContent>
                      <div className="text-lg leading-relaxed">
                        <p>This project tested me in a real-world where I had to deliver production-ready software with minimal guidance, legacy constraints, and full responsibility over multiple modules.</p>
                        <br />
                        <p>Despite the pressure and challenges, I shipped high-quality features, learned to own my work end-to-end, and contributed to a product that truly matters to users. What makes me most proud is the personal growth: I went from dealing with impostor syndrome to feeling confident in my ability to solve complex problems, collaborate effectively, and make solid technical decisions. This experience solidified my identity as a capable, reliable developer and I'm ready for what’s next.</p>
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