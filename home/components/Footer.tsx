import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
    const navLinks = [
        { label: 'Invest', badge: 'NEW', href: '/invest' },
        { label: 'Supplying', href: '#process' },
        { label: 'FAQ', href: '#how-it-works' },
        { label: 'Benefits', href: '#solutions' },
        { label: 'Partners', href: '#partners' },
        { label: 'Blogs', href: '#intelligence' },
        { label: 'Jobs', href: '#contact' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <footer id="contact" className="bg-ivory pt-32 pb-24 px-4 lg:px-12 rounded-t-[4rem] relative overflow-hidden z-70 -mt-20">

            {/* Background Grid Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#282a1e 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>

            <div className="max-w-[1920px] mx-auto relative z-10 flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-24">

                {/* Brand Column */}
                <div className="flex flex-col items-center xl:items-start gap-6 text-center xl:text-left shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-olive rounded-full flex items-center justify-center text-lime">
                            <ShieldCheck size={24} strokeWidth={2.5} />
                        </div>
                        <span className="font-bold tracking-tight text-olive text-3xl">GENERIC<span className="text-lime font-serif italic px-1 bg-olive ml-1 rounded-sm">ALT</span></span>
                    </div>
                    <div className="text-olive/40 text-sm font-bold">
                        © 2024 Generic Alternatives Inc.
                    </div>
                </div>

                {/* Navigation Links - Centered Block */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href} className="group flex items-center gap-2 text-lg font-bold text-olive/70 hover:text-olive transition-colors">
                            {link.label}
                            {link.badge && (
                                <span className="bg-lime text-olive text-[9px] px-1.5 py-0.5 rounded-md font-extrabold uppercase tracking-wider group-hover:bg-olive group-hover:text-lime transition-colors">{link.badge}</span>
                            )}
                        </a>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-6 shrink-0">
                    <Link to="/login" className="text-sm font-bold text-olive hover:text-olive/70 transition-colors whitespace-nowrap uppercase tracking-widest">Log In</Link>
                    <Link to="/signup" className="bg-olive text-lime rounded-full px-8 py-4 text-sm font-bold hover:bg-lime hover:text-olive transition-colors uppercase tracking-widest whitespace-nowrap">
                        Start Sourcing
                    </Link>
                </div>
            </div>

            {/* Massive Watermark */}
            <div className="hidden 2xl:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[40%] pointer-events-none select-none opacity-[0.03]">
                <span className="text-[15rem] font-bold text-olive tracking-tighter whitespace-nowrap">GENERIC ALT</span>
            </div>
        </footer>
    );
};
