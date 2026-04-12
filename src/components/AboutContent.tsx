"use client";

import Image from "next/image";
import { aboutConfig } from "@/config/about";
import { useBilingual } from "@/hooks/useBilingual";

export default function AboutContent() {
  const { t, mounted } = useBilingual();

  const aboutLabel = mounted ? t('About', '关于') : 'About';
  const careerLabel = mounted ? t('Career', '职业') : 'Career';
  const contactLabel = mounted ? t('Contact', '联系') : 'Contact';
  const experience = mounted ? t('Experience', '经验') : 'Experience';
  const skillsLabel = mounted ? t('Skills', '技能') : 'Skills';

  const title = mounted ? t('About Me', '关于我') : 'About Me';
  const description = mounted ? t(
    "Hello, I'm Johnson, a household finance expert dedicated to exploring and sharing practical insights in personal and family financial management. Currently, I serve as a Customer Manager and Management Trainee at a local bank, where I focus on delivering tailored financial services to clients and deepening my expertise in household finance operations and customer-centric financial solutions.",
    "您好，我是 Johnson，一位专注于个人和家庭财务管理实践洞察的家庭金融专家。目前，我在当地一家银行担任客户经理和管培生，致力于为客户提供量身定制的金融服务，深化我在家庭金融运营和以客户为中心的金融解决方案方面的专业知识。"
  ) : aboutConfig.description;

  const letsConnect = mounted ? t("Let's Connect", '联系我') : "Let's Connect";
  const connectDesc = mounted ? t(
    'Feel free to reach out if you want to collaborate or just say hi!',
    '如果您想合作或只是想打个招呼，欢迎随时联系！'
  ) : aboutConfig.connect.description;
  const emailAddress = 'johnson_chn@sina.com';

  return (
    <section className="relative z-20 w-full max-w-4xl mx-auto py-10 px-6">
      {/* About Me */}
      <div>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[rgb(var(--accent))] mb-2">{aboutLabel}</p>
        <h2 className="font-serif text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          {title}
        </h2>
        <div className="w-10 h-px bg-[rgb(var(--accent))] mt-3 mb-5"></div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-3/5 flex flex-col">
            <p className="text-sm leading-7 text-neutral-600 dark:text-neutral-400">
              {description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {aboutConfig.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 text-xs font-medium border border-[rgb(var(--border))] text-neutral-600 dark:text-neutral-400 dark:border-[rgb(var(--border))]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full md:w-2/5 flex justify-end">
            <div className="relative w-[240px] h-[240px]">
              <Image
                src={aboutConfig.image}
                alt="Profile"
                fill
                sizes="(max-width: 768px) 100vw, 240px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgb(var(--border))] my-10"></div>

      {/* Experience */}
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[rgb(var(--accent))] mb-2">{careerLabel}</p>
          <h2 className="font-serif text-xl font-bold dark:text-neutral-200 mb-4">
            {experience}
          </h2>
          <div className="space-y-6">
            {aboutConfig.experience.items.map((item, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-[rgb(var(--border))]">
                <div className="absolute -left-[7px] top-1 w-3 h-3 bg-[rgb(var(--accent))]"></div>
                <p className="text-xs uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">{item.period}</p>
                <h3 className="text-sm font-bold dark:text-neutral-100">{item.role}</h3>
                <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1">{item.company}</p>
                <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-[280px] md:ml-10 mt-10 md:mt-0">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[rgb(var(--accent))] mb-2">{contactLabel}</p>
          <h2 className="font-serif text-xl font-bold dark:text-neutral-200 mb-4">{letsConnect}</h2>
          <p className="text-sm leading-6 text-neutral-500 dark:text-neutral-400 mb-4">
            {connectDesc}
          </p>
          <div className="flex flex-col gap-2.5">
            <a href={`mailto:${emailAddress}`} className="text-sm text-[rgb(var(--accent))] hover:underline">
              {emailAddress}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}