import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';
import Button from './Button';

interface ComparisonRow {
  dimension: string;
  traditional: string;
  blindSpot: string;
  orderFlow: string;
  solution: string;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    dimension: '1. 市场信息来源',
    traditional: '依赖 OHLC 历史开高低收价格与时间加权计算',
    blindSpot: '无法看见价格变动背后的撮合深度与真实挂单分布',
    orderFlow: '实时呈现逐笔成交（Footprint）、DOM 挂单与 Delta 净增量',
    solution: '填补微观盘口数据空白，直观洞察成交量与流动性结构',
  },
  {
    dimension: '2. 价格形成机制',
    traditional: '观察价格涨跌结果，根据 K 线形态或指标交叉判断趋势',
    blindSpot: '无法识别价格是由主动市价单推动还是限价单吸收',
    orderFlow: '追踪市价单（Market Orders）对限价单（Limit Orders）的消耗',
    solution: '理解价格变动的底层动能，区分真实推进与无量空涨空跌',
  },
  {
    dimension: '3. 买卖双方力量',
    traditional: '依靠阳线阴线或振荡指标（RSI/MACD）估算力量强弱',
    blindSpot: '无法精确区分买卖盘的主动性与被动挂单阻碍',
    orderFlow: '实时量化主动买盘（Ask Trade）与主动卖盘（Bid Trade）比例',
    solution: '准确识别买卖双方的真实主动意图，避免被表面形态误导',
  },
  {
    dimension: '4. 突破交易',
    traditional: '依赖价格超越前期高低点或结构线判断突破',
    blindSpot: '容易遭遇假突破，无法判断突破时是否有实质订单跟进',
    orderFlow: '观察突破位置的主动单堆积（Imbalance）与流动性吸收',
    solution: '评估突破质量，有效过滤假突破与流动性诱导陷阱',
  },
  {
    dimension: '5. 支撑阻力',
    traditional: '基于历史高低点、黄金分割或均线绘制静态区域',
    blindSpot: '无法判断既有支撑阻力位在当前时刻是否仍然有效',
    orderFlow: '观察关键位上的冰山委托（Icebergs）与限价单堆积/撤单',
    solution: '动态验证支撑阻力的实时拦截能力，把握真实反转点',
  },
  {
    dimension: '6. 入场时机',
    traditional: '依赖 K 线收盘确认或指标信号，易延迟入场或追涨杀跌',
    blindSpot: '无法在 K 线形成过程中获得毫秒级的精准介入点',
    orderFlow: '在微观吸收（Absorption）或失衡起爆瞬间提示执行点',
    solution: '优化入场位置与挂单时机，大幅降低滑点与追价风险',
  },
  {
    dimension: '7. 风险管理',
    traditional: '依据形态结构设定固定点位止损，易被尾迹扫损',
    blindSpot: '无法预知止损位附近是否有足够的逆向流动性承接',
    orderFlow: '观察市场参与者行为突变（如主动攻防失效）及时清仓',
    solution: '基于市场微观结构失效逻辑止损，实现更合理的风控',
  },
  {
    dimension: '8. 交易决策逻辑',
    traditional: '价格变动 → 衍生指标/形态 → 主观判断 → 执行交易',
    blindSpot: '决策依赖二次衍生数据，存在逻辑滞后与多义性',
    orderFlow: '成交行为 → 资金分布/力量博弈 → 条件触发 → 精准执行',
    solution: '建立基于订单撮合微观原理的客观、可重复决策逻辑',
  },
];

