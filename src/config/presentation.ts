import { Post } from '@/types/post';

interface PresentationConfig {
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  backButton: string;
  backButtonZh: string;
  presentations: Post[];
}

const htmlZhContent = `<figure><img src="/assets/images/posts/presentation_openclaw_pbc.jpg" alt="Openclaw全场景应用演示" /><figcaption>Openclaw全场景应用演示</figcaption></figure><h2>热身</h2><figure class="text-center"><img src="/assets/images/posts/colleague_to_tokens.jpg" alt="被毕业的同事" class="inline-block" /><figcaption>来源：<a href="https://mp.weixin.qq.com/s/RDKeMcCglkYoB9MDMM0mNA" target="_blank">微信文章：被毕业的同事，原来都变成了公司的Token</a></figcaption></figure><p>最近一篇关于同事被"毕业"后变成Token的文章引发了广泛讨论。文章指出，在AI时代，许多公司的员工被裁员后，发现自己的工作已经被AI所取代，这些AI角色被形象地称为"Token"——即消耗性的计算资源。</p><blockquote><p>核心观点：AI确实在替代部分工作，但我们不必过度悲观。Openclaw能做很多我们不愿意做的事情，这恰恰是机遇而非危机。</p></blockquote><h2>期待</h2><figure class="text-center"><img src="/assets/images/posts/typeless.png" alt="Typeless语音键盘" class="inline-block" /></figure><p><a href="https://www.typeless.com/refer?code=PYAO0L2" target="_blank">I've been using Typeless, a Voice keyboard that makes you smarter. Use my link to join and get a $5 credit for Typeless Pro</a></p><blockquote><p><strong>键盘是个错误</strong><br/>150年来，我们一直迫使思想通过指尖流动。键盘不是为人类建造的，它是为机器建造的——而我们适应了它。那个时代已经结束。</p><p><strong>语音是我们的默认方式</strong><br/>它是我们唯一自然的交流方式。从出生起，我们学的是说话，而不是打字。交谈是本能、effortless、人性化的。打字则完全不具备这些特质。</p><p><strong>这不仅仅是一个工具，而是一个转折点</strong><br/>键盘已成为遗迹。您的语音才是您的默认方式。Typeless让您解放它。欢迎来到打字的终结。欢迎来到Typeless。</p><p><em>来源：<a href="https://www.typeless.com/manifesto" target="_blank">Typeless Manifesto</a></em></p></blockquote><h2>气候</h2><figure class="text-center"><img src="/assets/images/posts/presentation_climate_risk_system.jpg" alt="气候风险系统" class="inline-block" /></figure><h2>安装</h2><ul><li><a href="https://cloud.tencent.com/act/pro/openclaw" target="_blank">腾讯云-在云端秒级部署OpenClaw全能助手</a></li><li><a href="https://www.feishu.cn/content/article/7602519239445974205" target="_blank">字节跳动-一文完全搞懂OpenClaw（Clawdbot）附飞书对接教程！</a></li><li><a href="https://jvs.wuying.aliyun.com/" target="_blank">阿里云-JVSClaw智在进化，快乐养虾</a></li></ul><figure><img src="/assets/images/posts/coze.jpg" alt="Coze扣子编程" /></figure><p>今天我们会用到扣子（Coze）编程。扣子是一个强大的AI开发平台，让我能够快速构建和部署AI应用。</p><p><a href="https://www.coze.cn/studio?invite_code=be729af85ea545f29e1ebeeffc3c4b5d" target="_blank">点击这里加入扣子编程</a></p><h2>扣子</h2><p>我来演示几个在扣子中的案例！</p><p><strong>提示词1：生成网页系统</strong></p><pre><code>你是一个专业的AI前端开发助手。请帮我生成一个完整的网页系统，用于"三八妇女节出行意见收集"。

功能需求：
1. 支持在线填写表单（包含以下字段）：
   - 姓名
   - 部门
   - 出行日期（单选：3月8日/3月9日/3月10日）
   - 出行方式（单选：自驾/公共交通/步行）
   - 目的地偏好（多选：公园/商场/博物馆/餐厅/其他）
   - 预计人数
   - 预算范围
   - 备注说明
2. 支持AI润色功能：用户输入内容后，AI自动润色优化
3. 支持纸质版上传：用户可以上传手填表格的照片，AI自动OCR识别并填入表单
4. 表单数据支持修改和二次润色
5. 提交后显示汇总信息

请生成完整的HTML/CSS/JavaScript代码，确保界面美观、响应式设计。</code></pre><p><strong>提示词2：生成工作流</strong></p><pre><code>你是一个专业的AI工作流设计助手。请帮我设计一个扣子(Coze)工作流，用于"三八妇女节出行意见收集"的批量表格识别与汇总。

工作流设计：
1. 触发器：用户批量上传多张手填表格照片
2. OCR识别节点：对每张图片进行文字识别，提取表单数据
3. 数据处理节点：对识别结果进行清洗、格式化、统一字段
4. 表格生成节点：将处理后的数据生成Excel/CSV表格
5. 输出节点：返回汇总表格和统计信息（出行日期分布、目的地偏好统计等）

请用JSON格式描述工作流节点和连线关系。</code></pre><h2>美团</h2><figure class="text-center"><img src="/assets/images/posts/tabbit.png" alt="美团Tabbit" class="inline-block" /></figure><div style="background-color: #ff6b6b; color: white; padding: 20px; border-radius: 10px; text-align: center; margin: 20px 0;"><strong>请帮我下载汉口银行近十年内的年报</strong></div><h2>手机</h2><p><strong>如果没有openclaw，我会怎么做？</strong></p><pre><code>{// 配置项：替换为你的学习软件包名
const TARGET_APP_PACKAGE = "com.xxx.xxx";

// 监测间隔：每3秒检测一次（可调整）
const CHECK_INTERVAL = 3000;

// 核心函数：仅在目标APP前台时，检测并关闭弹窗
function closePopup() {
    try {
        // 1. 先判断当前前台是否是学习软件，不是则直接跳过
        let currentPackage = currentPackage();
        if (currentPackage !== TARGET_APP_PACKAGE) {
            return; // 非目标APP，不执行任何操作
        }

        // 2. 精准识别弹窗的"确定"按钮（仅点击，无其他交互）
        let confirmBtn = text("确定").findOne(2000);
        if (confirmBtn) {
            // 用press代替click，减少系统交互冲突
            confirmBtn.press(); 
            console.log("弹窗已关闭，时间：" + new Date().toLocaleString());
        }
    } catch (e) {
        // 静默处理，不触发任何额外操作
    }
}

// 安全循环：避免高频操作触发系统防护
console.log("脚本已启动，仅监测指定学习软件弹窗");
while (true) {
    closePopup();
    sleep(CHECK_INTERVAL);
}}</code></pre><h2>魔法</h2><figure class="text-center"><img src="/assets/images/posts/notion_household_finance_datasources.png" alt="notion截图" class="inline-block" /></figure><p style="text-align: center; color: gray; margin-top: 10px;">notion截图</p><div style="background-color: #e8f5e9; color: #2e7d32; padding: 20px; border-radius: 10px; text-align: center; margin: 20px 0; border-left: 5px solid #4caf50;"><strong>不好意思，我们现在才开始进入Openclaw的世界</strong></div><h2>安全</h2><figure class="text-center"><img src="/assets/images/posts/allegro.png" alt="安全" class="inline-block" /></figure><div style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; margin: 20px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"><h3 style="margin: 0 0 10px 0; color: #333;">深入理解 Skill：Finance Lite 深度解析</h3><p style="margin: 0 0 15px 0; color: #666; font-size: 14px;">在这篇文章中，我将带您深入了解 Skill 在实践中是什么样子，以 Finance Lite skill 为真实案例。Skill 本质上是一种可重用的工具，通过专门的知识、工作流程或集成来扩展 AI 助手的能力。</p><a href="/posts/understanding-skill-finance-lite" style="display: inline-block; background-color: #007bff; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-size: 14px;">阅读全文</a></div>`;

