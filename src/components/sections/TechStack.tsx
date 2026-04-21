"use client";

import { useEffect, useRef, useCallback } from "react";
import { GitBranch } from "lucide-react";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiExpress,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaAws, FaDocker, FaFigma, FaNodeJs, FaReact } from "react-icons/fa";
import { useGlobalStore } from "@/store/global-store";
import { useRouter } from "next/navigation";
import { TbBrandAzure, TbBrandCSharp } from "react-icons/tb";
import { AiOutlineDotNet } from "react-icons/ai";
import { LuTestTube } from "react-icons/lu";

const technologies = {
  frontend: [
    { name: "JavaScript", icon: <IoLogoJavascript className="w-6 h-6 text-yellow-500 dark:text-yellow-300" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-blue-800 dark:text-blue-500" /> },
    { name: "React", icon: <FaReact className="w-6 h-6 text-sky-600 dark:text-sky-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="w-6 h-6 text-sky-500 dark:text-sky-300" /> },
    { name: "Jest", icon: <SiJest className="w-6 h-6 text-amber-800 dark:text-red-500" /> },
  ],
  backend: [
    { name: "C#", icon: <TbBrandCSharp className="w-6 h-6 text-purple-600 dark:text-purple-400" /> },
    { name: ".NET", icon: <AiOutlineDotNet className="w-6 h-6 text-blue-600 dark:text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="w-6 h-6 text-green-600 dark:text-green-400" /> },
    { name: "Express.js", icon: <SiExpress className="w-6 h-6" /> },
    { name: "NestJS", icon: <SiNestjs className="w-6 h-6 text-red-600 dark:text-red-400" /> },
    { name: "MySQL", icon: <SiMysql className="w-6 h-6 text-blue-600 dark:text-blue-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-600 dark:text-green-400" /> },
    { name: "XUnit", icon: <LuTestTube className="w-6 h-6 text-gray-600 dark:text-gray-400" /> },
  ],
  tools: [
    { name: "Git", icon: <GitBranch className="w-6 h-6 text-red-600 dark:text-red-500" /> },
    { name: "Docker", icon: <FaDocker className="w-6 h-6 text-sky-600 dark:text-sky-400" /> },
    { name: "AWS", icon: <FaAws className="w-6 h-6 text-yellow-600 dark:text-yellow-400" /> },
    { name: "Azure", icon: <TbBrandAzure className="w-6 h-6 text-blue-600 dark:text-blue-400" /> },
    { name: "Figma", icon: <FaFigma className="w-6 h-6 text-orange-600 dark:text-orange-400" /> },
  ],
};

const categoryTitles: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools",
};

export default function TechStack() {
  const router = useRouter();
  
  // Stable refs
  const itemsRef = useRef({
    frontend: [] as (HTMLDivElement | null)[],
    backend: [] as (HTMLDivElement | null)[],
    tools: [] as (HTMLDivElement | null)[],
  });

  const categoryRefs = useRef({
    frontend: null as HTMLDivElement | null,
    backend: null as HTMLDivElement | null,
    tools: null as HTMLDivElement | null,
  });

  const setSelectedTech = useGlobalStore.use.setSelectedTech();
  const setLevel = useGlobalStore.use.setLevel();
  const projects = useGlobalStore.use.projects();

  const animateItems = useCallback((category: keyof typeof technologies, baseDelay: number) => {
    const items = itemsRef.current[category];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item) {
        setTimeout(() => {
          item.classList.add("animate-tech-reveal");
          item.classList.remove("opacity-0");
        }, baseDelay + i * 100);
      }
    }
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const createCategoryObserver = (category: keyof typeof technologies) => {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.setAttribute("data-animated", "true");

              const catRef = categoryRefs.current[category];
              if (catRef) {
                catRef.classList.add("animate-slide-up");
                catRef.classList.remove("opacity-0");
              }

              animateItems(category, 0);
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
      );

      const ref = categoryRefs.current[category];
      if (ref) {
        observer.observe(ref);
        observers.push(observer);
      }
    };

    const categories = Object.keys(technologies) as Array<keyof typeof technologies>;
    for (const category of categories) {
      createCategoryObserver(category);
    }

    return () => {
      for (const observer of observers) {
        observer.disconnect();
      }
    };
  }, [animateItems]); // Now safe and stable

  const handleOnClick = (tech: string) => {
    const hasProfessionalProject = projects.some((project) => 
      project.level === "Professional" && 
      project.tags.some((tag) => tag.toLowerCase() === tech.toLowerCase())
    );

    if (hasProfessionalProject) {
      setSelectedTech(tech);
      setLevel("Professional");
      router.push("#projects");
      return;
    }

    const hasFreelanceProject = projects.some((project) => 
      project.level === "Freelance" && 
      project.tags.some((tag) => tag.toLowerCase() === tech.toLowerCase())
    );

    if (hasFreelanceProject) {
      setSelectedTech(tech);
      setLevel("Freelance");
      router.push("#projects");
    }
  };

  const renderTechCategory = (category: keyof typeof technologies) => {
    itemsRef.current[category] = []; // Reset per render

    return (
      <div key={category} className="mt-1">
        <div
          ref={(el) => { categoryRefs.current[category] = el; }}
          className="mb-8 text-center opacity-0"
        >
          <h3 className="font-mono text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-500">
            {categoryTitles[category]}
          </h3>
          <div className="mx-auto mt-1 w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full dark:from-teal-400 dark:to-blue-500" />
        </div>

        <div className="grid grid-cols-1 gap-6 mx-auto max-w-5xl cursor-pointer sm:grid-cols-2 lg:grid-cols-3">
          {technologies[category].map((tech, techIndex) => (
            <div
              key={tech.name}
              ref={(el) => {
                itemsRef.current[category][techIndex] = el;
              }}
              onClick={() => handleOnClick(tech.name)}
              onKeyDown={() => handleOnClick(tech.name)}
              className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 transition-all dark:bg-gray-800 dark:border-gray-700 hover:border-teal-400 backdrop-blur-sm group dark:hover:border-teal-500"
            >
              <div className="flex gap-3 items-center mb-3">
                <div className="p-2 bg-gray-100 rounded-md dark:bg-gray-700">
                  {tech.icon}
                </div>
                <span className="font-mono text-gray-800 dark:text-gray-200">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="tech" className="py-20">
      <div className="mb-16 text-center">
        <h2 className="mb-2 font-mono text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-500">
          Tech Stack
        </h2>
        <p className="mx-auto max-w-2xl font-mono text-gray-600 dark:text-gray-400">
          Technologies I've been working with to bring ideas to life
        </p>
      </div>
      {renderTechCategory("backend")}
      {renderTechCategory("frontend")}
      {renderTechCategory("tools")}
    </section>
  );
}