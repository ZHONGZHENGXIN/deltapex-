import React, { useState, useRef, useCallback } from 'react';

interface ModuleCardProps {
  id: string;
  title: string;
  subtitle?: string;
  index: string;
  icon?: string;
  href?: string;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ id, title, subtitle, index, icon, href }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    if (href) {
      window.location.hash = href;
    }
  };

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // 3D tilt effect matching Take Profit Trader card
    const rotateX = (y - centerY) / 25; 
    const rotateY = (centerX - x) / 40;
    
    setRotate({ x: rotateX, y: rotateY });
  }, []);

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <div
      id={id}
      ref={cardRef}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: rotate.x === 0 ? 'transform 0.5s ease-out' : 'transform 0.1s ease-out'
      }}
      className="group relative bg-white border-2 border-red-300/90 rounded-[28px] p-8 md:p-10 shadow-md hover:shadow-2xl hover:border-red-500 hover:shadow-red-500/10 transition-all duration-300 will-change-transform scroll-mt-32 cursor-pointer overflow-hidden"
    >
      {/* Background glow accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start md:items-center gap-5">
          {icon && (
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-red-100/80 text-red-600 flex items-center justify-center text-2xl md:text-3xl group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shrink-0 shadow-sm">
              <i className={icon}></i>
            </div>
          )}
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="bg-red-100 text-red-600 text-xs font-black px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                MODULE {index}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight group-hover:text-red-600 transition-colors">
              {title}
            </h2>
            {subtitle && (
              <p className="text-slate-500 text-sm md:text-base font-normal mt-2 leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
          <div className="w-12 h-12 rounded-full border border-red-200 bg-red-50/50 text-red-600 flex items-center justify-center text-lg group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 group-hover:translate-x-1.5 transition-all duration-300 shadow-sm">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
