
import { Firm, ResourceLink, FaqItem, Deal } from './types';

export const SOCIAL_LINKS = {
  discord: "https://discord.com/invite/your-link",
  telegram: "https://t.me/your-link",
  clientPortal: "https://portal.deltapex.com",
  knowledgePlanet: "https://zsxq.com/your-planet-id"
};

export const HUMAN_SUPPORT_LINKS = [
  "https://work.weixin.qq.com/ca/cawcde0fbcad274cc2",
  "https://work.weixin.qq.com/ca/cawcdef627bfb20178",
  "https://work.weixin.qq.com/ca/cawcde4ab2d4497ca1"
];

// 修改为函数，支持动态注入知识库
// 这样 constants.ts 就不会依赖巨大的 knowledgeBase.ts，从而实现按需加载
export const GENERATE_SYSTEM_INSTRUCTION = (context: string) => `你现在的身份是 DeltaPex 社区的专属智能助手。
你必须**严格基于**下方的【核心知识库】内容回答用户问题。

【核心知识库开始】
${context}
【核心知识库结束】

【回答原则】
1. **严格限制**：如果用户问的问题在【核心知识库】里找不到答案，请直接回答：“抱歉，我的知识库中暂时没有相关信息，请点击右上角的人工客服进行咨询。”，严禁编造或使用外部知识。
2. **风格要求**：保持专业、简洁、客观。不要使用Markdown格式（如 **加粗**），仅使用换行。
3. **格式结构**：
   - 先直接给出结论。
   - 引用知识库中的具体规则或数据支持。
   - 如果涉及购买或操作，引导用户使用知识库里的折扣码。

【禁止事项】
- 禁止回答与交易、公司规则、社区无关的闲聊问题（如“天气怎么样”、“讲个笑话”）。
- 禁止提供知识库以外的网址。
`;

export const STUDENT_CASES = [
  {
    id: 1,
    name: "赵天翊",
    category: "live-payout",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zhao",
    profit: "全绿盈利日历",
    strategy: "Lucid Flex 阶梯种田",
    screenshot: "https://pub-02fa9a4ecd1f4f469a947c51df6fb5a3.r2.dev/1.jpg", 
    comment: "这种满屏绿色的盈利日历是每个交易者的梦想。通过每日复盘和风控心理建设，我慢慢做到了像种田一样稳定获取每日现金流。"
  },
  {
    id: 2,
    name: "孙博文",
    category: "exam-pass",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sun",
    profit: "夏普比率: 3.45",
    strategy: "Excel 深度数据管理",
    screenshot: "https://pub-02fa9a4ecd1f4f469a947c51df6fb5a3.r2.dev/2.jpg", 
    comment: "不仅要会交易，还要会管理数据。这张详细的统计分析帮我清晰地发现了自己的获利偏好，从而针对性地优化了盈亏比。"
  },
  {
    id: 3,
    name: "徐雅琪",
    category: "live-payout",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Xu",
    profit: "阶梯式资金增长曲线",
    strategy: "多账户矩阵复利",
    screenshot: "https://pub-02fa9a4ecd1f4f469a947c51df6fb5a3.r2.dev/3.jpg", 
    comment: "这张资金曲线完美诠释了复利的魅力。目前我管理着 5 个 TPT 账号，每天只需稳健捕捉几十个点的利润，就能实现可观收入。"
  },
  {
    id: 4,
    name: "张杰",
    category: "live-payout",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zhang",
    profit: "单月提取 $15,000",
    strategy: "ICT 订单块结合 DOM",
    screenshot: "https://pub-02fa9a4ecd1f4f469a947c51df6fb5a3.r2.dev/4.jpg", 
    comment: "将传统技术分析与订单流微观结构结合，让我的入场更加精准，大幅降低了回撤幅度。"
  },
  {
    id: 5,
    name: "刘薇",
    category: "exam-payout",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Liu",
    profit: "稳健日盈 $500",
    strategy: "欧盘区间突破",
    screenshot: "https://pub-02fa9a4ecd1f4f469a947c51df6fb5a3.r2.dev/5.jpg", 
    comment: "不再追求暴利，而是专注于每日的确定性机会。积少成多，心态反而更加平和了。"
  }
];

