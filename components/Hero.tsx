
import React from 'react';
import { COLORS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2070')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h3 className="text-white text-base md:text-lg uppercase tracking-[0.4em] mb-4 animate-fadeIn opacity-90">
          Dynamic Legal Professional
        </h3>
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif mb-6 max-w-5xl mx-auto leading-tight">
          Experienced Advocate
        </h1>
        <div 
          className="w-24 h-1 mx-auto mb-8" 
          style={{ backgroundColor: COLORS.primary }}
        ></div>
        <p className="text-white/80 text-lg md:text-2xl font-light tracking-wide max-w-3xl mx-auto mb-10 italic">
          Expert in Criminal Law and Arbitration
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <a 
            href="#contact"
            className="px-10 py-4 text-white uppercase tracking-widest text-sm font-semibold transition-all hover:brightness-110 hover:shadow-2xl"
            style={{ backgroundColor: COLORS.primary }}
          >
            Request Consultation
          </a>
          <a 
            href="#practices"
            className="px-10 py-4 border border-white/50 text-white uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-slate-900 transition-all"
          >
            Our Expertise
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50">
        <span className="text-[10px] uppercase tracking-[0.3em] mb-3">Discover More</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
