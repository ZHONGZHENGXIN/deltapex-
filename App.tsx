
import React, { useState, useRef, useCallback } from 'react';
import { FIRMS, FAQS, COMMUNITY_ACCOUNTS, SOCIAL_LINKS, STUDENT_CASES } from './constants';
import Button from './components/Button';
import FirmCard from './components/FirmCard';
import FAQ from './components/FAQ';
import TptRulesView from './components/TptRulesView';
import LucidRulesView from './components/LucidRulesView';
import Earn2TradeRulesView from './components/Earn2TradeRulesView';
import InteractiveBackground from './components/InteractiveBackground';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'tpt-rules' | 'lucid-rules' | 'earn2trade-rules'>('home');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const ctaRef = useRef<HTMLDivElement>(null);
  const [ctaRotate, setCtaRotate] = useState({ x: 0, y: 0 });
  const [ctaSpotlight, setCtaSpotlight] = useState({ x: 0, y: 0 });

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

  if (currentView === 'earn2trade-rules') {
    return <Earn2TradeRulesView onBack={() => setCurrentView('home')} />;
  }

  return (
    <div className="bg-white text-slate-600 font-sans antialiased relative min-h-screen overflow-x-hidden">
      <InteractiveBackground />

      {/* 图片预览 Modal (Lightbox) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-md animate-in fade-in duration-300 px-4 py-8 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
            <img 
              src={selectedImage} 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300 border border-white/10" 
              alt="Trading Result Preview"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1200x800?text=Image+Not+Found+in+/images+folder'; }}
            />
            <button 
              className="absolute top-0 right-0 m-4 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors border border-white/10"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
            <p className="text-white/60 mt-4 text-sm font-medium tracking-widest uppercase">点击背景关闭预览</p>
          </div>
        </div>
      )}

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
                  if (id === 'earn2trade') setCurrentView('earn2trade-rules');
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
            <Button
              key="ali-log"
              href={COMMUNITY_ACCOUNTS[0].url}
              variant="primary"
              className="group p-6 md:p-8 text-base md:text-lg h-auto whitespace-normal shadow-2xl shadow-red-500/40 relative overflow-hidden"
              fullWidth
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-3">
                <i className="fa-brands fa-bilibili text-2xl"></i>
                <span className="font-bold tracking-wide">{COMMUNITY_ACCOUNTS[0].label}</span>
                <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </Button>
          </div>
        </div>

        {/* 知识星球模块 */}
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
              <div className="w-full h-full bg-slate-50 rounded-xl flex flex-col items-center justify-center gap-3 border-2 border-dashed border-slate-200">
                <i className="fa-solid fa-qrcode text-5xl text-slate-300"></i>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest px-4 text-center">扫描二维码<br/>关注星球动态</span>
              </div>
            </div>
          </div>
        </div>

        {/* 优秀学员案例 - 整合本地图片与点击放大逻辑 */}
        <div id="student-cases" className="mt-32 mb-32 scroll-mt-20">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">优秀学员案例</h2>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2 bg-slate-100 px-3 py-1 rounded-full">点击图片可查看大图细节</p>
          </div>
          
          <div className="relative w-full overflow-hidden mask-fade-edges">
            <div className="flex w-fit animate-scroll-x hover:[animation-play-state:paused] py-10" style={{ animationDuration: '60s' }}>
              {[...STUDENT_CASES, ...STUDENT_CASES].map((student, idx) => (
                <div 
                  key={idx} 
                  className="w-[350px] md:w-[480px] mx-6 shrink-0 bg-white/60 backdrop-blur-xl border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-4 group cursor-pointer"
                  onClick={() => setSelectedImage(student.screenshot)}
                >
                  <div className="relative w-full h-[320px] bg-slate-900 overflow-hidden">
                    <img 
                      src={student.screenshot} 
                      alt={student.profit} 
                      className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=Please+Upload+Images+to+images+folder'; }}
                    />
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 flex items-center justify-center transition-colors">
                      <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 shadow-xl text-primary">
                        <i className="fa-solid fa-magnifying-glass-plus text-xl"></i>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-primary text-white text-[9px] font-black px-3 py-1.5 rounded-full shadow-lg tracking-tighter z-10">
                      VERIFIED RESULT
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none"></div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <img src={student.avatar} alt={student.name} className="w-12 h-12 rounded-2xl border-2 border-primary/10 shadow-sm" />
                      <div className="flex-1 overflow-hidden">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-slate-900 font-bold text-base truncate">{student.name}</h4>
                          <span className="text-green-600 font-black text-base whitespace-nowrap">{student.profit}</span>
                        </div>
                        <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mt-0.5 truncate">{student.strategy}</p>
                      </div>
                    </div>
                    <div className="relative bg-slate-50/80 p-6 rounded-3xl border border-slate-100 min-h-[110px] flex items-center">
                      <i className="fa-solid fa-quote-left text-primary/5 text-5xl absolute top-3 left-3"></i>
                      <p className="text-slate-600 text-[14px] leading-relaxed italic relative z-10 font-medium">
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
            {FAQS.map((faq, idx) => (
              <FAQ key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-white/80 backdrop-blur-sm border-t border-slate-200 py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 font-display">
            Community & Support
          </h2>
          <p className="text-slate-500 mb-10 text-sm font-medium">
            获取 更多资讯，折扣提醒，交流交易经验，与 Alex 一起成长！
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <Button className="py-4" href={SOCIAL_LINKS.knowledgePlanet} target="_blank">
              <i className="fa-solid fa-meteor text-xl mr-2"></i> 知识星球
            </Button>
            <Button className="py-4" href={SOCIAL_LINKS.discord} target="_blank">
              <i className="fa-brands fa-discord text-xl mr-2"></i> Join Discord
            </Button>
            <Button className="py-4" href={SOCIAL_LINKS.telegram} target="_blank">
              <i className="fa-brands fa-telegram text-xl mr-2"></i> Telegram
            </Button>
            <Button className="py-4" href={SOCIAL_LINKS.clientPortal} target="_blank">
              <i className="fa-solid fa-user text-xl mr-2"></i> Client Portal
            </Button>
          </div>
          <div className="mt-16 text-xs text-slate-500 font-medium">
            <p>© 2025 Deltapex 交易社区 - ATAS订单流中文社区 | 关于我们 | 披露声明</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
