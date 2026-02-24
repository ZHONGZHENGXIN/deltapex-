
import React, { useEffect } from 'react';

const RefundPolicyView: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    window.location.hash = "";
  };

  return (
    <div className="bg-white min-h-screen font-sans text-[#333] leading-relaxed">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <nav className="mb-8">
          <button 
            onClick={handleBackClick}
            className="text-slate-500 font-medium flex items-center gap-2 hover:text-red-700 transition-colors"
          >
            <i className="fa-solid fa-arrow-left"></i> 返回首页
          </button>
        </nav>

        <h1 className="text-3xl font-bold text-slate-900 mb-2">退款政策</h1>
        <p className="text-sm text-slate-500 mb-8">最后更新日期：2026年1月1日</p>

        <div className="space-y-8 text-slate-700">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r">
            <h3 className="text-blue-800 font-bold mb-2">核心提示</h3>
            <p className="text-sm text-blue-700">
              Deltapex Trading Group 是一个信息资讯平台。我们本身不销售期货评估账户，所有评估服务的交易均发生在您与第三方自营公司（Prop Firm）之间。
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. 第三方自营公司退款规则</h2>
            <p className="mb-4">
              如果您通过本站链接购买了 TakeProfitTrader (TPT)、Lucid Trading、TopOne Futures 或 Earn2Trade 等公司的评估账户，<strong>退款请求必须直接向该第三方公司提出。</strong>
            </p>
            <p className="mb-4">根据行业惯例，大多数期货自营公司的退款政策如下（仅供参考，具体以各官网为准）：</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>一经交易，概不退款：</strong> 一旦您在评估账户上下单交易，通常将不再支持退款。</li>
              <li><strong>订阅制自动扣费：</strong> 对于按月订阅的服务，如果您忘记取消订阅导致自动扣费，大多数公司不予退款，但您可以取消后续的订阅。</li>
              <li><strong>特殊活动：</strong> 部分公司（如 TPT）可能在特定促销活动中提供“通关后退还报名费”的优惠，这属于奖励政策而非标准退款。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. 本站社群与知识星球退款</h2>
            <p className="mb-4">
              对于 Deltapex 自营的教育产品（如知识星球社群）：
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>知识星球：</strong> 请遵循知识星球官方平台的退款规则。通常在加入后的固定时间内（如3天内），若对内容不满意，可向平台申请全额退款。超过平台规定的无理由退款期限后，原则上不接受退款申请。</li>
              <li><strong>其他数字内容：</strong> 任何以电子文档、视频教程形式发送的非实物商品，一旦发送即视为交付，不接受退款。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. 联系与协助</h2>
            <p>
              如果您在与第三方自营公司的沟通中遇到困难，或者认为遭到了不公正的待遇，可以联系我们的客服团队。虽然我们无法直接为您办理退款，但我们可以凭借行业经验为您提供沟通建议或协助反馈问题。
              <br/><br/>
              <strong>官方客服邮箱：</strong> <a href="mailto:depaitina@deltapex.cc" className="text-primary hover:underline">depaitina@deltapex.cc</a>
              <br/>
              我们承诺在收到您的请求后 <strong>3 个工作日内</strong> 给予回复。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyView;
