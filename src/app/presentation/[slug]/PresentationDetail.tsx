"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/components/LanguageContext";

interface PresentationDetailProps {
  post: {
    title?: string;
    titleZh?: string;
    summary?: string;
    summaryZh?: string;
    html?: string;
    htmlZh?: string;
    content?: string;
    contentZh?: string;
    date?: string;
    readTime?: string;
  };
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function PresentationDetail({ post }: PresentationDetailProps) {
  const { language, mounted } = useLanguage();
  const isZh = mounted && language === 'zh';
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [processedHtml, setProcessedHtml] = useState<string>("");
  const contentRef = useRef<HTMLDivElement>(null);

  // Use zh versions if available, otherwise fall back to en
  const title = isZh && post.titleZh ? post.titleZh : post.title;
  const summary = isZh && post.summaryZh ? post.summaryZh : post.summary;
  const html = isZh && post.htmlZh ? post.htmlZh : post.html;
  const content = isZh && post.contentZh ? post.contentZh : post.content;

  // Process content on client side only after mount
  useEffect(() => {
    if (!html && !content) return;
    
    if (typeof window !== 'undefined') {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html || content || '';
      
      const headings = tempDiv.querySelectorAll('h2, h3');
      headings.forEach((el, index) => {
        el.id = `toc-heading-${index}`;
      });
      
      setProcessedHtml(tempDiv.innerHTML);
    } else {
      // Server side fallback - just use raw content
      setProcessedHtml(html || content || '');
    }
  }, [html, content]);

  // Extract headings for TOC (exclude h1)
  useEffect(() => {
    const extractToc = () => {
      const headings: TocItem[] = [];
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html || content || '';
      
      // Only get h2 and h3, exclude h1
      const elements = tempDiv.querySelectorAll('h2, h3');
      elements.forEach((el, index) => {
        const id = `toc-heading-${index}`;
        headings.push({
          id,
          text: el.textContent || '',
          level: parseInt(el.tagName.substring(1))
        });
      });
      
      setToc(headings);
    };

    if (html || content) {
      extractToc();
    }
  }, [html, content]);

  // Set IDs on actual rendered content and track scroll position
  useEffect(() => {
    if (!contentRef.current) return;

    const contentDiv = contentRef.current;
    const elements = contentDiv.querySelectorAll('h2, h3');
    
    elements.forEach((el, index) => {
      el.id = `toc-heading-${index}`;
    });

    // Track scroll position to highlight active TOC item
    const handleScroll = () => {
      const headingElements = contentDiv.querySelectorAll('h2, h3');
      let currentActive = '';
      
      headingElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
          currentActive = el.id;
        }
      });
      
      if (currentActive) {
        setActiveId(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [processedHtml]);

  const scrollToHeading = (id: string) => {
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setActiveId(id);
      }
    });
  };

  return (
    <div className="flex">
      {/* Table of Contents - Left Sidebar */}
      {toc.length > 0 && (
        <nav className="hidden xl:block fixed left-0 top-36 w-44 z-10 pl-4">
          <div className="border-l-2 border-[rgb(var(--border))] pl-3">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[rgb(var(--accent))] mb-4">
              {isZh ? '目录' : 'TOC'}
            </p>
            <ul className="space-y-2">
              {toc.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToHeading(item.id)}
                    className={`text-sm text-left hover:text-[rgb(var(--accent))] transition-colors ${
                      item.level === 2 ? 'font-medium' : 'font-normal pl-3'
                    } ${
                      activeId === item.id 
                        ? 'text-[rgb(var(--accent))] font-medium' 
                        : 'text-neutral-500 dark:text-neutral-400'
                    }`}
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}

      {/* Main Content - Full width like Posts */}
      <div className="w-full">
        <div 
          ref={contentRef}
          className="prose dark:prose-invert max-w-none prose-headings:font-serif prose-a:text-[rgb(var(--accent))] prose-headings:tracking-tight prose-blockquote:border-l-[rgb(var(--accent))]"
        >
          {processedHtml && <div dangerouslySetInnerHTML={{ __html: processedHtml }} />}
        </div>
      </div>
    </div>
  );
}
