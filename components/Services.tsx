
import React from 'react';
import { COLORS } from '../constants';
import { HiOutlineChatAlt2, HiOutlineHome, HiOutlineShieldCheck, HiOutlineBeaker, HiOutlineScale, HiOutlineTruck } from 'react-icons/hi';

const Services: React.FC = () => {
  const serviceItems = [
    { icon: <HiOutlineChatAlt2 />, title: 'Free Consulting', desc: 'Initial case evaluation at no cost to determine the best legal path for you.' },
    { icon: <HiOutlineHome />, title: 'Property Law', desc: 'Expert handling of real estate transactions, tenant disputes, and property litigation.' },
    { icon: <HiOutlineShieldCheck />, title: 'Protection Law', desc: 'Ensuring your safety and intellectual property are shielded by robust legal frameworks.' },
    { icon: <HiOutlineBeaker />, title: 'Drug Control', desc: 'Specialized defense in cases involving controlled substances and regulatory compliance.' },
    { icon: <HiOutlineScale />, title: 'Criminal Defense', desc: 'Vigorous representation in all criminal matters, protecting your constitutional rights.' },
    { icon: <HiOutlineTruck />, title: 'Accident Claims', desc: 'Assistance in securing fair compensation for injuries and vehicle damages.' },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Services</h2>
        <div className="w-24 h-1 mx-auto" style={{ backgroundColor: COLORS.primary }}></div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {serviceItems.map((service, idx) => (
          <div key={idx} className="group p-10 bg-slate-50 hover:bg-slate-900 transition-all duration-500 shadow-sm hover:shadow-2xl">
            <div className="text-5xl mb-6 text-slate-400 group-hover:text-white group-hover:scale-110 transition-all">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{service.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors">
              {service.desc}
            </p>
            <div className="mt-8 overflow-hidden h-1">
               <div 
                className="h-full w-12 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: COLORS.primary }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
