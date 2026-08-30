import React, { useState, useRef, useCallback } from 'react';
import { ATAS_REGISTER_LINK } from '../constants';

const TradingToolsHomeSection: React.FC = () => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 30; 
    const rotateY = (centerX - x) / 50;
    
    setRotate({ x: rotateX, y: rotateY });
  }, []);

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <div id="trading-tools-section" className="scroll-mt-32 space-y-5">
      {/* 顶部标题区 (与截图 1:1 还原) */}
      <div className="flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-600/25 shrink-0">
          <i className="fa-solid fa-wrench"></i>
        </div>
        <div>
          <div className="flex items-center gap-2.5">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              交易必备工具
            </h3>
            <span className="bg-blue-100 text-blue-700 text-xs font-black px-2.5 py-0.5 rounded-md uppercase tracking-wider hidden sm:inline-block">
              MODULE 05
            </span>
          </div>
          <p className="text-slate-500 text-xs md:text-sm mt-0.5 font-normal">
            工欲善其事，必先利其器 — 专业盘口与订单流解析软件
          </p>
        </div>
      </div>

      {/* 外层大卡片容器 */}
      <div className="bg-white/80 backdrop-blur-xs border border-slate-200/90 rounded-[32px] p-4 sm:p-6 md:p-8 shadow-sm relative overflow-hidden">
        {/* 背景微光 */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* 内部 ATAS 注册下载卡片 */}
        <a
          ref={cardRef}
          href={ATAS_REGISTER_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            transition: rotate.x === 0 ? 'transform 0.5s ease-out' : 'transform 0.1s ease-out'
          }}
          className="group/atas relative flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:shadow-xl hover:border-blue-300 hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer overflow-hidden will-change-transform"
        >
          {/* 左侧图标与文本区域 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 md:gap-6 text-center sm:text-left w-full sm:w-auto">
            {/* ATAS 订单流图表图标 (与截图 1:1 精确匹配) */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-blue-50/90 border border-blue-100/80 flex items-center justify-center text-blue-600 group-hover/atas:bg-blue-600 group-hover/atas:text-white group-hover/atas:scale-105 transition-all duration-300 shrink-0 shadow-inner">
              <svg 
                className="w-8 h-8 sm:w-10 sm:h-10 transition-colors" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M4 4v16h16" />
                <path d="M4 10h11" />
                <path d="M4 15h7" />
              </svg>
            </div>

            {/* 文字区域 */}
            <div>
              <div className="text-[11px] md:text-xs font-bold text-blue-600/90 uppercase tracking-wider mb-1 flex items-center gap-1.5 justify-center sm:justify-start">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                MENTOR'S WORKSTATION · 导师实盘同款
              </div>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 group-hover/atas:text-blue-600 transition-colors tracking-tight">
                ATAS 订单流软件（导师实盘同款）
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-slate-500 group-hover/atas:text-slate-600 mt-1 font-normal">
                直播视频中使用的同款专业订单流与盘口微观结构解析工具
              </p>
            </div>
          </div>

          {/* 右侧圆形跳转箭头指示器 */}
          <div className="shrink-0">
            <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200/80 text-slate-400 flex items-center justify-center text-base group-hover/atas:bg-blue-600 group-hover/atas:text-white group-hover/atas:border-blue-600 group-hover/atas:translate-x-1.5 transition-all duration-300 shadow-xs">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default TradingToolsHomeSection;
