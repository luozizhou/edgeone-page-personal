// Bilingual content configuration
export const bilingualContent = {
  // Navigation
  navigation: {
    home: { en: 'Home', zh: '首页' },
    projects: { en: 'Projects', zh: '项目' },
    posts: { en: 'Posts', zh: '文章' },
    about: { en: 'About', zh: '关于' },
  },
  
  // Home page
  home: {
    heroTitle: { 
      en: "Welcome to Johnson's Space", 
      zh: '欢迎来到 Johnson 的空间' 
    },
    heroSubtitle: { 
      en: 'Exploring the intersection of finance, technology, and everyday life', 
      zh: '探索金融、技术与日常生活的交汇点' 
    },
    viewProjects: { en: 'View Projects', zh: '查看项目' },
    latestPosts: { en: 'Latest Posts', zh: '最新文章' },
    learnMore: { en: 'Learn More', zh: '了解更多' },
    welcome: { en: 'Welcome', zh: '欢迎' },
    aboutMe: { en: 'About Me', zh: '关于我' },
  },
  
  // Projects page
  projects: {
    title: { en: 'My Projects', zh: '我的项目' },
    description: { 
      en: 'A curated collection of my work spanning professional tools, learning resources, and creative utilities.', 
      zh: '精选作品集，涵盖专业工具、学习资源和创意工具。' 
    },
    noProjects: { en: 'No projects found.', zh: '暂无项目。' },
    backButton: { en: 'Back to Home', zh: '返回首页' },
    tags: {
      work: { en: 'Work', zh: '工作' },
      learning: { en: 'Learning', zh: '学习' },
      life: { en: 'Life', zh: '生活' },
    },
    project1Title: { en: 'Bank Annual Report Management System', zh: '银行年报管理系统' },
    project1Desc: { en: 'A comprehensive system for managing and analyzing bank annual reports, streamlining data processing and report generation workflows.', zh: '一个全面的银行年报管理和分析系统，简化数据处理和报告生成工作流程。' },
    project2Title: { en: 'Fund Certification Exam Knowledge Base', zh: '基金从业考试知识库' },
    project2Desc: { en: 'A structured knowledge base covering key concepts and study materials for the fund practitioner certification examination.', zh: '一个结构化的知识库，涵盖基金从业资格考试的关键概念和学习材料。' },
    project3Title: { en: 'Social Media Caption & Image Generator', zh: '社交媒体文案与图片生成器' },
    project3Desc: { en: 'An AI-powered tool that generates engaging captions and matching images for social media posts, making content creation effortless.', zh: '一个人工智能工具，为社交媒体帖子生成吸引人的文案和匹配的图片，让内容创作变得轻松自如。' },
  },
  
  // Posts page
  posts: {
    title: { en: 'Blog Posts', zh: '博客文章' },
    archiveTitle: { en: 'Archive', zh: '归档' },
    description: { 
      en: 'Technical articles, tutorials, and insights about web development and EdgeOne platform.', 
      zh: '关于 Web 开发和 EdgeOne 平台的技术文章、教程和见解。' 
    },
    backButton: { en: 'Back to Home', zh: '返回首页' },
    noPosts: { en: 'No posts found matching your search.', zh: '未找到匹配的文章。' },
    searchPlaceholder: { en: 'Search posts by title...', zh: '按标题搜索文章...' },
    readMore: { en: 'Read More', zh: '阅读更多' },
    previous: { en: 'Previous', zh: '上一页' },
    next: { en: 'Next', zh: '下一页' },
    archive: { en: 'Archive', zh: '归档' },
    viewArchive: { en: 'View Archive', zh: '查看归档' },
    minRead: { en: 'min read', zh: '分钟阅读' },
  },
  
  // About page
  about: {
    title: { en: 'About Me', zh: '关于我' },
    subtitle: { 
      en: 'Household Finance Expert & Web Development Enthusiast', 
      zh: '家庭金融专家与 Web 开发爱好者' 
    },
    aboutLabel: { en: 'About', zh: '关于' },
    careerLabel: { en: 'Career', zh: '职业' },
    contactLabel: { en: 'Contact', zh: '联系' },
    experience: { en: 'Experience', zh: '经验' },
    letsConnect: { en: "Let's Connect", zh: '联系我' },
    connectDesc: { en: 'Feel free to reach out if you want to collaborate or just say hi!', zh: '如果您想合作或只是想打个招呼，欢迎随时联系！' },
    emailLabel: { en: 'Email', zh: '邮箱' },
    skills: { en: 'Skills', zh: '技能' },
  },
  
  // Footer
  footer: {
    copyright: { en: "© 2026 Johnson's Space. All rights reserved.", zh: '© 2026 Johnson 的空间。保留所有权利。' },
  },
  
  // Common
  common: {
    loading: { en: 'Loading...', zh: '加载中...' },
    error: { en: 'Error', zh: '错误' },
    close: { en: 'Close', zh: '关闭' },
  },
} as const;

export type BilingualKey = keyof typeof bilingualContent;
