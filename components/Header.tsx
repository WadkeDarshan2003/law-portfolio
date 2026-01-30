
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, COLORS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div 
            className="w-12 h-12 flex items-center justify-center font-serif text-2xl font-bold border-2 shrink-0"
            style={{ borderColor: COLORS.primary, color: COLORS.primary }}
          >
            NJ
          </div>
          <div className="flex flex-col">
            <span className={`text-xl md:text-2xl font-bold tracking-tight leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              NIRAJ JAGTAP
            </span>
            <span className={`text-[10px] md:text-xs font-semibold tracking-[0.3em] mt-1 ${isScrolled ? 'text-amber-700' : 'text-amber-400'}`}>
              ADVOCATE
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[11px] uppercase tracking-widest font-bold hover:text-amber-600 transition-colors ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ color: isScrolled ? '#0f172a' : 'white' }}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="xl:hidden bg-white w-full py-4 border-t shadow-xl">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-6 py-3 text-sm uppercase tracking-widest text-slate-700 font-bold hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
