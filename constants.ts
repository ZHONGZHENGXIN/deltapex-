
import { Firm, Deal, QuickLink, ResourceLink } from './types';

export const SOCIAL_LINKS = {
  discord: "https://discord.com/invite/your-link",
  telegram: "https://t.me/your-link",
  clientPortal: "https://portal.deltapex.com",
  knowledgePlanet: "https://zsxq.com/your-planet-id" // 新增知识星球链接
};

export const STUDENT_CASES = [
  {
    id: 1,
    name: "李先生 (小李交易员)",
    avatar: "./images/avatar1.png", 
    profit: "+$15,200",
    strategy: "Deltapex 核心订单流",
    screenshot: "./images/screenshot1.jpg", 
    comment: "通过 Alex 的系统课程，我终于掌握了识别庄家轨迹的方法，这是我本月在 TPT 的出金记录。"
  },
  {
    id: 2,
    name: "王女士 (Sindy)",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sasha",
    profit: "+$5,800",
    strategy: "PA 裸K + ATAS",
    screenshot: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
    comment: "社区的盘后复盘对我非常有帮助，让我少走了很多弯路。现在我已经实现了稳定盈利。"
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
    id: "topone-deal",
    name: "Topone Futures",
    discount: "新平台限时优惠 (Code: DELTAPEX)",
    iconClass: "fa-solid fa-bolt",
    iconBgClass: "bg-yellow-50",
    iconColorClass: "text-yellow-600",
    link: "https://www.toponefutures.com/"
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
