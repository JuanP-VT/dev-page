"use client";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const METRICS = [
  {
    title: "Account Summary",
    old: "/img/projects/onsite2/metrics/old/account-summary.webp",
    new: "/img/projects/onsite2/metrics/new/account-summary.webp",
  },
  {
    title: "Boxes",
    old: "/img/projects/onsite2/metrics/old/boxes.webp",
    new: "/img/projects/onsite2/metrics/new/boxes.webp",
  },
  {
    title: "Customers",
    old: "/img/projects/onsite2/metrics/old/customers.webp",
    new: "/img/projects/onsite2/metrics/new/customers.webp",
  },
  {
    title: "Dashboard",
    old: "/img/projects/onsite2/metrics/old/dashboard.webp",
    new: "/img/projects/onsite2/metrics/new/dashboard.webp",
  },
  {
    title: "Login",
    old: "/img/projects/onsite2/metrics/old/login.webp",
    new: "/img/projects/onsite2/metrics/new/login.webp",
  },
  {
    title: "Mass Shipping",
    old: "/img/projects/onsite2/metrics/old/mass-doc.webp",
    new: "/img/projects/onsite2/metrics/new/mass-doc.webp",
  },
  {
    title: "Pickup Request",
    old: "/img/projects/onsite2/metrics/old/pickup-request.webp",
    new: "/img/projects/onsite2/metrics/new/pickup-request.webp",
  },
  {
    title: "Shipments",
    old: "/img/projects/onsite2/metrics/old/shipments.webp",
    new: "/img/projects/onsite2/metrics/new/shipments.webp",
  },
];

export default function Metrics() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % METRICS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + METRICS.length) % METRICS.length);
  };

  return (
    <div className="flex flex-col">
      <span>
        Migrating from jQuery to Next.js resulted in significant improvements in performance and user experience. The following Lighthouse metrics demonstrate the quantifiable impact of this technological upgrade.
      </span>
      <div className="relative flex flex-col pb-5">
        <Button
          aria-label="Previous"
          className="absolute top-1/2 z-10 transition-all bg-zinc-200 hover:bg-zinc-200/90 active:bg-zinc-200"
          onClick={handlePrev}
        >
          <FaAngleLeft className="text-zinc-500" />
        </Button>
        <Button
          aria-label="Next"
          className="absolute right-0 top-1/2 z-10 transition-all bg-zinc-200 hover:bg-zinc-200/70 active:bg-zinc-200"
          onClick={handleNext}
        >
          <FaAngleRight className="text-zinc-500" />
        </Button>
        <span className="flex p-2 text-2xl justify-center font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 dark:to-emerald-400 from-sky-500 dark:from-sky-500">
          {METRICS[currentIndex].title}
        </span>
        <div className="flex gap-4 h-fit">
          <span className="absolute dark:bg-zinc-700 bg-zinc-300 rounded-full px-2 py-1 text-sm z-10">
            Before
          </span>
          <span className="absolute right-0 dark:bg-zinc-700 bg-zinc-300 rounded-full px-2 py-1 text-sm z-10">
            After
          </span>
          <div className="w-1/2 rounded-lg dark:border-zinc-700 border-2 border-zinc-500 relative aspect-[2/1] min-h-[500px]">
            {METRICS.map((metric, index) => (
              <Image
                key={`${metric.title}-old`}
                src={metric.old}
                alt={`${metric.title} before`}
                fill
                className={clsx("absolute object-cover rounded-lg", {
                  "opacity-0": currentIndex !== index,
                  "opacity-100": currentIndex === index,
                })}
              />
            ))}
          </div>
          <div className="w-1/2 rounded-lg dark:border-zinc-700 border-2 border-zinc-500 relative aspect-[2/1] min-h-[500px]">
            {METRICS.map((metric, index) => (
              <Image
                key={`${metric.title}-new`}
                src={metric.new}
                alt={`${metric.title} after`}
                fill
                className={clsx("absolute object-cover rounded-lg", {
                  "opacity-0": currentIndex !== index,
                  "opacity-100": currentIndex === index,
                })}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}