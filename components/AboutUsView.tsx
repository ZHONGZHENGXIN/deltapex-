
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, Variants } from 'framer-motion';
import HeroGeometric from './HeroGeometric';
import CountUp from './CountUp';

interface AboutUsViewProps {
  onBack: () => void;
}

const AboutUsView: React.FC<AboutUsViewProps> = ({ onBack }) => {
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
          5,000美元挑战1,000,000美元实盘系列（已至<CountUp value={650000} prefix="$" className="font-bold text-[#E60012] mx-1" />美元）
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

  return (
    <div ref={containerRef} className="bg-white text-slate-900 font-sans min-h-screen selection:bg-[#E60012] selection:text-white overflow-hidden">
      
      {/* Sticky Blur Navigation with Progress Bar and Logo */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-4 cursor-pointer group" onClick={onBack}>
             <div className="relative overflow-hidden">
                <img 
                  src="https://pub-02fa9a4ecd1f4f469a947c51df6fb5a3.r2.dev/logo.png.jpg" 
                  alt="Deltapex Logo" 
                  className="h-12 w-auto object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity" 
                />
             </div>
          </div>

          {/* Navigation Controls */}
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-slate-800 hover:text-[#E60012] transition-colors cursor-pointer"
          >
            <span className="relative">
              Back to Hub
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#E60012] transition-all duration-300 group-hover:w-full"></span>
            </span>
            <i className="fa-solid fa-arrow-right-long transition-transform duration-300 group-hover:translate-x-1 text-slate-400 group-hover:text-[#E60012]"></i>
          </button>
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

        {/* INTRODUCTION SECTION (Scroll Reveal) */}
        <section className="py-32 bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
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
                  className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#E60012]"
                >
                   为初学者和有志于提升技能的专业交易者量身定制。通过结合理论与实践的独特课程设计，学员能够掌握成功交易所需的核心技能，并能在复杂的市场中应对自如。
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* FOUNDER SECTION (Parallax & Counters) */}
        <section ref={founderRef} className="py-32 bg-white relative overflow-hidden">
          {/* Parallax Background Lines */}
          <motion.div style={{ y: decorY }} className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
             <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] border-[40px] border-[#E60012] rounded-full"></div>
             <div className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] border-[20px] border-black rounded-full"></div>
          </motion.div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariant}
              className="mb-24"
            >
               <span className="text-[#E60012] font-bold tracking-widest text-xs uppercase mb-3 block">Leadership Profile</span>
               <h2 className="text-4xl md:text-6xl font-bold text-slate-900">The Founder</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              {/* Left Column: Parallax Name Card */}
              <motion.div 
                style={{ y: founderY }}
                className="lg:col-span-5"
              >
                <div className="bg-[#1a1a1a] p-12 rounded-[2rem] text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#E60012] rounded-bl-[100%] z-0 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <h3 className="text-5xl md:text-7xl font-bold mb-4">Alex Su</h3>
                    <p className="text-[#E60012] font-medium text-2xl mb-8">Deltapex 创始人</p>
                    <p className="text-gray-400 italic text-lg leading-relaxed border-l-2 border-[#E60012] pl-4">
                      "Trading is not about predicting the future, it's about reacting to the present with precision."
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Experience List */}
              <div className="lg:col-span-7">
                <motion.ul 
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-10%" }}
                  className="space-y-6"
                >
                  {founderExperience.map((item, index) => (
                    <motion.li 
                      key={index} 
                      variants={revealVariant}
                      className="group flex items-center p-5 rounded-2xl hover:bg-[#F9FAFB] transition-colors border border-transparent hover:border-gray-100"
                    >
                      <span className="text-[#E60012] font-black mr-6 text-2xl opacity-30 group-hover:opacity-100 transition-opacity">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <span className="text-lg md:text-xl text-slate-700 font-light group-hover:text-slate-900 transition-colors">
                        {item.content || item.text}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES / CARDS SECTION (Hover Effects) */}
        <section className="py-32 bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
             <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariant}
              className="max-w-3xl mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Core Methodology
              </h2>
              <p className="text-xl text-slate-500 font-light">
                专注于订单流分析与市场微观结构，构建不可复制的竞争优势。
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "订单行为学 OBT",
                  desc: "首创“订单行为学 OBT”方法论，深度拆解市场微观结构，并结合理论与实践的独特课程设计。",
                  icon: "fa-layer-group"
                },
                {
                  title: "技能掌握 Skill Mastery",
                  desc: "学员能够掌握成功交易所需的核心技能，并能在复杂的市场中应对自如，建立长期盈利能力。",
                  icon: "fa-bullseye"
                },
                {
                  title: "社区支持 Community",
                  desc: "德湃社区共创计划旨在为志同道合的交易者搭建资源共享与协同发展的平台。",
                  icon: "fa-users"
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={revealVariant}
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 20px 40px -5px rgba(230, 0, 18, 0.15)",
                    borderColor: "rgba(230, 0, 18, 0.3)" 
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 cursor-default group relative overflow-hidden"
                >
                  {/* Subtle red gradient on hover background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E60012] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="w-16 h-16 bg-[#FFF5F5] rounded-2xl flex items-center justify-center text-[#E60012] text-2xl mb-8 group-hover:bg-[#E60012] group-hover:text-white transition-all duration-300 shadow-sm">
                    <i className={`fa-solid ${card.icon}`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#E60012] transition-colors">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-light">{card.desc}</p>
                </motion.div>
              ))}
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
