
import React, { useEffect } from 'react';

const RithmicGuideView: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    window.location.hash = "";
  };

  return (
    <div className="bg-white min-h-screen font-sans text-[#333]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+SC:wght@400;500;700&display=swap');
        
        :root {
            --primary-red: #cc0000;
            --dark-red: #990000;
            --light-red: #fff5f5;
            --border-red: #fecaca;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
            background: var(--primary-red);
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: var(--dark-red);
        }

        .prose-custom h1 { 
            color: #cc0000; 
            font-weight: 800; 
            border-bottom: 4px solid #cc0000;
            display: inline-block;
            margin-bottom: 1rem;
        }

        .prose-custom h2 { 
            color: #990000; 
            font-weight: 700; 
            font-size: 1.5rem; 
            background: #fff5f5;
            padding: 0.75rem 1rem;
            border-left: 5px solid #cc0000;
            margin-top: 2.5rem; 
            margin-bottom: 1.25rem;
            border-radius: 0 4px 4px 0;
        }

        .prose-custom h3 { 
            color: #111; 
            font-weight: 700; 
            font-size: 1.2rem; 
            margin-top: 1.5rem; 
            margin-bottom: 0.75rem;
            display: flex;
            align-items: center;
        }

        .prose-custom table { 
            width: 100%; 
            border-collapse: separate; 
            border-spacing: 0;
            margin: 1.5rem 0; 
            font-size: 0.95rem;
            border: 1px solid #fecaca;
            border-radius: 8px;
            overflow: hidden;
        }

        .prose-custom th { 
            background-color: #fff5f5; 
            text-align: left; 
            padding: 14px; 
            border-bottom: 2px solid #fecaca;
            font-weight: 700; 
            color: #990000; 
        }

        .prose-custom td { 
            padding: 14px; 
            border-bottom: 1px solid #fff5f5;
            vertical-align: top; 
        }

        .prose-custom tr:last-child td {
            border-bottom: none;
        }

        .prose-custom ul { 
            list-style-type: none; 
            padding-left: 0; 
        }

        .prose-custom li { 
            position: relative; 
            padding-left: 1.75rem; 
            margin-bottom: 0.75rem; 
        }

        .prose-custom li::before { 
            content: "◆"; 
            position: absolute; 
            left: 0; 
            color: #cc0000; 
            font-size: 0.9rem; 
            top: 0.1rem; 
        }

        .guide-card {
            border: 1px solid #fecaca;
            transition: all 0.3s ease;
        }
        
        .guide-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(204, 0, 0, 0.08);
            border-color: #cc0000;
        }

        @media print {
            .no-print { display: none; }
            body { background: white; }
            .prose-custom { max-width: 100%; padding: 0; border: none; box-shadow: none; }
        }
      `}</style>

      <div className="bg-white py-8 sm:py-16 px-4">
        {/* Navigation Bar */}
        <div className="max-w-[900px] mx-auto mb-6">
          <div 
            onClick={handleBackClick}
            className="text-slate-500 font-medium flex items-center gap-2 hover:text-[#cc0000] transition-colors cursor-pointer"
            role="button"
          >
            <i className="fa-solid fa-arrow-left"></i> 返回社区主页
          </div>
        </div>

        <main className="max-w-[900px] mx-auto prose-custom bg-white p-6 sm:p-12 border border-gray-100 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.02)]">
          
          {/* Top Branding / Badge */}
          <div className="flex justify-center mb-6">
            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest no-print">
              Official Guide
            </span>
          </div>
  
          {/* Header Section */}
          <header className="text-center mb-16">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 text-center">
              Rithmic（TradingThings.io）实战指南
            </h1>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-[1px] bg-red-200 flex-1 max-w-[100px]"></div>
              <p className="text-lg text-gray-500 font-bold uppercase tracking-wide">
                拯救 Rithmic 的 TradingView 神器
              </p>
              <div className="h-[1px] bg-red-200 flex-1 max-w-[100px]"></div>
            </div>
          </header>
  
          {/* Warning Section */}
          <div className="bg-red-50 border-l-[6px] border-red-600 p-8 my-10 rounded-r-xl shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <span className="text-8xl font-black select-none">!</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-4">⚠️</span>
              <h2 className="text-red-800 !m-0 !p-0 !border-none !bg-transparent text-2xl font-black">
                核心前置条件 (必读)
              </h2>
            </div>
            <p className="text-red-900 font-bold text-lg mb-4">在打开软件之前，请务必完成以下一步，否则无法登录：</p>
            <ul className="space-y-3">
              <li className="font-medium text-red-800">
                <strong className="text-red-900 underline decoration-red-300 underline-offset-4">激活账户：</strong> 你的 Rithmic 账号必须先签署数据协议。
              </li>
              <li className="text-red-800">
                请参照 <span className="italic font-semibold">Tradovate & Rithmic 连接教程</span> 中的“Rithmic 平台”部分完成协议签署。
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-red-200 flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="font-bold text-red-900 shrink-0">登录入口：</span>
              <a 
                href="https://tradingthings.io" 
                className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition-all text-center shadow-md hover:shadow-lg no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                立即访问 tradingthings.io
              </a>
            </div>
          </div>
  
          {/* Section 1: Intro */}
          <section>
            <h2>🟢 一、为什么要用它？(Intro)</h2>
            <div className="my-6 bg-gray-50 p-6 rounded-lg border-l-4 border-gray-200 italic text-gray-700 text-lg leading-relaxed">
              "Rithmic 原生软件太难用？美盘连接总是卡顿？"
            </div>
            <p className="text-lg">
              <strong className="text-red-600">TradingThings.io</strong> 是目前解决 Rithmic 使用体验的最佳网页端方案。
            </p>
            <p>
              <strong>它的本质：</strong> 一个集成了 <span className="text-red-600 font-bold">TradingView (TV) 原生图表</span> 与 <span className="text-red-600 font-bold">Rithmic 交易通道</span> 的网页工具。
            </p>
            
            <h3 className="mt-10">
              <span className="w-2 h-6 bg-red-600 mr-3 rounded-full"></span>
              核心优势
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="guide-card bg-white p-5 rounded-xl">
                <span className="text-2xl mb-2 block">🚀</span>
                <h4 className="font-bold text-red-700 mb-1">无需下载</h4>
                <p className="text-sm text-gray-500 m-0">打开浏览器就能交易，完全不占用本地系统资源。</p>
              </div>
              <div className="guide-card bg-white p-5 rounded-xl">
                <span className="text-2xl mb-2 block">🎨</span>
                <h4 className="font-bold text-red-700 mb-1">原生 TV 体验</h4>
                <p className="text-sm text-gray-500 m-0">享受 TradingView 丝滑的图表、海量指标和专业画线工具。</p>
              </div>
              <div className="guide-card bg-white p-5 rounded-xl">
                <span className="text-2xl mb-2 block">⚡</span>
                <h4 className="font-bold text-red-700 mb-1">网络优化</h4>
                <p className="text-sm text-gray-500 m-0">相比桌面版，在美盘高峰期更稳定，极大降低行情延迟。</p>
              </div>
              <div className="guide-card bg-white p-5 rounded-xl">
                <span className="text-2xl mb-2 block">🌍</span>
                <h4 className="font-bold text-red-700 mb-1">广泛兼容</h4>
                <p className="text-sm text-gray-500 m-0">完美支持 TPT, Lucid, Apex, Topstep 等主流 Rithmic 账户。</p>
              </div>
            </div>
          </section>
  
          {/* Section 2: Setup */}
          <section>
            <h2>🔵 二、连接配置教程 (Setup)</h2>
            <div className="space-y-12 mt-8">
              <div className="relative pl-10 border-l-2 border-dashed border-red-200 pb-2">
                <div className="absolute left-[-11px] top-0 w-5 h-5 bg-red-600 rounded-full border-4 border-white shadow-sm"></div>
                <h3 className="!mt-0">1. 注册与登录</h3>
                <p>访问官网：<a href="https://tradingthings.io" className="text-red-600 font-bold hover:underline decoration-2 underline-offset-4" target="_blank" rel="noopener noreferrer">tradingthings.io</a></p>
                <p className="text-gray-500">建议使用 <span className="font-semibold text-gray-700">Google</span> 快捷登录。</p>
              </div>
  
              <div className="relative pl-10 border-l-2 border-dashed border-red-200 pb-2">
                <div className="absolute left-[-11px] top-0 w-5 h-5 bg-red-600 rounded-full border-4 border-white shadow-sm"></div>
                <h3 className="!mt-0">2. 选择连接通道</h3>
                <p>登录后，系统会询问账户类型。请依次点击：</p>
                <div className="flex items-center gap-2 mt-4 no-print">
                  <span className="bg-gray-100 px-4 py-2 rounded font-bold text-gray-700 border border-gray-200 text-sm">Futures (期货)</span>
                  <span className="text-red-400">➜</span>
                  <span className="bg-red-600 px-4 py-2 rounded font-bold text-white shadow-sm text-sm">Rithmic</span>
                </div>
              </div>
  
              <div className="relative pl-10">
                <div className="absolute left-[-11px] top-0 w-5 h-5 bg-red-600 rounded-full border-4 border-white shadow-sm"></div>
                <h3 className="!mt-0">3. 输入账户信息 (关键步骤)</h3>
                <p className="mb-6">请严格按照 Prop Firm 提供的邮件信息准确填写：</p>
                <div className="overflow-hidden shadow-sm">
                  <table>
                    <thead>
                      <tr>
                        <th className="w-1/3">配置项</th>
                        <th>填入说明</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong className="text-red-700">Rithmic Account</strong></td>
                        <td className="font-mono text-gray-600">填入你的专属 Rithmic ID</td>
                      </tr>
                      <tr>
                        <td><strong className="text-red-700">Password</strong></td>
                        <td className="font-mono text-gray-600">填入你的专属 Rithmic 密码</td>
                      </tr>
                      <tr>
                        <td><strong className="text-red-700">Server (服务器)</strong></td>
                        <td>
                          <span className="text-red-600 font-bold underline">此项最关键！</span> 必须选择对应平台：
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">Apex Rithmic</span>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">Topstep Rithmic</span>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">Rithmic Paper Trading</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
  
          {/* Section 3: Trading */}
          <section>
            <h2>📈 三、交易实操指南 (Trading)</h2>
            <p className="text-gray-500 mb-8">连接成功后即可进入 TradingView 交易面板。推荐掌握以下技巧：</p>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="group bg-white border border-red-100 rounded-2xl p-8 hover:bg-red-50/20 transition-all flex flex-col md:flex-row gap-6 shadow-sm">
                <div className="md:w-1/4 text-center border-b md:border-b-0 md:border-r border-red-100 pb-4 md:pb-0 md:pr-4 flex flex-col justify-center">
                  <span className="text-4xl block mb-2">🖱️</span>
                  <span className="font-black text-red-800 uppercase tracking-tighter">Chart Orders</span>
                </div>
                <div className="md:w-3/4">
                  <h4 className="font-bold text-gray-900 mb-2">1. 图表右键下单 (推荐)</h4>
                  <p className="text-sm text-gray-600 mb-4">最直观的交互方式，所见即所得。</p>
                  <div className="bg-white/80 p-4 rounded-lg border border-red-50">
                     <ul className="text-sm m-0 space-y-2">
                       <li>菜单中直接选择 <span className="font-bold text-green-600">Buy</span> / <span className="font-bold text-red-600">Sell</span> / Stop / Limit</li>
                       <li>勾选 <span className="font-bold text-red-700 underline underline-offset-2">Stop Loss / Take Profit</span> 实现带损开仓</li>
                     </ul>
                  </div>
                </div>
              </div>
  
              <div className="group bg-white border border-red-100 rounded-2xl p-8 hover:bg-red-50/20 transition-all flex flex-col md:flex-row gap-6 shadow-sm">
                <div className="md:w-1/4 text-center border-b md:border-b-0 md:border-r border-red-100 pb-4 md:pb-0 md:pr-4 flex flex-col justify-center">
                  <span className="text-4xl block mb-2">🔘</span>
                  <span className="font-black text-red-800 uppercase tracking-tighter">Panel Mode</span>
                </div>
                <div className="md:w-3/4">
                  <h4 className="font-bold text-gray-900 mb-2">2. 面板按钮下单</h4>
                  <p className="text-sm text-gray-600 mb-4">适合高频交易或习惯看盘口的交易员。</p>
                  <div className="flex gap-2">
                     <span className="bg-green-600 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest shadow-sm">Buy Mkt</span>
                     <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest shadow-sm">Sell Mkt</span>
                  </div>
                </div>
              </div>
  
              <div className="group bg-white border border-red-100 rounded-2xl p-8 hover:bg-red-50/20 transition-all flex flex-col md:flex-row gap-6 shadow-sm">
                <div className="md:w-1/4 text-center border-b md:border-b-0 md:border-r border-red-100 pb-4 md:pb-0 md:pr-4 flex flex-col justify-center">
                  <span className="text-4xl block mb-2">⌨️</span>
                  <span className="font-black text-red-800 uppercase tracking-tighter">Hotkeys</span>
                </div>
                <div className="md:w-3/4">
                  <h4 className="font-bold text-gray-900 mb-2">3. 极速下单 (进阶技巧)</h4>
                  <p className="text-sm text-gray-600 mb-4 italic">组合键：按住 <kbd className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-sans font-bold shadow-sm">Alt</kbd> 或 <kbd className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-sans font-bold shadow-sm">Option</kbd></p>
                  <table className="mb-0">
                    <tbody>
                      <tr>
                        <td className="py-2"><span className="bg-gray-800 text-white px-3 py-1 rounded text-xs font-bold mr-2">Key + Left Click</span></td>
                        <td className="py-2"><span className="text-green-600 font-black">买入 (Buy)</span></td>
                      </tr>
                      <tr>
                        <td className="py-2"><span className="bg-gray-800 text-white px-3 py-1 rounded text-xs font-bold mr-2">Key + Right Click</span></td>
                        <td className="py-2"><span className="text-red-600 font-black">卖出 (Sell)</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
  
          {/* Section 4: Features */}
          <section>
            <h2>🛡️ 四、界面功能概览</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-10">
              <div className="border-l-4 border-red-600 pl-6 py-1">
                <h4 className="font-black text-gray-900 mb-1">TradingView 图表区</h4>
                <p className="text-sm text-gray-500 m-0">同步所有 TV 画线、指标与布局，多端同步不丢失。</p>
              </div>
              <div className="border-l-4 border-red-600 pl-6 py-1">
                <h4 className="font-black text-gray-900 mb-1">Dashboard (仪表盘)</h4>
                <p className="text-sm text-gray-500 m-0">直观监控账户权益、余额以及实时浮动盈亏。</p>
              </div>
              <div className="border-l-4 border-red-600 pl-6 py-1">
                <h4 className="font-black text-gray-900 mb-1">Positions (持仓栏)</h4>
                <p className="text-sm text-gray-500 m-0">集成化管理当前持仓、待执行挂单及历史成交记录。</p>
              </div>
              <div className="border-l-4 border-red-600 pl-6 py-1">
                <h4 className="font-black text-red-700 mb-1">紧急全平 (Flatten)</h4>
                <p className="text-sm text-gray-500 m-0">界面配备醒目的 Flatten 按钮，用于风险极端行情的一键离场。</p>
              </div>
            </div>
          </section>
  
          {/* Final Footer with Copyright Only */}
          <footer className="mt-24 pt-10 border-t-2 border-red-600">
            <div className="text-center">
              <div className="w-12 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-400 text-sm font-medium tracking-widest uppercase text-center">
                Rithmic（TradingThings.io）实战指南 &copy; 2025
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default RithmicGuideView;
