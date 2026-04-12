"use client";

import Link from "next/link";
import Image from "next/image";
import { projectsConfig } from '@/config/projects';
import { useBilingual } from '@/hooks/useBilingual';

const tagColors: Record<string, string> = {
  Work: 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800',
  Learning: 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300 border-amber-200 dark:border-amber-800',
  Life: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
};

export default function ProjectsContent() {
  const { t, language, mounted } = useBilingual();

  const title = mounted ? t('My Projects', '我的项目') : 'My Projects';
  const description = mounted ? t('A curated collection of my work spanning professional tools, learning resources, and creative utilities.', '精选作品集，涵盖专业工具、学习资源和创意工具。') : 'A curated collection of my work spanning professional tools, learning resources, and creative utilities.';
  const portfolio = mounted ? t('Portfolio', '作品集') : 'Portfolio';

  // Project bilingual titles and descriptions
  const projectBilingual: Record<number, { title: string; desc: string }> = {
    0: {
      title: t('Bank Annual Report Management System', '银行年报管理系统'),
      desc: t('A comprehensive system for managing and analyzing bank annual reports, streamlining data processing and report generation workflows.', '一个全面的银行年报管理和分析系统，简化数据处理和报告生成工作流程。')
    },
    1: {
      title: t('Fund Certification Exam Knowledge Base', '基金从业考试知识库'),
      desc: t('A structured knowledge base covering key concepts and study materials for the fund practitioner certification examination.', '一个结构化的知识库，涵盖基金从业资格考试的关键概念和学习材料。')
    },
    2: {
      title: t('Social Media Caption & Image Generator', '社交媒体文案与图片生成器'),
      desc: t('An AI-powered tool that generates engaging captions and matching images for social media posts, making content creation effortless.', '一个人工智能工具，为社交媒体帖子生成吸引人的文案和匹配的图片，让内容创作变得轻松自如。')
    }
  };

  const getTagLabel = (tag: string) => {
    const tags: Record<string, { en: string; zh: string }> = {
      'Work': { en: 'Work', zh: '工作' },
      'Learning': { en: 'Learning', zh: '学习' },
      'Life': { en: 'Life', zh: '生活' }
    };
    return mounted ? tags[tag]?.[language === 'zh' ? 'zh' : 'en'] || tag : tag;
  };

  return (
    <section className="relative z-20 max-w-4xl mx-auto mt-32 mb-12 px-7 lg:px-0">
      <div className="relative z-20 w-full mx-auto lg:mx-0">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[rgb(var(--accent))] mb-3">
          {portfolio}
        </p>
        <h2 className="font-serif text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
          {description}
        </p>
      </div>

      <div className="z-50 grid items-stretch w-full grid-cols-1 my-8 gap-7 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projectsConfig.items.map((project, index) => (
          <a
            key={index}
            href={project.href}
            target="_blank"
            className="relative flex flex-col items-stretch duration-300 ease-out p-5 sm:p-3 group h-100 rounded-none"
          >
            <span className="absolute inset-0 z-20 block w-full h-full duration-300 ease-out bg-transparent border border-transparent border-solid group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border group-hover:border-[rgb(var(--border))] rounded-none group-hover:bg-white dark:group-hover:bg-neutral-950"></span>
            <span className="absolute inset-0 z-10 block w-full h-full duration-300 ease-out border border-solid rounded-none border-[rgb(var(--border))] group-hover:translate-x-1 group-hover:translate-y-1"></span>
            <span className="relative z-30 block duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">
              <span className="block w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-none aspect-[16/9] object-cover"
                />
              </span>
              <span className="block w-full px-1 mt-5 mb-1 sm:mt-3">
                <span className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium tracking-wide text-neutral-500 dark:text-neutral-400 uppercase">
                    {getTagLabel(project.tag)}
                  </span>
                  <svg
                    className="group-hover:translate-x-0 group-hover:translate-y-0 -rotate-45 translate-y-1 -translate-x-1 w-2.5 h-2.5 stroke-current transition-all ease-in-out duration-200 transform text-neutral-400"
                    viewBox="0 0 13 15"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                      <g id="svg" transform="translate(0.666667, 2.333333)" stroke="currentColor" strokeWidth="2.4">
                        <g>
                          <polyline className="transition-all duration-200 ease-out opacity-0 delay-0 group-hover:opacity-100" points="5.33333333 0 10.8333333 5.5 5.33333333 11"></polyline>
                          <line className="transition-all duration-200 ease-out transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:ml-0" x1="10.8333333" y1="5.5" x2="0.833333333" y2="5.16666667"></line>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="flex items-center mb-1 text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                  <span>{projectBilingual[index]?.title || project.title}</span>
                </span>
                <span className="text-sm text-neutral-600 dark:text-neutral-400 block leading-relaxed">
                  {projectBilingual[index]?.desc || project.description}
                </span>
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
