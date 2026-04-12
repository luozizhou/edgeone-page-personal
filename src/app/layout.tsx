import './globals.css'
import type { Metadata } from 'next'
import { Merriweather, Source_Sans_3 } from "next/font/google";
import ThemeProvider from '@/components/ThemeProvider'
import { LanguageProvider } from '@/components/LanguageContext'
import { siteConfig } from '@/config/content'

const merriweather = Merriweather({ 
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

// Inline script to read language preference before React loads
function LanguageInitScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            function getLang() {
              try {
                var ls = localStorage.getItem('language');
                if (ls === 'zh' || ls === 'en') return ls;
                var cm = document.cookie.match(/language=([^;]+)/);
                if (cm) return decodeURIComponent(cm[1]);
              } catch(e) {}
              return 'en';
            }
            var lang = getLang();
            if (lang !== 'en') {
              document.documentElement.classList.add('lang-' + lang);
            }
            // Store initial language in window for React to read immediately
            window.__INITIAL_LANGUAGE__ = lang;
          })();
        `,
      }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${merriweather.variable} ${sourceSans.variable}`}>
      <head>
        <LanguageInitScript />
      </head>
      <body className={`${sourceSans.className}`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
} 