
import React, { useEffect } from 'react';

const PaymentGuideView: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    window.location.hash = "";
  };

  return (
    <div className="bg-white min-h-screen font-sans text-[#333]">
      <style>{`
        /* Scoped styles for payment guide */
        .payment-guide-wrapper {
            font-family: "Microsoft YaHei", "微软雅黑", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: #333333;
            line-height: 1.7;
            padding: 40px 20px;
        }

        /* 布局容器 */
        .payment-guide-container {
            max-width: 900px;
            margin: 0 auto;
        }

        /* 标题部分 */
        .payment-guide-header {
            text-align: center;
            border-bottom: 2px solid #C41E3A;
            padding-bottom: 30px;
            margin-bottom: 40px;
        }
        .payment-guide-header h1 {
            color: #C41E3A;
            font-size: 32px;
            margin-bottom: 10px;
            letter-spacing: -0.5px;
        }
        .payment-guide-subtitle {
            color: #666;
            font-size: 18px;
            font-style: italic;
        }

        /* 段落与通用文本 */
        .payment-guide-wrapper p {
            margin-bottom: 20px;
            font-size: 16px;
        }
        .payment-guide-wrapper code {
            background-color: #f5f5f5;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: Consolas, Monaco, monospace;
            font-size: 0.9em;
            color: #C41E3A;
        }

        /* 警示框 */
        .payment-guide-info-box {
            background-color: #FFF5F5;
            border-left: 4px solid #C41E3A;
            padding: 15px 20px;
            margin-bottom: 30px;
        }
        .payment-guide-info-box strong {
            color: #C41E3A;
        }

        /* 章节标题 */
        .payment-guide-wrapper h2 {
            font-size: 24px;
            color: #C41E3A;
            border-left: 5px solid #C41E3A;
            padding-left: 15px;
            margin: 40px 0 20px 0;
            display: flex;
            align-items: center;
        }

        /* 方案区块 */
        .payment-guide-plan-section {
            background-color: #fafafa;
            border: 1px solid #eee;
            border-radius: 8px;
            padding: 25px;
            margin-bottom: 20px;
        }
        .payment-guide-wrapper h3 {
            font-size: 18px;
            margin-bottom: 12px;
            color: #333;
        }
        .payment-guide-recommendation {
            font-weight: bold;
            color: #d4a017; /* 金色星星 */
            margin-top: 15px;
        }
        .payment-guide-advantage {
            color: #2e7d32;
            font-weight: bold;
            margin-top: 10px;
        }

        /* 列表样式 */
        .payment-guide-wrapper ul {
            margin-left: 20px;
            margin-bottom: 20px;
        }
        .payment-guide-wrapper li {
            margin-bottom: 8px;
        }

        /* 红色警戒线区域 */
        .payment-guide-red-line-section {
            background-color: #C41E3A;
            color: #FFFFFF;
            padding: 30px;
            border-radius: 8px;
            margin: 40px 0;
            box-shadow: 0 4px 12px rgba(196, 30, 58, 0.2);
        }
        .payment-guide-red-line-section h2 {
            color: #FFFFFF;
            border-left-color: #FFFFFF;
            margin-top: 0;
        }
        .payment-guide-red-line-section p, .payment-guide-red-line-section li {
            color: #FFFFFF;
        }
        .payment-guide-card {
            background: rgba(255, 255, 255, 0.1);
            padding: 15px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 6px;
            margin-bottom: 15px;
        }

        /* 表格样式 */
        .payment-guide-table-container {
            width: 100%;
            overflow-x: auto;
            margin: 30px 0;
        }
        .payment-guide-wrapper table {
            width: 100%;
            border-collapse: collapse;
            min-width: 600px;
        }
        .payment-guide-wrapper th {
            background-color: #C41E3A;
            color: #FFFFFF;
            text-align: left;
            padding: 12px 15px;
            font-weight: bold;
        }
        .payment-guide-wrapper td {
            padding: 12px 15px;
            border-bottom: 1px solid #eee;
            font-size: 14px;
        }
        .payment-guide-wrapper tr:nth-child(even) {
            background-color: #fcfcfc;
        }
        .payment-guide-wrapper tr:hover {
            background-color: #fff9f9;
        }

        /* 页脚 */
        .payment-guide-footer {
            text-align: center;
            font-size: 12px;
            color: #999;
            margin-top: 60px;
            border-top: 1px solid #eee;
            padding-top: 20px;
        }

        /* 响应式调整 */
        @media (max-width: 600px) {
            .payment-guide-wrapper { padding: 20px 15px; }
            .payment-guide-header h1 { font-size: 24px; }
            .payment-guide-wrapper h2 { font-size: 20px; }
        }
      `}</style>
      
      <div className="payment-guide-wrapper">
        <div className="payment-guide-container">
            {/* Navigation */}
            <nav className="mb-6">
            <div 
                onClick={handleBackClick}
                className="text-slate-500 font-medium flex items-center gap-2 hover:text-[#C41E3A] transition-colors cursor-pointer"
                role="button"
            >
                <i className="fa-solid fa-arrow-left"></i> 返回社区主页
            </div>
            </nav>

            <header className="payment-guide-header">
                <h1>Prop Firm 支付通关指南</h1>
                <div className="payment-guide-subtitle">—— 搞定海外付款，解决“拒付”焦虑 ——</div>
            </header>

            <section>
                <p>由于绝大多数 Prop Firm（自营交易平台）使用 <code>Stripe</code> / <code>Checkout</code> / <code>Paddle</code> 等海外支付接口，国内银行卡极其容易触发风控导致支付失败。</p>
                
                <div className="payment-guide-info-box">
                    <p>如果你看到了 <strong>Transaction declined</strong>、<strong>Bank declined</strong> 或 <strong>Payment failed</strong>，请放心，这通常不是你的余额问题，而是银行的风控拦截。</p>
                </div>
                
                <p>以下是针对国内用户的全套支付解决方案，按推荐优先级排序。</p>
            </section>

            <section>
                <h2>🏆 方案一：境外银行卡（终极方案）</h2>
                <div className="payment-guide-plan-section">
                    <p>如果你有，请直接用。这是最稳、最快、体验最好的方式。</p>
                    <ul>
                        <li><strong>适用对象：</strong>持有香港或海外银行账户的用户。</li>
                        <li><strong>推荐卡种：</strong>
                            <ul>
                                <li>🇭🇰 香港卡：众安银行 (ZA Bank)、汇丰 (HSBC)、中银香港 (BOC HK) 等。</li>
                                <li>🌏 其他境外卡：任何非中国大陆发行的 Visa/Mastercard。</li>
                            </ul>
                        </li>
                    </ul>
                    <div className="payment-guide-advantage">✅ 优势：成功率 99%，丝滑秒过，无视风控。</div>
                    <div className="payment-guide-recommendation">推荐指数：⭐⭐⭐⭐⭐</div>
                </div>
            </section>

            <section>
                <h2>🚀 方案二：虚拟数字卡（进阶方案）</h2>
                <div className="payment-guide-plan-section">
                    <p>没有境外卡？这是目前国内用户成功率最高的替代方案。原理是使用加密货币充值到虚拟 Visa/Master 卡中，利用其海外发卡机构的身份绕过风控。</p>
                    
                    <h3>首选推荐：Bybit Card</h3>
                    <p>逻辑：注册 Bybit 交易所账户 -&gt; 申请虚拟卡 -&gt; U充值 -&gt; 消费。</p>
                    <p style={{fontSize: '14px', color: '#666'}}>注意：目前申请由于合规原因，可能需要将认证地区切换至“哈萨克斯坦”等地区（具体教程建议在 小红书/YouTube 搜索“Bybit 卡申请教程”）。</p>
                    <p><strong>成功率：</strong>100%（只要平台支持卡支付）。</p>
                    
                    <h3 style={{marginTop: '20px'}}>备选推荐：</h3>
                    <ul>
                        <li>Fiat24 生态卡：如 SafePal、Bitget 联名卡等。</li>
                        <li>其他小众卡：RedotPay、Pokepay 等（需自行搜索最新教程，注意资金安全）。</li>
                    </ul>
                    <div className="payment-guide-advantage">✅ 优势：完全脱离国内银行风控体系。</div>
                    <div className="payment-guide-recommendation">推荐指数：⭐⭐⭐⭐⭐</div>
                </div>
            </section>

            <section>
                <h2>🏦 方案三：国内银行卡“优选通道”</h2>
                <div className="payment-guide-plan-section">
                    <p>如果你不想折腾虚拟币，请务必挑选“对的卡”。以下卡种经过大量实测，通过率较高。</p>

                    <h3>1. 黄金梯队：Master / Visa 单标储蓄卡（借记卡）</h3>
                    <p>核心逻辑：卡面只有 MasterCard 或 Visa 标志，没有银联标志。</p>
                    <ul>
                        <li><strong>👑 首选王者：中信银行 MasterCard 单标借记卡</strong><br />
                            <span style={{fontSize: '14px'}}>获取方式：下载“中信银行 APP” -&gt; 搜索“外币借记卡” -&gt; 申请并邮寄到家 -&gt; 线下网点激活。</span>
                        </li>
                        <li><strong>🥈 次选战队：</strong>
                            <ul>
                                <li>中国银行：莫奈卡等 Visa/Master 单标借记卡。</li>
                                <li>中国邮政储蓄：Visa/Master 单标借记卡。</li>
                            </ul>
                        </li>
                    </ul>
                    <p style={{background: '#eee', padding: '5px 10px', fontSize: '13px', display: 'inline-block'}}>💡 建议：多办两张不同银行的单标卡防身。</p>

                    <h3 style={{marginTop: '20px'}}>2. 白银梯队：Paypal 曲线救国</h3>
                    <p>如果 Prop Firm 的支付页面有 PayPal 选项，请毫不犹豫地选它！操作：注册国区 PayPal -&gt; 绑定你的国内 Visa/Master 卡 -&gt; 支付时选 PayPal。</p>
                    <div className="payment-guide-advantage">✅ 优势：能把原本刷不过的卡变能用。</div>

                    <h3 style={{marginTop: '20px'}}>3. 青铜梯队：Amex 与 双标卡</h3>
                    <ul>
                        <li>运通 (American Express)：工行/建行的运通储蓄卡。（缺点：很多平台不支持）</li>
                        <li>双标信用卡（银联+Visa/Master）：（缺点：极不稳定，看运气）</li>
                    </ul>
                    <div className="payment-guide-recommendation">推荐指数：⭐⭐⭐（看脸）</div>
                </div>
            </section>

            <section>
                <h2>₿ 方案四：加密货币直付（Crypto Payment）</h2>
                <div className="payment-guide-plan-section">
                    <p>最省事，但不是所有平台都支持。支持平台：FundedNext, Tradeify, TopOne Futures 等。</p>
                    <p>操作：在收银台选择 Crypto/Coinbase -&gt; 选择币种（通常是 USDT-TRC20 或 USDC）-&gt; 扫码转账。</p>
                    <div style={{background: '#fff0f0', border: '1px dashed #C41E3A', padding: '15px', marginTop: '15px', fontSize: '14px'}}>
                        <strong style={{color: '#C41E3A'}}>⚠️ 致命注意：</strong><br />
                        1. <strong>必须支付 Gas 费：</strong> 对方必须收到足额，少一分钱都会导致订单挂起。<br />
                        2. <strong>核对链类型：</strong> TRC20, ERC20, BEP20 别选错。
                    </div>
                    <div className="payment-guide-recommendation">推荐指数：⭐⭐⭐</div>
                </div>
            </section>

            <section>
                <h2>🛠️ 支付失败自救指南 (Troubleshooting)</h2>
                <ul>
                    <li><strong>网络环境：</strong> 部分支付网关（如 Stripe）必须开启魔法（VPN）才能加载 Google 验证码。</li>
                    <li><strong>操作频率：</strong> 失败后不要立刻连刷，这会触发更严风控。换卡或换方式。</li>
                    <li><strong>玄学风控：</strong> 备 2 种以上支付方案是自营交易者的基本功。</li>
                </ul>
            </section>

            <section className="payment-guide-red-line-section">
                <h2>⚠️ 绝对红线（KYC 警告）</h2>
                <p>在 Prop Firm 交易，合规比赚钱更重要。支付时请坚守以下底线：</p>
                <div className="payment-guide-card">
                    <strong>❌ 严禁使用他人卡片：</strong><br />
                    不要用父母、配偶或朋友的卡付款。平台在 KYC 环节发现付款人姓名与注册人不符，大概率封号拒绝出金。
                </div>
                <div className="payment-guide-card" style={{background: 'rgba(46, 125, 50, 0.2)', borderColor: 'rgba(255, 255, 255, 0.4)'}}>
                    <strong>✅ 保持一致性：</strong><br />
                    注册姓名 = 付款卡持有人姓名 = 身份证/护照姓名 = 收款账户姓名。
                </div>
            </section>

            <section>
                <h2>📝 总结：成功率推荐表</h2>
                <div className="payment-guide-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>方案</th>
                                <th>推荐度</th>
                                <th>评价</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bybit 等虚拟卡</td>
                                <td style={{color: '#d4a017'}}>⭐⭐⭐⭐⭐</td>
                                <td>首选。成功率 100%，无视国内风控。</td>
                            </tr>
                            <tr>
                                <td>境外银行卡</td>
                                <td style={{color: '#d4a017'}}>⭐⭐⭐⭐⭐</td>
                                <td>最稳。如果有港卡，直接刷，体验最好。</td>
                            </tr>
                            <tr>
                                <td>中信等单标储蓄卡</td>
                                <td style={{color: '#d4a017'}}>⭐⭐⭐⭐</td>
                                <td>国内卡首选。门槛低，人人可办。</td>
                            </tr>
                            <tr>
                                <td>PayPal</td>
                                <td style={{color: '#d4a017'}}>⭐⭐⭐</td>
                                <td>备选。能用则用，取决于平台。</td>
                            </tr>
                            <tr>
                                <td>加密货币直付</td>
                                <td style={{color: '#d4a017'}}>⭐⭐⭐</td>
                                <td>特定场景。仅限支持 Crypto 的平台。</td>
                            </tr>
                            <tr>
                                <td style={{color: '#999'}}>双标信用卡</td>
                                <td style={{color: '#d4a017'}}>⭐</td>
                                <td style={{color: '#999'}}>不推荐。纯靠运气，容易心态崩。</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <footer className="payment-guide-footer">
                <p>Prop Firm 支付通关指南 · 祝交易长虹，全速通关</p>
            </footer>
        </div>
      </div>
    </div>
  );
};

export default PaymentGuideView;