const WhyOrderFlowView: React.FC = () => {
  // State to track which dimension accordion cards are open (default 1st item open for preview)
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleAccordion = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pt-10 pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <Reveal>
          <div className="mb-10">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors bg-white px-5 py-2.5 rounded-xl border border-slate-200/80 shadow-xs hover:border-red-200"
            >
              <i className="fa-solid fa-arrow-left text-xs"></i>
              <span>返回 Deltapex 首页</span>
            </a>
          </div>
        </Reveal>

        {/* Header Hero Section */}
        <Reveal delay={0.1}>
          <div className="bg-white rounded-3xl p-8 md:p-14 border border-red-200/90 shadow-sm mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-500/10 via-red-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl">
              <span className="bg-red-100/90 text-red-600 text-xs font-black px-4 py-1.5 rounded-lg uppercase tracking-widest inline-block mb-5 border border-red-200/60">
                微观结构视角 · 交易工具认知
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                从价格观察，到市场行为理解
              </h1>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
                客观看待传统技术分析与订单流分析的补充关系。传统技术分析通过历史价格帮助我们识别形态与宏观方向，而订单流分析则透过微观盘口撮合，揭示市场价格形成背后的真实订单流动与力量对比。
              </p>
            </div>

            {/* Core Distinction Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-10 border-t border-slate-100">
              <Reveal delay={0.2}>
                <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200/80 flex items-start gap-5 hover:border-slate-300 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-slate-200/80 text-slate-700 flex items-center justify-center text-2xl shrink-0 font-bold">
                    <i className="fa-solid fa-chart-candlestick"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      传统技术分析 = 观察市场结果 (Output)
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      记录历史价格演变、K线形态与统计概率。提供宏观结构与历史参考，但无法呈现当下的微观撮合细节。
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="bg-red-50/70 p-7 rounded-2xl border border-red-200/80 flex items-start gap-5 hover:border-red-300 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center text-2xl shrink-0 font-bold shadow-sm">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      订单流分析 = 观察成交过程 (Process)
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      直接追踪买卖盘匹配、市价单消耗与限价单阻碍。提供毫秒级的第一手资金意图，验证价格变动的真实动能。
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>

        {/* Section Title */}
        <Reveal delay={0.1}>
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              8维深度对比：分析维度与信息盲区
            </h2>
            <p className="text-slate-500 text-sm md:text-base mt-2">
              点击下方各个维度，展开查看对比详情与微观解决思路
            </p>
          </div>
        </Reveal>

        {/* 8 Separated Collapsible Items */}
        <div className="space-y-8 mb-20">
          {COMPARISON_DATA.map((row, idx) => {
            const isOpen = openIndices.includes(idx);

            return (
              <Reveal key={idx} delay={0.05}>
                <div className="bg-white rounded-2xl border border-red-200/80 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden">
                  
                  {/* Clickable Accordion Header */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/80 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-9 h-9 rounded-xl bg-red-100 text-red-600 font-black flex items-center justify-center text-sm shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        0{idx + 1}
                      </span>
                      <h3 className="text-lg md:text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-red-600 transition-colors">
                        {row.dimension}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-semibold text-slate-500 group-hover:text-red-600 transition-colors hidden sm:inline-block">
                        {isOpen ? '收起详情' : '展开对比'}
                      </span>
                      <div className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 group-hover:border-red-300 group-hover:text-red-600 transition-all duration-300 ${isOpen ? 'rotate-180 bg-red-50 text-red-600 border-red-200' : ''}`}>
                        <i className="fa-solid fa-chevron-down text-xs"></i>
                      </div>
                    </div>
                  </button>

                  {/* Collapsible Content */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-2 border-t border-slate-100">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                        {/* 传统技术分析 */}
                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 hover:border-slate-300 transition-colors">
                          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                            <i className="fa-solid fa-chart-line text-slate-400"></i>
                            传统技术分析
                          </div>
                          <p className="text-slate-700 leading-relaxed font-normal">
                            {row.traditional}
                          </p>
                        </div>

                        {/* 信息盲区 */}
                        <div className="bg-amber-50/60 p-5 rounded-xl border border-amber-200/80 hover:border-amber-300 transition-colors">
                          <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                            <i className="fa-solid fa-eye-slash text-amber-500"></i>
                            信息盲区
                          </div>
                          <p className="text-amber-950 leading-relaxed font-medium">
                            {row.blindSpot}
                          </p>
                        </div>

                        {/* 订单流分析 */}
                        <div className="bg-red-50/60 p-5 rounded-xl border border-red-200/80 hover:border-red-300 transition-colors">
                          <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                            <i className="fa-solid fa-chart-column text-red-500"></i>
                            订单流分析
                          </div>
                          <p className="text-slate-900 leading-relaxed font-semibold">
                            {row.orderFlow}
                          </p>
                        </div>

                        {/* 解决的问题 */}
                        <div className="bg-emerald-50/60 p-5 rounded-xl border border-emerald-200/80 hover:border-emerald-300 transition-colors">
                          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                            <i className="fa-solid fa-circle-check text-emerald-500"></i>
                            解决的问题
                          </div>
                          <p className="text-emerald-950 leading-relaxed font-medium">
                            {row.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Educational Summary Section - White Background */}
        <Reveal>
          <div className="bg-white rounded-3xl p-8 md:p-14 border border-red-300/80 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-red-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <span className="bg-red-100 text-red-600 text-xs font-black px-4 py-1.5 rounded-lg uppercase tracking-widest inline-block mb-5 border border-red-200/60">
                Core Mindset · 交易心法
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-5">
                融合宏观结构与微观验证，打造高胜率交易系统
              </h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10 font-normal">
                订单流并非要否定或替代传统技术分析，而是为其提供微观颗粒度的客观验证。将“宏观关键位置（支撑阻力/形态）”与“微观成交行为（吸收/失衡）”相结合，能够显著减少盲目追价，大幅提升交易执行的确定性。
              </p>

              <div className="flex flex-wrap items-center gap-5">
                <Button
                  href="#course"
                  className="px-8 py-4 rounded-xl font-bold bg-red-600 hover:bg-red-500 text-white transition-all shadow-md shadow-red-600/20"
                >
                  <i className="fa-solid fa-graduation-cap mr-2"></i>
                  探索 Deltapex 实战订单流课程
                </Button>

                <a
                  href="#"
                  className="px-6 py-4 rounded-xl font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200"
                >
                  返回首页
                </a>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
};

export default WhyOrderFlowView;
