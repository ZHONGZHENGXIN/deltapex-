
import React, { useEffect } from 'react';

const TptReviewView: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    window.location.hash = "";
  };

  const primaryRed = '#cc0000';
  const lightRed = '#fff5f5';
  const borderColor = '#eeeeee';
  const textDark = '#333333';
  const textGrey = '#666666';

  return (
    <div className="bg-white min-h-screen font-sans text-[#333] leading-[1.7] p-5 md:p-10">
      <style>{`
        .tpt-review-container { max-width: 800px; margin: 0 auto; }
        .tpt-review-container header { text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 3px solid ${primaryRed}; }
        .tpt-review-container h1 { font-size: 48px; color: ${primaryRed}; margin: 0; letter-spacing: 1px; font-weight: 800; line-height: 1.2; }
        .tpt-review-container h3 { font-size: 20px; color: ${textDark}; margin: 15px 0 10px 0; }
        .tpt-review-container p { margin-bottom: 15px; }
        .tpt-review-container .quote-box { background-color: ${lightRed}; border-left: 5px solid ${primaryRed}; padding: 25px; border-radius: 4px; margin-bottom: 25px; font-style: italic; }
        .tpt-review-container .warning-box { background-color: #fffaf0; border: 1px solid #feebc8; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 5px solid #f6ad55; }
        .tpt-review-container .danger-box { background-color: ${lightRed}; border: 1px solid #feb2b2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 5px solid ${primaryRed}; }
        .tpt-review-container ul, .tpt-review-container ol { margin-bottom: 20px; padding-left: 20px; }
        .tpt-review-container li { margin-bottom: 8px; }
        .tpt-review-container .table-container { overflow-x: auto; margin: 20px 0; }
        .tpt-review-container table { width: 100%; border-collapse: collapse; font-size: 15px; }
        .tpt-review-container th { background-color: ${primaryRed}; color: #FFFFFF; font-weight: bold; text-align: left; padding: 12px 15px; border: 1px solid ${primaryRed}; }
        .tpt-review-container td { padding: 12px 15px; border: 1px solid ${borderColor}; }
        .tpt-review-container tr:nth-child(even) { background-color: #fafafa; }
        .tpt-review-container .spec-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px; margin: 20px 0; }
        .tpt-review-container .spec-card { padding: 20px; border: 1px solid ${borderColor}; border-radius: 12px; text-align: center; }
        .tpt-review-container .spec-card h4 { color: ${primaryRed}; margin-bottom: 10px; }
        .tpt-review-container footer { margin-top: 60px; padding: 40px 0; text-align: center; border-top: 1px solid ${borderColor}; color: ${textGrey}; font-size: 13px; }
        @media (max-width: 600px) {
            .tpt-review-container h1 { font-size: 32px; }
        }
      `}</style>

      <div className="tpt-review-container">
        <nav className="mb-6">
          <div 
            onClick={handleBackClick}
            className="text-slate-500 font-medium flex items-center gap-2 hover:text-[#cc0000] transition-colors cursor-pointer"
            role="button"
          >
            <i className="fa-solid fa-arrow-left"></i> 返回社区主页
          </div>
        </nav>

        <header>
            <h1>TPT (TakeProfitTrader) 深度测评</h1>
        </header>

        <main className="content">
            <div className="quote-box">
                <p style={{ margin: 0 }}><strong>一句话点评：</strong>TPT 是“激进型”交易员的提款机。它的核心特色在于出金号支持日结，且评估阶段规则相对宽松（EOD回撤），但其出金账户（PRO）初期的风控极为严格（实时回撤）。</p>
            </div>

            <section>
                <ul>
                    <li><strong>核心机制：</strong>考试阶段 EOD（日终回撤）+ 资金阶段 TDD（实时追踪回撤）。</li>
                    <li><strong>盈利分成：</strong>交易员可获得 <span style={{ color: primaryRed, fontWeight: 'bold' }}>80% - 90%</span> 的利润分成。</li>
                    <li><strong>收费模式：</strong>月度订阅制。通关后不再收费。</li>
                    <li><strong>账户弹性：</strong>提供从 25K 到 150K 多种账户规格。</li>
                </ul>
            </section>

            <section>
                <p style={{ color: primaryRed, fontWeight: 'bold' }}>TPT 的晋升路径非常清晰，分为三个阶段：</p>
                <ul>
                    <li><strong>Test（评估阶段）：</strong>纯模拟环境。证明盈利能力。特点：EOD 日终回撤，环境较为宽松。</li>
                    <li><strong>PRO（资金账户）：</strong>模拟资金分润。特点：TDD 实时追踪回撤，支持日结出金，需过缓冲区。</li>
                    <li><strong>PRO+（真实账户）：</strong>稳定盈利后进入真实市场。</li>
                </ul>
            </section>

            <section>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>维度</th>
                                <th>Test (考试账户)</th>
                                <th>PRO (出金账户)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>回撤类型</strong></td>
                                <td>✅ EOD 日终回撤</td>
                                <td>⚠️ TDD 实时追踪回撤</td>
                            </tr>
                            <tr>
                                <td><strong>新闻交易</strong></td>
                                <td>✅ 允许持仓过数据</td>
                                <td>⚠️ 限制一级新闻持仓</td>
                            </tr>
                            <tr>
                                <td><strong>出金机制</strong></td>
                                <td>无</td>
                                <td>支持日结 (需过缓冲区)</td>
                            </tr>
                            <tr>
                                <td><strong>日内平仓</strong></td>
                                <td>必须手动平仓</td>
                                <td>必须手动平仓</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="danger-box">
                    <strong style={{ color: primaryRed, display: 'block', marginBottom: '10px' }}>🚨 严重警告：关于日内平仓 (Flat at Close)</strong>
                    <p style={{ margin: 0, fontSize: '14px' }}>TPT 不会自动平仓！无论是 Test 还是 PRO 账户，你必须在收盘前手动平仓并撤销所有挂单。一旦收盘持有仓位或挂单，直接判定挑战失败 (Hard Breach)。</p>
                </div>
            </section>

            <section>
                <div className="spec-grid">
                    <div className="spec-card">
                        <h4>25K 账户</h4>
                        <p>目标: $1,500</p>
                        <p>回撤: $1,500</p>
                        <p style={{ fontSize: '12px', color: '#888' }}>3 Minis / 30 Micros</p>
                    </div>
                    <div className="spec-card">
                        <h4>50K 账户</h4>
                        <p>目标: $3,000</p>
                        <p>回撤: $2,000</p>
                        <p style={{ fontSize: '12px', color: '#888' }}>6 Minis / 60 Micros</p>
                    </div>
                    <div className="spec-card">
                        <h4>100K 账户</h4>
                        <p>目标: $6,000</p>
                        <p>回撤: $3,000</p>
                        <p style={{ fontSize: '12px', color: '#888' }}>12 Minis / 120 Micros</p>
                    </div>
                    <div className="spec-card">
                        <h4>150K 账户</h4>
                        <p>目标: $9,000</p>
                        <p>回撤: $4,500</p>
                        <p style={{ fontSize: '12px', color: '#888' }}>15 Minis / 150 Micros</p>
                    </div>
                </div>
            </section>

            <section>
                <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '250px' }}>
                        <h3 style={{ color: primaryRed, marginTop: 0 }}>🏆 核心优势</h3>
                        <ul>
                            <li><strong>出金日结：</strong>PRO 账户利润过线即可申请，当天到账。</li>
                            <li><strong>缓冲区可取：</strong>关户时缓冲区资金也可提走。</li>
                            <li><strong>考试宽松：</strong>EOD 回撤对波动型选手友好。</li>
                        </ul>
                    </div>
                    <div style={{ flex: 1, minWidth: '250px' }}>
                        <h3 style={{ color: '#666', marginTop: 0 }}>💣 潜在风险</h3>
                        <ul>
                            <li><strong>实时回撤陷阱：</strong>PRO 阶段 TDD 极其考验持仓心态。</li>
                            <li><strong>缓冲区门槛：</strong>需赚够最大回撤额度后才可自由提现。</li>
                            <li><strong>手动平仓压力：</strong>忘记平仓 = 账号作废。</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div className="warning-box">
                    <h3 style={{ marginTop: 0 }}>🛡️ 给新手的实战铁律</h3>
                    <ol style={{ paddingLeft: '20px', marginBottom: 0 }}>
                        <li style={{ marginBottom: '10px' }}><strong>突围缓冲区：</strong>拿到 PRO 号第一周不要想赚钱，先轻仓让账户利润超过缓冲区。</li>
                        <li style={{ marginBottom: '10px' }}><strong>禁止浮盈加仓：</strong>在 TDD 机制下，浮盈加仓会把你的回撤线迅速拉高。</li>
                        <li style={{ marginBottom: 0 }}><strong>强制闹钟：</strong>在收盘前 15 分钟设置强提醒，清理所有挂单 and 合约。</li>
                    </ol>
                </div>
            </section>

            <footer>
                <p>© TakeProfitTrader 评测指南</p>
            </footer>
        </main>
      </div>
    </div>
  );
};

export default TptReviewView;
