import { Firm, Deal, QuickLink, ResourceLink } from './types';

export const SOCIAL_LINKS = {
  discord: "https://discord.com/invite/your-link",
  telegram: "https://t.me/your-link",
  clientPortal: "https://portal.deltapex.com"
};

export const STUDENT_CASES = [
  {
    id: 1,
    name: "李先生 (阿强)",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    profit: "+$12,400",
    strategy: "Deltapex 订单流",
    screenshot: "https://images.unsplash.com/photo-1611974717482-48cd9720d582?auto=format&fit=crop&q=80&w=800",
    comment: "跟着 Alex 学了一年，终于通过了 150k TPT 账户，日结出金非常丝滑。"
  },
  {
    id: 2,
    name: "王女士 (Sindy)",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sasha",
    profit: "+$5,800",
    strategy: "PA 裸K + ATAS",
    screenshot: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
    comment: "Deltapex 的社区氛围很好，遇到问题大家都会帮忙，出金速度真的很快。"
  },
  {
    id: 3,
    name: "张同学 (TraderZ)",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zack",
    profit: "+$21,000",
    strategy: "150k 重置大法",
    screenshot: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=800",
    comment: "重置费只要100刀太香了，考了三次终于拿到了 Pro 账户，已经回本翻倍。"
  },
  {
    id: 4,
    name: "陈先生 (Brave)",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Brave",
    profit: "+$8,500",
    strategy: "静待时机策略",
    screenshot: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?auto=format&fit=crop&q=80&w=800",
    comment: "通过 Deltapex 链接注册有专属折扣，省下的钱都是利润。Deltapex yyds!"
  },
  {
    id: 5,
    name: "周先生 (Neo)",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neo",
    profit: "+$3,200",
    strategy: "25k 快速通关",
    screenshot: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80&w=800",
    comment: "作为新手，TPT的25k号是我第一个通过的自营账户，感谢Alex的指导。"
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
    iconClass: "fa-solid fa-cube",
    iconBgClass: "bg-slate-100",
    iconColorClass: "text-slate-800",
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