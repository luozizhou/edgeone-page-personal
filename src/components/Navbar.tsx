'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useBilingual } from '@/hooks/useBilingual';
import { globalConfig } from '@/config/global';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, mounted: bilingualMounted } = useBilingual();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <header id="header" className="absolute top-0 z-50 w-full h-16">
      <div className="flex items-center justify-between h-full max-w-6xl px-6 mx-auto select-none">
        <Link href="/" className="font-serif text-lg font-bold text-neutral-900 dark:text-neutral-100 tracking-tight hover:opacity-70 transition-opacity duration-300 whitespace-nowrap">
          <span className="text-[rgb(var(--accent))] mr-1">§</span>
          {globalConfig.site.author}
        </Link>

        <div
          id="mobileMenuBackground"
          onClick={closeMenu}
          className={`fixed inset-0 z-20 w-screen h-screen duration-300 ease-out bg-white/95 dark:bg-neutral-950/95 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        ></div>

        <nav className="relative z-30 flex flex-row-reverse justify-start w-full text-sm sm:justify-end sm:flex-row">
          <div
            id="openMenu"
            onClick={toggleMenu}
            className={`flex items-center justify-center w-8 h-8 ml-4 cursor-pointer sm:hidden ${
              isMenuOpen ? 'hidden' : 'block'
            }`}
          >
            <svg className="w-5 h-5 text-neutral-700 dark:text-neutral-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 8h16M4 16h16"></path>
            </svg>
          </div>

          <div
            id="closeMenu"
            onClick={toggleMenu}
            className={`flex items-center justify-center w-8 h-8 ml-4 cursor-pointer sm:hidden ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <svg className="w-5 h-5 text-neutral-700 dark:text-neutral-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>

          <div
            id="menu"
            className={`fixed top-14 ease-out duration-300 sm:top-0 w-full left-0 sm:py-0 pt-6 pb-4 z-40 flex-col items-end justify-start ${
              isMenuOpen ? 'flex' : 'hidden'
            } w-full h-auto text-sm sm:text-base sm:h-auto sm:relative sm:flex-row sm:flex sm:text-sm sm:w-auto sm:pr-0 sm:pt-0`}
          >
            <div className="absolute inset-0 top-0 right-0 block w-full h-full px-4 sm:hidden">
              <div className="relative w-full h-full bg-white border border-[rgb(var(--border))] dark:bg-neutral-950 rounded-none"></div>
            </div>

            {globalConfig.navigation.items.map((item) => {
              const title = bilingualMounted && item.titleZh ? (language === 'zh' ? item.titleZh : item.title) : item.title;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`relative flex items-center justify-center w-full px-4 py-2.5 font-medium tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto ${
                    isActive(item.href)
                      ? 'text-[rgb(var(--accent))] dark:text-[rgb(var(--accent))] font-semibold'
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                  }`}
                >
                  {title}
                  {isActive(item.href) && <span className="hidden sm:block absolute bottom-0 left-0 right-0 h-px bg-[rgb(var(--accent))]"></span>}
                </Link>
              );
            })}
          </div>

          <ThemeToggle />
          <LanguageToggle />
        </nav>
      </div>
    </header>
  );
}