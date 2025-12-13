import React, { useState } from 'react';

interface FAQProps {
  question: string;
}

const FAQ: React.FC<FAQProps> = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded bg-white shadow-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-left flex justify-between items-center hover:bg-slate-50 transition"
      >
        <span className="text-sm font-medium text-slate-700">{question}</span>
        <i
          className={`fa-solid fa-plus text-primary text-xs transition-transform duration-200 ${
            isOpen ? 'rotate-45' : ''
          }`}
        ></i>
      </button>
      {isOpen && (
        <div className="p-4 pt-0 text-sm text-slate-600 border-t border-slate-100 bg-slate-50">
          <p>This is a placeholder answer for: "{question}". Content would go here.</p>
        </div>
      )}
    </div>
  );
};

export default FAQ;