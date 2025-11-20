import React from 'react';
import { Navigation } from '../components/Header';
import { Footer } from '../components/Footer';
// @ts-ignore
import agentsContent from '../AGENTS.md?raw';

const AgentsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#282a1e] text-[#fdfff9] font-sans selection:bg-[#d3f54c] selection:text-[#282a1e]">
            <Navigation />

            <div className="fixed inset-0 z-0 bg-[radial-gradient(#d3f54c_2px,transparent_2px)] bg-[length:60px_60px] opacity-[0.02] pointer-events-none"></div>

            <main className="relative z-10 pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            <span className="text-[#fdfff9]">DESIGN</span> <span className="text-[#d3f54c] serif-accent italic">SYSTEM</span>
                        </h1>
                        <p className="text-xl text-[#fdfff9]/60">
                            The architectural patterns and visual language of Generic Alternatives.
                        </p>
                    </div>

                    <div className="bg-[#1a1c14] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden">
                        <pre className="whitespace-pre-wrap font-mono text-sm md:text-base text-[#fdfff9]/80 overflow-x-auto">
                            {agentsContent}
                        </pre>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AgentsPage;
