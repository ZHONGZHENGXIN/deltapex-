import React, { useState, useRef, useCallback } from 'react';
import { Firm } from '../types';
import Button from './Button';

interface FirmCardProps {
  firm: Firm;
  onRulesClick?: (firmId: string) => void;
}

const FirmCard: React.FC<FirmCardProps> = ({ firm, onRulesClick }) => {
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 25; 
    const rotateY = (centerX - x) / 40;
    
    setRotate({ x: rotateX, y: rotateY });
    setSpotlightPos({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setRotate({ x: 0, y: 0 });
  }, []);

  const handleCopy = () => {
    if (firm.code && firm.code !== "无") {
      navigator.clipboard.writeText(firm.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const hasCode = firm.code && firm.code !== "无";

  // 这里的逻辑关键：如果 rulesLink 包含特定的文件名，我们就拦截并展示内置视图
  const handleRulesClick = (e: React.MouseEvent) => {
    if (onRulesClick && (firm.rulesLink.includes('.html') || firm.rulesLink === '#')) {
      // 如果是我们定义的内置路由，则阻止默认跳转，调用 state 切换
      if (firm.id === 'tpt' || firm.id === 'lucid') {
        e.preventDefault();
        onRulesClick(firm.id);
      }
    }
  };

  const borderClasses = firm.isFeatured 
    ? "border-primary/50 shadow-[0_0_20px_rgba(211,47,47,0.05)]" 
    : "border-slate-200";

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(${rotate.x !== 0 ? '-10px' : '0'})`,
        transition: rotate.x === 0 ? 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)' : 'transform 0.1s ease-out, box-shadow 0.3s ease'
      }}
      className={`group relative bg-white border ${borderClasses} rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-[0_30px_60px_-12px_rgba(183,28,28,0.15)] hover:border-primary/60 z-10`}
    >
      <div 
        className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(211, 47, 47, 0.04), transparent 40%)`
        }}
      />

      <div className="flex items-center gap-5 relative z-10">
        <div className={`w-16 h-16 ${firm.iconBgClass} rounded-xl flex items-center justify-center shrink-0 overflow-hidden relative border border-slate-100 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-lg`}>
          {firm.logoUrl && !imageError ? (
            <img 
              src={firm.logoUrl} 
              alt={firm.name} 
              className="w-full h-full object-contain p-2"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
            />
          ) : firm.isCustomIcon ? (
            <span className={`${firm.iconColorClass} font-bold text-2xl`}>{firm.customIconText}</span>
          ) : (
            <i className={`${firm.iconClass} text-2xl ${firm.iconColorClass}`}></i>
          )}
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-slate-900 font-bold text-lg md:text-xl group-hover:text-primary transition-colors duration-300">
              {firm.name}
            </h3>
            {firm.isFeatured && (
              <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider animate-pulse">FEATURED</span>
            )}
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="font-medium">支持平台:</span>
              <span className="text-slate-700">{firm.platforms}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="font-medium">评价:</span>
              <span className="text-primary font-semibold">{firm.rating}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 w-full md:w-auto relative z-10">
        <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm flex items-center gap-3 transition-all duration-300 group-hover:bg-white group-hover:border-primary/40 group-hover:shadow-sm">
          <span className="text-slate-400 font-medium text-xs">Code:</span>
          <span className="text-slate-900 font-mono font-bold tracking-wider">{firm.code}</span>
          {hasCode && (
            <button onClick={handleCopy} className="ml-1 p-1 hover:bg-slate-100 rounded-md transition-colors">
              {copied ? <i className="fa-solid fa-check text-green-500 animate-bounce"></i> : <i className="fa-regular fa-copy text-slate-400 cursor-pointer hover:text-primary transition-colors"></i>}
            </button>
          )}
        </div>

        <div className="flex gap-2 flex-1 md:flex-none">
          <Button href={firm.buyLink} variant="primary" className="flex-1 md:flex-none px-8 py-3 text-sm font-bold shadow-lg">
            <i className="fa-solid fa-arrow-right mr-2 text-[10px]"></i> 购买
          </Button>
          <Button 
            href={firm.rulesLink}
            variant="outline" 
            className="flex-1 md:flex-none px-6 py-3 text-sm font-semibold"
            onClick={handleRulesClick}
          >
            规则汇总图
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FirmCard;