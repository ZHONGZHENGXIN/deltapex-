import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import Button from './Button';
import CountUp from './CountUp';
import { STUDENT_CASES } from '../constants';

// ALEX 导师肖像图片 URL
const ALEX_PORTRAIT_URL = "https://pub-02fa9a4ecd1f4f469a947c51df6fb5a3.r2.dev/Alex.jpg";

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
    id: 'tr-2026-07',
    year: '2026',
    quarter: '2026.7',
    title: '7月业绩',
    description: '',
    type: 'payout',
    imageUrl: 'https://pub-02fa9a4ecd1f4f469a947c51df6fb5a3.r2.dev/yeji/2026.7.png',
  },
  {
    id: 'tr-2026-06',
    year: '2026',
    quarter: '2026.6',
    title: '6月业绩',
    description: '',
    type: 'equity',
    imageUrl: 'https://pub-02fa9a4ecd1f4f469a947c51df6fb5a3.r2.dev/yeji/2026.6.png',
  },
  {
    id: 'tr-2026-05',
    year: '2026',
    quarter: '2026.5',
    title: '5月业绩',
    description: '',
    type: 'statement',
    imageUrl: 'https://pub-02fa9a4ecd1f4f469a947c51df6fb5a3.r2.dev/yeji/2026.5.png',
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
  bvid?: string;
}

const getBilibiliEmbedUrl = (video: StudentVideo): string | null => {
  if (video.bvid) {
    return `//player.bilibili.com/player.html?bvid=${video.bvid}&page=1&high_quality=1&danmaku=0`;
  }
  if (video.videoUrl && video.videoUrl.includes('bilibili.com')) {
    const match = video.videoUrl.match(/BV[a-zA-Z0-9]+/);
    if (match) {
      return `//player.bilibili.com/player.html?bvid=${match[0]}&page=1&high_quality=1&danmaku=0`;
    }
  }
  return null;
};

