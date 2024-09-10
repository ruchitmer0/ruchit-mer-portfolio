import React from 'react';
import Link from 'next/link';
import { Switch } from '@headlessui/react';
import { useDarkMode } from '../components/DarkModeContext'; 

type Props = {}

export default function Footer({}: Props) {
  const { isDarkMode, toggleDarkMode } = useDarkMode(); // Use the context

  return (
    <footer className="fixed bottom-0 w-full bg-transparent py-4 flex items-center justify-between px-6 z-50">
      {/* Logo in the center */}
      <div className="flex-1 flex justify-center items-center">
        <Link href="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-auto cursor-pointer"
          />
        </Link>
      </div>

      {/* Dark mode toggle switch on the right */}
      <div className="absolute right-8 flex items-center">
        <span className={`${isDarkMode ? 'text-white' : 'text-black'} hidden md:inline-flex mr-2`}>Light</span>
        <Switch
          checked={!isDarkMode}
          onChange={toggleDarkMode}
          className={`${isDarkMode ? 'bg-blue-500' : 'bg-gray-300'}
          relative inline-flex items-center h-6 rounded-full w-11 transition-colors ease-in-out duration-300`}
        >
          <span
            className={`${
              isDarkMode ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ease-in-out`}
          />
        </Switch>
        <span className={`${isDarkMode ? 'text-gray-500' : 'text-black'} hidden md:inline-flex ml-2`}>Dark</span>
      </div>
    </footer>
  );
}
