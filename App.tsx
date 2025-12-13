import { QUICK_LINKS, FIRMS, FAQS, OTHER_RESOURCES, YOUTUBE_LINKS, SOCIAL_LINKS, SITE_CONFIG } from './constants';
import Button from './components/Button';
import FirmCard from './components/FirmCard';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="bg-white text-slate-600 font-sans antialiased relative min-h-screen">
      {/* Background Watermark */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-5">
        <img
          alt="Background Watermark"
          className="w-[80%] md:w-[50%] max-w-4xl object-contain"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7SInwoQhcyJFoUIdpWPsreh-quWMxFs4hpq-tMvPWHYDx3gF_g8xD0RyTVv0G2gBJYoCBRybLsqyjdbfqGuzlVcDbyZhlbKhUl5tLrBuoS6T_W2_Vl3ILGjosldWizMl3gJ_tFy1RcSbD0FTn8e1K_ojd-MAbBE-I17XwNHmvc87t03YMkMKxc9NihC667NNQOTRuD73tHXhb5XKthHiAuL2CfbGCbhrNvxvfjIO8CguXt_VY7RlDfoJH52Vd9Vnj0wJbDZKxxno"
        />
      </div>

      <header className="pt-12 pb-8 px-4 text-center max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-display">
            Deltapex 自营交易
          </h1>
        </div>
        
        <p className="text-slate-500 mb-12">Futures Propfirm 中文社区网站</p>

        {/* Main CTA */}
        <Button 
          href="#firms" 
          className="px-8 py-3 mb-8"
        >
          查看规则汇总介绍
        </Button>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-16">
          {QUICK_LINKS.map((link, idx) => (
            <Button
              key={idx}
              href={link.url}
              variant="white"
              className="px-4 py-3 text-sm"
              fullWidth
            >
              {link.label}
            </Button>
          ))}
        </div>
      </header>

      <main id="rules-summary" className="max-w-7xl mx-auto px-4 pb-20 relative z-10">
        {/* Firms List */}
        <div id="firms" className="scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
            Futures Propfirm汇总
          </h2>
          <div className="space-y-4 mb-20">
            {FIRMS.map((firm) => (
              <FirmCard key={firm.id} firm={firm} />
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

        {/* YouTube Section */}
        <div id="youtube" className="mt-20 mb-20 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-900 text-center mb-8">油管视频学习</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {YOUTUBE_LINKS.map((link, idx) => (
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
          <div className="flex justify-center mt-12">
            <div className="w-16 h-16 opacity-80 text-slate-200">
              <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Community & Support
          </h2>
          <p className="text-slate-500 mb-10 text-sm">
            获取 Propfirm 资讯，折扣提醒，交流交易经验，与自营交易一起成长！
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              className="group relative flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white px-8 py-4 font-bold shadow-lg shadow-red-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 w-full md:w-auto"
              href={SOCIAL_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-discord text-xl"></i>
              <span>Join Discord</span>
            </a>
            <a
              className="group relative flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white px-8 py-4 font-bold shadow-lg shadow-red-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 w-full md:w-auto"
              href={SOCIAL_LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-telegram text-xl"></i>
              <span>Telegram Support</span>
            </a>
            <a
              className="group relative flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white px-8 py-4 font-bold shadow-lg shadow-red-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 w-full md:w-auto"
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