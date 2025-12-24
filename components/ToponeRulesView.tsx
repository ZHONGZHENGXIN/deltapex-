
import React, { useEffect } from 'react';

interface ToponeRulesViewProps {
  onBack: () => void;
}

const ToponeRulesView: React.FC<ToponeRulesViewProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const redAccent = "#C41E3A";

  return (
    <div className="bg-white min-h-screen font-sans text-[#333] antialiased">
      <div className="max-w-[900px] mx-auto px-5 py-8 md:py-12">
        {/* Navigation */}
        <nav className="mb-6">
          <button 
            onClick={onBack}
            className="text-slate-500 font-medium flex items-center gap-2 hover:text-[#C41E3A] transition-colors"
          >
            <i className="fa-solid fa-arrow-left"></i> 返回社区主页
          </button>
        </nav>

        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight" style={{ color: redAccent }}>
            TOPONE 规则指南
          </h1>
          <p className="text-lg text-[#888] font-normal tracking-wider">Toponefutures规则解析与攻略</p>
        </header>

        {/* Promo Section */}
        <section className="bg-[#FFF5F5] rounded-2xl p-6 md:p-8 mb-8 flex flex-wrap justify-around items-center gap-6 border-none shadow-sm">
          <div className="flex items-center flex-1 min-w-[250px]">
            <div className="bg-white text-[#C41E3A] p-3 rounded-xl mr-4 flex shadow-[0_4px_12px_rgba(196,30,58,0.08)]">
              <i className="fa-solid fa-hashtag text-xl"></i>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[11px] uppercase text-[#A0A0A0] tracking-widest mb-0.5">专属折扣码</h3>
              <div className="text-2xl font-black font-mono" style={{ color: redAccent }}>DELTAPEX</div>
            </div>
          </div>
          <div className="flex items-center flex-1 min-w-[250px]">
            <div className="bg-white text-[#C41E3A] p-3 rounded-xl mr-4 flex shadow-[0_4px_12px_rgba(196,30,58,0.08)]">
              <i className="fa-solid fa-link text-xl"></i>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[11px] uppercase text-[#A0A0A0] tracking-widest mb-0.5">官方购买链接</h3>
              <a 
                href="https://toponefutures.com/?linkId=lp_707970&sourceId=deltapex&tenantId=toponefutures" 
                target="_blank" 
                className="text-sm font-semibold border-b-2 border-[#C41E3A]/20 hover:border-[#C41E3A] hover:bg-[#C41E3A]/5 transition-all py-0.5"
                style={{ color: redAccent }}
              >
                点击前往 TopOne 官网
              </a>
            </div>
          </div>
        </section>

        <article className="space-y-12">
          {/* Advantages */}
          <section>
            <h2 className="text-2xl font-bold mb-5 flex items-center" style={{ color: redAccent }}>
              <i className="fa-solid fa-check-circle mr-3"></i> 平台核心优势
            </h2>
            <ul className="space-y-4">
              {[
                { title: "极致价格优惠", desc: <>圣诞特惠低至 <span className="font-bold text-[#C41E3A]">4.5折</span>。使用专属折扣码 <span className="font-bold text-[#C41E3A]">DELTAPEX</span> 可在官方最大优惠基础上额外减免 0.5%，目前已完美支持 Tradovate。</> },
                { title: "支付与出金优势", desc: <>全面支持魔法环境，提供加密货币快捷付款通道。出金流程高效透明，目前 <span className="font-bold text-[#C41E3A]">Instant Sim</span> 账户性价比最高。</> },
                { title: "灵活的折扣匹配", desc: <>折扣政策动态更新，通过本站折扣码可锁定全网最优价格，确保您的每一笔投入都更具价值。</> }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-2 h-2 rounded-[2px] mt-2 mr-4 shrink-0" style={{ backgroundColor: redAccent }}></div>
                  <div>
                    <span className="block font-extrabold text-[#111] text-[17px] mb-1">{item.title}</span>
                    <span className="text-slate-500 text-sm">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Operation Guide */}
          <section>
            <h2 className="text-2xl font-bold mb-5 flex items-center" style={{ color: redAccent }}>
              <i className="fa-solid fa-file-invoice mr-3"></i> 操作须知与合规攻略
            </h2>
            <div className="border-2 rounded-xl overflow-hidden shadow-sm" style={{ borderColor: redAccent }}>
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#FFF5F5]">
                  <tr>
                    <th className="w-1/4 p-4 text-sm font-black uppercase" style={{ color: redAccent }}>分类项目</th>
                    <th className="p-4 text-sm font-black uppercase" style={{ color: redAccent }}>具体建议与执行规则</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-extrabold text-[#111]">环境与登录</td>
                    <td className="p-4 text-slate-600">登录仪表盘必须开启魔法环境。购买过程无需预先注册，支付成功后系统自动生成账户，请第一时间前往重置密码。</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 font-extrabold text-[#111]">合规出金</td>
                    <td className="p-4 text-slate-600">交易阶段允许魔法，但应尽量模拟固定 IP 地区。如遇出金风控询问，只需如实说明来自中国区需魔法登录，并附带交易日志截图即可，无需担忧。</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-extrabold text-[#111]">机型选择</td>
                    <td className="p-4 text-slate-600">新手或寻求稳健用户强烈建议首选 <span className="text-[#C41E3A] font-bold">50k Instant</span> 账户类型，规避不必要的考试压力。</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 font-extrabold text-[#111]">高难预警</td>
                    <td className="p-4 text-slate-600"><span className="text-[#C41E3A] font-bold">S2F 类型账户难度极大</span>，对交易技术要求极高，请根据自身能力量力而行。</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* T1 Exam Rules */}
          <section>
            <h2 className="text-2xl font-bold mb-5 flex items-center" style={{ color: redAccent }}>
              <i className="fa-solid fa-chart-line mr-3"></i> T1考试账户规则
            </h2>
            <div className="border-2 rounded-xl overflow-hidden shadow-sm mb-4" style={{ borderColor: redAccent }}>
              <table className="w-full text-sm border-collapse text-left">
                <thead className="bg-[#FFF5F5]">
                  <tr>
                    <th className="w-1/5 p-4 font-black uppercase" style={{ color: redAccent }}>规则项目</th>
                    <th className="p-4 bg-[#C41E3A] text-white text-center font-bold">50K考试Elite challenge账号</th>
                    <th className="p-4 bg-[#C41E3A] text-white text-center font-bold">150K考试Elite challenge账号</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-[#fff9f9]">
                    <td className="p-2 text-center text-[12px] font-bold text-teal-600" colSpan={3}>仅适用于促销期4.5折（11月21日开始黑五折扣）</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-extrabold">价格 (月费)</td>
                    <td className="p-4 text-center"><span className="text-[#C41E3A] font-black">44</span><span className="text-[10px] block text-slate-400">（4.5折后，重置39） 激活费149</span></td>
                    <td className="p-4 text-center"><span className="text-[#C41E3A] font-black">131</span><span className="text-[10px] block text-slate-400">（4.5折后，重置119） 激活费149</span></td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 font-extrabold">回撤模式</td>
                    <td className="p-4 text-center"><span className="text-[#C41E3A] font-bold">EOD回撤2000</span> (日损1250)</td>
                    <td className="p-4 text-center"><span className="text-[#C41E3A] font-bold">EOD回撤4500</span> (日损3750)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-extrabold">考试利润目标</td>
                    <td className="p-4 text-center font-black">3000</td>
                    <td className="p-4 text-center font-black">9000</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 font-extrabold">出金利润目标</td>
                    <td className="p-4 text-xs leading-relaxed">
                      第一次利润达到3000可出2500<br/>
                      第二次要求2500，第三次2000<br/>
                      <span className="text-[#C41E3A] font-bold">快速打法：做4天750，然后出金</span>
                    </td>
                    <td className="p-4 text-xs leading-relaxed">
                      第一次利润达到9000可出3500<br/>
                      第二次要求7500，第三次6000<br/>
                      （比如做4天2250）
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* S2F Pro Rules */}
          <section>
            <h2 className="text-2xl font-bold mb-5 flex items-center" style={{ color: redAccent }}>
              <i className="fa-solid fa-user-check mr-3"></i> S2F pro免考账户规则
            </h2>
            <div className="border-2 rounded-xl overflow-hidden shadow-sm" style={{ borderColor: redAccent }}>
              <table className="w-full text-sm border-collapse text-left">
                <thead className="bg-[#FFF5F5]">
                  <tr>
                    <th className="w-1/5 p-4 font-black uppercase" style={{ color: redAccent }}>规则项目</th>
                    <th className="p-4 bg-[#C41E3A] text-white text-center font-bold">50K 免考S2F Pro 账号</th>
                    <th className="p-4 bg-[#C41E3A] text-white text-center font-bold">25K 免考S2F Pro 账号</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-extrabold">回撤 (Trailing)</td>
                    <td className="p-4 text-center"><span className="text-[#C41E3A] font-bold">追踪回撤1625</span> (日损1000)</td>
                    <td className="p-4 text-center"><span className="text-[#C41E3A] font-bold">追踪回撤1000</span> (日损500)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 font-extrabold">最低出金门槛</td>
                    <td className="p-4 text-center font-black text-blue-600">3000</td>
                    <td className="p-4 text-center font-black text-blue-600">1500</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-extrabold text-[#C41E3A]">推荐种田玩法</td>
                    <td className="p-4 text-xs leading-relaxed italic text-slate-500">
                      设置每天盈利300自动清算，做10天300。盈利3000直接申请出金2500。
                    </td>
                    <td className="p-4 text-xs leading-relaxed italic text-slate-500">
                      设置每天盈利150自动清算，做10天150。盈利1500出金1500。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </article>

        <footer className="mt-16 pt-8 border-t border-slate-100 text-center text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">
          <p>© TopOne Futures 攻略指南. 请遵循官网实时规则</p>
        </footer>
      </div>
    </div>
  );
};

export default ToponeRulesView;
