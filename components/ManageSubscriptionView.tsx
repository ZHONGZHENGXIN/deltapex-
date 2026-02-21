
import React, { useEffect } from 'react';
import Button from './Button';

const ManageSubscriptionView: React.FC = () => {
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

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">订阅与账单管理</h1>
          <p className="text-slate-500 text-lg">Manage Your Subscription & Billing</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Main Action Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-6">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">访问安全客户门户</h2>
            <p className="text-slate-500 mb-8 text-sm leading-relaxed">
              为了保障您的支付信息安全，所有的订阅详情、扣费记录及信用卡信息均托管在我们的支付合作伙伴 <strong>Creem</strong> 的加密服务器上。
            </p>
            <Button 
              href="https://billing.creem.io/p/login/"
              target="_blank"
              variant="primary"
              className="w-full py-4 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i> 登录管理门户
            </Button>
            <p className="mt-4 text-xs text-slate-400">
              * 您将使用订阅时的邮箱接收一次性登录链接
            </p>
          </div>

          {/* Features List */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
              <i className="fa-solid fa-list-check text-slate-400"></i> 您可以在门户中进行的操作：
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-circle-check text-green-500 mt-1"></i>
                <div>
                  <strong className="block text-slate-800 text-sm">查询订阅状态</strong>
                  <span className="text-xs text-slate-500">查看当前套餐有效期及下一次扣费时间。</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-circle-check text-green-500 mt-1"></i>
                <div>
                  <strong className="block text-slate-800 text-sm">取消或暂停订阅</strong>
                  <span className="text-xs text-slate-500">随时自助取消订阅，无需人工审核，次月不再扣费。</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-circle-check text-green-500 mt-1"></i>
                <div>
                  <strong className="block text-slate-800 text-sm">下载发票</strong>
                  <span className="text-xs text-slate-500">获取过往所有交易的电子发票 (Invoice)。</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-circle-check text-green-500 mt-1"></i>
                <div>
                  <strong className="block text-slate-800 text-sm">更新支付方式</strong>
                  <span className="text-xs text-slate-500">更换绑定的信用卡或借记卡。</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">常见账单问题</h3>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h4 className="font-bold text-slate-800 mb-2 text-sm">如何取消订阅？</h4>
              <p className="text-sm text-slate-600">
                点击上方的“登录管理门户”按钮，输入您的邮箱登录后，在首页点击“Cancel Plan”即可立即取消。取消后，您在当前计费周期结束前仍可享受服务。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h4 className="font-bold text-slate-800 mb-2 text-sm">为什么我收不到登录邮件？</h4>
              <p className="text-sm text-slate-600">
                请检查您的垃圾邮件箱 (Spam Folder)。如果仍未收到，请确认您输入的邮箱是否为购买时使用的邮箱。如需帮助，请联系客服。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h4 className="font-bold text-slate-800 mb-2 text-sm">需要人工协助？</h4>
              <p className="text-sm text-slate-600">
                如果您无法自行操作，请发送邮件至 <a href="mailto:support@deltapex.cn" className="text-primary font-bold">support@deltapex.cn</a>，并在邮件标题注明【取消订阅申请】，我们将在 3 个工作日内为您处理。
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ManageSubscriptionView;
