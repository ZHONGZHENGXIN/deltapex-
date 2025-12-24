
import { Firm, Deal, QuickLink, ResourceLink, FaqItem } from './types';

export const SOCIAL_LINKS = {
  discord: "https://discord.com/invite/your-link",
  telegram: "https://t.me/your-link",
  clientPortal: "https://portal.deltapex.com",
  knowledgePlanet: "https://zsxq.com/your-planet-id"
};

export const STUDENT_CASES = [
  {
    id: 1,
    name: "Deltapex 实战成员",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex", 
    profit: "+$1,100 (当日净盈)",
    strategy: "ATAS 订单流 + 趋势过滤",
    screenshot: "https://generativelanguage.googleapis.com/v1beta/files/sc_295_1739981881694_0.png", 
    comment: "这是近期在社区分享的实盘曲线，可以看到明显的资金阶梯式增长。核心逻辑在于过滤掉了美盘开盘初期的震荡，只捕捉高确定性的趋势波段。"
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
    answer: "在本站列出的自营公司卡片中，您可以直接看到专属折扣码（如 DP01、Alex）。在购买考核号的结账页面输入该代码，即可享受官网最高折扣、免除激活费或获取重置优惠。"
  },
  {
    question: "如何提升交易技术？",
    answer: "建议加入我们的“知识星球”或关注 Bilibili 的交易日志。我们专注于 ATAS 订单流实战分析，通过每日复盘、盘前逻辑推导以及严格的风控心理建设，帮助学员建立自己的交易系统。"
  },
  {
    question: "支持哪些交易软件？",
    answer: "目前主流平台如 TPT、Lucid 等支持 Tradovate (TDV)、Rithmic 旗下所有软件。推荐使用 ATAS、Quantower 进行订单流分析，或者使用 NinjaTrader 进行程序化或手动交易。"
  }
];

export const COMMUNITY_ACCOUNTS: ResourceLink[] = [
  { label: "阿里Ali的交易日志", url: "https://space.bilibili.com/3546653696985353/dynamic?spm_id_from=333.1365.list.card_avatar.click" }
];
