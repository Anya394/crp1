'use client';

import { useTheme } from "@/hooks/useTheme";
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2">

      {theme === 'dark' ? (
        <SunIcon className="w-5 h-5 text-yellow-300" />
      ) : (
        <MoonIcon className="w-5 h-5 text-gray-500" />
      )}
    </button>
  );
}