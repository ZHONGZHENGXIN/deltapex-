import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';
import Button from './Button';

interface DirectoryItem {
  id: string;
  title: string;
  featured?: boolean;
}

const QUESTIONS_DIRECTORY: DirectoryItem[] = [
  {
    id: 'q-trading-winner',
    title: 'Q: 如何成为交易的赢家？',
    featured: true,
  },
  {
    id: 'q-course-profit',
    title: 'Q: 学完课程，就一定可以赚钱吗？',
  },
  {
    id: 'q-sell-courses',
    title: 'Q: 交易赚钱的都不会出来卖课，出来卖课的交易都不赚钱？',
  },
  {
    id: 'q-course-value',
    title: 'Q: 购买课程 = 被割韭菜？',
  },
  {
    id: 'q-trust-deltapex',
    title: 'Q: Deltapex 值得信任吗？会不会又被骗？',
  },
  {
    id: 'q-course-price',
    title: 'Q: 课程费用贵？',
  },
  {
    id: 'q-orderflow-invalidation',
    title: 'Q: 订单流的方法学的人多后，会不会失效？',
  }
];

const FaqView: React.FC = () => {
  // State for tracked expanded cards. Default all collapsed ({})
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // If URL has hash matching a question id, auto expand and scroll
    const hash = window.location.hash.replace('#', '');
    if (hash && QUESTIONS_DIRECTORY.some(q => q.id === hash)) {
      setExpandedMap({ [hash]: true });
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const yOffset = -90;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleBackClick = () => {
    window.location.hash = '';
  };

  const toggleQuestion = (id: string) => {
    setExpandedMap(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const scrollToAndExpand = (id: string) => {
    setExpandedMap(prev => ({
      ...prev,
      [id]: true
    }));
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -90;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    QUESTIONS_DIRECTORY.forEach(q => {
      allExpanded[q.id] = true;
    });
    setExpandedMap(allExpanded);
  };

  const collapseAll = () => {
    setExpandedMap({});
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pt-6 pb-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Top Navigation */}
        <nav className="mb-8 flex items-center justify-between">
          <button 
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-[#E60012] font-semibold text-sm transition-colors cursor-pointer bg-white px-4 py-2 rounded-full border border-slate-200 shadow-xs"
          >
            <i className="fa-solid fa-arrow-left"></i>
            <span>返回首页</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <button
              onClick={expandAll}
              className="px-3 py-1.5 bg-white border border-slate-200 hover:border-slate-300 rounded-lg hover:text-slate-900 transition-colors cursor-pointer"
            >
              全部展开
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-1.5 bg-white border border-slate-200 hover:border-slate-300 rounded-lg hover:text-slate-900 transition-colors cursor-pointer"
            >
              全部折叠
            </button>
          </div>
        </nav>

        {/* Hero Header */}
        <div className="text-center mb-10">
          <span className="bg-red-100 text-[#E60012] text-xs md:text-sm font-extrabold px-4 py-1.5 rounded-full tracking-widest uppercase inline-block mb-3 border border-red-200/80 shadow-xs">
            START HERE · COMMON QUESTIONS
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            你问我答
          </h1>
          <p className="text-slate-500 font-semibold text-sm md:text-base mt-2 tracking-wide flex items-center justify-center gap-1.5">
            <i className="fa-solid fa-feather text-xs text-[#E60012]"></i>
            <span>Compiled by Kenneth</span>
          </p>
        </div>

        {/* ================= TABLE OF CONTENTS (目录栏) ================= */}
        <Reveal>
          <div className="bg-white rounded-3xl p-6 md:p-8 mb-10 shadow-sm border border-slate-200">
            <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-5 pb-3 border-b border-slate-100 flex items-center gap-2.5">
              <i className="fa-solid fa-list-ul text-[#E60012]"></i>
              常见问题目录
            </h2>

            <div className="space-y-2.5">
              {QUESTIONS_DIRECTORY.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToAndExpand(item.id)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl transition-all group flex items-center justify-between gap-3 cursor-pointer ${
                    item.featured
                      ? 'bg-red-50/80 hover:bg-red-100/90 border-2 border-red-200'
                      : 'bg-slate-50 hover:bg-red-50/70 border border-slate-200/80 hover:border-red-200'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className={`w-6 h-6 rounded-md font-bold text-xs flex items-center justify-center shrink-0 transition-colors ${
                      item.featured
                        ? 'bg-[#E60012] text-white'
                        : 'bg-slate-200 group-hover:bg-[#E60012] text-slate-700 group-hover:text-white'
                    }`}>
                      {index + 1}
                    </span>
                    <span className="font-bold text-slate-900 text-base md:text-lg group-hover:text-[#E60012] transition-colors truncate">
                      {item.title}
                    </span>
                    {item.featured && (
                      <span className="hidden sm:inline-block shrink-0 bg-[#E60012] text-white text-[11px] font-black px-2.5 py-0.5 rounded-md tracking-wider">
                        核心心法 · 必读
                      </span>
                    )}
                  </div>

                  <div className="shrink-0 text-slate-400 group-hover:text-[#E60012] transition-colors">
                    <i className="fa-solid fa-arrow-down-long text-xs group-hover:translate-y-0.5 transition-transform"></i>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ================= QUESTIONS LIST (DETAILED CARDS - 白底黑字) ================= */}
        <div className="space-y-8">

          {/* QUESTION 0: 如何成为交易的赢家？ (核心心法 · 置顶) */}
          <div id="q-trading-winner" className="scroll-mt-24">
            <Reveal>
              <div className={`bg-white rounded-3xl border-2 transition-all duration-300 overflow-hidden ${
                expandedMap['q-trading-winner'] 
                  ? 'border-red-400 shadow-2xl ring-4 ring-red-100' 
                  : 'border-red-200 hover:border-red-300 shadow-md'
              }`}>
                {/* Banner Header - 包含置顶高亮标签 */}
                <div 
                  onClick={() => toggleQuestion('q-trading-winner')}
                  className="bg-gradient-to-r from-red-50/60 via-white to-white hover:bg-slate-50 p-6 md:p-8 text-slate-900 relative cursor-pointer select-none flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#E60012] text-white text-xs font-black px-3 py-1 rounded-full tracking-wider shadow-sm flex items-center gap-1.5">
                        <i className="fa-solid fa-crown text-amber-300"></i> 核心心法 · 置顶
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug tracking-tight">
                      Q: 如何成为交易的赢家？
                    </h2>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 bg-red-100/80 hover:bg-red-200/80 px-4 py-2.5 rounded-full border border-red-200 text-xs md:text-sm font-bold text-red-700 transition-all self-start md:self-auto">
                    <span>{expandedMap['q-trading-winner'] ? '收起回答' : '点击展开阅读核心心法'}</span>
                    <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${expandedMap['q-trading-winner'] ? 'rotate-180' : ''}`}></i>
                  </div>
                </div>

                {/* Collapsible Content Body */}
                {expandedMap['q-trading-winner'] && (
                  <div className="p-6 md:p-10 text-slate-800 space-y-6 text-lg md:text-xl leading-relaxed font-normal animate-fadeIn border-t border-red-100 bg-white">
                    
                    {/* Big Key Highlight Banner */}
                    <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white p-6 md:p-8 rounded-2xl shadow-lg space-y-3">
                      <div className="flex items-center gap-2 text-amber-300 text-xs md:text-sm font-black tracking-widest uppercase">
                        <i className="fa-solid fa-fire-flame-curved"></i>
                        成为赢家的第一步
                      </div>
                      <p className="text-xl md:text-3xl font-black leading-tight tracking-tight">
                        从停止责任外包，为自己任何行为承担 100% 的责任开始！
                      </p>
                    </div>

                    <p className="text-slate-800 font-medium leading-relaxed">
                      交易者无法控制市场，但必须对自己的交易结果承担责任。
                    </p>

                    <p className="bg-slate-50 p-5 md:p-6 rounded-2xl border border-slate-200 text-slate-700 text-base md:text-lg">
                      市场不会因为你努力学习就按预期运行，也不会因为你的分析有道理就一定给出利润。行情、波动、突发消息和其他参与者的行为，都不受个人控制。
                    </p>

                    <p>
                      课程可以提供方法，导师可以分享经验，工具可以提高信息处理效率，但没有任何人可以替你完成观察、判断、执行、承担亏损和持续复盘的过程。
                    </p>

                    <div className="bg-red-50/90 border-l-4 border-[#E60012] p-5 md:p-6 rounded-r-2xl text-slate-900 font-extrabold text-lg md:text-xl">
                      最终按下交易按钮的是你，决定仓位大小的是你，是否遵守规则的也是你。
                    </div>

                    {/* 4个“不需要负责”卡片矩阵 */}
                    <div className="space-y-3 pt-2">
                      <p className="font-black text-slate-900 text-lg md:text-xl flex items-center gap-2">
                        <i className="fa-solid fa-[#E60012] fa-shield-halved text-[#E60012]"></i>
                        时刻清醒：4 个不可推卸的边界
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div className="bg-slate-900 text-white p-4 md:p-5 rounded-xl space-y-1">
                          <span className="text-red-400 font-black text-xs uppercase tracking-wider block">01 / 市场</span>
                          <p className="text-slate-200 font-bold text-base md:text-lg">不需要为任何人的许愿与期待负责。</p>
                        </div>
                        <div className="bg-slate-900 text-white p-4 md:p-5 rounded-xl space-y-1">
                          <span className="text-red-400 font-black text-xs uppercase tracking-wider block">02 / 导师</span>
                          <p className="text-slate-200 font-bold text-base md:text-lg">不需要为你的仓位负责。</p>
                        </div>
                        <div className="bg-slate-900 text-white p-4 md:p-5 rounded-xl space-y-1">
                          <span className="text-red-400 font-black text-xs uppercase tracking-wider block">03 / 工具</span>
                          <p className="text-slate-200 font-bold text-base md:text-lg">不需要为你的执行负责。</p>
                        </div>
                        <div className="bg-slate-900 text-white p-4 md:p-5 rounded-xl space-y-1">
                          <span className="text-red-400 font-black text-xs uppercase tracking-wider block">04 / 课程</span>
                          <p className="text-slate-200 font-bold text-base md:text-lg">不需要为你的最终盈亏负责。</p>
                        </div>
                      </div>
                    </div>

                    {/* Core Mindset Conclusion Box */}
                    <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl shadow-lg space-y-4 border-l-4 border-amber-400">
                      <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                        真正的交易能力，始于停止把责任交给市场、方法和他人，并对每一个可控的交易决定承担全部责任。
                      </p>
                      <p className="text-amber-300 font-black text-lg md:text-2xl leading-snug pt-2 border-t border-slate-800">
                        因此，成为交易赢家的第一步，不是寻找一个永远正确的指标，而是建立一种不把责任外包的思维方式。
                      </p>
                    </div>

                    <div className="pt-4 text-center">
                      <button
                        onClick={() => toggleQuestion('q-trading-winner')}
                        className="text-sm font-bold text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-5 py-2.5 rounded-full cursor-pointer transition-colors"
                      >
                        <i className="fa-solid fa-chevron-up mr-1.5"></i> 收起该回答
                      </button>
                    </div>

                  </div>
                )}
              </div>
            </Reveal>
          </div>

          {/* QUESTION 1: 学完课程，就一定可以赚钱吗？ */}
          <div id="q-course-profit" className="scroll-mt-24">
            <Reveal>
              <div className={`bg-white rounded-3xl border-2 transition-all duration-300 overflow-hidden ${
                expandedMap['q-course-profit'] 
                  ? 'border-red-300 shadow-xl ring-2 ring-red-100' 
                  : 'border-slate-200 hover:border-red-200 shadow-sm'
              }`}>
                {/* Banner Header - 白底黑字 */}
                <div 
                  onClick={() => toggleQuestion('q-course-profit')}
                  className="bg-white hover:bg-slate-50/80 p-6 md:p-8 text-slate-900 relative cursor-pointer select-none flex items-center justify-between gap-4 transition-colors"
                >
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug tracking-tight">
                      Q: 学完课程，就一定可以赚钱吗？
                    </h2>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-full border border-slate-200 text-xs md:text-sm font-bold text-slate-700 transition-all">
                    <span>{expandedMap['q-course-profit'] ? '收起回答' : '点击展开阅读'}</span>
                    <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${expandedMap['q-course-profit'] ? 'rotate-180' : ''}`}></i>
                  </div>
                </div>

                {/* Collapsible Content Body - 字体统一放大 (text-lg md:text-xl) */}
                {expandedMap['q-course-profit'] && (
                  <div className="p-6 md:p-10 text-slate-800 space-y-6 text-lg md:text-xl leading-relaxed font-normal animate-fadeIn border-t border-slate-100 bg-white">
                    
                    {/* Highlight Introduction */}
                    <div className="bg-red-50/90 border-l-4 border-[#E60012] p-5 md:p-6 rounded-r-2xl text-slate-900 font-bold text-xl md:text-2xl">
                      现实很残酷 —— 不能！
                    </div>

                    <p>
                      因为交易的第一性原理是：市场不会因为工具更先进、信息更多或交易者接受过培训，就让所有参与者同时获得超额收益。
                    </p>

                    <p className="bg-slate-50 p-5 md:p-6 rounded-2xl border border-slate-100 text-slate-700 text-lg md:text-xl">
                      尤其在短线主动交易中，一方获得更好的成交价格，往往意味着另一方接受了更差的价格；再扣除手续费、滑点、点差、数据和软件成本后，参与者整体面对的是一场高度竞争、甚至接近负和的博弈。
                    </p>

                    <p className="font-semibold text-slate-900">
                      因此，无论使用K线、技术指标、量化模型还是订单流工具，都不可能让所有学习者同时成为盈利者，长期赢家的比例始终只是很小的一部分。
                    </p>

                    {/* What determines final outcome box */}
                    <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl shadow-md space-y-4">
                      <p className="text-red-400 font-bold text-xs md:text-sm uppercase tracking-widest flex items-center gap-2">
                        <i className="fa-solid fa-sliders text-[#E60012]"></i>
                        决定最终结果的关键因素
                      </p>
                      <p className="text-lg md:text-xl text-slate-200">
                        工具会进步，数据会增加，策略会传播，但市场竞争也会同步升级。当越来越多的人掌握相似的信息和技术时，决定最终结果的就不再只是“是否学过”，而是：
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                        {[
                          "是否能够正确理解市场环境",
                          "是否具有独立判断能力",
                          "是否愿意进行长期训练和复盘",
                          "是否能够控制仓位与单次损失",
                          "是否能在连续亏损和不确定性中保持执行纪律",
                          "是否具备比其他参与者更稳定的决策质量",
                        ].map((item, idx) => (
                          <div key={idx} className="bg-white/10 p-4 rounded-xl border border-white/10 text-slate-100 text-base md:text-lg flex items-start gap-3 font-medium">
                            <span className="w-6 h-6 rounded-md bg-[#E60012] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                              0{idx + 1}
                            </span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p>
                      所以，课程不能把一个竞争性市场变成人人盈利的市场，也不能改变大多数缺乏训练、风险失控和执行不稳定的参与者最终被淘汰的事实。
                    </p>

                    <div className="bg-red-50/80 border border-red-200/80 p-6 rounded-2xl space-y-2">
                      <p className="font-black text-slate-900 text-lg md:text-xl flex items-center gap-2">
                        <i className="fa-solid fa-bullseye text-[#E60012]"></i>
                        课程真正能做的是什么？
                      </p>
                      <p className="text-slate-800 leading-relaxed text-base md:text-lg font-medium">
                        帮助学习者减少明显错误，提高信息处理效率，建立更完整的分析、执行、风控和复盘框架，从而提升自己在竞争中生存下来的概率。
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-black text-slate-900 text-xl md:text-2xl flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#E60012]"></span>
                        “提高概率” 不等于 “保证结果”
                      </h3>
                      <p>
                        就像专业训练不能保证每一名运动员都成为冠军，交易课程也不能保证每一名学员都稳定盈利。课程提供的是更好的训练条件和更清晰的进阶路径，最终能否形成竞争优势，仍然取决于学习者自身的理解、训练、风险控制和长期执行。
                      </p>
                    </div>

                    {/* Conclusion Banner */}
                    <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white p-6 md:p-8 rounded-2xl shadow-md space-y-3">
                      <p className="font-black text-xl md:text-2xl flex items-center gap-2">
                        <i className="fa-solid fa-shield-halved"></i>
                        清醒总结：
                      </p>
                      <p className="text-red-100 text-base md:text-lg leading-relaxed">
                        我们不能承诺你学完课程后一定赚钱，因为任何声称能够让大多数人轻松盈利的方法，都违背了交易市场的竞争本质。
                      </p>
                      <p className="text-amber-200 font-extrabold text-lg md:text-xl pt-2 border-t border-red-400/50">
                        课程能教会你如何训练成为交易者，但不能替你完成成为交易者的过程。
                      </p>
                    </div>

                    <div className="pt-4 text-center">
                      <button
                        onClick={() => toggleQuestion('q-course-profit')}
                        className="text-sm font-bold text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-5 py-2.5 rounded-full cursor-pointer transition-colors"
                      >
                        <i className="fa-solid fa-chevron-up mr-1.5"></i> 收起该回答
                      </button>
                    </div>

                  </div>
                )}
              </div>
            </Reveal>
          </div>

          {/* QUESTION 1 */}
          <div id="q-sell-courses" className="scroll-mt-24">
            <Reveal>
              <div className={`bg-white rounded-3xl border-2 transition-all duration-300 overflow-hidden ${
                expandedMap['q-sell-courses'] 
                  ? 'border-red-300 shadow-xl ring-2 ring-red-100' 
                  : 'border-slate-200 hover:border-red-200 shadow-sm'
              }`}>
                {/* Banner Header - 白底黑字 */}
                <div 
                  onClick={() => toggleQuestion('q-sell-courses')}
                  className="bg-white hover:bg-slate-50/80 p-6 md:p-8 text-slate-900 relative cursor-pointer select-none flex items-center justify-between gap-4 transition-colors"
                >
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug tracking-tight">
                      Q: 交易赚钱的都不会出来卖课，出来卖课的交易都不赚钱？
                    </h2>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-full border border-slate-200 text-xs md:text-sm font-bold text-slate-700 transition-all">
                    <span>{expandedMap['q-sell-courses'] ? '收起回答' : '点击展开阅读'}</span>
                    <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${expandedMap['q-sell-courses'] ? 'rotate-180' : ''}`}></i>
                  </div>
                </div>

                {/* Collapsible Content Body - 字体统一放大 (text-lg md:text-xl) */}
                {expandedMap['q-sell-courses'] && (
                  <div className="p-6 md:p-10 text-slate-800 space-y-6 text-lg md:text-xl leading-relaxed font-normal animate-fadeIn border-t border-slate-100 bg-white">
                    
                    {/* Highlight Introduction */}
                    <div className="bg-red-50/90 border-l-4 border-[#E60012] p-5 md:p-6 rounded-r-2xl text-slate-900 font-bold text-xl md:text-2xl">
                      “真正会交易的人不会卖课，卖课的人一定交易不赚钱”，听起来合理，实际上是一个过度简化的结论。
                    </div>

                    <p>
                      它隐含了一个前提：只要一个人能够通过交易赚钱，就没有任何理由再开展其他业务。但现实中，拥有一项核心能力的人，将经验产品化、规模化，是非常常见的商业行为。
                    </p>

                    <p className="bg-slate-50 p-5 md:p-6 rounded-2xl border border-slate-100 text-slate-700 text-lg md:text-xl">
                      优秀的投资人会管理基金，也会写书；优秀的运动员会参加比赛，也会担任教练；优秀的程序员会开发产品，也会出售课程。一个人通过自己的专业能力获得收入，并不意味着他只能选择单一的变现方式。
                    </p>

                    <div className="space-y-3">
                      <h3 className="font-black text-slate-900 text-xl md:text-2xl flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#E60012]"></span>
                        交易收入与教学收入的不同经济属性
                      </h3>
                      <p>
                        教育业务则可以把多年积累的方法、经验和案例转化为相对稳定、可复制的收入。对于授课者来说，这是一种收入结构的多元化，而不是对交易能力的否定。
                      </p>
                      <p>
                        同时，教学反过来会促进交易本身。把一套交易体系讲清楚，要求授课者明确自己的判断逻辑、执行标准和风险边界。这个过程本身也会倒逼交易者重新审视和完善自己的方法。
                      </p>
                    </div>

                    <div>
                      <p className="text-slate-600 italic border-t border-slate-100 pt-4 text-base md:text-lg">
                        当然，我们并不否认，交易教育行业里确实存在没有稳定交易能力、主要依靠营销和收益幻想销售课程的人。
                      </p>
                    </div>

                    {/* Shift of Focus Box */}
                    <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl shadow-md space-y-3">
                      <p className="text-red-400 font-bold text-xs md:text-sm uppercase tracking-widest">
                        CORE QUESTION SHIFT
                      </p>
                      <p className="text-xl md:text-2xl font-bold">
                        所以，真正应该讨论的问题不是：<span className="text-red-300 underline underline-offset-4 font-normal">“他卖不卖课？”</span>
                      </p>
                      <p className="text-2xl md:text-3xl font-black text-amber-300 leading-snug">
                        而是：“他是否能够提供足够真实、连续和可验证的证据，证明自己具备所教授的能力？”
                      </p>
                    </div>

                    {/* 6 Core Criteria Grid */}
                    <div className="pt-2">
                      <h3 className="font-black text-slate-900 text-xl md:text-2xl mb-4">
                        判断一个交易导师，不应只看他是否收费，也不应只看几张盈利截图，而应重点考察：
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { num: "01", text: "是否展示连续而非选择性的交易记录" },
                          { num: "02", text: "是否公开完整交易过程，而不只是盈利结果" },
                          { num: "03", text: "是否愿意讲解亏损、回撤和错误" },
                          { num: "04", text: "是否有清晰一致的交易逻辑和风险管理体系" },
                          { num: "05", text: "课程内容是否能够独立成立，而不是依赖跟单和收益承诺" },
                          { num: "06", text: "长期言行一致，是否经得起持续验证" },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3.5 bg-slate-50 p-4.5 rounded-xl border border-slate-200/80">
                            <span className="bg-red-100 text-[#E60012] font-black text-sm px-3 py-1 rounded-md shrink-0">
                              {item.num}
                            </span>
                            <span className="text-slate-900 font-bold text-base md:text-lg leading-snug">
                              {item.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Conclusion Banner */}
                    <div className="bg-red-50/80 border border-red-200/80 p-6 rounded-2xl mt-6 space-y-2">
                      <p className="font-black text-slate-900 text-lg md:text-xl">
                        结论：
                      </p>
                      <p className="text-slate-800 leading-relaxed text-base md:text-lg font-medium">
                        卖课不能证明一个人不会交易，就像不卖课也不能证明一个人真的会交易。
                      </p>
                      <p className="text-[#E60012] font-bold text-lg md:text-xl">
                        是否有真实能力，要靠证据判断；是否值得信任，要靠长期行为判断，而不是简单地根据“卖不卖课”下结论。
                      </p>
                    </div>

                    <div className="pt-4 text-center">
                      <button
                        onClick={() => toggleQuestion('q-sell-courses')}
                        className="text-sm font-bold text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-5 py-2.5 rounded-full cursor-pointer transition-colors"
                      >
                        <i className="fa-solid fa-chevron-up mr-1.5"></i> 收起该回答
                      </button>
                    </div>

                  </div>
                )}
              </div>
            </Reveal>
          </div>

          {/* QUESTION 2 */}
          <div id="q-course-value" className="scroll-mt-24">
            <Reveal delay={0.05}>
              <div className={`bg-white rounded-3xl border-2 transition-all duration-300 overflow-hidden ${
                expandedMap['q-course-value'] 
                  ? 'border-red-300 shadow-xl ring-2 ring-red-100' 
                  : 'border-slate-200 hover:border-red-200 shadow-sm'
              }`}>
                {/* Banner Header - 白底黑字 */}
                <div 
                  onClick={() => toggleQuestion('q-course-value')}
                  className="bg-white hover:bg-slate-50/80 p-6 md:p-8 text-slate-900 relative cursor-pointer select-none flex items-center justify-between gap-4 transition-colors"
                >
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug tracking-tight">
                      Q: 购买课程 = 被割韭菜？
                    </h2>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-full border border-slate-200 text-xs md:text-sm font-bold text-slate-700 transition-all">
                    <span>{expandedMap['q-course-value'] ? '收起回答' : '点击展开阅读'}</span>
                    <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${expandedMap['q-course-value'] ? 'rotate-180' : ''}`}></i>
                  </div>
                </div>

                {/* Collapsible Content Body - 字体统一放大 (text-lg md:text-xl) */}
                {expandedMap['q-course-value'] && (
                  <div className="p-6 md:p-10 text-slate-800 space-y-6 text-lg md:text-xl leading-relaxed font-normal animate-fadeIn border-t border-slate-100 bg-white">
                    
                    {/* Highlight Introduction */}
                    <div className="bg-slate-900 text-white p-6 rounded-2xl font-medium border-l-4 border-[#E60012]">
                      <span className="text-red-400 font-bold block mb-1 text-xs md:text-sm tracking-wider uppercase">CORE PERSPECTIVE</span>
                      <p className="text-xl md:text-2xl font-bold">
                        交易授课不是零和博弈，而是一种合作共赢的正和价值交换。
                      </p>
                    </div>

                    <p>
                      有人认为，交易本身存在输赢，因此交易教学也必然是一方获利、另一方受损。但这混淆了两个完全不同的场景。
                    </p>

                    <p className="bg-slate-50 p-5 md:p-6 rounded-2xl border border-slate-100 text-slate-700 text-lg md:text-xl">
                      在交易市场中，部分品种的参与者确实存在直接的盈亏对手关系；但在交易教育中，老师和学员并不是交易对手，而是共同参与一场价值交换。授课者将多年交易中积累的方法、经验、踩过的坑和复盘体系进行整理，帮助学员减少重复试错；学员通过支付合理的课程费用，获得一条更加清晰、系统和高效的学习路径。
                    </p>

                    {/* Multi-party Benefit Breakdown */}
                    <div className="pt-2 space-y-4">
                      <h3 className="font-black text-slate-900 text-xl md:text-2xl flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#E60012]"></span>
                        在这个知识传递与陪伴过程中：
                      </h3>
                      
                      <div className="space-y-3.5">
                        <div className="flex items-start gap-4 bg-red-50/60 p-5 rounded-2xl border border-red-100">
                          <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 font-bold text-base mt-0.5">
                            <i className="fa-solid fa-user-graduate"></i>
                          </div>
                          <div>
                            <h4 className="font-black text-slate-900 text-lg md:text-xl">对于学员</h4>
                            <p className="text-slate-700 text-base md:text-lg leading-relaxed mt-1">
                              获得的是知识、方法、训练框架和决策能力，显著降低无效盲目摸索与资金亏损的成本。
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                          <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 font-bold text-base mt-0.5">
                            <i className="fa-solid fa-chalkboard-user"></i>
                          </div>
                          <div>
                            <h4 className="font-black text-slate-900 text-lg md:text-xl">对于授课者</h4>
                            <p className="text-slate-700 text-base md:text-lg leading-relaxed mt-1">
                              获得对自身知识和经验的合理回报，同时通过教学倒逼自己梳理和完善交易体系，实现正所谓“教学相长”。
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                          <div className="w-10 h-10 rounded-xl bg-slate-700 text-white flex items-center justify-center shrink-0 font-bold text-base mt-0.5">
                            <i className="fa-solid fa-users-gear"></i>
                          </div>
                          <div>
                            <h4 className="font-black text-slate-900 text-lg md:text-xl">对于课程团队与社区</h4>
                            <p className="text-slate-700 text-base md:text-lg leading-relaxed mt-1">
                              获得持续研发收入后，有能力投入更多资源去更新实战案例、优化课程架构、提供解答与建立更完善的长远学习服务。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-800 font-bold pt-2">
                      因此，一门真正有价值的交易课程，并不是把财富从学员手中转移到老师手中，而是通过知识传递创造新的价值，双方都是收益者。
                    </p>

                    {/* Premise and Principles */}
                    <div className="bg-amber-50/90 border border-amber-200 p-6 rounded-2xl text-amber-950 text-base md:text-lg leading-relaxed">
                      <span className="font-black block mb-1 text-amber-950 flex items-center gap-2 text-lg md:text-xl">
                        <i className="fa-solid fa-triangle-exclamation text-amber-600"></i>
                        互利共赢的前提条件：
                      </span>
                      课程必须提供真实内容，明确能力边界，不夸大收益，不承诺结果，并让学员获得与其付出相匹配的学习价值。
                    </div>

                    <p className="text-slate-700">
                      我们不认为所有人都必须购买交易课程，也不认为一门课程能够替代长期训练。但对于希望系统学习、减少无效试错的人来说，优质课程可以提高学习效率；对于真正有经验的交易者来说，授课则能够将个人能力沉淀迭代。
                    </p>

                    {/* Conclusion Banner */}
                    <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white p-6 md:p-8 rounded-2xl shadow-md space-y-2">
                      <p className="font-extrabold text-lg md:text-xl flex items-center gap-2">
                        <i className="fa-solid fa-handshake"></i>
                        正和博弈结语：
                      </p>
                      <p className="text-red-100 text-base md:text-lg leading-relaxed">
                        学员为有价值的知识付费，授课者为真实的交付负责。双方都因为合作而获得原本没有的收益，这才是一场真正的正和博弈。
                      </p>
                    </div>

                    <div className="pt-4 text-center">
                      <button
                        onClick={() => toggleQuestion('q-course-value')}
                        className="text-sm font-bold text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-5 py-2.5 rounded-full cursor-pointer transition-colors"
                      >
                        <i className="fa-solid fa-chevron-up mr-1.5"></i> 收起该回答
                      </button>
                    </div>

                  </div>
                )}
              </div>
            </Reveal>
          </div>

          {/* QUESTION 3 */}
          <div id="q-trust-deltapex" className="scroll-mt-24">
            <Reveal delay={0.08}>
              <div className={`bg-white rounded-3xl border-2 transition-all duration-300 overflow-hidden ${
                expandedMap['q-trust-deltapex'] 
                  ? 'border-red-300 shadow-xl ring-2 ring-red-100' 
                  : 'border-slate-200 hover:border-red-200 shadow-sm'
              }`}>
                {/* Banner Header - 白底黑字 */}
                <div 
                  onClick={() => toggleQuestion('q-trust-deltapex')}
                  className="bg-white hover:bg-slate-50/80 p-6 md:p-8 text-slate-900 relative cursor-pointer select-none flex items-center justify-between gap-4 transition-colors"
                >
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug tracking-tight">
                      Q: Deltapex 值得信任吗？会不会又被骗？
                    </h2>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-full border border-slate-200 text-xs md:text-sm font-bold text-slate-700 transition-all">
                    <span>{expandedMap['q-trust-deltapex'] ? '收起回答' : '点击展开阅读'}</span>
                    <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${expandedMap['q-trust-deltapex'] ? 'rotate-180' : ''}`}></i>
                  </div>
                </div>

                {/* Collapsible Content Body - 字体统一放大 (text-lg md:text-xl) */}
                {expandedMap['q-trust-deltapex'] && (
                  <div className="p-6 md:p-10 text-slate-800 space-y-6 text-lg md:text-xl leading-relaxed font-normal animate-fadeIn border-t border-slate-100 bg-white">
                    
                    {/* Highlight Introduction */}
                    <div className="bg-red-50/90 border-l-4 border-[#E60012] p-5 md:p-6 rounded-r-2xl text-slate-900 font-bold text-xl md:text-2xl">
                      在一个信任稀缺的行业，诚信就是最稀缺的竞争壁垒。
                    </div>

                    <p>
                      交易教育这一行良莠不齐，我们也不回避这个行业长期存在的夸大宣传、收益承诺和信息不透明。正因如此，我们相信：真正具备交易实力的人，更应该坚持诚信，这是长期竞争中的最优策略。
                    </p>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 text-slate-800 space-y-3">
                      <p className="font-black text-slate-900 text-lg md:text-xl flex items-center gap-2">
                        <i className="fa-solid fa-circle-check text-emerald-500"></i>
                        我们的公开交付原则：
                      </p>
                      <p className="text-base md:text-lg leading-relaxed pl-6">
                        不依靠单笔盈利截图制造幻想，不承诺任何人都能快速稳定盈利，也不刻意隐藏亏损与风险。我们愿意通过持续的交易记录、完整的实盘过程、不断迭代的教学体系和长期的学员反馈，让客户自行判断我们的真实能力。
                      </p>
                    </div>

                    <p>
                      在一个信任稀缺的行业里，欺骗或许能够带来短期成交，但只有真实、透明和持续交付，才能建立长期口碑。这不仅是一种价值观，也是一种理性的商业选择。
                    </p>

                    {/* Game Theory Highlight Box */}
                    <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl shadow-md space-y-3">
                      <p className="text-red-400 font-bold text-xs md:text-sm uppercase tracking-widest flex items-center gap-2">
                        <i className="fa-solid fa-chess"></i>
                        从博弈论的角度来看：
                      </p>
                      <p className="text-lg md:text-xl font-medium text-slate-200">
                        当市场充满一次性博弈时，我们选择<span className="text-amber-300 font-bold">重复博弈</span>；当别人追求短期变现时，我们更重视<span className="text-amber-300 font-bold">长期声誉</span>。
                      </p>
                      <p className="text-xl md:text-2xl font-black text-red-400 pt-3 border-t border-slate-800">
                        因为我们相信，诚信不是对商业效率的牺牲，而是长期竞争中的最优策略。
                      </p>
                    </div>

                    <div className="pt-4 text-center">
                      <button
                        onClick={() => toggleQuestion('q-trust-deltapex')}
                        className="text-sm font-bold text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-5 py-2.5 rounded-full cursor-pointer transition-colors"
                      >
                        <i className="fa-solid fa-chevron-up mr-1.5"></i> 收起该回答
                      </button>
                    </div>

                  </div>
                )}
              </div>
            </Reveal>
          </div>

          {/* QUESTION 4 */}
          <div id="q-course-price" className="scroll-mt-24">
            <Reveal delay={0.1}>
              <div className={`bg-white rounded-3xl border-2 transition-all duration-300 overflow-hidden ${
                expandedMap['q-course-price'] 
                  ? 'border-red-300 shadow-xl ring-2 ring-red-100' 
                  : 'border-slate-200 hover:border-red-200 shadow-sm'
              }`}>
                {/* Banner Header - 白底黑字 */}
                <div 
                  onClick={() => toggleQuestion('q-course-price')}
                  className="bg-white hover:bg-slate-50/80 p-6 md:p-8 text-slate-900 relative cursor-pointer select-none flex items-center justify-between gap-4 transition-colors"
                >
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug tracking-tight">
                      Q: 课程费用贵？
                    </h2>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-full border border-slate-200 text-xs md:text-sm font-bold text-slate-700 transition-all">
                    <span>{expandedMap['q-course-price'] ? '收起回答' : '点击展开阅读'}</span>
                    <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${expandedMap['q-course-price'] ? 'rotate-180' : ''}`}></i>
                  </div>
                </div>

                {/* Collapsible Content Body - 字体统一放大 (text-lg md:text-xl) */}
                {expandedMap['q-course-price'] && (
                  <div className="p-6 md:p-10 text-slate-800 space-y-6 text-lg md:text-xl leading-relaxed font-normal animate-fadeIn border-t border-slate-100 bg-white">
                    
                    {/* Highlight Introduction */}
                    <div className="bg-red-50/90 border-l-4 border-[#E60012] p-5 md:p-6 rounded-r-2xl text-slate-900 font-bold text-xl md:text-2xl">
                      在交易中真正昂贵的，不是课程，而是在缺乏方向的情况下，用时间和本金反复支付前人已经历过的教训。自己摸索并非零成本，盲目冲进市场中，你恰恰在用自己的本金，时间还有精力支付最高昂的成本。
                    </div>

                    {/* Value Decision Formula Box */}
                    <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-800 space-y-3">
                      <p className="text-red-400 font-bold text-xs md:text-sm uppercase tracking-widest flex items-center gap-2">
                        <i className="fa-solid fa-scale-balanced"></i>
                        理性价值判断公式：
                      </p>
                      <div className="bg-white/10 p-5 rounded-xl border border-white/15 font-mono text-base md:text-xl text-amber-300 font-bold leading-relaxed text-center">
                        课程费用 ＜ 探索时间成本 + 市场中的亏损 + 信息筛选成本
                      </div>
                      <p className="text-sm md:text-base text-slate-300 text-center">
                        如果满足上述公式，那么这个系统化的课程就可能适合现阶段的你。
                      </p>
                    </div>

                    {/* 3 Core Value Pillars */}
                    <div className="space-y-5 pt-2">
                      
                      {/* Pillar 1 */}
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                        <h3 className="font-black text-slate-900 text-xl md:text-2xl flex items-center gap-2">
                          <span className="w-8 h-8 rounded-lg bg-[#E60012] text-white font-black text-sm flex items-center justify-center shrink-0">1</span>
                          节省探索时间成本
                        </h3>
                        <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                          交易行业从来不缺少知识，恰恰相反交易资料太多、缺乏顺序，也缺少一套清晰的筛选标准。大量时间被消耗在重复学习、频繁换方法和推翻重来的过程中。表面上每天都在学习，实际上却没有形成能够稳定执行的交易框架。更严重的是，很多交易者并不知道自己的学习方向存在问题。可能用几个月甚至几年，才发现自己一直在研究低价值的信息。
                        </p>
                        <p className="text-slate-900 font-bold text-base md:text-lg leading-relaxed bg-white p-4 rounded-xl border border-slate-200/70">
                          💡 <span>系统课程的意义：</span>不是替代个人思考，而是帮助学习者更快找到一条相对清晰的路径，减少无方向探索和反复推倒重来的时间。
                        </p>
                      </div>

                      {/* Pillar 2 */}
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                        <h3 className="font-black text-slate-900 text-xl md:text-2xl flex items-center gap-2">
                          <span className="w-8 h-8 rounded-lg bg-[#E60012] text-white font-black text-sm flex items-center justify-center shrink-0">2</span>
                          减少市场试错成本
                        </h3>
                        <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                          当一个人没有建立清晰的市场认知、入场逻辑、止损规则和仓位管理时，每一次下单，都可能是在用自己的账户验证一个尚未成熟的想法。这些错误不会因为交易者“足够努力”而自动消失。如果没有正确的反馈机制，同一个错误可能被重复几十次。因此，市场试错成本并不只是某一笔亏损，而是错误认知、错误执行和错误风险管理长期累积形成的总成本。
                        </p>
                        <p className="text-slate-900 font-bold text-base md:text-lg leading-relaxed bg-white p-4 rounded-xl border border-slate-200/70">
                          🎯 <span>质量控制：</span>优质课程不能保证学员不亏损，也不能消除交易中的不确定性，但可以帮助学员更早识别常见错误，先在回放、模拟和小仓位环境中训练，再逐步进入真实市场。课程真正降低的，不是所有亏损，而是那些本可以通过正确方法和训练提前避免的低质量亏损。
                        </p>
                      </div>

                      {/* Pillar 3 */}
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                        <h3 className="font-black text-slate-900 text-xl md:text-2xl flex items-center gap-2">
                          <span className="w-8 h-8 rounded-lg bg-[#E60012] text-white font-black text-sm flex items-center justify-center shrink-0">3</span>
                          降低信息筛选成本
                        </h3>
                        <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                          交易行业的信息质量差异极大。同一个问题，不同的人可能给出完全相反的答案；同一种方法，也可能被包装成各种不同概念。信息越多，往往越远离真实的答案。信息筛选本身需要经验。有经验的交易者能够更快判断哪些数据具有决策价值，哪些只是噪音；哪些方法具有明确适用条件，哪些只是事后解释。
                        </p>
                        <p className="text-slate-900 font-bold text-base md:text-lg leading-relaxed bg-white p-4 rounded-xl border border-slate-200/70">
                          📂 <span>结构化交付：</span>系统课程的价值之一，就是提前完成大量信息筛选和结构化工作，把分散的知识整理为有先后顺序、有使用边界、可以训练和复盘的体系。
                        </p>
                      </div>

                    </div>

                    {/* Rational Decision Note */}
                    <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-md border-l-4 border-amber-400 space-y-3">
                      <p className="text-slate-200 text-base md:text-lg leading-relaxed">
                        最后，课程不能购买盈利结果，更不能替代长期训练。但一套真实、系统和经过实践检验的方法，可以帮助学习者少走弯路、减少低质量亏损，并把有限的时间投入到更有价值的训练中。
                      </p>
                      <p className="text-amber-300 font-bold text-base md:text-lg pt-3 border-t border-slate-800">
                        我们不会通过制造焦虑催促你购买。建议你先了解课程目录、教学方式和适用人群，再决定它是否适合现阶段的你。
                      </p>
                    </div>

                    <div className="pt-4 text-center">
                      <button
                        onClick={() => toggleQuestion('q-course-price')}
                        className="text-sm font-bold text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-5 py-2.5 rounded-full cursor-pointer transition-colors"
                      >
                        <i className="fa-solid fa-chevron-up mr-1.5"></i> 收起该回答
                      </button>
                    </div>

                  </div>
                )}
              </div>
            </Reveal>
          </div>

          {/* QUESTION 5 */}
          <div id="q-orderflow-invalidation" className="scroll-mt-24">
            <Reveal delay={0.12}>
              <div className={`bg-white rounded-3xl border-2 transition-all duration-300 overflow-hidden ${
                expandedMap['q-orderflow-invalidation'] 
                  ? 'border-red-300 shadow-xl ring-2 ring-red-100' 
                  : 'border-slate-200 hover:border-red-200 shadow-sm'
              }`}>
                {/* Banner Header - 白底黑字 */}
                <div 
                  onClick={() => toggleQuestion('q-orderflow-invalidation')}
                  className="bg-white hover:bg-slate-50/80 p-6 md:p-8 text-slate-900 relative cursor-pointer select-none flex items-center justify-between gap-4 transition-colors"
                >
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug tracking-tight">
                      Q: 订单流的方法学的人多后，会不会失效？
                    </h2>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-full border border-slate-200 text-xs md:text-sm font-bold text-slate-700 transition-all">
                    <span>{expandedMap['q-orderflow-invalidation'] ? '收起回答' : '点击展开阅读'}</span>
                    <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${expandedMap['q-orderflow-invalidation'] ? 'rotate-180' : ''}`}></i>
                  </div>
                </div>

                {/* Collapsible Content Body - 字体统一放大 (text-lg md:text-xl) */}
                {expandedMap['q-orderflow-invalidation'] && (
                  <div className="p-6 md:p-10 text-slate-800 space-y-6 text-lg md:text-xl leading-relaxed font-normal animate-fadeIn border-t border-slate-100 bg-white">
                    
                    {/* Highlight Introduction */}
                    <div className="bg-red-50/90 border-l-4 border-[#E60012] p-5 md:p-6 rounded-r-2xl text-slate-900 font-bold text-xl md:text-2xl">
                      授人以鱼，不如授人以渔。我们的课程不是教授一套固定的技术规则或永远有效的“圣杯信号”，而是训练你面对变化市场的判断能力。
                    </div>

                    <p className="bg-slate-50 p-5 md:p-6 rounded-2xl border border-slate-100 text-slate-700 text-lg md:text-xl">
                      很多人都学习财务报表、价值投资，但只有一个巴菲特；很多人都学习棋谱，也不会让棋类竞技失去意义。真正决定结果的，是能否理解环境、组合信息并正确执行，而不是是否知道某一个术语或信号。
                    </p>

                    {/* What Orderflow Actually Teaches */}
                    <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-800 space-y-4">
                      <h3 className="font-extrabold text-amber-300 text-xl md:text-2xl flex items-center gap-2">
                        <i className="fa-solid fa-layer-group text-red-400"></i>
                        订单流课程真正教授的，是理解市场微观结构和参与者行为的方法：
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                        {[
                          "市场中的主动买卖力量如何变化",
                          "关键价位是否出现吸收、失衡或流动性撤退",
                          "突破是真实需求推动，还是止损触发形成的短期加速",
                          "同一种订单流现象，在不同市场背景下为什么会产生不同结果",
                        ].map((item, idx) => (
                          <div key={idx} className="bg-white/10 p-4 rounded-xl border border-white/10 text-slate-200 text-base md:text-lg flex items-start gap-2.5 font-medium">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                            <span>{item}</span>
                          </div>
                        ))}
                        <div className="md:col-span-2 bg-red-500/20 p-4 rounded-xl border border-red-500/30 text-slate-200 text-base md:text-lg flex items-start gap-2.5 font-medium">
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-300 mt-2 shrink-0"></span>
                          <span>交易机会出现后，如何通过仓位、止损和退出管理风险</span>
                        </div>
                      </div>

                      <p className="text-slate-300 text-sm md:text-base italic pt-2 border-t border-slate-800">
                        这些内容更接近一种“市场分析语言”，而不是一组固定答案。
                      </p>
                    </div>

                    <p>
                      即使所有人都看到了相同的市场信息，他们仍然可能作出完全不同的决策。不同的资金规模、持仓周期、风险目标和执行方式，使市场参与者不可能因为学习同一套工具而采取完全一致的行动。
                    </p>

                    {/* 4 Training Goals */}
                    <div className="pt-2">
                      <h3 className="font-black text-slate-900 text-xl md:text-2xl mb-4">
                        所以，一套真正成熟的交易教育，不应该只教学生复制导师当前的入场点，而应该教会学生：
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { icon: "fa-eye", text: "如何识别市场发生了什么" },
                          { icon: "fa-compass", text: "如何判断一个信号在当前环境中是否有意义" },
                          { icon: "fa-vial", text: "如何验证策略是否仍然有效" },
                          { icon: "fa-sliders", text: "当市场变化时，如何调整，而不是继续机械执行" },
                        ].map((goal, idx) => (
                          <div key={idx} className="flex items-center gap-3.5 bg-slate-50 p-4.5 rounded-xl border border-slate-200/80">
                            <div className="w-9 h-9 rounded-lg bg-red-100 text-[#E60012] flex items-center justify-center shrink-0">
                              <i className={`fa-solid ${goal.icon} text-base`}></i>
                            </div>
                            <span className="text-slate-900 font-bold text-base md:text-lg">
                              {goal.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Conclusion Box */}
                    <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white p-6 md:p-8 rounded-2xl shadow-md text-center space-y-2">
                      <p className="text-2xl md:text-3xl font-black tracking-tight leading-snug">
                        容易失效的是被大量复制的固定答案；
                      </p>
                      <p className="text-amber-200 text-xl md:text-2xl font-bold">
                        理解市场、验证假设和适应变化的能力永远不会失效。
                      </p>
                    </div>

                    <div className="pt-4 text-center">
                      <button
                        onClick={() => toggleQuestion('q-orderflow-invalidation')}
                        className="text-sm font-bold text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-5 py-2.5 rounded-full cursor-pointer transition-colors"
                      >
                        <i className="fa-solid fa-chevron-up mr-1.5"></i> 收起该回答
                      </button>
                    </div>

                  </div>
                )}
              </div>
            </Reveal>
          </div>

        </div>

        {/* Bottom Back Button */}
        <div className="text-center pt-12 mt-12 border-t border-slate-200">
          <Button
            onClick={handleBackClick}
            variant="white"
            className="px-8 py-3 rounded-full font-bold border-slate-300 text-slate-700 hover:text-[#E60012] hover:border-red-300 shadow-sm transition-all"
          >
            <i className="fa-solid fa-arrow-left mr-2"></i> 返回首页
          </Button>
          <p className="text-xs text-slate-400 mt-4 font-medium tracking-wide">
            Compiled by Kenneth
          </p>
        </div>

      </div>
    </div>
  );
};

export default FaqView;
