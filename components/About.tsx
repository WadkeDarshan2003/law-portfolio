
import React from 'react';
import { COLORS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Column: Image Container */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="relative max-w-xs md:max-w-sm w-full"> 
            <div className="relative z-10 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="Adv. Niraj Jagtap" 
                className="w-full aspect-[4/5] object-cover block"
              />
            </div>
            
            {/* Decorative frame */}
            <div 
              className="absolute -top-6 -left-6 w-full h-full border-2 -z-1"
              style={{ borderColor: COLORS.primary }}
            ></div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-10 bg-white p-6 shadow-2xl hidden md:block z-20 border-l-4" style={{ borderLeftColor: COLORS.primary }}>
              <span className="block text-4xl font-serif font-bold leading-none" style={{ color: COLORS.primary }}>15+</span>
              <span className="text-slate-500 uppercase tracking-widest text-[10px] font-bold block mt-2">Years of Excellence</span>
            </div>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
              Professional Overview
            </h2>
          </div>
          
          <div className="space-y-6 text-slate-600">
            <p className="text-lg leading-relaxed font-light">
              I am a practicing Advocate based in Pune, with experience across criminal law, arbitration, consumer protection, and civil litigation. I represent individual clients, businesses, and financial institutions in matters requiring careful legal assessment, structured strategy, and effective courtroom advocacy.
            </p>
            <p className="text-base leading-relaxed">
              My practice includes independent handling of criminal cases involving financial frauds, bodily offences, bail and remand proceedings, as well as representation in arbitration matters under the Arbitration and Conciliation Act, 1996. I also regularly appear before District, State, and National Consumer Forums in consumer dispute matters.
            </p>
            <p className="text-base leading-relaxed border-l-2 pl-6 py-2 border-amber-800/20 italic">
              With a strong foundation in legal drafting and pleadings, I ensure that every case is supported by precise documentation, thorough legal research, and procedural compliance. My approach is practical, transparent, and focused on achieving legally sound outcomes while keeping clients informed at every stage of the proceedings.
            </p>
          </div>
          
          <div className="pt-6">
            <a 
              href="#timeline"
              className="inline-block px-10 py-4 transition-all font-bold text-xs uppercase tracking-[0.2em] text-white hover:brightness-110 shadow-lg"
              style={{ backgroundColor: COLORS.primary }}
            >
              Check the CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
