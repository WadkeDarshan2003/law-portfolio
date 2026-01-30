
import React from 'react';
import { TIMELINE, COLORS } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Professional Timeline</h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: COLORS.primary }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-200"></div>

          <div className="space-y-16">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className={`flex items-center w-full ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/2"></div>
                <div className="relative z-10">
                  <div 
                    className="w-4 h-4 rounded-full border-4 border-white shadow"
                    style={{ backgroundColor: COLORS.primary }}
                  ></div>
                </div>
                <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="bg-slate-50 p-8 shadow-lg hover:shadow-xl transition-shadow border-t-2" style={{ borderColor: COLORS.primary }}>
                    <span 
                      className="inline-block px-3 py-1 text-white text-[10px] font-bold uppercase tracking-widest mb-4"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                    <p className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-60" style={{ color: COLORS.primary }}>
                      {item.organization}
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
