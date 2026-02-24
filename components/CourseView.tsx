import React, { useEffect } from 'react';
import Button from './Button';
import Reveal from './Reveal';

const CourseView: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const modules = [
    { 
      title: "订单流基础与盘口解读", 
      desc: "深入理解 DOM (Depth of Market) 与 Footprint 图表。掌握买卖盘力量失衡（Imbalance）与吸收（Absorption）的识别技巧，看透价格波动的本质。", 
      icon: "fa-chart-line" 
    },
    { 
      title: "市场微观结构与流动性", 
      desc: "探究机构大资金的运作逻辑。学习如何精准定位高流动性区域（Liquidity Pools），识别假突破与止损猎取（Stop Hunts），避免成为市场流动性。", 
      icon: "fa-water" 
    },
    { 
      title: "高级工具与实战交易系统", 
      desc: "结合 ATAS 平台的高级指标（如 Cumulative Delta, VWAP, Volume Profile）。构建基于订单流确认的高胜率入场与出场交易系统。", 
      icon: "fa-crosshairs" 
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-600 pb-20">
      {/* Hero Section */}
      <section className="pt-20 pb-24 px-6 text-center max-w-5xl mx-auto">
        <Reveal>
          <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-6 block animate-fade-in-up">
            Deltapex 高级系统课程
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-8 leading-[1.2]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-primary to-slate-900 bg-[length:200%_auto] animate-shimmer">
              掌握市场微观结构与 <br className="hidden md:block" />
              量化交易优势
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-light tracking-wide max-w-3xl mx-auto leading-relaxed mb-12">
            高强度系统交易课程。深入学习订单流、市场微观结构与流动性逻辑，构建属于您的交易优势。
          </p>
        </Reveal>
      </section>

      {/* Syllabus / Features Section */}
      <section id="syllabus" className="py-24 bg-slate-50 px-6 border-y border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-[0.25em] text-xs uppercase mb-4 block">Core Modules</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">核心课程大纲</h2>
              <p className="text-slate-500 text-lg">在接下来的 6 个月中，您将精通以下核心领域</p>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {modules.map((mod, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 h-full group">
                  <div className="w-14 h-14 bg-red-50 text-primary rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-inner">
                    <i className={`fa-solid ${mod.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{mod.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{mod.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Syllabus Timeline */}
      <section id="detailed-syllabus" className="py-24 bg-white px-6 border-t border-slate-100 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-[0.25em] text-xs uppercase mb-4 block">Curriculum</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">6个月高阶训练营安排</h2>
              <p className="text-slate-500 text-lg">从理论到实战，系统化掌握订单流交易体系</p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {[
              { month: "Month 1", title: "市场微观结构与订单流基础", desc: "深入理解拍卖市场理论（Auction Market Theory）。学习 DOM（深度图）与 Footprint（足迹图）的底层逻辑，掌握如何阅读原始订单流数据，识别买卖盘的真实意图。" },
              { month: "Month 2", title: "流动性与盘口动力学", desc: "探究流动性池（Liquidity Pools）的形成与消耗。学习识别冰山订单（Iceberg Orders）、欺骗性挂单（Spoofing）、吸收（Absorption）与动能耗竭（Exhaustion）。" },
              { month: "Month 3", title: "高级分析工具应用", desc: "结合 ATAS 平台，精通 Volume Profile（成交量分布）、VWAP（成交量加权平均价）与 Cumulative Delta（累计差值）。寻找高胜率的价值区域与失衡点。" },
              { month: "Month 4", title: "机构行为追踪与假突破", desc: "学习像机构一样思考。识别止损猎取（Stop Hunts）与陷阱（Trapped Traders），利用散户的错误止损作为我们入场的燃料，精准捕捉假突破带来的反转机会。" },
              { month: "Month 5", title: "交易系统构建与风控", desc: "将订单流信号转化为具体的交易策略。制定明确的入场触发条件、止损设置与动态止盈目标。" },
              { month: "Month 6", title: "实时盘面实战与复盘", desc: "进入实战阶段。在真实的波动市场中进行实时盘面分析（Live Trading Sessions）。建立专业的交易日志，进行深度复盘与心理学建设，克服交易情绪。" }
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="flex flex-col md:flex-row gap-6 bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow duration-300 group">
                  <div className="md:w-1/4 flex-shrink-0">
                    <div className="text-primary font-black text-xl mb-2">{item.month}</div>
                    <div className="w-12 h-1 bg-red-200 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-500"></div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & CTA Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">加入课程</h2>
            <p className="text-slate-500 text-lg">选择适合您的学习周期，立即开启核心交易训练。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* 6 Months Card */}
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-lg hover:shadow-2xl transition-all duration-500 relative flex flex-col h-full group">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-200 group-hover:bg-primary transition-colors duration-300 rounded-t-[2.5rem]"></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">6个月</h3>
              <p className="text-slate-500 mb-8 text-sm">适合快速掌握核心框架的交易者</p>
              
              <div className="text-5xl font-black text-slate-900 mb-8 tracking-tight">
                $999 <span className="text-base text-slate-400 font-medium tracking-normal">/ 一次性买断</span>
              </div>
              
              <div className="flex-grow"></div>
              
              <Button 
                href="https://www.creem.io/payment/prod_rO8NcIyteiBtFLY963n5" 
                target="_blank"
                className="w-full py-4 text-lg font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mb-4"
              >
                立即报名
              </Button>
              <a href="#detailed-syllabus" className="text-sm text-primary hover:underline font-medium block mb-6">
                查看课程详细说明 <i className="fa-solid fa-arrow-right text-xs ml-1"></i>
              </a>
              
              <div className="pt-6 border-t border-slate-100">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
                  本课程仅供教育目的，不构成任何财务或投资建议。
                </p>
              </div>
            </div>

            {/* 12 Months Card */}
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-lg hover:shadow-2xl transition-all duration-500 relative flex flex-col h-full group">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-200 group-hover:bg-primary transition-colors duration-300 rounded-t-[2.5rem]"></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">12个月</h3>
              <p className="text-slate-500 mb-8 text-sm">完整经历市场周期，深度巩固策略</p>
              
              <div className="text-5xl font-black text-slate-900 mb-8 tracking-tight">
                $1,499 <span className="text-base text-slate-400 font-medium tracking-normal">/ 一次性买断</span>
              </div>
              
              <div className="flex-grow"></div>
              
              <Button 
                href="https://www.creem.io/payment/prod_3AnNBTmv3oerrXXFF23JHT" 
                target="_blank"
                className="w-full py-4 text-lg font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mb-4"
              >
                立即报名
              </Button>
              <a href="#detailed-syllabus" className="text-sm text-primary hover:underline font-medium block mb-6">
                查看课程详细说明 <i className="fa-solid fa-arrow-right text-xs ml-1"></i>
              </a>
              
              <div className="pt-6 border-t border-slate-100">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
                  本课程仅供教育目的，不构成任何财务或投资建议。
                </p>
              </div>
            </div>

            {/* Lifetime Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-500 relative flex flex-col h-full group">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-700 group-hover:bg-primary transition-colors duration-300 rounded-t-[2.5rem]"></div>
              <h3 className="text-2xl font-bold text-white mb-2">终身会员</h3>
              <p className="text-slate-400 mb-8 text-sm">永久访问所有课程更新与专属社区</p>
              
              <div className="text-5xl font-black text-white mb-8 tracking-tight">
                $2,999 <span className="text-base text-slate-500 font-medium tracking-normal">/ 一次性买断</span>
              </div>
              
              <div className="flex-grow"></div>
              
              <Button 
                href="#" 
                variant="white"
                className="w-full py-4 text-lg font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mb-4 border-none"
              >
                立即报名
              </Button>
              <a href="#detailed-syllabus" className="text-sm text-red-400 hover:text-red-300 hover:underline font-medium block mb-6">
                查看课程详细说明 <i className="fa-solid fa-arrow-right text-xs ml-1"></i>
              </a>
              
              <div className="pt-6 border-t border-slate-800">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                  本课程仅供教育目的，不构成任何财务或投资建议。
                </p>
              </div>
            </div>
          </div>

          {/* Compliance & Legal Section (Creem Requirements) */}
          <div className="text-left bg-slate-50 p-8 rounded-2xl border border-slate-200 text-sm text-slate-500 space-y-4">
            <h4 className="font-bold text-slate-700 text-base mb-4">购买须知与合规声明</h4>
            <p>
              <strong>客户支持：</strong> 如有任何疑问或需要协助，请联系我们的官方客服邮箱 <a href="mailto:depaitina@deltapex.cc" className="text-primary hover:underline">depaitina@deltapex.cc</a>。我们将在 3 个工作日内回复您的请求。
            </p>
            <p>
              <strong>退款政策：</strong> 本产品为虚拟知识服务。请在购买前仔细阅读我们的 <a href="#refund" className="text-primary hover:underline">退款政策 (Refund Policy)</a>。
            </p>
            <p>
              <strong>订阅与账单：</strong> 您可以通过我们的 <a href="#manage-subscription" className="text-primary hover:underline">订阅管理门户</a> 随时查看账单、下载发票或管理您的支付方式。
            </p>
            <div className="pt-4 mt-4 border-t border-slate-200 flex flex-wrap gap-4 text-xs">
              <span>© 2026 Deltapex Trading Group.</span>
              <a href="#privacy" className="hover:text-primary transition-colors">隐私政策 (Privacy Policy)</a>
              <a href="#terms" className="hover:text-primary transition-colors">服务条款 (Terms of Service)</a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default CourseView;
