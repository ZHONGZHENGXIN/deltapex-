
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { FAQS, SOCIAL_LINKS, STUDENT_CASES } from './constants';
import Button from './components/Button';
import ModuleCard from './components/ModuleCard';
import FAQ from './components/FAQ';
import TptRulesView from './components/TptRulesView';
import LucidRulesView from './components/LucidRulesView';
import Earn2TradeRulesView from './components/Earn2TradeRulesView';
import ToponeRulesView from './components/ToponeRulesView';
import AboutUsView from './components/AboutUsView';
import InteractiveBackground from './components/InteractiveBackground';
import Reveal from './components/Reveal';
import Navbar from './components/Navbar';
// New Components
import PropFirmGuideView from './components/PropFirmGuideView';
import LucidSelectionGuideView from './components/LucidSelectionGuideView';
import TptReviewView from './components/TptReviewView';
import TopOneReviewView from './components/TopOneReviewView';
import TradovateGuideView from './components/TradovateGuideView';
import RithmicGuideView from './components/RithmicGuideView';
import PaymentGuideView from './components/PaymentGuideView';
import WiseGuideView from './components/WiseGuideView';
import RegistrationGuideView from './components/RegistrationGuideView';
import PrivacyPolicyView from './components/PrivacyPolicyView';
import TermsOfServiceView from './components/TermsOfServiceView';
import RefundPolicyView from './components/RefundPolicyView';
import ManageSubscriptionView from './components/ManageSubscriptionView';
import CourseView from './components/CourseView';
import CasesView from './components/CasesView';
import WhyOrderFlowView from './components/WhyOrderFlowView';
import WhyDeltapexView from './components/WhyDeltapexView';
import PropFirmToolsView from './components/PropFirmToolsView';
import FaqView from './components/FaqView';
import StudentVoicesSection from './components/StudentVoicesSection';
import MentorMessageSection from './components/MentorMessageSection';
import Footer from './components/Footer';

import Lenis from 'lenis';

import { motion, AnimatePresence } from 'framer-motion';
import { wechatQrBase64 as wechatQr } from './wechatQrData';

type ViewType = 'home' | 'tpt-rules' | 'lucid-rules' | 'earn2trade-rules' | 'topone-rules' | 'about' | 'prop-firm-guide' | 'lucid-selection-guide' | 'tpt-review' | 'topone-review' | 'tradovate-guide' | 'rithmic-guide' | 'payment-guide' | 'wise-guide' | 'registration-guide' | 'privacy' | 'terms' | 'refund' | 'manage-subscription' | 'course' | 'cases' | 'why-orderflow' | 'why-deltapex' | 'propfirm-tools' | 'faq';

