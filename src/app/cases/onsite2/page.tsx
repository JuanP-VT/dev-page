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
                Onsite 2 | Full-Stack Overhaul: Next.js & .NET Core
              </h1>
              <p className="mb-8 text-xl md:text-2xl text-zinc-600 dark:text-muted-foreground">
                A complete architectural redesign of the main logistics application, from a legacy jQuery monolith to a modern React and .NET ecosystem.
              </p>

              {/* Project Meta */}
              <div className="flex flex-wrap gap-6 justify-center text-sm text-zinc-600 dark:text-muted-foreground">
                <div className="flex gap-2 items-center">
                  <Users className="w-4 h-4" />
                  <span>Full-Stack Software Engineer</span>
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
                      <p>The previous version, built with jQuery and legacy backend services, had evolved without a defined architecture, resulting in a fragile, hard-to-maintain, and poorly scalable codebase. The goal was to completely replace it over a 10-month migration period with a modern, robust, and user-centered application. The result: a significantly smoother experience, a faster backend data layer, and a tech foundation ready to scale.</p>
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
                        text="Severe backend performance bottlenecks when fetching, rendering, or filtering large datasets."
                        className="bg-red-700 dark:bg-red-400"
                      />
                      <BulletPoint
                        text="Broken or unusable mobile experience, making the app frustrating on phones."
                        className="bg-red-700 dark:bg-red-400"
                      />
                      <BulletPoint
                        text="Unstructured legacy monolith codebase with no documentation and heavy technical debt."
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
                        text="Improve maintainability by adopting a modern tech stack (Next.js & .NET Core) with reusable components."
                        className="bg-emerald-700"
                      />
                      <BulletPoint
                        text="Optimize end-to-end performance by restructuring database queries and reducing API payload sizes."
                        className="bg-emerald-700"
                      />
                      <BulletPoint
                        text="Ensure full mobile compatibility for a seamless experience across all devices."
                        className="bg-emerald-700"
                      />
                    </ul>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-semibold text-blue-700 dark:text-blue-400">
                      Key Challenges
                    </h3>
                    <ul className="grid gap-3 md:grid-cols-2">
                      <BulletPoint
                        text="Rebuilding complex UI components and state management under tight business constraints."
                        className="bg-blue-700 dark:bg-blue-400"
                      />
                      <BulletPoint
                        text="Decoupling and migrating legacy logic into scalable .NET Core APIs without disrupting ongoing operations."
                        className="bg-blue-700 dark:bg-blue-400"
                      />
                      <BulletPoint
                        text="Balancing fast delivery with long-term reusability and maintainability of the full-stack codebase."
                        className="bg-blue-700 dark:bg-blue-400"
                      />
                      <BulletPoint
                        text="Engineering resilient error handling to manage inconsistent data models during the transition phase."
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
                      <div className="flex flex-wrap gap-2 pb-4 pt-4">
                        <Badge variant="outline">.NET Core</Badge>
                        <Badge variant="outline">C#</Badge>
                        <Badge variant="outline">REST API</Badge>
                        <Badge variant="outline">React 18</Badge>
                        <Badge variant="outline">TypeScript</Badge>
                        <Badge variant="outline">Next.js 14</Badge>
                        <Badge variant="outline">Tailwind CSS</Badge>
                        <Badge variant="outline">Zustand</Badge>
                      </div>
                      <ul className="space-y-3">
                        <BulletPoint
                          text="Architected robust backend services in .NET Core, providing clean, structured endpoints to serve the new frontend client."
                        />
                        <BulletPoint
                          text="Built a modular, component-based UI architecture with React and TypeScript to improve scalability and long-term maintainability."
                        />
                        <BulletPoint
                          text="Rebuilt the client using Next.js App Router, leveraging server components and nested layouts for faster load times."
                        />
                        <BulletPoint
                          text="Applied Tailwind CSS and Hero UI to deliver a fully responsive, accessible interface across all devices."
                        />
                        <BulletPoint
                          text="Created reusable, business-specific UI components and backend validation logic used across key modules like quotations, shipments, and invoices."
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
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        <BulletPoint
                          text="Engineered paginated backend API services to efficiently query database logs, drastically reducing payload sizes for the client."
                        />
                        <BulletPoint
                          text="Implemented virtual scrolling on the frontend to seamlessly consume paginated APIs, eliminating UI freezes on heavy shipment and tracking views."
                        />
                        <BulletPoint
                          text="Used Next.js server components to cache key views and reduce redundant backend API calls, improving perceived speed."
                        />
                        <BulletPoint
                          text="Optimized user interaction by implementing a debounce on searches and filters, preventing excessive server requests and database load."
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
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        <BulletPoint
                          text="Co-led the full-stack rewrite as one of two developers, taking ownership of complete modules from database queries to final UI deployment."
                        />
                        <BulletPoint
                          text="Partnered closely with our project manager and coordinator to iterate on data flows and interfaces using client feedback."
                        />
                        <BulletPoint
                          text="Replaced undocumented legacy endpoints with modernized .NET Core APIs, establishing clear data contracts for future development."
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
                <CardContent className="pt-6">
                  <div className="max-w-none prose prose-lg">
                    <p className="text-lg leading-relaxed">
                      My role in the complete rebuild of Onsite 2 was key. With significant autonomy over both the API layer and the frontend client, I was able to define and execute the technical vision of the project, driving substantial improvements in data processing and UI responsiveness. Not only did I modernize and optimize the platform in just 10 months, but this full-stack approach also generated 95% positive feedback from the internal team.
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

              <div className="flex flex-col w-full mt-4">
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
                          text="Unpredictable loading times and heavy, unoptimized API responses."
                        />
                        <BulletPoint
                          className="bg-red-700 dark:bg-red-400"
                          text="Broken or unreliable mobile experience."
                        />
                        <BulletPoint
                          className="bg-red-700 dark:bg-red-400"
                          text="Clunky user flows tied to monolithic, inflexible backend logic."
                        />
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="mb-4 text-xl font-semibold text-emerald-700 dark:text-emerald-400">
                        After (Next.js & .NET Core)
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <BulletPoint
                          text="Clean, consistent design system with modern UI."
                          className="bg-emerald-700"
                        />
                        <BulletPoint
                          text="Faster load times powered by paginated APIs and server components."
                          className="bg-emerald-700"
                        />
                        <BulletPoint
                          text="Fully responsive across all mobile and desktop devices."
                          className="bg-emerald-700"
                        />
                        <BulletPoint
                          text="Clearer navigation and structured, predictable data handling."
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
                    <CardContent className="pt-6">
                      <div className="text-lg leading-relaxed">
                        Working on Onsite 2 pushed me to a new level of ownership and problem-solving. As one of only two developers on the project, I was responsible for independently delivering entire full-stack modules—from database architecture to final UI details—often without direct guidance. This experience sharpened my ability to:
                        <ul className="my-4 space-y-2">
                          <BulletPoint text="Balance backend maintainability with business-driven frontend deadlines." />
                          <BulletPoint text="Break down large, ambiguous legacy monoliths into achievable, modern API services." />
                          <BulletPoint text="Communicate effectively with stakeholders to clarify requirements." />
                        </ul>
                        While the autonomy was challenging, it helped me grow significantly as a full-stack engineer. I left this project with stronger technical instincts, more confidence in my architectural judgment, and a deeper understanding of how to build scalable systems in real-world product environments.
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold case-gradient-text">
                    What I'd Do Differently
                  </h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-lg leading-relaxed">
                        While I implemented unit tests for critical components and integration tests for core API workflows, the project faced limitations due to a company culture that didn't prioritize test automation, alongside significant time constraints. This meant a comprehensive automated testing strategy wasn't established from day one, leading to a higher reliance on manual testing. Moving forward, I would advocate for:
                        <ul className="my-4 space-y-2">
                          <BulletPoint text="Introducing automated CI/CD testing pipelines early in the development lifecycle." />
                          <BulletPoint text="Establishing a balanced testing strategy for both API endpoints and React components." />
                          <BulletPoint text="Educating the team on how testing improves confidence, speeds up iteration, and reduces support overhead." />
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
                    <CardContent className="pt-6">
                      <div className="text-lg leading-relaxed">
                        <p>This project tested me in a real-world environment where I had to deliver production-ready software with minimal guidance, legacy constraints, and full responsibility over multiple layers of the stack.</p>
                        <br />
                        <p>Despite the pressure, I shipped high-quality features, learned to own my work end-to-end, and contributed to a product that truly matters to users. What makes me most proud is the personal growth: I transitioned from dealing with impostor syndrome to feeling absolute confidence in my ability to engineer complex database queries, scale APIs, and build reactive UIs. This experience solidified my identity as a highly capable, reliable developer, and I'm ready for what’s next.</p>
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