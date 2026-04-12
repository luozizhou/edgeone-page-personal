"use client";

import { useLanguage } from './LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage, mounted } = useLanguage();

  // Show button always, but use default state before mount
  const currentLang = mounted ? language : 'en';
  
  const toggleLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const newLang = language === 'en' ? 'zh' : 'en';
    setLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center w-8 h-8 ml-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-[rgb(var(--accent))] dark:hover:text-[rgb(var(--accent))] transition-colors duration-200"
      aria-label={currentLang === 'en' ? 'Switch to Chinese' : 'Switch to English'}
      type="button"
    >
      {currentLang === 'en' ? '中' : 'EN'}
    </button>
  );
}
