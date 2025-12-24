
import { Firm, Deal, QuickLink, ResourceLink } from './types';

export const SOCIAL_LINKS = {
  discord: "https://discord.com/invite/your-link",
  telegram: "https://t.me/your-link",
  clientPortal: "https://portal.deltapex.com",
  knowledgePlanet: "https://zsxq.com/your-planet-id"
};

export const STUDENT_CASES = [
  {
    id: 1,
    name: "Alex 实战演示",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix", 
    profit: "+$1,100 (单日盈利)",
    strategy: "Deltapex 核心订单流策略",
    screenshot: "https://generativelanguage.googleapis.com/v1beta/files/sc_295_1739981881694_0.png", 
    comment: "这是近期在 ATAS 中展示的盈利曲线，清晰的阶梯式上涨验证了 Deltapex 趋势过滤逻辑的有效性。这种复利增长曲线是每位学员的目标。"
  },
  {
    id: 2,
    name: "林先生 (LIN)",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jack",
    profit: "Passed LucidPro",
    strategy: "Lucid Trading Pro Eval",
    screenshot: "./images/case-2.jpg", 
    comment: "收到 LucidPro 通过通知的那一刻真的太棒了！不用月费的自营公司确实是长久种田的首选。"
  },
  {
    id: 3,
    name: "收益仪表盘",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luna",
    profit: "+$4,070 (40.7% Gain)",
    strategy: "ATAS 订单流实战",
    screenshot: "./images/case-3.jpg", 
    comment: "7 天实现 40% 的账户增值。在 Deltapex 学习后，我更关注订单流的失衡点而非盲目猜顶。"
  },
  {
    id: 4,
    name: "日历种田选手",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver",
    profit: "月度盈利日历",
    strategy: "Lucid Flex 种田",
    screenshot: "./images/case-4.jpg", 
    comment: "每天稳定出金几百美金，这种满屏绿色的日历是每个交易者的梦想，感谢社区的复盘。"
  },
  {
    id: 5,
    name: "数据统计派",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zoey",
    profit: "夏普比率: 3.45",
    strategy: "Excel 严格风控",
    screenshot: "./images/case-5.jpg", 
    comment: "不仅要会交易，还要会管理数据。社区提供的统计模板帮我清晰发现了自己的获利偏好。"
  },
  {
    id: 6,
    name: "核心策略展示",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leo",
    profit: "PnL 稳健曲线",
    strategy: "Deltapex 趋势策略",
    screenshot: "./images/case-6.jpg", 
    comment: "虽然有回调，但曲线始终向上。这套系统最强大的地方在于能够过滤掉大部分震荡杂波。"
  },
  {
    id: 7,
    name: "成长记录",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    profit: "+$45,769 累计盈利",
    strategy: "长期复利增长",
    screenshot: "./images/case-7.jpg", 
    comment: "从 2 万美金起步，累计盈利突破 4.5 万。这是我坚持使用订单流技术一年来的成绩单。"
  },
  {
    id: 8,
    name: "稳定出金流",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Max",
    profit: "Daily Payouts",
    strategy: "自营多账户管理",
    screenshot: "./images/case-8.jpg", 
    comment: "利用多账户同步器，我可以同时管理 5 个出金号，每天平滑的盈利让我不再焦虑。"
  }
];

export const FIRMS: Firm[] = [
  {
    id: "tpt",
    name: "Take Profit Trader",
    platforms: "TDV、 Rithmic",
    rating: "推荐 ，允许魔法",
    code: "DP01",
    logoUrl: "https://takeprofittrader.com/assets/mobile-logo.svg", 
    iconClass: "fa-solid fa-chart-line",
    iconBgClass: "bg-slate-50",
    iconColorClass: "text-primary",
    buyLink: "https://takeprofittrader.com",
    rulesLink: "tpt-rules.html",
    isFeatured: true
  },
  {
    id: "zenit",
    name: "Zenit",
    platforms: "Projectx、 TDV",
    rating: "官方合作，大账户规模（300K)",
    code: "DELTA1",
    logoUrl: "https://checkout.zenitfunding.com/dynamic/logo",
    iconClass: "fa-solid fa-z",
    iconBgClass: "bg-slate-50",
    iconColorClass: "text-primary",
    buyLink: "https://checkout.zenitfunding.com/products?aff=",
    rulesLink: "#",
    isFeatured: true
  },
  {
    id: "lucid",
    name: "Lucid Trading",
    platforms: "Projectx、 TDV 、 Rithmic",
    rating: "推荐 ，允许魔法",
    code: "Alex",
    logoUrl: "https://lucidtrading.com/wp-content/uploads/2024/11/Group-58.png", 
    iconClass: "fa-solid fa-circle",
    iconBgClass: "bg-[#121212]", 
    iconColorClass: "text-blue-500",
    buyLink: "https://lucidtrading.com",
    rulesLink: "#",
    isFeatured: true
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
    rulesLink: "#",
    isFeatured: true
  },
  {
    id: "fundednext",
    name: "FundedNext",
    platforms: "TDV",
    rating: "推荐 ，允许魔法",
    code: "Alex",
    logoUrl: "https://fundednext.com/favicon.ico",
    iconClass: "",
    isCustomIcon: true,
    customIconText: "FN",
    iconBgClass: "bg-slate-900",
    iconColorClass: "text-white",
    buyLink: "https://fundednext.com/ja",
    rulesLink: "#"
  }
];

export const DEALS: Deal[] = [
  {
    id: "tpt-deal",
    name: "Take Profit Trader",
    discount: "7折免激活 (Code: DP01)",
    iconClass: "fa-solid fa-chart-line",
    iconBgClass: "bg-red-50",
    iconColorClass: "text-red-600",
    link: "https://takeprofittrader.com/?referralCode=DP01"
  },
  {
    id: "zenit-deal",
    name: "Zenit Funding",
    discount: "官方合作最高优惠 (Code: DELTA1)",
    iconClass: "fa-solid fa-z",
    iconBgClass: "bg-blue-50",
    iconColorClass: "text-blue-600",
    link: "https://checkout.zenitfunding.com/products?aff="
  },
  {
    id: "lucid-deal",
    name: "Lucid Trading",
    discount: "独家专属折扣 (Code: Alex)",
    iconClass: "fa-solid fa-circle",
    iconBgClass: "bg-slate-900",
    iconColorClass: "text-blue-400",
    link: "https://lucidtrading.com"
  },
  {
    id: "earn2trade-deal",
    name: "Earn2Trade",
    discount: "专属优惠 (Code: DeltapexE2T)",
    iconClass: "fa-solid fa-graduation-cap",
    iconBgClass: "bg-slate-900",
    iconColorClass: "text-yellow-500",
    link: "https://www.earn2trade.com/zh/"
  },
  {
    id: "fundednext-deal",
    name: "FundedNext",
    discount: "外盘推荐 (Code: Alex)",
    iconClass: "fa-solid fa-gem",
    iconBgClass: "bg-purple-50",
    iconColorClass: "text-purple-600",
    link: "https://fundednext.com/ja"
  }
];

export const FAQS = [
  "什么是Futures PropFirm自营公司？",
  "什么是Futures PropFirm种田？",
  "如何获取优惠和使用折扣码？",
  "如何提升交易技术？",
  "支持哪些交易软件？"
];

export const COMMUNITY_ACCOUNTS: ResourceLink[] = [
  { label: "阿里Ali的交易日志", url: "https://space.bilibili.com/3546653696985353/dynamic?spm_id_from=333.1365.list.card_avatar.click" }
];
