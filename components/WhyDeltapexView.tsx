import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';
import Button from './Button';
import { STUDENT_CASES } from '../constants';

// Alex Performance Screenshots Data Structure (Chronological)
interface TrackRecordItem {
  id: string;
  year: string;
  quarter: string;
  title: string;
  description: string;
  type: 'payout' | 'equity' | 'statement';
  imageUrl: string;
}

const TRACK_RECORDS: TrackRecordItem[] = [
  {
    id: 'tr-2026-q1',
    year: '2026',
    quarter: 'Q1',
    title: '2026 Q1 自营账户出金统计与数据回测',
    description: '保持月度盈亏比与高胜率执行，累计实现多账户出金记录',
    type: 'payout',
    imageUrl: 'https://pub-02fa9a4ecd1f4f469a947c51df6fb5a3.r2.dev/1.jpg',
  },
  {
    id: 'tr-2025-q4',
    year: '2025',
    quarter: 'Q4',
    title: '2025 年终资金权益曲线与账户矩阵总结',
    description: '通过阶梯式仓位与平滑风控曲线，实现年终资金池翻倍增长',
    type: 'equity',
    imageUrl: 'https://pub-02fa9a4ecd1f4f469a947c51df6fb5a3.r2.dev/2.jpg',
  },
  {
    id: 'tr-2025-q2',
    year: '2025',
    quarter: 'Q2',
    title: '2025 Q2 Take Profit Trader 商业账户连续提款凭证',
    description: '单月多账号无缝出金，验证订单流在大波动环境下的稳健性',
    type: 'payout',
    imageUrl: 'https://pub-02fa9a4ecd1f4f469a947c51df6fb5a3.r2.dev/3.jpg',
  },
  {
    id: 'tr-2024-q4',
    year: '2024',
    quarter: 'Q4',
    title: '2024 下半年真实成交与撮合深度对比复盘',
    description: '深度记录每一笔 DOM 入场与出场记录，完全公开透明可追溯',
    type: 'statement',
    imageUrl: 'https://pub-02fa9a4ecd1f4f469a947c51df6fb5a3.r2.dev/4.jpg',
  },
  {
    id: 'tr-2024-q1',
    year: '2024',
    quarter: 'Q1',
    title: '2024 第一季度全绿交易日历与风控报告',
    description: '严格执行无滑点限价单挂单策略，单月最大回撤控制在 1.2% 以内',
    type: 'equity',
    imageUrl: 'https://pub-02fa9a4ecd1f4f469a947c51df6fb5a3.r2.dev/5.jpg',
  },
  {
    id: 'tr-2023-annual',
    year: '2023',
    quarter: '年度',
    title: '2023 早期实盘账户提款与资本积累历程',
    description: 'Deltapex 体系雏形构建阶段，通过持续统计验证微观结构优势',
    type: 'payout',
    imageUrl: 'https://pub-02fa9a4ecd1f4f469a947c51df6fb5a3.r2.dev/1.jpg',
  },
];

// Student Video Case Interface
interface StudentVideo {
  id: string;
  studentName: string;
  title: string;
  duration: string;
  tag: string;
  summary: string;
  thumbnail: string;
  videoUrl?: string;
}

const STUDENT_VIDEOS: StudentVideo[] = [
  {
    id: 'v1',
    studentName: '赵同学',
    title: '从多次爆仓到稳定日进 $500：我的订单流思维转变',
    duration: '08:45',
    tag: '实盘复盘',
    summary: '详细拆解如何摆脱传统指标迷思，利用 Footprint 寻找买卖盘吸收起爆点。',
    thumbnail: 'https://pub-02fa9a4ecd1f4f469a947c51df6fb5a3.r2.dev/2.jpg',
  },
  {
    id: 'v2',
    studentName: '孙同学',
    title: 'TPT $150K 账号 5 天考核通关与出金全流程记录',
    duration: '12:10',
    tag: '考核通关',
    summary: '展示真实结算邮件与 Wise 提款到账全过程，分享平滑盈亏比的风控技巧。',
    thumbnail: 'https://pub-02fa9a4ecd1f4f469a947c51df6fb5a3.r2.dev/3.jpg',
  },
  {
    id: 'v3',
    studentName: '徐同学',
    title: '兼职交易者的每日 1 小时订单流盘前准备法则',
    duration: '10:30',
    tag: '高效交易',
    summary: '工作党如何通过开盘前 15 分钟 DOM 深度分析与主要关键位绘制确定一日计划。',
    thumbnail: 'https://pub-02fa9a4ecd1f4f469a947c51df6fb5a3.r2.dev/4.jpg',
  },
];

