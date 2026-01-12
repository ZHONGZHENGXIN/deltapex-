
import React, { useEffect } from 'react';

// Helper components for consistent styling
const RedBold: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <span className="text-[#C53030] font-bold">{children}</span>
);

const BlueInfo: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <span className="text-[#2B6CB0] underline font-bold hover:text-[#C53030] transition-colors cursor-pointer">{children}</span>
);

const SmallText: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <span className={`text-[11px] text-[#718096] leading-tight block mt-1 font-normal ${className}`}>{children}</span>
);

const TableHeader = ({ title, colorClass }: { title: string; colorClass: string }) => (
  <th className={`${colorClass} text-white text-center text-base font-bold p-4 border border-[#FEE2E2]`}>
    {title}
  </th>
);

const SectionTitle: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`flex items-center gap-3 text-[#C53030] text-lg font-bold border-b border-[#FEE2E2] pb-4 mt-12 mb-6 ${className}`}>
    <div className="w-1.5 h-6 bg-[#C53030] rounded-full"></div>
    {children}
  </div>
);

// New Promotional Banner Component for the top
const TopPromoBanner: React.FC = () => (
  <div className="bg-[#FFF5F5] border border-[#FEB2B2] rounded-2xl p-6 md:p-8 text-center mb-12 shadow-sm">
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="text-lg md:text-xl text-[#2D3748]">
        注册链接：
        <a 
          href="https://lucidtrading.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#2B6CB0] underline font-bold hover:text-[#C53030] ml-1 transition-colors"
        >
          https://lucidtrading.com/
        </a>
      </div>
      <div className="text-3xl md:text-5xl font-extrabold flex items-center gap-3">
        <span className="text-[#2D3748]">折扣码：</span>
        <span className="text-[#C53030]">Alex</span>
      </div>
      <div className="text-[#C53030] font-bold text-sm bg-white/50 px-4 py-1.5 rounded-full border border-[#FEB2B2] mt-2 animate-pulse">
        圣诞及新年限时促销活动：6折及8折优惠进行中
      </div>
    </div>
  </div>
);

