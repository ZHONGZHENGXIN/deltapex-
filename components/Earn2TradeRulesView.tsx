
import React, { useEffect } from 'react';

interface Earn2TradeRulesViewProps {
  onBack: () => void;
}

const Earn2TradeRulesView: React.FC<Earn2TradeRulesViewProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const accentColor = "#D32F2F"; // 沿用 Deltapex 的主色调

  return (
    <div className="bg-white min-h-screen font-sans text-[#333] antialiased">
      <div className="max-w-[900px] mx-auto px-5 py-8 md:py-12">
        {/* Navigation */}
        <nav className="mb-6">
          <button 
            onClick={onBack}
            className="text-slate-500 font-medium flex items-center gap-2 hover:text-[#D32F2F] transition-colors"
          >
            <i className="fa-solid fa-arrow-left"></i> 返回社区主页
          </button>
        </nav>

        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight" style={{ color: accentColor }}>
            EARN2TRADE 规则指南
          </h1>
          <p className="text-lg text-[#888] font-normal tracking-wider">老牌期货自营平台核心规则解析</p>
        </header>

        {/* Promo Section */}
        <section className="bg-[#FFF5F5] rounded-2xl p-6 md:p-8 mb-8 flex flex-wrap justify-around items-center gap-6 border-none shadow-sm">
          <div className="flex items-center flex-1 min-w-[250px]">
            <div className="bg-white text-[#D32F2F] p-3 rounded-xl mr-4 flex shadow-[0_4px_12px_rgba(211,47,47,0.08)]">
              <i className="fa-solid fa-hashtag text-xl"></i>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[11px] uppercase text-[#A0A0A0] tracking-widest mb-0.5">专属折扣码</h3>
              <div className="text-2xl font-black font-mono" style={{ color: accentColor }}>DeltapexE2T</div>
            </div>
          </div>
          <div className="flex items-center flex-1 min-w-[250px]">
            <div className="bg-white text-[#D32F2F] p-3 rounded-xl mr-4 flex shadow-[0_4px_12px_rgba(211,47,47,0.08)]">
              <i className="fa-solid fa-link text-xl"></i>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[11px] uppercase text-[#A0A0A0] tracking-widest mb-0.5">官方购买链接</h3>
              <a 
                href="https://www.earn2trade.com/zh/" 
                target="_blank" 
                className="text-sm font-semibold border-b-2 border-[#D32F2F]/20 hover:border-[#D32F2F] hover:bg-[#D32F2F]/5 transition-all py-0.5"
                style={{ color: accentColor }}
              >
                点击前往 Earn2Trade 官网
              </a>
            </div>
          </div>
        </section>

        <article className="space-y-12">
          {/* Core Advantages */}
          <section>
            <h2 className="text-2xl font-bold mb-5 flex items-center" style={{ color: accentColor }}>
              <i className="fa-solid fa-award mr-3"></i> 平台核心优势
            </h2>
            <ul className="space-y-4">
              {[
                { title: "老牌稳定", desc: <>Earn2Trade 是期货自营界的老大哥，出金信誉极佳，规则透明，适合长期交易者。</> },
                { title: "交易者路径 (TCP)", desc: <>独特的职业路径模式，通过考核后可以逐步升级账户规模，最高可管理数百万美金。</> },
                { title: "全中文支持", desc: <>提供完善的中文界面与客服支持，对华语交易者非常友好。</> }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-2 h-2 rounded-[2px] mt-2 mr-4 shrink-0" style={{ backgroundColor: accentColor }}></div>
                  <div>
                    <span className="block font-extrabold text-[#111] text-[17px] mb-1">{item.title}</span>
                    <span className="text-slate-500 text-sm">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Rules Summary Table */}
          <section>
            <h2 className="text-2xl font-bold mb-5 flex items-center" style={{ color: accentColor }}>
              <i className="fa-solid fa-scale-balanced mr-3"></i> 核心规则对照
            </h2>
            <div className="border-2 rounded-xl overflow-hidden shadow-sm" style={{ borderColor: accentColor }}>
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#FFF5F5]">
                  <tr>
                    <th className="w-1/4 p-4 text-sm font-black uppercase" style={{ color: accentColor }}>考核项目</th>
                    <th className="p-4 text-sm font-black uppercase" style={{ color: accentColor }}>Gauntlet Mini 模式规则</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-extrabold text-[#111]">回撤模式</td>
                    <td className="p-4 text-slate-600">追踪回撤 (Trailing Drawdown)，在收盘时更新。</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 font-extrabold text-[#111]">最短交易天数</td>
                    <td className="p-4 text-slate-600">至少交易 15 个交易日。</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-extrabold text-[#111]">一致性规则</td>
                    <td className="p-4 text-slate-600">单日最大盈利不能超过总盈利的 30%。</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 font-extrabold text-[#111]">出金政策</td>
                    <td className="p-4 text-slate-600">利润分成 80%，出金流程标准高效。</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </article>

        <footer className="mt-16 pt-8 border-t border-slate-100 text-center text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">
          <p>© Earn2Trade 攻略指南 | 请遵循官网实时规则</p>
        </footer>
      </div>
    </div>
  );
};

export default Earn2TradeRulesView;
