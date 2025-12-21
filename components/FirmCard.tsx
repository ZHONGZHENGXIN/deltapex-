import React, { useState } from 'react';
import { Firm } from '../types';
import Button from './Button';

interface FirmCardProps {
  firm: Firm;
  onRulesClick?: (firmId: string) => void;
}

const FirmCard: React.FC<FirmCardProps> = ({ firm, onRulesClick }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (firm.code && firm.code !== "无") {
      navigator.clipboard.writeText(firm.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const hasCode = firm.code && firm.code !== "无";

  const handleRulesClick = (e: React.MouseEvent) => {
    // 如果存在自定义处理逻辑并且链接指向内部页面
    if (onRulesClick && firm.rulesLink === "tpt-rules.html") {
      e.preventDefault();
      onRulesClick(firm.id);
    }
  };

  const featuredClasses = firm.isFeatured 
    ? "border-primary/40 shadow-xl shadow-red-500/5 ring-1 ring-primary/10 bg-gradient-to-r from-white to-red-50/20" 
    : "border-slate-200 shadow-sm";

  return (
    <div className={`relative bg-white border rounded-lg p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all duration-300 hover:shadow-lg ${featuredClasses}`}>
      {firm.isFeatured && (
        <div className="absolute -top-3 -left-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm z-20 flex items-center gap-1">
          <i className="fa-solid fa-star text-[8px]"></i>
          TOP推荐
        </div>
      )}

      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 ${firm.iconBgClass} rounded-md flex items-center justify-center shrink-0 overflow-hidden relative border border-slate-200 shadow-sm transition-transform group-hover:scale-105`}>
          {firm.logoUrl ? (
            <img 
              src={firm.logoUrl} 
              alt={firm.name} 
              className="w-full h-full object-contain p-1"
            />
          ) : firm.isCustomIcon ? (
            <span className={`${firm.iconColorClass} font-bold text-xl`}>{firm.customIconText}</span>
          ) : (
            <i className={`${firm.iconClass} text-xl ${firm.iconColorClass}`}></i>
          )}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-slate-900 font-bold text-base md:text-lg">{firm.name}</h3>
            {firm.isFeatured && <i className="fa-solid fa-circle-check text-primary text-sm" title="认证伙伴"></i>}
          </div>
          <div className="text-xs text-slate-500 mt-1">支持平台 ： {firm.platforms}</div>
          <div className="text-xs text-slate-500 mt-0.5">评价 ： {firm.rating}</div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
        <div className="bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs flex items-center gap-2 mr-2 group relative">
          <span className="text-slate-500 font-medium">Code:</span>
          <span className="text-slate-900 font-mono font-bold select-all bg-slate-100 px-1 rounded">{firm.code}</span>
          
          {hasCode && (
            <button 
              onClick={handleCopy}
              className="ml-1 focus:outline-none"
              title="Copy code"
            >
              {copied ? (
                <i className="fa-solid fa-check text-green-500"></i>
              ) : (
                <i className="fa-regular fa-copy text-slate-400 cursor-pointer hover:text-primary transition-colors"></i>
              )}
            </button>
          )}
        </div>

        <Button 
          href={firm.buyLink}
          variant="primary" 
          className={`flex-1 md:flex-none px-6 py-2.5 text-sm font-bold ${firm.isFeatured ? 'animate-pulse-subtle' : ''}`}
        >
          → 购买
        </Button>
        <Button 
          href={firm.rulesLink}
          variant="outline" 
          className="flex-1 md:flex-none px-5 py-2.5 text-sm font-semibold hover:bg-red-50"
          onClick={handleRulesClick}
        >
          规则汇总图
        </Button>
      </div>
      
      {firm.isFeatured && (
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes pulse-subtle {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
          }
          .animate-pulse-subtle {
            animation: pulse-subtle 3s infinite ease-in-out;
          }
        `}} />
      )}
    </div>
  );
};

export default FirmCard;