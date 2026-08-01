import React from 'react';
import { FIRMS, COMMUNITY_ACCOUNTS } from '../constants';
import Button from './Button';
import FirmCard from './FirmCard';
import Reveal from './Reveal';
import Footer from './Footer';

const PropFirmToolsView: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 pt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24">
        
        {/* Header Navigation & Banner */}
        <Reveal>
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-sm relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <a 
                    href="#home" 
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 px-4 py-2 rounded-full transition-all"
                  >
                    <i className="fa-solid fa-arrow-left"></i> 返回主页
                  </a>
                  <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1.5 rounded-full border border-red-100">
                    ECOSYSTEM & TOOLS
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                  PropFirm 汇总与交易工具
                </h1>
                <p className="text-slate-500 text-sm md:text-base mt-3 max-w-2xl leading-relaxed">
                  一站式获取期货自营公司（Prop Firm）考核规则、独家折扣、ATAS 订单流专业盘口工具以及官方直播与交易日志。
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 板块 1: Futures Propfirm 汇总 */}
        <section id="firms" className="scroll-mt-32">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-red-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-red-600/20">
                <i className="fa-solid fa-building-columns"></i>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Futures Propfirm 汇总
                </h2>
                <p className="text-slate-500 text-xs md:text-sm mt-0.5">
                  主流期货自营公司考核规则与独家折扣汇总
                </p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            {FIRMS.map((firm, index) => (
              <Reveal key={firm.id} delay={index * 0.1}>
                <FirmCard firm={firm} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* 板块 2: 交易必备工具 */}
        <section id="tools" className="scroll-mt-32">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-600/20">
                <i className="fa-solid fa-screwdriver-wrench"></i>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  交易必备工具
                </h2>
                <p className="text-slate-500 text-xs md:text-sm mt-0.5">
                  工欲善其事，必先利其器 — 专业盘口与订单流解析软件
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200/80 shadow-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none transition-transform duration-1000 group-hover:scale-110"></div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <a 
                  href="https://atas.net/registration-demo/?rs=oft365200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col md:flex-row items-center p-8 bg-white border border-slate-200/80 rounded-3xl shadow-sm hover:shadow-2xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-500 group/atas"
                >
                  <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover/atas:bg-blue-600 group-hover/atas:text-white transition-all duration-300 md:mr-8 mb-6 md:mb-0 shrink-0 shadow-inner">
                    <i className="fa-solid fa-chart-bar text-3xl"></i>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Order Flow Software</div>
                    <div className="text-2xl font-bold text-slate-800 group-hover/atas:text-blue-600 transition-colors mb-1">ATAS 注册下载</div>
                    <div className="text-sm text-slate-500 group-hover/atas:text-blue-500">专业订单流与 Footprint 盘口分析软件</div>
                  </div>
                  <div className="mt-6 md:mt-0 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover/atas:bg-blue-100 group-hover/atas:text-blue-600 transition-colors transform group-hover/atas:translate-x-1 duration-300">
                    <i className="fa-solid fa-arrow-right text-lg"></i>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 板块 3: 官方直播 & 交易日志 */}
        <section id="community" className="scroll-mt-32">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-red-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-red-600/20">
                <i className="fa-solid fa-tower-broadcast"></i>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
                  <span>官方直播 & 交易日志</span>
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                </h2>
                <p className="text-slate-500 text-xs md:text-sm mt-0.5">
                  实盘盘前盘后直播拆解与 Bilibili 交易日志视频
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Button
                key="ali-log"
                href={COMMUNITY_ACCOUNTS[0].url}
                target="_blank"
                variant="primary"
                className="group p-8 text-lg h-auto whitespace-normal shadow-xl shadow-red-500/20 relative overflow-hidden rounded-2xl border border-red-500/20 w-full"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col sm:flex-row items-center gap-5 justify-center">
                  <i className="fa-brands fa-bilibili text-4xl"></i>
                  <div className="text-center sm:text-left">
                    <span className="font-bold tracking-wide block">{COMMUNITY_ACCOUNTS[0].label}</span>
                    <span className="text-xs font-normal opacity-80 block mt-1">Bilibili 交易日志与实盘视频</span>
                  </div>
                  <i className="fa-solid fa-arrow-right-long text-xl sm:ml-auto group-hover:translate-x-2 transition-transform"></i>
                </div>
              </Button>

              <Button
                key="tencent-meeting"
                href="https://meeting.tencent.com/p/3621520297"
                target="_blank"
                variant="primary"
                className="group p-8 text-lg h-auto whitespace-normal shadow-xl shadow-red-500/20 relative overflow-hidden rounded-2xl border border-red-500/20 w-full"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col sm:flex-row items-center gap-5 justify-center">
                  <i className="fa-solid fa-video text-4xl"></i>
                  <div className="text-center sm:text-left">
                    <span className="font-bold tracking-wide block">腾讯会议直播间</span>
                    <span className="text-xs font-normal opacity-80 block mt-1">实时盘前拆解与行情研讨</span>
                  </div>
                  <i className="fa-solid fa-arrow-right-long text-xl sm:ml-auto group-hover:translate-x-2 transition-transform"></i>
                </div>
              </Button>
            </div>
          </Reveal>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default PropFirmToolsView;
