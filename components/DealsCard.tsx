import React from 'react';
import { DEALS } from '../constants';
import Button from './Button';

const DealsCard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 max-w-md mx-auto mb-20 shadow-xl">
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="text-orange-500 text-xl">🔥</span>
        <h2 className="text-slate-900 font-bold text-lg">本月前五优惠</h2>
      </div>
      <p className="text-center text-xs text-slate-500 mb-4">认证公司，顶级折扣</p>
      
      <div className="space-y-4">
        {DEALS.map((deal) => (
          <div key={deal.id} className="flex items-center justify-between p-2 rounded hover:bg-slate-50 transition">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 ${deal.iconBgClass} rounded flex items-center justify-center`}>
                <i className={`${deal.iconClass} ${deal.iconColorClass}`}></i>
              </div>
              <div className="text-left">
                <div className="text-slate-900 text-sm font-medium">{deal.name}</div>
                <div className="text-xs text-slate-500">{deal.discount}</div>
              </div>
            </div>
            <Button 
              href={deal.link} 
              variant="primary" 
              className="text-xs px-3 py-1.5 rounded"
            >
              去购买
            </Button>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center text-xs text-slate-500 border-t border-slate-200 pt-3">
        使用优惠码 <span className="bg-slate-200 px-1 rounded text-slate-700 font-medium">Alex</span> 等享最低折扣
      </div>
    </div>
  );
};

export default DealsCard;