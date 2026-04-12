"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";

interface MarkdownPagerProps {
  pages: string[];
  pagesZh?: string[];
}

export default function MarkdownPager({ pages, pagesZh }: MarkdownPagerProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const { language, mounted } = useLanguage();

  // Reset to first page when language changes
  useEffect(() => {
    if (mounted) {
      setCurrentPage(0);
    }
  }, [language, mounted]);

  const isZh = mounted && language === 'zh';
  const currentPages = isZh && pagesZh ? pagesZh : pages;
  const totalPages = currentPages.length;

  const goToPrevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  if (!mounted) {
    return (
      <div className="my-8">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4"></div>
          <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-full"></div>
          <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-5/6"></div>
          <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-4/5"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-8">
      <div className="prose dark:prose-invert max-w-none prose-headings:font-serif prose-a:text-[rgb(var(--accent))] prose-headings:tracking-tight prose-blockquote:border-l-[rgb(var(--accent))]">
        <div dangerouslySetInnerHTML={{ __html: currentPages[currentPage] }} />
      </div>
      
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8 py-4 border-t border-neutral-200 dark:border-neutral-700">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 0}
            className={`px-4 py-2 text-sm rounded-lg transition-colors ${
              currentPage === 0 
                ? 'opacity-50 cursor-not-allowed bg-neutral-100 dark:bg-neutral-800 text-neutral-400' 
                : 'bg-[rgb(var(--accent))] text-white hover:opacity-90'
            }`}
          >
            {isZh ? '上一页' : 'Previous'}
          </button>
          <span className="text-sm text-neutral-600 dark:text-neutral-300">
            {isZh ? `第 ${currentPage + 1} 页，共 ${totalPages} 页` : `Page ${currentPage + 1} of ${totalPages}`}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages - 1}
            className={`px-4 py-2 text-sm rounded-lg transition-colors ${
              currentPage === totalPages - 1 
                ? 'opacity-50 cursor-not-allowed bg-neutral-100 dark:bg-neutral-800 text-neutral-400' 
                : 'bg-[rgb(var(--accent))] text-white hover:opacity-90'
            }`}
          >
            {isZh ? '下一页' : 'Next'}
          </button>
        </div>
      )}
    </div>
  );
}
