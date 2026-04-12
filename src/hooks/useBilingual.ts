import { useLanguage } from '@/components/LanguageContext';

// Helper function to get bilingual content
export function useBilingual() {
  const { language, t: translate, mounted } = useLanguage();

  // Simple t function that takes both English and Chinese strings
  const t = (en: string, zh: string): string => {
    return language === 'zh' ? zh : en;
  };

  return {
    language,
    t,
    mounted,
  };
}
