"use client";

import { useEffect, useRef } from "react";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      { threshold: 0.1 }
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
      <div className="text-center mb-16">
        <div className="inline-block px-3 py-1 bg-gray-800 text-teal-400 rounded-md text-sm font-mono mb-4 border border-gray-700">
          <span className="text-pink-400">git</span>{" "}
          <span className="text-teal-400">log</span>{" "}
          <span className="text-cyan-400">--oneline</span>
        </div>
        <h2 className="text-3xl font-bold mb-2 font-mono text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
          Work Experience
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto font-mono">
          My professional journey from industrial engineering to professional
          web development
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative sm:border-l-4 sm:border-teal-500/30 sm:pl-10 pb-10">
          <div className="hidden sm:block absolute w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full -left-[13px] top-0 shadow-md" />

          <div
            ref={(el) => {
              timelineRefs.current[0] = el;
            }}
            className="mb-12 bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-teal-500/30 transition-all opacity-0 relative"
          >
            <div className="absolute hidden -left-15 top-6 w-10 h-10 bg-teal-500 text-gray-900 rounded-full sm:flex items-center justify-center shadow-md">
              <Briefcase className="h-5 w-5" />
            </div>
            <div className="flex items-center gap-2 text-gray-400 mb-2 font-mono text-sm">
              <Calendar className="h-4 w-4 text-teal-400" />
              <span className="font-medium">July 2024 - Present(1 year)</span>
              <MapPin className="h-4 w-4 text-teal-400 ml-2" />
              <span>Los Mochis, Sinaloa Mexico</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-200 font-mono">
              Front-End Developer - PKT1 Centro de envíos
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Full-time, in-office position focused on React development,
              implementing mockups from Figma, and occasionally building backend
              endpoints to support features.
            </p>
            <ul className="space-y-5">
              {[
                "Co-led the complete rebuild of 'Onsite 2,' a core logistics application, replacing a legacy jQuery system with a modern React/Next.js/TypeScript platform. Internal testing by management showed user task completion success improved significantly, from around 64% to over 90%, while the new modular codebase greatly enhanced maintainability and feature delivery.",
                "Designed and implemented a modular, component-based frontend using Next.js App Router, and Tailwind CSS. UI consistency improved significantly across modules, reducing duplicated styles and components by over 70% and speeding up development of new views.",
                "Optimized performance in data-heavy views with pagination, virtual scrolling, and input debouncing, reducing UI lag by approximately 60% and improving responsiveness when rendering 50+ items, resulting in up to 40% faster user interactions.",
                "Enhanced and maintained the internal 'Management' logistics platform by shipping new analytics and reporting features, reducing manual report generation time by ~50%. Stabilized legacy modules and consistently delivered goals with minimal regressions.",
                "Integrated with legacy backend APIs, implementing robust error handling and data consistency measures across both platforms.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="h-5 w-5 mt-0.5 flex-shrink-0 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs">
                    ✓
                  </span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden sm:block absolute w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full -left-[13px] top-[calc(100%-40px)] shadow-md" />
          <div
            ref={(el) => {
              timelineRefs.current[1] = el;
            }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-teal-500/30 transition-all opacity-0 relative"
          >
            <div className="absolute -left-15 top-6 w-10 h-10 bg-teal-500 text-gray-900 rounded-full flex items-center justify-center shadow-md">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div className="flex items-center gap-2 text-gray-400 mb-2 font-mono text-sm">
              <Calendar className="h-4 w-4 text-teal-400" />
              <span className="font-medium">
                January 2022 - July 2024(2.5 years)
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-200 font-mono">
              Freelance & Self-Taught Web Developer
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Focused on fullstack development while transitioning from an
              industrial engineering background. Delivered real-world projects
              for small businesses, combining hands-on learning with practical
              client needs.
            </p>
            <ul className="space-y-5">
              {[
                "Architected and built a complete fullstack e-commerce platform (Regina & Gael Studio) from scratch, integrating over 5 key features (user auth, PayPal, product management, secure file delivery) across 10 distinct routes/pages.",
                "Designed and launched a fully responsive marketing site (Okayhey Temazcal) with Contentful CMS, enabling non-technical content updates for 6+ content types (blogs, FAQs, galleries) and reducing manual content update time by an estimated 6-8 hours per month for the client",
                "Managed complete development lifecycle independently, from design and planning through implementation and deployment",
                "Applied self-taught expertise in TypeScript, serverless architecture, RESTful APIs, and modern frontend development using Tailwind CSS",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="h-5 w-5 mt-0.5 flex-shrink-0 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs">
                    ✓
                  </span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
