
import React, { useEffect } from 'react';

const LucidSelectionGuideView: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    window.location.hash = "";
  };

  return (
    <div className="bg-white font-sans text-[#333] leading-[1.7] min-h-screen">
      <style>{`
        .lucid-guide-wrapper { max-width: 900px; margin: 0 auto; padding: 60px 24px; }
        .lucid-guide-wrapper header { text-align: center; margin-bottom: 50px; border-bottom: 3px solid #D32F2F; padding-bottom: 30px; }
        .lucid-guide-wrapper h1 { font-size: 2.2rem; color: #D32F2F; margin-bottom: 12px; letter-spacing: -0.5px; }
        .lucid-guide-wrapper .subtitle { font-size: 1.15rem; color: #666; font-weight: normal; }
        .lucid-guide-wrapper h2 { font-size: 1.6rem; color: #D32F2F; margin-top: 40px; margin-bottom: 20px; display: flex; align-items: center; border-left: 5px solid #D32F2F; padding-left: 15px; background-color: #fffafa; padding-top: 8px; padding-bottom: 8px; }
        .lucid-guide-wrapper h3 { font-size: 1.3rem; color: #333; margin-top: 25px; margin-bottom: 15px; border-bottom: 1px dashed #D32F2F; display: inline-block; padding-bottom: 2px; }
        .lucid-guide-wrapper p { margin-bottom: 18px; text-align: justify; }
        .lucid-guide-wrapper ul { margin-bottom: 20px; padding-left: 20px; }
        .lucid-guide-wrapper li { margin-bottom: 10px; }
        .lucid-guide-wrapper .highlight-red { color: #D32F2F; font-weight: bold; }
        .lucid-guide-wrapper .table-container { width: 100%; overflow-x: auto; margin: 30px 0; box-shadow: 0 4px 12px rgba(211, 47, 47, 0.1); border-radius: 8px; }
        .lucid-guide-wrapper table { width: 100%; border-collapse: collapse; min-width: 600px; background: #fff; border: 1px solid #ffcdd2; }
        .lucid-guide-wrapper th, .lucid-guide-wrapper td { padding: 16px 20px; text-align: left; border: 1px solid #ffcdd2; }
        .lucid-guide-wrapper th { background-color: #D32F2F; font-weight: bold; color: #FFFFFF; }
        .lucid-guide-wrapper tr:nth-child(even) { background-color: #fff9f9; }
        .lucid-guide-wrapper tr:hover { background-color: #ffebee; }
        .lucid-guide-wrapper .info-box { background-color: #fffafa; border: 1px solid #ffcdd2; padding: 24px; border-radius: 8px; margin: 25px 0; }
        .lucid-guide-wrapper .pro-tips { background-color: #fff5f5; border-left: 5px solid #D32F2F; padding: 20px; margin: 25px 0; }
        .lucid-guide-wrapper .card-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0; }
        .lucid-guide-wrapper .pros-cons { background: #fff; border: 1px solid #ffcdd2; padding: 20px; border-radius: 8px; }
        .lucid-guide-wrapper .pros h4 { color: #D32F2F; margin-bottom: 10px; }
        .lucid-guide-wrapper .cons h4 { color: #666; margin-bottom: 10px; }
        @media (max-width: 768px) {
            .lucid-guide-wrapper .card-grid { grid-template-columns: 1fr; }
            .lucid-guide-wrapper h1 { font-size: 1.8rem; }
            .lucid-guide-wrapper { padding: 40px 20px; }
        }
      `}</style>

      <div className="lucid-guide-wrapper">
        <nav className="mb-6">
          <div 
            onClick={handleBackClick}
            className="text-slate-500 font-medium flex items-center gap-2 hover:text-[#D32F2F] transition-colors cursor-pointer"
            role="button"
          >
            <i className="fa-solid fa-arrow-left"></i> 返回社区主页
          </div>
        </nav>

        <header>
            <h1>LucidFlex vs LucidPro 选型指南</h1>
            <div className="subtitle">—— 激进派的自由战场，还是稳健派的长期堡垒？ ——</div>
        </header>

        <section>
            <h2>平台简介</h2>
            <p>Lucid Trading 以其<strong>“一次性买断、无月费”</strong>的良心模式在自营圈独树一帜。无论你选择 Flex 还是 Pro，都能享受以下核心福利：</p>
            <ul>
                <li><span className="highlight-red">无月费压力</span>：一次付费，永久考试权（直到通关或违规），告别每月扣款的焦虑。</li>
                <li><strong>高额分润</strong>：通关后，你拿走 90% 的利润。</li>
                <li><strong>出金路径</strong>：模拟资金（Funded）阶段出金 6 次后，晋升至 Live 真实账户。</li>
            </ul>
            <p>那么，核心问题来了：Flex 和 Pro，究竟谁是你的天选之子？</p>
        </section>

        <section>
            <h2>1️⃣ 产品定位：性格决定命运</h2>
            <div className="card-grid">
                <div className="info-box">
                    <h3 style={{ borderColor: '#D32F2F' }}>🐆 LucidFlex：自由猎手</h3>
                    <p><strong>重点</strong>：无日损、无缓冲区、灵活。</p>
                    <p><strong>适合人群</strong>：适合不喜欢被条条框框束缚的交易员。你可能擅长日内大波动博弈，或者只是单纯讨厌“每天只能亏多少”的限制。</p>
                </div>
                <div className="info-box">
                    <h3 style={{ borderColor: '#D32F2F' }}>🐢 LucidPro：长期主义者</h3>
                    <p><strong>重点</strong>：有日损、有缓冲区、快速通关。</p>
                    <p><strong>适合人群</strong>：适合稳健运营、精打细算的交易员。你接受严格的风控来换取更长期的稳定性。</p>
                </div>
            </div>
        </section>

        <section>
            <h2>2️⃣ 核心规则大碰撞 (The Showdown)</h2>
            <p>这是选择的关键依据，请仔细对比以下差异：</p>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>维度</th>
                            <th>LucidFlex (灵活版)</th>
                            <th>LucidPro (专业版)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>通关速度</strong></td>
                            <td>🐢 慢：至少 2 天<br />(受 50% 一致性限制)</td>
                            <td>🚀 快：可 1 天通关<br />(无一致性限制)</td>
                        </tr>
                        <tr>
                            <td><strong>日损限制 (DLL)</strong></td>
                            <td><span className="highlight-red">✅ 无日损</span><br />(只要不触及总回撤，单日亏多少随意)</td>
                            <td>⚠️ 有日损<br />(每天有最大亏损红线，触及即违规)</td>
                        </tr>
                        <tr>
                            <td><strong>一致性规则</strong></td>
                            <td>⚠️ 考试有 (50%) / 出金无</td>
                            <td>✅ 考试无 / 出金有 (40%)</td>
                        </tr>
                        <tr>
                            <td><strong>出金缓冲 (Buffer)</strong></td>
                            <td><span className="highlight-red">✅ 无</span><br />(赚多少提多少)</td>
                            <td>⚠️ 有<br />(需先赚够 Buffer 垫子)</td>
                        </tr>
                        <tr>
                            <td><strong>每日最低盈利</strong></td>
                            <td>⚠️ 高 (如 50K 需 $150/天)</td>
                            <td>✅ 低 (如 50K 需 $100/天)</td>
                        </tr>
                        <tr>
                            <td><strong>出金上限</strong></td>
                            <td>💰 高 (余额的 50%)</td>
                            <td>📉 阶梯制 (初期受限)</td>
                        </tr>
                        <tr>
                            <td><strong>Live 迁移</strong></td>
                            <td>6 次出金后强制迁移</td>
                            <td>6 次出金后强制迁移</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section>
            <h2>3️⃣ 账户规格与目标 (以 50K 为例)</h2>
            <div className="info-box">
                <ul>
                    <li><strong>本金</strong>：$50,000 | <strong>盈利目标</strong>：$3,000</li>
                    <li><strong>最大回撤 (MLL)</strong>：$2,000 (EOD 日终结算)</li>
                    <li><strong>分成比例</strong>：<span className="highlight-red">90%</span></li>
                </ul>
            </div>
            <h3>🔐 关于 MLL (总回撤) 的重要机制</h3>
            <p>Lucid 采用的是 <strong>EOD (日终) 回撤</strong>。<strong>锁死机制</strong>：当你的账户余额增长超过“起始余额 + $100”时，回撤线将永久锁死在“起始余额 + $100”的位置。</p>
        </section>

        <section>
            <h2>4️⃣ 优劣势深度解析</h2>
            
            <h3>🐆 LucidFlex：快与爽</h3>
            <div className="card-grid">
                <div className="pros-cons">
                    <h4>👍 爽点</h4>
                    <ul style={{ color: '#D32F2F' }}>
                        <li>无日损：哪怕今天回撤了 $1000，明天还能搏回来。</li>
                        <li>无缓冲：赚了 $500 就能提，不用打“安全垫”。</li>
                    </ul>
                </div>
                <div className="pros-cons">
                    <h4>👎 痛点</h4>
                    <ul>
                        <li>考试慢：受 50% 一致性限制，至少分两天过关。</li>
                        <li>每日门槛高：出金要求的盈利日门槛较高。</li>
                    </ul>
                </div>
            </div>

            <h3>🐢 LucidPro：慢与稳</h3>
            <div className="card-grid">
                <div className="pros-cons">
                    <h4>👍 爽点</h4>
                    <ul style={{ color: '#D32F2F' }}>
                        <li>秒通关：考试阶段无一致性限制，一天通关。</li>
                        <li>门槛低：单日盈利门槛更低，更容易凑天数。</li>
                    </ul>
                </div>
                <div className="pros-cons">
                    <h4>👎 痛点</h4>
                    <ul>
                        <li>日损紧箍咒：不仅防总爆仓，还要防单日爆仓。</li>
                        <li>缓冲墙：必须先赚够 Buffer，首笔提现时间较晚。</li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <h2>5️⃣ 谁才是你的菜？(决策建议)</h2>
            <div className="card-grid">
                <div className="info-box" style={{ borderTop: '4px solid #D32F2F' }}>
                    <p className="highlight-red">✅ 选 LucidFlex，如果...</p>
                    <ul>
                        <li>你是日内波段手：策略波动大，Flex 保你不死。</li>
                        <li>你是“急用钱”党：不想打缓冲区，想快速变现。</li>
                    </ul>
                </div>
                <div className="info-box" style={{ borderTop: '4px solid #333' }}>
                    <p><strong>✅ 选 LucidPro，如果...</strong></p>
                    <ul>
                        <li>你是稳健手：回撤控制极好，日损无威胁。</li>
                        <li>你是长期经营者：愿意养成一个长期的现金流奶牛。</li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <h2>6️⃣ 实战运营攻略 (Pro Tips)</h2>
            <div className="pro-tips">
                <p><strong>💡 评估阶段</strong>：Flex 建议拆解目标分两天打；Pro 如果技术够硬可以直接一天冲关。</p>
            </div>
            <div className="pro-tips">
                <p><strong>💡 资金阶段</strong>：Flex 建议自设心理止损线；Pro 首要任务是打穿 Buffer。</p>
            </div>
        </section>

        <section style={{ textAlign: 'center', marginTop: '50px', background: '#fff5f5', padding: '40px', borderRadius: '20px' }}>
            <h2 style={{ border: 'none', background: 'transparent', justifyContent: 'center' }}>🎯 最终总结</h2>
            <p style={{ fontSize: '1.15rem', color: '#D32F2F', fontWeight: 'bold', marginBottom: '20px' }}>
                LucidFlex 是短跑运动员的跑鞋——轻便、无拘束，适合爆发和快速变现。<br />
                LucidPro 是登山者的登山靴——厚重、有保护（也有束缚），适合一步一个脚印的登顶。
            </p>
            <p>祝各位交易顺利，稳定盈利！</p>
        </section>

        <footer style={{ marginTop: '60px', paddingTop: '30px', borderTop: '2px solid #D32F2F', textAlign: 'center', color: '#999', fontSize: '0.9rem' }}>
            Lucid Trading 攻略指南
        </footer>
      </div>
    </div>
  );
};

export default LucidSelectionGuideView;
