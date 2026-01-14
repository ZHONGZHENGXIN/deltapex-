
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Cpu, 
  BookOpen, 
  ArrowRight,
  Compass,
  FlaskConical
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for merging tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Navigation Data Structure ---
const NAV_LINKS = [
  {
    title: "平台攻略",
    icon: <Compass size={18} />,
    items: [
      { name: "Futures Prop Firm 核心知识手册", href: "#prop-firm-guide" },
      { name: "LucidFlex vs LucidPro 选型指南", href: "#lucid-selection-guide" },
      { name: "TPT (TakeProfitTrader) 深度评测", href: "#tpt-review" },
      { name: "TopOne Futures 深度测评", href: "#topone-review" }
    ]
  },
  {
    title: "软件终端",
    icon: <Cpu size={18} />,
    items: [
      { name: "Tradovate 实战手册", href: "#tradovate-guide" },
      { name: "Rithmic 连接指南", href: "#rithmic-guide" }
    ]
  },
  {
    title: "必读干货",
    icon: <BookOpen size={18} />,
    items: [
      { name: "Prop Firm 核心知识", href: "#prop-firm-guide" },
      { name: "支付通关指南", href: "#payment-guide" }
    ]
  }
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Hash Navigation click (for smooth scroll/page update)
  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    window.location.hash = href;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled 
            ? "bg-black/80 backdrop-blur-md border-white/5 py-4 shadow-lg" 
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* 1. Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="text-2xl font-black tracking-tighter text-white">
              Deltapex
            </span>
          </a>

          {/* 2. Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((group, index) => (
              <div 
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <button className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors py-2">
                  <span className={cn("transition-colors", hoveredIndex === index && "text-[#D32F2F]")}>
                    {group.icon}
                  </span>
                  {group.title}
                  <ChevronDown 
                    size={14} 
                    className={cn(
                      "transition-transform duration-300", 
                      hoveredIndex === index ? "rotate-180 text-[#D32F2F]" : "text-slate-500"
                    )} 
                  />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#0a0a0a]/95 backdrop-blur-xl border border-[#D32F2F]/20 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden"
                    >
                      {/* Glow Effect */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D32F2F] to-transparent opacity-50" />
                      
                      <div className="p-2 flex flex-col gap-1">
                        {group.items.map((item, idx) => (
                          <a
                            key={idx}
                            href={item.href}
                            onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                            className="flex items-center justify-between px-4 py-3 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-all group/item"
                          >
                            <span className="line-clamp-1">{item.name}</span>
                            <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#D32F2F] shrink-0 ml-2" />
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Prominent Options Laboratory Link */}
            <a 
              href="https://options-laboratory.zeabur.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#D32F2F] to-[#EF5350] text-white rounded-full font-bold text-sm shadow-lg shadow-red-900/20 hover:shadow-red-600/40 hover:scale-105 transition-all duration-300 group"
            >
              <FlaskConical size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>Options Laboratory</span>
            </a>
          </div>

          {/* 3. Mobile Toggle (Actions removed) */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#050505] border-l border-white/10 z-[70] shadow-2xl p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-bold text-white">Menu</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-white bg-white/5 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-8">
                {NAV_LINKS.map((group, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-2 text-[#D32F2F] font-bold text-sm uppercase tracking-wider">
                      {group.icon}
                      {group.title}
                    </div>
                    <div className="flex flex-col gap-1 pl-4 border-l border-white/10">
                      {group.items.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                          className="py-2.5 text-slate-300 hover:text-white text-base transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Mobile Options Lab Link */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                   <a 
                      href="https://options-laboratory.zeabur.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white font-bold text-base bg-[#D32F2F]/10 p-3 rounded-xl border border-[#D32F2F]/20 hover:bg-[#D32F2F]/20 transition-colors"
                   >
                      <div className="bg-[#D32F2F] p-2 rounded-lg text-white">
                        <FlaskConical size={20} />
                      </div>
                      Options Laboratory
                   </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
