
import React from 'react';
import { NEWS, COLORS } from '../constants';

const News: React.FC = () => {
  return (
    <section id="news" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Latest News</h2>
        <div className="w-24 h-1 mx-auto" style={{ backgroundColor: COLORS.primary }}></div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {NEWS.map((item, idx) => (
          <article key={idx} className="group bg-slate-50 overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
            <div className="overflow-hidden h-64">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.date}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: COLORS.primary }}>{item.category}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 hover:text-slate-600 cursor-pointer transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                {item.excerpt}
              </p>
              <button className="text-xs font-bold uppercase tracking-widest border-b-2 pb-1" style={{ borderColor: COLORS.primary }}>
                Read Article
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default News;
