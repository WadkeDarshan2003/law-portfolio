
import React, { useState } from 'react';
import { STATS, COLORS } from '../constants';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const tabContent = {
    mission: "Our mission is to provide accessible, high-quality legal representation while maintaining the highest ethical standards. We believe every case deserves a tailored strategy and an unyielding commitment to justice.",
    vision: "To be the most trusted legal partner for individuals and corporations, known for our strategic brilliance, integrity, and the successful resolution of complex legal challenges.",
    history: "Founded over 15 years ago, our practice has grown from a local advocacy firm into a distinguished legal house representing clients across the highest courts of the country."
  };

  const strengthsList = [
    'Courtroom advocacy and procedural compliance',
    'Clear, research-based legal advice',
    'Accurate drafting and pleadings',
    'Timely and transparent communication',
    'Professional Consultation'
  ];

  return (
    <section id="experience" className="relative py-32 bg-slate-950 text-white overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-900/10 -skew-x-12 translate-x-1/4"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          
          {/* Left Column: Key Statistics - Open Layout (No Boxes/Borders) */}
          <div className="lg:w-1/2">
            <div className="inline-block mb-4 px-4 py-1 border border-amber-900/30 text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold">
              Proven Results
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-16 leading-tight">Professional <br/>Strengths</h2>
            
            <div className="grid grid-cols-2 gap-y-16 gap-x-12">
              {STATS.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col items-start group transition-all"
                >
                  <span 
                    className="block text-5xl md:text-7xl font-serif mb-4 transition-transform duration-500 group-hover:-translate-y-2" 
                    style={{ color: COLORS.primary }}
                  >
                    {stat.value}
                  </span>
                  {/* Minimal accent line */}
                  <div className="w-12 h-0.5 mb-6 transition-all duration-500 group-hover:w-20" style={{ backgroundColor: COLORS.primary }}></div>
                  <span className="text-slate-400 uppercase tracking-[0.2em] text-[11px] md:text-xs font-bold leading-relaxed">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Mission / Vision Tabs */}
          <div className="lg:w-1/2 lg:pt-20">
            <div className="max-w-xl">
              <div className="flex border-b border-slate-900 mb-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
                {(['mission', 'vision', 'history'] as const).map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-bold border-b-2 transition-all ${
                      activeTab === tab ? 'border-amber-600 text-white' : 'border-transparent text-slate-600 hover:text-slate-400'
                    }`}
                  >
                    Our {tab}
                  </button>
                ))}
              </div>
              
              <div className="min-h-[160px]">
                <p className="text-slate-400 leading-relaxed mb-10 text-xl font-light">
                  {tabContent[activeTab as keyof typeof tabContent]}
                </p>
              </div>

              {/* Updated Strengths List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-12">
                {strengthsList.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-sm text-slate-400 font-medium list-none">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ backgroundColor: COLORS.primary }}></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </div>
              
              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="relative inline-block py-5 px-12 text-xs font-bold uppercase tracking-[0.3em] overflow-hidden group border border-amber-900/50"
                >
                  <span className="relative z-10 text-white group-hover:text-slate-950 transition-colors duration-300">Work With Niraj Jagtap</span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