const LucidRulesView: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    window.location.hash = "";
  };

  return (
    <div className="bg-[#FFF5F5] min-h-screen font-sans text-[#2D3748] py-10 px-4">
      <div className="max-w-[1100px] mx-auto bg-white shadow-2xl rounded-2xl border border-[#FEB2B2] overflow-hidden">
        
        {/* Navigation */}
        <nav className="px-6 md:px-12 py-5 bg-white border-b border-[#FEE2E2] sticky top-0 z-20 backdrop-blur-md bg-white/90">
          <div 
            onClick={handleBackClick}
            className="text-[#C53030] font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-all cursor-pointer"
            role="button"
          >
            <i className="fa-solid fa-arrow-left"></i> 返回社区主页
          </div>
        </nav>

        {/* Header */}
        <header className="text-center py-12 border-b border-[#FEE2E2] bg-gradient-to-b from-white to-[#FFF5F5]">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#C53030] tracking-tight mb-4">
            Lucid Trading 交易规则全攻略
          </h1>
          <p className="text-[#4A5568] font-medium text-lg">Lucidtrading 核心规则解析与种田攻略</p>
        </header>

        <div className="px-6 md:px-16 py-10">
          
          {/* Top Promo Banner instead of cells in tables */}
          <TopPromoBanner />

          {/* Advantages Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-[#C53030] mb-8 flex items-center gap-2">
              <span className="text-2xl">✨</span> Lucid 的优势
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 text-[15px] leading-relaxed">
              <ul className="space-y-4 list-disc pl-5">
                <li><RedBold>圣诞促销</RedBold>：12/18 起，Flex/Pro 6 折（50k/25k）；新用户前 2 单 8 折，结束时间待定。</li>
                <li><RedBold>推荐配置</RedBold>：Flex 更建议 50k；50k 出金回撤 2000，150k 出金回撤 4500。</li>
                <li><RedBold>性价比</RedBold>：一次性费用，无月费订阅；允许使用“魔法”。</li>
                <li><RedBold>折扣码</RedBold>：使用 <span className="font-bold underline">Alex</span> 自动匹配官方最大折扣。</li>
              </ul>
              <ul className="space-y-4 list-disc pl-5">
                <li><RedBold>出金/KYC</RedBold>：出金时才 KYC；失败可联系客服开工单，约 1 个工作日。</li>
                <li><RedBold>Workmarket</RedBold>：地址填城市中文后下拉任选地址，通常可通过。</li>
                <li><RedBold>并行规则</RedBold>：可同时购 10 个号，通过后可激活 5 个出金号。</li>
              </ul>
            </div>
            <div className="mt-10 p-5 bg-[#FFF5F5] border-2 border-dashed border-[#FEB2B2] rounded-2xl text-sm italic text-slate-700 shadow-inner">
              <i className="fa-solid fa-circle-exclamation mr-2 text-[#C53030]"></i>
              提醒：执行号最开始 50k 同时持仓最多 2 手（如 NQ/2MNQ），25k 1 手，150k 4 手；违规会移除当日收益。
            </div>
          </section>

          {/* Table 1: Flex 1 */}
          <SectionTitle className="mt-0">📌 Lucid Flex考试规则1：(仅限11月28日后购买)</SectionTitle>
          <div className="overflow-x-auto rounded-xl shadow-md mb-16 border border-[#FEE2E2]">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="bg-[#FFF5F5] w-48 font-bold text-[#9B2C2C] p-4 border border-[#FEE2E2]">LUCIDTRADING</th>
                  <TableHeader title="50K Lucid Flex考试账号" colorClass="bg-[#C53030]" />
                  <TableHeader title="150K Lucid Flex考试账号" colorClass="bg-[#C53030]" />
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="bg-[#FFF5F5] p-4 font-bold border border-[#FEE2E2]">价格</td>
                  <td className="p-4 border border-[#FEE2E2] text-center"><span className="text-[#C53030] font-bold text-2xl">78</span> (6折免激活)<SmallText>(一次性费用，无月费)</SmallText></td>
                  <td className="p-4 border border-[#FEE2E2] text-center"><span className="text-[#C53030] font-bold text-2xl">220</span> (7折免激活)<SmallText>(一次性费用，无月费)</SmallText></td>
                </tr>
                <tr>
                  <td className="bg-[#FFF5F5] p-4 font-bold border border-[#FEE2E2]">回撤 (EOD模式)</td>
                  <td className="p-4 border border-[#FEE2E2] text-center"><RedBold>EOD回撤 2000</RedBold> (无日损)<br/><BlueInfo>考试最多4手</BlueInfo></td>
                  <td className="p-4 border border-[#FEE2E2] text-center"><RedBold>EOD回撤 4500</RedBold> (无日损)<br/><BlueInfo>考试最多10手</BlueInfo></td>
                </tr>
                <tr>
                  <td className="bg-[#FFF5F5] p-4 font-bold border border-[#FEE2E2]">考试通过目标</td>
                  <td className="p-4 border border-[#FEE2E2] text-center font-bold text-xl text-[#C53030]">3000</td>
                  <td className="p-4 border border-[#FEE2E2] text-center font-bold text-xl text-[#C53030]">9000</td>
                </tr>
                <tr>
                  <td className="bg-[#FFF5F5] p-4 font-bold border border-[#FEE2E2]">一致性</td>
                  <td colSpan={2} className="p-4 border border-[#FEE2E2]">
                    <RedBold>考试号无日损、50%一致性最快2天过</RedBold> <SmallText>(即50k考试日盈利不超1500, 150k考试日盈利不超4500)</SmallText>
                    <RedBold>出金号无日损、无一致性要求，不需要打缓冲区</RedBold> <SmallText>(出金号初始最大手数: 50k 2手, 150k 4手)</SmallText>
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#FFF5F5] p-4 font-bold border border-[#FEE2E2]">出金要求</td>
                  <td colSpan={2} className="p-4 border border-[#FEE2E2]">
                    <RedBold>出金只需要满足2个要求：①5个盈利日 ②每个支付周期内的利润为正值</RedBold><br/>
                    出金出利润的50%，有单次最高限额 (50k=2000, 150k=3000)<br/>
                    <SmallText>关于盈利日的说明：50k日利润大于150算盈利日，150k为250</SmallText>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table 2: Flex 2 */}
          <SectionTitle>📌 Lucid Flex考试规则2：(仅限11月28日后购买)</SectionTitle>
          <div className="overflow-x-auto rounded-xl shadow-md mb-16 border border-[#FEE2E2]">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="bg-[#FFF5F5] w-48 font-bold text-[#9B2C2C] p-4 border border-[#FEE2E2]">LUCIDTRADING</th>
                  <TableHeader title="25K Lucid Flex考试账号" colorClass="bg-[#C53030]" />
                  <TableHeader title="50K Lucid Flex考试账号" colorClass="bg-[#C53030]" />
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="bg-[#FFF5F5] p-4 font-bold border border-[#FEE2E2]">价格</td>
                  <td className="p-4 border border-[#FEE2E2] text-center"><span className="text-[#C53030] font-bold text-2xl">60</span> (6折免激活)<SmallText>(一次性费用，无月费)</SmallText></td>
                  <td className="p-4 border border-[#FEE2E2] text-center"><span className="text-[#C53030] font-bold text-2xl">78</span> (6折免激活)<SmallText>(一次性费用，无月费)</SmallText></td>
                </tr>
                <tr>
                  <td className="bg-[#FFF5F5] p-4 font-bold border border-[#FEE2E2]">回撤 (EOD模式)</td>
                  <td className="p-4 border border-[#FEE2E2] text-center"><RedBold>EOD回撤 1000</RedBold> (无日损)<br/><BlueInfo>考试最多2手</BlueInfo></td>
                  <td className="p-4 border border-[#FEE2E2] text-center"><RedBold>EOD回撤 2000</RedBold> (无日损)<br/><BlueInfo>考试最多4手</BlueInfo></td>
                </tr>
                <tr>
                  <td className="bg-[#FFF5F5] p-4 font-bold border border-[#FEE2E2]">考试通过目标</td>
                  <td className="p-4 border border-[#FEE2E2] text-center font-bold text-xl text-[#C53030]">1250</td>
                  <td className="p-4 border border-[#FEE2E2] text-center font-bold text-xl text-[#C53030]">3000</td>
                </tr>
                <tr>
                  <td className="bg-[#FFF5F5] p-4 font-bold border border-[#FEE2E2]">出金举例</td>
                  <td className="p-4 border border-[#FEE2E2]">
                    <RedBold>25k前6次出金最高$1000 (最低500)</RedBold><br/>
                    <SmallText>举例：25k做2000利润 (满足5个100盈利日)，第一笔可以出1000美金，剩下的1000美金回撤继续做1000可以第二次出1000。</SmallText>
                  </td>
                  <td className="p-4 border border-[#FEE2E2]">
                    <RedBold>50k前6次出金最高$2000 (最低500)</RedBold><br/>
                    <SmallText>举例：50k做2600利润 (满足5个150盈利日)，第一笔可以出1300美金，剩下的1300美金回撤继续种田5天150，第二次出 (1300+150*5) * 50%</SmallText>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table 3: Pro Eval 1 */}
          <SectionTitle>📘 Lucid Pro Eval考试账户规则1：（仅限11月28日后购买或重置）</SectionTitle>
          <div className="overflow-x-auto rounded-xl shadow-md mb-16 border border-[#FEE2E2]">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="bg-[#FFF5F5] w-48 font-bold text-[#9B2C2C] p-4 border border-[#FEE2E2]">LUCIDTRADING</th>
                  <TableHeader title="25K LucidPro Eval考试账号" colorClass="bg-[#E53E3E]" />
                  <TableHeader title="50K LucidPro Eval考试账号" colorClass="bg-[#E53E3E]" />
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="bg-[#FFF5F5] p-4 font-bold border border-[#FEE2E2]">价格</td>
                  <td className="p-4 border border-[#FEE2E2] text-center"><span className="text-[#C53030] font-bold text-2xl">84</span> (7折免激活)<SmallText>(一次性费用，无月费)</SmallText></td>
                  <td className="p-4 border border-[#FEE2E2] text-center"><span className="text-[#C53030] font-bold text-2xl">112</span> (7折免激活)<SmallText>(一次性费用，无月费)</SmallText></td>
                </tr>
                <tr>
                  <td className="bg-[#FFF5F5] p-4 font-bold border border-[#FEE2E2]">回撤 (EOD模式)</td>
                  <td className="p-4 border border-[#FEE2E2] text-center"><RedBold>EOD回撤 1000</RedBold> (无日损)<br/><BlueInfo>最多2手</BlueInfo></td>
                  <td className="p-4 border border-[#FEE2E2] text-center"><RedBold>EOD回撤 2000</RedBold> (日损1200)<br/><BlueInfo>最多4手</BlueInfo></td>
                </tr>
                <tr>
                  <td className="bg-[#FFF5F5] p-4 font-bold border border-[#FEE2E2]">考试目标</td>
                  <td className="p-4 border border-[#FEE2E2] text-center font-bold text-xl text-[#E53E3E]">1250</td>
                  <td className="p-4 border border-[#FEE2E2] text-center font-bold text-xl text-[#E53E3E]">3000</td>
                </tr>
                <tr>
                  <td className="bg-[#FFF5F5] p-4 font-bold border border-[#FEE2E2]">一致性</td>
                  <td colSpan={2} className="p-4 border border-[#FEE2E2] text-center bg-slate-50">
                    <RedBold>考试号无一致性要求可以1天过；出金号有40%一致性要求。</RedBold>
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#FFF5F5] p-4 font-bold border border-[#FEE2E2]">出金要求</td>
                  <td colSpan={2} className="p-4 border border-[#FEE2E2]">
                    <RedBold>25k利润至少超过1100的部分，50k利润至少超过2100的部分，方可出金；</RedBold><br/>
                    满足40%一致性+5个盈利日 (25k超50算盈利日，50k为100)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table 4: Pro Eval 2 */}
          <SectionTitle>📘 Lucid Pro Eval考试账户规则2：（仅限11月28日后购买或重置）</SectionTitle>
          <div className="overflow-x-auto rounded-xl shadow-md mb-16 border border-[#FEE2E2]">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="bg-[#FFF5F5] w-48 font-bold text-[#9B2C2C] p-4 border border-[#FEE2E2]">LUCIDTRADING</th>
                  <TableHeader title="100K LucidPro Eval考试账号" colorClass="bg-[#E53E3E]" />
                  <TableHeader title="150K LucidPro Eval考试账号" colorClass="bg-[#E53E3E]" />
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="bg-[#FFF5F5] p-4 font-bold border border-[#FEE2E2]">价格</td>
                  <td className="p-4 border border-[#FEE2E2] text-center"><span className="text-[#C53030] font-bold text-2xl">192</span> (7折免激活)<SmallText>(一次性费用，无月费)</SmallText></td>
                  <td className="p-4 border border-[#FEE2E2] text-center"><span className="text-[#C53030] font-bold text-2xl">259</span> (7折免激活)<SmallText>(一次性费用，无月费)</SmallText></td>
                </tr>
                <tr>
                  <td className="bg-[#FFF5F5] p-4 font-bold border border-[#FEE2E2]">回撤 (EOD模式)</td>
                  <td className="p-4 border border-[#FEE2E2] text-center"><RedBold>EOD回撤 3000</RedBold> (日损1800)<br/><BlueInfo>最多6手</BlueInfo></td>
                  <td className="p-4 border border-[#FEE2E2] text-center"><RedBold>EOD回撤 4500</RedBold> (日损2700)<br/><BlueInfo>最多10手</BlueInfo></td>
                </tr>
                <tr>
                  <td className="bg-[#FFF5F5] p-4 font-bold border border-[#FEE2E2]">出金举例</td>
                  <td className="p-4 border border-[#FEE2E2]">
                    <RedBold>100k前2次出金最高$2000 (最低500)</RedBold><br/>
                    <SmallText>第3和第4次单笔最高$2500，后续单笔$3000</SmallText>
                  </td>
                  <td className="p-4 border border-[#FEE2E2]">
                    <RedBold>150k前2次出金最高$3000 (最低500)</RedBold><br/>
                    <SmallText>第3和第4次单笔最高$3500，后续单笔$4000</SmallText>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table 5: Direct */}
          <SectionTitle>🟤 Lucid Direct 免考账户规则 (SIM)：</SectionTitle>
          <div className="overflow-x-auto rounded-xl shadow-md mb-8 border border-[#FEE2E2]">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="bg-[#FFF5F5] w-48 font-bold text-[#9B2C2C] p-4 border border-[#FEE2E2]">LUCIDTRADING</th>
                  <TableHeader title="50K LucidDirect免考SIM账号" colorClass="bg-[#822727]" />
                  <TableHeader title="150K LucidDirect免考SIM账号" colorClass="bg-[#822727]" />
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="bg-[#FFF5F5] p-4 font-bold border border-[#FEE2E2]">价格 <SmallText className="text-[#C53030]">(150k 回撤 6000)</SmallText></td>
                  <td className="p-4 border border-[#FEE2E2] text-center"><span className="text-[#C53030] font-bold text-2xl">294</span> (6折参考价)<SmallText>(一次性费用)</SmallText></td>
                  <td className="p-4 border border-[#FEE2E2] text-center"><span className="text-[#C53030] font-bold text-2xl">432</span> (6折参考价)<SmallText>(一次性费用)</SmallText></td>
                </tr>
                <tr>
                  <td className="bg-[#FFF5F5] p-4 font-bold border border-[#FEE2E2]">回撤 (EOD模式)</td>
                  <td className="p-4 border border-[#FEE2E2] text-center"><RedBold>EOD回撤 2000</RedBold> (日损1200)<br/><BlueInfo>最多4手</BlueInfo></td>
                  <td className="p-4 border border-[#FEE2E2] text-center"><RedBold>EOD回撤 6000</RedBold> (日损3600)<br/><BlueInfo>最多10手</BlueInfo></td>
                </tr>
                <tr>
                  <td className="bg-[#FFF5F5] p-4 font-bold border border-[#FEE2E2]">出金利润目标</td>
                  <td className="p-4 border border-[#FEE2E2]">
                    <RedBold>第1次做3000利润可出2000</RedBold><br/>
                    <SmallText>第2-3次做2500利润可出2000，第4-6次做2500利润可出2500</SmallText>
                  </td>
                  <td className="p-4 border border-[#FEE2E2]">
                    <RedBold>第1次做9000利润可出3000</RedBold><br/>
                    <SmallText>第2-3次做4500利润可出3000，第4-6次做4500利润可出3500</SmallText>
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#FFF5F5] p-4 font-bold border border-[#FEE2E2]">一致性</td>
                  <td colSpan={2} className="p-4 border border-[#FEE2E2] text-center font-bold">
                    <RedBold>20%一致性要求；交易满 8 天</RedBold> <SmallText>(比如 150k 每日盈利不超 1800)</SmallText>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#718096] mb-16 italic text-right px-2">
            * LucidPro Eval账户，11月28日前的是35%一致性，11月28日后购买或重置的是40%一致性.
          </p>

          {/* Footer Highlights */}
          <footer className="mt-24 border-t border-[#FEE2E2] pt-16 text-center">
            <div className="bg-[#FFF5F5] border-2 border-dashed border-[#C53030] p-10 rounded-3xl max-w-3xl mx-auto shadow-xl relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#C53030] text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">
                <i className="fa-solid fa-triangle-exclamation mr-2"></i> 核心风险提示
              </div>
              <p className="text-base leading-relaxed text-slate-800 mt-4">
                LucidPro 及 LucidDirect 版本均有严格的 <span className="font-bold text-[#C53030]">一致性</span> 考核。免考 SIM 账号 (LucidDirect) 要求 <span className="font-bold text-[#C53030]">20% 一致性</span> 且需满足 <span className="font-bold text-[#C53030]">8 个交易日</span> 方可首次出金。所有账户回撤计算以 <span className="font-bold text-[#C53030]">日终余额 (EOD)</span> 为准，触发日损后当天暂停交易，第二天可继续。
              </p>
            </div>
            <p className="mt-12 text-xs text-slate-400 font-bold tracking-widest uppercase">
              © Lucid Trading 攻略指南 | 请遵循官网实时规则 | Deltapex 社区支持
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LucidRulesView;
