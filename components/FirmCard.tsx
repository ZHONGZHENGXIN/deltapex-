import React, { useState } from 'react';
import { Firm } from '../types';
import Button from './Button';

interface FirmCardProps {
  firm: Firm;
}

const FirmCard: React.FC<FirmCardProps> = ({ firm }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (firm.code && firm.code !== "无") {
      navigator.clipboard.writeText(firm.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const hasCode = firm.code && firm.code !== "无";

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 ${firm.iconBgClass} rounded-md flex items-center justify-center shrink-0 overflow-hidden relative`}>
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
          <h3 className="text-slate-900 font-bold text-base md:text-lg">{firm.name}</h3>
          <div className="text-xs text-slate-500 mt-1">支持平台 ： {firm.platforms}</div>
          <div className="text-xs text-slate-500 mt-0.5">评价 ： {firm.rating}</div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
        <div className="bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs flex items-center gap-2 mr-2 group relative">
          <span className="text-slate-500">Code:</span>
          <span className="text-slate-900 font-mono font-bold select-all">{firm.code}</span>
          
          {hasCode && (
            <button 
              onClick={handleCopy}
              className="ml-1 focus:outline-none"
              title="Copy code"
            >
              {copied ? (
                <i className="fa-solid fa-check text-green-500"></i>
              ) : (
                <i className="fa-regular fa-copy text-slate-400 cursor-pointer hover:text-primary"></i>
              )}
            </button>
          )}
        </div>

        <Button 
          href={firm.buyLink}
          variant="primary" 
          className="flex-1 md:flex-none px-5 py-2 text-sm"
        >
          → 购买
        </Button>
        <Button 
          href={firm.rulesLink}
          variant="outline" 
          className="flex-1 md:flex-none px-5 py-2 text-sm"
        >
          规则汇总图
        </Button>
      </div>
    </div>
  );
};

export default FirmCard;