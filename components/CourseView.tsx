import React, { useEffect, useState } from 'react';
import Button from './Button';
import Reveal from './Reveal';
import HeroGeometric from './HeroGeometric';
import { wechatQrBase64 as wechatQr } from '../wechatQrData';

const CourseView: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);  
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const scrollToTrialVideos = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const el = document.getElementById('course-preview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToThreeModules = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('three-modules');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyWeChat = () => {
    navigator.clipboard.writeText("Zhong-Zhengxin");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pt-8 pb-32 font-sans text-slate-700 relative overflow-hidden">
      
      {/* Page-level 3D Dynamic Globe Canvas Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-70">
        <HeroGeometric />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navigation Back Button */}
        <Reveal>
          <div className="mb-8 flex items-center justify-between">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors bg-white px-5 py-2.5 rounded-xl border border-slate-200/80 shadow-xs hover:border-red-200"
            >
              <i className="fa-solid fa-arrow-left text-xs"></i>
              <span>返回 Deltapex 首页</span>
            </a>
          </div>
        </Reveal>

        {/* HERO SECTION - VALUE PROPOSITION */}
        <section className="mb-20">
          <Reveal>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-14 border border-red-200/90 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-500/10 via-red-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-4xl">
                <span className="bg-red-100/90 text-red-600 text-xs font-black px-4 py-1.5 rounded-lg uppercase tracking-widest inline-block mb-6 border border-red-200/60">
                  DELTAPEX · 核心职业交易训练系统
                </span>

                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-snug sm:leading-normal mb-6">
                  <span className="block mb-1 sm:mb-2">互联网上从不缺碎片化的交易视频，</span>
                  <span className="block text-red-600">缺的是一套能帮你建立职业坐标系的系统训练。</span>
                </h1>

                <div className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-3xl mb-10 space-y-3">
                  <p>
                    Deltapex 课程不是简单的知识归纳，它是 Alex 将多年实战心法深度沉淀后的逻辑重构。
                  </p>
                  <p>
                    更重要的是，市场在演变，Deltapex 也从未停下脚步——从2024年初代框架到如今的多次高阶迭代，我们把最新的盘面博弈与市场变化也持续注入课程系统，让您的交易认知永远与最新市场保持零时差。
                  </p>
                </div>



                {/* Core Overview Grid (4 Key Highlights - Enlarged & Prominent) */}
                <div className="pt-10 border-t border-slate-200/80">
                  <div className="flex items-center gap-2.5 mb-6">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                    <span className="text-xs font-black tracking-widest text-slate-800 uppercase">
                      课程核心数据与亮点 · CORE HIGHLIGHTS
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <a
                    href="#three-modules"
                    onClick={scrollToThreeModules}
                    className="bg-gradient-to-br from-white via-white to-red-50/70 p-6 sm:p-7 rounded-3xl border-2 border-red-200/90 shadow-md shadow-red-500/5 hover:border-red-300 transition-all hover:-translate-y-1 block cursor-pointer group"
                  >
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center text-xl font-bold group-hover:scale-105 transition-transform">
                          <i className="fa-solid fa-layer-group"></i>
                        </div>
                        <span className="text-[11px] font-extrabold text-red-600 bg-red-100/90 px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                          结构化 <i className="fa-solid fa-arrow-down text-[9px]"></i>
                        </span>
                      </div>
                      <div className="text-4xl sm:text-5xl font-black text-slate-900 mb-2 tracking-tight">
                        3 <span className="text-red-600 text-xl font-black">大</span>
                      </div>
                      <div className="text-base font-extrabold text-slate-900 mb-1">核心模块体系</div>
                      <div className="text-xs font-medium text-slate-500">原理 · 盘口 · 实盘策略</div>
                    </a>

                    <div className="bg-gradient-to-br from-white to-slate-50/80 p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center text-xl font-bold">
                          <i className="fa-solid fa-book-open"></i>
                        </div>
                        <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                          精讲单元
                        </span>
                      </div>
                      <div className="text-4xl sm:text-5xl font-black text-slate-900 mb-2 tracking-tight">
                        47 <span className="text-red-600 text-xl font-black">个</span>
                      </div>
                      <div className="text-base font-extrabold text-slate-900 mb-1">课时单元精讲</div>
                      <div className="text-xs font-medium text-slate-500">无缝逻辑与递进实操</div>
                    </div>

                    <div className="bg-gradient-to-br from-white to-slate-50/80 p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center text-xl font-bold">
                          <i className="fa-solid fa-circle-play"></i>
                        </div>
                        <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                          超长时长
                        </span>
                      </div>
                      <div className="text-4xl sm:text-5xl font-black text-slate-900 mb-2 tracking-tight">
                        80+ <span className="text-red-600 text-xl font-black">小时</span>
                      </div>
                      <div className="text-base font-extrabold text-slate-900 mb-1">核心实战视频</div>
                      <div className="text-xs font-medium text-slate-500">超百例高胜率行情复盘</div>
                    </div>

                    <div className="bg-gradient-to-br from-white to-slate-50/80 p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center text-xl font-bold">
                          <i className="fa-solid fa-arrows-rotate"></i>
                        </div>
                        <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                          陪伴成长
                        </span>
                      </div>
                      <div className="text-4xl sm:text-5xl font-black text-slate-900 mb-2 tracking-tight">
                        每周 <span className="text-red-600 text-xl font-black">更新</span>
                      </div>
                      <div className="text-base font-extrabold text-slate-900 mb-1">作业答疑与复盘</div>
                      <div className="text-xs font-medium text-slate-500">实盘策略持续迭代</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Reveal>
        </section>

        {/* SECTION - COURSE TRIAL PREVIEW (课程试看 · 2个视频位) */}
        <section id="course-preview" className="mb-20 scroll-mt-10">
          <Reveal>
            <div className="bg-gradient-to-b from-white via-slate-50/80 to-white rounded-3xl p-6 sm:p-10 md:p-12 border border-red-200/90 shadow-sm relative overflow-hidden">
              
              {/* Background Accent Blur */}
              <div className="absolute top-0 right-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="bg-red-100/90 text-[#E60012] text-xs font-black px-4 py-1.5 rounded-lg uppercase tracking-widest inline-flex items-center gap-1.5 mb-3 border border-red-200/80">
                  <i className="fa-solid fa-circle-play text-[#E60012]"></i>
                  TRIAL PREVIEWS · 课程精彩试看
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                  初识订单流
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  初步领略订单流微观盘口解析与高胜率博弈思路
                </p>
              </div>

              {/* 2 Video Cards Stacked Vertically (视频上下分布) */}
              <div className="flex flex-col gap-8 max-w-4xl mx-auto">
                
                {/* VIDEO SLOT 01: 课程先导 */}
                <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:border-red-300 transition-all flex flex-col justify-between group">
                  <div>
                    {/* Video Container Box */}
                    <div className="relative aspect-video bg-slate-900 overflow-hidden flex items-center justify-center group-hover:shadow-md transition-all">
                      
                      {/* Bilibili Embedded Player */}
                      <iframe 
                        src="//player.bilibili.com/player.html?isOutside=true&aid=117070087854884&bvid=BV1BXud62ESX&cid=40775256614&p=1&high_quality=1&danmaku=0" 
                        className="w-full h-full border-0 absolute inset-0 z-20" 
                        scrolling="no" 
                        frameBorder="0"
                        allowFullScreen={true}
                      ></iframe>
                    </div>

                    {/* Video Info Details */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-[#E60012] font-extrabold mb-2">
                        <i className="fa-solid fa-graduation-cap"></i>
                        <span>试看单元：Deltapex 核心微观理论导学</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        课程先导：订单流理论的市场分析与实战应用
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed mb-3">
                        深入解析订单流理论的核心原理与撮合机制，展示如何将微观盘口足迹（Footprint）与大单流动性应用于实战盘面研判。
                      </p>
                    </div>
                  </div>

                  {/* Footer Bar */}
                  <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-end text-xs text-slate-500">
                    <button 
                      onClick={() => setIsQrModalOpen(true)}
                      className="text-[#E60012] font-bold hover:underline flex items-center gap-1 cursor-pointer ml-auto"
                    >
                      <span>联系客服获取完整体系课程</span>
                      <i className="fa-solid fa-chevron-right text-[10px]"></i>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </Reveal>
        </section>

        {/* SECTION 2 - PAIN POINTS & TRADITIONAL LIMITATIONS */}
        <section className="mb-20">
          <Reveal>
            <div className="mb-10 text-center max-w-4xl mx-auto">
              <span className="text-xs font-black tracking-widest text-red-600 uppercase bg-red-50 px-3.5 py-1 rounded-full border border-red-200/60 inline-block mb-3">
                PAIN POINTS · 交易困局
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 whitespace-nowrap overflow-hidden text-ellipsis">
                为什么绝大多数交易者总是“一买就跌，一卖就涨”？
              </h2>
              <p className="text-slate-500 text-base">
                传统技术分析只记录已经发生的价格结果，而订单流揭示当下正在发生的微观撮合。
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={0.1}>
              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs hover:border-red-200 transition-all h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-xl font-bold mb-6">
                    <i className="fa-solid fa-clock-rotate-left"></i>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    死看滞后指标，沦为后视镜
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    均线、MACD 和 RSI 都是对过去价格的二次数学加工，无法告诉你当前关键位置是否有大单在强力吸收或挂单撤撤。
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-red-600 flex items-center gap-1.5">
                  <i className="fa-solid fa-circle-xmark"></i>
                  <span>传统指标无法预测爆发动能</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs hover:border-red-200 transition-all h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-xl font-bold mb-6">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    反复遭受假突破与止损猎杀
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    在支撑阻力位盲目追单，常常刚挂上止损就被精准扫掉，随后行情却顺着原方向暴涨。根本原因是没有看清流动性分布。
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-red-600 flex items-center gap-1.5">
                  <i className="fa-solid fa-circle-xmark"></i>
                  <span>不知主力在哪扫单与建仓</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs hover:border-red-200 transition-all h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-xl font-bold mb-6">
                    <i className="fa-solid fa-puzzle-piece"></i>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    碎片化零散学习，缺乏逻辑闭环
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    看网传视频学了一堆“吸收/失衡”概念，但缺乏正规系统的风控模型与出海自营管理，遇到大波动依然手忙脚乱爆仓。
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-red-600 flex items-center gap-1.5">
                  <i className="fa-solid fa-circle-xmark"></i>
                  <span>缺乏严密的交易规则与流程</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SECTION 3 - COURSE ARCHITECTURE OVERVIEW (MIND MAP 思维导图 - 白底) */}
        <section id="three-modules" className="mb-20 scroll-mt-24">
          <Reveal>
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border border-slate-200/80 relative overflow-hidden">
              
              {/* Background Glow Effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none"></div>

              {/* Header */}
              <div className="text-center max-w-3xl mx-auto mb-10 relative z-10">
                <span className="text-xs font-black tracking-widest text-[#E60012] uppercase bg-red-50 px-3.5 py-1 rounded-full border border-red-200/80 inline-flex items-center gap-2 mb-3">
                  <i className="fa-solid fa-diagram-project text-xs"></i>
                  ARCHITECTURE · 体系思维导图
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
                  三大核心模块思维导图
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  不仅仅传授“知识”，更是建立“能力” · Deltapex 职业训练阶梯架构
                </p>
              </div>

              {/* Mind Map Tree Diagram Container */}
              <div className="relative z-10">
                
                {/* DESKTOP MIND MAP VIEW (lg:block) */}
                <div className="hidden lg:block relative">
                  
                  <div className="grid grid-cols-3 gap-6">
                    
                    {/* MODULE 01 NODE */}
                    <div className="flex flex-col items-center">
                      <div className="w-full bg-slate-50 p-5 rounded-2xl border-2 border-red-200 shadow-md text-center relative hover:border-[#E60012] hover:shadow-lg transition-all">
                        <div className="inline-block bg-[#E60012] text-white text-xs font-black px-3 py-0.5 rounded-full mb-2 tracking-wider">
                          MODULE 01
                        </div>
                        <h3 className="text-lg font-black text-slate-900">OBT 必修理论基础</h3>
                      </div>

                      <div className="w-0.5 h-6 bg-gradient-to-b from-red-300 to-slate-200"></div>

                      <div className="w-full space-y-3">
                        <div className="bg-slate-50 hover:bg-red-50/40 p-3.5 rounded-xl border border-slate-200/90 flex items-start gap-3 transition-colors">
                          <div className="w-6 h-6 rounded-lg bg-red-100 text-[#E60012] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                            1.1
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900">微观结构认知</div>
                            <p className="text-slate-500 text-xs mt-0.5">奠定微观市场结构认知</p>
                          </div>
                        </div>

                        <div className="bg-slate-50 hover:bg-red-50/40 p-3.5 rounded-xl border border-slate-200/90 flex items-start gap-3 transition-colors">
                          <div className="w-6 h-6 rounded-lg bg-red-100 text-[#E60012] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                            1.2
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900">微观感知建立</div>
                            <p className="text-slate-500 text-xs mt-0.5">零基础建立微观感知</p>
                          </div>
                        </div>

                        {/* Fading Sub-nodes */}
                        <div className="bg-slate-50/70 p-3 rounded-xl border border-slate-200/60 flex items-start gap-3 opacity-60">
                          <div className="w-6 h-6 rounded-lg bg-red-50 text-[#E60012] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                            1.3
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-700">L2 订单簿深度与大单流向</div>
                            <p className="text-slate-400 text-[11px] mt-0.5">挂单撤单微观博弈拆解...</p>
                          </div>
                        </div>

                        <div className="bg-slate-50/40 p-3 rounded-xl border border-dashed border-slate-200/50 flex items-start gap-3 opacity-30 blur-[0.3px]">
                          <div className="w-6 h-6 rounded-lg bg-red-50 text-[#E60012] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                            1.4
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-600">Footprint 量价异常失衡</div>
                            <p className="text-slate-400 text-[11px] mt-0.5">主动买卖盘微观阻力特征...</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* MODULE 02 NODE */}
                    <div className="flex flex-col items-center">
                      <div className="w-full bg-slate-50 p-5 rounded-2xl border-2 border-red-200 shadow-md text-center relative hover:border-[#E60012] hover:shadow-lg transition-all">
                        <div className="inline-block bg-[#E60012] text-white text-xs font-black px-3 py-0.5 rounded-full mb-2 tracking-wider">
                          MODULE 02
                        </div>
                        <h3 className="text-lg font-black text-slate-900">OBT 专项进阶</h3>
                      </div>

                      <div className="w-0.5 h-6 bg-gradient-to-b from-red-300 to-slate-200"></div>

                      <div className="w-full space-y-3">
                        <div className="bg-slate-50 hover:bg-red-50/40 p-3.5 rounded-xl border border-slate-200/90 flex items-start gap-3 transition-colors">
                          <div className="w-6 h-6 rounded-lg bg-red-100 text-[#E60012] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                            2.1
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900">盘面动态复盘</div>
                            <p className="text-slate-500 text-xs mt-0.5">盘面动态复盘演练</p>
                          </div>
                        </div>

                        <div className="bg-slate-50 hover:bg-red-50/40 p-3.5 rounded-xl border border-slate-200/90 flex items-start gap-3 transition-colors">
                          <div className="w-6 h-6 rounded-lg bg-red-100 text-[#E60012] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                            2.2
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900">动态盘感形成</div>
                            <p className="text-slate-500 text-xs mt-0.5">提炼条件反射式动态盘感</p>
                          </div>
                        </div>

                        {/* Fading Sub-nodes */}
                        <div className="bg-slate-50/70 p-3 rounded-xl border border-slate-200/60 flex items-start gap-3 opacity-60">
                          <div className="w-6 h-6 rounded-lg bg-red-50 text-[#E60012] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                            2.3
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-700">冰山单与吸收(Absorption)</div>
                            <p className="text-slate-400 text-[11px] mt-0.5">真假挂单与机构吃单定位...</p>
                          </div>
                        </div>

                        <div className="bg-slate-50/40 p-3 rounded-xl border border-dashed border-slate-200/50 flex items-start gap-3 opacity-30 blur-[0.3px]">
                          <div className="w-6 h-6 rounded-lg bg-red-50 text-[#E60012] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                            2.4
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-600">Delta 分化与衰竭信号</div>
                            <p className="text-slate-400 text-[11px] mt-0.5">多空动能枯竭高胜率入场...</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* MODULE 03 NODE */}
                    <div className="flex flex-col items-center">
                      <div className="w-full bg-slate-50 p-5 rounded-2xl border-2 border-red-200 shadow-md text-center relative hover:border-[#E60012] hover:shadow-lg transition-all">
                        <div className="inline-block bg-[#E60012] text-white text-xs font-black px-3 py-0.5 rounded-full mb-2 tracking-wider">
                          MODULE 03
                        </div>
                        <h3 className="text-lg font-black text-slate-900">高阶综合实战</h3>
                      </div>

                      <div className="w-0.5 h-6 bg-gradient-to-b from-red-300 to-slate-200"></div>

                      <div className="w-full space-y-3">
                        <div className="bg-slate-50 hover:bg-red-50/40 p-3.5 rounded-xl border border-slate-200/90 flex items-start gap-3 transition-colors">
                          <div className="w-6 h-6 rounded-lg bg-red-100 text-[#E60012] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                            3.1
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900">实时市场迭代</div>
                            <p className="text-slate-500 text-xs mt-0.5">贴合当下微观结构变化</p>
                          </div>
                        </div>

                        <div className="bg-slate-50 hover:bg-red-50/40 p-3.5 rounded-xl border border-slate-200/90 flex items-start gap-3 transition-colors">
                          <div className="w-6 h-6 rounded-lg bg-red-100 text-[#E60012] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                            3.2
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900">导师助教陪跑</div>
                            <p className="text-slate-500 text-xs mt-0.5">实操全流程答疑与指导</p>
                          </div>
                        </div>

                        {/* Fading Sub-nodes */}
                        <div className="bg-slate-50/70 p-3 rounded-xl border border-slate-200/60 flex items-start gap-3 opacity-60">
                          <div className="w-6 h-6 rounded-lg bg-red-50 text-[#E60012] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                            3.3
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-700">机构级风控与动态仓位</div>
                            <p className="text-slate-400 text-[11px] mt-0.5">回撤控制与资金曲线管理...</p>
                          </div>
                        </div>

                        <div className="bg-slate-50/40 p-3 rounded-xl border border-dashed border-slate-200/50 flex items-start gap-3 opacity-30 blur-[0.3px]">
                          <div className="w-6 h-6 rounded-lg bg-red-50 text-[#E60012] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                            3.4
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-600">实盘心智调控与纪律</div>
                            <p className="text-slate-400 text-[11px] mt-0.5">克服情绪化交易纠偏模型...</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* MOBILE / TABLET MIND MAP VIEW (lg:hidden) */}
                <div className="block lg:hidden relative pl-6 border-l-2 border-red-300 space-y-8 ml-2">
                  
                  {/* MODULE 01 BRANCH */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-3 w-4 h-4 rounded-full bg-[#E60012] border-2 border-white shadow-md"></div>
                    
                    <div className="bg-slate-50 p-5 rounded-2xl border border-red-200 space-y-3 shadow-xs">
                      <div className="flex items-center gap-2">
                        <span className="bg-[#E60012] text-white text-xs font-black px-2.5 py-0.5 rounded-md">
                          MODULE 01
                        </span>
                        <h3 className="text-base font-black text-slate-900">OBT 必修理论基础</h3>
                      </div>
                      
                      <div className="pl-3 border-l border-slate-200 space-y-2 pt-1 text-xs text-slate-600">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E60012] shrink-0"></span>
                          <span>奠定微观市场结构认知</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E60012] shrink-0"></span>
                          <span>零基础建立微观感知</span>
                        </div>
                        <div className="flex items-center gap-2 opacity-50">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                          <span>L2 订单簿深度与大单流向...</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* MODULE 02 BRANCH */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-3 w-4 h-4 rounded-full bg-[#E60012] border-2 border-white shadow-md"></div>
                    
                    <div className="bg-slate-50 p-5 rounded-2xl border border-red-200 space-y-3 shadow-xs">
                      <div className="flex items-center gap-2">
                        <span className="bg-[#E60012] text-white text-xs font-black px-2.5 py-0.5 rounded-md">
                          MODULE 02
                        </span>
                        <h3 className="text-base font-black text-slate-900">OBT 专项进阶</h3>
                      </div>

                      <div className="pl-3 border-l border-slate-200 space-y-2 pt-1 text-xs text-slate-600">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E60012] shrink-0"></span>
                          <span>盘面动态复盘演练</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E60012] shrink-0"></span>
                          <span>提炼条件反射式动态盘感</span>
                        </div>
                        <div className="flex items-center gap-2 opacity-50">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                          <span>冰山单与吸收(Absorption)识别...</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* MODULE 03 BRANCH */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-3 w-4 h-4 rounded-full bg-[#E60012] border-2 border-white shadow-md"></div>
                    
                    <div className="bg-slate-50 p-5 rounded-2xl border border-red-200 space-y-3 shadow-xs">
                      <div className="flex items-center gap-2">
                        <span className="bg-[#E60012] text-white text-xs font-black px-2.5 py-0.5 rounded-md">
                          MODULE 03
                        </span>
                        <h3 className="text-base font-black text-slate-900">高阶综合实战</h3>
                      </div>

                      <div className="pl-3 border-l border-slate-200 space-y-2 pt-1 text-xs text-slate-600">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E60012] shrink-0"></span>
                          <span>实时市场迭代，贴合当下微观结构变化</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E60012] shrink-0"></span>
                          <span>导师助教全程陪跑指导</span>
                        </div>
                        <div className="flex items-center gap-2 opacity-50">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                          <span>机构级风险控制与仓位动态伸缩...</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom Gradient Fade Overlay (渐变淡出遮罩层，营造细节未完全展开的延伸感) */}
                <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-b from-transparent via-white/80 to-white pointer-events-none z-20 flex items-end justify-center pb-2">
                  <div className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full border border-slate-200/90 shadow-md text-xs font-bold text-slate-700 flex items-center gap-2">
                    <i className="fa-brands fa-weixin text-[#E60012] text-sm"></i>
                    <span>完整课程体系请添加客服微信获取</span>
                  </div>
                </div>

              </div>

            </div>
          </Reveal>
        </section>

        {/* SECTION 4 - FIVE LEARNING STAGES (分层次五个学习阶段) */}
        <section className="mb-20">
          <Reveal>
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <span className="text-xs font-black tracking-widest text-red-600 uppercase bg-red-50 px-3.5 py-1 rounded-full border border-red-200/60 inline-block mb-3">
                FIVE STAGES · 五阶段递进训练
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                分层次的五阶段职业学习路径
              </h2>
              <p className="text-slate-500 text-base">
                由浅入深，每个阶段聚焦解决一个核心实操难题，构建无可替代的看盘视界。
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            
            {/* Stage 1 */}
            <Reveal delay={0.1}>
              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs hover:border-red-200 transition-all flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-red-600 text-white font-black flex items-center justify-center text-xl shadow-md shadow-red-600/20">
                  01
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-red-50 text-red-600 text-xs font-extrabold px-2.5 py-1 rounded-md">阶段一</span>
                    <h3 className="text-xl font-bold text-slate-900">看清市场足迹 (Footprint)</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    摒弃无用的指标延时，学会通过 Footprint（足迹图）直观读取每一笔实时发生的 Ask/Bid 买卖盘成交。识别主动单强力冲锋与多空大单对撞现场。
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Stage 2 */}
            <Reveal delay={0.2}>
              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs hover:border-red-200 transition-all flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-red-600 text-white font-black flex items-center justify-center text-xl shadow-md shadow-red-600/20">
                  02
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-red-50 text-red-600 text-xs font-extrabold px-2.5 py-1 rounded-md">阶段二</span>
                    <h3 className="text-xl font-bold text-slate-900">看清流动性 (Liquidity Heatmap)</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    解密挂单分布，看清主力挂单与诱多/诱空痕迹。将动态限价单（Limit Orders）深度转化为可视化热图，实时定位高密度流动性墙（Liquidity Wall），精准预判价格吸引力点与真实阻力区
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Stage 3 */}
            <Reveal delay={0.3}>
              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs hover:border-red-200 transition-all flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-red-600 text-white font-black flex items-center justify-center text-xl shadow-md shadow-red-600/20">
                  03
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-red-50 text-red-600 text-xs font-extrabold px-2.5 py-1 rounded-md">阶段三</span>
                    <h3 className="text-xl font-bold text-slate-900">看清盘口行为 (DOM / Order Book)</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    深入 DOM 深度图，实时监测挂单墙（Limit Orders）的挂撤变化。精准识别机构使用的冰山隐蔽委托（Iceberg Orders）与吸筹/派发信号。
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Stage 4 */}
            <Reveal delay={0.4}>
              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs hover:border-red-200 transition-all flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-red-600 text-white font-black flex items-center justify-center text-xl shadow-md shadow-red-600/20">
                  04
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-red-50 text-red-600 text-xs font-extrabold px-2.5 py-1 rounded-md">阶段四</span>
                    <h3 className="text-xl font-bold text-slate-900">建立交易系统 (Trading System)</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    将散乱的看盘信号整理为客观明确的交易 Checklist。制定严格的入场触发条件、动态移动止损方案与阶段性分批止盈模型，拒绝凭感觉下单。
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Stage 5 */}
            <Reveal delay={0.5}>
              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs hover:border-red-200 transition-all flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-red-600 text-white font-black flex items-center justify-center text-xl shadow-md shadow-red-600/20">
                  05
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-red-50 text-red-600 text-xs font-extrabold px-2.5 py-1 rounded-md">阶段五</span>
                    <h3 className="text-xl font-bold text-slate-900">三图合一 (Three-Chart Execution)</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    终极实盘合操形态：“宏观结构图看趋势与关键位 + 成交量分布图看价值区域 + 订单流足迹图做微观无滑点触发”。大中小型周期无缝协同。
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </section>



        {/* SECTION 6 - SUITABLE / UNSUITABLE AUDIENCE */}
        <section className="mb-20">
          <Reveal>
            <div className="mb-10 text-center max-w-3xl mx-auto">
              <span className="text-xs font-black tracking-widest text-red-600 uppercase bg-red-50 px-3.5 py-1 rounded-full border border-red-200/60 inline-block mb-3">
                AUDIENCE · 适合人群
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                这门课程适合您吗？
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-emerald-50/50 rounded-3xl p-8 border border-emerald-200/80 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-lg font-bold">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">非常适合的人群</h3>
                </div>

                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-check text-emerald-600 mt-1"></i>
                    <span>希望能看清机构挂单与真实成交，摆脱滞后 K 线指标迷思的交易者。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-check text-emerald-600 mt-1"></i>
                    <span>具有长期眼光，愿意把交易作为终身事业来发展的人。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-check text-emerald-600 mt-1"></i>
                    <span>渴望建立一套客观、有规则、可度量且可持续进化的交易系统的专业交易员。</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-red-50/50 rounded-3xl p-8 border border-red-200/80 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center text-lg font-bold">
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">不适合的人群</h3>
                </div>

                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-xmark text-red-500 mt-1"></i>
                    <span>幻想寻找“百分百胜率圣杯”或寻找“跟单喊单群”的投机者。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-xmark text-red-500 mt-1"></i>
                    <span>不愿花费时间和精力去复盘、记录交易日志并进行心理建设的暴富寻求者。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-xmark text-red-500 mt-1"></i>
                    <span>连基本的交易风险意识都没有，寄希望于用生活必需资金进行高杠杆赌博者。</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SECTION 7 - COURSE PRICING DETAILS (EXACT MATCH TO USER SCREENSHOT) */}
        <section id="pricing-details" className="mb-20 scroll-mt-24">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3 tracking-tight">
                课程详情
              </h2>
              <p className="text-slate-500 text-base sm:text-lg">
                选择适合您的课程，立即开启核心交易训练。
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* Online Course Pricing Card (¥29,800) */}
              <div className="bg-white border border-slate-200/80 rounded-[2.5rem] p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group">
                <div className="absolute top-0 left-0 w-full h-2 bg-red-600 rounded-t-[2.5rem]"></div>
                
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">
                    线上课程
                  </h3>
                  <p className="text-slate-500 mb-8 text-sm text-center font-medium">
                    【通识课】从零构建盈利体系
                  </p>

                  <div className="text-4xl sm:text-5xl font-black text-slate-900 mb-8 text-center tracking-tight">
                    ¥29,800
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setIsQrModalOpen(true)}
                    className="w-full py-4 text-base font-bold rounded-xl bg-red-600 hover:bg-red-500 text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <i className="fa-brands fa-weixin text-lg"></i>
                    <span>添加客服微信咨询</span>
                  </button>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 text-center">
                  <p className="text-[11px] text-slate-400 font-medium">
                    本课程仅供教育目的，不构成任何财务或投资建议。
                  </p>
                </div>
              </div>

              {/* Offline Training Pricing Card (¥45,800) */}
              <div className="bg-white border border-slate-200/80 rounded-[2.5rem] p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group">
                <div className="absolute top-0 left-0 w-full h-2 bg-red-600 rounded-t-[2.5rem]"></div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">
                    线下培训
                  </h3>
                  <p className="text-slate-500 mb-8 text-sm text-center font-medium">
                    【实战营】职业交易员封闭特训
                  </p>

                  <div className="text-4xl sm:text-5xl font-black text-slate-900 mb-8 text-center tracking-tight">
                    ¥45,800
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setIsQrModalOpen(true)}
                    className="w-full py-4 text-base font-bold rounded-xl bg-red-600 hover:bg-red-500 text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <i className="fa-brands fa-weixin text-lg"></i>
                    <span>添加客服微信咨询</span>
                  </button>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 text-center">
                  <p className="text-[11px] text-slate-400 font-medium">
                    本课程仅供教育目的，不构成任何财务或投资建议。
                  </p>
                </div>
              </div>

            </div>
          </Reveal>
        </section>

        {/* SECTION 8 - FAQ */}
        <section className="mb-20">
          <Reveal>
            <div className="mb-10 text-center max-w-3xl mx-auto">
              <span className="text-xs font-black tracking-widest text-red-600 uppercase bg-red-50 px-3.5 py-1 rounded-full border border-red-200/60 inline-block mb-3">
                FAQ · 常见问题
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                关于课程学习的常见疑问
              </h2>
            </div>
          </Reveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "没有订单流基础或只用过传统 K 线，能学会这套课程吗？",
                a: "完全可以。课程从 CME 撮合原理与订单流基础工具（DOM/Footprint）开始，由浅入深讲解，不预设复杂数学门槛，重在培养客观逻辑看盘视角。"
              },
              {
                q: "学习需要准备哪些软件与行情数据？",
                a: "推荐使用 ATAS 或 Sierra Chart / Quantower 等专业订单流软件，连接 CQG / Rithmic CME 实时期货深度数据。添加客服微信可获得软件安装与连接指导。"
              },
              {
                q: "如何在微信领取完整学习地图与课程大纲？",
                a: "点击页面任何『添加客服微信』按钮，扫码添加专属客服（Zhong-Zhengxin），微信私信回复『学习地图』或『课程详情』即可免费领取完整 PDF 资料与案例视频。"
              }
            ].map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left font-bold text-slate-900 text-base flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <i className={`fa-solid ${openFaqIndex === idx ? 'fa-chevron-up text-red-600' : 'fa-chevron-down text-slate-400'} text-xs ml-4 shrink-0`}></i>
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SECTION 9 - FINAL WECHAT CTA BOTTOM BANNER */}
        <section className="mb-16">
          <Reveal>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-14 border border-red-300/80 shadow-sm relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-red-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <span className="bg-red-100 text-red-600 text-xs font-black px-4 py-1.5 rounded-lg uppercase tracking-widest inline-block mb-4 border border-red-200/60">
                  CONNECT WITH US · 开启理性交易
                </span>
                <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                  准备好用微观结构重塑您的交易体系了吗？
                </h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                  扫码添加客服微信，免费领取完整订单流课程体系
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={() => setIsQrModalOpen(true)}
                    className="px-8 py-4 rounded-xl font-bold bg-red-600 hover:bg-red-500 text-white transition-all shadow-md inline-flex items-center gap-2"
                  >
                    <i className="fa-brands fa-weixin text-lg"></i>
                    <span>立即添加客服微信咨询</span>
                  </button>

                  <a
                    href="#"
                    className="px-6 py-4 rounded-xl font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200"
                  >
                    返回 Deltapex 首页
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* COMPLIANCE & LEGAL SECTION */}
        <section className="text-left bg-white p-8 rounded-3xl border border-slate-200/80 text-xs text-slate-500 space-y-3">
          <h4 className="font-bold text-slate-800 text-sm mb-2">购买须知与合规声明</h4>
          <p>
            <strong>客服微信支持：</strong> 您可以随时扫描客服二维码，添加专属客服微信号 <strong>Zhong-Zhengxin</strong> 进行课程的具体咨询与入学登记。
            <button
              onClick={() => setIsQrModalOpen(true)}
              className="ml-2 inline-flex items-center gap-1 text-red-600 hover:underline font-bold"
            >
              <i className="fa-brands fa-weixin text-green-500"></i> 点击显示客服微信二维码
            </button>
          </p>
          <p>
            <strong>客户支持邮件：</strong> 如有任何疑问，请联系官方客服邮箱 <a href="mailto:depaitina@deltapex.cc" className="text-red-600 hover:underline">depaitina@deltapex.cc</a>。
          </p>
          <p>
            <strong>退款政策：</strong> 本产品为虚拟知识服务。请在购买前阅读我们的 <a href="#refund" className="text-red-600 hover:underline">退款政策 (Refund Policy)</a>。
          </p>
          <p>
            <strong>订阅与账单：</strong> 您可通过 <a href="#manage-subscription" className="text-red-600 hover:underline">订阅管理门户</a> 随时管理您的支付方式。
          </p>
          <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-4 text-[11px] text-slate-400">
            <span>© 2026 Deltapex Trading Group. All rights reserved.</span>
            <a href="#privacy" className="hover:text-red-600">隐私政策 (Privacy Policy)</a>
            <a href="#terms" className="hover:text-red-600">服务条款 (Terms of Service)</a>
          </div>
        </section>

      </div>

      {/* WECHAT QR CODE POPUP MODAL */}
      {isQrModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setIsQrModalOpen(false)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
          />

          <div className="relative bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl border border-slate-100 z-10 overflow-hidden transform transition-all duration-300 scale-100 animate-in fade-in zoom-in">
            <button
              onClick={() => setIsQrModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
            >
              <i className="fa-solid fa-xmark text-sm"></i>
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-500 text-2xl shrink-0">
                <i className="fa-brands fa-weixin"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">添加专属课程顾问</h3>
                <p className="text-xs text-slate-400">扫一扫，免费领取完整学习地图与课程详情</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col items-center justify-center relative">
              <div
                onClick={() => setIsZoomed(true)}
                className="bg-white p-4 rounded-xl shadow-md border border-slate-200/60 w-56 h-56 relative overflow-hidden cursor-zoom-in hover:scale-105 transition-all group"
              >
                <img
                  src={wechatQr}
                  alt="WeChat QR Code"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <span className="bg-white/90 text-xs font-bold text-slate-700 px-2.5 py-1.5 rounded-lg shadow-xs flex items-center gap-1">
                    <i className="fa-solid fa-magnifying-glass text-red-600"></i> 点击放大
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-4 mt-4 mb-4 text-left">
              <div className="text-emerald-800 font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <i className="fa-solid fa-gift"></i> 扫码添加客服即可获得：
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>高清学习地图：</strong> 订单流 3 阶段学习路线 PDF 指南。</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>案例视频拆解：</strong> 完整的试听课程。</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 flex items-center justify-between bg-slate-50 border border-slate-100 p-4 rounded-xl">
              <div className="text-left">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">微信号 / WeChat ID</div>
                <div className="text-sm font-bold text-slate-800">Zhong-Zhengxin</div>
              </div>
              <button
                onClick={handleCopyWeChat}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  copied
                    ? "bg-green-500 text-white"
                    : "bg-slate-200 hover:bg-slate-300 text-slate-700"
                }`}
              >
                {copied ? (
                  <>
                    <i className="fa-solid fa-check"></i> 已复制
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-copy"></i> 复制微信号
                  </>
                )}
              </button>
            </div>

            <div className="text-[10px] text-slate-400 mt-4 text-center">
              * 为保障您的权益，请认准官方客服。工作时间：周一至周五 09:00 - 18:00。
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX ENLARGED QR CODE */}
      {isZoomed && (
        <div
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-md cursor-zoom-out p-4"
        >
          <div className="relative max-w-xl flex flex-col items-center justify-center">
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
            <img
              src={wechatQr}
              alt="WeChat QR Code Enlarged"
              className="w-auto max-h-[75vh] max-w-[85vw] rounded-2xl shadow-2xl border border-white/10 object-contain"
              referrerPolicy="no-referrer"
              loading="eager"
            />
            <p className="text-white/60 text-xs mt-4">点击任意位置返回</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default CourseView;
