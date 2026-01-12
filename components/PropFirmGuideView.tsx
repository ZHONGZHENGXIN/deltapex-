
import React, { useEffect } from 'react';

const PropFirmGuideView: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    window.location.hash = "";
  };

  return (
    <div className="bg-white min-h-screen font-sans text-[#333] leading-[1.8]">
      <style>{`
        .guide-container h1 { font-size: 2.4em; font-weight: 700; margin-bottom: 40px; border-bottom: 4px solid #C0392B; padding-bottom: 15px; color: #C0392B; text-align: center; }
        .guide-container h2 { font-size: 1.8em; margin: 50px 0 25px 0; padding-bottom: 10px; border-bottom: 2px solid #FADBD8; color: #A93226; }
        .guide-container h3 { font-size: 1.4em; margin: 30px 0 15px 0; color: #333; display: flex; align-items: center; }
        .guide-container h3::before { content: ""; display: inline-block; width: 6px; height: 24px; background-color: #C0392B; margin-right: 12px; border-radius: 2px; }
        .guide-container p { margin-bottom: 20px; }
        .guide-container strong { color: #C0392B; }
        .guide-container ul, .guide-container ol { margin-bottom: 25px; padding-left: 25px; }
        .guide-container li { margin-bottom: 12px; }
        .guide-container .info-box { background-color: #FDEDEC; border-left: 4px solid #E74C3C; padding: 20px; margin: 20px 0; border-radius: 0 4px 4px 0; }
        .guide-container .example-box { background-color: #FDF2F2; border-left: 4px solid #C0392B; padding: 20px; margin: 20px 0; border-radius: 0 4px 4px 0; }
        .guide-container .warning-box { background-color: #943126; color: #FFFFFF; border-left: 4px solid #641E16; padding: 20px; margin: 20px 0; border-radius: 0 4px 4px 0; }
        .guide-container .warning-box strong { color: #FFFFFF; }
        .guide-container .highlight { background-color: #FADBD8; padding: 2px 6px; border-radius: 3px; font-weight: bold; color: #A93226; }
        .guide-container table { width: 100%; border-collapse: collapse; font-size: 0.95em; min-width: 600px; background-color: #FFFFFF; margin: 30px 0; }
        .guide-container th { background-color: #C0392B; color: #FFFFFF; font-weight: bold; text-align: left; padding: 15px; border: 1px solid #A93226; }
        .guide-container td { padding: 15px; border: 1px solid #F2D7D5; vertical-align: middle; }
        .guide-container tr:nth-child(even) { background-color: #FDF2F2; }
        .guide-container .tag { display: inline-block; padding: 2px 10px; border-radius: 20px; font-size: 0.85em; font-weight: bold; margin-right: 5px; }
        .guide-container .tag-success { background-color: #D4EFDF; color: #1E8449; }
        .guide-container .tag-danger { background-color: #F5B7B1; color: #943126; }
        .guide-container .tag-info { background-color: #D6EAF8; color: #21618C; }
      `}</style>

      <div className="max-w-[900px] mx-auto px-5 py-8 md:py-12 guide-container">
        {/* Navigation */}
        <nav className="mb-6">
          <div 
            onClick={handleBackClick}
            className="text-slate-500 font-medium flex items-center gap-2 hover:text-[#C0392B] transition-colors cursor-pointer"
            role="button"
          >
            <i className="fa-solid fa-arrow-left"></i> 返回社区主页
          </div>
        </nav>

        <h1>Futures Prop Firm 核心知识手册</h1>

        <section>
            <h2>一、三大核心知识（回撤 / 一致性 / 日内平仓）</h2>
            <p>在踏入 Prop Firm 的战场前，请记住：<strong>50% 以上的阵亡者不是因为技术太菜，而是阵亡于看不懂规则。 搞懂以下三个概念，你的存活率将直接翻倍。</strong></p>

            <h3>1. 回撤规则（Drawdown）：你的生命线</h3>
            <p>回撤不仅仅是“亏多少”，而是关于“红线怎么移动”。</p>

            <div className="info-box">
                <p><strong>（1）EOD（日终结算回撤 / End of Day）—— 最宽容的战友</strong></p>
                <p><strong>机制：</strong>盘中惊涛骇浪，只看收盘结果。回撤线仅在每日结算后，根据当天的收盘净值更新。</p>
                <p><strong>战术价值：</strong>适合心脏大、日内波动剧烈但能控制尾盘收口的交易员。</p>
                <div className="example-box">
                    <strong>💥 实战推演（50K 账户，回撤$2000 ）：</strong><br />
                    Day 1 收盘：赚到 $51,200 → 回撤线升至 $49,200。<br />
                    Day 2 盘中：任何时刻跌破 $49,200 → OUT。
                </div>
            </div>

            <div className="info-box">
                <p><strong>（2）TDD（实时追踪回撤 / Trailing Drawdown）—— 隐形杀手</strong></p>
                <p><strong>机制：</strong>它像影子一样跟着你的最高权益（含浮盈）。只要你账户里的钱（哪怕只是浮盈）创了新高，回撤线立刻上移，且永不回调。</p>
                <p><strong>致命陷阱：</strong>浮盈不平仓 = 自杀。</p>
                <div className="example-box">
                    <strong>💥实战推演（50K 账户，回撤$2000 ）：</strong><br />
                    - 起步线：$47,000。<br />
                    - 盘中冲高：浮盈至 $52,500 → 回撤线瞬间锁死在 $48,500。<br />
                    - 结局：哪怕只是回调到 $48,499（此时你实际上还赚着钱），也会直接判定爆仓。
                </div>
                <p><span className="tag tag-danger">⚠️ 警告</span> 严禁“过山车”式操作。飞得太高不落袋，你的地板就会被抬得太高，最终操作空间反而被锁死。</p>
            </div>

            <div className="info-box">
                <p><strong>（3）EOT（平仓结算回撤）—— 稀有现象</strong></p>
                <p><strong>机制：</strong>只在平仓那一刻更新回撤线。浮盈过程不计入。</p>
                <div className="example-box">
                    <strong>💡 举例：</strong><br />
                    - 当天你浮盈+$500 还没平仓 → 不会上移回撤线。<br />
                    - 平仓后 → 账户立即更新回撤线，如50k初始回撤是$49,000，浮盈的500平仓后立即变成$49,500。
                </div>
                <p><strong>现状：</strong>由于对交易员太有利，市面上仅剩不到 1% 的平台（如 Funded Futures Network ）使用。</p>
            </div>

            <div className="info-box">
                <p><strong>（4）静态回撤（Static Drawdown）—— 终极安全区</strong></p>
                <p><strong>机制：</strong>回撤线是根死木头，永远不动，只要余额不低于那条线，账户就安全。</p>
                <div className="example-box">
                    <strong>💥 实战推演：</strong>50K 账户，一旦利润超过 $2,100，回撤线永久锁定在 $50,100。之后任你赚几万，只要不亏回本金线就永远安全。
                </div>
                <p><strong>现状：</strong>几乎所有平台的账户，在利润打出“缓冲区”后，都会进化为静态回撤。</p>
            </div>

            <h3>2. 一致性规则（Consistency）：反“梭哈”机制</h3>
            <p><strong>常见形式示例：</strong></p>
            <ul>
                <li>要求至少 3～5 个交易日盈利，不能只在 1 天完成全部利润。</li>
                <li>单日盈利不超过总利润 of 30%–50%。例如目标 $3,000，平台规定单日最多占 50%，那最好控制单日不超过 $1,500 ，否则会导致通过门槛变高。</li>
            </ul>
            <div className="info-box">
                <p><strong>核心逻辑：</strong>禁止“一单暴富”。你的利润必须均匀分布。</p>
            </div>
            <div className="example-box">
                <p><strong>案例：</strong>目标 $3,000，一致性要求 50%。你一天狂赚 $3,000，系统会判定你需要赚到 $6,000 才能通关，难度瞬间翻倍。</p>
                <p><strong>💡 TopOne 逆向计算法：</strong>若门槛是 4000，一致性 20%，那你当日盈利不要超过 800 就满足一致性要求。</p>
            </div>

            <h3>3. 日内平仓（Flat at Close）</h3>
            <p>Futures Prop Firm 强制日内平仓：在规定时间前必须全部平掉持仓，不能隔夜。</p>
            <ul>
                <li><strong>常见参考：</strong>通常按北京时间次日 4:00 左右为结算时间。</li>
                <li><strong>温和派（90%）：</strong>大部分平台到点未平仓系统会自动帮你平（触发自动平仓不算违规，无影响）。</li>
                <li><strong>强硬派（10%)：</strong>极少部分平台不会自动平，如 TPT 等，忘记平掉会直接违规失败（挂单也要撤掉）。</li>
            </ul>
            <p><span className="highlight">建议：</span> 交易前先确认该平台的 “日内平仓规则” 是否会帮你自动平仓，闹钟 + 硬规则双保险。</p>
        </section>

        <hr className="border-t border-[#F2D7D5] my-10" />

        <section>
            <h2>二、正文部分</h2>

            <h3>1. 什么是自营交易（Futures Prop Trading）</h3>
            <p>Futures Prop Firm（期货自营公司）本质上是：你用他们的规则，通过模拟账户证明自己有稳定交易能力，通过考试（评估）后，他们给你一个资金账户（Sim Funded / Funded），你在规则内交易赚钱，利润按约定比例分成。</p>
            <ul>
                <li><strong>评估阶段：</strong>你支付评估费 → 在评估账户内完成盈利目标、不踩回撤/日损/规则 → 通过。</li>
                <li><strong>资金阶段：</strong>获取出金资格 → 满足最低出金条件后，按 80%-90% 分成。</li>
                <li><strong>风险承担：</strong>你最大损失 = 评估费 + 时间成本（不触及真实自有资金爆仓）。</li>
            </ul>
            <p><strong>💡 核心：</strong>Prop Firm 用规则筛选交易员，你用低成本撬动更大“名义资金”与盈利分成。</p>

            <h3>2. 自营交易比用自有资金有什么优势？</h3>
            <ul>
                <li><strong>资金杠杆：</strong>用 70-200 美金评估费撬动 25K / 50K / 100K 名义资金。</li>
                <li><strong>风险封顶：</strong>最坏情况是评估挂掉，损失固定的报名费，不会被追保证金。</li>
                <li><strong>可同时多账户：</strong>可在多个 Prop Firm/多个账户分散策略。</li>
                <li><strong>心理更稳：</strong>不是“真金白银”，减少情绪化操作（前提是你当它严格对待）。</li>
            </ul>
            <div className="example-box">
                <strong>💡 举例：</strong>自己用 7,000 美金做 NQ，连续亏 3 次就压力爆表；Prop Firm 里，你可能只交 $70-$200 评估费，就能做 50K 账户，心态完全不一样。
            </div>

            <h3>3. 什么人适合做 Futures Prop Firm？</h3>
            <ul>
                <li>已经有基本交易系统，能控制手数和回撤的交易员。</li>
                <li>资金有限，希望用规则化方式放大资金。</li>
                <li>有系统、懂风控、愿意像律师一样研读规则条款的人。</li>
            </ul>
            <p><span class="tag tag-danger">❌ 不适合</span> 扛单成瘾、不看规则、这就去冲的人。</p>

            <h3>5. 交易品种与 CFD 的区别</h3>
            <p>Futures Prop Firm 基本都是交易美国主流期货合约：</p>
            <ul>
                <li><strong>股指：</strong>NQ（纳指）、ES（标普500）、YM（道指）、RTY（小盘股）。</li>
                <li><strong>金属：</strong>GC（黄金）、SI（白银）。</li>
                <li><strong>能源：</strong>CL（原油）、NG（天然气）。</li>
                <li><strong>外汇期货：</strong>6E（欧元）、6J（日元）、6B（英镑）等。</li>
                <li><strong>微型合约：</strong>MNQ、MES、MGC 等（名义价值是标准合约的 1/10）。</li>
            </ul>
            <p><strong>💡 举例：</strong>1 NQ = 10 MNQ；1 GC = 10 MGC。</p>
            <p><strong>主要区别：</strong>交易所挂牌撮合透明，杠杆固定，不会被随意操控，交易手续费低。</p>

            <h3>6. 怎么解决付款卡问题？</h3>
            <p>绝大部分 Prop Firm 只能刷国际信用卡（VISA/万事达）。</p>
            <p><strong>① 中国大陆用户：</strong>办 VISA/万事达卡，或使用 Paypal 绑定。部分支持加密货币付款（如 FundedNext, Topone, Tradeify）。</p>
            <p><strong>② 海外/港澳用户：</strong>直接 VISA/Master 支付。</p>
            <div className="warning-box">
                ⚠️ <strong>警告：</strong>不要把账户邮箱、密码发给陌生人代注册。所有平台都禁止非本人的卡付款。
            </div>

            <h3>8. 怎么看英文网站和规则？</h3>
            <ul>
                <li><strong>浏览器插件：</strong>装“沉浸式翻译”插件。</li>
                <li><strong>Chrome/Edge：</strong>自带右键翻译功能。</li>
            </ul>
            <p><span class="highlight">建议：</span> 对于关键条款，机翻后对照原文，避免产生歧义。</p>

            <h3>9. 可以使用 魔法 吗？</h3>
            <p>绝大部分支持，少部分不支持. <strong>注意：</strong>频繁变更 IP 会触发风控。不要使用禁止国家的 IP（如朝鲜等）。建议保持线路稳定。</p>

            <h3>10. 每种账户类型的最大回撤（示例理解）</h3>
            <div className="overflow-x-auto">
                <table>
                    <thead>
                        <tr>
                            <th>平台</th>
                            <th>账户规模（例）</th>
                            <th>回撤类型</th>
                            <th>最大回撤</th>
                            <th>日损限额</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>TPT平台</td>
                            <td>50K</td>
                            <td>考试EOD + 出金TDD</td>
                            <td>$2,000</td>
                            <td>$2,000</td>
                        </tr>
                        <tr>
                            <td>Lucid平台</td>
                            <td>50K</td>
                            <td>EOD</td>
                            <td>$2,000</td>
                            <td>$1,200</td>
                        </tr>
                        <tr>
                            <td>Fundednext平台</td>
                            <td>50K</td>
                            <td>EOD</td>
                            <td>$2,000</td>
                            <td>$2,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p><strong>实战建议：</strong>先了解 “最大允许亏损 = 最大回撤 or 日损限制”。</p>

            <h3>11. 账户的最大持仓规模</h3>
            <p>Prop Firm 会限制单一账户的最大手数。例如 50K 账户：Alpha Zero 考试最多 5 手 NQ，而到了出金号最多 1 NQ 。 不能同时开过多 超总限制。</p>

            <h3>12. 什么是日损（Daily Loss Limit）？</h3>
            <p>日损 = 单个自然日最多允许你亏多少。超过会被强平（通常是软违规，第二天可继续）。</p>
            <div className="example-box">
                <strong>💡 举例：</strong>50K 账户，日损 $1,200。当日权益不能低于 $48,800，否则自动平仓。
            </div>

            <h3>13. 什么是新闻规则（News Rule）</h3>
            <p>部分公司限制在重大数据（非农、CPI等）公布前后交易。评估账户通常不限制，但部分平台出金号有新闻规则。</p>

            <h3>14. 考试费的月费模式</h3>
            <p>多数评估账户采用月度订阅制。购买后 30 天有效，未过关则第 31 天自动续费。一旦通过，月费停止。</p>
            <p><strong>免月费平台：</strong>Lucid, FundedNext 只收一次性费用。</p>

            <h3>15. 关于激活费（Activation Fee）</h3>
            <p>通过评估后，部分平台要求支付激活费。例如 Topstep 50K 激活费为 $149。TPT, Lucid 等则免收激活费。</p>

            <h3>16. 什么是复制交易（Copy Trading）</h3>
            <p>通过软件将主账户下单同步到子账户。<strong>优势：</strong>节省精力，多号管理。<strong>风险：</strong>一损俱损。<strong>注意：</strong>仅允许自己复制自己。</p>

            <h3>17. 什么是“种田”策略</h3>
            <p>指用小手数、低风险、稳定累积。核心：多号 + 小目标 + 高存活率。不赌、不梭、不情绪化。</p>

            <h3>18. 最大同时拥有的出金号</h3>
            <p>一般限制 3-5 个出金号。严禁利用亲友信息多开而不做 IP/设备隔离。</p>

            <h3>19. 出金号缓冲区（Buffer）</h3>
            <p>缓冲区是必须留存的利润垫。超过缓冲区的部分才能提现。达到某个利润后，回撤通常会锁定在初始余额（变为静态）。</p>

            <h3>20. 什么是 KYC</h3>
            <p>身份验证。<strong>推荐护照</strong>。注册姓名必须与证件一致（拼音）。</p>

            <h3>21. 单次出金 Cap（上限）</h3>
            <p>初期出金通常设有限额。例如 Lucid 50K 第一次上限为 $1,500。</p>

            <h3>22. 出金后“回撤锁定为初始余额”</h3>
            <p>这是对稳定交易员的奖励。出金后回撤线锁死，账户安全性大增。</p>

            <h3>23. 为什么仪表盘净值不是实时的？</h3>
            <p>更新有延迟。Tradovate 通常次日 9 点更新，Rithmic 通常次日下午更新。以交易软件为准。</p>

            <h3>24. 什么是 Live / Live 路径</h3>
            <p>分为 Evaluation（评估）、Sim Funded（模拟出金）、Live（真实账户）。能不进 Live 最好，模拟出金阶段最稳定。</p>

            <h3>28. 考试账户应该如何搭配？</h3>
            <div className="overflow-x-auto">
                <table>
                    <thead>
                        <tr>
                            <th>建议组合</th>
                            <th>推荐平台</th>
                            <th>核心特点</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={2}><strong>新手入门型</strong></td>
                            <td>Lucid</td>
                            <td>无月费，EOD回撤，免激活费，性价比高</td>
                        </tr>
                        <tr>
                            <td>FundedNext</td>
                            <td>无月费，EOD回撤，Rapid账户规则简单</td>
                        </tr>
                        <tr>
                            <td rowSpan={4}><strong>进阶多号型</strong></td>
                            <td>TPT</td>
                            <td>缓冲区日结，适合长线运营</td>
                        </tr>
                        <tr>
                            <td>Tradeify</td>
                            <td>Select 类型性价比高，通过门槛较低</td>
                        </tr>
                        <tr>
                            <td>Topstep</td>
                            <td>老牌稳定，推荐免激活版</td>
                        </tr>
                        <tr>
                            <td>Purdia</td>
                            <td>100k 免考账户，无一致性要求</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <footer style={{ textAlign: 'center', color: '#999', marginTop: '60px', fontSize: '0.9em' }}>
            <p>&copy; Futures Prop Firm 知识库 - 仅供学习参考</p>
        </footer>
      </div>
    </div>
  );
};

export default PropFirmGuideView;