const htmlEnContent = `<figure><img src="/assets/images/posts/presentation_openclaw_pbc.jpg" alt="Openclaw Full Scenario Application Demo" /><figcaption>Openclaw Full Scenario Application Demo</figcaption></figure><h2>Warm-up</h2><figure class="text-center"><img src="/assets/images/posts/colleague_to_tokens.jpg" alt="Colleagues who got 'graduated'" class="inline-block" /><figcaption>Source: <a href="https://mp.weixin.qq.com/s/RDKeMcCglkYoB9MDMM0mNA" target="_blank">WeChat Article: The 'Graduated' Colleagues Turned into Company's Tokens</a></figcaption></figure><p>A recent article about colleagues being "graduated" and turned into Tokens has sparked widespread discussion. The article points out that in the AI era, many company employees who were laid off found that their jobs had been replaced by AI. These AI roles are vividly referred to as "Tokens" - consumable computing resources.</p><blockquote><p>Core viewpoint: AI is indeed replacing some jobs, but we don't need to be overly pessimistic. Openclaw can do many things we don't want to do, which is an opportunity rather than a crisis.</p></blockquote><h2>Expectation</h2><figure class="text-center"><img src="/assets/images/posts/typeless.png" alt="Typeless Voice Keyboard" class="inline-block" /></figure><p><a href="https://www.typeless.com/refer?code=PYAO0L2" target="_blank">I've been using Typeless, a Voice keyboard that makes you smarter. Use my link to join and get a $5 credit for Typeless Pro</a></p><blockquote><p><strong>The keyboard is a mistake</strong><br/>For 150 years, we've been forcing thoughts to flow through our fingertips. The keyboard wasn't built for humans - it was built for machines. And we adapted to it. That era is over.</p><p><strong>Voice is our default mode</strong><br/>It's our only natural way of communication. From birth, we learn to speak, not to type. Conversation is instinctive, effortless, and human. Typing has none of those qualities.</p><p><strong>This is not just a tool, but a turning point</strong><br/>The keyboard has become a relic. Your voice is your default mode. Typeless frees it. Welcome to the end of typing. Welcome to Typeless.</p><p><em>Source: <a href="https://www.typeless.com/manifesto" target="_blank">Typeless Manifesto</a></em></p></blockquote><h2>Climate</h2><figure class="text-center"><img src="/assets/images/posts/presentation_climate_risk_system.jpg" alt="Climate Risk System" class="inline-block" /></figure><h2>Installation</h2><ul><li><a href="https://cloud.tencent.com/act/pro/openclaw" target="_blank">Tencent Cloud - Deploy OpenClaw All-Powerful Assistant in the Cloud</a></li><li><a href="https://www.feishu.cn/content/article/7602519239445974205" target="_blank">ByteDance - Complete Guide to OpenClaw (Clawdbot) with Feishu Integration Tutorial!</a></li><li><a href="https://jvs.wuying.aliyun.com/" target="_blank">Alibaba Cloud - JVSClaw: Evolving Intelligence, Happy Shrimp Raising</a></li></ul><figure><img src="/assets/images/posts/coze.jpg" alt="Coze Programming" /></figure><p>Today we'll use Coze programming. Coze is a powerful AI development platform that allows me to quickly build and deploy AI applications.</p><p><a href="https://www.coze.cn/studio?invite_code=be729af85ea545f29e1ebeeffc3c4b5d" target="_blank">Click here to join Coze Programming</a></p><h2>Coze</h2><p>Let me demonstrate a few cases in Coze!</p><p><strong>Prompt 1: Generate Web System</strong></p><pre><code>You are a professional AI frontend development assistant. Please help me generate a complete web system for "Women's Day Travel Opinion Collection".

Functionality Requirements:
1. Support online form filling (including the following fields):
   - Name
   - Department
   - Travel date (single choice: March 8/9/10)
   - Travel method (single choice: self-driving/public transport/walking)
   - Destination preference (multiple choice: park/museum/restaurant/other)
   - Estimated number of people
   - Budget range
   - Remarks
2. AI polish function: AI automatically polishes user input
3. Support paper version upload: Users can upload photos of handwritten forms, AI automatically OCR recognizes and fills the form
4. Form data supports modification and re-polishing
5. Display summary information after submission

Please generate complete HTML/CSS/JavaScript code with beautiful UI and responsive design.</code></pre><p><strong>Prompt 2: Generate Workflow</strong></p><pre><code>You are a professional AI workflow design assistant. Please help me design a Coze workflow for batch form recognition and summary of "Women's Day Travel Opinion Collection".

Workflow Design:
1. Trigger: User batch uploads multiple handwritten form photos
2. OCR recognition node: Perform text recognition on each image, extract form data
3. Data processing node: Clean, format, and unify fields of recognized results
4. Table generation node: Generate Excel/CSV from processed data
5. Output node: Return summary table and statistics (travel date distribution, destination preference statistics, etc.)

Please describe workflow nodes and connection relationships in JSON format.</code></pre><h2>Meituan</h2><figure class="text-center"><img src="/assets/images/posts/tabbit.png" alt="Meituan Tabbit" class="inline-block" /></figure><div style="background-color: #ff6b6b; color: white; padding: 20px; border-radius: 10px; text-align: center; margin: 20px 0;"><strong>Please help me download Hankou Bank's annual reports from the past 10 years</strong></div><h2>Phone</h2><p><strong>What would I do without Openclaw?</strong></p><pre><code>{// Config: Replace with your learning app package name
const TARGET_APP_PACKAGE = "com.xxx.xxx";

// Check interval: Check every 3 seconds (adjustable)
const CHECK_INTERVAL = 3000;

// Core function: Only detect and close popups when target APP is in foreground
function closePopup() {
    try {
        // 1. First check if the current foreground app is the learning app, skip if not
        let currentPackage = currentPackage();
        if (currentPackage !== TARGET_APP_PACKAGE) {
            return; // Not target APP, skip any operations
        }

        // 2. Precisely identify the popup's "Confirm" button (click only, no other interaction)
        let confirmBtn = text("确定").findOne(2000);
        if (confirmBtn) {
            // Use press instead of click to reduce system interaction conflicts
            confirmBtn.press(); 
            console.log("Popup closed at: " + new Date().toLocaleString());
        }
    } catch (e) {
        // Silent processing, no additional operations triggered
    }
}

// Safe loop: Avoid high-frequency operations triggering system protection
console.log("Script started, monitoring specified learning app popups only");
while (true) {
    closePopup();
    sleep(CHECK_INTERVAL);
}}</code></pre><h2>Magic</h2><figure class="text-center"><img src="/assets/images/posts/notion_household_finance_datasources.png" alt="notion screenshot" class="inline-block" /></figure><p style="text-align: center; color: gray; margin-top: 10px;">notion screenshot</p><div style="background-color: #e8f5e9; color: #2e7d32; padding: 20px; border-radius: 10px; text-align: center; margin: 20px 0; border-left: 5px solid #4caf50;"><strong>Sorry, we're only now entering the world of Openclaw</strong></div><h2>Security</h2><figure class="text-center"><img src="/assets/images/posts/allegro.png" alt="Security" class="inline-block" /></figure><div style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; margin: 20px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"><h3 style="margin: 0 0 10px 0; color: #333;">Understanding Skill: A Deep Dive into Finance Lite</h3><p style="margin: 0 0 15px 0; color: #666; font-size: 14px;">In this post, I'll walk you through what a Skill looks like in practice, using the Finance Lite skill as a real example. A Skill is essentially a reusable tool that extends an AI assistant's capabilities with specialized knowledge, workflows, or integrations.</p><a href="/posts/understanding-skill-finance-lite" style="display: inline-block; background-color: #007bff; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-size: 14px;">Read More</a></div>`;

