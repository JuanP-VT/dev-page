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
import BulletPoint from "../components/BulletPoint";
import Image from "next/image";

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
                AI-Powered Error Normalization: Building a Semantic Translation Layer
              </h1>
              <p className="mb-8 text-xl md:text-2xl text-zinc-600 dark:text-muted-foreground">
                Implementing a heuristic fingerprinting engine and Cache-Aside strategy to standardize disparate carrier API responses, reducing LLM costs and providing human-readable clarity for end-users.
              </p>

              {/* Project Meta */}
              <div className="flex flex-wrap gap-6 justify-center text-sm text-zinc-600 dark:text-muted-foreground">
                <div className="flex gap-2 items-center">
                  <Users className="w-4 h-4" />
                  <span>Full-Stack Developer</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Calendar className="w-4 h-4" />
                  <span>January 2026</span>
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
                src="/img/projects/error-translation/error-translation.png"
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
                      <p>In a multi-carrier logistics environment, error messages are notoriously inconsistent, ranging from cryptic technical stack traces to verbose JSON payloads. This lack of standardization made it impossible to provide clear feedback to customers or build automated retry logic. To solve this, I developed a sophisticated Error Identity service that acts as a middleware between raw carrier responses and the final user interface.</p>
                      <br />
                      <p>The system utilizes a custom Heuristic Noise Filter and Regex-based Normalizer to strip out transient data like timestamps, session IDs, and technical noise. By flattening JSON structures into unique canonical fingerprints (hashes), the system can identify recurring error patterns. This allows us to use a Semantic Cache where we only call an AI translation service for new error patterns drastically improving response times and minimizing operational costs</p>
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
                        text="Standardize thousands of disparate carrier error messages into a single, canonical set of human-readable translations."
                        className="bg-emerald-700 dark:bg-emerald-400"
                      />
                      <BulletPoint
                        text="Minimize API token expenditure by implementing a high-efficiency Cache-Aside strategy."
                        className="bg-emerald-700 dark:bg-emerald-400"
                      />
                      <BulletPoint
                        text="Automate the identification of Error Families using structural fingerprinting rather than simple string matching"
                        className="bg-emerald-700 dark:bg-emerald-400"
                      />
                      <BulletPoint
                        text="Improve developer productivity by filtering out technical stack traces and Base64 noise from production logs."
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
                        text="Managing errors that arrive in various formats (HTML, plain text, and nested JSON)."
                        className="bg-blue-700 dark:bg-blue-400"
                      />
                      <BulletPoint
                        text="Preventing 'Token Hemorrhage' where redundant calls for the same error type would inflate AI costs.."
                        className="bg-blue-700 dark:bg-blue-400"
                      />
                      <BulletPoint
                        text="Ensuring that normalization filters (like ID stripping) didn't accidentally remove critical diagnostic information."
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
                        text="The primary bottleneck was the Noise-to-Signal ratio. Carrier responses frequently included unique request IDs or timestamps in every message, which made traditional string-based caching 100% ineffective until the fingerprinting engine was implemented."
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
                      <ul className="space-y-3">
                        <BulletPoint
                          text="JSON Flattening & Leaf Extraction: Developed a utility to traverse complex JSON trees and extract key-value pairs, allowing for structural analysis regardless of nesting depth."
                        />
                        <BulletPoint
                          text="Canonical Fingerprinting: Built a Fingerprint Generator that sorts and hashes normalized error attributes to create a permanent identity for recurring issues."
                        />
                        <BulletPoint
                          text="Multi-Level Cache: Implemented a two-tier caching strategy using MemoryCache for instant lookups and a Database Persistent Layer for long-term pattern recognition."
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
                          text="Heuristic Noise Filtering: Created a 'Banned Keyword' and 'Technical Pattern' filter to automatically discard stack traces, memory addresses, and Base64 strings before processing."
                        />
                        <BulletPoint
                          text="Regex Normalization Hierarchy: Designed a specific order of operations for Regex filters (URLs -> Emails -> IDs) to prevent simpler patterns from 'breaking' more complex data structures."
                        />
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-semibold case-gradient-text">
                    Analytics & Monitoring
                  </h3>
                  <Card>
                    <CardContent>
                      <ul className="space-y-3">
                        <BulletPoint
                          text="Efficiency Analysis Tool: Built a diagnostic suite to calculate 'Cache Hit Potential,' proving that the system could eliminate up to 90% of redundant AI translation calls based on historical error logs."
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

              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mb-2 text-3xl font-bold text-emerald-700 dark:text-emerald-400">
                      90%
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-muted-foreground">
                      Reduction in AI Costs
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mb-2 text-3xl font-bold text-teal-700 dark:text-teal-400">
                      98%
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-muted-foreground">
                      Sub-millisecond Lookups
                    </div>
                  </CardContent>
                </Card>        
              </div>

              <Card className="mt-6">
                <CardContent>
                  <div className="max-w-none prose prose-lg">
                    <p className="text-lg leading-relaxed">
                      By fingerprinting structural patterns, the system avoids calling the LLM for any error family it has seen before. 98% of known errors are resolved via the Memory Cache, providing instant feedback to the frontend without waiting for external API calls. Successfully translated technical shipper jargon into actionable customer instructions (e.g., 'Invalid Postal Code' instead of 'Exception at Service.Address.Validator.Line 402').
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
                        This project deepened my understanding of data normalization and the 'Cache-Aside pattern. I learned that when dealing with AI, the most important work happens before the API call. Good data engineering (cleaning and fingerprinting) is what makes AI scalable and affordable in an enterprise environment.
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
                        I would consider moving the Fingerprinting logic to a shared library or a micro-service earlier. As the system grew, other internal tools started needing 'Error Identity' capabilities, and having this logic centralized from Day 1 would have made integration even smoother.
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
                        <p>I am proud of the Noise Filter logic. Seeing the system successfully identify that a 50-line stack trace and a 1-line error message were actually the 'same' underlying issue was extremely satisfying. It turned a chaotic log into a clean, manageable dashboard.</p>
                        <br />
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