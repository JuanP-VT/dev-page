'use client';
import { useTranslations } from 'next-intl';
import { Button } from '../ui/button';
import { FaBars } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import LanguageChanger from './buttons/LanguageChanger';
import { ThemeChanger } from './buttons/ThemeChanger ';
import { useUiStore } from '@/store/ui/ui-store';

import MobileDrawer from './dialogs/MobileDrawer';

export default function NavBar() {
  const t = useTranslations('navbar');
  const setIsDrawerOpen = useUiStore.use.setIsDrawerOpen();
  const isDrawerOpen = useUiStore.use.isDrawerOpen();

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
    <>
      <MobileDrawer />
      <nav className="fixed z-50 flex h-16 w-full justify-between bg-white px-6 py-4 text-gray-800 shadow-sm sm:rounded-xl dark:border dark:border-gray-700/50 dark:bg-gray-800 dark:text-gray-200">
        <div className="flex text-lg font-bold">
          <span className="text-teal-400">jp</span>
          <span>@{t('portfolio')}</span>
          <span className="text-sky-500">:~$</span>
        </div>
        <div className="hidden gap-6 lg:flex">
          <div className="flex items-center gap-5 font-mono text-gray-300">
            <NavBarOption id="about" />
            <NavBarOption id="tech" />
            <NavBarOption id="projects" />
            <NavBarOption id="experience" />
            <NavBarOption id="contact" />
          </div>
          <div className="flex gap-6">
            <span className="h-full w-[1px] rounded-lg bg-zinc-300/60" />
            <LanguageChanger />
            <ThemeChanger />
          </div>
        </div>
        <Button
          className="group transition-opacity duration-300 lg:hidden"
          variant="outline"
          size="sm"
          onClick={() => {
            setIsDrawerOpen(!isDrawerOpen);
          }}
        >
          {isDrawerOpen ? (
            <RxCross2 className="text-gray-600 transition-all duration-300 group-hover:text-teal-400 group-active:text-teal-400 dark:text-gray-300 dark:group-hover:text-teal-400 dark:group-active:text-teal-400" />
          ) : (
            <FaBars className="text-gray-600 transition-all duration-300 group-hover:text-teal-400 group-active:text-teal-400 dark:text-gray-300 dark:group-hover:text-teal-400 dark:group-active:text-teal-400" />
          )}
        </Button>
      </nav>
    </>
  );
}
