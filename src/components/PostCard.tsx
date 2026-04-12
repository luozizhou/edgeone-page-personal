'use client';

import Link from "next/link";
import Image from "next/image";
import { useBilingual } from "@/hooks/useBilingual";

interface PostCardProps {
  title: string;
  titleZh?: string;
  description: string;
  descriptionZh?: string;
  date: string;
  href: string;
  pattern?: 'dots' | 'grid' | 'waves' | 'circles';
  imageUrl?: string;
  readingTime: number;
}

export default function PostCard({ title, titleZh, description, descriptionZh, date, href, imageUrl = '/placeholder.jpg', readingTime }: PostCardProps) {
  const { language, t, mounted } = useBilingual();
  
  const displayTitle = mounted && titleZh ? (language === 'zh' ? titleZh : title) : title;
  const displayDescription = mounted && descriptionZh ? (language === 'zh' ? descriptionZh : description) : description;
  const minReadText = mounted ? t('min read', '分钟阅读') : 'min read';

  return (
    <Link href={href} className="block py-5 first:pt-0 group">
      <div className="flex gap-6">
        <div className="flex-1">
          <h2 className="font-serif text-base font-bold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-[rgb(var(--accent))] dark:group-hover:text-[rgb(var(--accent))] transition-colors duration-200">
            {displayTitle}
          </h2>
          <p className="mt-1.5 text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">
            {displayDescription}
          </p>
          <div className="flex items-center gap-3 mt-2 text-xs text-neutral-400 dark:text-neutral-500">
            <span>{date}</span>
            <span className="w-px h-3 bg-[rgb(var(--border))]"></span>
            <span>{readingTime} {minReadText}</span>
          </div>
        </div>
        <div className="relative w-40 h-28 flex-shrink-0 overflow-hidden">
          <Image
            src={imageUrl}
            alt={displayTitle}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Link>
  );
}