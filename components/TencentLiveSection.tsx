import React, { useState } from 'react';
import Reveal from './Reveal';
import { TENCENT_MEETING_CONFIG } from '../tencentMeetingConfig';

const TencentLiveSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(TENCENT_MEETING_CONFIG.meetingId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="mb-20 max-w-4xl mx-auto w-full px-2 sm:px-0">
      <Reveal>
        <div className="bg-white/95 rounded-3xl border border-blue-100/80 shadow-[0_4px_24px_rgba(0,102,236,0.06)] hover:shadow-[0_8px_32px_rgba(0,102,236,0.12)] transition-all duration-300 p-5 sm:p-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 relative overflow-hidden group">
          
          {/* Subtle Top Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0066EC] via-blue-400 to-[#0066EC] opacity-80"></div>

          {/* Left: Official Icon & Info */}
          <div className="flex items-center gap-4">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-slate-100 bg-white flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform">
              <img
                src={TENCENT_MEETING_CONFIG.base64Icon || TENCENT_MEETING_CONFIG.iconPath}
                alt="腾讯会议"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-xs font-black text-white bg-[#0066EC] px-2.5 py-0.5 rounded-md shadow-2xs">
                  腾讯会议
                </span>
                <span className="text-sm font-extrabold text-slate-900">
                  {TENCENT_MEETING_CONFIG.liveEventNote}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
                <span>会议号：<span className="font-mono font-bold text-slate-800">{TENCENT_MEETING_CONFIG.meetingId}</span></span>
                <button
                  onClick={handleCopy}
                  className="text-xs font-bold text-[#0066EC] hover:text-[#0052cc] underline cursor-pointer transition-colors"
                >
                  {copied ? "已复制!" : "点击复制会议号"}
                </button>
              </div>
            </div>
          </div>

          {/* Right: Blue Action Button */}
          <div className="flex items-center justify-end shrink-0">
            <a
              href={TENCENT_MEETING_CONFIG.meetingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#0066EC] hover:bg-[#0052cc] text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 transition-all"
            >
              <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
              <span>进入腾讯会议直播</span>
            </a>
          </div>

        </div>
      </Reveal>
    </section>
  );
};

export default TencentLiveSection;
