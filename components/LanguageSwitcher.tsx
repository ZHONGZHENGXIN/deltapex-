import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';
import { cn } from '../lib/utils';

interface LanguageSwitcherProps {
  variant?: 'nav' | 'mobile' | 'footer' | 'floating';
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'nav', className }) => {
  const { language, setLanguage, toggleLanguage, isTraditional } = useLanguage();

  if (variant === 'mobile') {
    return (
      <div className={cn("flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10", className)}>
        <div className="flex items-center gap-2.5 text-slate-300 text-sm font-medium">
          <Globe size={18} className="text-[#D32F2F]" />
          <span>语言 / 語言</span>
        </div>
        <div className="flex items-center bg-black/40 p-1 rounded-lg border border-white/10 text-xs font-bold">
          <button
            onClick={() => setLanguage('zh-CN')}
            className={cn(
              "px-3 py-1.5 rounded-md transition-all",
              !isTraditional
                ? "bg-[#D32F2F] text-white shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            )}
          >
            简体
          </button>
          <button
            onClick={() => setLanguage('zh-TW')}
            className={cn(
              "px-3 py-1.5 rounded-md transition-all",
              isTraditional
                ? "bg-[#D32F2F] text-white shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            )}
          >
            繁體
          </button>
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={cn("inline-flex items-center gap-2 bg-white/80 border border-slate-200 rounded-full p-1 shadow-xs text-xs font-semibold", className)}>
        <div className="flex items-center gap-1.5 px-2 text-slate-500">
          <Globe size={14} className="text-slate-600" />
          <span>语言</span>
        </div>
        <div className="flex items-center bg-slate-100 p-0.5 rounded-full">
          <button
            onClick={() => setLanguage('zh-CN')}
            className={cn(
              "px-2.5 py-1 rounded-full text-xs font-bold transition-all",
              !isTraditional
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-500 hover:text-slate-800"
            )}
          >
            简体中文
          </button>
          <button
            onClick={() => setLanguage('zh-TW')}
            className={cn(
              "px-2.5 py-1 rounded-full text-xs font-bold transition-all",
              isTraditional
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-500 hover:text-slate-800"
            )}
          >
            繁體中文
          </button>
        </div>
      </div>
    );
  }

  // Default 'nav' variant
  return (
    <div className={cn("relative flex items-center", className)}>
      <button
        onClick={toggleLanguage}
        title={isTraditional ? "切换为简体中文" : "切換為繁體中文"}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 text-slate-200 hover:text-white transition-all duration-200 text-xs font-bold backdrop-blur-md shadow-xs group"
      >
        <Globe size={14} className="text-slate-400 group-hover:text-[#D32F2F] transition-colors" />
        <span className={cn("transition-colors", !isTraditional ? "text-white font-black" : "text-slate-400 font-normal")}>
          简
        </span>
        <span className="text-slate-600">/</span>
        <span className={cn("transition-colors", isTraditional ? "text-white font-black" : "text-slate-400 font-normal")}>
          繁
        </span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
