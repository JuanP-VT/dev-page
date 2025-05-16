'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, Code, Terminal } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (textRef.current) {
              textRef.current.classList.add('animate-slide-up');
              textRef.current.classList.remove('opacity-0');
            }
            if (imageRef.current) {
              imageRef.current.classList.add('animate-slide-in');
              imageRef.current.classList.remove('opacity-0');
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="flex flex-col items-center gap-10 md:flex-row" ref={containerRef}>
      <div className="flex-1 opacity-0" ref={textRef}>
        <div className="mb-4 inline-block rounded-md border border-gray-200 bg-gray-100 px-3 py-1 font-mono text-sm text-teal-600 dark:border-slate-700 dark:bg-gray-800 dark:text-teal-400">
          <span className="text-gray-500 dark:text-gray-400">const</span>{' '}
          <span className="text-teal-600 dark:text-teal-400">role</span> ={' '}
          <span className="text-blue-600 dark:text-cyan-400">&quot;Full-Stack Developer&quot;</span>;
        </div>
        <h1 className="mb-4 font-mono text-4xl font-bold md:text-5xl">
          Hi, I&apos;m{' '}
          <span className="relative bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
            Your Name
            <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-teal-500 to-blue-600"></span>
          </span>
        </h1>

        <h1 className="mb-4 font-mono text-4xl font-bold md:text-5xl">
          Hi, I'm{' '}
          <span className="relative bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Your Name
            <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-teal-400 to-blue-500"></span>
          </span>
        </h1>

        <h2 className="mb-6 font-mono text-2xl text-gray-600 md:text-3xl">
          <span className="text-teal-600">function</span> <span className="text-blue-500">buildDigitalExperiences</span>
          () &#123; ... &#125;
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-gray-600">
          A self-taught developer who transitioned from industrial engineering. Bilingual (Spanish/English), based in
          Mexico, and passionate about creating beautiful, functional web experiences since January 2022.
        </p>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-md bg-gradient-to-r from-teal-500 to-blue-500 px-6 py-3 font-mono text-white transition-all hover:shadow-lg"
          >
            <Terminal className="h-4 w-4" />
            Contact Me
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#projects"
            className="rounded-md border-2 border-teal-500 px-6 py-3 font-mono text-teal-600 transition-all hover:bg-teal-50"
          >
            <Code className="mr-2 inline-block h-4 w-4" />
            View Projects
          </a>
        </div>
      </div>
      <div className="flex flex-1 justify-center opacity-0" ref={imageRef}>
        <div className="relative">
          <div className="flex h-64 w-64 rotate-3 items-center justify-center rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-6xl font-bold text-white shadow-[0_0_50px_rgba(20,184,166,0.3)] md:h-80 md:w-80">
            <div className="absolute inset-[3px] flex items-center justify-center rounded-lg bg-white">
              <Image
                src="/Dobberman.webp"
                width={200}
                height={200}
                alt="profile picture"
                className="h-full w-full rounded-lg object-cover object-[25%_15%]"
              />
            </div>
          </div>

          {/* Code snippets floating around */}
          <div className="animate-float absolute -top-10 -left-10 rotate-6 rounded-md border border-gray-200 bg-white p-3 shadow-md">
            <pre className="font-mono text-xs">
              <span className="text-pink-600">const</span> <span className="text-blue-600">developer</span> ={' '}
              <span className="text-teal-600">true</span>;
            </pre>
          </div>

          <div className="animate-float-delay absolute -right-5 -bottom-10 -rotate-6 rounded-md border border-gray-200 bg-white p-3 shadow-md">
            <pre className="font-mono text-xs">
              <span className="text-pink-600">import</span> &#123; <span className="text-blue-600">creativity</span>
              &#125; <span className="text-pink-600">from</span>{' '}
              <span className="text-teal-600">&apos;brain&apos;</span>;
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
