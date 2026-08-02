import React, { useState } from 'react';
import Reveal from './Reveal';
import { motion, AnimatePresence } from 'framer-motion';

export interface StudentVideoItem {
  id: string;
  studentName: string;
  title: string;
  tag: string;
  summary: string;
  videoUrl: string;
  bvid?: string;
  thumbnail?: string;
}

// Helper to extract Bilibili BV ID from URL or return bvid directly
const getBilibiliEmbedUrl = (item: StudentVideoItem): string | null => {
  if (item.bvid) {
    return `//player.bilibili.com/player.html?bvid=${item.bvid}&page=1&high_quality=1&danmaku=0`;
  }
  if (item.videoUrl.includes('bilibili.com')) {
    const match = item.videoUrl.match(/BV[a-zA-Z0-9]+/);
    if (match) {
      return `//player.bilibili.com/player.html?bvid=${match[0]}&page=1&high_quality=1&danmaku=0`;
    }
  }
  return null;
};

export const STUDENT_VIDEOS_LIST: StudentVideoItem[] = [
  {
    id: 'luge',
    studentName: '学员陆哥',
    title: '芯片领域大佬—陆哥：由亏转盈的交易历程分享',
    tag: '学员实操分享',
    summary: '学员陆哥详细分享在实际期货交割与考核盘中的订单流思维转变、买卖盘吸收理解与风控心得。',
    videoUrl: 'https://www.bilibili.com/video/BV1Lu3X6TE74',
    bvid: 'BV1Lu3X6TE74',
  },
];

const StudentVoicesSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<StudentVideoItem | null>(null);

  return (
    <div className="mb-24">
      {/* Header */}
      <Reveal>
        <div className="text-center mb-12">
          <span className="bg-red-100 text-red-600 text-xs md:text-sm font-extrabold px-4 py-1.5 rounded-full tracking-widest uppercase inline-block mb-3 border border-red-200/80 shadow-xs">
            STUDENT TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight flex items-center justify-center gap-3">
            <i className="fa-solid fa-circle-play text-[#E60012]"></i>
            学员有话说
          </h2>
          <p className="text-slate-500 font-normal text-base md:text-lg mt-3 max-w-2xl mx-auto">
            听听来自不同专业背景交易者的真实订单流思维转变与由亏转盈的实战历程
          </p>
        </div>
      </Reveal>

      {/* Video Container */}
      <div className="max-w-4xl mx-auto">
        {STUDENT_VIDEOS_LIST.map((video, idx) => (
          <div key={video.id} className="w-full">
            <Reveal delay={0.1 * (idx + 1)}>
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col p-5 md:p-7 space-y-4">
                {/* Header Tag & Expand Button */}
                <div className="flex items-center justify-between">
                  <span className="bg-red-50 text-[#E60012] text-xs font-extrabold px-3.5 py-1.5 rounded-full border border-red-100/80 shadow-2xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E60012] animate-pulse"></span>
                    {video.tag} · {video.studentName}
                  </span>
                  <button
                    onClick={() => setSelectedVideo(video)}
                    className="text-xs font-bold text-slate-500 hover:text-[#E60012] flex items-center gap-1.5 bg-slate-100/80 hover:bg-red-50 px-3.5 py-1.5 rounded-full transition-all cursor-pointer"
                  >
                    <i className="fa-solid fa-expand"></i> 全屏弹窗播放
                  </button>
                </div>

                {/* Title */}
                <h3 className="font-black text-slate-900 text-lg md:text-2xl tracking-tight leading-snug">
                  {video.title}
                </h3>

                {/* Direct Video / Bilibili Player */}
                <div className="relative aspect-video bg-slate-950 rounded-2xl overflow-hidden border border-slate-200/80 shadow-inner group">
                  {getBilibiliEmbedUrl(video) ? (
                    <iframe
                      src={getBilibiliEmbedUrl(video)!}
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  ) : (
                    <video
                      controls
                      preload="metadata"
                      src={`${video.videoUrl}#t=0.1`}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>

                {/* Summary Quote */}
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed bg-slate-50/90 p-4 rounded-xl border border-slate-100/90">
                  <i className="fa-solid fa-quote-left mr-2 text-[#E60012]"></i>
                  {video.summary}
                </p>
              </div>
            </Reveal>
          </div>
        ))}
      </div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full p-4 md:p-6 shadow-2xl relative text-white"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <div className="pr-4">
                  <span className="bg-red-600/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full border border-red-500/30 inline-block mb-2">
                    {selectedVideo.tag} · {selectedVideo.studentName}
                  </span>
                  <h3 className="text-base md:text-xl font-bold">
                    {selectedVideo.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
                >
                  <i className="fa-solid fa-xmark text-lg"></i>
                </button>
              </div>

              {/* Video Player */}
              <div className="aspect-video bg-black rounded-2xl overflow-hidden border border-slate-800 mb-4">
                {getBilibiliEmbedUrl(selectedVideo) ? (
                  <iframe
                    src={getBilibiliEmbedUrl(selectedVideo)!}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <video
                    src={selectedVideo.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              {/* Summary */}
              <p className="text-slate-300 text-xs md:text-sm bg-slate-800/60 p-4 rounded-xl border border-slate-700/50">
                {selectedVideo.summary}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StudentVoicesSection;