const STUDENT_VIDEOS: StudentVideo[] = [
  {
    id: 'v1',
    studentName: '学员陆哥',
    title: '芯片领域大佬—陆哥：由亏转盈的交易历程分享',
    duration: '学员视频',
    tag: '学员实操分享',
    summary: '学员陆哥详细分享在实际期货交割与考核盘中的订单流思维转变、买卖盘吸收理解与风控心得。',
    thumbnail: '',
    videoUrl: 'https://www.bilibili.com/video/BV1Lu3X6TE74',
    bvid: 'BV1Lu3X6TE74',
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
    : TRACK_RECORDS.filter((item) => item.quarter === selectedYear || item.year === selectedYear);

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

        {/* MODULE 1: ALEX的长期业绩突出 */}
        <section id="alex-track-record" className="mb-28">
          
          {/* Section Header */}
          <Reveal>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-xl bg-red-100 text-red-600 font-extrabold flex items-center justify-center text-sm font-mono">
                  01
                </span>
                <span className="text-xs font-black tracking-widest text-red-600 uppercase">
                  MODULE ONE · 导师能力
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                关于 Alex
              </h2>
              <p className="text-slate-500 text-base md:text-lg max-w-3xl">
                卓越的长期业绩：真正的教学源于长期透明的实盘业绩，而非纸上谈兵。
              </p>
            </div>
          </Reveal>

          {/* Mentor Bio Card - Institutional Editorial Profile Style */}
          <div className="bg-[#FAF9F6] rounded-3xl p-8 md:p-12 border border-slate-200/90 shadow-xs mb-12 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-stretch gap-8 md:gap-12">
              
              {/* Mentor Portrait Card (Slides in from Left to Center) */}
              <motion.div 
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="lg:w-80 shrink-0 flex flex-col justify-end rounded-2xl bg-[#10141E] text-white relative overflow-hidden border border-slate-800 shadow-md min-h-[340px] group"
              >
                {/* 导师肖像图片 */}
                <img 
                  src={ALEX_PORTRAIT_URL} 
                  alt="Alex - Founder, CEO & Co-CIO" 
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // 如果图片无法加载则隐藏
                    (e.target as HTMLElement).style.opacity = '0';
                  }}
                />
                
                {/* 底部渐变蒙层与身份标签 */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#10141E] via-[#10141E]/40 to-transparent pointer-events-none" />

                <div className="relative z-10 p-6">
                  <div className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate-300 uppercase mb-2">
                    DELTAPEX LEADERSHIP
                  </div>
                  <h3 className="font-serif text-3xl font-bold tracking-tight text-white mb-1">
                    ALEX
                  </h3>
                  <p className="text-xs font-semibold tracking-wider text-red-400 uppercase">
                    Founder, CEO & Co-CIO
                  </p>
                </div>

                <div className="relative z-10 px-6 pb-5 pt-2 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                    QUANT & ORDER FLOW
                  </span>
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                </div>
              </motion.div>

              {/* Mentor Content Details (Slides in from Right to Center) */}
              <motion.div 
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 flex flex-col justify-center space-y-6"
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 tracking-tight mb-1">
                    Founder, CEO and Co-Chief Investment Officer
                  </h3>
                  <p className="text-xs font-mono tracking-widest text-slate-400 uppercase">
                    DELTAPEX CAPITAL & EDUCATION
                  </p>
                </div>

                {/* Motto Quote */}
                <blockquote className="text-slate-700 font-serif italic text-base md:text-lg border-l-2 border-red-600 pl-4 md:pl-5 py-1 leading-relaxed">
                  "Trading is not about predicting the future, it's about reacting to the present with precision."
                </blockquote>

                {/* Numbered Editorial Credentials List */}
                <div className="pt-2 border-t border-slate-200/80">
                  {[
                    { id: "01", text: "香港中文大学量化金融及风险管理（QFRM）荣誉学士" },
                    { id: "02", text: "上海交通大学量化俱乐部特邀讲座嘉宾" },
                    { id: "03", text: "国内首批订单流实盘直播交易者（自2015年起深耕订单流）" },
                    {
                      id: "04",
                      content: (
                        <span>
                          5,000美元挑战1,000,000美元实盘系列（已至
                          <span className="font-extrabold text-red-600 text-lg md:text-xl mx-1.5 font-mono">
                            <CountUp value={1500000} prefix="$" />
                          </span>
                          美元）
                        </span>
                      )
                    },
                    { id: "05", text: "前私募股权基金投资经理（500 亿基金规模）" },
                  ].map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start md:items-center gap-4 py-3.5 border-b border-slate-200/60 last:border-0 group/item transition-colors hover:bg-white/60 px-2 rounded-lg"
                    >
                      <span className="shrink-0 text-xs font-mono font-bold tracking-widest text-slate-900 group-hover/item:text-red-600 transition-colors w-7">
                        {item.id}
                      </span>
                      <span className="text-sm md:text-base text-slate-800 font-medium leading-snug">
                        {item.content || item.text}
                      </span>
                    </div>
                  ))}
                </div>

              </motion.div>

            </div>
          </div>

          {/* Performance Track Record Screenshots (Chronological Timeline Grid) */}
          <Reveal delay={0.2}>
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-xs">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                    实盘业绩
                  </h3>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80 self-start sm:self-auto">
                  {['all', '2026.7', '2026.6', '2026.5'].map((yr) => (
                    <button
                      key={yr}
                      onClick={() => setSelectedYear(yr)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                        selectedYear === yr
                          ? 'bg-red-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                      }`}
                    >
                      {yr === 'all' ? '全部记录' : yr}
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
                    {/* Image Frame */}
                    <div className="relative aspect-video bg-slate-900 overflow-hidden flex items-center justify-center">
                      <img
                        src={record.imageUrl}
                        alt={record.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                        <span className="w-10 h-10 rounded-full bg-white/90 text-slate-900 flex items-center justify-center text-sm group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all shadow-md">
                          <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </span>
                      </div>
                    </div>

                    {/* Simple Title Only */}
                    <div className="p-4 bg-white text-center border-t border-slate-100">
                      <h4 className="font-extrabold text-slate-900 text-base md:text-lg group-hover:text-red-600 transition-colors">
                        {record.title}
                      </h4>
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

          {/* Sub-part A: 学员案例 (Student Success Cases - Auto Scrolling Images Carousel) */}
          <div className="mb-16">
            <Reveal delay={0.1}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                    <i className="fa-solid fa-award text-red-600"></i>
                    优秀学员案例与盈亏统计
                  </h3>
                </div>
                <a
                  href="#cases"
                  className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 shrink-0"
                >
                  查看更多案例 <i className="fa-solid fa-chevron-right text-[10px]"></i>
                </a>
              </div>
            </Reveal>

            {/* Smooth Infinite Horizontal Scrolling Image Carousel - Pure Image Cards */}
            <div className="relative w-full overflow-hidden mask-fade-edges py-4">
              <div
                className="flex w-fit animate-scroll-x hover:[animation-play-state:paused]"
                style={{ animationDuration: '35s' }}
              >
                {[...STUDENT_CASES, ...STUDENT_CASES].map((student, idx) => (
                  <div
                    key={`scrolling-case-${student.id}-${idx}`}
                    onClick={() =>
                      setActiveImage({
                        title: `${student.name} - ${student.profit} (${student.strategy})`,
                        url: student.screenshot,
                      })
                    }
                    className="w-[280px] sm:w-[360px] md:w-[420px] mx-3 shrink-0 bg-slate-900 border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-red-300 transition-all duration-300 group cursor-pointer"
                  >
                    {/* Pure Screenshot Container */}
                    <div className="relative w-full aspect-16/10 bg-slate-900 overflow-hidden">
                      <img
                        src={student.screenshot}
                        alt={`${student.name} 真实交易凭证`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                        <span className="bg-white/95 text-slate-900 text-xs font-bold px-4 py-2 rounded-xl shadow-md group-hover:bg-red-600 group-hover:text-white transition-all flex items-center gap-1.5">
                          <i className="fa-solid fa-expand text-xs"></i> 点击查看大图
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sub-part B: 学员视频 (Single Clean Video Frame) */}
          <div>
            <Reveal delay={0.1}>
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                  <i className="fa-solid fa-circle-play text-red-600"></i>
                  学员有话说：
                </h3>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="max-w-3xl">
                <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col p-5 md:p-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-red-50 text-red-600 text-xs font-extrabold px-3.5 py-1.5 rounded-full border border-red-100/80 shadow-2xs">
                      {STUDENT_VIDEOS[0].tag} · {STUDENT_VIDEOS[0].studentName}
                    </span>
                    <button
                      onClick={() => setSelectedVideo(STUDENT_VIDEOS[0])}
                      className="text-xs font-bold text-slate-500 hover:text-red-600 flex items-center gap-1.5 bg-slate-100/80 hover:bg-red-50 px-3 py-1.5 rounded-full transition-all"
                    >
                      <i className="fa-solid fa-expand"></i> 全屏/全宽播放
                    </button>
                  </div>

                  <h4 className="font-black text-slate-900 text-base md:text-xl tracking-tight leading-snug">
                    {STUDENT_VIDEOS[0].title}
                  </h4>

                  {/* Video Player Frame */}
                  <div className="relative aspect-video bg-slate-950 rounded-2xl overflow-hidden border border-slate-200/80 shadow-inner group">
                    {getBilibiliEmbedUrl(STUDENT_VIDEOS[0]) ? (
                      <iframe
                        src={getBilibiliEmbedUrl(STUDENT_VIDEOS[0])!}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen
                        className="w-full h-full border-0"
                      />
                    ) : (
                      <video
                        controls
                        preload="metadata"
                        src={`${STUDENT_VIDEOS[0].videoUrl}#t=0.1`}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>

                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
                    <i className="fa-solid fa-[#E60012] fa-quote-left mr-2 text-red-400"></i>
                    {STUDENT_VIDEOS[0].summary}
                  </p>
                </div>
              </div>
            </Reveal>
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
              <div className="text-slate-600 text-base md:text-lg max-w-3xl leading-relaxed space-y-1">
                <p>授人以鱼，不如授人以渔。</p>
                <p>拒绝知识拼凑，注重底层框架。</p>
              </div>
            </div>
          </Reveal>

          {/* Complete Curriculum System - Streamlined with Course Link */}
          <Reveal delay={0.1}>
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-xs mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-md mb-3 inline-block">
                  CURRICULUM SYSTEM
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
                  不仅仅卖“知识”，更是卖“能力”
                </h3>
                <p className="text-slate-700 text-base md:text-lg font-bold">
                  迭代更新的系统化课程 × 每周最新实战案例与策略
                </p>
              </div>

              <a
                href="#course"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all shrink-0"
              >
                <span>查看课程详情</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
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
            <div className="flex items-center justify-end mb-3 px-2">
              <button
                onClick={() => setActiveImage(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
                title="关闭"
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

            {/* Video Player Frame */}
            <div className="rounded-2xl overflow-hidden bg-slate-950 aspect-video relative flex items-center justify-center border border-slate-200 shadow-inner">
              {getBilibiliEmbedUrl(selectedVideo) ? (
                <iframe
                  src={getBilibiliEmbedUrl(selectedVideo)!}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : selectedVideo.videoUrl ? (
                <video
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-center p-8 text-white">
                  <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg animate-pulse">
                    <i className="fa-solid fa-play ml-1"></i>
                  </div>
                  <h4 className="font-bold text-base mb-1">
                    视频播放窗口 ({selectedVideo.duration})
                  </h4>
                </div>
              )}
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
