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
                Enterprise Data Optimization: The MySQL to AWS S3 Migration
              </h1>
              <p className="mb-8 text-xl md:text-2xl text-zinc-600 dark:text-muted-foreground">
                Architecting a high-performance storage strategy to eliminate database bloat, reduce infrastructure costs by 30%, and ensure scalable file management.
              </p>

              {/* Project Meta */}
              <div className="flex flex-wrap gap-6 justify-center text-sm text-zinc-600 dark:text-muted-foreground">
                <div className="flex gap-2 items-center">
                  <Users className="w-4 h-4" />
                  <span>Software Engineer</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Calendar className="w-4 h-4" />
                  <span>December 2025</span>
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
                src="/img/projects/s3/s3-migration.webp"
                alt="S3 Migration Image"
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
                      <p>The core logistics platform was originally designed using a monolithic data approach, where all files including large shipping labels, customer documentation, and photos were encoded as Base64 strings and stored directly within MySQL columns. As the platform scaled, this led to exponential database growth, causing significant performance degradation during query execution and making database backups increasingly slow and risky.</p>
                      <br />
                      <p>To resolve this, I engineered a storage decoupling strategy to move all binary data to AWS S3. This involved creating a high-performance migration pipeline and a new service layer in .NET to handle secure object streaming via pre-signed URLs. The result was a leaner database, faster application response times, and a major reduction in cloud storage expenditure.</p>
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
                        text="Reduce database storage footprint by migrating binary data to an external Object Storage solution (AWS S3)."
                        className="bg-emerald-700 dark:bg-emerald-400"
                      />
                      <BulletPoint
                        text="Improve system scalability by decoupling file management from the relational database engine."
                        className="bg-emerald-700 dark:bg-emerald-400"
                      />
                      <BulletPoint
                        text="Implement a secure access layer using AWS S3 Pre-signed URLs to protect sensitive logistics documentation."
                        className="bg-emerald-700 dark:bg-emerald-400"
                      />
                      <BulletPoint
                        text="Eliminate the 33% storage overhead caused by Base64 encoding at the database level."
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
                        text="Safely migrating thousands of existing records without downtime or data corruption."
                        className="bg-blue-700 dark:bg-blue-400"
                      />
                      <BulletPoint
                        text="Ensuring the transition from DB-blobs to S3-references was completely transparent to the end-users."
                        className="bg-blue-700 dark:bg-blue-400"
                      />
                      <BulletPoint
                        text="Maintaining strict access control for private customer files once they left the internal network environment."
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
                        text="The primary bottleneck was the existing Base64 Bloat; since Base64 encoding increases file size by roughly one-third, the MySQL server was working 30% harder than necessary for every read/write operation involving files."
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
                          text="Designed a .NET migration utility to asynchronously extract, decode, and upload Base64 records to AWS S3."
                        />
                        <BulletPoint
                          text="Implemented a Repository Pattern adjustment to swap direct DB file-fetching for S3 object-key referencing."
                        />
                        <BulletPoint
                          text="Configured S3 Lifecycle Policies to automate data tiering, further optimizing costs for older, less-frequently accessed documents."
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
                          text="Developed a Stream-to-S3 pipeline that avoided loading entire files into server memory during the upload process, preventing OOM (Out of Memory) errors during large batch migrations."
                        />
                        <BulletPoint
                          text="Integrated a caching layer for S3 metadata to reduce the number of redundant API calls to AWS."
                        />
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-semibold case-gradient-text">
                    Security & Reliability
                  </h3>
                  <Card>
                    <CardContent>
                      <ul className="space-y-3">
                        <BulletPoint
                          text="Leveraged AWS IAM roles and policies to ensure Least Privilege access for the .NET service layer."
                        />
                        <BulletPoint
                          text="Implemented Pre-signed URLs with short expiration windows, ensuring that sensitive files are only accessible to authorized users for a specific duration."
                        />
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            <Separator className="my-16" />
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
                      30%
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-muted-foreground">
                      Cost Reduction
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mb-2 text-3xl font-bold text-teal-700 dark:text-teal-400">
                      33%
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-muted-foreground">
                      Storage Savings
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mb-2 text-3xl font-bold text-cyan-700 dark:text-cyan-400">
                      99.8%
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-muted-foreground">
                      Reliability
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6">
                <CardContent>
                  <div className="max-w-none prose prose-lg">
                    <p className="text-lg leading-relaxed">
                      Significantly lowered monthly infrastructure bills by moving data from expensive DB storage to cost-effective S3 buckets. Reclaimed massive amounts of disk space by storing files in their native binary format rather than encoded strings and Established a robust, distributed storage architecture that isolated file-serving from application logic, preventing the database from becoming a single point of failure.
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
                        This project taught me the critical importance of choosing the right tool for the job. While storing files in a database is easy for small prototypes, it quickly becomes a liability in an enterprise environment. I gained deep experience in AWS SDK integration, cloud security best practices, and the technical nuances of data encoding and streaming.
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
                        In hindsight, I would have implemented a Dual-Write phase earlier in the process. Initially, I focused on a batch migration, but writing to both the DB and S3 simultaneously for a few days before the final cutover would have provided an even higher level of data validation and peace of mind during the transition.
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
                        <p>I am proudest of the quantifiable impact this had on the business. It wasn't just a technical cleanup; it was a strategic move that saved the company money and made the platform noticeably faster for our customers. Successfully moving that much legacy data without a single byte being lost or corrupted was a major professional win for me.</p>
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