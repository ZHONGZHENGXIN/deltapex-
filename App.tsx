
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
import Lenis from 'lenis';

type ViewType = 'home' | 'tpt-rules' | 'lucid-rules' | 'earn2trade-rules' | 'topone-rules' | 'about';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const ctaRef = useRef<HTMLDivElement>(null);
  const [ctaRotate, setCtaRotate] = useState({ x: 0, y: 0 });
  const [ctaSpotlight, setCtaSpotlight] = useState({ x: 0, y: 0 });

  const planetRef = useRef<HTMLDivElement>(null);
  const [planetRotate, setPlanetRotate] = useState({ x: 0, y: 0 });

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Inertia easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll to top whenever the view changes
  useEffect(() => {
    window.scrollTo(0, 0);
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

  const handlePlanetMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!planetRef.current) return;
    const rect = planetRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 40;
    const rotateY = (centerX - x) / 60;
    setPlanetRotate({ x: rotateX, y: rotateY });
  }, []);

  const handlePlanetMouseLeave = () => {
    setPlanetRotate({ x: 0, y: 0 });
  };

  // View Routing Logic
  if (currentView === 'tpt-rules') return <TptRulesView onBack={() => setCurrentView('home')} />;
  if (currentView === 'lucid-rules') return <LucidRulesView onBack={() => setCurrentView('home')} />;
  if (currentView === 'earn2trade-rules') return <Earn2TradeRulesView onBack={() => setCurrentView('home')} />;
  if (currentView === 'topone-rules') return <ToponeRulesView onBack={() => setCurrentView('home')} />;
  if (currentView === 'about') return <AboutUsView onBack={() => setCurrentView('home')} />;

  return (
    <div className="bg-white text-slate-600 font-sans antialiased relative min-h-screen overflow-x-hidden selection:bg-red-100 selection:text-primary">
      <InteractiveBackground />

      {/* 图片预览 Modal (Lightbox) */}
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

      {/* Hero Section */}
      <header className="pt-40 pb-32 px-4 text-center max-w-7xl mx-auto relative z-10">
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
              onClick={() => setCurrentView('about')}
              className="relative overflow-hidden px-14 py-6 text-xl rounded-2xl shadow-[0_30px_60px_-15px_rgba(211,47,47,0.3)] z-10 hover:shadow-[0_40px_80px_-20px_rgba(211,47,47,0.4)] transition-shadow duration-500"
            >
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                  background: `radial-gradient(120px circle at ${ctaSpotlight.x}px ${ctaSpotlight.y}px, rgba(255, 255, 255, 0.2), transparent 80%)`
                }}
              />
              <span className="relative z-10 font-bold tracking-wide">关于我们</span>
            </Button>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-red-600/50 rounded-2xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
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
                <FirmCard 
                  firm={firm} 
                  onRulesClick={(id) => {
                    if (id === 'tpt') setCurrentView('tpt-rules');
                    if (id === 'lucid') setCurrentView('lucid-rules');
                    if (id === 'earn2trade') setCurrentView('earn2trade-rules');
                    if (id === 'topone') setCurrentView('topone-rules');
                  }}
                />
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

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                      {/* ATAS Card */}
                      <a 
                        href="https://atas.net/cn/?rs=partners_oft281860"
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

                      {/* EBC Card */}
                      <a 
                        href="https://client.myebc.co/signup?linkCode=S4112201-a02"
                        target="_blank"
                        className="flex flex-col md:flex-row items-center p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-2xl hover:border-red-200 hover:-translate-y-2 transition-all duration-500 group/ebc"
                      >
                         <div className="w-24 h-24 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 group-hover/ebc:bg-red-500 group-hover/ebc:text-white transition-all duration-300 md:mr-8 mb-6 md:mb-0 shrink-0 shadow-inner">
                            <i className="fa-solid fa-user-shield text-4xl"></i>
                         </div>
                         <div className="flex-1 text-center md:text-left">
                            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Preferred Broker</div>
                            <div className="text-2xl font-bold text-slate-800 group-hover/ebc:text-red-600 transition-colors mb-2">EBC 极速开户</div>
                            <div className="text-base text-slate-500 group-hover/ebc:text-red-400">优选合作券商</div>
                         </div>
                         <div className="mt-6 md:mt-0 w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover/ebc:bg-red-100 group-hover/ebc:text-red-600 transition-colors transform group-hover/ebc:translate-x-2 duration-300">
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

        {/* 知识星球模块 (Planet Section) */}
        <div className="mb-40 scroll-mt-32" id="planet-section">
          <Reveal>
            <div 
              ref={planetRef}
              onMouseMove={handlePlanetMouseMove}
              onMouseLeave={handlePlanetMouseLeave}
              className="max-w-5xl mx-auto perspective-1000"
              style={{
                transform: `rotateX(${planetRotate.x}deg) rotateY(${planetRotate.y}deg)`,
                transition: planetRotate.x === 0 ? 'all 0.6s ease' : 'none'
              }}
            >
              <div className="bg-gradient-to-br from-white to-red-50/50 border border-primary/10 rounded-[3rem] p-10 md:p-16 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-center gap-16 overflow-hidden relative group">
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700"></div>
                
                <div className="flex-1 relative z-10 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                    <i className="fa-solid fa-meteor animate-bounce"></i> 深度交易社区
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                    加入 <span className="text-primary underline decoration-4 decoration-primary/20 underline-offset-4">知识星球</span><br/>获取 Deltapex 核心内参
                  </h2>
                  <ul className="space-y-6 mb-12 text-slate-600 font-medium text-lg">
                    <li className="flex items-center gap-4 justify-center md:justify-start">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                         <i className="fa-solid fa-check"></i>
                      </div>
                      每日美盘开盘前深度逻辑解析
                    </li>
                    <li className="flex items-center gap-4 justify-center md:justify-start">
                       <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                         <i className="fa-solid fa-check"></i>
                      </div>
                      Alex 实战订单流策略复盘
                    </li>
                  </ul>
                  <Button 
                    href={SOCIAL_LINKS.knowledgePlanet}
                    className="px-12 py-5 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                  >
                    立即加入星球
                  </Button>
                </div>
                
                <div className="w-64 h-64 md:w-80 md:h-80 shrink-0 bg-white p-6 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 relative z-10 flex flex-col items-center justify-center group-hover:scale-[1.03] transition-transform duration-500">
                  <div className="w-full h-full bg-slate-50 rounded-2xl flex flex-col items-center justify-center gap-4 border-2 border-dashed border-slate-200 group-hover:border-primary/20 transition-colors">
                    <i className="fa-solid fa-qrcode text-6xl text-slate-300 group-hover:text-primary/50 transition-colors"></i>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-widest px-4 text-center">扫描二维码 / Scan Code</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 优秀学员案例 - Modified: Removed Text, Images Only */}
        <div id="student-cases" className="mb-40 scroll-mt-32">
          <Reveal>
            <div className="flex flex-col items-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">优秀学员案例</h2>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>
          </Reveal>
          
          <div className="relative w-full overflow-hidden mask-fade-edges py-10">
            <div className="flex w-fit animate-scroll-x hover:[animation-play-state:paused]" style={{ animationDuration: '40s' }}>
              {[...STUDENT_CASES, ...STUDENT_CASES].map((student, idx) => (
                <div 
                  key={`${student.id}-${idx}`} 
                  className="w-[320px] md:w-[480px] mx-6 shrink-0 bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group cursor-pointer"
                  onClick={() => setSelectedImage(student.screenshot)}
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
                  {/* Text section removed as requested */}
                </div>
              ))}
            </div>
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

      <footer className="bg-white border-t border-slate-100 py-24 px-6 relative z-10">
        <Reveal>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-display tracking-tight">
              Community & Support
            </h2>
            <p className="text-slate-500 mb-12 text-lg font-light max-w-2xl mx-auto">
              获取更多资讯，折扣提醒，交流交易经验，与 Alex 一起成长！我们致力于打造最专业的中文订单流交易社区。
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Button className="py-5 px-16 min-w-[240px] text-lg rounded-full shadow-xl hover:shadow-2xl transition-all" href={SOCIAL_LINKS.telegram} target="_blank">
                <i className="fa-solid fa-headset text-xl mr-3"></i> 联系我们
              </Button>
            </div>
            <div className="mt-20 text-xs text-slate-400 font-bold uppercase tracking-[0.2em] space-y-2">
              <p>© 2025 DELTAPEX TRADING GROUP. ALL RIGHTS RESERVED.</p>
              <p>ATAS订单流中文社区 | 风险披露 | 隐私政策</p>
            </div>
          </div>
        </Reveal>
      </footer>
    </div>
  );
}

export default App;
