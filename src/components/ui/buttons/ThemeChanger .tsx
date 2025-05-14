'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '../button';
import clsx from 'clsx';
import { MdOutlineWbSunny } from 'react-icons/md';
import { LuMoonStar } from 'react-icons/lu';

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleThemeSwitch = () => {
    if (!theme) {
      return;
    }
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!hasMounted) {
    return null;
  } // avoid rendering during SSR

  return (
    <Button
      onClick={handleThemeSwitch}
      className={clsx(
        'flex gap-5 w-20 rounded-4xl relative bg-gradient-to-r from-red-200 via-orange-300 to-lime-300 dark:from-purple-800 dark:via-indigo-700 dark:to-green-600',
      )}
    >
      <LuMoonStar className="opacity-0 dark:opacity-100 transition-all duration-200 text-black/50" />
      <MdOutlineWbSunny className="dark:opacity-0 transition-all duration-200 text-white/90" />
      <span
        className={clsx(
          'w-7 h-7  rounded-full absolute transition-all left-1 duration-500 shadow-lg',
          {
            'translate-x-10 bg-white/50': theme === 'dark',
            'bg-white/50': theme === 'light',
          },
        )}
      ></span>
    </Button>
  );
};
