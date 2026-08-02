
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, Variants } from 'framer-motion';
import HeroGeometric from './HeroGeometric';
import CountUp from './CountUp';

// Background image URL for the Global Vision section
const GLOBAL_VISION_BG_URL = "https://pub-4ebaa25de9f043d68631edd66f4231af.r2.dev/jiaoyishi.jpg";

// Configurable Image URLs for the 2 Featured Blocks
const LEADERSHIP_IMG_URL = "https://pub-4ebaa25de9f043d68631edd66f4231af.r2.dev/jiaoyishi.jpg";
const COMMUNITY_IMG_URL = "https://pub-4ebaa25de9f043d68631edd66f4231af.r2.dev/jiaoyishi2.jpg";

const AboutUsView: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const founderRef = useRef<HTMLDivElement>(null);

  // Global Scroll Progress for Nav Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax Setup for Founder Section
  const { scrollYProgress: founderScrollY } = useScroll({
    target: founderRef,
    offset: ["start end", "end start"]
  });
  
  // Text moves slower than scroll
  const founderY = useTransform(founderScrollY, [0, 1], ["0%", "20%"]); 
  // Decor moves faster
  const decorY = useTransform(founderScrollY, [0, 1], ["-10%", "30%"]);

  // --- Animation Variants ---

  // Hero Text: Wide spacing to narrow + Fade In
  const heroTextVariant: Variants = {
    hidden: { opacity: 0, letterSpacing: "0.15em", y: 20, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      letterSpacing: "0em", 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  // Standard Section Reveal: From bottom 20px with ease-out
  const revealVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer: Variants = {
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  // Founder experience with rich components (CountUp)
  const founderExperience = [
    { text: "德湃自营交易创始人" },
    { text: "国内首批订单流实盘直播交易者（自2015年起深耕订单流）" },
    { 
      content: (
        <span>
          5,000美元挑战1,000,000美元实盘系列（已至
          <span className="font-extrabold text-[#E60012] text-xl mx-1">
            <CountUp value={1500000} prefix="$" />
          </span>
          美元）
        </span>
      )
    },
    { text: "《订单行为学》体系创始人" },
    { text: "前私募债券高级交易员（500亿基金规模，管理头寸2亿元）" },
    { text: "前私募股权基金投资经理（500 亿基金规模）" },
    { text: "连续12个月公开实盘直播盈利" },
    { text: "开发加密货币CTA策略（年化收益80%，夏普>3）" },
    { 
      content: (
        <span>
          培训<CountUp value={600} suffix="+" className="font-bold text-[#E60012] mx-1" />学员，prop firm通过率<CountUp value={30} suffix="%" className="font-bold text-[#E60012] mx-1" />
        </span>
      )
    },
    { text: "香港中文大学量化金融及风险管理（QFRM）荣誉学士" },
    { text: "上海交通大学量化俱乐部特邀讲座嘉宾" }
  ];

  const handleBackClick = () => {
    // Manually set hash to trigger App.tsx routing without browser navigation
    window.location.hash = "";
  };

  return (
    <div ref={containerRef} className="bg-white text-slate-900 font-sans min-h-screen selection:bg-[#E60012] selection:text-white overflow-x-hidden">
      
      {/* Sticky Blur Navigation with Progress Bar and Logo */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Logo Section - Converted to div/button for safe navigation */}
          <div onClick={handleBackClick} className="flex items-center gap-4 cursor-pointer group" role="button">
             <div className="relative overflow-hidden">
                <img 
                  src="https://pub-02fa9a4ecd1f4f469a947c51df6fb5a3.r2.dev/logo.png.jpg" 
                  alt="Deltapex Logo" 
                  className="h-12 w-auto object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity" 
                  referrerPolicy="no-referrer"
                />
             </div>
          </div>

          {/* Navigation Controls - Converted to div/button for safe navigation */}
          <div 
            onClick={handleBackClick}
            className="group flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-slate-800 hover:text-[#E60012] transition-colors cursor-pointer"
            role="button"
          >
            <span className="relative">
              Back to Hub
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#E60012] transition-all duration-300 group-hover:w-full"></span>
            </span>
            <i className="fa-solid fa-arrow-right-long transition-transform duration-300 group-hover:translate-x-1 text-slate-400 group-hover:text-[#E60012]"></i>
          </div>
        </div>
        {/* Progress Bar */}
        <motion.div 
          className="absolute bottom-0 left-0 h-[2px] bg-[#E60012] origin-left"
          style={{ scaleX }}
        />
      </nav>

      <main>
        {/* HERO SECTION with 3D Sphere */}
        <section className="relative h-screen flex items-center bg-white overflow-hidden">
          
          {/* 3D Geometric Background */}
          <HeroGeometric />

          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-20 z-10 pointer-events-none">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-6xl pointer-events-auto"
            >
              <motion.div variants={revealVariant} className="mb-8 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-[#E60012]"></span>
                <span className="text-[#E60012] font-bold tracking-[0.2em] text-sm uppercase">Who We Are</span>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h1 variants={heroTextVariant} className="text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[0.95] tracking-tighter text-slate-900 mb-6">
                  Deltapex
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1 variants={heroTextVariant} className="text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[0.95] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#E60012] to-[#B71C1C] pb-4">
                  Trading Group
                </motion.h1>
              </div>

              <motion.p variants={revealVariant} className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl leading-relaxed mt-8 border-l-2 border-gray-100 pl-6 bg-white/50 backdrop-blur-sm">
                致力于塑造未来交易精英，打造交易者的“黄埔军校”。
              </motion.p>
            </motion.div>
          </div>
        </section>



        {/* FEATURED STAGGERED SECTIONS WITH SLIDING ANIMATIONS (Citadel-style) */}
        <section className="py-24 md:py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-28 md:space-y-36">
            
            {/* FEATURE BLOCK 1: Empowered by Our Leadership */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Image Box (Slide in from Left) */}
              <motion.div 
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="lg:col-span-6 group overflow-hidden rounded-2xl shadow-lg border border-slate-100"
              >
                <div className="relative aspect-4/3 md:aspect-square w-full overflow-hidden bg-slate-900">
                  <img 
                    src={LEADERSHIP_IMG_URL} 
                    alt="Empowered by Our Leadership" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>

              {/* Right Text Box (Slide in from Right) */}
              <motion.div 
                initial={{ opacity: 0, x: 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="lg:col-span-6 space-y-6"
              >
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#002B66] leading-tight tracking-tight">
                  Empowered by <br />
                  Our Leadership
                </h2>
                <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
                  Many of our leadership have grown their careers at the firm and stepped up into senior roles. They share a determination and responsibility for growing and developing our next generation of leaders.
                </p>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed border-l-2 border-[#0047BA]/30 pl-4 py-1">
                  我们的核心导师与交易领袖深耕金融市场多年，拥有丰富的实盘战斗经验与私募管理背景，肩负起培养下一代专业交易精英的使命。
                </p>

              </motion.div>
            </div>

            {/* FEATURE BLOCK 2: Dedicated to Our Communities */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Text Box (Slide in from Left) */}
              <motion.div 
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="lg:col-span-6 space-y-6 order-2 lg:order-1"
              >
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#002B66] leading-tight tracking-tight">
                  Dedicated to <br />
                  Our Communities
                </h2>
                <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
                  In our civic leadership, as in our work, we are passionate problem-solvers, challenging the status quo to drive impact. We focus on increasing access to education and improving the communities in which we live and work.
                </p>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed border-l-2 border-[#0047BA]/30 pl-4 py-1">
                  在交易生态与社区建设中，我们致力于打造最具实操价值的订单流交易者社区。通过每日盘前逻辑拆解、复盘研讨、实战工具支持与专属自营福利，赋能每一位立志出海的交易者。
                </p>

              </motion.div>

              {/* Right Image Box (Slide in from Right) */}
              <motion.div 
                initial={{ opacity: 0, x: 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="lg:col-span-6 group overflow-hidden rounded-2xl shadow-lg border border-slate-100 order-1 lg:order-2"
              >
                <div className="relative aspect-4/3 md:aspect-square w-full overflow-hidden bg-slate-900">
                  <img 
                    src={COMMUNITY_IMG_URL} 
                    alt="Dedicated to Our Communities" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* INTRODUCTION SECTION (Global Vision, Local Focus) */}
        <section 
          className="relative py-32 bg-[#F9FAFB] bg-cover bg-center bg-no-repeat overflow-hidden transition-all duration-300"
          style={GLOBAL_VISION_BG_URL ? { backgroundImage: `url('${GLOBAL_VISION_BG_URL}')` } : undefined}
        >
          {/* Subtle overlay for contrast when a background image is set */}
          {GLOBAL_VISION_BG_URL && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] pointer-events-none" />
          )}

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
              <div className="md:col-span-5 sticky top-32">
                <motion.h2 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={revealVariant}
                  className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
                >
                  Global Vision, <br/> Local Focus.
                  <span className="block w-24 h-1.5 bg-[#E60012] mt-8 rounded-full"></span>
                </motion.h2>
              </div>
              <div className="md:col-span-7 space-y-10 text-lg md:text-xl text-slate-600 font-light leading-relaxed">
                <motion.p 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, margin: "-50px" }} 
                  variants={revealVariant}
                  className="first-letter:text-4xl first-letter:font-bold first-letter:text-[#E60012] first-letter:mr-2 first-letter:float-left"
                >
                  <strong className="text-slate-900 font-semibold">DELTAPEX TRADING GROUP</strong> 是一家专注于推动金融科技和交易技术的领先交易教育机构，总部位于中国金融业增速最快的城市 —— <span className="text-[#E60012] font-semibold underline decoration-[#E60012]/30 underline-offset-4">深圳</span>。
                </motion.p>
                <motion.p 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, margin: "-50px" }} 
                  variants={revealVariant}
                >
                  作为一家致力于塑造未来交易精英的机构，我们的愿景是成为交易培训领域的首选标杆。我们提供专注于<span className="text-slate-900 font-medium">订单流分析与市场微观结构</span>的专业课程，创立“订单行为学 OBT”方法。
                </motion.p>
                <motion.p 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, margin: "-50px" }} 
                  variants={revealVariant}
                  className="bg-white/90 p-6 rounded-lg shadow-sm border-l-4 border-[#E60012]"
                >
                   为初学者和有志于提升技能的专业交易者量身定制。通过结合理论与实践的独特课程设计，学员能够掌握成功交易所需的核心技能，并能在复杂的市场中应对自如。
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-white border-t border-slate-100 py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-900 font-bold tracking-tight text-2xl">
              DELTAPEX <span className="text-[#E60012]">.</span>
            </div>
            <p className="text-slate-400 text-sm font-medium">
              © 2024 Deltapex Trading Group. All Rights Reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default AboutUsView;