const WhyDeltapexView: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<{ title: string; url: string } | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<StudentVideo | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredRecords = selectedYear === 'all' 
    ? TRACK_RECORDS 
    : TRACK_RECORDS.filter((item) => item.year === selectedYear);

  return (
    <div className="min-h-screen bg-slate-50/50 pt-10 pb-40 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Breadcrumb Navigation */}
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

        {/* Hero Banner Header */}
        <Reveal delay={0.1}>
          <div className="bg-white rounded-3xl p-8 md:p-14 border border-red-200/90 shadow-sm mb-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-500/10 via-red-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl">
              <span className="bg-red-100/90 text-red-600 text-xs font-black px-4 py-1.5 rounded-lg uppercase tracking-widest inline-block mb-5 border border-red-200/60">
                WHY DELTAPEX · 品牌核心优势
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                为什么选择 Deltapex？
              </h1>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal max-w-3xl">
                我们不贩卖暴利幻想，不使用夸大营销。Deltapex 致力于打造最专业的中文订单流交易教学系统，结合实战实盘验证、真实学员辅导与长期一站式出海生态，陪伴每一位独立交易者实现长期可持续进化。
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-10 border-t border-slate-100 text-center sm:text-left">
              <div>
                <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">
                  5+ <span className="text-red-600 text-lg">年</span>
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  CME 期货订单流实盘
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">
                  100% <span className="text-red-600 text-lg">真实</span>
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  出金凭证与交割单可溯
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">
                  800+ <span className="text-red-600 text-lg">名</span>
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  社群精英交易者陪伴
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">
                  1 站式 <span className="text-red-600 text-lg">出海</span>
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  自营/出金/工具全覆盖
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* MODULE 1: ALEX的长期业绩突出 */}
        <section id="alex-track-record" className="mb-28">
          
          {/* Section Header */}
          <Reveal>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-xl bg-red-100 text-red-600 font-extrabold flex items-center justify-center text-sm">
                  01
                </span>
                <span className="text-xs font-black tracking-widest text-red-600 uppercase">
                  MODULE ONE · 导师能力
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                ALEX 的长期业绩突出
              </h2>
              <p className="text-slate-500 text-base md:text-lg max-w-3xl">
                坚信“知行合一”。真正的教学源于实盘战绩与持续透明的资金回测，而非纸上谈兵。
              </p>
            </div>
          </Reveal>

          {/* Mentor Bio Card */}
          <Reveal delay={0.1}>
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-xs mb-12 hover:border-red-200 transition-colors">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-12">
                
                {/* Mentor Avatar / Badge */}
                <div className="shrink-0 text-center">
                  <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-1 shadow-lg overflow-hidden mx-auto">
                    <div className="w-full h-full bg-slate-900 rounded-[22px] flex flex-col items-center justify-center p-4">
                      <div className="w-16 h-16 rounded-2xl bg-red-600 text-white flex items-center justify-center text-2xl font-black mb-3 shadow-md">
                        ALEX
                      </div>
                      <span className="text-xs font-bold tracking-widest text-red-400 uppercase">
                        FOUNDER
                      </span>
                      <span className="text-xs font-medium text-slate-400 mt-1">
                        Deltapex 创始人
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 bg-red-50 text-red-700 text-xs font-extrabold px-3 py-1.5 rounded-full border border-red-200">
                    <i className="fa-solid fa-shield-check"></i>
                    <span>全网真实出金认证</span>
                  </div>
                </div>

                {/* Mentor Content Details */}
                <div className="flex-1 space-y-4 text-center lg:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                    Alex · 资深订单流交易员 & 体系架构师
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    专注 CME 美股股指期货（NQ/ES）、美债（ZN）与黄金（GC）微观结构交易。擅长结合 DOM 挂单深度、Footprint 逐笔成交与 Volume Profile（成交量分布），捕捉微观博弈中的极高盈亏比机会。
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    主张“用自营公司的钱做风控练习，用微观结构寻找无滑点执行”。已帮助上百位中文交易者建立逻辑严密的量化与半自动交易决策模型。
                  </p>

                  <div className="pt-4 flex flex-wrap gap-3 justify-center lg:justify-start">
                    <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-200">
                      <i className="fa-solid fa-bullseye text-red-500 mr-1.5"></i>
                      微观 DOM 深度撮合
                    </span>
                    <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-200">
                      <i className="fa-solid fa-chart-pie text-red-500 mr-1.5"></i>
                      Footprint 量化吸收
                    </span>
                    <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-200">
                      <i className="fa-solid fa-vault text-red-500 mr-1.5"></i>
                      自营资金矩阵风控
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </Reveal>

          {/* Performance Track Record Screenshots (Chronological Timeline Grid) */}
          <Reveal delay={0.2}>
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-xs">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                    时间轴业绩凭证 (2023 - 2026)
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">
                    点击任意记录卡片可放大查看出金单据与资金曲线详情
                  </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80 self-start sm:self-auto">
                  {['all', '2026', '2025', '2024', '2023'].map((yr) => (
                    <button
                      key={yr}
                      onClick={() => setSelectedYear(yr)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                        selectedYear === yr
                          ? 'bg-red-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                      }`}
                    >
                      {yr === 'all' ? '全部年份' : `${yr} 年`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Screenshots Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRecords.map((record) => (
                  <div
                    key={record.id}
                    onClick={() => setActiveImage({ title: record.title, url: record.imageUrl })}
                    className="group bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden hover:border-red-300 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
                  >
                    {/* Image Placeholder Frame */}
                    <div className="relative aspect-video bg-slate-900/90 overflow-hidden flex items-center justify-center">
                      <img
                        src={record.imageUrl}
                        alt={record.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                        <span className="w-10 h-10 rounded-full bg-white/90 text-slate-900 flex items-center justify-center text-sm group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all shadow-md">
                          <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </span>
                      </div>
                      <span className="absolute top-3 left-3 bg-slate-900/80 text-white text-[11px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider backdrop-blur-xs">
                        {record.year} · {record.quarter}
                      </span>
                    </div>

                    {/* Meta info */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-slate-900 text-base group-hover:text-red-600 transition-colors line-clamp-2">
                          {record.title}
                        </h4>
                        <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                          {record.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400 font-medium">
                        <span>真实出金凭证</span>
                        <span className="text-red-600 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          查看大图 <i className="fa-solid fa-arrow-right text-[10px]"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </Reveal>

        </section>

        {/* MODULE 2: 学员教学成果优秀 */}
        <section id="student-outcomes" className="mb-28">
          
          {/* Section Header */}
          <Reveal>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-xl bg-red-100 text-red-600 font-extrabold flex items-center justify-center text-sm">
                  02
                </span>
                <span className="text-xs font-black tracking-widest text-red-600 uppercase">
                  MODULE TWO · 教学成果
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                学员教学成果优秀
              </h2>
              <p className="text-slate-500 text-base md:text-lg max-w-3xl">
                体系的可复制性是衡量交易教学的唯一标准。看不同背景学员如何通过订单流实现稳定盈利。
              </p>
            </div>
          </Reveal>

          {/* Sub-part A: 学员案例 (Student Success Cases) */}
          <div className="mb-16">
            <Reveal delay={0.1}>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                  <i className="fa-solid fa-award text-red-600"></i>
                  优秀学员案例与盈亏统计
                </h3>
                <a
                  href="#cases"
                  className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
                >
                  查看更多案例 <i className="fa-solid fa-chevron-right text-[10px]"></i>
                </a>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {STUDENT_CASES.slice(0, 3).map((item, idx) => (
                <Reveal key={item.id} delay={0.1 * idx}>
                  <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-xs hover:border-red-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      {/* Student Header */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200"
                          />
                          <div>
                            <h4 className="font-extrabold text-slate-900 text-base">
                              {item.name}
                            </h4>
                            <span className="text-xs text-slate-500 font-medium">
                              策略：{item.strategy}
                            </span>
                          </div>
                        </div>

                        <span className="bg-red-50 text-red-600 font-black text-xs px-3 py-1 rounded-full border border-red-200/60">
                          {item.profit}
                        </span>
                      </div>

                      {/* Screenshot Zoom Frame */}
                      <div
                        onClick={() => setActiveImage({ title: `${item.name} - ${item.profit}`, url: item.screenshot })}
                        className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-4/3 mb-5 cursor-pointer group border border-slate-200/60"
                      >
                        <img
                          src={item.screenshot}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center">
                          <span className="bg-white/90 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm group-hover:bg-red-600 group-hover:text-white transition-all">
                            <i className="fa-solid fa-expand mr-1"></i> 点击查看大图
                          </span>
                        </div>
                      </div>

                      <p className="text-slate-600 text-sm leading-relaxed italic">
                        "{item.comment}"
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                      <span>已通过实盘验证</span>
                      <span className="text-emerald-600 font-bold flex items-center gap-1">
                        <i className="fa-solid fa-circle-check"></i> 社区真实学员
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Sub-part B: 学员视频 (Student Review Videos Grid) */}
          <div>
            <Reveal delay={0.1}>
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                  <i className="fa-solid fa-circle-play text-red-600"></i>
                  学员实战复盘与口述视频
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  真实音频与视频记录，分享突破瓶颈的实操心路历程
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {STUDENT_VIDEOS.map((video, idx) => (
                <Reveal key={video.id} delay={0.1 * idx}>
                  <div
                    onClick={() => setSelectedVideo(video)}
                    className="group bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-red-300 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col"
                  >
                    {/* Video Player Cover Frame */}
                    <div className="relative aspect-video bg-slate-900 overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                      
                      {/* Play Icon Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center text-xl shadow-lg group-hover:scale-110 group-hover:bg-red-500 transition-all">
                          <i className="fa-solid fa-play ml-1"></i>
                        </div>
                      </div>

                      <span className="absolute bottom-3 right-3 bg-slate-900/80 text-white text-xs font-bold px-2 py-1 rounded-md backdrop-blur-xs">
                        {video.duration}
                      </span>

                      <span className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                        {video.tag}
                      </span>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-bold text-red-600 mb-1">
                          {video.studentName} · 经验分享
                        </div>
                        <h4 className="font-extrabold text-slate-900 text-base group-hover:text-red-600 transition-colors line-clamp-2">
                          {video.title}
                        </h4>
                        <p className="text-slate-500 text-xs mt-2 leading-relaxed line-clamp-2">
                          {video.summary}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-red-600 font-bold">
                        <span>点击播放复盘视频</span>
                        <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </section>

        {/* MODULE 3: 与时俱进的长期生态 */}
        <section id="longterm-ecosystem" className="mb-20">
          
          {/* Section Header */}
          <Reveal>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-xl bg-red-100 text-red-600 font-extrabold flex items-center justify-center text-sm">
                  03
                </span>
                <span className="text-xs font-black tracking-widest text-red-600 uppercase">
                  MODULE THREE · 长期生态
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                与时俱进的长期生态
              </h2>
              <p className="text-slate-500 text-base md:text-lg max-w-3xl">
                一次学习，终身陪伴。从系统课程、每日盘前盘后直播解析，到全网独家自营福利与出海支持。
              </p>
            </div>
          </Reveal>

          {/* Complete Curriculum System */}
          <Reveal delay={0.1}>
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-xs mb-12">
              <div className="mb-8">
                <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-md mb-2 inline-block">
                  CURRICULUM SYSTEM
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  1. 完整与不断迭代的课程体系
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  涵盖微观原理、策略执行与资金管理的三阶递进式培养计划
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Stage 1 */}
                <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200/80 relative">
                  <div className="w-10 h-10 rounded-xl bg-red-600 text-white font-black flex items-center justify-center text-sm mb-4">
                    P1
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-lg mb-2">
                    阶段一：微观基础构建
                  </h4>
                  <ul className="text-slate-600 text-xs leading-relaxed space-y-2">
                    <li className="flex items-start gap-2">
                      <i className="fa-solid fa-check text-red-500 mt-0.5"></i>
                      <span>CME 撮合引擎原理与 DOM 深度图识读</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fa-solid fa-check text-red-500 mt-0.5"></i>
                      <span>Footprint 逐笔图表设置与 Delta 统计</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fa-solid fa-check text-red-500 mt-0.5"></i>
                      <span>Volume Profile 节点与 POC 分布规律</span>
                    </li>
                  </ul>
                </div>

                {/* Stage 2 */}
                <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200/80 relative">
                  <div className="w-10 h-10 rounded-xl bg-red-600 text-white font-black flex items-center justify-center text-sm mb-4">
                    P2
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-lg mb-2">
                    阶段二：核心策略实战
                  </h4>
                  <ul className="text-slate-600 text-xs leading-relaxed space-y-2">
                    <li className="flex items-start gap-2">
                      <i className="fa-solid fa-check text-red-500 mt-0.5"></i>
                      <span>失衡（Imbalance）与主动买卖单起爆</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fa-solid fa-check text-red-500 mt-0.5"></i>
                      <span>吸收（Absorption）与冰山委托识别</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fa-solid fa-check text-red-500 mt-0.5"></i>
                      <span>假突破过滤与流动性猎杀应对</span>
                    </li>
                  </ul>
                </div>

                {/* Stage 3 */}
                <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200/80 relative">
                  <div className="w-10 h-10 rounded-xl bg-red-600 text-white font-black flex items-center justify-center text-sm mb-4">
                    P3
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-lg mb-2">
                    阶段三：自营矩阵与出海
                  </h4>
                  <ul className="text-slate-600 text-xs leading-relaxed space-y-2">
                    <li className="flex items-start gap-2">
                      <i className="fa-solid fa-check text-red-500 mt-0.5"></i>
                      <span>TPT / Earn2Trade 多账号风控配置</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fa-solid fa-check text-red-500 mt-0.5"></i>
                      <span>Tradovate / Rithmic 稳定连接策略</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fa-solid fa-check text-red-500 mt-0.5"></i>
                      <span>Wise 跨境提款与合规通道全解</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Ecosystem Value Matrix (4 Columns) */}
          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:border-red-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-xl font-bold mb-4">
                  <i className="fa-solid fa-headset"></i>
                </div>
                <h4 className="font-extrabold text-slate-900 text-base mb-2">
                  每日 Live 盘前拆解
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  交易日固定美股开盘前推送 DOM 关键节点与订单流预案，拒绝滞后后视镜。
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:border-red-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-xl font-bold mb-4">
                  <i className="fa-solid fa-tags"></i>
                </div>
                <h4 className="font-extrabold text-slate-900 text-base mb-2">
                  独家自营折扣福利
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Take Profit Trader 官方最高 40% OFF 专属折扣码（NOFEE40），节省过关成本。
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:border-red-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-xl font-bold mb-4">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <h4 className="font-extrabold text-slate-900 text-base mb-2">
                  出海基础设施工具
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  提供完整的 Wise 注册、Rithmic 专线与跨境出金实操图文手册支持。
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:border-red-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-xl font-bold mb-4">
                  <i className="fa-solid fa-users text-red-600"></i>
                </div>
                <h4 className="font-extrabold text-slate-900 text-base mb-2">
                  高质量社群交流
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  加入知识星球与微信私享群，与上百位实盘交易者共同研讨、互相监督。
                </p>
              </div>

            </div>
          </Reveal>

        </section>

        {/* Bottom Call to Action Section (White Background) */}
        <Reveal>
          <div className="bg-white rounded-3xl p-8 md:p-14 border border-red-300/80 shadow-sm relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-red-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="bg-red-100 text-red-600 text-xs font-black px-4 py-1.5 rounded-lg uppercase tracking-widest inline-block mb-5 border border-red-200/60">
                JOIN DELTAPEX · 开启理性交易
              </span>
              <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-5">
                开启您的订单流职业交易之路
              </h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10 font-normal">
                摆脱滞后指标与情绪干扰，加入 Deltapex，用微观结构建立逻辑严密的实盘优势。
              </p>

              <div className="flex flex-wrap items-center justify-center gap-5">
                <Button
                  href="#course"
                  className="px-8 py-4 rounded-xl font-bold bg-red-600 hover:bg-red-500 text-white transition-all shadow-md shadow-red-600/20"
                >
                  <i className="fa-solid fa-graduation-cap mr-2"></i>
                  立即报名 Deltapex 课程
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

      {/* Lightbox Image Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-4 md:p-6 max-w-4xl w-full border border-slate-200 shadow-2xl relative animate-in fade-in zoom-in duration-200"
          >
            <div className="flex items-center justify-between mb-4 px-2">
              <h3 className="font-extrabold text-slate-900 text-base md:text-lg">
                {activeImage.title}
              </h3>
              <button
                onClick={() => setActiveImage(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 max-h-[80vh] flex items-center justify-center">
              <img
                src={activeImage.url}
                alt={activeImage.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Video Player Modal */}
      {selectedVideo && (
        <div
          onClick={() => setSelectedVideo(null)}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-6 max-w-3xl w-full border border-slate-200 shadow-2xl relative animate-in fade-in zoom-in duration-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase">
                  {selectedVideo.tag} · {selectedVideo.studentName}
                </span>
                <h3 className="font-extrabold text-slate-900 text-lg">
                  {selectedVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Video Player Embed Placeholder Frame */}
            <div className="rounded-2xl overflow-hidden bg-slate-950 aspect-video relative flex items-center justify-center border border-slate-200">
              <div className="text-center p-8 text-white">
                <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg animate-pulse">
                  <i className="fa-solid fa-play ml-1"></i>
                </div>
                <h4 className="font-bold text-base mb-1">
                  视频播放预留窗口 ({selectedVideo.duration})
                </h4>
                <p className="text-slate-400 text-xs max-w-md mx-auto">
                  可随时替换为 Bilibili / YouTube / MP4 直链文件地址。
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm mt-4 leading-relaxed">
              {selectedVideo.summary}
            </p>
          </div>
        </div>
      )}

    </div>
  );
};

export default WhyDeltapexView;
