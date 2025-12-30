
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION, HUMAN_SUPPORT_LINKS } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Theme Colors
  const PRIMARY_COLOR = "#E63935"; // Brand Red
  const SUCCESS_COLOR = "#07C160"; // WeChat Green
  const BG_COLOR = "#F5F7F9";      // Light Gray BG

  // Auto scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, isOpen]);

  // Round Robin Load Balancing for Support Links
  const handleSupportClick = () => {
    const lastIndex = parseInt(localStorage.getItem('deltapex_support_idx') || '0');
    const nextIndex = (lastIndex + 1) % HUMAN_SUPPORT_LINKS.length;
    
    // Save state
    localStorage.setItem('deltapex_support_idx', nextIndex.toString());
    
    // Open Link
    window.open(HUMAN_SUPPORT_LINKS[lastIndex], '_blank');
  };

  const quickTags = [
    { label: "零基础入门", prompt: "我没有交易经验，零基础该如何开始？" },
    { label: "考试盘规则", prompt: "TPT 和 Lucid 的考试规则有什么区别？" },
    { label: "订单流战法", prompt: "什么是订单流？Delta 背离怎么看？" },
    { label: "大额出金", prompt: "盈利后资金如何安全合规入境？" },
    { label: "A股实战", prompt: "订单流技术能用在 A 股或可转债吗？" }
  ];

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const newMessages: Message[] = [...messages, { role: 'user', text }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: newMessages.map(m => ({ parts: [{ text: m.text }] })),
        config: {
          systemInstruction: AI_SYSTEM_INSTRUCTION,
          maxOutputTokens: 600,
          temperature: 0.5, // Lower temperature for more professional tone
        },
      });

      const modelResponse = response.text || "数据连接中断，请直接联系人工客服。";
      setMessages([...newMessages, { role: 'model', text: modelResponse }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages([...newMessages, { role: 'model', text: "通道拥堵，请点击右上角人工客服接入人工席位。" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* 1. Launcher Button (Visible when closed) */}
      <div 
        className={`fixed bottom-6 right-6 z-[99] transition-all duration-300 transform ${isOpen ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100 scale-100'}`}
      >
        <button 
          onClick={onClose} // Functionally 'onOpen' because App.tsx toggles it, but passed as onClose prop for consistency
          className="w-16 h-16 rounded-full shadow-[0_8px_30px_rgba(230,57,53,0.4)] flex items-center justify-center text-white hover:scale-110 transition-transform active:scale-95 group relative overflow-hidden"
          style={{ backgroundColor: PRIMARY_COLOR }}
        >
          {/* Pulse Effect */}
          <span className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping"></span>
          <i className="fa-solid fa-comment-dots text-2xl relative z-10 group-hover:rotate-12 transition-transform duration-300"></i>
          {/* Notification Dot */}
          <span className="absolute top-3 right-3 w-3 h-3 bg-white rounded-full border-2 border-[#E63935]"></span>
        </button>
      </div>

      {/* 2. Chat Window (Visible when open) */}
      <div 
        className={`fixed bottom-6 right-6 z-[100] w-[90vw] md:w-[380px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) origin-bottom-right border border-slate-100 ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
        }`}
        style={{ maxHeight: 'min(700px, 80vh)' }}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-white border-b border-slate-100 shrink-0 relative z-20">
          <div className="flex items-center gap-3">
             <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md" style={{ backgroundColor: PRIMARY_COLOR }}>
               DP
             </div>
             <div className="flex flex-col">
               <span className="text-slate-900 font-bold text-sm leading-tight">DeltaPex AI</span>
               <div className="flex items-center gap-1.5">
                 <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: SUCCESS_COLOR }}></span>
                 <span className="text-[10px] text-slate-400 font-medium tracking-wide">在线 | Online</span>
               </div>
             </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleSupportClick}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors group shadow-sm"
            >
              <i className="fa-brands fa-weixin text-sm" style={{ color: SUCCESS_COLOR }}></i>
              <span className="text-[11px] font-bold text-slate-600 group-hover:text-slate-900">人工客服</span>
            </button>
            <button 
              onClick={onClose} 
              className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
        </div>

        {/* Chat Body */}
        <div 
          ref={scrollRef} 
          className="flex-1 overflow-y-auto p-4 space-y-5 scroll-smooth"
          style={{ backgroundColor: BG_COLOR }}
        >
          {/* Welcome Message + Rich Media Card */}
          <div className="flex flex-col gap-2 items-start animate-fade-in-up">
            <div className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-sm text-slate-700 leading-relaxed border border-slate-100 max-w-[90%]">
              <p className="mb-2 font-bold text-slate-900">👋 欢迎来到 DeltaPex 交易社区。</p>
              <p>我是您的首席技术顾问。请直接告诉我您的需求，或点击下方卡片进入实盘现场。</p>
            </div>
            
            {/* Rich Media Card: Live Room */}
            <div 
              onClick={handleSupportClick}
              className="cursor-pointer bg-white p-3 rounded-xl border border-slate-200 shadow-md hover:shadow-lg hover:border-red-100 transition-all group w-[85%] relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                      <i className="fa-solid fa-video"></i>
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900 text-sm group-hover:text-red-600 transition-colors">实盘直播间</h4>
                      <p className="text-[10px] text-slate-500">正在讲解：美盘开盘策略</p>
                   </div>
                </div>
                <i className="fa-solid fa-chevron-right text-xs text-slate-300 group-hover:text-red-500 group-hover:translate-x-1 transition-all"></i>
              </div>
            </div>
          </div>

          {/* Messages Loop */}
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
              <div 
                className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
                  msg.role === 'user' 
                  ? 'text-white rounded-tr-sm' 
                  : 'bg-white text-slate-700 border border-slate-100 rounded-tl-sm'
                }`}
                style={{ backgroundColor: msg.role === 'user' ? PRIMARY_COLOR : 'white' }}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm border border-slate-100 shadow-sm flex gap-1.5 items-center">
                <span className="text-xs text-slate-400 font-medium mr-2">正在分析...</span>
                <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce"></span>
                <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce delay-200"></span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-white p-4 border-t border-slate-100 shrink-0">
          
          {/* Horizontal Scroll Tags */}
          <div className="flex gap-2 overflow-x-auto pb-3 -mx-1 px-1 no-scrollbar mask-fade-edges">
            {quickTags.map((tag, idx) => (
              <button
                key={idx}
                onClick={() => sendMessage(tag.prompt)}
                className="whitespace-nowrap px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-xs font-semibold text-slate-600 hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all shrink-0"
              >
                {tag.label}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="relative flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
              placeholder="输入您的问题..."
              className="flex-1 bg-[#F5F7F9] text-slate-900 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-red-100 focus:bg-white transition-all placeholder:text-slate-400"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={isLoading || !input.trim()}
              className="w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-md disabled:opacity-50 disabled:shadow-none transition-all active:scale-95"
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              <i className="fa-solid fa-paper-plane text-sm"></i>
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default AIAssistant;