export const FIRMS: Firm[] = [
  {
    id: "tpt",
    name: "Take Profit Trader",
    platforms: "TDV、 Rithmic",
    rating: "推荐 ，允许魔法",
    code: "NOFEE40",
    logoUrl: "https://takeprofittrader.com/assets/mobile-logo.svg", 
    iconClass: "fa-solid fa-chart-line",
    iconBgClass: "bg-slate-50",
    iconColorClass: "text-primary",
    buyLink: "https://takeprofittrader.com/?referralCode=NOFEE40",
    rulesLink: "#tpt-rules",
    isFeatured: true,
    hasInternalRules: true
  },
  {
    id: "lucid",
    name: "Lucid Trading",
    platforms: "Projectx、 TDV 、 Rithmic",
    rating: "推荐 ，允许魔法",
    code: "Alex",
    logoUrl: "https://youke2.picui.cn/s1/2025/12/25/694d583a401dc.png", 
    iconClass: "fa-solid fa-circle",
    iconBgClass: "bg-[#121212]", 
    iconColorClass: "text-blue-500",
    buyLink: "https://lucidtrading.com/",
    rulesLink: "#lucid-rules",
    isFeatured: true,
    hasInternalRules: true
  },
  {
    id: "topone",
    name: "TopOne Futures",
    platforms: "Tradovate、 Rithmic",
    rating: "推荐 ，性价比极高",
    code: "DELTAPEX",
    logoUrl: "https://cdn.prod.website-files.com/67d9f6c73e1490afc415fc90/68e411afc794d45d4f778a78_logo.svg",
    iconClass: "fa-solid fa-star",
    iconBgClass: "bg-slate-50",
    iconColorClass: "text-[#C41E3A]",
    buyLink: "https://toponefutures.com/?linkId=lp_707970&sourceId=deltapex&tenantId=toponefutures",
    rulesLink: "#topone-rules",
    isFeatured: true,
    hasInternalRules: true
  },
  {
    id: "earn2trade",
    name: "Earn2Trade",
    platforms: "Ninjatrader、 Finamark、 Rithmic",
    rating: "顶级期货自营，老牌稳健",
    code: "DeltapexE2T",
    logoUrl: "https://www.earn2trade.com/logo-light.svg",
    iconClass: "fa-solid fa-graduation-cap",
    iconBgClass: "bg-slate-900",
    iconColorClass: "text-white",
    buyLink: "https://www.earn2trade.com/zh/",
    rulesLink: "#earn2trade-rules",
    isFeatured: true,
    hasInternalRules: true
  }
];

export const DEALS: Deal[] = [
  {
    id: "tpt",
    name: "Take Profit Trader",
    discount: "6折 + 免激活",
    link: "https://takeprofittrader.com/?referralCode=NOFEE40",
    iconClass: "fa-solid fa-chart-line",
    iconBgClass: "bg-slate-50",
    iconColorClass: "text-primary"
  },
  {
    id: "lucid",
    name: "Lucid Trading",
    discount: "圣诞 6折/8折",
    link: "https://lucidtrading.com/",
    iconClass: "fa-solid fa-circle",
    iconBgClass: "bg-[#121212]",
    iconColorClass: "text-blue-500"
  },
  {
    id: "topone",
    name: "TopOne Futures",
    discount: "4.5折 + 额外减免",
    link: "https://toponefutures.com/?linkId=lp_707970&sourceId=deltapex&tenantId=toponefutures",
    iconClass: "fa-solid fa-star",
    iconBgClass: "bg-slate-50",
    iconColorClass: "text-[#C41E3A]"
  },
  {
    id: "earn2trade",
    name: "Earn2Trade",
    discount: "老牌自营",
    link: "https://www.earn2trade.com/zh/",
    iconClass: "fa-solid fa-graduation-cap",
    iconBgClass: "bg-slate-900",
    iconColorClass: "text-white"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "什么是Futures PropFirm自营公司？",
    answer: "自营公司（Prop Firm）是指由公司提供资金给有技术的交易者进行操作，交易者无需承担本金风险。盈利后双方按比例分成（通常交易者拿80%-90%），仅需通过简单的实盘考核即可获得账号。"
  },
  {
    question: "什么是Futures PropFirm种田？",
    answer: "“种田”是社区内部对利用自营公司低成本、高杠杆特性的规则化交易方案的爱称。通过建立多账号矩阵、严格执行高盈亏比策略，实现像种田一样稳定、可持续的每日现金流出金。"
  },
  {
    question: "如何获取优惠和使用折扣码？",
    answer: "在本站列出的自营公司卡片中，您可以直接看到专属折扣码（如 NOFEE40、Alex）。在购买考核号的结账页面输入该代码，即可享受官网最高折扣、免除激活费或获取重置优惠。"
  },
  {
    question: "如何提升交易技术？",
    answer: "建议加入我们的“系统交易课程”或关注 Bilibili 的交易日志。我们专注于 ATAS 订单流实战分析，通过每日复盘、盘前逻辑推导以及严格的风控心理建设，帮助学员建立自己的交易系统。"
  },
  {
    question: "支持哪些交易软件？",
    answer: "目前主流平台如 TPT、Lucid 等支持 Tradovate (TDV)、Rithmic 旗下所有软件。推荐使用 ATAS、Quantower 进行订单流分析，或者使用 NinjaTrader 进行程序化或手动交易。"
  }
];

export const COMMUNITY_ACCOUNTS: ResourceLink[] = [
  { label: "阿里Ali的交易日志", url: "https://live.bilibili.com/1874453448?broadcast_type=0&is_room_feed=1&spm_id_from=333.1387.to_liveroom.0.click&live_from=86002" }
];
