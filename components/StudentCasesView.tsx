import React, { useEffect } from 'react';
import { STUDENT_CASES } from '../constants';
import Reveal from './Reveal';
import Button from './Button';

const StudentCasesView: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen font-sans text-slate-300 pb-20">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 text-center max-w-5xl mx-auto">
        <Reveal>
          <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-6 block animate-fade-in-up">
            Success Stories
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white mb-8 leading-[1.2]">
            优秀学员案例 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white bg-[length:200%_auto] animate-shimmer">
              实战成果见证
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-light tracking-wide max-w-3xl mx-auto leading-relaxed mb-12">
            来自 Deltapex 社区成员的真实交易记录与成长故事。
          </p>
          <Button href="#" onClick={() => window.history.back()} variant="white" className="border-slate-700 bg-slate-800 text-white hover:bg-slate-700">
            <i className="fa-solid fa-arrow-left mr-2"></i> 返回首页
          </Button>
        </Reveal>
      </section>

      {/* Cases Grid */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STUDENT_CASES.map((student, idx) => (
            <Reveal key={student.id} delay={idx * 0.1}>
              <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 group h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={student.avatar} 
                    alt={student.name} 
                    className="w-12 h-12 rounded-full bg-slate-700"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white">{student.name}</h3>
                    <p className="text-xs text-primary font-medium uppercase tracking-wider">{student.profit}</p>
                  </div>
                </div>
                
                <div className="mb-6 relative overflow-hidden rounded-xl aspect-video bg-slate-900 group-hover:shadow-lg transition-all">
                   <img 
                     src={student.screenshot} 
                     alt="Profit Screenshot" 
                     className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                     referrerPolicy="no-referrer"
                     onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x225/1e293b/cbd5e1?text=Profit+Chart'; }}
                   />
                </div>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-900 text-xs text-slate-400 border border-slate-700">
                    策略: {student.strategy}
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed italic flex-grow">
                  "{student.comment}"
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StudentCasesView;
