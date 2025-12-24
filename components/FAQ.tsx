
import React, { useState } from 'react';

interface FAQProps {
  question: string;
  answer?: string;
}

const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`group border rounded-xl bg-white transition-all duration-500 ease-out ${isOpen ? 'border-primary/30 shadow-lg' : 'border-slate-200 shadow-sm hover:border-primary/40 hover:-translate-y-1 hover:shadow-md'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-left flex justify-between items-center transition-colors"
      >
        <span className={`text-sm font-medium transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-slate-700 group-hover:text-slate-900'}`}>{question}</span>
        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary text-white rotate-45' : 'bg-slate-100 text-primary group-hover:bg-primary/10'}`}>
          <i className="fa-solid fa-plus text-[10px]"></i>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-4 pt-0 text-sm text-slate-600 border-t border-slate-100 bg-slate-50/50">
          <p className="leading-relaxed">
            {answer || `针对 "${question}" 的详细解答暂未更新，请加入社区咨询。`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
