
import React, { useState, useRef, useCallback } from 'react';
import { FIRMS, FAQS, COMMUNITY_ACCOUNTS, SOCIAL_LINKS, STUDENT_CASES } from './constants';
import Button from './components/Button';
import FirmCard from './components/FirmCard';
import FAQ from './components/FAQ';
import TptRulesView from './components/TptRulesView';
import LucidRulesView from './components/LucidRulesView';
import InteractiveBackground from './components/InteractiveBackground';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'tpt-rules' | 'lucid-rules'>('home');
  
  const ctaRef = useRef<HTMLDivElement>(null);
  const [ctaRotate, setCtaRotate] = useState({ x: 0, y: 0 });
  const [ctaSpotlight, setCtaSpotlight] = useState({ x: 0, y: 0 });

  // 知识星球模块的 3D 效果
  const planetRef = useRef<HTMLDivElement>(null);
  const [planetRotate, setPlanetRotate] = useState({ x: 0, y: 0 });

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

  if (currentView === 'tpt-rules') {
    return <TptRulesView onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'lucid-rules') {
    return <LucidRulesView onBack={() => setCurrentView('home')} />;
  }

  return (
    <div className="bg-white text-slate-600 font-sans antialiased relative min-h-screen overflow-x-hidden">
      <InteractiveBackground />

      <header className="pt-24 pb-12 px-4 text-center max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center mb-6">
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight transition-all duration-700 cursor-default hover:scale-105 active:scale-95 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-primary to-slate-900 bg-[length:200%_auto] animate-shimmer select-none drop-shadow-sm py-2 leading-tight">
            Deltapex 自营交易
          </h1>
        </div>
        
        <p className="text-slate-500 mb-12 text-lg font-medium tracking-wide">ATAS订单流中文社区</p>

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
            href="#firms" 
            className="relative overflow-hidden px-12 py-5 text-xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(211,47,47,0.3)] hover:shadow-[0_30px_60px_-15px_rgba(211,47,47,0.5)] border-0 z-10 transition-transform duration-300 group-hover:scale-105"
          >
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
              style={{
                background: `radial-gradient(120px circle at ${ctaSpotlight.x}px ${ctaSpotlight.y}px, rgba(255, 255, 255, 0.2), transparent 80%)`
              }}
            />
            <span className="relative z-10 font-bold">关于我们</span>
          </Button>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-red-600/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 pb-20 relative z-10">
        {/* Firms List */}
        <div id="firms" className="scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
            Futures Propfirm 汇总
          </h2>
          <div className="space-y-4 mb-20">
            {FIRMS.map((firm) => (
              <FirmCard 
                key={firm.id} 
                firm={firm} 
                onRulesClick={(id) => {
                  if (id === 'tpt') setCurrentView('tpt-rules');
                  if (id === 'lucid') setCurrentView('lucid-rules');
                }}
              />
            ))}
          </div>
        </div>

        {/* Community Section */}
        <div id="community" className="mt-20 mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-900 text-center mb-8 flex items-center justify-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            官方直播 & 交易日志
          </h2>
          <div className="flex justify-center max-w-4xl mx-auto">
            {COMMUNITY_ACCOUNTS.map((link, idx) => (
              <Button
                key={idx}
                href={link.url}
                variant="primary"
                className="group p-6 md:p-8 text-base md:text-lg h-auto whitespace-normal shadow-2xl shadow-red-500/40 relative overflow-hidden"
                fullWidth
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center gap-3">
                  <i className="fa-brands fa-bilibili text-2xl"></i>
                  <span className="font-bold tracking-wide">{link.label}</span>
                  <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* 知识星球模块 - 新增 */}
        <div 
          ref={planetRef}
          onMouseMove={handlePlanetMouseMove}
          onMouseLeave={handlePlanetMouseLeave}
          className="max-w-4xl mx-auto mt-20 mb-32 perspective-1000"
          style={{
            transform: `rotateX(${planetRotate.x}deg) rotateY(${planetRotate.y}deg)`,
            transition: planetRotate.x === 0 ? 'all 0.6s ease' : 'none'
          }}
        >
          <div className="bg-gradient-to-br from-white to-red-50 border border-primary/20 rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-10 overflow-hidden relative group">
            {/* 背景装饰 */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="flex-1 relative z-10 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <i className="fa-solid fa-meteor animate-bounce"></i> 深度交易社区
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                加入 <span className="text-primary">知识星球</span><br/>获取 Deltapex 核心内参
              </h2>
              <ul className="space-y-4 mb-10 text-slate-600 font-medium">
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <i className="fa-solid fa-circle-check text-primary"></i> 每日美盘开盘前深度逻辑解析
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <i className="fa-solid fa-circle-check text-primary"></i> Alex 实战订单流策略复盘
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <i className="fa-solid fa-circle-check text-primary"></i> 专属 1对1 交易答疑与心态指导
                </li>
              </ul>
              <Button 
                href={SOCIAL_LINKS.knowledgePlanet}
                className="px-10 py-4 text-lg font-bold rounded-xl"
              >
                立即加入星球
              </Button>
            </div>
            
            <div className="w-56 h-56 md:w-64 md:h-64 shrink-0 bg-white p-4 rounded-[2rem] shadow-inner border border-slate-100 relative z-10 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500">
              {/* 二维码占位符 */}
              <div className="w-full h-full bg-slate-50 rounded-xl flex flex-col items-center justify-center gap-3 border-2 border-dashed border-slate-200">
                <i className="fa-solid fa-qrcode text-5xl text-slate-300"></i>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest px-4 text-center">扫描二维码<br/>关注星球动态</span>
              </div>
            </div>
          </div>
        </div>

        {/* 优秀学员案例 */}
        <div id="student-cases" className="mt-32 mb-32 scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">优秀学员案例</h2>
          <div className="relative w-full overflow-hidden mask-fade-edges">
            <div className="flex w-fit animate-scroll-x hover:[animation-play-state:paused] py-10">
              {[...STUDENT_CASES, ...STUDENT_CASES].map((student, idx) => (
                <div 
                  key={idx} 
                  className="w-[400px] mx-6 shrink-0 bg-white/60 backdrop-blur-xl border border-slate-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-3 group"
                >
                  <div className="h-52 w-full overflow-hidden relative">
                    <img 
                      src={student.screenshot} 
                      alt="Profit Screenshot" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                      REAL TRADING CASE
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-5">
                      <img src={student.avatar} alt={student.name} className="w-14 h-14 rounded-2xl border-2 border-primary/10 shadow-sm" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-slate-900 font-bold text-lg">{student.name}</h4>
                          <span className="text-green-600 font-black text-lg">{student.profit}</span>
                        </div>
                        <p className="text-xs text-slate-500 font-semibold tracking-wider uppercase mt-0.5">{student.strategy}</p>
                      </div>
                    </div>
                    <div className="relative bg-slate-50/80 p-4 rounded-xl border border-slate-100">
                      <i className="fa-solid fa-quote-left text-primary/10 text-3xl absolute -top-1 -left-1"></i>
                      <p className="text-slate-600 text-sm leading-relaxed italic relative z-10">
                        "{student.comment}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="max-w-4xl mx-auto scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">常见问题</h2>
          <div className="space-y-3">
            {FAQS.map((q, idx) => (
              <FAQ key={idx} question={q} />
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-white/80 backdrop-blur-sm border-t border-slate-200 py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Community & Support
          </h2>
          <p className="text-slate-500 mb-10 text-sm">
            获取 更多资讯，折扣提醒，交流交易经验，与 Alex 一起成长！
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <a className="group relative flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white px-6 py-4 font-bold rounded-xl shadow-lg transition-all hover:-translate-y-1 active:scale-95" href={SOCIAL_LINKS.knowledgePlanet} target="_blank">
              <i className="fa-solid fa-meteor text-xl"></i>
              <span>知识星球</span>
            </a>
            <a className="group relative flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white px-6 py-4 font-bold rounded-xl shadow-lg transition-all hover:-translate-y-1 active:scale-95" href={SOCIAL_LINKS.discord} target="_blank">
              <i className="fa-brands fa-discord text-xl"></i>
              <span>Join Discord</span>
            </a>
            <a className="group relative flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white px-6 py-4 font-bold rounded-xl shadow-lg transition-all hover:-translate-y-1 active:scale-95" href={SOCIAL_LINKS.telegram} target="_blank">
              <i className="fa-brands fa-telegram text-xl"></i>
              <span>Telegram</span>
            </a>
            <a className="group relative flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white px-6 py-4 font-bold rounded-xl shadow-lg transition-all hover:-translate-y-1 active:scale-95" href={SOCIAL_LINKS.clientPortal} target="_blank">
              <i className="fa-solid fa-user text-xl"></i>
              <span>Client Portal</span>
            </a>
          </div>
          <div className="mt-16 text-xs text-slate-500">
            <p>© 2025 Deltapex 交易社区 - ATAS订单流中文社区 | 关于我们 | 披露声明</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
