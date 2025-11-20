
import React from 'react';
import { ArrowRight, Bot, Globe } from 'lucide-react';
import Button from './Button';

export const Hero: React.FC = () => {
  return (
    <section id="overview" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-32 pb-20">
      
      {/* Background textural elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-[#d3f54c]/10 rounded-full blur-[100px]" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#d3f54c]/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[90%] mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-[#d3f54c] mb-12 bg-[#d3f54c]/5 backdrop-blur-sm">
            <Globe size={20} className="text-[#d3f54c]" />
            <span className="text-[#d3f54c] text-sm font-extrabold tracking-widest uppercase">
              Distributed Sourcing Platform
            </span>
          </div>
          
          {/* Main Heading with Mixed Typography */}
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[0.95] mb-12 text-[#fdfff9]">
            We replace the <span className="serif-accent text-[#d3f54c] italic font-bold">agent</span>
            <br />
            with <span className="serif-accent italic text-[#fdfff9] font-bold">automation.</span>
          </h1>
          
          {/* Subheading */}
          <div className="max-w-3xl mb-16">
            <p className="text-xl md:text-3xl text-[#fdfff9]/80 font-light leading-relaxed">
              Generic Alternatives is a distributed sourcing, automation, and logistics enablement platform designed to replace the traditional China-based sourcing agent model with a <strong className="text-[#d3f54c] font-bold">data-driven workflow.</strong>
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
             <Button variant="primary" onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}>
                View Technology
                <ArrowRight size={24} />
             </Button>
             <Button variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                <Bot size={24} />
                Automation Logic
             </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