function App() {
  // Use Hash Routing to determine view
  const getHashView = (): ViewType => {
    if (typeof window === 'undefined') return 'home';
    
    // Check pathname for cases.html
    if (window.location.pathname === '/cases.html' || window.location.pathname.endsWith('/cases.html')) {
        return 'cases';
    }

    // Get hash and remove any query parameters that might be attached
    const hash = window.location.hash.split('?')[0];
    switch (hash) {
      case '#tpt-rules': return 'tpt-rules';
      case '#lucid-rules': return 'lucid-rules';
      case '#earn2trade-rules': return 'earn2trade-rules';
      case '#topone-rules': return 'topone-rules';
      case '#about': return 'about';
      // New Routes
      case '#prop-firm-guide': return 'prop-firm-guide';
      case '#lucid-selection-guide': return 'lucid-selection-guide';
      case '#tpt-review': return 'tpt-review';
      case '#topone-review': return 'topone-review';
      case '#tradovate-guide': return 'tradovate-guide';
      case '#rithmic-guide': return 'rithmic-guide';
      case '#payment-guide': return 'payment-guide';
      case '#wise-guide': return 'wise-guide';
      case '#registration-guide': return 'registration-guide';
      // Policy Routes
      case '#privacy': return 'privacy';
      case '#terms': return 'terms';
      case '#refund': return 'refund';
      case '#manage-subscription': return 'manage-subscription';
      case '#course': return 'course';
      case '#why-orderflow': return 'why-orderflow';
      case '#why-deltapex': return 'why-deltapex';
      case '#cases': return 'cases';
      case '#propfirm-tools': return 'propfirm-tools';
      case '#faq': return 'faq';
      default: return 'home';
    }
  };

  const [currentView, setCurrentView] = useState<ViewType>(getHashView());
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isGlobalWeChatOpen, setIsGlobalWeChatOpen] = useState(false);
  const [copiedGlobal, setCopiedGlobal] = useState(false);
  const [showFloatingTooltip, setShowFloatingTooltip] = useState(false);

  // 极速预加载客服二维码，确保在中国大陆点击后 0 秒无延迟打开
  useEffect(() => {
    const img = new Image();
    img.src = wechatQr;
  }, []);

  const handleCopyGlobalWeChat = () => {
    navigator.clipboard.writeText("Zhong-Zhengxin");
    setCopiedGlobal(true);
    setTimeout(() => setCopiedGlobal(false), 2000);
  };
  
  const ctaRef = useRef<HTMLDivElement>(null);
  const [ctaRotate, setCtaRotate] = useState({ x: 0, y: 0 });
  const [ctaSpotlight, setCtaSpotlight] = useState({ x: 0, y: 0 });

  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Inertia easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Handle Routing Event
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentView(getHashView());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top when view changes
  useEffect(() => {
    // Native scroll
    window.scrollTo(0, 0);
    
    // Lenis scroll (immediate jump)
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [currentView]);

  const handleCtaMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ctaRef.current) return;
    const rect = ctaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 8;
    const rotateY = (centerX - x) / 12;
    setCtaRotate({ x: rotateX, y: rotateY });
    setCtaSpotlight({ x, y });
  }, []);

  const handleCtaMouseLeave = () => {
    setCtaRotate({ x: 0, y: 0 });
  };

  return (
    <div className="bg-white text-slate-600 font-sans antialiased relative min-h-screen overflow-x-hidden selection:bg-red-100 selection:text-primary">
      
      {/* NEW NAVBAR */}
      <Navbar />

      {/* 极速缓存预加载客服二维码（隐藏 DOM），保证中国大陆用户点按右下角图标 0 秒无延迟闪电加载 */}
      <img src={wechatQr} aria-hidden="true" className="hidden" alt="" />

      {/* Global Background - Visible on Home */}
      {currentView === 'home' && <InteractiveBackground />}

      {/* 图片预览 Modal (Lightbox) - Global */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-900/95 backdrop-blur-md px-4 py-8 cursor-zoom-out transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center">
            <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10 group scale-100 opacity-100 transition-all duration-300">
              <img 
                src={selectedImage} 
                className="max-w-full max-h-[85vh] object-contain" 
                alt="Trading Result Preview"
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="sync"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1200x800?text=Result+Loading...'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </div>
            
            <Button 
              variant="white"
              className="mt-8 rounded-full px-10 py-3 font-bold border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <i className="fa-solid fa-xmark mr-2"></i> 关闭预览
            </Button>
          </div>
        </div>
      )}

      {/* View Routing */}
      <div className="pt-24"> {/* Spacer for fixed Navbar */}
        {currentView === 'tpt-rules' && <TptRulesView />}
        {currentView === 'lucid-rules' && <LucidRulesView />}
        {currentView === 'earn2trade-rules' && <Earn2TradeRulesView />}
        {currentView === 'topone-rules' && <ToponeRulesView />}
        {currentView === 'about' && <AboutUsView />}
        
        {/* New Views */}
        {currentView === 'prop-firm-guide' && <PropFirmGuideView />}
        {currentView === 'lucid-selection-guide' && <LucidSelectionGuideView />}
        {currentView === 'tpt-review' && <TptReviewView />}
        {currentView === 'topone-review' && <TopOneReviewView />}
        {currentView === 'tradovate-guide' && <TradovateGuideView />}
        {currentView === 'rithmic-guide' && <RithmicGuideView />}
        {currentView === 'payment-guide' && <PaymentGuideView />}
        {currentView === 'wise-guide' && <WiseGuideView />}
        {currentView === 'registration-guide' && <RegistrationGuideView />}
        
        {/* Policy Views */}
        {currentView === 'privacy' && <PrivacyPolicyView />}
        {currentView === 'terms' && <TermsOfServiceView />}
        {currentView === 'refund' && <RefundPolicyView />}
        {currentView === 'manage-subscription' && <ManageSubscriptionView />}
        {currentView === 'course' && <CourseView />}
        {currentView === 'cases' && <CasesView />}
        {currentView === 'why-orderflow' && <WhyOrderFlowView />}
        {currentView === 'why-deltapex' && <WhyDeltapexView />}
        {currentView === 'propfirm-tools' && <PropFirmToolsView />}
        {currentView === 'faq' && <FaqView />}

        {/* HOME VIEW CONTENT */}
        {currentView === 'home' && (
          <>
            {/* Hero Section */}
            <header className="pt-20 pb-16 px-4 text-center max-w-7xl mx-auto relative z-10">
              <Reveal>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 animate-fade-in-up">Professional Trading Hub</span>
                  <h1 className="text-6xl md:text-8xl font-bold font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-primary to-slate-900 bg-[length:200%_auto] animate-shimmer select-none py-2 leading-[1.1]">
                    Deltapex 自营交易
                  </h1>
                </div>
              </Reveal>
            </header>

            <main className="max-w-7xl mx-auto px-6 md:px-12 pb-32 relative z-10">
              
              {/* 1. 学员有话说 (放在最前面) */}
              <StudentVoicesSection />

              {/* 2. 导师寄语 */}
              <MentorMessageSection />

              {/* 2. Deltapex 核心指南 (4大核心模块) */}
              <div className="mb-20">
                <Reveal>
                  <div className="text-center mb-12">
                    <span className="bg-red-100 text-red-600 text-xs md:text-sm font-extrabold px-4 py-1.5 rounded-full tracking-widest uppercase inline-block mb-3 border border-red-200/80 shadow-xs">
                      CORE SECTIONS
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                      Deltapex 核心指南
                    </h2>
                    <p className="text-slate-500 font-normal text-base md:text-lg mt-3 max-w-2xl mx-auto">
                      精选订单流逻辑、Deltapex 独家生态体系、常见问题答疑与完整课程体系
                    </p>
                  </div>
                </Reveal>

                <div className="space-y-6">
                  {/* Module 1: 1. 为什么选择订单流？ */}
                  <Reveal delay={0.1}>
                    <ModuleCard
                      id="why-orderflow"
                      title="1. 为什么选择订单流？"
                      index="01"
                      icon="fa-solid fa-chart-line"
                      href="#why-orderflow"
                    />
                  </Reveal>

                  {/* Module 2: 2. 为什么选择 Deltapex？ */}
                  <Reveal delay={0.2}>
                    <ModuleCard
                      id="why-deltapex"
                      title="2. 为什么选择 Deltapex？"
                      index="02"
                      icon="fa-solid fa-bolt"
                      href="#why-deltapex"
                    />
                  </Reveal>

                  {/* Module 3: 3. 你问我答 */}
                  <Reveal delay={0.3}>
                    <ModuleCard
                      id="faq"
                      title="3. 你问我答"
                      index="03"
                      icon="fa-solid fa-circle-question"
                      href="#faq"
                    />
                  </Reveal>

                  {/* Module 4: 4. 课程体系 */}
                  <Reveal delay={0.4}>
                    <ModuleCard
                      id="course"
                      title="4. 课程体系"
                      index="04"
                      icon="fa-solid fa-graduation-cap"
                      href="#course"
                    />
                  </Reveal>
                </div>
              </div>

              {/* 3. 社区简介 (放在最最后面) */}
              <div className="pt-2">
                <Reveal>
                  <div className="bg-slate-50/80 rounded-3xl p-8 md:p-12 border border-slate-200/80 text-center shadow-xs">
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 tracking-tight">
                      社区简介
                    </h3>
                    <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto mb-8 font-normal">
                      了解 Deltapex 交易社区背后的起源、使命与交易领袖
                    </p>
                    
                    <div className="flex items-center justify-center">
                      <div 
                        ref={ctaRef}
                        onMouseMove={handleCtaMouseMove}
                        onMouseLeave={handleCtaMouseLeave}
                        className="inline-block relative perspective-1000 group w-full sm:w-auto"
                        style={{
                          transform: `perspective(1000px) rotateX(${ctaRotate.x}deg) rotateY(${ctaRotate.y}deg)`,
                          transition: ctaRotate.x === 0 ? 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)' : 'none'
                        }}
                      >
                        <Button 
                          href="#about"
                          className="relative overflow-hidden px-12 py-5 text-lg rounded-2xl shadow-[0_20px_40px_-10px_rgba(211,47,47,0.3)] z-10 hover:shadow-[0_30px_60px_-15px_rgba(211,47,47,0.4)] transition-shadow duration-500 group w-full sm:w-auto font-bold"
                        >
                          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                          <span className="relative z-10 font-bold tracking-wide flex flex-col items-center">
                            社区简介
                            <span className="text-xs font-normal opacity-80 mt-0.5 uppercase tracking-widest">Community Profile</span>
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

            </main>

            <Footer />
          </>
        )}
      </div>

      {/* Global Floating Support Widgets (WeChat Only) */}
      <div className="fixed bottom-6 right-6 z-[49] flex flex-col items-end gap-3">
        <AnimatePresence>
          {showFloatingTooltip && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 12, x: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 12 }}
              className="bg-white border border-slate-200/80 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-5 w-80 text-left mb-3 relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-400"></div>
              
              {/* Arrow Indicator */}
              <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-slate-200/80 rotate-45"></div>
              
              {/* Dismiss Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowFloatingTooltip(false);
                }}
                className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 w-5 h-5 flex items-center justify-center rounded-full hover:bg-slate-100 transition-all text-xs"
                aria-label="Dismiss tooltip"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              <div className="flex items-start gap-3.5 pt-1">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500 shrink-0">
                  <i className="fa-brands fa-weixin text-xl"></i>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                    添加专属客服微信
                    <span className="text-[10px] bg-red-100 text-red-600 font-bold px-1 py-0.2 rounded-md animate-pulse">
                      FREE GIFTS
                    </span>
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">
                    🎁 <strong>立即获取：</strong>免费 ATAS 软件安装指导、内部专属订单流微观交易指南 PDF！
                  </p>
                  
                  {/* Copy area */}
                  <div className="mt-3 flex items-center justify-between bg-slate-50 p-2 rounded-xl border border-slate-200/60 hover:bg-slate-100/50 transition-colors">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">WeChat ID</span>
                      <span className="text-xs font-mono font-bold text-slate-700">Zhong-Zhengxin</span>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyGlobalWeChat();
                      }}
                      className="text-[10px] bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-3 py-1.5 rounded-lg active:scale-95 transition-all shadow-sm shadow-emerald-500/10 shrink-0"
                    >
                      {copiedGlobal ? "已复制!" : "复制"}
                    </button>
                  </div>

                  <button 
                    onClick={() => setIsGlobalWeChatOpen(true)}
                    className="mt-2.5 w-full text-center text-xs text-primary hover:text-primary-dark font-bold flex items-center justify-center gap-1 hover:underline transition-all"
                  >
                    点击显示微信二维码 <i className="fa-solid fa-qrcode text-sm"></i>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WeChat Floating Button */}
        <div className="relative group/btn">
          {/* Custom Hover Tooltip */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 scale-90 opacity-0 group-hover/btn:scale-100 group-hover/btn:opacity-100 transition-all duration-200 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-lg pointer-events-none">
            微信专属客服
          </span>
          <button
            onClick={() => {
              setIsGlobalWeChatOpen(true);
              setShowFloatingTooltip(false);
            }}
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-green-500 to-emerald-400 text-white flex items-center justify-center shadow-xl hover:shadow-[0_8px_30px_rgb(34,197,94,0.4)] hover:scale-105 active:scale-95 transition-all relative"
            aria-label="WeChat Customer Support"
          >
            <i className="fa-brands fa-weixin text-2xl hover:rotate-12 transition-transform duration-300"></i>

            {/* Interactive Help Ring */}
            <span className="absolute inset-0 rounded-full border-2 border-white/20 animate-pulse"></span>
          </button>
        </div>
      </div>

      {/* Global WeChat Contact Modal with Value Proposition */}
      <AnimatePresence>
        {isGlobalWeChatOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsGlobalWeChatOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            ></motion.div>
            
            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="relative bg-white border border-slate-100 rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden z-10 p-8 text-center"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsGlobalWeChatOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <i className="fa-solid fa-xmark text-sm"></i>
              </button>

              {/* Title Section */}
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-500 mx-auto mb-3">
                  <i className="fa-brands fa-weixin text-2xl"></i>
                </div>
                <h3 className="text-2xl font-black text-slate-900">添加 Deltapex 专属客服微信</h3>
                <p className="text-slate-500 text-sm mt-1">
                  获取课程解答与交易支持
                </p>
              </div>

              {/* QR Code Card */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-6 flex flex-col items-center justify-center relative">
                <div 
                  onClick={() => setSelectedImage(wechatQr)}
                  className="bg-white p-4 rounded-xl shadow-md border border-slate-200/60 w-48 h-48 relative overflow-hidden cursor-zoom-in hover:scale-105 hover:shadow-lg transition-all duration-300 group/qr"
                >
                  <img 
                    src={wechatQr} 
                    alt="WeChat QR Code" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                    loading="eager"
                    decoding="sync"
                  />
                  {/* Hover overlay indicator */}
                  <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover/qr:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <span className="bg-white/90 backdrop-blur-sm text-[10px] font-bold text-slate-700 px-2 py-1.5 rounded shadow-sm flex items-center gap-1">
                      <i className="fa-solid fa-magnifying-glass-plus text-primary"></i> 点击放大
                    </span>
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 mt-3 text-center">
                  打开微信，扫描上方二维码添加专属客服 (点击可放大)
                </div>
              </div>

              {/* Value Proposition Box */}
              <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-4 mb-6 text-left">
                <div className="text-emerald-800 font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <i className="fa-solid fa-gift"></i> 扫码添加客服即可获得：
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span><strong>免费 ATAS 软件：</strong> 软件安装指导、系统连接。</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span><strong>专属资料：</strong> 内部订单流微观结构与交易指南 PDF 资料。</span>
                  </li>
                </ul>
              </div>

              {/* WeChat ID copy section */}
              <div className="flex items-center justify-between bg-slate-50 hover:bg-slate-100 border border-slate-100 p-4 rounded-xl transition-colors">
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">微信号 / WeChat ID</div>
                  <div className="text-sm font-bold text-slate-800">Zhong-Zhengxin</div>
                </div>
                <button 
                  onClick={handleCopyGlobalWeChat}
                  className="flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white font-bold px-4 py-2 rounded-lg text-xs transition-colors shadow-sm"
                >
                  <i className="fa-regular fa-copy"></i>
                  {copiedGlobal ? "已复制!" : "复制微信号"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
