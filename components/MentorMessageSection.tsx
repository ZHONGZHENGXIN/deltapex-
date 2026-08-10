import React, { useState } from 'react';
import Reveal from './Reveal';
import { motion, AnimatePresence } from 'framer-motion';

const MentorMessageSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bvid = 'BV1zXud62Ejo';
  const iframeSrc = `//player.bilibili.com/player.html?isOutside=true&aid=117070087852348&bvid=${bvid}&cid=40775258104&p=1&high_quality=1&danmaku=0`;

  return (
    <div className="mb-24">
      {/* Header */}
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            导师寄语
          </h2>
        </div>
      </Reveal>

      {/* Video Container Card */}
      <div className="max-w-4xl mx-auto">
        <Reveal delay={0.1}>
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col p-5 md:p-7 space-y-4">
            
            {/* Header Tag & Expand Modal Button */}
            <div className="flex items-center justify-between">
              <span className="bg-red-50 text-[#E60012] text-xs font-extrabold px-3.5 py-1.5 rounded-full border border-red-100/80 shadow-2xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E60012] animate-pulse"></span>
                导师发刊词 · Alex 导师
              </span>
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-xs font-bold text-slate-500 hover:text-[#E60012] flex items-center gap-1.5 bg-slate-100/80 hover:bg-red-50 px-3.5 py-1.5 rounded-full transition-all cursor-pointer"
              >
                <i className="fa-solid fa-expand"></i> 全屏弹窗播放
              </button>
            </div>

            {/* Title */}
            <h3 className="font-black text-slate-900 text-lg md:text-2xl tracking-tight leading-snug">
              建立规则，敬畏市场：从个人交易到机构体系的修炼之路
            </h3>

            {/* Direct Video Player Box */}
            <div className="relative aspect-video bg-slate-950 rounded-2xl overflow-hidden border border-slate-200/80 shadow-inner group">
              <iframe
                src={iframeSrc}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Quote Summary Footer */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-start gap-3">
              <i className="fa-solid fa-quote-left text-red-500 text-lg mt-0.5 shrink-0"></i>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                “交易的核心不是预测未来，而是建立高胜率、高盈亏比的系统，并用严苛的纪律重复执行。希望在 Deltapex 的训练中，你能真正建立属于自己的职业坐标系。”
              </p>
            </div>

          </div>
        </Reveal>
      </div>

      {/* Fullscreen Video Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 rounded-3xl border border-white/10 shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="p-4 md:p-6 border-b border-white/10 flex items-center justify-between bg-slate-950/50">
                <div>
                  <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-1">
                    Alex 导师发刊词 · 视频播放
                  </span>
                  <h3 className="text-white font-bold text-base md:text-xl">
                    建立规则，敬畏市场：从个人交易到机构体系的修炼之路
                  </h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-4"
                >
                  <i className="fa-solid fa-xmark text-lg"></i>
                </button>
              </div>

              {/* Modal Video Area */}
              <div className="relative aspect-video bg-black w-full">
                <iframe
                  src={iframeSrc}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              {/* Modal Footer Description */}
              <div className="p-4 md:p-6 bg-slate-950 text-slate-300 text-xs md:text-sm">
                <p className="leading-relaxed">
                  “交易的核心不是预测未来，而是建立高胜率、高盈亏比的系统，并用严苛的纪律重复执行。希望在 Deltapex 的训练中，你能真正建立属于自己的职业坐标系。”
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MentorMessageSection;
