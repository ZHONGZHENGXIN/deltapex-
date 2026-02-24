
import React, { useEffect } from 'react';

const PrivacyPolicyView: React.FC = () => {
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

        <h1 className="text-3xl font-bold text-slate-900 mb-2">隐私政策</h1>
        <p className="text-sm text-slate-500 mb-8">最后更新日期：2026年1月1日</p>

        <div className="space-y-8 text-slate-700">
          <section>
            <p>
              Deltapex Trading Group（以下简称“我们”或“本平台”）非常重视您的隐私保护。本隐私政策旨在向您说明我们如何收集、使用、存储和保护您的个人信息。在使用本网站服务前，请您务必仔细阅读本政策。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. 我们如何收集和使用您的信息</h2>
            <p className="mb-2">我们仅出于提供服务之目的，收集必要的非敏感信息：</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>设备与日志信息：</strong>当您访问本网站时，我们的服务器可能会自动记录您的IP地址、浏览器类型、访问日期和时间等信息，用于网站安全维护及流量分析。</li>
              <li><strong>用户主动提供的信息：</strong>当您通过人工客服、邮件或社群与我们联系时，您提供给我们的联系方式（如微信号、邮箱）将仅用于回复您的咨询。</li>
              <li><strong>Cookie 技术：</strong>我们使用 Cookie 来提升您的浏览体验（例如记住您的阅读进度）。您可以在浏览器设置中清除或禁用 Cookie。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. 信息的共享、转让与公开披露</h2>
            <p className="mb-2">我们承诺不会向任何无关第三方出售您的个人信息。以下情况除外：</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>法定情形：</strong>根据法律法规规定、诉讼争议解决需要，或按行政、司法机关依法提出的要求。</li>
              <li><strong>第三方服务：</strong>本网站包含指向第三方网站（如期货自营商 TPT、Lucid 等）的链接。当您点击这些链接离开本站后，您的隐私将受该第三方网站的隐私政策管辖，我们不对其负责。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. 数据安全</h2>
            <p>
              我们采取业界通用的安全技术和管理措施来保护您的个人信息，防止数据遭到未经授权的访问、公开披露、使用、修改、损坏或丢失。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. 未成年人保护</h2>
            <p>
              本网站及相关交易教育内容仅面向年满 18 周岁的成年人。如果您是未成年人，请在监护人指导下离开本网站。我们不会故意收集未成年人的个人信息。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. 政策更新</h2>
            <p>
              我们可能会适时对本隐私政策进行修订。更新后的内容将直接在本页面公布，恕不另行通知。建议您定期查看本页以了解最新政策。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. 联系我们</h2>
            <p>
              如您对本隐私政策有任何疑问或建议，请通过本网站提供的官方联系方式与我们联系。
              <br/>
              <strong>官方客服邮箱：</strong> <a href="mailto:depaitina@deltapex.cc" className="text-primary hover:underline">depaitina@deltapex.cc</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyView;
