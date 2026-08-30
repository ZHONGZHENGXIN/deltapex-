import React from 'react';
import Reveal from './Reveal';
import LanguageSwitcher from './LanguageSwitcher';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-24 px-6 relative z-10">
      <Reveal>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-display tracking-tight">
            Community & Support
          </h2>
          <p className="text-slate-500 mb-8 text-lg font-light max-w-2xl mx-auto">
            获取更多资讯，折扣提醒，交流交易经验，与 Alex 一起成长！我们致力于打造最专业的中文订单流交易社区。
          </p>
          
          {/* Language Switcher in Footer */}
          <div className="mb-10 flex justify-center">
            <LanguageSwitcher variant="footer" />
          </div>

          {/* Risk Disclaimer */}
          <div className="max-w-4xl mx-auto mb-12 text-left bg-slate-50 p-6 rounded-xl border border-slate-100">
             <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">风险披露 / Risk Disclosure</h4>
             <p className="text-[11px] text-slate-400 leading-relaxed">
                期货和衍生品交易具有高风险，可能导致资金损失。本网站内容仅用于教育目的，不构成任何投资建议。过往表现不代表未来结果。Deltapex 不提供任何理财或代客操盘服务。用户应根据自身风险承受能力独立做出决策。
                <br/><br/>
                Futures and derivatives trading involves high risk and may result in loss of funds. The content of this website is for educational purposes only and does not constitute investment advice. Past performance is not indicative of future results. Deltapex does not provide any financial management or managed account services. Users should make independent decisions based on their own risk tolerance.
             </p>
          </div>

          <div className="mt-10 text-xs text-slate-400 font-bold uppercase tracking-[0.2em] space-y-4 flex flex-col items-center">
            <p>© 2025 DELTAPEX TRADING GROUP. ALL RIGHTS RESERVED.</p>
            <div className="flex flex-wrap justify-center gap-4 text-[10px] md:text-xs">
               <button onClick={() => window.location.hash = "#privacy"} className="hover:text-primary transition-colors">隐私政策</button>
               <span className="text-slate-300">|</span>
               <button onClick={() => window.location.hash = "#terms"} className="hover:text-primary transition-colors">服务条款</button>
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  );
};

export default Footer;
