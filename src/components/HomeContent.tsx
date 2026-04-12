'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { homeConfig } from '@/config/home';
import { useBilingual } from '@/hooks/useBilingual';

function ThemeAwareImage() {
  const [mounted, setMounted] = useState(false);
  const [imageSrc, setImageSrc] = useState('/assets/images/tech-background-light.svg');

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setImageSrc(savedTheme === 'light' ? '/assets/images/tech-background-light.svg' : '/assets/images/tech-background.svg');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setImageSrc('/assets/images/tech-background.svg');
    }
  }, []);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setImageSrc(isDark ? '/assets/images/tech-background.svg' : '/assets/images/tech-background-light.svg');
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-[420px] h-[420px] opacity-80">
      <img src={imageSrc} alt="Illustration" className="w-full h-full" />
    </div>
  );
}

export default function HomeContent() {
  const { language, t, mounted } = useBilingual();
  const welcome = mounted ? t('Welcome', '欢迎') : 'Welcome';
  const aboutMe = mounted ? t('About Me', '关于我') : 'About Me';
  
  const greeting = mounted && homeConfig.greetingZh ? (language === 'zh' ? homeConfig.greetingZh : homeConfig.greeting) : homeConfig.greeting;
  const description = mounted && homeConfig.descriptionZh ? (language === 'zh' ? homeConfig.descriptionZh : homeConfig.description) : homeConfig.description;
  const readPosts = mounted && homeConfig.buttons.readPostsZh ? (language === 'zh' ? homeConfig.buttons.readPostsZh : homeConfig.buttons.readPosts) : homeConfig.buttons.readPosts;

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-5xl mx-auto px-6 gap-8 lg:gap-12">
      <div className="w-full lg:w-1/2 text-left">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[rgb(var(--accent))] mb-3">
          {welcome}
        </p>
        <h1 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl lg:text-[2.75rem] leading-tight">
          {greeting}
        </h1>
        <div className="w-12 h-px bg-[rgb(var(--accent))] my-5"></div>
        <p className="text-sm sm:text-base leading-relaxed text-neutral-500 dark:text-neutral-400 whitespace-pre-line">
          {description}
        </p>
        <div className="flex flex-row gap-3 mt-6">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-[rgb(var(--accent))] hover:bg-[rgb(var(--accent-light))] transition-colors duration-300 cursor-pointer"
          >
            {aboutMe}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="/posts"
            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-neutral-700 border border-[rgb(var(--border))] hover:border-neutral-400 dark:text-neutral-300 dark:border-[rgb(var(--border))] dark:hover:border-neutral-500 transition-colors duration-300 cursor-pointer"
          >
            {readPosts}
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
        <ThemeAwareImage />
      </div>
    </div>
  );
}