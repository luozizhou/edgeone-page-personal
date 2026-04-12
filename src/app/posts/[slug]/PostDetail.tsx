"use client";

import { useLanguage } from "@/components/LanguageContext";

interface PostDetailProps {
  post: {
    title?: string;
    titleZh?: string;
    summary?: string;
    summaryZh?: string;
    html?: string;
    htmlZh?: string;
    mdPages?: string[];
    mdPagesZh?: string[];
    pdfSrc?: string;
    date?: string;
    readTime?: string;
    content?: string;
    contentZh?: string;
  };
}

export default function PostDetail({ post }: PostDetailProps) {
  const { language, mounted } = useLanguage();
  const isZh = mounted && language === 'zh';

  // Use zh versions if available, otherwise fall back to en
  const title = isZh && post.titleZh ? post.titleZh : post.title;
  const summary = isZh && post.summaryZh ? post.summaryZh : post.summary;
  const html = isZh && post.htmlZh ? post.htmlZh : post.html;
  const content = isZh && post.contentZh ? post.contentZh : post.content;

  // Import MarkdownPager dynamically to avoid SSR issues
  const MarkdownPager = require("@/components/MarkdownPager").default;

  return (
    <>
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[rgb(var(--accent))] mb-2">
        {isZh ? '文章' : 'Article'}
      </p>
      
      {summary && (
        <div className="mb-6 p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg border-l-4 border-[rgb(var(--accent))]">
          <p className="text-neutral-700 dark:text-neutral-300 italic">{summary}</p>
        </div>
      )}
      
      <div className="prose dark:prose-invert max-w-none prose-headings:font-serif prose-a:text-[rgb(var(--accent))] prose-headings:tracking-tight prose-blockquote:border-l-[rgb(var(--accent))]">
        {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
        {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
      </div>
      
      {post.mdPages && post.mdPages.length > 0 && (
        <MarkdownPager 
          pages={post.mdPages} 
          pagesZh={post.mdPagesZh} 
        />
      )}
      
      {post.pdfSrc && (
        <div className="mt-10 p-6 bg-gradient-to-r from-[rgb(var(--accent))] to-blue-600 rounded-lg text-white text-center">
          <h3 className="text-xl font-bold mb-2">
            {isZh ? '祝您基金从业资格考试顺利通过！' : 'Best Wishes for Your Fund Practitioner Exam!'}
          </h3>
          <p className="text-sm opacity-90">
            {isZh 
              ? '祝您取得优异成绩！请记住，建立直觉理解比死记硬背更重要。祝您成为合格基金专业人员的道路上一路顺风！'
              : 'May you pass with flying colors! Remember, building intuitions matters more than memorizing everything. Good luck on your journey to becoming a qualified fund professional!'
            }
          </p>
        </div>
      )}
    </>
  );
}
