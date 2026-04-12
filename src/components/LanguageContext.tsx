"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

type Language = 'en' | 'zh';

// Cookie-based storage for better SSG compatibility
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string, days: number = 365): void {
  if (typeof document === 'undefined') return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/;SameSite=Lax`;
}

// Helper to get initial language from cookie/localStorage/window
function getInitialLanguage(): Language {
  // First check window global set by inline script (runs before React hydration)
  if (typeof window !== 'undefined' && (window as any).__INITIAL_LANGUAGE__) {
    const lang = (window as any).__INITIAL_LANGUAGE__;
    if (lang === 'zh' || lang === 'en') return lang;
  }
  
  // Then try cookie (works with SSR/SSG)
  try {
    const cookieLang = getCookie('language');
    if (cookieLang === 'zh' || cookieLang === 'en') return cookieLang;
  } catch (e) {
    // ignore
  }
  // Finally try localStorage
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem('language');
      if (saved === 'zh' || saved === 'en') return saved;
    } catch (e) {
      // ignore
    }
  }
  return 'en';
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (en: string) => string;
  mounted: boolean;
}

const defaultValue: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
  t: (en: string) => en,
  mounted: false,
};

const LanguageContext = createContext<LanguageContextType>(defaultValue);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);
  const [initialized, setInitialized] = useState(false);

  // Initialize from cookie/localStorage on mount
  useEffect(() => {
    const initialLang = getInitialLanguage();
    setLanguage(initialLang);
    setMounted(true);
    setInitialized(true);
  }, []);

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    // Save to both cookie and localStorage for redundancy
    try {
      localStorage.setItem('language', lang);
    } catch (e) {
      // ignore
    }
    setCookie('language', lang);
  }, []);

  const t = useCallback((en: string): string => {
    return en;
  }, []);

  // Don't render children until we've initialized to prevent hydration mismatch
  if (!initialized) {
    return (
      <LanguageContext.Provider value={{ language: 'en', setLanguage: handleSetLanguage, t, mounted: false }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return defaultValue;
  }
  return context;
}
