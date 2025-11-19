
import React from 'react';
import { TrendingUp, ShieldCheck, Globe, Coins, Landmark, Calculator, ArrowRight, Check } from 'lucide-react';
import Button from './Button';

export const Raise: React.FC = () => {
  return (
    <section id="invest" className="py-32 bg-[#282a1e] relative overflow-hidden border-t-4 border-[#d3f54c]">
      
      {/* Background Decos */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d3f54c]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[#d3f54c]/30 bg-[#d3f54c]/5 mb-8">
             <Coins size={18} className="text-[#d3f54c]" />
             <span className="text-[#d3f54c] font-bold tracking-widest uppercase text-sm">Pre-Seed Round Open</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold text-[#fdfff9] mb-8 leading-[0.9]">
            Shape the future of <br />
            <span className="serif-accent italic text-[#d3f54c]">Global Trade.</span>
          </h2>
          <p className="text-2xl text-[#fdfff9]/70 font-light leading-relaxed">
            Generic Alternatives Limited (NI735578) is a Northern Irish technology company pivoting the global supply chain. We are disrupting the manual "agent" model with bare-metal automation.
          </p>
        </div>

        {/* Global Footprint - REDESIGNED */}
        <div className="bg-[#fdfff9] rounded-[3rem] p-8 md:p-12 mb-24 border-4 border-[#282a1e] relative overflow-hidden">
           {/* Background Pattern */}
           <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#282a1e 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
           
           <div className="relative z-10 flex flex-col xl:flex-row gap-12 items-center">
             <div className="xl:w-1/3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#282a1e] text-[#d3f54c] font-bold text-xs uppercase tracking-widest mb-6">
                   <Globe size={14} />
                   <span>Global Network</span>
                </div>
                <h3 className="text-5xl md:text-6xl font-bold text-[#282a1e] mb-6 leading-[0.9]">
                   Operational <br/>
                   <span className="serif-accent italic text-[#282a1e] opacity-50">Reach.</span>
                </h3>
                <p className="text-xl text-[#282a1e]/70 font-medium leading-relaxed">
                   We don't just write code; we move goods. Our pipelines are active across key manufacturing and consumption hubs.
                </p>
             </div>

             <div className="xl:w-2/3 w-full grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { code: 'CN', name: 'China', type: 'Sourcing' },
                  { code: 'VN', name: 'Vietnam', type: 'Sourcing' },
                  { code: 'US', name: 'USA', type: 'Market' },
                  { code: 'CO', name: 'Colombia', type: 'Market' },
                  { code: 'PA', name: 'Panama', type: 'Logistics' },
                  { code: 'EG', name: 'Egypt', type: 'Sourcing' },
                ].map((item, i) => (
                  <div key={i} className="bg-[#282a1e] text-[#fdfff9] p-6 rounded-[2rem] relative group hover:-translate-y-1 transition-transform cursor-default overflow-hidden border border-transparent hover:border-[#d3f54c]">
                     <div className="absolute top-0 right-0 p-4 opacity-20 text-4xl font-bold group-hover:opacity-100 group-hover:text-[#d3f54c] transition-all duration-500">{item.code}</div>
                     <div className="flex flex-col h-full justify-between relative z-10 gap-6">
                         <span className="inline-block bg-[#fdfff9]/10 text-[#d3f54c] text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md w-fit">{item.type}</span>
                         <span className="text-2xl font-bold">{item.name}</span>
                     </div>
                  </div>
                ))}
             </div>
           </div>
        </div>

        {/* The Thesis / Revolut Moment */}
        <div className="mb-24">
            <div className="bg-[#282a1e] border-2 border-[#fdfff9]/10 rounded-[3rem] p-8 md:p-12 relative overflow-hidden group hover:border-[#d3f54c]/50 transition-all duration-500">
                
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d3f54c]/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 text-[12rem] font-serif italic text-[#fdfff9]/5 leading-none pointer-events-none -translate-x-10 translate-y-20">
                    100x
                </div>

                <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                    {/* Left: The Narrative */}
                    <div className="flex flex-col justify-center">
                        <div className="inline-block mb-6">
                            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#d3f54c]/10 border border-[#d3f54c]/30 text-[#d3f54c] font-bold tracking-wider text-sm uppercase">
                                <TrendingUp size={16} />
                                <span>Market Opportunity</span>
                            </div>
                        </div>
                        
                        <h3 className="text-5xl md:text-6xl font-bold text-[#fdfff9] mb-8 leading-tight">
                            The <span className="text-[#d3f54c] relative inline-block px-2">
                                <span className="relative z-10">Revolut</span>
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#d3f54c]/20 -rotate-2"></span>
                            </span> Moment for <br/><span className="serif-accent italic font-light">Supply Chain.</span>
                        </h3>
                        
                        <p className="text-xl text-[#fdfff9]/80 mb-8 leading-relaxed font-light">
                            Early investors in Fintech giants saw <span className="text-[#fdfff9] font-bold border-b-2 border-[#d3f54c]">40,000% returns</span> because they replaced bank branches with app logic.
                            <br/><br/>
                            We are doing the same for the trillion-dollar sourcing industry. Replacing the fax machine with <strong className="text-[#d3f54c]">local inference.</strong>
                        </p>

                        <div className="space-y-4">
                            {[
                                "Automating Negotiation",
                                "Vectorizing Supply Chains",
                                "Disrupting Manual Sourcing"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-[#fdfff9]/5 border border-[#fdfff9]/5 hover:border-[#d3f54c] transition-colors group/item">
                                    <div className="w-8 h-8 rounded-full bg-[#d3f54c] flex items-center justify-center text-[#282a1e] group-hover/item:scale-110 transition-transform">
                                        <Check strokeWidth={3} size={16} />
                                    </div>
                                    <span className="text-lg font-bold text-[#fdfff9]">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: The Deal Structure */}
                    <div className="relative flex items-center">
                        {/* The 'Card' look */}
                        <div className="bg-[#fdfff9] rounded-[2.5rem] p-8 md:p-10 text-[#282a1e] shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 w-full relative z-10">
                            <div className="flex justify-between items-start mb-8 border-b-2 border-[#282a1e]/10 pb-6">
                                <div>
                                    <h4 className="text-3xl font-bold mb-1">Pre-Seed Round</h4>
                                    <p className="text-[#282a1e]/60 font-mono uppercase tracking-widest text-sm">Allocation Open</p>
                                </div>
                                <div className="w-12 h-12 bg-[#282a1e] rounded-full flex items-center justify-center text-[#d3f54c]">
                                    <Coins size={24} />
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-[#d3f54c] flex items-center justify-center text-[#282a1e] text-2xl font-bold shrink-0">
                                        01
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-bold">Valuation Cap</h5>
                                        <p className="text-[#282a1e]/70 text-sm leading-snug">Entering at the ground floor. Favorable terms for early believers.</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-[#282a1e] flex items-center justify-center text-[#d3f54c] text-2xl font-bold shrink-0">
                                        02
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-bold">20% Discount</h5>
                                        <p className="text-[#282a1e]/70 text-sm leading-snug">Guaranteed discount on conversion at the next major funding round.</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-[#282a1e] flex items-center justify-center text-[#d3f54c] text-2xl font-bold shrink-0">
                                        03
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-bold">SeedFAST</h5>
                                        <p className="text-[#282a1e]/70 text-sm leading-snug">Industry standard instrument. Agile deployment. No legal headaches.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 pt-6 border-t-2 border-[#282a1e]/10 flex justify-between items-center">
                                <span className="font-bold text-[#282a1e]/50 uppercase tracking-wider text-xs">Status</span>
                                <span className="bg-[#d3f54c] text-[#282a1e] px-4 py-1 rounded-full font-bold text-sm animate-pulse">
                                    Live & Filling
                                </span>
                            </div>
                        </div>
                        
                        {/* Background card for depth */}
                        <div className="absolute top-4 left-4 right-[-1rem] bottom-[-1rem] bg-[#d3f54c] rounded-[2.5rem] z-0 opacity-20 transform rotate-3"></div>
                    </div>
                </div>
            </div>
        </div>

        {/* UK Taxpayer Benefits - Redesigned to match Math Aesthetic */}
        <div className="mb-20">
             <div className="bg-[#fdfff9] rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
                
                 {/* Background Decor */}
                 <div className="absolute -left-20 -bottom-20 text-[#282a1e]/5 text-[20rem] font-serif italic font-bold pointer-events-none">
                    £
                 </div>

                 <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-[#282a1e] p-3 rounded-xl text-[#d3f54c]">
                                    <Landmark size={28} />
                                </div>
                                <span className="font-bold text-[#282a1e]/60 uppercase tracking-widest">Tax Efficient Investing</span>
                            </div>
                            <h3 className="text-4xl md:text-6xl font-bold text-[#282a1e]">
                                UK Taxpayer <br/><span className="serif-accent italic text-[#d3f54c] bg-[#282a1e] px-4 rounded-xl inline-block mt-2">Privileges</span>
                            </h3>
                        </div>
                        <div className="text-[#282a1e]/70 max-w-md text-right hidden md:block">
                            Leverage government schemes designed to de-risk innovation.
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Income Tax Relief */}
                        <div className="bg-[#282a1e] p-8 rounded-[2.5rem] text-[#fdfff9] relative group hover:-translate-y-2 transition-transform border border-[#282a1e]">
                            <div className="bg-[#d3f54c] w-14 h-14 rounded-xl flex items-center justify-center text-[#282a1e] mb-6 font-bold text-2xl">%</div>
                            <h4 className="text-3xl font-bold text-[#fdfff9] mb-4">Income Tax Relief</h4>
                            <p className="text-[#fdfff9]/70 text-lg">
                            Claim back up to <span className="text-[#d3f54c] font-bold">30-50%</span> of your investment against your income tax bill immediately.
                            </p>
                        </div>

                        {/* Tax Free Gains */}
                        <div className="bg-[#d3f54c] p-8 rounded-[2.5rem] relative group hover:-translate-y-2 transition-transform border border-[#d3f54c]">
                            <div className="bg-[#282a1e] w-14 h-14 rounded-xl flex items-center justify-center text-[#d3f54c] mb-6 font-bold text-2xl">
                                <TrendingUp />
                            </div>
                            <h4 className="text-3xl font-bold text-[#282a1e] mb-4">Tax-Free Gains</h4>
                            <p className="text-[#282a1e]/70 text-lg font-medium">
                            Hold shares for 3 years and pay <span className="text-[#282a1e] font-bold">zero Capital Gains Tax</span> on your returns. Keep 100% of the upside.
                            </p>
                        </div>

                        {/* Loss Relief */}
                        <div className="bg-transparent border-3 border-[#282a1e]/10 p-8 rounded-[2.5rem] hover:border-[#282a1e] transition-colors relative group hover:-translate-y-2">
                            <div className="bg-[#282a1e]/5 w-14 h-14 rounded-xl flex items-center justify-center text-[#282a1e] mb-6 font-bold text-2xl group-hover:bg-[#282a1e] group-hover:text-[#fdfff9] transition-colors">
                                <ShieldCheck />
                            </div>
                            <h4 className="text-3xl font-bold text-[#282a1e] mb-4">Loss Relief</h4>
                            <p className="text-[#282a1e]/70 text-lg">
                            If we fail, you can claim loss relief on the net amount at your highest tax rate.
                            </p>
                        </div>
                    </div>
                 </div>
            </div>
        </div>

        {/* The Math (Downside Protection) */}
        <div className="bg-[#fdfff9]/5 border-2 border-[#d3f54c]/30 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            {/* Decorative background math symbols */}
            <div className="absolute -right-20 -top-20 text-[#fdfff9]/5 text-[15rem] font-serif italic rotate-12 pointer-events-none font-bold">
                %
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                    <div className="flex items-center gap-4 mb-6">
                            <div className="bg-[#d3f54c] p-3 rounded-full text-[#282a1e]">
                            <Calculator size={32} />
                            </div>
                            <h3 className="text-4xl font-bold text-[#fdfff9]">The Downside <br/><span className="text-[#d3f54c]">Protection Math</span></h3>
                    </div>
                    <p className="text-xl text-[#fdfff9]/80 mb-8 leading-relaxed">
                        For high-bracket UK taxpayers, the risk is significantly mitigated by government schemes (SEIS/EIS). The government effectively subsidizes the risk of innovation.
                        <br/><br/>
                        <span className="text-sm italic opacity-60">*Example based on 45% tax payer + SEIS (50% relief). Not financial advice.</span>
                    </p>
                    <Button variant="primary" className="w-full md:w-auto">
                        Request Pitch Deck <ArrowRight />
                    </Button>
                </div>

                {/* The Calculation Card */}
                <div className="bg-[#282a1e] rounded-[2rem] p-8 border border-[#fdfff9]/10 relative">
                    <div className="space-y-6">
                        <div className="flex justify-between items-center border-b border-[#fdfff9]/10 pb-4">
                            <span className="text-xl text-[#fdfff9]/60">Investment</span>
                            <span className="text-2xl font-bold text-[#fdfff9]">£10,000</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-[#fdfff9]/10 pb-4">
                            <span className="text-xl text-[#d3f54c]">Income Tax Relief</span>
                            <span className="text-2xl font-bold text-[#d3f54c]">- £5,000</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-[#fdfff9]/10 pb-4 opacity-50">
                            <span className="text-lg text-[#fdfff9]/60">Loss Relief (If value = £0)</span>
                            <span className="text-xl font-bold text-[#fdfff9]">- £2,250</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                            <span className="text-xl font-bold text-[#fdfff9]">Real Capital at Risk</span>
                            <span className="text-3xl font-bold text-[#d3f54c]">~ £2,750</span>
                        </div>
                    </div>
                    <div className="mt-6 bg-[#d3f54c]/10 rounded-xl p-4 text-center">
                        <p className="text-[#d3f54c] font-bold text-sm">RISK MITIGATED: ~72.5%</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};
