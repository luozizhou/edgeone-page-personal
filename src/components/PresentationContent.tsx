"use client";
import { useState } from "react";
import { presentationConfig } from "@/config/presentation";
import PostCard from "@/components/PostCard";
import { useBilingual } from "@/hooks/useBilingual";

export default function PresentationContent() {
  const { t, mounted } = useBilingual();
  
  const presentations = presentationConfig.presentations;
  
  const title = mounted ? t('Presentation', '演示') : 'Presentation';
  const description = mounted ? t('From Bank Annual Report Management System to Personal Efficiency Improvement——Openclaw Full-Scenario Application Demo', '从银行年报管理系统到个人效率提升——Openclaw全场景应用演示') : 'From Bank Annual Report Management System to Personal Efficiency Improvement——Openclaw Full-Scenario Application Demo';
  const noContent = mounted ? t('No presentations yet.', '暂无演示内容。') : 'No presentations yet.';

  return (
    <section className="relative z-20 w-full max-w-3xl mx-auto py-10 px-6">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[rgb(var(--accent))] mb-3">
        Demo
      </p>
      <h1 className="text-3xl font-bold font-serif mb-4 text-neutral-900 dark:text-neutral-100">
        {title}
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8">
        {description}
      </p>

      {presentations.length === 0 ? (
        <div className="text-center py-16 text-neutral-400 dark:text-neutral-500">
          <p className="text-base">{noContent}</p>
        </div>
      ) : (
        <div className="flex flex-col divide-y divide-[rgb(var(--border))]">
          {presentations.map((post) => (
            <PostCard
              key={post.slug}
              title={post.title}
              titleZh={post.titleZh}
              description={post.description}
              descriptionZh={post.descriptionZh}
              date={post.date}
              href={`/presentation/${post.slug.replace('presentation/', '')}`}
              pattern="dots"
              imageUrl={post.image}
              readingTime={parseInt(post.readTime || "5")}
            />
          ))}
        </div>
      )}
    </section>
  );
}
