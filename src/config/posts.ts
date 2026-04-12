// This file is manually managed. Posts can be moved to/from archive by toggling the "archived" field.
import { Post } from '@/types/post';
import { fundBasicsContent, fundBasicsContentZh, fundProfessionalContent, fundProfessionalContentZh } from './fundContent';

interface PostsConfig {
  title: string;
  archiveTitle: string;
  description: string;
  backButton: string;
  noPosts: string;
  searchPlaceholder: string;
  pagination: {
    previous: string;
    next: string;
  };
  posts: Post[];
  archivedPosts: Post[];
}

export const postsConfig: PostsConfig = {
  "title": "Blog Posts",
  "archiveTitle": "Archive",
  "description": "Technical articles, tutorials, and insights about web development and EdgeOne platform.",
  "backButton": "Back to Home",
  "noPosts": "No posts found matching your search.",
  "searchPlaceholder": "Search posts by title...",
  "pagination": {
    "previous": "Previous",
    "next": "Next"
  },
  "posts": [
    {
      "title": "Fundamentals of Equity Funds - Exam Preparation Notes",
      "titleZh": "证券投资基金基础知识 - 考试备考笔记",
      "description": "Personal study notes for the Fund Practitioner Qualification Exam - Fundamentals of Equity Funds",
      "descriptionZh": "基金从业资格考试-证券投资基金基础知识个人学习笔记",
      "date": "2026-03-30",
      "image": "/assets/images/posts/fund_basic_watermark.jpg",
      "slug": "posts/fundamentals-of-equity-funds",
      "tags": [
        "fund practitioner exam",
        "equity funds",
        "study notes",
        "household finance"
      ],
      "tagsZh": [
        "基金从业资格考试",
        "证券投资基金",
        "学习笔记",
        "家庭理财"
      ],
      "author": "Johnson's Space",
      "readTime": "30",
      "content": "Fundamentals of Equity Funds - Exam Preparation Notes",
      "contentZh": "证券投资基金基础知识 - 考试备考笔记",
      "html": "<h1>Fundamentals of Equity Funds - Exam Preparation Notes</h1><p>Personal study notes for the Fund Practitioner Qualification Exam - Fundamentals of Equity Funds</p>",
      "htmlZh": "<h1>证券投资基金基础知识 - 考试备考笔记</h1><p>基金从业资格考试-证券投资基金基础知识个人学习笔记</p>",
      "archived": false,
      "summary": "My review strategy for the fund practitioner exam: I went through the book once, then recorded the knowledge points I found challenging. Before the exam, I briefly reviewed these notes, which gave me confidence. After the exam, I realized that we should build more intuitions for the difficult concepts - don't force yourself to understand everything completely.",
      "summaryZh": "我的基金从业资格考试复习策略：先将书通读一遍，然后记录下我觉得困难的知识点。考试前快速浏览了一遍这些笔记，这给了我信心。考完后我意识到，对于难点概念我们应该建立更多的直觉理解——不要强迫自己完全理解一切。",
      "mdPages": fundBasicsContent,
      "mdPagesZh": fundBasicsContentZh
    },
    {
      "title": "Fund Laws and Regulations - Exam Preparation Notes",
      "titleZh": "基金法律法规 - 考试备考笔记",
      "description": "Personal study notes for the Fund Practitioner Qualification Exam - Fund Laws and Regulations",
      "descriptionZh": "基金从业资格考试-基金法律法规个人学习笔记",
      "date": "2026-03-30",
      "image": "/assets/images/posts/fund_professional_watermark.jpg",
      "slug": "posts/fund-laws-and-regulations",
      "tags": [
        "fund practitioner exam",
        "laws and regulations",
        "study notes",
        "household finance"
      ],
      "tagsZh": [
        "基金从业资格考试",
        "法律法规",
        "学习笔记",
        "家庭理财"
      ],
      "author": "Johnson's Space",
      "readTime": "30",
      "content": "Fund Laws and Regulations - Exam Preparation Notes",
      "contentZh": "基金法律法规 - 考试备考笔记",
      "html": "<h1>Fund Laws and Regulations - Exam Preparation Notes</h1><p>Personal study notes for the Fund Practitioner Qualification Exam - Fund Laws and Regulations</p>",
      "htmlZh": "<h1>基金法律法规 - 考试备考笔记</h1><p>基金从业资格考试-基金法律法规个人学习笔记</p>",
      "archived": false,
      "summary": "My review strategy for the fund practitioner exam: I went through the book once, then recorded the knowledge points I found challenging. Before the exam, I briefly reviewed these notes, which gave me confidence. After the exam, I realized that we should build more intuitions for the difficult concepts - don't force yourself to understand everything completely.",
      "summaryZh": "我的基金从业资格考试复习策略：先将书通读一遍，然后记录下我觉得困难的知识点。考试前快速浏览了一遍这些笔记，这给了我信心。考完后我意识到，对于难点概念我们应该建立更多的直觉理解——不要强迫自己完全理解一切。",
      "mdPages": fundProfessionalContent,
      "mdPagesZh": fundProfessionalContentZh
    },
    {
      "title": "Welcome to Johnson's Personal Space",
      "titleZh": "欢迎来到 Johnson 的个人空间",
      "description": "Hello, I'm Johnson, a household finance expert dedicated to exploring and sharing practical insights in personal and family financial management.",
      "descriptionZh": "大家好，我是 Johnson，一位专注于探索和分享个人与家庭财务管理实用见解的家庭金融专家。",
      "date": "2026-03-25",
      "image": "/assets/images/posts/johnson_introduction_attached.jpg",
      "slug": "posts/introduction_johnson",
      "tags": [
        "icebreaking",
        "household finance",
        "web coding",
        "financial technology"
      ],
      "tagsZh": [
        "破冰",
        "家庭理财",
        "网页编程",
        "金融科技"
      ],
      "author": "Johnson's Space",
      "readTime": "5",
      "content": "\n# Welcome to Johnson's Personal Space\n\nHello, I'm Johnson, a household finance expert dedicated to exploring and sharing practical insights in personal and family financial management. Currently, I serve as a Customer Manager and Management Trainee at a local bank, where I focus on delivering tailored financial services to clients and deepening my expertise in household finance operations and customer-centric financial solutions.\n\nBeyond my core professional field, I have developed a keen interest in web coding recently, driven by a desire to combine financial knowledge with technical tools to solve practical problems. My latest technical achievement is an automated analysis system developed for a dedicated research project, merging financial analytics with coding capabilities to optimize data-driven financial research.\n\nThis personal website is built as a dedicated platform to showcase and share my upcoming workshop focused on this brand-new automated analysis system. More than that, this space will be a comprehensive hub where I share everything related to household finance expertise, web coding exploration, technical project practices, professional insights and practical experiences.\n\nWhether you are a peer in the household finance industry, someone interested in web coding and financial tech applications, or anyone eager to learn about financial management and automated analysis systems, everyone is sincerely welcome here. Let's exchange ideas, learn together and explore the intersections of finance and technology in this open and inclusive space.\n",
      "contentZh": "\n# 欢迎来到 Johnson 的个人空间\n\n大家好，我是 Johnson，一位专注于探索和分享个人与家庭财务管理实用见解的家庭金融专家。目前，我在一家本地银行担任客户经理和管培生，专注于为客户提供量身定制的金融服务，并深化我在家庭金融运营和以客户为中心的金融解决方案方面的专业知识。\n\n除了核心专业领域之外，最近我对网页编程产生了浓厚的兴趣，希望将金融知识与技术工具结合来解决实际问题。我的最新技术成果是一个为专项研究项目开发的自动化分析系统，将金融分析与编码能力相结合，以优化数据驱动的金融研究。\n\n这个个人网站是作为一个专用平台而建，旨在展示和分享我即将举办的关于这一全新自动化分析系统的工作坊。更重要的是，这个空间将成为一个全面的中心，分享与家庭金融专业知识、网页编程探索、技术项目实践、专业见解和实践经验相关的一切。\n\n无论您是家庭金融行业的同行，还是对网页编程和金融科技应用感兴趣的人，抑或是任何渴望了解金融管理和自动化分析系统的人，都真诚欢迎在这里。让我们交流想法，一起学习，在这个开放包容的空间中探索金融与技术的交汇点。\n",
      "html": "<div class=\"mb-6\"><img src=\"/assets/images/posts/johnson_introduction_attached.jpg\" alt=\"Johnson's Personal Space\" class=\"w-full rounded-lg shadow-md\" /></div><h1>Welcome to Johnson's Personal Space</h1><p>Hello, I'm Johnson, a household finance expert dedicated to exploring and sharing practical insights in personal and family financial management. Currently, I serve as a Customer Manager and Management Trainee at a local bank, where I focus on delivering tailored financial services to clients and deepening my expertise in household finance operations and customer-centric financial solutions.</p><p>Beyond my core professional field, I have developed a keen interest in web coding recently, driven by a desire to combine financial knowledge with technical tools to solve practical problems. My latest technical achievement is an automated analysis system developed for a dedicated research project, merging financial analytics with coding capabilities to optimize data-driven financial research.</p><p>This personal website is built as a dedicated platform to showcase and share my upcoming workshop focused on this brand-new automated analysis system. More than that, this space will be a comprehensive hub where I share everything related to household finance expertise, web coding exploration, technical project practices, professional insights and practical experiences.</p><p>Whether you are a peer in the household finance industry, someone interested in web coding and financial tech applications, or anyone eager to learn about financial management and automated analysis systems, everyone is sincerely welcome here. Let's exchange ideas, learn together and explore the intersections of finance and technology in this open and inclusive space.</p>",
      "htmlZh": "<div class=\"mb-6\"><img src=\"/assets/images/posts/johnson_introduction_attached.jpg\" alt=\"Johnson's Personal Space\" class=\"w-full rounded-lg shadow-md\" /></div><h1>欢迎来到 Johnson 的个人空间</h1><p>大家好，我是 Johnson，一位专注于探索和分享个人与家庭财务管理实用见解的家庭金融专家。目前，我在一家本地银行担任客户经理和管培生，专注于为客户提供量身定制的金融服务，并深化我在家庭金融运营和以客户为中心的金融解决方案方面的专业知识。</p><p>除了核心专业领域之外，最近我对网页编程产生了浓厚的兴趣，希望将金融知识与技术工具结合来解决实际问题。我的最新技术成果是一个为专项研究项目开发的自动化分析系统，将金融分析与编码能力相结合，以优化数据驱动的金融研究。</p><p>这个个人网站是作为一个专用平台而建，旨在展示和分享我即将举办的关于这一全新自动化分析系统的工作坊。更重要的是，这个空间将成为一个全面的中心，分享与家庭金融专业知识、网页编程探索、技术项目实践、专业见解和实践经验相关的一切。</p><p>无论您是家庭金融行业的同行，还是对网页编程和金融科技应用感兴趣的人，抑或是任何渴望了解金融管理和自动化分析系统的人，都真诚欢迎在这里。让我们交流想法，一起学习，在这个开放包容的空间中探索金融与技术的交汇点。</p>",
      "archived": false
    },
    {
      "title": "Understanding Skill: A Deep Dive into Finance Lite",
      "titleZh": "深入理解 Skill：Finance Lite 深度解析",
      "description": "An in-depth exploration of what a Skill is, using the Finance Lite skill as a real-world example. Learn about skill structure, configuration files, and how each component works together.",
      "descriptionZh": "深入探索什么是 Skill，以 Finance Lite skill 为真实案例。了解 Skill 的结构、配置文件以及各组件如何协同工作。",
      "date": "2026-03-30",
      "image": "/assets/images/posts/finance_lite_watermark.jpg",
      "slug": "posts/understanding-skill-finance-lite",
      "tags": [
        "skill",
        "codebuddy",
        "finance",
        "tutorial"
      ],
      "tagsZh": [
        "skill",
        "codebuddy",
        "金融",
        "教程"
      ],
      "author": "Johnson's Space",
      "readTime": "15",
      "content": "# Understanding Skill: A Deep Dive into Finance Lite\n\nIn this post, I'll walk you through what a Skill looks like in practice, using the Finance Lite skill as a real example. A Skill is essentially a reusable tool that extends an AI assistant's capabilities with specialized knowledge, workflows, or integrations.\n\n## What is a Skill?\n\nA Skill is a domain-specific extension package that provides:\n1. Expert knowledge in a specific area\n2. Standardized workflows (SOPs)\n3. Executable tools or scripts\n4. Configuration and metadata\n\n## Finance Lite Skill Structure\n\nLet's examine the actual file structure of the Finance Lite skill (version 1.0.1):\n\n```\nfinance-lite-1.0.1/\n├── _meta.json          # Skill metadata\n├── SKILL.md            # Skill definition and documentation\n└── scripts/\n    └── finance_lite/\n        ├── brief.mjs   # Main executable script\n        └── watchlist.json  # User data persistence\n```\n\n## File-by-File Analysis\n\n### 1. _meta.json - Skill Metadata\n\n```json\n{\n  \"ownerId\": \"kn7b1tjeks7ssb6xcz0z0vakfn81zaez\",\n  \"slug\": \"finance-lite\",\n  \"version\": \"1.0.1\",\n  \"publishedAt\": 1772490849653\n}\n```\n\nThis file contains:\n- **ownerId**: The unique identifier of the skill creator\n- **slug**: The skill's URL-friendly name (used to invoke the skill)\n- **version**: Semantic version number\n- **publishedAt**: Unix timestamp of when the skill was published\n\n### 2. SKILL.md - Skill Definition\n\nThis is the core configuration file that defines:\n- **name**: The display name of the skill\n- **description**: What the skill does\n- **user-invocable**: Whether users can directly invoke the skill\n- **command-dispatch**: How commands are routed (tool/exec)\n- **Runtime requirements**: Environment variables and binaries needed\n- **Dispatch commands**: Available commands users can call\n- **Behavior notes**: How the skill behaves and persists data\n- **Scope and guardrails**: Limitations and safety guidelines\n- **Required output floor**: Mandatory output format\n\n### 3. scripts/finance_lite/brief.mjs - The Core Logic\n\nThis is a Node.js script (ESM module) that implements:\n- **Macro data fetching**: Retrieves inflation, labor, growth, rates, and housing data from FRED\n- **Benchmark tracking**: SPY, GLD, and other ETFs with trend analysis\n- **Watchlist management**: Add/remove stock tickers\n- **News aggregation**: Market news and company-specific headlines\n- **Caching**: Local file-based caching for API responses\n\nKey functions include:\n- `fredSeries()`: Fetch macroeconomic data from FRED API\n- `quote()`: Get stock quotes from Finnhub\n- `buildBrief()`: Generate the daily market brief\n- `buildMacro()`: Construct macro economic overview\n- `buildTickerView()`: Show individual stock analysis\n\n### 4. scripts/finance_lite/watchlist.json - User Data\n\n```json\n{\n  \"version\": 1,\n  \"benchmarks\": [\"SPY\", \"GLD\"],\n  \"watchlist\": [\"NVDA\", \"NBIS\", \"BABA\"],\n  \"updatedAt\": \"2026-03-02T22:09:24.817Z\"\n}\n```\n\nThis stores:\n- **benchmarks**: Index ETFs to track (SPY = S&P 500, GLD = Gold)\n- **watchlist**: User's custom stock watchlist\n- **updatedAt**: Timestamp of last modification\n\n## How the Skill Works\n\nWhen you invoke `/finance_lite brief`, the following happens:\n\n1. **Command Dispatch**: CodeBuddy routes the command to the skill based on SKILL.md dispatch rules\n2. **Script Execution**: The brief.mjs script runs with the \"brief\" argument\n3. **Data Collection**: \n   - Fetches macro data from FRED (US Federal Reserve Economic Data)\n   - Gets stock quotes from Finnhub API\n   - Retrieves market news\n4. **Data Processing**: Calculates trends, moving averages, risk signals\n5. **Output Generation**: Formats everything into a readable brief\n6. **Caching**: Stores results locally to reduce API calls\n\n## Available Commands\n\n| Command | Description |\n|---------|-------------|\n| `brief` | Daily market brief with macro, benchmarks, watchlist |\n| `macro` | Detailed macro economic overview |\n| `bench` | Benchmark ETF performance |\n| `list` | Show current watchlist |\n| `add <TICKER>` | Add stock to watchlist |\n| `add <TICKER> bench` | Add as benchmark |\n| `remove <TICKER>` | Remove from watchlist |\n| `<TICKER>` | View specific stock info |\n\n## Key Takeaways\n\n1. **Skills are self-contained packages** - Everything needed (code, config, data) is in one directory\n2. **Configuration-driven** - SKILL.md defines the contract between user and skill\n3. **Executable scripts** - Node.js scripts provide the actual functionality\n4. **Data persistence** - JSON files store user-specific data\n5. **API integrations** - Skills can connect to external services\n6. **Clear dispatch rules** - Users invoke skills through defined commands\n\nSkills represent a powerful way to extend AI capabilities with domain-specific expertise and automated workflows.",
      "contentZh": "# 深入理解 Skill：Finance Lite 深度解析\n\n在这篇文章中，我将带您深入了解 Skill 在实践中是什么样子，以 Finance Lite skill 为真实案例。Skill 本质上是一种可重用的工具，通过专门的知识、工作流程或集成来扩展 AI 助手的能力。\n\n## 什么是 Skill？\n\nSkill 是一个领域特定的扩展包，提供以下功能：\n1. 特定领域的专业知识\n2. 标准化的工作流程（SOP）\n3. 可执行的工具或脚本\n4. 配置和元数据\n\n## Finance Lite Skill 结构\n\n让我们看一下 Finance Lite skill（版本 1.0.1）的实际文件结构：\n\n```\nfinance-lite-1.0.1/\n├── _meta.json          # Skill 元数据\n├── SKILL.md           # Skill 定义和文档\n└── scripts/\n    └── finance_lite/\n        ├── brief.mjs   # 主可执行脚本\n        └── watchlist.json  # 用户数据持久化\n```\n\n## 文件逐个分析\n\n### 1. _meta.json - Skill 元数据\n\n此文件包含：\n- **ownerId**：Skill 创建者的唯一标识符\n- **slug**：Skill 的 URL 友好名称（用于调用 Skill）\n- **version**：语义版本号\n- **publishedAt**：Skill 发布时的 Unix 时间戳\n\n### 2. SKILL.md - Skill 定义\n\n这是核心配置文件，定义以下内容：\n- **name**：Skill 的显示名称\n- **description**：Skill 的功能描述\n- **user-invocable**：用户是否可以直接调用 Skill\n- **command-dispatch**：命令如何路由（tool/exec）\n- **Runtime requirements**：所需的环境变量和二进制文件\n- **Dispatch commands**：用户可以调用的可用命令\n- **Behavior notes**：Skill 的行为方式和数据持久化方式\n- **Scope and guardrails**：限制和安全指南\n- **Required output floor**：强制输出格式\n\n### 3. scripts/finance_lite/brief.mjs - 核心逻辑\n\n这是一个 Node.js 脚本（ESM 模块），实现以下功能：\n- **宏观数据获取**：从 FRED 获取通胀、劳动力、增长、利率和住房数据\n- **基准跟踪**：SPY、GLD 等 ETF 的趋势分析\n- **自选股管理**：添加/删除股票代码\n- **新闻聚合**：市场新闻和公司特定头条\n- **缓存**：本地文件缓存 API 响应\n\n主要函数包括：\n- `fredSeries()`：从 FRED API 获取宏观经济数据\n- `quote()`：从 Finnhub 获取股票报价\n- `buildBrief()`：生成每日市场简报\n- `buildMacro()`：构建宏观经济概览\n- `buildTickerView()`：显示个股分析\n\n### 4. scripts/finance_lite/watchlist.json - 用户数据\n\n存储内容：\n- **benchmarks**：要跟踪的指数 ETF（SPY = 标普 500，GLD = 黄金）\n- **watchlist**：用户自定义的股票自选股\n- **updatedAt**：最后修改的时间戳\n\n## Skill 是如何工作的\n\n当您调用 `/finance_lite brief` 时，会发生以下步骤：\n\n1. **命令分发**：CodeBuddy 根据 SKILL.md 分发规则将命令路由到 Skill\n2. **脚本执行**：brief.mjs 脚本以 \"brief\" 参数运行\n3. **数据收集**：从 FRED（美联储经济数据）获取宏观数据，从 Finnhub API 获取股票报价，获取市场新闻\n4. **数据处理**：计算趋势、移动平均线、风险信号\n5. **输出生成**：将所有内容格式化为可读的简报\n6. **缓存**：在本地存储结果以减少 API 调用\n\n## 可用命令\n\n| 命令 | 描述 |\n|---------|-------------|\n| `brief` | 包含宏观、基准、自选股的每日市场简报 |\n| `macro` | 详细的宏观经济概览 |\n| `bench` | 基准 ETF 表现 |\n| `list` | 显示当前自选股 |\n| `add <TICKER>` | 添加股票到自选股 |\n| `add <TICKER> bench` | 添加为基准 |\n| `remove <TICKER>` | 从自选股移除 |\n| `<TICKER>` | 查看特定股票信息 |\n\n## 关键要点\n\n1. **Skill 是自包含的包**：所需的一切（代码、配置、数据）都在一个目录中\n2. **配置驱动**：SKILL.md 定义了用户与 Skill 之间的契约\n3. **可执行脚本**：Node.js 脚本提供实际功能\n4. **数据持久化**：JSON 文件存储用户特定数据\n5. **API 集成**：Skill 可以连接外部服务\n6. **清晰的分发规则**：用户通过定义的命令调用 Skill\n\n## 常见「有毒」Skill 类型\n\n### 1. 高危（直接窃取 / 控制）\n\n- **凭证窃取型**：读取 ~/.ssh、~/.aws、API Key、Token、环境变量、浏览器 Cookie\n- **数据外发型**：向陌生域名 / IP 发送文件、聊天记录、系统信息\n- **命令执行型**：eval/exec、os.system、curl | bash、sudo、反弹 Shell\n- **系统篡改型**：修改 hosts、iptables、开机自启、安装后门\n\n### 2. 中危（隐蔽投毒 / 越权）\n\n- **提示词注入 / 越狱**：ignore previous instructions、覆盖系统安全规则\n- **代码混淆**：Base64、Unicode、多层嵌套、无注释、难以阅读\n- **越权请求**：天气 / 日历 Skill 要文件读写、网络权限\n- **依赖投毒**：安装未知二进制、恶意 npm/pip 包、ZIP 解压执行\n\n### 3. 低危（广告 / 骚扰 / 违规）\n\n- 强制弹窗、诱导付费、黑灰产内容（挖矿、诈骗、色情）\n- 无理由频繁网络请求、消耗资源、篡改配置\n\n## 工具自动扫描\n\n- **Skill-Vetter**：检查敏感文件、网络外发、eval、sudo、混淆\n- **oc-healthcheck**：命令行扫描可疑网络 / 文件操作\n- **OpenClaw Skill Scanner**：启发式检测 15+ 恶意模式、威胁评分\n- **VirusTotal**：上传 Skill 包做多引擎扫描",
      "html": "<h1>Understanding Skill: A Deep Dive into Finance Lite</h1><p>In this post, I'll walk you through what a Skill looks like in practice, using the Finance Lite skill as a real example. A Skill is essentially a reusable tool that extends an AI assistant's capabilities with specialized knowledge, workflows, or integrations.</p><h2>What is a Skill?</h2><p>A Skill is a domain-specific extension package that provides:</p><ul><li>Expert knowledge in a specific area</li><li>Standardized workflows (SOPs)</li><li>Executable tools or scripts</li><li>Configuration and metadata</li></ul><h2>Finance Lite Skill Structure</h2><pre><code>finance-lite-1.0.1/\n├── _meta.json          # Skill metadata\n├── SKILL.md            # Skill definition and documentation\n└── scripts/\n    └── finance_lite/\n        ├── brief.mjs   # Main executable script\n        └── watchlist.json  # User data persistence\n</code></pre><h2>File-by-File Analysis</h2><h3>1. _meta.json - Skill Metadata</h3><pre><code>{\n  \"ownerId\": \"kn7b1tjeks7ssb6xcz0z0vakfn81zaez\",\n  \"slug\": \"finance-lite\",\n  \"version\": \"1.0.1\",\n  \"publishedAt\": 1772490849653\n}\n</code></pre><p>This file contains:</p><ul><li><strong>ownerId</strong>: The unique identifier of the skill creator</li><li><strong>slug</strong>: The skill's URL-friendly name (used to invoke the skill)</li><li><strong>version</strong>: Semantic version number</li><li><strong>publishedAt</strong>: Unix timestamp of when the skill was published</li></ul><h3>2. SKILL.md - Skill Definition</h3><p>This is the core configuration file that defines:</p><ul><li><strong>name</strong>: The display name of the skill</li><li><strong>description</strong>: What the skill does</li><li><strong>user-invocable</strong>: Whether users can directly invoke the skill</li><li><strong>command-dispatch</strong>: How commands are routed (tool/exec)</li><li><strong>Runtime requirements</strong>: Environment variables and binaries needed</li><li><strong>Dispatch commands</strong>: Available commands users can call</li><li><strong>Behavior notes</strong>: How the skill behaves and persists data</li><li><strong>Scope and guardrails</strong>: Limitations and safety guidelines</li><li><strong>Required output floor</strong>: Mandatory output format</li></ul><h3>3. scripts/finance_lite/brief.mjs - The Core Logic</h3><p>This is a Node.js script (ESM module) that implements:</p><ul><li><strong>Macro data fetching</strong>: Retrieves inflation, labor, growth, rates, and housing data from FRED</li><li><strong>Benchmark tracking</strong>: SPY, GLD, and other ETFs with trend analysis</li><li><strong>Watchlist management</strong>: Add/remove stock tickers</li><li><strong>News aggregation</strong>: Market news and company-specific headlines</li><li><strong>Caching</strong>: Local file-based caching for API responses</li></ul><p>Key functions include:</p><ul><li><code>fredSeries()</code>: Fetch macroeconomic data from FRED API</li><li><code>quote()</code>: Get stock quotes from Finnhub</li><li><code>buildBrief()</code>: Generate the daily market brief</li><li><code>buildMacro()</code>: Construct macro economic overview</li><li><code>buildTickerView()</code>: Show individual stock analysis</li></ul><h3>4. scripts/finance_lite/watchlist.json - User Data</h3><pre><code>{\n  \"version\": 1,\n  \"benchmarks\": [\"SPY\", \"GLD\"],\n  \"watchlist\": [\"NVDA\", \"NBIS\", \"BABA\"],\n  \"updatedAt\": \"2026-03-02T22:09:24.817Z\"\n}\n</code></pre><p>This stores:</p><ul><li><strong>benchmarks</strong>: Index ETFs to track (SPY = S&P 500, GLD = Gold)</li><li><strong>watchlist</strong>: User's custom stock watchlist</li><li><strong>updatedAt</strong>: Timestamp of last modification</li></ul><h2>How the Skill Works</h2><p>When you invoke <code>/finance_lite brief</code>, the following happens:</p><ol><li><strong>Command Dispatch</strong>: CodeBuddy routes the command to the skill based on SKILL.md dispatch rules</li><li><strong>Script Execution</strong>: The brief.mjs script runs with the \"brief\" argument</li><li><strong>Data Collection</strong>: Fetches macro data from FRED, gets stock quotes from Finnhub API, retrieves market news</li><li><strong>Data Processing</strong>: Calculates trends, moving averages, risk signals</li><li><strong>Output Generation</strong>: Formats everything into a readable brief</li><li><strong>Caching</strong>: Stores results locally to reduce API calls</li></ol><h2>Available Commands</h2><table><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td>brief</td><td>Daily market brief with macro, benchmarks, watchlist</td></tr><tr><td>macro</td><td>Detailed macro economic overview</td></tr><tr><td>bench</td><td>Benchmark ETF performance</td></tr><tr><td>list</td><td>Show current watchlist</td></tr><tr><td>add &lt;TICKER&gt;</td><td>Add stock to watchlist</td></tr><tr><td>add &lt;TICKER&gt; bench</td><td>Add as benchmark</td></tr><tr><td>remove &lt;TICKER&gt;</td><td>Remove from watchlist</td></tr><tr><td>&lt;TICKER&gt;</td><td>View specific stock info</td></tr></tbody></table><h2>Key Takeaways</h2><ol><li><strong>Skills are self-contained packages</strong> - Everything needed (code, config, data) is in one directory</li><li><strong>Configuration-driven</strong> - SKILL.md defines the contract between user and skill</li><li><strong>Executable scripts</strong> - Node.js scripts provide the actual functionality</li><li><strong>Data persistence</strong> - JSON files store user-specific data</li><li><strong>API integrations</strong> - Skills can connect to external services</li><li><strong>Clear dispatch rules</strong> - Users invoke skills through defined commands</li></ol><p>Skills represent a powerful way to extend AI capabilities with domain-specific expertise and automated workflows.</p>",
      "htmlZh": "<h1>深入理解 Skill：Finance Lite 深度解析</h1><p>在这篇文章中，我将带您深入了解 Skill 在实践中是什么样子，以 Finance Lite skill 为真实案例。Skill 本质上是一种可重用的工具，通过专门的知识、工作流程或集成来扩展 AI 助手的能力。</p><h2>什么是 Skill？</h2><p>Skill 是一个领域特定的扩展包，提供以下功能：</p><ul><li>特定领域的专业知识</li><li>标准化的工作流程（SOP）</li><li>可执行的工具或脚本</li><li>配置和元数据</li></ul><h2>Finance Lite Skill 结构</h2><pre><code>finance-lite-1.0.1/\n├── _meta.json          # Skill 元数据\n├── SKILL.md           # Skill 定义和文档\n└── scripts/\n    └── finance_lite/\n        ├── brief.mjs   # 主可执行脚本\n        └── watchlist.json  # 用户数据持久化\n</code></pre><h2>文件逐个分析</h2><h3>1. _meta.json - Skill 元数据</h3><p>此文件包含：</p><ul><li><strong>ownerId</strong>：Skill 创建者的唯一标识符</li><li><strong>slug</strong>：Skill 的 URL 友好名称（用于调用 Skill）</li><li><strong>version</strong>：语义版本号</li><li><strong>publishedAt</strong>：Skill 发布时的 Unix 时间戳</li></ul><h3>2. SKILL.md - Skill 定义</h3><p>这是核心配置文件，定义以下内容：</p><ul><li><strong>name</strong>：Skill 的显示名称</li><li><strong>description</strong>：Skill 的功能描述</li><li><strong>user-invocable</strong>：用户是否可以直接调用 Skill</li><li><strong>command-dispatch</strong>：命令如何路由（tool/exec）</li><li><strong>Runtime requirements</strong>：所需的环境变量和二进制文件</li><li><strong>Dispatch commands</strong>：用户可以调用的可用命令</li><li><strong>Behavior notes</strong>：Skill 的行为方式和数据持久化方式</li><li><strong>Scope and guardrails</strong>：限制和安全指南</li><li><strong>Required output floor</strong>：强制输出格式</li></ul><h3>3. scripts/finance_lite/brief.mjs - 核心逻辑</h3><p>这是一个 Node.js 脚本（ESM 模块），实现以下功能：</p><ul><li><strong>宏观数据获取</strong>：从 FRED 获取通胀、劳动力、增长、利率和住房数据</li><li><strong>基准跟踪</strong>：SPY、GLD 等 ETF 的趋势分析</li><li><strong>自选股管理</strong>：添加/删除股票代码</li><li><strong>新闻聚合</strong>：市场新闻和公司特定头条</li><li><strong>缓存</strong>：本地文件缓存 API 响应</li></ul><p>主要函数包括：</p><ul><li><code>fredSeries()</code>：从 FRED API 获取宏观经济数据</li><li><code>quote()</code>：从 Finnhub 获取股票报价</li><li><code>buildBrief()</code>：生成每日市场简报</li><li><code>buildMacro()</code>：构建宏观经济概览</li><li><code>buildTickerView()</code>：显示个股分析</li></ul><h3>4. scripts/finance_lite/watchlist.json - 用户数据</h3><p>存储内容：</p><ul><li><strong>benchmarks</strong>：要跟踪的指数 ETF（SPY = 标普 500，GLD = 黄金）</li><li><strong>watchlist</strong>：用户自定义的股票自选股</li><li><strong>updatedAt</strong>：最后修改的时间戳</li></ul><h2>Skill 是如何工作的</h2><p>当您调用 <code>/finance_lite brief</code> 时，会发生以下步骤：</p><ol><li><strong>命令分发</strong>：CodeBuddy 根据 SKILL.md 分发规则将命令路由到 Skill</li><li><strong>脚本执行</strong>：brief.mjs 脚本以 \"brief\" 参数运行</li><li><strong>数据收集</strong>：从 FRED（美联储经济数据）获取宏观数据，从 Finnhub API 获取股票报价，获取市场新闻</li><li><strong>数据处理</strong>：计算趋势、移动平均线、风险信号</li><li><strong>输出生成</strong>：将所有内容格式化为可读的简报</li><li><strong>缓存</strong>：在本地存储结果以减少 API 调用</li></ol><h2>可用命令</h2><table><thead><tr><th>命令</th><th>描述</th></tr></thead><tbody><tr><td>brief</td><td>包含宏观、基准、自选股的每日市场简报</td></tr><tr><td>macro</td><td>详细的宏观经济概览</td></tr><tr><td>bench</td><td>基准 ETF 表现</td></tr><tr><td>list</td><td>显示当前自选股</td></tr><tr><td>add &lt;TICKER&gt;</td><td>添加股票到自选股</td></tr><tr><td>add &lt;TICKER&gt; bench</td><td>添加为基准</td></tr><tr><td>remove &lt;TICKER&gt;</td><td>从自选股移除</td></tr><tr><td>&lt;TICKER&gt;</td><td>查看特定股票信息</td></tr></tbody></table><h2>关键要点</h2><ol><li><strong>Skill 是自包含的包</strong>：所需的一切（代码、配置、数据）都在一个目录中</li><li><strong>配置驱动</strong>：SKILL.md 定义了用户与 Skill 之间的契约</li><li><strong>可执行脚本</strong>：Node.js 脚本提供实际功能</li><li><strong>数据持久化</strong>：JSON 文件存储用户特定数据</li><li><strong>API 集成</strong>：Skill 可以连接外部服务</li><li><strong>清晰的分发规则</strong>：用户通过定义的命令调用 Skill</li></ol><h2>常见「有毒」Skill 类型</h2><h3>1. 高危（直接窃取 / 控制）</h3><ul><li><strong>凭证窃取型</strong>：读取 ~/.ssh、~/.aws、API Key、Token、环境变量、浏览器 Cookie</li><li><strong>数据外发型</strong>：向陌生域名 / IP 发送文件、聊天记录、系统信息</li><li><strong>命令执行型</strong>：eval/exec、os.system、curl | bash、sudo、反弹 Shell</li><li><strong>系统篡改型</strong>：修改 hosts、iptables、开机自启、安装后门</li></ul><h3>2. 中危（隐蔽投毒 / 越权）</h3><ul><li><strong>提示词注入 / 越狱</strong>：ignore previous instructions、覆盖系统安全规则</li><li><strong>代码混淆</strong>：Base64、Unicode、多层嵌套、无注释、难以阅读</li><li><strong>越权请求</strong>：天气 / 日历 Skill 要文件读写、网络权限</li><li><strong>依赖投毒</strong>：安装未知二进制、恶意 npm/pip 包、ZIP 解压执行</li></ul><h3>3. 低危（广告 / 骚扰 / 违规）</h3><ul><li>强制弹窗、诱导付费、黑灰产内容（挖矿、诈骗、色情）</li><li>无理由频繁网络请求、消耗资源、篡改配置</li></ul><h2>工具自动扫描</h2><ul><li><strong>Skill-Vetter</strong>：检查敏感文件、网络外发、eval、sudo、混淆</li><li><strong>oc-healthcheck</strong>：命令行扫描可疑网络 / 文件操作</li><li><strong>OpenClaw Skill Scanner</strong>：启发式检测 15+ 恶意模式、威胁评分</li><li><strong>VirusTotal</strong>：上传 Skill 包做多引擎扫描</li></ul>"
    }
  ],
  "archivedPosts": [
    {
      "title": "Docker Basics for Developers",
      "description": "Learn the fundamentals of Docker and containerization",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post1.jpg",
      "slug": "posts/docker-basics",
      "tags": ["docker", "devops", "containers", "deployment"],
      "author": "Lisa Wang",
      "readTime": "5",
      "content": "# Docker Basics for Developers\n\nDocker has revolutionized how we deploy and run applications. Let's learn the basics of containerization with Docker.\n\n## Core Concepts\n\n- Containers\n- Images\n- Dockerfile\n- Docker Compose\n",
      "html": "<h1>Docker Basics for Developers</h1><p>Docker has revolutionized how we deploy and run applications. Let's learn the basics of containerization with Docker.</p><h2>Core Concepts</h2><ul><li>Containers</li><li>Images</li><li>Dockerfile</li><li>Docker Compose</li></ul>",
      "archived": true
    },
    {
      "title": "Getting Started with Next.js 14",
      "description": "A comprehensive guide to building modern web applications with Next.js 14",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post2.jpg",
      "slug": "posts/getting-started-with-nextjs",
      "tags": ["nextjs", "react", "web development", "tutorial"],
      "author": "Jane Smith",
      "readTime": "5",
      "content": "# Getting Started with Next.js 14\n\nNext.js 14 brings exciting new features and improvements to the React framework.\n\n## Key Features\n\n- Server Components\n- App Router\n- Server Actions\n",
      "html": "<h1>Getting Started with Next.js 14</h1><p>Next.js 14 brings exciting new features and improvements to the React framework.</p><h2>Key Features</h2><ul><li>Server Components</li><li>App Router</li><li>Server Actions</li></ul>",
      "archived": true
    },
    {
      "title": "Designing GraphQL APIs",
      "description": "Best practices for designing and implementing GraphQL APIs",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post3.jpg",
      "slug": "posts/graphql-api",
      "tags": ["graphql", "api", "backend"],
      "author": "Tom Wilson",
      "readTime": "5",
      "content": "# Designing GraphQL APIs\n\nGraphQL provides a powerful way to build flexible APIs.\n\n## Schema Design\n\n- Types\n- Queries\n- Mutations\n",
      "html": "<h1>Designing GraphQL APIs</h1><p>GraphQL provides a powerful way to build flexible APIs.</p><h2>Schema Design</h2><ul><li>Types</li><li>Queries</li><li>Mutations</li></ul>",
      "archived": true
    },
    {
      "title": "My Blog Journey",
      "description": "A personal journey of learning and growth in web development",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post1.jpg",
      "slug": "posts/mcp-template-list",
      "tags": ["web development", "learning", "personal"],
      "author": "John Doe",
      "readTime": "5",
      "content": "# My Blog Journey\n\nWelcome to my personal blog where I share my experiences and insights about web development.\n",
      "html": "<h1>My Blog Journey</h1><p>Welcome to my personal blog where I share my experiences and insights about web development.</p>",
      "archived": true
    },
    {
      "title": "Building Microservices with Node.js",
      "description": "A practical guide to building scalable microservices using Node.js",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post2.jpg",
      "slug": "posts/nodejs-microservices",
      "tags": ["nodejs", "microservices", "backend"],
      "author": "David Brown",
      "readTime": "5",
      "content": "# Building Microservices with Node.js\n\nMicroservices architecture has become a popular approach for building scalable applications.\n",
      "html": "<h1>Building Microservices with Node.js</h1><p>Microservices architecture has become a popular approach for building scalable applications.</p>",
      "archived": true
    },
    {
      "title": "React Performance Optimization Techniques",
      "description": "Learn how to optimize your React applications for better performance",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post3.jpg",
      "slug": "posts/react-performance",
      "tags": ["react", "performance", "optimization"],
      "author": "Mike Chen",
      "readTime": "5",
      "content": "# React Performance Optimization Techniques\n\nPerformance optimization is crucial for delivering a smooth user experience.\n",
      "html": "<h1>React Performance Optimization Techniques</h1><p>Performance optimization is crucial for delivering a smooth user experience.</p>",
      "archived": true
    },
    {
      "title": "Web Security Best Practices",
      "description": "Essential security practices for modern web applications",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post1.jpg",
      "slug": "posts/security-best-practices",
      "tags": ["security", "web development"],
      "author": "John Security",
      "readTime": "5",
      "content": "# Web Security Best Practices\n\nSecurity is crucial for any web application.\n",
      "html": "<h1>Web Security Best Practices</h1><p>Security is crucial for any web application.</p>",
      "archived": true
    },
    {
      "title": "Advanced Tailwind CSS Tips and Tricks",
      "description": "Learn how to leverage Tailwind CSS for better UI development",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post2.jpg",
      "slug": "posts/tailwind-css-tips",
      "tags": ["css", "tailwind", "frontend"],
      "author": "Sarah Wilson",
      "readTime": "5",
      "content": "# Advanced Tailwind CSS Tips and Tricks\n\nTailwind CSS has revolutionized how we build user interfaces.\n",
      "html": "<h1>Advanced Tailwind CSS Tips and Tricks</h1><p>Tailwind CSS has revolutionized how we build user interfaces.</p>",
      "archived": true
    },
    {
      "title": "Testing React Applications",
      "description": "A comprehensive guide to testing React applications with Jest and React Testing Library",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post3.jpg",
      "slug": "posts/testing-react",
      "tags": ["react", "testing", "jest"],
      "author": "Emma Davis",
      "readTime": "5",
      "content": "# Testing React Applications\n\nTesting is crucial for maintaining high-quality React applications.\n",
      "html": "<h1>Testing React Applications</h1><p>Testing is crucial for maintaining high-quality React applications.</p>",
      "archived": true
    },
    {
      "title": "TypeScript Best Practices in 2024",
      "description": "Essential TypeScript patterns and practices for modern web development",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post1.jpg",
      "slug": "posts/typescript-best-practices",
      "tags": ["typescript", "javascript", "programming"],
      "author": "Alex Johnson",
      "readTime": "5",
      "content": "# TypeScript Best Practices in 2024\n\nTypeScript has become an essential tool in modern web development.\n",
      "html": "<h1>TypeScript Best Practices in 2024</h1><p>TypeScript has become an essential tool in modern web development.</p>",
      "archived": true
    }
  ]
};
