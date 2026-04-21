"use client";

import { useEffect, useRef } from "react";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Data mapping
  const experienceData = {
    job1: {
			id : 1,
      startDate: "2024",
      endDate: "Current",
      role: "Software Engineer",
      company: "PKT1 - Shipping logistics center.",
      location: "Los Mochis, Sinaloa, Mexico",
      bullets: [
        "Architectural Overhaul: Co-led the end-to-end reconstruction of Onsite 2, migrating a legacy jQuery monolith to a modern Next.js/TypeScript and .NET 10 architecture. Delivered a production-ready internal solution in 10 months, avoiding $20,000 USD in projected outsourcing costs.",
        "Performance Engineering: Achieved elite performance metrics (0.4s FCP, 1.4s LCP) by optimizing the full data delivery pipeline. Implemented SQL query optimization and indexing to reduce server response times, paired with frontend virtualization, pagination, and debouncing, resulting in a 60% reduction in unnecessary network traffic and database load.",
        "Infrastructure Optimization (S3 Migration): Engineered a high-efficiency storage migration, offloading legacy Base64 file records from MySQL to AWS S3. Eliminated 33% storage overhead, reducing database bloat and storage costs by 30%.",
        "AI Integration & Semantic Caching: Developed an AI-driven normalization pipeline to canonicalize disparate carrier error responses. Implemented a Heuristic Fingerprinting engine and MemoryCache/Redis layer, reducing AI token costs by 90% and providing instant error resolution for end-users.",
        "Backend Automation: Architected a fully digital client-onboarding system in .NET, replacing manual verification with automated multi-step validation. Decoupled onboarding from legacy services, significantly increasing platform reliability and throughput.",
        "Quality & Standards: Strengthened codebase stability by introducing a rigorous testing culture (xUnit, Jest, React Testing Library) and documenting architectural patterns to ensure long-term maintainability for the engineering team."
      ]
    },
    job2: {
      startDate: "2023",
      endDate: "2024",
      location: "Los Mochis, Sinaloa, Mexico",
      role: "Freelance Developer",
      description: "Engineered end-to-end web solutions for local businesses, directly leading to my recruitment at PKT1. Managed the entire development lifecycle independently, from initial architecture and UI/UX design to cloud deployment and maintenance.",
      bullets: [
        "E-Commerce Architecture (Regina & Gael Studio): Architected and launched a comprehensive full-stack e-commerce platform. Integrated secure user authentication, complex product management systems, and a PayPal API payment gateway, including an automated system for secure digital file delivery.",
        "Headless CMS Integration (Okayhey Temazcal): Designed and deployed a responsive marketing site integrated with Contentful CMS. This decoupling enabled non-technical stakeholders to manage dynamic content (blogs, galleries, FAQs) independently, eliminating the need for code-level updates for content changes.",
        "Technical Self-Sufficiency: Leveraged self-taught expertise in TypeScript, serverless architecture, and RESTful APIs to deliver production-ready applications, maintaining a high standard of code quality and mobile-first responsiveness."
      ]
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          timelineRefs.current.forEach((item, index) => {
            if (item) {
              setTimeout(() => {
                item.classList.add("animate-slide-right");
                item.classList.remove("opacity-0");
              }, index * 300);
            }
          });
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="py-20" ref={sectionRef}>
      <div className="mb-16 text-center">
        <div className="inline-block py-1 px-3 mb-4 font-mono text-sm text-teal-400 bg-gray-100 rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <span className="text-pink-700 dark:text-pink-400">git</span>{" "}
          <span className="text-teal-700 dark:text-teal-400">log</span>{" "}
          <span className="text-cyan-700 dark:text-cyan-400">--oneline</span>
        </div>
        <h2 className="mb-2 font-mono text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
          Work Experience
        </h2>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="relative pb-10 sm:pl-10 sm:border-l-4 sm:border-teal-500/30">
          <div className="hidden absolute top-0 w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full shadow-md sm:block -left-[13px]" />

          {/* Job 1 */}
          <div
            ref={(el) => { timelineRefs.current[0] = el; }}
            className="relative p-4 mb-12 rounded-lg border border-gray-300 opacity-0 transition-opacity sm:p-6 bg-gray-200/70 backdrop-blur-sm dark:bg-gray-800/50 dark:border-gray-700/50 hover:border-teal-500/30"
          >
            <div className="hidden absolute top-6 justify-center items-center w-10 h-10 text-gray-900 bg-teal-500 rounded-full shadow-md sm:flex left-[-62]">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="flex gap-2 items-center mb-2 font-mono text-sm text-gray-800 dark:text-gray-400">
              <Calendar className="w-4 h-4 text-teal-400" />
              <span className="text-sm font-medium">
                {experienceData.job1.startDate} - {experienceData.job1.endDate}
              </span>
              <MapPin className="ml-2 w-4 h-4 text-teal-400" />
              <span>{experienceData.job1.location}</span>
            </div>
            <h3 className="mb-3 font-mono text-2xl font-bold text-teal-500">
              {experienceData.job1.role}
            </h3>
            <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-400">
              {experienceData.job1.company}
            </p>
            <ul className="space-y-5">
              {experienceData.job1.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2 items-start">
                  <span className="flex flex-shrink-0 justify-center items-center mt-px w-5 h-5 text-xs text-teal-800 rounded-full dark:text-teal-400 bg-teal-500/70 dark:bg-teal-500/20">
                    ✓
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden sm:block absolute w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full -left-[13px] top-[calc(100%-40px)] shadow-md" />
          
          {/* Job 2 */}
          <div
            ref={(el) => { timelineRefs.current[1] = el; }}
            className="relative p-6 rounded-lg border border-gray-300 opacity-0 transition-opacity bg-gray-200/70 backdrop-blur-sm dark:bg-gray-800/50 dark:border-gray-700/50 hover:border-teal-500/30"
          >
            <div className="flex absolute top-6 justify-center items-center w-10 h-10 text-gray-900 bg-teal-500 rounded-full shadow-md left-[-62]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="flex gap-2 items-center mb-2 font-mono text-sm text-gray-800 dark:text-gray-400">
              <Calendar className="w-4 h-4 text-teal-400" />
              <span className="text-sm font-medium">
                {experienceData.job2.startDate} - {experienceData.job2.endDate}
              </span>
                 <MapPin className="ml-2 w-4 h-4 text-teal-400" />
              <span>{experienceData.job1.location}</span>
            </div>
            <h3 className="mb-3 font-mono text-2xl font-bold text-teal-500">
              {experienceData.job2.role}
            </h3>
            <p className="mb-4 leading-relaxed text-gray-800 dark:text-gray-400">
              {experienceData.job2.description}
            </p>
            <ul className="space-y-5">
              {experienceData.job2.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2 items-start">
                  <span className="flex flex-shrink-0 justify-center items-center mt-px w-5 h-5 text-xs text-teal-800 rounded-full dark:text-teal-400 bg-teal-500/70 dark:bg-teal-500/20">
                    ✓
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}