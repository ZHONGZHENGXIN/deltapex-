import React, { useState } from 'react';
import { FIRMS, FAQS, OTHER_RESOURCES, COMMUNITY_ACCOUNTS, SOCIAL_LINKS, SITE_CONFIG } from './constants';
import Button from './components/Button';
import FirmCard from './components/FirmCard';
import FAQ from './components/FAQ';
import TptRulesView from './components/TptRulesView';
import InteractiveBackground from './components/InteractiveBackground';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'tpt-rules'>('home');

  if (currentView === 'tpt-rules') {
    return <TptRulesView onBack={() => setCurrentView('home')} />;
  }

  return (
    <div className="bg-white text-slate-600 font-sans antialiased relative min-h-screen">
      {/* 动态抗重力背景 */}
      <InteractiveBackground />

      <header className="pt-24 pb-12 px-4 text-center max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center mb-6">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 font-display tracking-tight">
            Deltapex 自营交易
          </h1>
        </div>
        
        <p className="text-slate-500 mb-12 text-lg">Futures Propfirm 中文社区网站</p>

        {/* Main CTA */}
        <Button 
          href="#firms" 
          className="px-10 py-4 mb-8 text-lg rounded-full"
        >
          查看规则汇总介绍
        </Button>
      </header>

      <main id="rules-summary" className="max-w-7xl mx-auto px-4 pb-20 relative z-10">
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
                }}
              />
            ))}
          </div>
        </div>

        {/* Community Accounts Section */}
        <div id="community" className="mt-20 mb-20 scroll-mt-20">
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

        {/* FAQ Section */}
        <div id="faq" className="max-w-4xl mx-auto scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">常见问题</h2>
          <div className="space-y-3">
            {FAQS.map((q, idx) => (
              <FAQ key={idx} question={q} />
            ))}
          </div>
        </div>

        {/* Other Resources */}
        <div id="resources" className="mt-20 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-900 text-center mb-8">其他</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {OTHER_RESOURCES.map((link, idx) => (
              <Button
                key={idx}
                href={link.url}
                variant="white"
                className="p-4 text-xs h-auto whitespace-normal"
                fullWidth
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-white/80 backdrop-blur-sm border-t border-slate-200 py-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Community & Support
          </h2>
          <p className="text-slate-500 mb-10 text-sm">
            获取 Propfirm 资讯，折扣提醒，交流交易经验，与 Deltapex 一起成长！
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              className="group relative flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white px-8 py-4 font-bold shadow-lg shadow-red-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 w-full md:w-auto rounded-md"
              href={SOCIAL_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-discord text-xl"></i>
              <span>Join Discord</span>
            </a>
            <a
              className="group relative flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white px-8 py-4 font-bold shadow-lg shadow-red-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 w-full md:w-auto rounded-md"
              href={SOCIAL_LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-telegram text-xl"></i>
              <span>Telegram Support</span>
            </a>
            <a
              className="group relative flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white px-8 py-4 font-bold shadow-lg shadow-red-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 w-full md:w-auto rounded-md"
              href={SOCIAL_LINKS.clientPortal}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-user text-xl"></i>
              <span>Client Portal</span>
            </a>
          </div>
          <div className="mt-16 text-xs text-slate-500">
            <p>© 2025 Deltapex 自营交易 - Futures Propfirm | 关于我们 | 披露声明 | CFD</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;