export const presentationConfig: PresentationConfig = {
  "title": "Presentation",
  "titleZh": "演示",
  "description": "From Bank Annual Report Management System to Personal Efficiency Improvement - Openclaw Full Scenario Application Demo",
  "descriptionZh": "从银行年报管理系统到个人效率提升——Openclaw全场景应用演示",
  "backButton": "Back to Home",
  "backButtonZh": "返回首页",
  "presentations": [
    {
      "title": "From Bank Annual Report Management System to Personal Efficiency Improvement - Openclaw Full Scenario Application Demo",
      "titleZh": "从银行年报管理系统到个人效率提升——Openclaw全场景应用演示",
      "description": "Demonstrating Openclaw's full-scenario applications in bank annual report management and personal efficiency improvement",
      "descriptionZh": "展示Openclaw在银行年报管理和个人效率提升方面的全场景应用",
      "date": "2026-03-31",
      "image": "/assets/images/posts/presentation_openclaw_pbc.jpg",
      "slug": "presentation/openclaw-demo",
      "tags": ["Openclaw", "Efficiency", "Bank Annual Report", "Demo"],
      "tagsZh": ["Openclaw", "效率提升", "银行年报", "演示"],
      "author": "Johnson",
      "readTime": "10",
      "content": "English content",
      "contentZh": "中文内容",
      "html": htmlEnContent,
      "htmlZh": htmlZhContent,
      "archived": false
    }
  ]
};
