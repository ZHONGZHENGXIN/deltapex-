
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { FIRMS, FAQS, COMMUNITY_ACCOUNTS, SOCIAL_LINKS, STUDENT_CASES } from './constants';
import Button from './components/Button';
import FirmCard from './components/FirmCard';
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
import Footer from './components/Footer';

import Lenis from 'lenis';

type ViewType = 'home' | 'tpt-rules' | 'lucid-rules' | 'earn2trade-rules' | 'topone-rules' | 'about' | 'prop-firm-guide' | 'lucid-selection-guide' | 'tpt-review' | 'topone-review' | 'tradovate-guide' | 'rithmic-guide' | 'payment-guide' | 'wise-guide' | 'registration-guide' | 'privacy' | 'terms' | 'refund' | 'manage-subscription' | 'course' | 'cases';

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
      default: return 'home';
    }
  };

  const [currentView, setCurrentView] = useState<ViewType>(getHashView());
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
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

      {/* Global Background - Visible on Home */}
      {currentView === 'home' && <InteractiveBackground />}

      {/* 图片预览 Modal (Lightbox) - Global */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-md px-4 py-8 cursor-zoom-out transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center">
            <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10 group scale-100 opacity-100 transition-all duration-300">
              <img 
                src={selectedImage} 
                className="max-w-full max-h-[85vh] object-contain" 
                alt="Trading Result Preview"
                referrerPolicy="no-referrer"
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

        {/* HOME VIEW CONTENT */}
        {currentView === 'home' && (
          <>
            {/* Hero Section */}
            <header className="pt-20 pb-32 px-4 text-center max-w-7xl mx-auto relative z-10">
              <Reveal>
                <div className="flex flex-col items-center justify-center mb-8">
                  <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-6 animate-fade-in-up">Professional Trading Hub</span>
                  <h1 className="text-6xl md:text-8xl font-bold font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-primary to-slate-900 bg-[length:200%_auto] animate-shimmer select-none py-2 leading-[1.1]">
                    Deltapex 自营交易
                  </h1>
                </div>
                
                <p className="text-slate-500 mb-16 text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto">
                  ATAS订单流中文社区
                </p>

                <div className="flex flex-col items-center gap-4">
                  {/* Primary CTA - Course */}
                  <Button 
                    href="#course"
                    className="relative overflow-hidden px-14 py-6 text-xl rounded-2xl shadow-[0_30px_60px_-15px_rgba(211,47,47,0.3)] z-10 hover:shadow-[0_40px_80px_-20px_rgba(211,47,47,0.4)] transition-shadow duration-500 group"
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    <span className="relative z-10 font-bold tracking-wide flex flex-col items-center">
                      加入课程
                      <span className="text-sm font-normal opacity-80 mt-1 uppercase tracking-widest">Join the Course</span>
                    </span>
                  </Button>

                  {/* Secondary CTA - About Us */}
                  <div 
                    ref={ctaRef}
                    onMouseMove={handleCtaMouseMove}
                    onMouseLeave={handleCtaMouseLeave}
                    className="inline-block relative perspective-1000 group"
                    style={{
                      transform: `perspective(1000px) rotateX(${ctaRotate.x}deg) rotateY(${ctaRotate.y}deg)`,
                      transition: ctaRotate.x === 0 ? 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)' : 'none'
                    }}
                  >
                    <Button 
                      href="#about"
                      variant="white"
                      className="relative overflow-hidden px-8 py-3 text-sm rounded-xl border border-slate-200 text-slate-500 hover:border-primary/30 hover:text-primary bg-white shadow-sm hover:shadow-md transition-all duration-500"
                    >
                      <span className="relative z-10 font-medium tracking-wide">关于我们</span>
                    </Button>
                  </div>
                </div>
              </Reveal>
            </header>

            <main className="max-w-7xl mx-auto px-6 md:px-12 pb-32 relative z-10">
              
              {/* Firms List Section */}
              <div id="firms" className="scroll-mt-32 mb-40">
                <Reveal>
                  <h2 className="text-3xl font-bold text-slate-900 text-center mb-16 tracking-tight">
                    Futures Propfirm 汇总
                  </h2>
                </Reveal>
                <div className="space-y-6">
                  {FIRMS.map((firm, index) => (
                    <Reveal key={firm.id} delay={index * 0.1}>
                      <FirmCard firm={firm} />
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* 交易工具模块 (Tools Section) */}
              <Reveal className="mb-40">
                <div id="tools" className="max-w-6xl mx-auto scroll-mt-32">
                   <div className="bg-gradient-to-br from-slate-50 to-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.08)] relative overflow-hidden group">
                      {/* Background Decoration */}
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none transition-transform duration-1000 group-hover:scale-110"></div>

                      <div className="relative z-10">
                         <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-[0.25em] text-xs uppercase mb-4 block">Essential Tools</span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">交易必备工具</h2>
                            <p className="text-slate-500 font-light text-xl">工欲善其事，必先利其器</p>
                         </div>

                         <div className="grid grid-cols-1 max-w-3xl mx-auto gap-8 md:gap-12">
                            {/* ATAS Card */}
                            <a 
                              href="https://atas.net/registration-demo/?rs=oft365200"
                              target="_blank"
                              className="flex flex-col md:flex-row items-center p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-2xl hover:border-blue-200 hover:-translate-y-2 transition-all duration-500 group/atas"
                            >
                               <div className="w-24 h-24 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 group-hover/atas:bg-blue-500 group-hover/atas:text-white transition-all duration-300 md:mr-8 mb-6 md:mb-0 shrink-0 shadow-inner">
                                  <i className="fa-solid fa-chart-bar text-4xl"></i>
                                </div>
                               <div className="flex-1 text-center md:text-left">
                                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Order Flow Software</div>
                                  <div className="text-2xl font-bold text-slate-800 group-hover/atas:text-blue-600 transition-colors mb-2">ATAS 注册下载</div>
                                  <div className="text-base text-slate-500 group-hover/atas:text-blue-400">专业订单流软件</div>
                               </div>
                               <div className="mt-6 md:mt-0 w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover/atas:bg-blue-100 group-hover/atas:text-blue-600 transition-colors transform group-hover/atas:translate-x-2 duration-300">
                                  <i className="fa-solid fa-arrow-right text-xl"></i>
                               </div>
                            </a>
                         </div>
                      </div>
                   </div>
                </div>
              </Reveal>

              {/* Community Section */}
              <Reveal className="mb-40">
                <div id="community" className="scroll-mt-32">
                  <h2 className="text-xl font-bold text-slate-900 text-center mb-10 flex items-center justify-center gap-3">
                    <span className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                    </span>
                    <span className="tracking-wide">官方直播 & 交易日志</span>
                  </h2>
                  <div className="flex flex-col md:flex-row justify-center gap-6 max-w-6xl mx-auto px-4">
                    <Button
                      key="ali-log"
                      href={COMMUNITY_ACCOUNTS[0].url}
                      target="_blank"
                      variant="primary"
                      className="group p-8 md:p-10 text-lg md:text-xl h-auto whitespace-normal shadow-2xl shadow-red-500/30 relative overflow-hidden rounded-2xl border border-red-500/20 w-full md:flex-1"
                    >
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
                        <i className="fa-brands fa-bilibili text-4xl"></i>
                        <div className="text-center md:text-left">
                           <span className="font-bold tracking-wide block">{COMMUNITY_ACCOUNTS[0].label}</span>
                        </div>
                        <i className="fa-solid fa-arrow-right-long text-2xl ml-2 group-hover:translate-x-2 transition-transform"></i>
                      </div>
                    </Button>

                    <Button
                      key="tencent-meeting"
                      href="https://meeting.tencent.com/p/3621520297"
                      target="_blank"
                      variant="primary"
                      className="group p-8 md:p-10 text-lg md:text-xl h-auto whitespace-normal shadow-2xl shadow-red-500/30 relative overflow-hidden rounded-2xl border border-red-500/20 w-full md:flex-1"
                    >
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
                        <i className="fa-solid fa-video text-4xl"></i>
                        <div className="text-center md:text-left">
                           <span className="font-bold tracking-wide block">腾讯会议直播间</span>
                        </div>
                        <i className="fa-solid fa-arrow-right-long text-2xl ml-2 group-hover:translate-x-2 transition-transform"></i>
                      </div>
                    </Button>
                  </div>
                </div>
              </Reveal>

              {/* 优秀学员案例 - Modified: Removed Text, Images Only */}
              <div id="student-cases" className="mb-40 scroll-mt-32">
                <Reveal>
                  <div className="flex flex-col items-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">优秀学员案例</h2>
                    <div className="w-20 h-1 bg-primary rounded-full mb-4"></div>
                    <p className="text-xs text-slate-400 max-w-2xl text-center">
                      * 以下展示均为真实学员历史业绩，仅供参考。过往业绩不代表未来表现，交易存在风险，请理性看待。
                    </p>
                  </div>
                </Reveal>
                
                <div className="relative w-full overflow-hidden mask-fade-edges py-10">
                  <div className="flex w-fit animate-scroll-x hover:[animation-play-state:paused]" style={{ animationDuration: '40s' }}>
                    {[...STUDENT_CASES, ...STUDENT_CASES].map((student, idx) => (
                      <button 
                        key={`${student.id}-${idx}`} 
                        type="button"
                        className="w-[320px] md:w-[480px] mx-6 shrink-0 bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group relative focus:outline-none focus:ring-4 focus:ring-primary/20 cursor-pointer"
                        onClick={() => setSelectedImage(student.screenshot)}
                        aria-label={`View result for ${student.name}`}
                      >
                        <div className="relative w-full h-[220px] md:h-[320px] bg-slate-100">
                          <img 
                            src={student.screenshot} 
                            alt="Student Result" 
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              <i className="fa-solid fa-plus text-2xl"></i>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center mt-12 relative z-10">
                  <Button 
                    href="/cases.html"
                    variant="white"
                    className="px-8 py-3 rounded-full text-slate-600 font-bold border-slate-200 hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow-md group"
                  >
                    查看全部案例 
                    <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </Button>
                </div>
              </div>

              {/* FAQ Section */}
              <div id="faq" className="max-w-4xl mx-auto mb-24 scroll-mt-32">
                <Reveal>
                  <h2 className="text-3xl font-bold text-slate-900 text-center mb-12 tracking-tight">常见问题</h2>
                  <div className="space-y-4">
                    {FAQS.map((faq, idx) => (
                      <FAQ key={idx} question={faq.question} answer={faq.answer} />
                    ))}
                  </div>
                </Reveal>
              </div>
            </main>

            <Footer />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
