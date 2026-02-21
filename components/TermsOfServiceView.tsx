
import React, { useEffect } from 'react';

const TermsOfServiceView: React.FC = () => {
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

        <h1 className="text-3xl font-bold text-slate-900 mb-2">服务条款与免责声明</h1>
        <p className="text-sm text-slate-500 mb-8">最后更新日期：2026年1月1日</p>

        <div className="space-y-8 text-slate-700">
          <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r">
            <h3 className="text-red-800 font-bold mb-2">⚠️ 高风险投资警示</h3>
            <p className="text-sm text-red-700">
              期货与衍生品交易均存在极高风险，可能导致您的资金部分或全部损失。本网站提供的所有内容仅用于教育和信息分享目的，<strong>绝不构成任何投资建议、财务建议或交易指令。</strong>您应根据自身风险承受能力独立做出决策。
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. 条款接受</h2>
            <p>
              访问或使用 Deltapex Trading Group 网站（以下简称“本站”），即表示您同意受本服务条款的约束。如果您不同意这些条款，请立即停止使用本站。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. 服务性质声明</h2>
            <p>
              本站是一个专注于期货自营（Prop Firm）规则解析、软件教程分享和交易技术交流的教育资讯平台。
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>非经纪商：</strong>本站不是券商、交易所或金融中介机构，不经手任何用户资金，不提供开户、入金或直接交易服务。</li>
              <li><strong>第三方服务：</strong>本站提及的自营公司（如 TPT, Lucid, TopOne 等）均为独立的第三方主体。您与这些第三方产生的任何商业关系（包括购买评估账户、签署协议等）均仅在您与第三方之间发生，本站不承担任何连带责任。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. 知识产权</h2>
            <p>
              本站包含的所有内容（包括但不限于文字、教程、图片、Logo、代码）均受版权法及国际知识产权法律保护。未经本站书面授权，任何单位或个人不得擅自复制、转载、修改或用于商业用途。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. 附属链接与推广披露</h2>
            <p>
              为了维持网站运营，本站部分链接可能包含附属代码（Affiliate Links）。当您通过这些链接注册或购买服务时，我们可能会获得少量的佣金，但这不会增加您的购买成本，通常还会为您提供独家折扣。我们将始终保持客观中立的态度进行评测。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. 免责声明</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>本站尽力保证信息的准确性和及时性，但不保证所有信息完全无误。各自营公司的规则可能随时调整，请以官方网站最新公布的规则为准。</li>
              <li>本站不对因使用本站内容而导致的任何直接或间接损失承担责任。</li>
              <li>本站不对第三方网站的内容、隐私政策或安全性负责。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. 适用法律</h2>
            <p>
              本服务条款的解释与适用均遵循中华人民共和国法律。若发生争议，双方应友好协商解决。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. 联系方式</h2>
            <p>
              如您对本服务条款有任何疑问，请联系我们：<a href="mailto:support@deltapex.cn" className="text-primary hover:underline">support@deltapex.cn</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServiceView;
