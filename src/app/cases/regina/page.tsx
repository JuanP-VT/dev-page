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
                Regina & Gael Studio | Fullstack E-commerce Platform
              </h1>
              <p className="mb-8 text-xl md:text-2xl text-zinc-600 dark:text-muted-foreground">
                A custom-built e-commerce platform for selling digital products, designed from scratch to support secure purchases, product management, and digital file delivery.
              </p>

              {/* Project Meta */}
              <div className="flex flex-wrap gap-6 justify-center text-sm text-zinc-600 dark:text-muted-foreground">
                <div className="flex gap-2 items-center">
                  <Users className="w-4 h-4" />
                  <span>Software Engineer</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Calendar className="w-4 h-4" />
                  <span>February 2024 - May 2024</span>
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
                  Overview
                </h2>
              </div>
              <Card>
                <CardContent>
                  <div className="max-w-none prose prose-lg">
                    <div className="mb-4 text-lg leading-relaxed">
                      <p>Regina & Gael Studio was a small online store that sold printable artwork and crafting templates. The client needed a fully custom e-commerce solution to sell digital products with user accounts, product uploads, secure file delivery, and integrated payments.</p>
                      <br />
                      <p>As the sole developer, I designed and built the platform from scratch, covering everything from the frontend UI to the backend infrastructure. This included product and user management, PayPal payment processing, and secure digital file delivery using signed URLs via AWS. The goal was to give the client full control over their store while ensuring a simple and secure buying experience for customers.</p>
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
                        text="No pre-built CMS or e-commerce engine  every feature had to be implemented from scratch."
                        className="bg-red-700 dark:bg-red-400"
                      />
                      <BulletPoint
                        text="Handling payment flow and webhook edge cases (e.g., payment failure, retries) without introducing bugs"
                        className="bg-red-700 dark:bg-red-400"
                      />
                      <BulletPoint
                        text="Safely managing file access so only paying users could download their purchased products."
                        className="bg-red-700 dark:bg-red-400"
                      />
                      <BulletPoint
                        text="Learning curve with AWS setup and permissions for S3 buckets and secure file URLs."
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
                        text="Build a personalized e-commerce platform tailored to the client’s brand and product needs."
                        className="bg-emerald-700 dark:bg-emerald-400"
                      />
                      <BulletPoint
                        text="Eliminate reliance on third-party platforms like Etsy, allowing full control over design, sales, and product delivery."
                        className="bg-emerald-700 dark:bg-emerald-400"
                      />
                      <BulletPoint
                        text="Implement a backend system that enables non-technical users to manage products, orders, and digital downloads independently."
                        className="bg-emerald-700 dark:bg-emerald-400"
                      />
                      <BulletPoint
                        text="Ensure secure, seamless payment and delivery of digital files, with a user-friendly interface for both the client and customers."
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
                        text="Building the platform solo, without prior experience in payments, cloud storage, or digital file delivery."
                        className="bg-blue-700 dark:bg-blue-400"
                      />
                      <BulletPoint
                        text="Designing a secure system for distributing digital products while preventing unauthorized access or sharing."
                        className="bg-blue-700 dark:bg-blue-400"
                      />
                      <BulletPoint
                        text="Setting up and integrating AWS services (S3, signed URLs) with minimal prior exposure to cloud infrastructure."
                        className="bg-blue-700 dark:bg-blue-400"
                      />
                      <BulletPoint
                        text="Ensuring a smooth and trustworthy PayPal checkout experience without access to formal design or QA resources."
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
                        <Badge variant="outline">TypeScript</Badge>
                        <Badge variant="outline">React 18</Badge>
                        <Badge variant="outline">Tailwind CSS</Badge>
                        <Badge variant="outline">MongoDB</Badge>
                        <Badge variant="outline">AWS S3</Badge>
                        <Badge variant="outline">PAYPAL SDK</Badge>
                      </div>
                      <ul className="space-y-3">
                        <BulletPoint
                          text="Designed and built the fullstack architecture from scratch, including both client- and server-side logic."
                        />
                        <BulletPoint
                          text="Implemented secure digital product delivery using AWS S3 with signed URLs."
                        />
                        <BulletPoint
                          text="Integrated PayPal Checkout for payment processing, handling order verification and fulfillment on the backend."
                        />
                        <BulletPoint
                          text="Built a custom admin dashboard to manage product listings, track orders, and upload downloadable files."
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
                          text="Applied dynamic loading and server-side rendering with Next.js to improve initial load times."
                        />
                        <BulletPoint
                          text="Used form validation, error feedback, and clear user flows to simplify checkout and file access."
                        />
                        <BulletPoint
                          text="Designed responsive layouts for seamless experience across desktop and mobile devices."
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
                          text="Scoped and led the entire project independently, from wireframes to production deployment."
                        />
                        <BulletPoint
                          text="Worked closely with the client (my sister-in-law) to translate non-technical ideas into functional requirements."
                        />
                        <BulletPoint
                          text="Took initiative to learn AWS services and payment processing to deliver features beyond my original skillset."
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
                  Impact & Results
                </h2>
              </div>
              <div className="flex flex-col">
                <Card>
                  <CardContent className="flex flex-col gap-3">
                    <ul className="space-y-3">
                      <BulletPoint text="Delivered a fully functional, secure e-commerce platform from scratch  handling everything from product listings and PayPal checkout to digital delivery." />
                      <BulletPoint text="Gained firsthand experience with backend development, cloud services, and fullstack architecture in a real-world scenario." />
                      <BulletPoint text="Built confidence in my ability to scope, manage, and execute a complete product independently." />
                      <BulletPoint text=" This project played a key role in helping me land my first professional developer role at PKT1. 🚀" />
                      <BulletPoint text="Although the business was ultimately paused due to personal reasons, the project pushed my technical limits and taught me to own every part of the development process." />
                    </ul>
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
                        This project challenged me to step outside my frontend comfort zone and take full ownership of a production-grade system. I learned how to integrate third-party services like AWS and PayPal, design secure file delivery flows, and structure a backend to support real business logic  all while managing scope and expectations on my own.
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
                        If I could revisit this project, I’d start by aligning expectations more clearly  both in terms of scope and ongoing involvement. From a technical standpoint, I would decouple cloud dependencies like AWS S3 to make future deployment and maintenance easier. I also learned the importance of documenting the project and capturing working demos while it’s live, especially for portfolio use.
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
                        <p>I’m proud of having built and delivered a complete fullstack e-commerce app despite it being my first time working with many of the technologies involved. It pushed me to learn fast, solve real-world problems, and take full ownership of both frontend and backend decisions. This project was a key factor in helping me land my first professional role at PKT1, proving to myself that I could take on complex challenges and grow from them.</p>
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