/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect, useRef, type RefObject } from "react";
import { Terminal as TerminalIcon } from "lucide-react";
import TypingAnimation from "../TypingAnimation";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { useTheme } from "next-themes";

export default function Terminal() {
  const [visible, setVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("terminal");
  const { theme = "dark" } = useTheme();

  useEffect(() => {
    setHasMounted(true);
    setTimeout(() => {
      setVisible(true);
    }, 100);
  }, []);

  if (!hasMounted) {
    return null;
  } // avoid rendering during SSR

  return (
    <div className="relative mt-8 mb-16">
      <div className="absolute -top-3 right-3 z-10">
        <button
          type="button"
          onClick={() => setVisible(!visible)}
          className="cursor-pointer rounded-md bg-gray-300 p-1 px-2 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
        >
          {visible ? t("close") : t("open")}
        </button>
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-900">
        <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-100 px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
          <TerminalIcon className="h-4 w-4 text-teal-400" />
          <span className="font-mono text-sm text-gray-700 dark:text-gray-300">
            terminal
          </span>
        </div>
        <div
          ref={containerRef}
          className={clsx(
            "overflow-y-auto font-mono text-sm transition-all duration-700",
            {
              "h-72 p-4 opacity-100": visible,
              "h-0 opacity-0": !visible,
              "scrollbar-dark": theme === "dark",
              "scrollbar-light": theme === "light",
            }
          )}
        >
          <CommandLine
            containerRef={containerRef}
            command={t("1-command")}
            output={t("1-output")}
            startsIn={0}
          />
          <CommandLine
            containerRef={containerRef}
            command={t("2-command")}
            output={t("2-output")}
            startsIn={1600}
          />
          <CommandLine
            containerRef={containerRef}
            command={t("3-command")}
            output={t("3-output")}
            startsIn={3600}
          />
          <CommandLine
            containerRef={containerRef}
            command={t("4-command")}
            output={t("4-output")}
            startsIn={6000}
          />
          <CommandLine
            containerRef={containerRef}
            command={t("5-command")}
            output={t("5-output")}
            startsIn={8000}
          />
          <CommandLine
            containerRef={containerRef}
            command={t("6-command")}
            output={t("6-output")}
            startsIn={10000}
          />
          <FinalCommandLine containerRef={containerRef} startsIn={12000} />
        </div>
      </div>
    </div>
  );
}

type CommandLineTypes = {
  command: string;
  output: string;
  startsIn: number; //miliseconds before the components displays
  containerRef?: RefObject<HTMLDivElement | null>;
};

// The component activates after x time
function CommandLine({
  command,
  output,
  startsIn,
  containerRef,
}: CommandLineTypes) {
  const [outputReady, setOutputReady] = useState(false);
  const [componentReady, setComponentReady] = useState(false);
  const typingTime = 1500; //miliseconds for the command animation to type before the output displays

  useEffect(() => {
    setTimeout(() => {
      setOutputReady(true);
      scrollBottom(containerRef);
    }, startsIn + typingTime);
  }, [startsIn, containerRef]);

  useEffect(() => {
    setTimeout(() => {
      setComponentReady(true);
      scrollBottom(containerRef);
    }, startsIn);
  }, [startsIn, containerRef]);

  if (!componentReady) return null;

  return (
    <div className="mb-3">
      <div className="flex items-center gap-2">
        <span className="font-medium text-teal-600 dark:text-teal-400">
          dev@portfolio:~$
        </span>
        <TypingAnimation
          strings={[command]}
          className="text-gray-800 dark:text-gray-300"
          startDelay={500}
        />
      </div>
      {outputReady && (
        <div className="mt-1 pl-6 text-gray-600 dark:text-gray-400">
          {output}
        </div>
      )}
    </div>
  );
}

function FinalCommandLine({
  startsIn,
  containerRef,
}: {
  startsIn: number;
  containerRef?: RefObject<HTMLDivElement | null>;
}) {
  const [componentReady, setComponentReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setComponentReady(true);
      scrollBottom(containerRef);
    }, startsIn);
  }, [startsIn, containerRef]);

  useEffect(() => {
    setTimeout(() => {
      scrollBottom(containerRef);
    }, startsIn + 100);
  }, [containerRef, startsIn]);

  if (!componentReady) return null;

  return (
    <div className="flex items-center gap-2">
      <span className="text-teal-600 dark:text-teal-400">dev@portfolio:~$</span>
      <span className="animate-caret-blink font-bold text-gray-300">_</span>
    </div>
  );
}

function scrollBottom(
  containerRef: RefObject<HTMLDivElement | null> | undefined
) {
  if (containerRef?.current) {
    const { scrollHeight, clientHeight } = containerRef.current;
    containerRef.current.scrollTo({
      top: scrollHeight - clientHeight,
      behavior: "smooth",
    });
  }
}
