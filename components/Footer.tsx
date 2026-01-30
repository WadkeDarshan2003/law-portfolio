
import React from 'react';
import { COLORS, NAV_ITEMS } from '../constants';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  const socials = [
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaLinkedinIn />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
  ];

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="flex items-center space-x-4 mb-8">
            <div 
              className="w-12 h-12 flex items-center justify-center font-serif text-3xl font-bold border-2"
              style={{ borderColor: COLORS.primary, color: COLORS.primary }}
            >
              NJ
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight leading-none">NIRAJ JAGTAP</span>
              <span className="text-[10px] font-semibold tracking-[0.2em] mt-1 text-amber-500">ADVOCATE</span>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
            Professional legal services dedicated to delivering justice and expert representation. Registered member of the Bar Council with over 15 years of active practice.
          </p>
          <div className="flex space-x-4">
            {socials.map((social, i) => (
              <a key={i} href={social.href} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-slate-800 transition-colors text-slate-400 hover:text-white">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-serif mb-8 border-b border-slate-900 pb-4">Quick Links</h4>
          <nav className="flex flex-col space-y-4">
            {NAV_ITEMS.map(item => (
              <a key={item.label} href={item.href} className="text-slate-400 text-sm hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="text-lg font-serif mb-8 border-b border-slate-900 pb-4">Our Practice</h4>
          <nav className="flex flex-col space-y-4">
            {['Corporate Law', 'Criminal Defense', 'Family Law', 'Estate Planning', 'Civil Litigation'].map(label => (
              <a key={label} href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="text-lg font-serif mb-8 border-b border-slate-900 pb-4">Newsletter</h4>
          <p className="text-slate-400 text-sm mb-6">Subscribe to receive legal insights and case updates.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none w-full"
            />
            <button className="px-6 py-3 text-xs uppercase font-bold" style={{ backgroundColor: COLORS.primary }}>
              Go
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Niraj Jagtap. All Rights Reserved.
        </p>
        <div className="flex gap-6 text-slate-500 text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
