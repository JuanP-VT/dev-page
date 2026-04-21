import { Button } from "@/components/ui/button";
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
import VideoDemo from "./components/VideoDemo";

export default function ReginaGaelPage() {
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
                PC Hub | Functional eCommerce Prototype
              </h1>
              <p className="mb-8 text-xl md:text-2xl text-zinc-600 dark:text-muted-foreground">
                A self-initiated fullstack project designed to consolidate my learning and demonstrate real-world web application development skills.
              </p>

              {/* Project Meta */}
              <div className="flex flex-wrap gap-6 justify-center text-zinc-600 dark:text-muted-foreground">
                <div className="flex gap-2 items-center">
                  <Users className="w-4 h-4" />
                  <span>Software Engineer</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Calendar className="w-4 h-4" />
                  <span>May 2023 - Ago 2023</span>
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
                src="/img/projects/learning/pc-hub.webp"
                alt="PCHUB Screenshot"
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
                  Overview
                </h2>
              </div>
              <Card>
                <CardContent>
                  <div className="max-w-none prose prose-lg">
                    <div className="mb-4 text-lg leading-relaxed">
                      <p>PC Hub is a self-initiated eCommerce prototype I built to solidify my fullstack development skills after months of dedicated learning. The app includes user authentication, product browsing, cart management, and admin tools for product handling all developed from scratch using modern technologies.</p>
                      <br />
                      <p>The goal of this project was to simulate building a real-world product end-to-end, while applying what I had learned about frontend and backend architecture. I used TypeScript, React, Next.js (with serverless backend via API routes), MongoDB, and Tailwind CSS.This project marked a major milestone in my self-taught journey and played a key role in helping me land my first professional role as a developer.</p>
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
                        text="I had never worked with MongoDB, user authentication, or serverless APIs before every part required research and trial-and-error."
                        className="bg-red-700 dark:bg-red-400"
                      />
                      <BulletPoint
                        text="Styling a full UI with Tailwind CSS took time to master, especially with responsive behavior."
                        className="bg-red-700 dark:bg-red-400"
                      />
                      <BulletPoint
                        text="Creating a secure and flexible digital product management system (including product pages, reviews, filters, and admin editing) involved many edge cases and validation logic."
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
                      <BulletPoint text="Build a fullstack eCommerce app from scratch to consolidate and showcase my technical skills." className="bg-emerald-700 dark:bg-emerald-400"/>
                      <BulletPoint text="Learn and apply key concepts in user authentication, state management, server-side logic, and database operations." className="bg-emerald-700 dark:bg-emerald-400"/>
                      <BulletPoint text="Create a responsive and modern UI using Tailwind CSS and React." className="bg-emerald-700 dark:bg-emerald-400"/>
                      <BulletPoint text="Gain experience with deployment, backend integration, and real-world architecture practices." className="bg-emerald-700 dark:bg-emerald-400"/>
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
                        text="Learning to structure a fullstack application without formal guidance."
                        className="bg-blue-700 dark:bg-blue-400"
                      />
                      <BulletPoint
                        text="Balancing backend responsibilities (APIs, authentication, database schemas) with frontend UI complexity."
                        className="bg-blue-700 dark:bg-blue-400"
                      />
                      <BulletPoint
                        text="Designing for both user and admin flows within a single app structure."
                        className="bg-blue-700 dark:bg-blue-400"
                      />
                      <BulletPoint
                        text="Staying productive and motivated on a self-directed, solo project."
                        className="bg-blue-700 dark:bg-blue-400"
                      />
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="flex flex-col mb-16 w-full">
              <h2 className="mb-2 text-3xl font-bold case-gradient-text">
                Showcase
              </h2>
              <div className="mt-2">
                <VideoDemo />
              </div>
            </section>

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
                        <Badge variant="outline">TypeScript</Badge>
                        <Badge variant="outline">React 18</Badge>
                        <Badge variant="outline">Tailwind CSS</Badge>
                        <Badge variant="outline">MongoDB</Badge>
                        <Badge variant="outline">AWS S3</Badge>
                        <Badge variant="outline">PAYPAL SDK</Badge>
                      </div>
                      <ul className="space-y-3">
                        <BulletPoint
                          text="Designed the fullstack architecture using Next.js with serverless API routes, enabling seamless frontend-backend integration in a single codebase.."
                        />
                        <BulletPoint
                          text="Implemented MongoDB for flexible, document-based storage of products, users, orders, and reviews."
                        />
                        <BulletPoint
                          text="Built user authentication and authorization from scratch, including secure login with third-party providers (e.g., Google)."
                        />
                        <BulletPoint
                          text="Developed admin features such as product creation/editing, and dashboard views for managing inventory and user reviews.."
                        />
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-semibold case-gradient-text">
                    Performance & UX
                  </h3>
                  <Card>
                    <CardContent>
                      <ul className="space-y-3">
                        <BulletPoint
                          text="Applied pagination and filtering in product listings to keep views responsive, even with large datasets."
                        />
                        <BulletPoint
                          text="Used debounced search inputs to prevent excessive queries and improve user experience."
                        />
                        <BulletPoint
                          text="Leveraged Next.js image optimization and code-splitting to improve initial load time and runtime performance."
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
                          text="Worked completely solo  from planning and wireframing to backend design, frontend development, and deployment via Vercel."
                        />
                        <BulletPoint
                          text="Wrote reusable UI components with React and styled them using Tailwind CSS for consistency and speed."
                        />
                        <BulletPoint
                          text="Maintained clean git practices with organized commits and version control via GitHub."
                        />
                        <BulletPoint
                          text="Used Jest to write basic unit tests for critical logic, learning the foundations of testing in JavaScript"
                        />
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Impact & Results */}
            <section className="mb-16">
              <div className="flex gap-3 items-center mb-6">
                <TrendingUp className="w-6 h-6 text-sky-500" />
                <h2 className="text-3xl font-bold case-gradient-text">
                  Impact & Results
                </h2>
              </div>
              <div className="flex flex-col">
                <Card>
                  <CardContent className="flex flex-col gap-3">
                <ul className="space-y-3">
                      <BulletPoint text="Strengthened my backend knowledge by working hands-on with authentication, RESTful APIs, and database modeling." />
                    <BulletPoint text="Improved technical confidence, problem-solving, and self-reliance by building every part of the stack solo." />
                    <BulletPoint text="Used this project as a key portfolio piece that helped me land my first professional job as a developer." />
                </ul>
                  </CardContent>
                </Card>
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
                        PC Hub was my most ambitious self-study project. I gained hands-on experience building a fullstack app from scratch, deepening my understanding of authentication flows, API design, database integration, and scalable UI architecture. It also helped me improve my problem-solving and debugging skills across both frontend and backend codebases.
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
                        If I were to do this again, I’d start by scoping the project more clearly and focusing on core features first. I also would have implemented better error handling and test coverage from the beginning to simulate more realistic development practices.
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
                        <p>I'm proud of taking on a complex challenge with the goal of learning  and seeing it through. Building PC Hub pushed me to connect everything I had studied into a working application, and it gave me the confidence to pursue real-world opportunities. It wasn’t built for production, but it was built with care, curiosity, and commitment to growth.</p>
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