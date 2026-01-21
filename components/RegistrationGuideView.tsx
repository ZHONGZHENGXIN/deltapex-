
import React, { useEffect } from 'react';

const RegistrationGuideView: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    window.location.hash = "";
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header + some padding
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen">
      <style>{`
        /* 滚动条美化 */
        .reg-guide ::-webkit-scrollbar {
            width: 8px;
        }
        .reg-guide ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        .reg-guide ::-webkit-scrollbar-thumb {
            background: #c53030;
            border-radius: 4px;
        }
        .reg-guide ::-webkit-scrollbar-thumb:hover {
            background: #9b2c2c;
        }

        /* =========================================
           RISE 专用样式隔离 (Scoped CSS)
           所有选择器前加了 .rise-scope 以避免污染其他部分
           ========================================= */
        .rise-scope {
            --primary-red: #C53030;
            --dark-red: #9B2C2C;
            --light-red: #FEE2E2;
            --border-red: #FCA5A5;
            --text-main: #333333;
            --text-muted: #666666;
            font-family: "Inter", "Microsoft YaHei", sans-serif;
            color: var(--text-main);
            line-height: 1.6;
            background-color: #fff;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .rise-scope h1 { font-size: 2.5rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.5rem; text-align: center; }
        .rise-scope header p { font-size: 1.25rem; color: var(--primary-red); font-weight: 500; text-align: center; }
        
        .rise-scope h2 {
            font-size: 1.5rem; font-weight: 700; color: var(--dark-red);
            margin-top: 2.5rem; margin-bottom: 1.25rem; padding-bottom: 0.5rem;
            border-bottom: 3px solid var(--light-red); display: flex; align-items: center; gap: 0.5rem;
        }

        .rise-scope h3 { font-size: 1.15rem; font-weight: 700; color: var(--dark-red); margin-top: 1.5rem; margin-bottom: 0.75rem; }

        .rise-scope .risk-warning {
            background-color: var(--primary-red); color: #FFFFFF !important;
            padding: 1.5rem; border-radius: 8px; border: 2px solid var(--dark-red); margin-bottom: 2.5rem;
        }
        .rise-scope .risk-warning h2, .rise-scope .risk-warning p, .rise-scope .risk-warning li, .rise-scope .risk-warning strong { color: #FFFFFF !important; }
        .rise-scope .risk-warning h2 { border-bottom: none; margin-top: 0; }
        
        .rise-scope table { width: 100%; border-collapse: collapse; border: 1px solid var(--border-red); margin: 1rem 0; }
        .rise-scope th { background-color: var(--primary-red); color: #FFFFFF; padding: 0.75rem; text-align: left; }
        .rise-scope td { padding: 0.75rem; border: 1px solid var(--light-red); }
        .rise-scope tr:nth-child(even) { background-color: #FFF5F5; }

        .rise-scope .step-item { display: flex; gap: 1.25rem; margin-bottom: 2rem; }
        .rise-scope .step-number { 
            flex-shrink: 0; width: 32px; height: 32px; background-color: var(--primary-red); 
            color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; 
        }
        .rise-scope .prep-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-top: 1rem; }
        .rise-scope .prep-card { background-color: #FFF5F5; border: 1px solid var(--light-red); padding: 1rem; border-radius: 6px; display: flex; gap: 0.75rem; }
        
        .rise-scope .final-tip { background-color: #FFF5F5; border: 2px solid var(--primary-red); padding: 2rem; border-radius: 12px; margin-top: 3rem; }
        .rise-scope .email-badge { background-color: var(--primary-red); color: white; padding: 0.1rem 0.5rem; border-radius: 4px; font-family: monospace; }
        .rise-scope footer { margin-top: 4rem; padding-top: 2rem; border-top: 2px solid var(--light-red); text-align: center; color: var(--text-muted); }
      `}</style>

      <div className="reg-guide">
        {/* Sub-navbar for this specific guide */}
        <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center cursor-pointer hover:text-red-600 transition-colors" onClick={handleBackClick}>
                        <i className="fa-solid fa-arrow-left mr-2"></i>
                        <span className="text-lg font-medium text-gray-600">返回</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-8 overflow-x-auto no-scrollbar">
                        <button onClick={() => scrollToSection('ifast')} className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm sm:text-base font-bold transition-colors whitespace-nowrap">
                            iFAST (银行)
                        </button>
                        <button onClick={() => scrollToSection('plane')} className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm sm:text-base font-bold transition-colors whitespace-nowrap">
                            Plane (支付)
                        </button>
                        <button onClick={() => scrollToSection('rise')} className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm sm:text-base font-bold transition-colors whitespace-nowrap">
                            RISE (支付)
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <div className="bg-red-900 text-white py-12 md:py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">注册与激活实战指南</h1>
            <p className="text-red-200 text-lg max-w-2xl mx-auto px-4">
                整合 iFAST 数字银行、Plane 支付平台与 RISE 薪酬系统的全流程操作手册。<br />
                专为 Prop Firm 交易员与出海工作者打造。
            </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">

            <section id="ifast" className="scroll-mt-24">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                    <header className="bg-[#D0021B] text-white px-6 py-12 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                                iFAST 注册与激活实战指南
                            </h1>
                            <p className="text-lg text-red-100 font-medium opacity-90">
                                —— 英国数字银行，Prop Firm 交易员的“英文地址证明”生成器 ——
                            </p>
                        </div>
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white opacity-5 rounded-full"></div>
                    </header>

                    <div className="px-6 md:px-10 py-10">
                        <div className="mb-10 border-b border-red-50 pb-8">
                            <p className="text-lg mb-6">
                                iFAST Global Bank 是一家受英国监管的正规持牌银行。
                            </p>
                            <div className="bg-red-50 border-l-4 border-[#D0021B] p-4 rounded-r-lg">
                                <p className="font-bold text-[#D0021B] mb-2">核心用途：</p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>接收电汇 (Wire Transfer)：</strong>直接接收 Prop Firm 的美元/英镑出金。</li>
                                    <li><strong>获取英文地址证明 (核心价值)：</strong>通过 iFAST 生成的英文银行月结单，是注册 Rise、Deel 或其他海外平台时最完美的地址证明材料。</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-[#D0021B] border-l-4 border-[#D0021B] pl-4 mb-6">1. 注册前准备</h2>
                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                            <div>
                                <h3 className="font-bold text-lg mb-3">必备证件</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2">
                                        <span className="bg-red-100 text-[#D0021B] px-2 py-0.5 rounded text-xs font-bold">首选</span>
                                        <span>护照 (Passport) - 审核最快</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs font-bold">备选</span>
                                        <span>身份证 (SFZ)</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-3">地址证明材料</h3>
                                <p className="text-sm text-gray-600 mb-2">提供3个月内的有效账单 (中文即可)：</p>
                                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                                    <li>国内银行信用卡/借记卡月结单</li>
                                    <li>水电煤气缴费单</li>
                                </ul>
                                <p className="text-xs text-[#D0021B] mt-2 font-bold">⚠️ 注意：Wise 的账单不能作为 iFAST 的注册地址证明。</p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-[#D0021B] border-l-4 border-[#D0021B] pl-4 mb-6">2. 注册流程详解</h2>
                        <div className="space-y-8 mb-10">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#D0021B] text-white rounded-full flex items-center justify-center font-bold">1</div>
                                <div>
                                    <h3 className="font-bold text-lg">入口与类型</h3>
                                    <p className="text-sm mt-1">访问官网选择 <span className="font-bold">Personal Retail Account</span>，地区选 <span className="font-bold">China</span>。</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#D0021B] text-white rounded-full flex items-center justify-center font-bold">2</div>
                                <div>
                                    <h3 className="font-bold text-lg">信息填写</h3>
                                    <p className="text-sm mt-1">姓名必须填写 <span className="font-bold text-[#D0021B]">拼音</span> (先名后姓，如 Yuango Wang)。地址也需用拼音填写，逻辑需与中文账单一致。</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#D0021B] text-white rounded-full flex items-center justify-center font-bold">3</div>
                                <div>
                                    <h3 className="font-bold text-lg">视频认证</h3>
                                    <p className="text-sm mt-1">根据指引进行人脸识别或朗读数字。</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-[#D0021B] border-l-4 border-[#D0021B] pl-4 mb-6">3. 账户激活 (关键)</h2>
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <p className="mb-4">iFAST 要求第一笔资金必须从 <span className="font-extrabold text-[#D0021B]">同名账户</span> 转入。汇款人名字必须和你注册名字完全一致。</p>
                            <table className="w-full text-sm text-left">
                                <thead className="bg-[#D0021B] text-white">
                                    <tr>
                                        <th className="p-3">推荐方式</th>
                                        <th className="p-3">操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-bold text-green-700">Wise 转账 (首选)</td>
                                        <td className="p-3">用名下 Wise GBP 账户转账 10-20 英镑。费用低，速度快。</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">银行电汇</td>
                                        <td className="p-3">通过国内/香港银行电汇。费用较高。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>


            <section id="plane" className="scroll-mt-24">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 p-8 sm:p-12">
                    <header className="mb-10 text-center border-b-4 border-red-600 pb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-4 tracking-tight">
                            Plane 注册与收款配置指南
                        </h1>
                        <p className="text-xl text-gray-500 font-light italic">
                            —— Tradeify 等平台的发薪备选方案 ——
                        </p>
                    </header>

                    <main className="space-y-10">
                        <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg">
                            <h2 className="text-xl font-bold text-red-800 mb-3 flex items-center">
                                <span className="mr-2">⚠️</span> 核心前置条件
                            </h2>
                            <ul className="list-disc list-inside space-y-2 text-red-900 text-sm">
                                <li>Plane 是<span className="font-bold underline">邀请制</span>平台，不支持个人主动注册。</li>
                                <li>必须先通过 Prop Firm (如 Tradeify) 考核，等待其发送邀请邮件。</li>
                                <li>邮件后缀通常为 <code className="bg-white px-1 rounded text-red-600 font-bold">@plane.com</code>。</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-red-700 border-b border-red-100 pb-2 mb-6">
                                01 账户激活
                            </h2>
                            <p className="text-gray-700 mb-4 pl-4">收到邮件后，点击链接设置密码并完善信息。姓名拼音建议与护照保持一致。</p>
                            <p className="pl-4 text-sm text-gray-500">登录地址: <a href="https://id.plane.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">https://id.plane.com/</a></p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-red-700 border-b border-red-100 pb-2 mb-6">
                                02 绑定收款 (Wise 映射配置)
                            </h2>
                            <div className="bg-gray-800 text-white p-4 rounded mb-6 text-sm">
                                <span className="font-bold text-yellow-400">💡 策略：</span> 将 Wise 的 USD 账户绑定到 Plane，利用 ACH 通道实现快速、低损收款。
                            </div>

                            <div className="overflow-x-auto border rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-red-600 text-white">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-xs font-bold uppercase">Plane 字段</th>
                                            <th className="px-4 py-3 text-left text-xs font-bold uppercase">对应 Wise 信息</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-100 text-sm">
                                        <tr>
                                            <td className="px-4 py-3 font-bold">Account Type</td>
                                            <td className="px-4 py-3">Individual (个人)</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-3 font-bold">Routing Number</td>
                                            <td className="px-4 py-3 font-mono">填 Wise 美元账户的 ACH 路由号</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-bold">Account Number</td>
                                            <td className="px-4 py-3 font-mono">填 Wise 美元账户号</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-3 font-bold">Bank Name</td>
                                            <td className="px-4 py-3">Evolve Bank & Trust (或 Wise 显示的银行)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <h3 className="font-bold text-red-700 mb-4">常见问题</h3>
                            <div className="space-y-4 text-sm">
                                <div>
                                    <p className="font-bold text-gray-900">Q: 没有 Wise 可以用国内银行卡吗？</p>
                                    <p className="text-gray-600">A: 可以，但需走 SWIFT 通道，中转费高且慢，不推荐。</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">Q: Routing Number 报错？</p>
                                    <p className="text-gray-600">A: 请确认使用的是 <span className="font-bold text-red-600">ACH</span> 路由号，而不是 Wire 路由号。</p>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </section>


            <section id="rise" className="scroll-mt-24">
                <div className="rise-scope">
                    <header>
                        <h1>RISE 注册与出金实战指南</h1>
                        <p>—— Prop Firm 常用发薪平台，风控避坑手册 ——</p>
                    </header>

                    <div className="risk-warning">
                        <h2><span>⚠️</span> 核心风控警告 (注册前必读)</h2>
                        <p>RISE 的风控极其严格，注册失败通常源于两点：无邀请链接、IP 质量差。</p>
                        <ul>
                            <li><strong>最好等待邀请：</strong>强烈建议收到自营公司（Prop Firm）发来的邀请邮件后再注册。</li>
                            <li><strong>IP 环境是关键：</strong>全程严禁使用廉价节点。首选香港、台湾、新加坡或日本节点。</li>
                            <li><strong>语言与格式：</strong>所有信息填写英文。税号（Tax ID）填写中国身份证号。</li>
                        </ul>
                    </div>

                    <div>
                        <h2><span>ℹ️</span> 关于 RISE 及出金时效</h2>
                        <p>RISE 是一家专门处理自营公司薪酬支付的合规金融服务商。</p>
                        
                        <h3><span>💰</span> 推荐出金方式</h3>
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>方式</th>
                                        <th>时效</th>
                                        <th>费用</th>
                                        <th>链/平台建议</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>加密货币 (USDT)</strong></td>
                                        <td>即时到账</td>
                                        <td>基本无损</td>
                                        <td>首选。推荐 <strong>Arbitrum (Arb)</strong> 链。</td>
                                    </tr>
                                    <tr>
                                        <td><strong>银行转账</strong></td>
                                        <td>2-3 个工作日</td>
                                        <td>约 $20 手续费</td>
                                        <td>可出金至港卡或个人 Wise。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <h2><span>📋</span> 注册准备 (Preparation)</h2>
                        <div className="prep-grid">
                            <div className="prep-card">
                                <span className="icon" style={{color:'var(--primary-red)', fontWeight:'bold'}}>✓</span>
                                <div><strong>护照：</strong>首选证件，通过率最高。</div>
                            </div>
                            <div className="prep-card">
                                <span className="icon" style={{color:'var(--primary-red)', fontWeight:'bold'}}>✓</span>
                                <div><strong>地址证明：</strong>iFast、Wise、香港银行月结单。</div>
                            </div>
                            <div className="prep-card" style={{gridColumn: '1 / -1'}}>
                                <span className="icon" style={{color:'var(--primary-red)', fontWeight:'bold'}}>★</span>
                                <div><strong>低门槛方案：</strong>滴滴出行 APP 开具的英文版 PDF 电子发票（亲测有效）。</div>
                            </div>
                        </div>
                    </div>

                    <div style={{marginTop: '3rem'}}>
                        <h2><span>🛠️</span> 注册流程详解 (Step-by-Step)</h2>
                        <p style={{marginBottom: '1.5rem'}}>官网入口：<a href="https://pay.riseworks.io/sign-in" target="_blank" rel="noopener noreferrer" style={{color: 'var(--primary-red)', fontWeight: 'bold'}}>https://pay.riseworks.io/sign-in</a></p>

                        <div className="steps">
                            <div className="step-item">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h4>基础信息注册</h4>
                                    <p>准确填写 First Name、Last Name 和 邮箱，点击 "Sign Up"。</p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h4>邮箱验证</h4>
                                    <p>RISE 采用无密码模式。去邮箱查收链接登录，20 分钟内有效。</p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h4>关键：选择账户类型</h4>
                                    <p>请务必选择 <span style={{backgroundColor: '#FFFBEB', padding: '0.1rem 0.4rem', borderRadius: '4px', fontWeight: 'bold', color: '#92400E'}}>Receive Payments (接收付款)</span>。选错将无法收款。</p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <h4>身份验证 (KYC)</h4>
                                    <p>上传护照照片并进行人脸识别自拍。确保光线充足，无反光。</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="final-tip">
                        <h3><span>✅</span> 注册完成与收款</h3>
                        <p style={{fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--dark-red)', marginBottom: '1rem'}}>看到 "Success" 页面即表示注册完成。</p>
                        <div style={{backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-red)'}}>
                            <h4 style={{color: 'var(--primary-red)', marginBottom: '0.5rem'}}>💡 Prop Firm 提现小贴士：</h4>
                            <p>当你在自营公司后台申请出金时，请填写你的 <span className="email-badge">注册邮箱地址</span>（即你的 RISE ID），而不是加密货币钱包地址。资金到达 RISE 后，你再手动转出至钱包。</p>
                        </div>
                    </div>

                    <footer>
                        <p>© 2026 RISE 注册与出金实战指南</p>
                    </footer>
                </div>
            </section>

        </div>

        <footer className="bg-gray-900 text-gray-400 py-12 text-center">
            <p className="mb-2">Document compiled for Prop Firm Traders</p>
        </footer>
      </div>
    </div>
  );
};

export default RegistrationGuideView;
