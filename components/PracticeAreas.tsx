
import React from 'react';
import { PRACTICE_AREAS, COLORS } from '../constants';

const PracticeAreas: React.FC = () => {
  return (
    <section id="practices" className="py-24 bg-stone-100 overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Practice Areas</h2>
        <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: COLORS.primary }}></div>
        <p className="max-w-2xl mx-auto text-slate-600">
          Our expertise spans across multiple legal domains, ensuring comprehensive protection for our clients' interests in every sector of law.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTICE_AREAS.map((area, idx) => (
            <div 
              key={idx} 
              className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl flex flex-col h-[420px] bg-slate-900 ${
                idx === 3 || idx === 4 ? 'lg:translate-x-1/2' : '' // Subtle centering effect for the last two items on large screens
              }`}
            >
              {/* Background Image */}
              <img 
                src={area.image} 
                alt={area.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent group-hover:via-slate-900/20 transition-all duration-500"></div>
              
              {/* Content "Well" with refined padding */}
              <div className="relative mt-auto p-8 lg:p-10 flex flex-col items-start text-left">
                <div 
                  className="text-3xl mb-4 transition-all duration-300 transform group-hover:-translate-y-2"
                  style={{ color: COLORS.primary }}
                >
                  {area.icon}
                </div>
                
                <h3 className="text-xl font-serif text-white mb-3 tracking-wide group-hover:text-amber-500 transition-colors">
                  {area.title}
                </h3>
                
                <p className="text-slate-300 text-xs mb-6 leading-relaxed font-light opacity-90">
                  {area.description}
                </p>
                
                <a 
                  href="#contact" 
                  className="inline-block text-white text-[10px] uppercase tracking-[0.3em] font-bold border-b-2 border-transparent pb-1 hover:border-amber-500 transition-all"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
