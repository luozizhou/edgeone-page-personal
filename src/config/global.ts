export const globalConfig = {
  site: {
    name: "Johnson's Space",
    author: "Johnson's Space",
    description: "A brief description of your portfolio website",
    url: "www.luozizhou.com"
  },
  navigation: {
    aria: "Main Navigation",
    items: [
      {
        title: "Home",
        titleZh: "首页",
        href: "/"
      },
      {
        title: "Presentation",
        titleZh: "演示",
        href: "/presentation"
      },
      {
        title: "Projects",
        titleZh: "项目",
        href: "/projects"
      },
      {
        title: "Posts",
        titleZh: "文章",
        href: "/posts"
      },
      {
        title: "About",
        titleZh: "关于",
        href: "/about"
      }
    ]
  },
  footer: {
    aria: "Footer Navigation",
    copyright: "© 2026 Johnson's Space. All rights reserved.",
    copyrightZh: "© 2026 Johnson 的空间。保留所有权利。",
    social: {
      github: "https://github.com/luozizhou",
      email: "johnson_chn@sina.com"
    }
  }
} as const; 