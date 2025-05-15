'use client';
import { useUiStore } from '@/store/ui/ui-store';
import React from 'react';
import { ThemeChanger } from '../buttons/ThemeChanger ';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';
import LanguageChanger from '../buttons/LanguageChanger';
import { FaChevronLeft } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export default function MobileDrawer() {
  const isOpen = useUiStore.use.isDrawerOpen();
  const setIsOpen = useUiStore.use.setIsDrawerOpen();

  const t = useTranslations('navbar');

  function NavBarOption({ id }: { id: string }) {
    return (
      <a
        href={id}
        className="group relative font-mono font-medium text-gray-600 transition-colors hover:text-teal-400 dark:text-gray-300"
      >
        {t(id)}
        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-teal-400 transition-all duration-300 group-hover:w-full" />
      </a>
    );
  }

  return (
    <div
      className={clsx(
        'absolute z-10 flex h-dvh w-[220px] flex-col justify-center gap-16 bg-gradient-to-br from-neutral-300 to-zinc-50 shadow-lg transition-all duration-300 lg:hidden dark:border-r dark:border-zinc-500/40 dark:bg-gradient-to-br dark:from-slate-800 dark:to-neutral-800',
        {
          'pointer-events-none -z-10 -translate-x-56': !isOpen,
        },
      )}
    >
      <div className="font-bol6 flex flex-col items-center gap-10">
        <div className="flex w-full items-center justify-end pr-5 pb-5">
          <FaChevronLeft className="cursor-pointer text-blue-500" onClick={() => setIsOpen(false)} size={22} />
        </div>
        <div className="font-bold">
          <span className="text-teal-400">jp</span>
          <span>@{t('portfolio')}</span>
          <span className="text-blue-500">:~$</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 font-mono">
        <NavBarOption id="about" />
        <NavBarOption id="tech" />
        <NavBarOption id="projects" />
        <NavBarOption id="experience" />
        <NavBarOption id="contact" />
      </div>
      <div className="flex flex-col items-center gap-5 pb-5">
        <span className="bg mb-5 h-[1px] w-full bg-zinc-500/40" />
        <ThemeChanger />
        <LanguageChanger />
      </div>
    </div>
  );
}
