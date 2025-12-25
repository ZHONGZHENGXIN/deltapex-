
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

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Smooth out rotation
    const rotateX = (y - centerY) / 35; 
    const rotateY = (centerX - x) / 55;
    
    setRotate({ x: rotateX, y: rotateY });
  }, []);

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  const handleCopy = () => {
    if (firm.code && firm.code !== "无") {
      navigator.clipboard.writeText(firm.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleRulesClick = (e: React.MouseEvent) => {
    // Only intercept if the firm has internal rules configured
    if (firm.hasInternalRules && onRulesClick) {
      e.preventDefault();
      onRulesClick(firm.id);
    }
  };

  const borderClasses = firm.isFeatured ? "border-primary/50 shadow-sm" : "border-slate-200";

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: rotate.x === 0 ? 'transform 0.5s ease-out' : 'transform 0.1s ease-out'
      }}
      className={`group relative bg-white border ${borderClasses} rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-xl hover:border-primary/60 transition-all duration-300 will-change-transform`}
    >
      <div className="flex items-center gap-5 relative z-10">
        <div className={`w-16 h-16 ${firm.iconBgClass} rounded-xl flex items-center justify-center shrink-0 overflow-hidden border border-slate-100 shadow-sm`}>
          {firm.logoUrl && !imageError ? (
            <img 
              src={firm.logoUrl} 
              alt={firm.name} 
              className="w-full h-full object-contain p-2"
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
            <h3 className="text-slate-900 font-bold text-lg md:text-xl group-hover:text-primary transition-colors">{firm.name}</h3>
            {firm.isFeatured && (
              <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">FEATURED</span>
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
        <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm flex items-center gap-3">
          <span className="text-slate-400 font-medium text-xs">Code:</span>
          <span className="text-slate-900 font-mono font-bold tracking-wider">{firm.code}</span>
          {firm.code !== "无" && (
            <button 
              type="button" 
              onClick={handleCopy} 
              className="p-1 hover:bg-slate-200 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
              title="Copy code"
            >
              {copied ? <i className="fa-solid fa-check text-green-500"></i> : <i className="fa-regular fa-copy text-slate-400"></i>}
            </button>
          )}
        </div>

        <div className="flex gap-2 flex-1 md:flex-none">
          <Button href={firm.buyLink} variant="primary" className="flex-1 md:flex-none px-6 py-2.5 text-sm font-bold">购买</Button>
          <Button 
            href={firm.rulesLink} 
            variant="outline" 
            className="flex-1 md:flex-none px-6 py-2.5 text-sm font-semibold" 
            onClick={handleRulesClick}
          >
            规则图
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FirmCard;