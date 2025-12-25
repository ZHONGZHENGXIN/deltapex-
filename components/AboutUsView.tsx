
import React, { useEffect } from 'react';

interface AboutUsViewProps {
  onBack: () => void;
}

const AboutUsView: React.FC<AboutUsViewProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-gray-900 selection:bg-[#fee2e2] selection:text-[#E60012] overflow-x-hidden font-sans min-h-screen">
      {/* 导航栏 - 保持 SPA 体验 */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button 
          onClick={onBack}
          className="text-gray-500 font-medium flex items-center gap-2 hover:text-[#E60012] transition-colors"
        >
          <i className="fa-solid fa-arrow-left"></i> 返回社区主页
        </button>
      </nav>

      <main>
        {/* 首屏板块 */}
        <section className="relative bg-white pt-6 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
                Deltapex <br />
                <span className="text-[#E60012]">Trading Group</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light mb-8">
                致力于塑造未来交易精英，打造交易者的“黄埔军校”。
              </p>
              {/* 新增：了解我们 边框内容 */}
              <div className="inline-block border border-[#E60012] text-[#E60012] px-6 py-2 rounded-sm text-sm font-semibold tracking-widest">
                了解我们
              </div>
            </div>
          </div>
          {/* 极简装饰元素 */}
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gray-50 -skew-x-12 translate-x-1/2 z-0"></div>
        </section>

        {/* 公司简介板块 */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <span className="w-8 h-1 bg-[#E60012] mr-4"></span>
                公司简介
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  DELTAPEX TRADING GROUP 是一家专注于推动金融科技和交易技术的领先交易教育机构，总部位于中国金融业增速最快的城市 —— <span className="text-gray-900 font-semibold">深圳</span>。
                </p>
                <p>
                  作为一家致力于塑造未来交易精英的机构，我们的愿景是成为交易培训领域的首选标杆。
                </p>
                <p>
                  我们提供专注于订单流分析与市场微观结构的专业课程，创立“订单行为学 OBT”方法，为初学者和有志于提升技能的专业交易者量身定制。通过结合理论与实践的独特课程设计，学员能够掌握成功交易所需的核心技能，并能在复杂的市场中应对自如。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 新增：公司创始人介绍板块 */}
        <section className="py-16 bg-white border-t border-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl">
              <h2 className="text-3xl font-bold mb-10 flex items-center">
                <span className="w-8 h-1 bg-[#E60012] mr-4"></span>
                公司创始人介绍
              </h2>
              
              <div className="grid md:grid-cols-3 gap-10">
                {/* 创始人姓名与核心头衔 */}
                <div className="md:col-span-1">
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">Alex Su</h3>
                  <p className="text-[#E60012] font-semibold text-xl mb-4">Deltapex 创始人</p>
                  <div className="h-1 w-12 bg-gray-200"></div>
                </div>
                
                {/* 详细履历列表 */}
                <div className="md:col-span-2">
                  <ul className="space-y-3 text-gray-600 text-base md:text-lg leading-relaxed">
                    {[
                      "德湃自营交易创始人",
                      "国内首批订单流实盘直播交易者（自2015年起深耕订单流）",
                      "5,000美元挑战1,000,000美元实盘系列（已至650,000美元）",
                      "《订单行为学》体系创始人",
                      "前私募债券高级交易员（500亿基金规模，管理头寸2亿元）",
                      "前私募股权基金投资经理（500 亿基金规模）",
                      "连续12个月公开实盘直播盈利",
                      "开发加密货币CTA策略（年化收益80%，夏普>3）",
                      "培训600+学员，prop firm通过率30%",
                      "香港中文大学量化金融及风险管理（QFRM）荣誉学士",
                      "上海交通大学量化俱乐部特邀讲座嘉宾"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#E60012] mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-[#E60012] flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 核心板块 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">核心优势与课程体系</h2>
              <p className="text-lg text-gray-500">专注于订单流分析与市场微观结构</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* OBT 卡片 */}
              <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-[#E60012] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M8 7h6"/><path d="M8 11h8"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">订单行为学 OBT</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  首创“订单行为学 OBT”方法论，深度拆解市场微观结构，并结合理论与实践的独特课程设计。
                </p>
              </div>

              {/* 技能掌握卡片 */}
              <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-[#E60012] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">技能掌握</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  学员能够掌握成功交易所需的核心技能，并能在复杂的市场中应对自如。
                </p>
              </div>

              {/* 社区支持卡片 */}
              <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-[#E60012] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">社区支持</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  提供交易员社区以支持交易者成功：德湃社区共创计划旨在为志同道合的交易者搭建资源共享与协同发展的平台。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 社区共创板块 */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-l-4 border-[#E60012] pl-8 py-2">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">德湃社区共创计划</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
                旨在为志同道合的交易者搭建资源共享与协同发展的平台。通过结合理论与实践的独特课程设计，助力每一位学员掌握成功交易的核心技能。
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400 text-sm">
            <p>© 2024 Deltapex Trading Group. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsView;
