
import React, { useEffect } from 'react';

const WiseGuideView: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    window.location.hash = "";
  };

  return (
    <div className="bg-white min-h-screen font-sans text-[#333]">
      <style>{`
        /* Base Reset & Typography */
        .wise-container {
            font-family: 'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            color: #333333;
            line-height: 1.8;
            padding: 40px 20px;
            max-width: 900px;
            margin: 0 auto;
            background: #fff;
        }

        /* Headers */
        .wise-container header {
            border-bottom: 3px solid #C62828;
            padding-bottom: 30px;
            margin-bottom: 40px;
        }

        .wise-container h1 {
            font-size: 2.4rem;
            color: #C62828; /* Primary Red */
            text-align: center;
            margin-bottom: 10px;
            line-height: 1.3;
            font-weight: bold;
        }

        .wise-container .subtitle {
            font-size: 1.1rem;
            color: #666;
            text-align: center;
            display: block;
            font-weight: bold;
            letter-spacing: 1px;
        }

        .wise-container h2 {
            font-size: 1.6rem;
            border-bottom: 2px solid #C62828;
            padding-bottom: 8px;
            margin: 45px 0 20px;
            color: #111;
            display: flex;
            align-items: center;
            font-weight: bold;
        }

        .wise-container h3 {
            font-size: 1.3rem;
            margin: 25px 0 15px;
            color: #C62828;
            border-left: 4px solid #C62828;
            padding-left: 12px;
            font-weight: bold;
        }

        /* Content Elements */
        .wise-container p {
            margin-bottom: 1.5rem;
            text-align: justify;
        }

        .wise-container ul, .wise-container ol {
            margin-bottom: 1.5rem;
            padding-left: 25px;
        }

        .wise-container li {
            margin-bottom: 0.6rem;
        }

        /* Highlight & Alerts */
        .wise-container .highlight-box {
            background-color: #FFF5F5; /* Very Light Red */
            border-left: 5px solid #C62828;
            padding: 20px;
            margin: 25px 0;
            border-radius: 4px;
        }

        .wise-container .warning {
            background-color: #FFF9DB;
            border-left: 5px solid #F08C00;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
            color: #856404;
        }

        .wise-container .danger {
            background-color: #FFF5F5;
            border: 1px solid #FFC1C1;
            border-left: 5px solid #FA5252;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
            color: #C92A2A;
        }

        .wise-container .success-tip {
            background-color: #F1F3F5;
            border-left: 5px solid #495057;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
            color: #333;
        }

        /* Table Styling */
        .wise-container table {
            width: 100%;
            border-collapse: collapse;
            margin: 30px 0;
            font-size: 0.95rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .wise-container th, .wise-container td {
            border: 1px solid #E0E0E0;
            padding: 14px 18px;
            text-align: left;
        }

        .wise-container th {
            background-color: #C62828; /* Red Header */
            font-weight: bold;
            color: #FFFFFF;
        }

        .wise-container tr:nth-child(even) {
            background-color: #FAFAFA;
        }

        /* Code/Template Blocks */
        .wise-container .template-block {
            background-color: #F8F9FA;
            color: #333;
            border: 1px dashed #C62828;
            padding: 25px;
            border-radius: 6px;
            font-family: 'Consolas', 'Monaco', monospace;
            white-space: pre-wrap;
            margin: 25px 0;
            font-size: 0.9rem;
            line-height: 1.7;
            position: relative;
        }
        
        .wise-container .template-block::before {
            content: "COPY TEMPLATE";
            position: absolute;
            top: -10px;
            right: 15px;
            background: #C62828;
            color: #fff;
            font-size: 10px;
            padding: 2px 8px;
            border-radius: 3px;
        }

        /* Icons/Emoji Spacing */
        .wise-container .emoji {
            margin-right: 10px;
        }

        /* Footer Section */
        .wise-container .footer {
            margin-top: 80px;
            padding: 30px 0;
            border-top: 1px solid #EEE;
            text-align: center;
            font-size: 0.9rem;
            color: #999;
        }

        /* Summary Box */
        .wise-container .summary-box {
            margin-top: 50px;
            background-color: #C62828;
            color: #FFFFFF;
            padding: 30px;
            border-radius: 8px;
            text-align: center;
            font-weight: bold;
            box-shadow: 0 4px 12px rgba(198, 40, 40, 0.2);
        }

        /* Responsive Adjustments */
        @media (max-width: 600px) {
            .wise-container h1 {
                font-size: 1.8rem;
            }
            .wise-container h2 {
                font-size: 1.4rem;
            }
            .wise-container table {
                display: block;
                overflow-x: auto;
            }
        }
      `}</style>

      <div className="max-w-[900px] mx-auto px-4 pt-8">
        <div 
            onClick={handleBackClick}
            className="text-slate-500 font-medium flex items-center gap-2 hover:text-[#C62828] transition-colors cursor-pointer mb-4"
            role="button"
        >
            <i className="fa-solid fa-arrow-left"></i> 返回社区主页
        </div>
      </div>

      <div className="wise-container">
        <header>
            <h1>Wise 全攻略：Prop Firm 出金指南</h1>
            <span className="subtitle">—— 资金合规方案 · 一次验证 · 长期无忧 ——</span>
        </header>

        <section>
            <p>Wise (原 TransferWise) 是目前接收 Prop Firm（自营交易平台）出金最通用的渠道。</p>
            <div className="highlight-box">
                <ul>
                    <li><strong>核心优势：</strong>合规性高、汇率透明、支持直接汇款至国内微信（秒级到账）。</li>
                    <li><strong>常见挑战：</strong>新账户首次接收大额出金极易触发风控审核。</li>
                </ul>
                <p style={{marginBottom: 0}}>本指南将带你从零开始，搞定注册、激活、收款、风控验证及资金回国全流程。</p>
            </div>
        </section>

        <section>
            <h2><span className="emoji">🟢</span> 第一阶段：注册与激活</h2>
            
            <h3>1. 注册前准备</h3>
            <ul>
                <li>护照（首选，审核最快）或 身份证。</li>
                <li>电子邮箱（建议与 Prop Firm 注册邮箱一致）。</li>
                <li>中国手机号（+86 可接收验证码）。</li>
                <li>真实居住地址（需能提供地址证明，如水电单/信用卡账单）。</li>
            </ul>

            <h3>2. 注册流程详解</h3>
            <p><strong>账户创建：</strong>进入官网或 APP，输入邮箱。类型务必选择 <strong>“个人账户 (Personal)”</strong>。地区请务必选择 <strong>China (中国)</strong>。</p>

            <div className="warning">
                <strong>⚠️ 警告：</strong>不要为了申请实体卡而使用虚假的海外地址。Wise 风控极严，一旦触发地址验证无法提供证明，将直接封号且资金冻结。国区账户虽然没有实体卡，但功能足够接收出金。
            </div>

            <p><strong>信息填写：</strong></p>
            <ul>
                <li>手机验证：选择 +86 接收验证码。</li>
                <li>姓名填写：必须填写 <strong>拼音</strong>，先名 (First Name)，后姓 (Last Name)。</li>
                <li>地址填写：填写真实的居住地址（可用英文或拼音）。</li>
            </ul>

            <p><strong>身份验证 (KYC)：</strong>上传证件。建议点击“切换至智能手机”扫码拍摄，清晰度更高。</p>

            <h3>3. 账户激活</h3>
            <ul>
                <li><strong>同名账户入金：</strong>使用本人名下境外卡转入 20 USD/EUR。</li>
                <li><strong>Prop Firm 出金：</strong>直接接收一笔出金通常也可完成激活。</li>
            </ul>
        </section>

        <section>
            <h2><span className="emoji">🔵</span> 第二阶段：接收 Prop Firm 出金</h2>
            
            <h3>1. 获取收款账号</h3>
            <p>登录 Wise -&gt; 点击 <strong>USD</strong> 账户 -&gt; 获取 <strong>Account Number</strong> 和 <strong>Routing Number</strong>。</p>

            <h3>2. 绑定平台</h3>
            <p>在 Prop Firm 后台选择 <strong>ACH (推荐)</strong> 或 <strong>Wire</strong> 并填入上述信息。</p>
        </section>

        <section>
            <h2><span className="emoji">🔴</span> 第三阶段：风控通关指南</h2>
            <p><strong>背景：</strong>首次接收大额出金极易触发审核。这是标准的反洗钱流程，只要按以下逻辑操作即可稳定通关。</p>

            <h3>1. 验证操作详解</h3>
            <table>
                <thead>
                    <tr>
                        <th>配置项目</th>
                        <th>建议选择项</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>职业 (Occupation)</td>
                        <td>自由职业者 (Freelancer)</td>
                    </tr>
                    <tr>
                        <td>文件类型 (Document Type)</td>
                        <td>收入摘要 / 服务费 (Income Summary)</td>
                    </tr>
                </tbody>
            </table>

            <div className="danger">
                <strong>⚠️ 警示：</strong>千万不要选择“工资单”或“投资收益”，否则 Wise 会要求你提供完税证明或券商报告。
            </div>

            <h3>2. 核心文件：双签合同</h3>
            <p>审核关键在于看到合同上有 <strong>你和平台双方的签名</strong>。若原件无签名，请使用 PDF 编辑器补全拼音签名。</p>

            <h3>3. 英文回复模板</h3>
            <div className="template-block">
{`"I am a freelancer working as an independent contractor for [Company Name]. I provide market strategy analysis and trade execution services on their simulated capital accounts.

According to our agreement, I receive a profit share of 80%-90% based on the performance of my strategies. This income is a service fee, not an investment return.

Attached is the contract signed by both parties."`}
            </div>

            <div className="success-tip">
                <strong>✅ 若被要求提供投资组合：</strong><br />
                明确回复：我并非使用自有资金交易，因此没有投资组合。此款项纯粹是基于合同的服务费 (Service Fee)。
            </div>
        </section>

        <section>
            <h2><span className="emoji">🟡</span> 第四阶段：资金回国</h2>
            <table>
                <thead>
                    <tr>
                        <th>方式</th>
                        <th>推荐度</th>
                        <th>特点</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>微信 (WeChat)</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td><strong>首选。</strong>秒级到账，汇率优，最简单。</td>
                    </tr>
                    <tr>
                        <td>支付宝 (Alipay)</td>
                        <td>⭐⭐⭐⭐</td>
                        <td>汇给直系亲属，备选方案。</td>
                    </tr>
                    <tr>
                        <td>银联卡</td>
                        <td>⭐⭐⭐</td>
                        <td>受 5 万美元限额限制，需银行结汇。</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section>
            <h2><span className="emoji">🛡️</span> 第五阶段：日常避坑法则</h2>
            <ul>
                <li><span className="emoji">❌</span> <strong>严禁非同名转账：</strong>不要接收或发出不明个人转账。</li>
                <li><span className="emoji">❌</span> <strong>避免快进快出：</strong>资金到账后建议留存部分或分批转出。</li>
                <li><span className="emoji">✅</span> <strong>信息一致性：</strong>合同日期、人名、金额必须与入账款项对齐。</li>
            </ul>
        </section>

        <div className="summary-box">
            总结：只要身份定性为“自由职业者”，合同签名完整，Wise 就是最安全、最好用的收款通道。
        </div>

        <footer className="footer">
            <p>&copy;Wise 出金实战指南.如有不符.以官方为主</p>
        </footer>
      </div>
    </div>
  );
};

export default WiseGuideView;
