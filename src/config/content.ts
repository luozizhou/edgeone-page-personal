export const siteConfig = {
  name: "Johnson's Space",
  description: "A personal space for sharing thoughts, projects and insights",
  nav: {
    home: "Home",
    posts: "Posts",
    projects: "Projects",
    about: "About"
  },
  home: {
    greeting: "Hello, I'm Johnson.",
    description: "Welcome to my corner of the internet. I'm Johnson, and this is where I share thoughts, stories, and discoveries on household finance, web development and technology. Whether you're a long-time reader or just stopping by, I hope you find something that resonates. Grab a coffee, look around, and feel free to contact.",
    buttons: {
      viewProjects: "View Projects",
      readPosts: "Read Posts"
    }
  },
  projects: {
    title: "My Projects",
    description: "Here are some of the current projects I've been working on. I really enjoy creating new projects and coming up with new ideas. I'm always working on something new, so check back often!",
    backButton: "Back to Home",
    noProjects: "No projects found.",
    items: [
      {
        title: "TempMail.Best",
        description: "Best Temporary Email.",
        href: "https://tempmail.best",
        imageUrl: "/assets/images/projects/tempmail.best.png"
      },
      {
        title: "DNS.Surf",
        description: "Querying DNS Resolution Results in Different Regions Worldwide.",
        href: "https://dns.surf",
        imageUrl: "/assets/images/projects/dns.surf.png"
      },
      {
        title: "HTML.ZONE",
        description: "Web Toolbox.",
        href: "https://html.zone",
        imageUrl: "/assets/images/projects/html.zone.png"
      },
      {
        title: "Sink",
        description: "A Simple / Speedy / Secure Link Shortener with Analytics.",
        href: "https://sink.cool",
        imageUrl: "/assets/images/projects/sink.cool.png"
      },
      {
        title: "BroadcastChannel",
        description: "Turn your Telegram Channel into a MicroBlog.",
        href: "https://github.com/ccbikai/BroadcastChannel",
        imageUrl: "/assets/images/projects/broadcast-channel.png"
      },
      {
        title: "L(O*62).ONG",
        description: "Make your URL looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger",
        href: "https://loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo.ong",
        imageUrl: "/assets/images/projects/long.png"
      }
    ]
  },
  posts: {
    title: "My Writing",
    description: "My thoughts and ideas about technology and development.",
    backButton: "Back to Home",
    noPosts: "No posts found matching your search.",
    searchPlaceholder: "Filter posts by title...",
    pagination: {
      previous: "Previous",
      next: "Next"
    },
    items: [
      {
        title: "Welcome to Johnson's Personal Space",
        description: "Hello, I'm Johnson, a household finance expert dedicated to exploring and sharing practical insights in personal and family financial management.",
        date: "Mar 25, 2026",
        href: "/posts/introduction_johnson",
        imageUrl: "/assets/images/posts/johnson_introduction_attached.jpg",
        readingTime: 5
      }
    ]
  },
  about: {
    title: "About",
    description: "Learn more about me and my journey.",
    backButton: "Back to Home"
  },
  theme: {
    dayMode: "Day mode",
    nightMode: "Night mode"
  }
} as const 