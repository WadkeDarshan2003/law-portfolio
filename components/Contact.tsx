
import React from 'react';
import { COLORS } from '../constants';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row shadow-2xl overflow-hidden">
        {/* Contact Info / Testimonial Side */}
        <div className="lg:w-1/2 bg-white p-12 lg:p-20">
          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" 
              alt="Niraj Portrait" 
              className="w-24 h-24 rounded-full object-cover mb-6 border-4"
              style={{ borderColor: COLORS.primary }}
            />
            <h3 className="text-2xl font-serif mb-2">Niraj Jagtap</h3>
            <span className="text-slate-400 uppercase tracking-widest text-xs font-bold">Principal Attorney</span>
          </div>

          <div className="space-y-8">
            <p className="text-slate-500 italic text-lg leading-relaxed">
              "Every client is more than a case file to us. We build lasting relationships based on trust and results."
            </p>
            
            <div className="space-y-4 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <HiOutlineLocationMarker className="text-2xl" style={{ color: COLORS.primary }} />
                <span className="text-slate-600">123 Legal Suite, Courthouse Plaza, Mumbai</span>
              </div>
              <div className="flex items-center gap-4">
                <HiOutlinePhone className="text-2xl" style={{ color: COLORS.primary }} />
                <span className="text-slate-600">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4">
                <HiOutlineMail className="text-2xl" style={{ color: COLORS.primary }} />
                <span className="text-slate-600">contact@nirajjagtap.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Side */}
        <div className="lg:w-1/2 p-12 lg:p-20 text-white" style={{ backgroundColor: COLORS.primary }}>
          <h2 className="text-3xl font-serif mb-10">Send A Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="First Name" 
                className="w-full bg-white/10 border-b border-white/30 p-4 focus:outline-none focus:border-white transition-all placeholder-white/50"
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                className="w-full bg-white/10 border-b border-white/30 p-4 focus:outline-none focus:border-white transition-all placeholder-white/50"
              />
            </div>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-white/10 border-b border-white/30 p-4 focus:outline-none focus:border-white transition-all placeholder-white/50"
            />
            <input 
              type="text" 
              placeholder="Phone Number" 
              className="w-full bg-white/10 border-b border-white/30 p-4 focus:outline-none focus:border-white transition-all placeholder-white/50"
            />
            <textarea 
              rows={4} 
              placeholder="How can we help you?" 
              className="w-full bg-white/10 border-b border-white/30 p-4 focus:outline-none focus:border-white transition-all placeholder-white/50"
            ></textarea>
            
            <button 
              type="submit"
              className="px-10 py-4 bg-slate-900 text-white font-bold uppercase tracking-widest text-xs hover:bg-slate-950 transition-all"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
