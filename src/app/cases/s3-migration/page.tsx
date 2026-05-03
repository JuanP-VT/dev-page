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
import { Card, CardContent } from "@/components/ui/card";
import BulletPoint from "../components/BulletPoint";
import Image from "next/image";
import { DIAGRAMS } from "@/lib/mermaid/diagrams/diagrams";
import { DiagramCard } from "@/components/composed/DiagramCard";

export default function S3MigrationPage() {

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
                Architecting a high-performance storage strategy to eliminate
                database bloat, reduce infrastructure costs by 30%, and ensure
                scalable file management.
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
                      <p>
                        The core logistics platform was originally designed
                        using a monolithic data approach, where all files
                        including large shipping labels, customer documentation,
                        and photos were encoded as Base64 strings and stored
                        directly within MySQL columns. As the platform scaled,
                        this led to exponential database growth, causing
                        significant performance degradation during query
                        execution and making database backups increasingly slow
                        and risky.
                      </p>
                      <br />
                      <p>
                        To resolve this, I engineered a storage decoupling
                        strategy to move all binary data to AWS S3. This
                        involved creating a high-performance migration pipeline
                        and a new service layer in .NET to handle secure object
                        streaming via pre-signed URLs. The result was a leaner
                        database, faster application response times, and a major
                        reduction in cloud storage expenditure.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Separator className="my-8" />
              <DiagramCard
                title="Legacy Upload Process (The Memory Bottleneck)"
                chart={DIAGRAMS.LEGACY_UPLOAD}
              />
              <DiagramCard
                title="Legacy Retrieval Process (The Bandwidth Hog)"
                chart={DIAGRAMS.LEGACY_RETRIEVAL}
              />
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
                        text="Reduce database storage footprint by offloading binary storage from MySQL to object storage (S3)"
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
                      <BulletPoint
                        text="Reduce server memory and CPU usage during file upload/download flows by eliminating full in-memory transformations."
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
                        text="Executing a safe, data-complete migration within a strictly scheduled maintenance window to prioritize data integrity."
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
                      <BulletPoint
                        text="Handling partial failures and ensuring consistency between database records and S3 objects (avoiding orphaned files or broken references).."
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
                        text="Base64 Storage Overhead (~33%), inflated storage size, larger indexes, slower I/O."
                        className="bg-red-700 dark:bg-red-400"
                      />
                      <BulletPoint
                        text="Critical Memory Bottleneck, Files are fully loaded into memory during both upload and retrieval, causing:High RAM usage, Increased GC pressure and Risk of OOM under concurrency."
                        className="bg-red-700 dark:bg-red-400"
                      />
                      <BulletPoint
                        text="Constant Base64 encode/decode cycles add unnecessary CPU load on every request."
                        className="bg-red-700 dark:bg-red-400"
                      />
                      <BulletPoint
                        text="Database Misuse (Core Design Flaw), MySQL is being used as a blob store instead of what it’s good at (relational data), leading to: Slower queries, Larger backups, Poor scaling characteristics."
                        className="bg-red-700 dark:bg-red-400"
                      />
                      <BulletPoint
                        text="Bandwidth Amplification, base64 increases payload size over the wire, meaning: Slower responses, Higher network costs, Worse performance for mobile clients."
                        className="bg-red-700 dark:bg-red-400"
                      />
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="my-16" />

            <Separator className="my-16" />

            {/* Solutions & Contributions */}
            <section className="mb-16">
              <div className="flex gap-3 items-center mb-6">
                <Code className="w-6 h-6 text-sky-500" />
                <h2 className="text-3xl font-bold case-gradient-text">
                  Solutions & My Contributions
                </h2>
              </div>

              <DiagramCard
                title="Modern Upload Process (Presigned URL + Event-Driven)"
                chart={DIAGRAMS.NEW_UPLOAD}
              />        
              <DiagramCard
                title="Modern Private Retrieval (Pre-signed URLs)"
                chart={DIAGRAMS.NEW_RETRIEVAL}
              />
              <DiagramCard
                title="Data Migration Process (Maintenance Window)"
                chart={DIAGRAMS.MIGRATION}
              />
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold case-gradient-text">
                    Technical Architecture
                  </h3>

                  <Card className="mt-3">
                    <CardContent>
                      <ul className="space-y-3">
                        <BulletPoint text="Developed a purpose-built .NET migration script that processed legacy Base64 data in controlled batches, decoding and streaming files directly to S3 in a diskless manner. The pipeline was designed to be idempotent and resumable, allowing safe retries without duplicating objects or corrupting database references in the event of partial failures. Batch sizing and throughput were tuned to meet strict maintenance window constraints while maintaining data integrity." />
                        <BulletPoint text="Refactored the data access layer to replace database-stored blobs with lightweight S3 object references. Introduced a resolution layer responsible for generating pre-signed URLs on demand, fully decoupling file retrieval from the relational database and eliminating binary payload handling within the application layer." />
                        <BulletPoint text="Configured S3 Lifecycle Policies to automate data tiering, further optimizing costs for older, less-frequently accessed documents." />
                        <BulletPoint text="Designed an event-driven validation pipeline using AWS SQS and a .NET Background Service to decouple upload confirmation from persistence logic. Instead of trusting client-side acknowledgements, the system reacts to native s3:ObjectCreated events, validates uploaded objects via ETag inspection, and asynchronously updates the database state. The SQS consumer was implemented as an idempotent handler to safely process duplicate messages under SQS’s at-least-once delivery model, ensuring consistency in an eventually consistent architecture." />
                        <BulletPoint text="Implemented compensating mechanisms to handle edge cases where uploads succeeded but downstream processing failed, preventing orphaned S3 objects and stale database records. This ensured long-term consistency between storage and metadata layers despite asynchronous processing boundaries." />
                        <BulletPoint text="Introduced structured logging and monitoring across the upload and processing pipeline to track system health, SQS message handling, and failure scenarios, enabling faster debugging and operational visibility in a distributed environment." />
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
                        <BulletPoint text="Completely offloaded file payload processing from the .NET monolith by introducing pre-signed POST policies. Clients upload files directly to S3 using multipart/form-data, removing the backend from the data path entirely. This eliminated CPU-intensive encoding/decoding operations and reduced memory usage by avoiding full in-memory buffering, effectively resolving OOM issues under concurrent load." />
                        <BulletPoint text="Leveraged S3 multipart uploads to support large files with parallelized chunk transfers, improving upload resilience and throughput while reducing the impact of network instability on client operations." />
                        <BulletPoint text="Integrated a caching layer for S3 metadata to reduce the number of redundant API calls to AWS." />
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
                        <BulletPoint text="Leveraged AWS IAM roles and policies to ensure Least Privilege access for the .NET service layer." />
                        <BulletPoint text="Implemented pre-signed POST policies for all client uploads, enforcing strict constraints such as file size limits, content-type validation, and object key scoping directly at the S3 level. All signed requests were short-lived and tightly scoped, minimizing exposure and mitigating replay risks while ensuring that invalid or malicious payloads were rejected before reaching internal systems." />
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

              <Card className="mt-6">
                <CardContent>
                  <div className="flex flex-col gap-3">
                      <BulletPoint text="Reduced storage costs by approximately 30% by eliminating Base64 encoding overhead and offloading binary data from MySQL to S3, leveraging cost-efficient storage tiers for infrequently accessed files." />
                      <BulletPoint text="Decreased database storage footprint by over 33% by storing files in their native binary format rather than encoded strings, resulting in faster query performance and smaller backup sizes." />
                      <BulletPoint text="Improved system reliability by removing the backend from the file transfer path and introducing asynchronous validation, eliminating failure modes related to memory pressure, request timeouts, and large payload handling." />
                      <BulletPoint text="Reduced application server memory usage during file operations by an estimated 80–90%, enabling the system to handle higher concurrency without degradation." />
                      <BulletPoint text="Established a scalable, decoupled architecture where file storage, validation, and metadata management operate independently, allowing horizontal scaling of background workers and preventing the database from becoming a system-wide bottleneck." />
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
                        This project taught me the critical importance of
                        choosing the right tool for the job. While storing files
                        in a database is easy for small prototypes, it quickly
                        becomes a liability in an enterprise environment. I
                        gained deep experience in AWS SDK integration, cloud
                        security best practices, and the technical nuances of
                        data encoding and streaming.
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
                        In hindsight, I would have implemented a Dual-Write
                        phase or utilized a temporary shadow table earlier in
                        the process. Writing to both the legacy DB columns and
                        the new S3 buckets simultaneously for a few days before
                        the final cutover would have provided live traffic
                        validation and allowed for seamless rollback
                        capabilities if anomalies were detected..
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
                        <p>
                          I am proudest of the quantifiable impact this had on
                          the business. It wasn't just a technical cleanup; it
                          was a strategic move that saved the company money and
                          made the platform noticeably faster for our customers.
                          Successfully moving that much legacy data without a
                          single byte being lost or corrupted was a major
                          professional win for me.
                        </p>
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
