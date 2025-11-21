import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { auth } from '../../utils/auth';

export const Hero: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = () => {
      const authenticated = auth.isAuthenticated();
      setIsAuthenticated(authenticated);
      if (authenticated) {
        const user = auth.getUser();
        setUserEmail(user?.email || null);
      }
    };
    checkAuth();
    window.addEventListener('storage', checkAuth);
    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen pt-64 pb-20 lg:pt-48 lg:pb-32 px-4 lg:px-12 flex flex-col justify-center overflow-hidden">
      <Navbar />
      {/* Adjusted grid breakpoint to lg:grid-cols-2 to ensure side-by-side on laptops */}
      <div className="max-w-[1920px] mx-auto w-full grid lg:grid-cols-2 gap-8 xl:gap-16 items-center relative z-10">

        {/* Left Content */}
        <div className="space-y-10">
          <Badge label="Sovereign Sourcing & Distribution" />

          {/* Updated sizes for massive impact */}
          <h1 className="text-7xl sm:text-8xl lg:text-[7rem] xl:text-[9rem] 2xl:text-[11rem] font-bold tracking-tighter leading-[0.85] text-ivory">
            Source smarter. <br />
            Ship faster. <br />
            <span className="font-serif italic text-lime block mt-2 lg:mt-4">Earn more.</span>
          </h1>

          <p className="text-xl lg:text-2xl xl:text-3xl text-ivory/70 max-w-2xl leading-relaxed font-light">
            The sovereign sourcing platform for industrial-grade operators.
            Direct factory access, enforced quality, and global distribution power
            without the middleman tax.
          </p>

          {isAuthenticated ? (
            <div className="pt-6">
              <h2 className="text-3xl font-bold text-lime mb-4">Welcome, {userEmail}!</h2>
              <p className="text-xl text-ivory/80 mb-6">Get in touch with us to start your project.</p>
              <div>
                <p className="text-lg text-ivory">Email: <a href="mailto:contact@generic-alternatives.com" className="underline">contact@generic-alternatives.com</a></p>
                <p className="text-lg text-ivory">Phone: +1 (555) 123-4567</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap gap-6 pt-6">
              <Button label="Start a project" className="text-lg lg:text-xl px-10 py-6" onClick={() => navigate('/form')} />
              <Button label="Explore solutions" variant="outline" icon={false} className="text-lg lg:text-xl px-10 py-6" />
            </div>
          )}
        </div>

        {/* Right Content - Overlapping/Floating Card */}
        <div className="relative mt-16 lg:mt-0 w-full flex justify-end lg:pl-8">
          <Card variant="light" className="w-full max-w-xl xl:max-w-3xl relative z-20 rotate-1 hover:rotate-0 transition-all duration-700 shadow-2xl border-[6px] border-white">
            <div className="absolute top-8 right-8">
              <div className="bg-olive text-lime px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 uppercase tracking-wider">
                <div className="w-2.5 h-2.5 bg-lime rounded-full animate-pulse"></div>
                Live Network
              </div>
            </div>

            <div className="text-sm font-bold uppercase tracking-widest text-olive/60 mb-6">Global Operations View</div>
            <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-olive mb-10 leading-[1.1] tracking-tight">
              "Optimized for high-volume sovereign commerce."
            </h3>

            <div className="space-y-4 mb-12">
              {[
                { l: "Factory Direct Partnerships", r: "Active", s: true },
                { l: "Streamlined Logistics", r: "Optimized", s: true },
                { l: "Quality Assurance", r: "Verified", s: true },
                { l: "Market Intelligence", r: "Real-time", s: true },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-6 rounded-[1.5rem] bg-olive text-ivory border border-olive/10 group hover:bg-lime hover:text-olive transition-colors cursor-default">
                  <span className="text-lg xl:text-2xl font-bold tracking-tight">{item.l}</span>
                  <span className="text-sm font-bold uppercase tracking-wider opacity-60">{item.r}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-8 border-t border-olive/10">
              <div className="flex items-center gap-2 text-base font-bold text-olive">
                <ShieldCheck size={20} />
                Escrow protected payments
              </div>
              <div className="flex items-center gap-2 text-base font-bold text-olive cursor-pointer hover:underline">
                View full playbook <ArrowUpRight size={20} />
              </div>
            </div>
          </Card>

          {/* Decorative Elements underneath */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-lime rounded-full blur-[150px] opacity-10 -z-10"></div>
        </div>
      </div>
    </section>
  );
};