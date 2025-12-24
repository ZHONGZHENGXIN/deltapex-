
import React, { useEffect } from 'react';
import Button from './Button';

interface TptRulesViewProps {
  onBack: () => void;
}

const TptRulesView: React.FC<TptRulesViewProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[900px] mx-auto px-5 py-10 box-border text-[#333] leading-[1.8] font-sans antialiased">
        <nav className="mb-5">
          <Button 
            onClick={onBack}
            variant="ghost"
            className="text-[#666] font-medium flex items-center gap-[5px] hover:text-[#cc0000] p-0"
          >
            <i className="fa-solid fa-arrow-left"></i> 返回社区主页
          </Button>
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
              "重要提醒：收盘前务必平仓并删除挂单，否则视为违规。考核不限新闻，出金号需注意新闻规则。"
            ].map((text, i) => (
              <li key={i} className="mb-3 relative before:content-['•'] before:text-[#cc0000] before:font-bold before:inline-block before:w-[1.5em]">{text}</li>
            ))}
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
