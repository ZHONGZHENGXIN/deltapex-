import { Firm, Deal, QuickLink, ResourceLink } from './types';

export const SITE_CONFIG = {
  // Logo 已移除
};

export const SOCIAL_LINKS = {
  discord: "https://discord.com/invite/your-link",
  telegram: "https://t.me/your-link",
  clientPortal: "https://portal.deltapex.com"
};

export const DEALS: Deal[] = [
  {
    id: "tpt",
    name: "Take Profit Trader",
    discount: "折扣码: Alex 6折免激活",
    iconClass: "fa-solid fa-chart-line",
    iconBgClass: "bg-slate-100",
    iconColorClass: "text-slate-700",
    link: "https://takeprofittrader.com"
  },
  {
    id: "lucid",
    name: "Lucid",
    discount: "折扣码: Alex 终身低价",
    iconClass: "fa-solid fa-cube",
    iconBgClass: "bg-slate-100",
    iconColorClass: "text-slate-700",
    link: "https://lucidtrading.com"
  },
  {
    id: "tradeify",
    name: "Tradeify",
    discount: "折扣码: Alex 五折首月",
    iconClass: "fa-solid fa-money-bill-wave",
    iconBgClass: "bg-green-500",
    iconColorClass: "text-white",
    link: "https://tradeify.co/"
  },
  {
    id: "tradeday",
    name: "Tradeday",
    discount: "折扣码: Alex 用ProjectX做TPT",
    iconClass: "fa-solid fa-chart-simple",
    iconBgClass: "bg-blue-600",
    iconColorClass: "text-white",
    link: "https://members.tradeday.com/"
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
    logoUrl: "https://lucidtrading.com/wp-content/uploads/2025/02/Untitled-design-2025-10-22T181841.622.png.webp",
    iconClass: "fa-solid fa-cube",
    iconBgClass: "bg-black", 
    iconColorClass: "text-primary",
    buyLink: "https://lucidtrading.com",
    rulesLink: "#",
    isFeatured: true
  },
  {
    id: "fundednext",
    name: "FundedNext",
    platforms: "TDV",
    rating: "推荐 ，允许魔法",
    code: "Alex",
    logoUrl: "https://fundednext.com/_next/image?url=https%3A%2F%2Fdirslur24ie1a.cloudfront.net%2Ffundednext%2FFundednext%20logo_White%20(1).png&w=384&q=75",
    iconClass: "",
    isCustomIcon: true,
    customIconText: "FN",
    iconBgClass: "bg-slate-900",
    iconColorClass: "text-white",
    buyLink: "https://fundednext.com/ja",
    rulesLink: "#"
  },
  {
    id: "topone",
    name: "Topone Futures",
    platforms: "Projectx",
    rating: "推荐 ，允许魔法",
    code: "DELTAPEX",
    logoUrl: "https://cdn.prod.website-files.com/67d9f6c73e1490afc415fc90/68e411afc794d45d4f778a78_logo.svg",
    iconClass: "fa-solid fa-bolt",
    iconBgClass: "bg-slate-50",
    iconColorClass: "text-primary",
    buyLink: "https://www.toponefutures.com/",
    rulesLink: "#"
  },
  {
    id: "tradeify",
    name: "Tradeify",
    platforms: "Projectx、 TDV",
    rating: "推荐 ，允许魔法",
    code: "Alex",
    logoUrl: "https://cdn.prod.website-files.com/679b064a680c614548672a06/67b4273005993910d632c26d_horizontal-logo%20(1).svg",
    iconClass: "fa-solid fa-leaf",
    iconBgClass: "bg-green-500",
    iconColorClass: "text-white",
    buyLink: "https://tradeify.co/",
    rulesLink: "#"
  },
  {
    id: "topstep",
    name: "Topstep",
    platforms: "Projectx",
    rating: "推荐 ，允许魔法 (香港不能进live)",
    code: "Alex",
    iconClass: "",
    isCustomIcon: true,
    customIconText: "T",
    iconBgClass: "bg-slate-900 border border-slate-700",
    iconColorClass: "text-white",
    buyLink: "https://dashboard.topstep.com/",
    rulesLink: "#"
  }
];

export const FAQS = [
  "什么是Futures PropFirm自营公司？",
  "什么是Futures PropFirm种田？",
  "如何获取优惠和使用折扣码？",
  "如何提升交易技术？",
  "支持哪些交易软件？"
];

export const OTHER_RESOURCES: ResourceLink[] = [
  { label: "PA/ICT学习资料", url: "https://youtube.com" },
  { label: "RISE注册教程", url: "#" },
  { label: "交易软件连接教程", url: "#" },
  { label: "Ninja使用教程", url: "#" },
  { label: "Ninja连接教程", url: "#" },
  { label: "出金W8表格填写", url: "#" },
  { label: "考试账户对比表", url: "#" },
  { label: "优秀学员案例", url: "#" },
  { label: "ProjectX平台汇总", url: "#" },
];

export const COMMUNITY_ACCOUNTS: ResourceLink[] = [
  { label: "阿里Ali的交易日志", url: "https://space.bilibili.com/3546653696985353/dynamic?spm_id_from=333.1365.list.card_avatar.click" }
];