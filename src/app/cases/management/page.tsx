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
import Image from "next/image";
import Carrousel from "../components/Carrousel";

const imgList = [
  "/img/projects/management/carrousel/customer.webp",
  "/img/projects/management/carrousel/income.webp",
  "/img/projects/management/carrousel/map.webp",
  "/img/projects/management/carrousel/reviews.webp",
  "/img/projects/management/carrousel/shipments.webp",
  "/img/projects/management/carrousel/stats.webp",
];

export default function ManagementPage() {
  return (
    <div className="">
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="py-10 md:py-16">
          <div className="container px-4 mx-auto">
            <div className="mx-auto max-w-4xl text-center">
              <div className="justify-self-center py-1 px-3 mb-4 text-sm rounded-full border w-fit bg-zinc-200/60 dark:bg-zinc-800">
                Case Study
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl case-gradient-text">
                Management | Enhancements and Maintenance
              </h1>
              <p className="mb-8 text-xl md:text-2xl text-zinc-600 dark:text-muted-foreground">
                Improvements to our internal logistics platform, focused on new modules, feature upgrades, and bugfixes.
              </p>

              {/* Project Meta */}
              <div className="flex flex-wrap gap-6 justify-center text-sm text-zinc-600 dark:text-muted-foreground">
                <div className="flex gap-2 items-center">
                  <Users className="w-4 h-4" />
                  <span>Full-Stack Developer</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Calendar className="w-4 h-4" />
                  <span>July 2024 - Ongoing Maintenance</span>
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
                src="/img/projects/management/main.webp"
                alt="Onsite 2 Screenshot"
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
                  Overview
                </h2>
              </div>
              <Card>
                <CardContent>
                  <div className="max-w-none prose prose-lg">
                    <div className="mb-4 text-lg leading-relaxed">
                      <p>The Management app is an internal tool used by our administrative and IT support staff to oversee logistics operations. It provides real-time monitoring, detailed analytics, and comprehensive reports that support operational decision-making and incident response.</p>
                      <br />
                      <p>Originally built before my time at the company, the system required continuous improvements to meet evolving business needs. My role involved implementing new modules, fixing bugs, and enhancing existing features to ensure reliability, scalability, and a better internal user experience.</p>
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
                    <h3 className="mb-4 text-xl font-semibold text-emerald-700 dark:text-emerald-400">
                      Goals
                    </h3>
                    <ul className="space-y-3">
                      <BulletPoint
                        text="Enhance internal tooling to improve operational monitoring, analytics, and reporting capabilities."
                        className="bg-emerald-700 dark:bg-emerald-400"
                      />
                      <BulletPoint
                        text="Improve reliability and performance in existing modules while extending functionality with new features."
                        className="bg-emerald-700 dark:bg-emerald-400"
                      />
                      <BulletPoint
                        text="Optimize performance and reliability, particularly in data-heavy views and complex form interactions."
                        className="bg-emerald-700 dark:bg-emerald-400"
                      />
                      <BulletPoint
                        text="Streamline workflows for administrative and IT support staff through thoughtful UX improvements."
                        className="bg-emerald-700 dark:bg-emerald-400"
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
                        text="Working with a pre-existing codebase with a lot of abstractions."
                        className="bg-blue-700 dark:bg-blue-400"
                      />
                      <BulletPoint
                        text="Delivering improvements without disrupting daily operations."
                        className="bg-blue-700 dark:bg-blue-400"
                      />
                      <BulletPoint
                        text="Navigating unclear or evolving internal requirements from multiple departments."
                        className="bg-blue-700 dark:bg-blue-400"
                      />
                      <BulletPoint
                        text="Debugging and extending features no documentation."
                        className="bg-blue-700 dark:bg-blue-400"
                      />
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-semibold text-red-700 dark:text-red-400">
                      Major Problems
                    </h3>
                    <ul className="space-y-3">
                      <BulletPoint
                        text="Performance issues when loading some modules."
                        className="bg-red-700 dark:bg-red-400"
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
                        <Badge variant="outline">Javascript</Badge>
                        <Badge variant="outline">React 18</Badge>
                        <Badge variant="outline">Material UI</Badge>
                        <Badge variant="outline">Redux</Badge>
                        <Badge variant="outline">RTK Query</Badge>
                      </div>
                      <ul className="space-y-3">
                        <BulletPoint
                          text="Contributed to a component-based architecture using React and Tailwind CSS to support consistent UI patterns and scalable development."
                        />
                        <BulletPoint
                          text="Implemented new modules for internal analytics, monitoring dashboards, and report generation."
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
                          text="Implemented pagination and virtual scrolling in key internal views to improve performance when rendering large datasets."
                        />
                        <BulletPoint
                          text="Applied input debouncing to search and filter components, reducing unnecessary re-renders and API load."
                        />
                        <BulletPoint
                          text="Optimized component structure and data flow to minimize unnecessary renders and improve responsiveness in complex views."
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
                          text="Took ownership of multiple modules and enhancements, working end-to-end from implementation to deployment."
                        />
                        <BulletPoint
                          text="Collaborated closely with administrative and IT staff to clarify requirements and adjust features based on real-world usage."
                        />
                        <BulletPoint
                          text="Coordinated with backend developers to integrate with new and legacy APIs, implementing robust error handling and compensating for inconsistent or undocumented responses."
                        />
                        <BulletPoint
                          text="Contributed to ongoing codebase refactoring efforts, gradually improving maintainability while delivering continuous updates."
                        />
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            <Separator className="my-16" />

            {/* Before vs After */}
            <section className="flex flex-col mb-16 w-full">
              <h2 className="mb-2 text-3xl font-bold case-gradient-text">
                Showcase
              </h2>
              <span className="block text-xs font-light text-primary">
                Some of the Modules I Created
              </span>
              <div className="relative mt-2">
                <Carrousel imgList={imgList} />
              </div>
            </section>

            <Separator className="my-16" />

            {/* Impact & Results */}
            <section className="mb-16">
              <div className="flex gap-3 items-center mb-6">
                <TrendingUp className="w-6 h-6 text-sky-500" />
                <h2 className="text-3xl font-bold case-gradient-text">
                  Impact & Results
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mb-2 text-3xl font-bold text-emerald-700 dark:text-emerald-400">
                      100%
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-muted-foreground">
                      Complete module ownership
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mb-2 text-3xl font-bold text-teal-700 dark:text-teal-400">
                      100%
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-muted-foreground">
                      Task delivery
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mb-2 text-3xl font-bold text-cyan-700 dark:text-cyan-400">
                      99.8%
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-muted-foreground">
                      Application uptime
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6">
                <CardContent>
                  <div className="max-w-none prose prose-lg">
                    <p className="text-lg leading-relaxed">
                      While the core design and structure of the Management platform remained intact, my contributions focused on extending functionality, improving maintainability, and ensuring ongoing reliability. By building new modules, optimizing data-heavy components, and addressing technical inconsistencies, I helped sustain a critical internal tool without disrupting operations. The consistent delivery of updates and fixes has reinforced the platform’s stability and positioned it for smoother iteration in future development cycles.
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
                        The Management platform was the first project I worked on after joining the company  and it came with a steep learning curve. The codebase, inherited from a previous developer, was heavily abstracted and often difficult to navigate. While some of the patterns were technically impressive in isolation, they made understanding and extending the system unnecessarily complex. There was minimal documentation, very few inline comments, and a strong reliance on 'self-explanatory' code that often wasn't. Adapting to this environment required persistence, patience, and a shift in how I approach unfamiliar architectures. Over time, I learned how to:
                        <ul className="space-y-3 my-2">
                          <BulletPoint text="Navigate deeply abstracted logic across scattered files and unconventional custom hooks." />
                          <BulletPoint text="Reverse-engineer intent from unclear structures and limited documentation." />
                          <BulletPoint text="Deliver new features and improvements without introducing regressions in a fragile codebase." />
                          <BulletPoint text="Develop a clearer sense of when simplicity is more valuable than cleverness in code." />
                        </ul>
                        While the project didn't involve a full rebuild, it pushed me to grow in ways that are often overlooked adapting to existing systems, maintaining stability, and learning how to thrive in legacy code without full control over the architecture. It strengthened my ability to contribute meaningfully in real-world, imperfect scenarios, and taught me the value of writing maintainable, human-friendly code for those who come after.
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
                        While I delivered all tasks and features as requested, working on the Management platform highlighted some broader areas where the project  and my own approach  could evolve. The codebase I inherited was functional but overly complex, with deep abstractions and minimal documentation. In hindsight, I would have pushed earlier for:
                        <ul className="space-y-3 my-2">
                          <BulletPoint text="Gradually simplifying unnecessarily complex patterns to make the codebase more approachable for future developers." />
                          <BulletPoint text="Introducing clearer internal documentation or inline comments to reduce onboarding time and mental overhead." />
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
                        <p>This was my first project after joining the company, and it pushed me to get up to speed quickly in a codebase that was complex and unfamiliar. Adapting to someone else's architecture  especially one with deep abstractions and little documentation  wasn’t easy, but I took it step by step and focused on delivering what was needed.</p>
                        <br />
                        <p>What I’m most proud of is how I stayed consistent, learned to work through uncertainty, and gradually built confidence in my ability to contribute meaningfully. I may not have made major architectural changes, but I showed that I could adapt, stay reliable, and handle responsibility  qualities that I know will continue to serve me as I grow.</p>
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