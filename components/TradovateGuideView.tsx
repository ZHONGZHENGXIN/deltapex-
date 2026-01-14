
import React, { useEffect } from 'react';

const TradovateGuideView: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    window.location.hash = "";
  };

  return (
    <div className="bg-white min-h-screen font-sans text-[#333] leading-[1.7]">
      <style>{`
        /* 核心视觉风格 - 红色与白色调 */
        :root {
            --primary-red: #D32F2F; /* 专业交易红 */
            --dark-red: #B71C1C;
            --light-red-bg: #FFF5F5;
            --border-red: #FFCDD2;
            --text-main: #333333;
            --text-muted: #666666;
            --white: #FFFFFF;
        }

        .tdv-container {
            max-width: 900px;
            margin: 0 auto;
            padding: 60px 40px;
            color: #333;
            font-family: "Microsoft YaHei", "微软雅黑", Helvetica, Arial, sans-serif;
        }

        /* 标题样式 */
        .tdv-container h1 {
            font-size: 2.5rem;
            color: #B71C1C;
            margin-bottom: 10px;
            text-align: center;
            font-weight: 800;
        }

        .tdv-container .subtitle {
            font-size: 1.1rem;
            color: #666;
            text-align: center;
            margin-bottom: 50px;
            border-bottom: 2px solid #D32F2F;
            padding-bottom: 30px;
        }

        .tdv-container h2 {
            font-size: 1.8rem;
            color: #FFFFFF;
            background-color: #D32F2F;
            margin-top: 50px;
            margin-bottom: 25px;
            padding: 10px 20px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            box-shadow: 0 4px 6px rgba(211, 47, 47, 0.2);
        }

        .tdv-container h3 {
            font-size: 1.4rem;
            color: #B71C1C;
            margin-top: 35px;
            margin-bottom: 15px;
            background-color: #FFF5F5;
            padding: 10px 15px;
            border-left: 5px solid #D32F2F;
            border-bottom: 1px solid #FFCDD2;
        }

        /* 文本段落与列表 */
        .tdv-container p {
            margin-bottom: 18px;
        }

        .tdv-container ul, .tdv-container ol {
            margin-bottom: 25px;
            padding-left: 25px;
        }

        .tdv-container li {
            margin-bottom: 12px;
        }

        /* 链接样式 */
        .tdv-container a {
            color: #D32F2F;
            text-decoration: none;
            transition: all 0.2s;
            font-weight: bold;
        }

        .tdv-container a:hover {
            text-decoration: underline;
            color: #B71C1C;
        }

        /* 表格样式 - 红色主题 */
        .tdv-container table {
            width: 100%;
            border-collapse: collapse;
            margin: 25px 0;
            font-size: 0.95rem;
            background-color: #FFFFFF;
            border: 1px solid #FFCDD2;
        }

        .tdv-container th, .tdv-container td {
            border: 1px solid #FFCDD2;
            padding: 12px 15px;
            text-align: left;
        }

        .tdv-container th {
            background-color: #D32F2F;
            font-weight: bold;
            color: #FFFFFF;
        }

        .tdv-container tr:nth-child(even) {
            background-color: #FFF5F5;
        }

        /* 特殊内容块 */
        .tdv-container .callout {
            background-color: #f8f9fa;
            border: 1px solid #dee2e6;
            padding: 15px 20px;
            border-radius: 6px;
            margin: 20px 0;
            border-left: 5px solid #6c757d;
        }

        .tdv-container .important {
            background-color: #FFF5F5;
            border: 1px solid #FFCDD2;
            padding: 15px 20px;
            border-radius: 6px;
            margin: 20px 0;
            position: relative;
        }

        .tdv-container .important::before {
            content: "IMPORTANT";
            position: absolute;
            top: -10px;
            right: 15px;
            background: #D32F2F;
            color: white;
            font-size: 0.7rem;
            padding: 2px 8px;
            border-radius: 10px;
            font-weight: bold;
        }

        .tdv-container .code-inline {
            background-color: #f1f3f5;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: Consolas, Monaco, monospace;
            font-size: 0.9em;
            color: #B71C1C;
            border: 1px solid #e9ecef;
        }

        .tdv-container .case-study {
            border: 2px dashed #D32F2F;
            padding: 15px;
            background-color: #FFFFFF;
            border-radius: 4px;
            margin-top: 10px;
        }

        .tdv-container footer {
            margin-top: 80px;
            text-align: center;
            color: #999;
            font-size: 0.9rem;
            border-top: 2px solid #D32F2F;
            padding-top: 30px;
        }

        /* 响应式调整 */
        @media (max-width: 600px) {
            .tdv-container {
                padding: 30px 20px;
            }
            .tdv-container h1 { font-size: 1.8rem; }
            .tdv-container h2 { font-size: 1.4rem; padding: 8px 15px; }
            .tdv-container h3 { font-size: 1.2rem; }
        }
      `}</style>

      <div className="tdv-container">
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
            <h1>Tradovate (TDV) 全能实战手册</h1>
            <p className="subtitle">—— 无需魔法、国内直连、网页版即开即用的专业期货终端 ——</p>
        </header>

        <section>
            <h2>🟢 第一部分：准备工作 (Setup)</h2>
            <p>在开始交易前，请确保完成以下配置，否则只能看不能做。</p>

            <h3>1. 登录与下载</h3>
            <p>Tradovate 最大的优势是云端同步，推荐优先使用网页版。</p>
            <ul>
                <li>🌐 <strong>网页版 (推荐)</strong>：<a href="https://trader.tradovate.com/welcome" target="_blank" rel="noopener noreferrer">https://trader.tradovate.com/welcome</a></li>
                <li>📱 <strong>手机版下载</strong> (紧急平仓用，体验不如电脑)：
                    <ul>
                        <li>🍎 iOS：App Store 搜索 "Tradovate"</li>
                    </ul>
                </li>
            </ul>

            <h3>2. 关键设置 (必读)</h3>
            <div className="important">
                <p><strong>✍️ 签署数据协议：</strong> 这是第一步！未签署协议会导致行情延迟 10 分钟且无法下单。</p>
            </div>
            <ul>
                <li><strong>🔒 登录模式：</strong> 使用 Prop Firm 提供的账号密码登录时，环境选择请务必勾选 <strong style={{color: '#D32F2F'}}>Simulation (模拟)</strong>，严禁选择 Live。</li>
                <li><strong>📶 网络环境：</strong> Tradovate 在国内网络优化极佳，通常无需开启魔法（VPN）即可流畅交易。</li>
            </ul>
        </section>

        <section>
            <h2>🔴 第二部分：实操交易 (Trading)</h2>

            <h3>1. 品种搜索与合约选择</h3>
            <p>在顶部搜索栏输入代码。注意合约月份的时效性！</p>
            <table>
                <thead>
                    <tr>
                        <th>常用代码</th>
                        <th>对应品种</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span className="code-inline">MNQ / NQ</span></td>
                        <td>纳指 / 微型纳指</td>
                    </tr>
                    <tr>
                        <td><span className="code-inline">MGC / GC</span></td>
                        <td>黄金 / 微型黄金</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>合约月份：</strong> 代码后通常带有月份 and 年份，如 <span className="code-inline">MNQH6</span> (2026年3月合约)。</p>
            <div className="callout">
                <p>💡 <strong>提示：</strong> 如果你看到的 K 线断断续续或没有量，说明你选错了旧合约，请切换到主力合约。</p>
            </div>

            <h3>2. 下单与挂单</h3>
            <ul>
                <li><strong>市价单 (Market Order)：</strong> 输入手数，点击买入/卖出按钮，立即成交。</li>
                <li><strong>挂单 (Limit/Stop)：</strong> 在图表（Chart）或 DOM（深度盘口）对应价格处点击鼠标右键，选择 Buy Limit / Sell Limit 等进行挂单。</li>
            </ul>

            <h3>3. 平仓管理 (重要)</h3>
            <p>🚀 <strong>一键全平 (Panic Button)：</strong></p>
            <p>点击图表上方的 <span className="code-inline">Exit at Mkt & Cxl</span> (市价退出并撤销) 按钮。</p>
            <p><em>作用：瞬间平掉所有持仓，并自动撤销所有未成交的挂单（防止误成交）。</em></p>

            <p>📉 <strong>部分平仓：</strong></p>
            <p>反向开仓即平仓。</p>
            <div className="case-study">
                <strong>案例：</strong> 持有 5 手多单，想平 3 手？直接下 3 手空单即可。
            </div>

            <h3>4. 故障排查</h3>
            <p><strong>❓ 数据延迟 10 分钟 / 图表显示 Delayed？</strong></p>
            <ul>
                <li><strong>原因：</strong> 未签署数据协议。</li>
                <li><strong>解决：</strong> 登录网页版签署。若无法弹出签署页面，请使用 Chrome 浏览器并清除缓存后重试。</li>
            </ul>
        </section>

        <section>
            <h2>🛡️ 第三部分：风控与止损 (Risk Management)</h2>

            <h3>1. ATM 自动策略 (推荐)</h3>
            <p>开仓前设置好，下单瞬间自动带上止盈止损。</p>
            <p><strong>设置路径：</strong> 下单面板右侧 -&gt; ATM 设置。</p>

            <table>
                <thead>
                    <tr>
                        <th>配置项目</th>
                        <th>说明 / 建议设置</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>状态</td>
                        <td>设为 <strong>ON</strong></td>
                    </tr>
                    <tr>
                        <td>显示方式</td>
                        <td>建议选择 <strong>$</strong> (美元数值) 或 <strong>Ticks</strong> (点数)</td>
                    </tr>
                    <tr>
                        <td>TP / SL</td>
                        <td>输入止盈金额 (TP) 和止损金额 (SL)</td>
                    </tr>
                    <tr>
                        <td>Stop Type</td>
                        <td>选择 <strong>Stop Loss</strong></td>
                    </tr>
                </tbody>
            </table>

            <h3>2. 图表止损修改</h3>
            <p>Tradovate 的订单一旦成交，修改止盈止损最快的方式是直接在图表上<strong>拖动</strong>止盈/止损线。</p>

            <h3>3. 每日风控锁 (Daily Loss Limit)</h3>
            <p>防止上头，让系统强制帮你停手。（部分平台支持）</p>
            <ul>
                <li><strong>设置路径：</strong> Application Settings (设置) -&gt; Risk Settings (风险设置)。</li>
                <li><strong>功能：</strong> 设置“每日最大亏损额”或“每日盈利目标”。触达数值后，系统将自动平仓并锁定账户至收盘。</li>
            </ul>
        </section>

        <section>
            <h2>👥 第四部分：进阶功能 - 组复制 (Group Trading)</h2>
            <p>功能：操作一个主账号，同时带动多个子账号下单。</p>

            <h3>1. 设置步骤</h3>
            <ol>
                <li>进入 <span className="code-inline">Application Settings (设置)</span> -&gt; <span className="code-inline">Group Trading (组设置)</span>。</li>
                <li>点击 "Add Group"，将左侧需要复制的账号拖入右侧列表。</li>
                <li>保存后，在下单面板的账户选择栏，选择你刚建好的组 (Group)。</li>
            </ol>

            <h3>2. 核心逻辑 (必看)</h3>
            <p>Tradovate 采用<strong>总量分配</strong>逻辑，而非倍数跟随。</p>
            <div className="case-study">
                <p><strong>案例：</strong> 如果你有 5 个账号在组里，你想让每个账号下 1 手 MNQ。</p>
                <p><strong>操作：</strong> 下单面板的手数必须填 <strong>5 手</strong>。</p>
                <p><strong>结果：</strong> 系统会将这 5 手均匀分配，每个账号分到 1 手。</p>
            </div>

            <h3>3. ⚠️ 致命注意事项</h3>
            <ul>
                <li><strong style={{color: '#D32F2F'}}>不支持 ATM：</strong> 组复制模式下，<strong>严禁使用 ATM 策略</strong>，否则会报错 <span className="code-inline">Multibracket orders are not supported</span>。请使用账户端的日损功能代替风控。</li>
                <li><strong>操作禁忌：</strong> 严禁快速频繁操作（如秒进秒出、极速反手）。网络延迟可能导致子账户复制失败或仓位不一致。</li>
            </ul>
        </section>

        <footer>
            <p>© Tradovate 实战手册指南 | 仅供学习参考</p>
        </footer>
      </div>
    </div>
  );
};

export default TradovateGuideView;
