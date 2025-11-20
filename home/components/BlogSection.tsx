import React, { useRef } from 'react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { ArrowRight, Factory, ShieldAlert, FileText, ArrowLeft, ArrowRight as ArrowNext, Terminal } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 600;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const posts = [
    {
      category: "Intelligence",
      title: <>Factory vs. <span className="font-serif italic text-lime">Trading Agent.</span></>,
      excerpt: "Stop paying the middleman tax. Verify if you are talking to the actual source.",
      readTime: "05 MIN",
      icon: Factory,
      image: "/assets/factory-laptop.jpg"
    },
    {
      category: "Risk Management",
      title: <>The <span className="font-serif italic text-lime">'Quality Fade'</span> Phenomenon.</>,
      excerpt: "Why your second batch is worse, and the contract clauses to prevent it.",
      readTime: "08 MIN",
      icon: ShieldAlert,
      image: "/assets/quality-fade.jpg"
    },
    {
      category: "Negotiation",
      title: <>Leveraged <span className="font-serif italic text-lime">Payment Structures.</span></>,
      excerpt: "How to structure deposits and escrow to hold the cards until delivery.",
      readTime: "06 MIN",
      icon: FileText,
      image: "/assets/vise-leverage.jpg"
    },
    {
      category: "Logistics",
      title: <>The Hidden Costs <span className="font-serif italic text-lime">of DDP.</span></>,
      excerpt: "Why 'Delivery Duty Paid' might be costing you 20% more than you think.",
      readTime: "07 MIN",
      icon: Terminal,
      image: "/assets/container-island.jpg"
    }
  ];

  return (
    <section id="intelligence" className="py-32 relative -mt-20 z-60">
      {/* 
          Structural Fix: 
          The parent section handles the Z-index and negative margin.
          The Shadow/Shape container is separate from the content to allow the shadow to render outside 
          while the background noise is clipped inside.
       */}

      {/* Shadow and Background Shape */}
      <div className="absolute inset-0 bg-charcoal rounded-t-[4rem] shadow-[0_-40px_80px_rgba(0,0,0,0.5)]">
        {/* Inner Container for Noise Clipping */}
        <div className="absolute inset-0 rounded-t-[4rem] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fdfff9 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10 px-4 lg:px-12">
        {/* Header & Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-8">
          <div>
            <Badge label="The Playbook" color="ivory" />
            <h2 className="text-6xl lg:text-8xl font-bold tracking-tighter mt-6 text-ivory leading-[0.9]">
              Sovereign <br />
              <span className="font-serif italic text-lime">Intelligence.</span>
            </h2>
          </div>

          {/* Carousel Controls */}
          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-ivory hover:bg-lime hover:text-olive transition-all duration-300 active:scale-95"
              aria-label="Scroll left"
            >
              <ArrowLeft size={24} strokeWidth={2} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-ivory hover:bg-lime hover:text-olive transition-all duration-300 active:scale-95"
              aria-label="Scroll right"
            >
              <ArrowNext size={24} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Container */}
      {/* Added py-20 to prevent hover effects from being clipped by the overflow container */}
      <div
        ref={scrollRef}
        className="relative z-10 flex overflow-x-auto snap-x snap-mandatory gap-6 py-20 px-4 lg:px-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {posts.map((post, i) => (
          <div key={i} className="snap-center shrink-0 w-[90vw] md:w-[700px] lg:w-[900px]">
            <Card className="!p-3 !bg-olive hover:!bg-[#282a1e] border-white/5 h-full transition-all duration-500 group shadow-xl hover:shadow-2xl">
              {/* Wide Card Layout: Content Left, Image Right (Desktop) / Stacked (Mobile) */}
              <div className="flex flex-col lg:flex-row h-full gap-6 lg:gap-0">

                {/* Text Content */}
                <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-between order-2 lg:order-1">
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-charcoal border border-white/10 flex items-center justify-center text-lime shadow-lg">
                        <post.icon size={20} strokeWidth={1.5} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-lime">
                          {post.category}
                        </span>
                        <span className="text-[10px] font-bold text-ivory/40 uppercase tracking-widest">
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-3xl lg:text-5xl font-bold text-ivory mb-6 leading-[1] tracking-tight group-hover:text-lime transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-lg text-ivory/60 leading-relaxed font-light line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-ivory font-bold uppercase tracking-widest text-sm cursor-pointer group-hover:text-lime transition-colors group/link">
                      Read Protocol <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Image Placeholder Div - Wider and Technical */}
                <div className="w-full lg:w-1/2 min-h-[280px] lg:min-h-full bg-charcoal/50 rounded-[2rem] relative overflow-hidden border border-white/5 order-1 lg:order-2 group-hover:border-white/10 transition-colors">
                  {/* Technical Grid Overlay */}
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }}></div>

                  {/* Render Image if available, else render placeholder */}
                  {/* @ts-ignore */}
                  {post.image ? (
                    <img src={post.image} alt="Visual" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity group-hover:mix-blend-normal" />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                      <div className="w-16 h-16 border border-dashed border-ivory/20 rounded-full flex items-center justify-center group-hover:border-lime/50 transition-colors duration-500">
                        <div className="w-2 h-2 bg-ivory/20 rounded-full group-hover:bg-lime transition-colors duration-500"></div>
                      </div>
                      <div className="flex items-center gap-2 text-ivory/30">
                        <span className="font-bold uppercase tracking-widest text-xs">System Image</span>
                        <span className="font-serif italic text-lg text-lime/50 group-hover:text-lime transition-colors">0{i + 1}</span>
                      </div>
                    </div>
                  )}

                  {/* Status Indicator */}
                  <div className="absolute top-6 right-6 z-10">
                    <div className="w-2 h-2 rounded-full bg-lime animate-pulse shadow-[0_0_10px_#d3f54c]"></div>
                  </div>
                </div>

              </div>
            </Card>
          </div>
        ))}

        {/* Spacer to ensure last card is fully viewable */}
        <div className="w-4 shrink-0"></div>
      </div>
    </section>
  );
};