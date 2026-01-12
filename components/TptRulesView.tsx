
import React, { useEffect } from 'react';

const TptRulesView: React.FC = () => {
  // 滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    window.location.hash = "";
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[900px] mx-auto px-5 py-10 box-border text-[#333] leading-[1.8] font-sans antialiased">
        <nav className="mb-5">
          <div 
            onClick={handleBackClick}
            className="text-[#666] no-underline text-[0.9rem] flex items-center gap-[5px] hover:text-[#cc0000] transition-colors cursor-pointer"
            role="button"
          >
            ← 返回社区主页
          </div>
        </nav>
        
        <header className="text-center">
          <h1 className="text-[2.5rem] mb-[10px] text-[#cc0000] tracking-[-0.5px] font-bold">
            TPT规则 - 最全攻略指南 🏆
          </h1>
          <p className="text-[1.2rem] text-[#666] mb-[40px] font-light">
            性价比高、支持日结、出金快速的期货 Prop Firm
          </p>
        </header>

        <div className="bg-[#fffafa] border border-[#ffcccc] p-5 rounded-lg my-[30px] text-center">
          <p className="my-[10px] font-bold">TPT折扣码：<span className="text-[#cc0000] font-bold text-[1.5rem]">DP01</span></p>
          <p className="my-[10px] font-bold">注册链接：<a href="https://takeprofittrader.com/?referralCode=DP01" target="_blank" rel="noopener noreferrer" className="inline-block text-[#cc0000] no-underline break-all border-b border-dashed border-[#cc0000] transition-all hover:text-[#990000] hover:border-solid">https://takeprofittrader.com/?referralCode=DP01</a></p>
        </div>

        <section id="advantages">
          <h2 className="text-[1.6rem] border-l-[5px] border-solid border-[#cc0000] pl-[15px] mt-[50px] mb-[25px] text-[#1a1a1a] flex items-center font-bold">
            ✨ TPT 的优势
          </h2>
          
          <p className="mb-5 text-justify"><strong>超高性价比：</strong>6折免激活长期活动，具体价格参考如下：</p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse my-5 text-[0.95rem]">
              <thead>
                <tr className="bg-[#fff5f5] text-[#cc0000] font-bold">
                  <th className="border border-[#eee] p-[15px] text-center">账户类型</th>
                  <th className="border border-[#eee] p-[15px] text-center">25K 账户</th>
                  <th className="border border-[#eee] p-[15px] text-center">50K 账户</th>
                  <th className="border border-[#eee] p-[15px] text-center">100K 账户</th>
                  <th className="border border-[#eee] p-[15px] text-center">150K 账户</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#eee] p-[15px] text-center"><strong>当前价格</strong></td>
                  <td className="border border-[#eee] p-[15px] text-center">$90</td>
                  <td className="border border-[#eee] p-[15px] text-center">$105</td>
                  <td className="border border-[#eee] p-[15px] text-center">$147</td>
                  <td className="border border-[#eee] p-[15px] text-center">$216</td>
                </tr>
                <tr>
                  <td className="border border-[#eee] p-[15px] text-center"><strong>优惠说明</strong></td>
                  <td colSpan={4} className="border border-[#eee] p-[15px] text-center">使用折扣码 <strong className="text-[#cc0000] font-bold">DP01</strong> 享受7折优惠并免除激活费</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul className="pl-5 mb-[30px] list-none">
            {[
              "推荐25K或150K：25k是因为比较好通过；150k是因为虽然难度高一点但重置费只要$100，150k打出来的pro号回撤大更好做。",
              "150k的成本优势：重置费只要100，一直重置最后一定能得到一个4500TDD的出金号。成本根据水平高低总成本在200多（1次过）-600多（5次才过）不等。建议在30天内重置考过，否则需月费续订。",
              "实时追踪与静态账户：比如通过3次考试获得150k账户，总成本约416刀。该号可慢慢打过缓冲区变成静态账户。在美盘强趋势行情下，若盘中净值曾超过4500（即便回落），在TDV风险设置里开启日盈利清算，直接变静态账户。",
              "种田日结：超过缓冲区利润即可每日出金。缓冲区内的利润也可提（不满60天分50%）。",
              "付款方式：支持 VISA万事达、Paypal。国内卡建议绑定Paypal支付。",
              "出金效率：一般次日到账。仪表盘TVD通常早上9点后更新，rithmic下午更新。",
              "网络支持：支持魔法梯子，需保持同一国家（推荐亚洲节点）。",
              "回撤规则：考核EOD回撤，Pro出金号实时追踪。打过缓冲区后变为静态。",
              "灵活过关：若考核2天即达标，剩余3天可使用最小手数刷交易日。",
              "缓冲区利润提取：若觉得打不过去，可邮件申请提取。交易满60天分80%，不满分50%。无任何限制。",
              "重要提醒：收盘前务必平仓并删除挂单，否则需月费续订。考核不限新闻，出金号需注意新闻规则。"
            ].map((text, i) => (
              <li key={i} className="mb-3 relative before:content-['•'] before:text-[#cc0000] before:font-bold before:inline-block before:w-[1.5em]">{text}</li>
            ))}
          </ul>

          <div className="overflow-x-auto my-[30px] rounded-lg border border-[#ffcccc] shadow-[0_4px_15px_rgba(204,0,0,0.05)]">
            <table className="min-w-[800px] border-none w-full border-collapse">
              <thead>
                <tr className="bg-[#cc0000] text-white">
                  <td className="bg-[#990000] text-center w-[25%] p-[15px]"></td>
                  <td className="p-[15px] text-[1.2rem] font-bold">25K 考试号</td>
                  <td className="p-[15px] text-[1.2rem] font-bold">150K 考试号</td>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b-2 border-[#ffcccc]">
                  <td className="bg-[#fffafa] font-bold text-left pl-5 border-r border-[#ffeeee]">促销活动</td>
                  <td colSpan={2} className="p-[15px] text-[0.95rem] text-[#666]">
                    退报名费仅适用于黑五促销活动，时间：2025年11月24日-结束时间待定
                  </td>
                </tr>
                <tr className="bg-white border-b border-[#f0f0f0]">
                  <td className="bg-[#fffafa] font-bold text-left pl-5 border-r border-[#ffeeee]">价格 <span className="text-[0.8rem] font-normal text-[#888]">(按月订阅, 通过后再不收)</span></td>
                  <td className="p-[15px]"><strong className="text-[#cc0000]">$105</strong> <span className="text-[0.8rem] font-normal text-[#888]">(7折免激活+第一次出金退报名费)</span></td>
                  <td className="p-[15px]"><strong className="text-[#cc0000]">$252</strong> <span className="text-[0.8rem] font-normal text-[#888]">(7折免激活+第一次出金退报名费)</span></td>
                </tr>
                <tr className="bg-white border-b border-[#f0f0f0]">
                  <td className="bg-[#fffafa] font-bold text-left pl-5 border-r border-[#ffeeee]">交易平台</td>
                  <td colSpan={2} className="p-[15px]">CQG (<span className="text-[#cc0000]">Tradovate</span>、Ninjatrader) 或 Rithmic (<span className="text-[#cc0000]">Quantower</span>、atas)</td>
                </tr>
                <tr className="bg-white border-b border-[#f0f0f0]">
                  <td className="bg-[#fffafa] font-bold text-left pl-5 border-r border-[#ffeeee]">考试号回撤 (EOD模式) <span className="text-[0.8rem] font-normal text-[#888]">无日损, 交易5天(可2天过, 划水)</span></td>
                  <td className="p-[15px]">EOD回撤1500，利润目标1500<br />考核一致性50% <span className="text-[0.8rem] font-normal text-[#888]">(最大手数3手)</span></td>
                  <td className="p-[15px]">EOD回撤4500，利润目标9000<br />考核一致性50% <span className="text-[0.8rem] font-normal text-[#888]">(最大手数15手)</span></td>
                </tr>
                <tr className="bg-white border-b border-[#f0f0f0]">
                  <td className="bg-[#fffafa] font-bold text-left pl-5 border-r border-[#ffeeee]">出金号回撤 (盘中追踪) <span className="text-[0.8rem] font-normal text-[#888]">无日损, 最快1天出金</span></td>
                  <td className="p-[15px]">追踪回撤1500，无一致性要求<br />利润超1500缓冲区部分可每天出金</td>
                  <td className="p-[15px]">追踪回撤4500，无一致性要求<br />利润超4500缓冲区部分可每天出金</td>
                </tr>
                <tr className="bg-white border-b border-[#f0f0f0]">
                  <td className="bg-[#fffafa] font-bold text-left pl-5 border-r border-[#ffeeee]">关于激活费</td>
                  <td colSpan={2} className="p-[15px]">TPT活动时免激活费，过关后会送credit到账户抵扣激活，<br />一般下个工作日傍晚前送（超3工作日没有找客服）</td>
                </tr>
                <tr className="bg-white border-b border-[#f0f0f0]">
                  <td className="bg-[#fffafa] font-bold text-left pl-5 border-r border-[#ffeeee]">出金要求 <span className="text-[0.8rem] font-normal text-[#888]">(缓冲区内也可申请)</span></td>
                  <td colSpan={2} className="p-[15px]">
                    <strong className="text-[#cc0000]">出金号打过缓冲区后就变成静态账户不会再追踪了</strong><br />
                    只要打过缓冲区，就可以每天出金（单笔大于250无手续费）<br />
                    <span className="text-[#cc0000]">发邮件关闭账户可以提取缓冲区内50%金额</span> <span className="text-[0.8rem] font-normal text-[#888]">(交易满60天可提80%, 关闭无任何影响)</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="rules">
          <h2 className="text-[1.6rem] border-l-[5px] border-solid border-[#cc0000] pl-[15px] mt-[50px] mb-[25px] text-[#1a1a1a] flex items-center font-bold">
            📊 TPT 的规则汇总
          </h2>
          <p className="mb-5 text-justify">期货 Prop 均为月费订阅模式。若不再操作，请务必手动取消订阅以避免扣款。</p>
          <div className="bg-[#fffafa] border border-[#ffcccc] p-5 rounded-lg my-[25px]">
            <strong>取消路径：</strong>官网 control-center → 时间位置 → 红色 “X” → 关闭订阅。
          </div>
        </section>

        <section id="strategy">
          <h2 className="text-[1.6rem] border-l-[5px] border-solid border-[#cc0000] pl-[15px] mt-[50px] mb-[25px] text-[#1a1a1a] flex items-center font-bold">
            🌱 种田攻略
          </h2>
          <p className="mb-5 text-justify">考试采用 EOD 回撤，难度较低；Pro出金号在通过缓冲区前是实时追踪，这是核心难点。</p>
          <ul className="pl-5 mb-[30px] list-none">
            <li className="mb-3 relative before:content-['•'] before:text-[#cc0000] before:font-bold before:inline-block before:w-[1.5em]"><strong>分个突破：</strong>获得多个考试号后，建议一个个分开梭过缓冲区。之后每日稳定盈利100-300刀，实现日结。</li>
            <li className="mb-3 relative before:content-['•'] before:text-[#cc0000] before:font-bold before:inline-block before:w-[1.5em]"><strong>持仓限制：</strong>Pro账户同时交易上限为5个。考核号无数量限制，可多备号。</li>
            <li className="mb-3 relative before:content-['•'] before:text-[#cc0000] before:font-bold before:inline-block before:w-[1.5em]"><strong>激活上限：</strong>每30天最多激活10个Pro账户。</li>
          </ul>
        </section>

        <section id="tutorials">
          <h2 className="text-[1.6rem] border-l-[5px] border-solid border-[#cc0000] pl-[15px] mt-[50px] mb-[25px] text-[#1a1a1a] flex items-center font-bold">
            🖥️ 连接教程
          </h2>
          <p className="mb-5 text-justify">无论选择哪个数据源，请务必签署相关协议以激活账户。</p>
          <ul className="pl-5 mb-[30px] list-none">
            <li className="mb-3 relative before:content-['•'] before:text-[#cc0000] before:font-bold before:inline-block before:w-[1.5em]"><strong>Rithmic 签署激活：</strong><a href="https://signup.rithmic.com/apps.html" target="_blank" rel="noopener noreferrer" className="inline-block text-[#cc0000] no-underline break-all border-b border-dashed border-[#cc0000] transition-all hover:text-[#990000] hover:border-solid">https://signup.rithmic.com/apps.html</a></li>
            <li className="mb-3 relative before:content-['•'] before:text-[#cc0000] before:font-bold before:inline-block before:w-[1.5em]"><strong>TDV 签署激活 (CQG)：</strong><a href="https://trader.tradovate.com/welcome" target="_blank" rel="noopener noreferrer" className="inline-block text-[#cc0000] no-underline break-all border-b border-dashed border-[#cc0000] transition-all hover:text-[#990000] hover:border-solid">https://trader.tradovate.com/welcome</a></li>
          </ul>
        </section>

        <hr className="border-0 border-t border-solid border-[#ffeeee] my-10" />
        <footer className="text-center text-[#999] text-[0.8rem] mb-[50px]">
          © TPT 攻略指南 | 请遵循官网实时规则
        </footer>
      </div>
    </div>
  );
};

export default TptRulesView;
