"use client";

import { useEffect, useRef } from "react";
import { Terminal, Cpu, GitBranch, Cloud } from "lucide-react";

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
  SiVercel,
} from "react-icons/si";
import {
  FaAws,
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

// Organized technologies by category
const technologies = {
  frontend: [
    {
      name: "JavaScript",
      icon: (
        <IoLogoJavascript className="w-6 h-6 text-yellow-500 dark:text-yellow-300" />
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <SiTypescript className="w-6 h-6 text-blue-800 dark:text-blue-500" />
      ),
    },
    {
      name: "HTML",
      icon: (
        <FaHtml5 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
      ),
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="w-6 h-6 text-blue-700 dark:text-blue-500" />,
    },
    {
      name: "React",
      icon: <FaReact className="h-6 w-6 text-sky-600 dark:text-sky-500" />,
    },
    { name: "Next.js", icon: <SiNextdotjs className="h-6 w-6 " /> },
    {
      name: "Tailwind",
      icon: (
        <SiTailwindcss className="h-6 w-6 text-sky-500 dark:text-sky-300" />
      ),
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: <FaNodeJs className="h-6 w-6 text-green-600 dark:text-green-400" />,
    },
    { name: "Express", icon: <SiExpress className="h-6 w-6" /> },
    {
      name: "NestJS",
      icon: <SiNestjs className="h-6 w-6 text-red-600 dark:text-red-400" />,
    },
    {
      name: "SQL",
      icon: <SiMysql className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      name: "NoSQL",
      icon: (
        <SiMongodb className="h-6 w-6 text-green-600 dark:text-green-400" />
      ),
    },
  ],
  tools: [
    {
      name: "Git",
      icon: <GitBranch className="h-6 w-6 text-red-600 dark:text-red-500" />,
    },
    {
      name: "Figma",
      icon: <FaFigma className="h-6 w-6 text-orange-500 " />,
    },
    {
      name: "Jest",
      icon: <SiJest className="h-6 w-6 text-amber-800 dark:text-red-500" />,
    },
    {
      name: "CI/CD",
      icon: <Cpu className="h-6 w-6 text-gray-600 dark:text-gray-300" />,
    },

    {
      name: "AWS",
      icon: <FaAws className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />,
    },
    {
      name: "Vercel",
      icon: <SiVercel className="h-6 w-6 " />,
    },
  ],
};

export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const categoryRefs = {
    frontend: useRef<HTMLDivElement>(null),
    backend: useRef<HTMLDivElement>(null),
    tools: useRef<HTMLDivElement>(null),
  };
  const itemsRef = {
    frontend: useRef<(HTMLDivElement | null)[]>([]),
    backend: useRef<(HTMLDivElement | null)[]>([]),
    tools: useRef<(HTMLDivElement | null)[]>([]),
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <We only want the function to be called once, when the component mounts>
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate category headings
          Object.values(categoryRefs).forEach((ref, index) => {
            if (ref.current) {
              setTimeout(() => {
                ref.current?.classList.add("animate-slide-up");
                ref.current?.classList.remove("opacity-0");
              }, index * 150);
            }
          });

          // Animate frontend items
          animateItems("frontend", 0);

          // Animate backend items with delay
          setTimeout(() => {
            animateItems("backend", technologies.frontend.length * 100);
          }, 300);

          // Animate tools items with delay
          setTimeout(() => {
            animateItems(
              "tools",
              (technologies.frontend.length + technologies.backend.length) * 100
            );
          }, 600);
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

  const animateItems = (
    category: keyof typeof technologies,
    baseDelay: number
  ) => {
    itemsRef[category].current.forEach((item, index) => {
      if (item) {
        setTimeout(
          () => {
            item.classList.add("animate-tech-reveal");
            item.classList.remove("opacity-0");
          },
          baseDelay + index * 100
        );
      }
    });
  };

  const renderTechCategory = (
    category: keyof typeof technologies,
    index: number
  ) => {
    // Reset refs array for this category
    itemsRef[category].current = [];

    return (
      <div key={category} className="mb-16">
        <div
          ref={categoryRefs[category]}
          className="opacity-0 mb-8 text-center"
        >
          <h3 className="text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-500">
            {capitalizeFirstLetter(category)}
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-500 mx-auto mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {technologies[category].map((tech, techIndex) => (
            <div
              key={tech.name}
              ref={(el) => {
                itemsRef[category].current[techIndex] = el;
              }}
              className="p-4 rounded-lg bg-white dark:bg-gray-800 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-teal-400 dark:hover:border-teal-500 transition-all opacity-0 group shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-md   ">
                  {tech.icon}
                </div>
                <span className="text-gray-800 dark:text-gray-200 font-mono">
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
    <section id="tech" className="py-28" ref={sectionRef}>
      <div className="text-center mb-16">
        <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-teal-600 dark:text-teal-400 rounded-md text-sm font-mono mb-4 border border-gray-200 dark:border-gray-700">
          <span className="text-gray-500 dark:text-gray-400">import</span>{" "}
          &#123;{" "}
          <span className="text-teal-600 dark:text-teal-400">skills</span>{" "}
          &#125; <span className="text-gray-500 dark:text-gray-400">from</span>{" "}
          <span className="text-blue-600 dark:text-blue-400">
            './tech-stack'
          </span>
          ;
        </div>
        <h2 className="text-3xl font-bold mb-2 font-mono text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-500">
          Tech Stack
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-mono">
          {" // Technologies I've been working with to bring ideas to life"}
        </p>
      </div>
      {/* Render each category */}
      {renderTechCategory("frontend", 0)}
      {renderTechCategory("backend", 1)}
      {renderTechCategory("tools", 2)}
    </section>
  );
}

function capitalizeFirstLetter(str: string) {
  const firstChar = str[0].toUpperCase();
  return `${firstChar}${str.substring(1, 500)}`;
}
