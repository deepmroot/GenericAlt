import React from 'react';
import { Link } from 'react-router-dom';

const SectionCard: React.FC<{
  title: string;
  highlight?: string;
  copy: string;
  badge?: string;
}> = ({ title, highlight, copy, badge }) => (
  <div className="bg-[#1a1c14] border border-white/10 rounded-[2rem] p-8 flex flex-col gap-4 hover:border-[#d3f54c] transition">
    {badge && (
      <span className="self-start border border-[#d3f54c] text-[#d3f54c] uppercase tracking-[0.3em] text-xs rounded-full px-4 py-1">
        {badge}
      </span>
    )}
    <h3 className="text-2xl font-bold tracking-tight">
      {title}{' '}
      {highlight && (
        <span className="serif-accent italic text-[#d3f54c]">{highlight}</span>
      )}
    </h3>
    <p className="text-[#fdfff9]/80 leading-relaxed">{copy}</p>
  </div>
);

const StatPill: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="bg-white/5 border border-white/10 rounded-[2rem] px-6 py-4 flex flex-col gap-1">
    <span className="uppercase text-xs tracking-[0.3em] text-[#d3f54c]">{label}</span>
    <span className="text-3xl font-extrabold tracking-tight">{value}</span>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#282a1e] text-[#fdfff9] font-sans selection:bg-[#d3f54c] selection:text-[#282a1e] relative overflow-x-hidden">
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#d3f54c 2px, transparent 2px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      <header className="relative z-10 px-6 sm:px-10 lg:px-16 pt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#1a1c14] border border-white/10 flex items-center justify-center">
            <div className="w-6 h-6 rounded-xl bg-[#d3f54c]"></div>
          </div>
          <div>
            <p className="uppercase text-xs tracking-[0.3em] text-[#d3f54c]">Generic Alternatives</p>
            <p className="font-bold text-xl tracking-tight">Sovereign Intelligence</p>
          </div>
        </div>
        <nav className="flex items-center gap-6">
          <Link to="/invest" className="text-sm uppercase tracking-[0.3em] text-[#fdfff9]/80 hover:text-[#d3f54c]">
            Invest
          </Link>
          <a
            href="#capabilities"
            className="text-sm uppercase tracking-[0.3em] text-[#fdfff9]/80 hover:text-[#d3f54c]"
          >
            Capabilities
          </a>
          <Link
            to="/invest"
            className="bg-[#d3f54c] text-[#282a1e] rounded-full px-5 py-2 font-semibold hover:bg-[#fdfff9] transition"
          >
            Back Us
          </Link>
        </nav>
      </header>

      <main className="relative z-10 px-6 sm:px-10 lg:px-16 pb-24">
        <section className="grid lg:grid-cols-[1.2fr,0.8fr] gap-8 lg:gap-12 pt-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#d3f54c]"></span>
              <span className="uppercase text-xs tracking-[0.3em]">Autonomous Alternatives</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Build sovereign <span className="serif-accent italic text-[#d3f54c]">intelligence</span>
              <br /> without legacy agents.
            </h1>
            <p className="text-lg text-[#fdfff9]/80 leading-relaxed">
              Generic Alternatives is the operating system for teams that need industrial-grade AI workflows—auditable, secure,
              and fully aligned with their business logic.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/invest"
                className="bg-[#d3f54c] text-[#282a1e] rounded-full px-6 py-3 font-bold tracking-tight hover:bg-[#fdfff9] transition"
              >
                Explore the raise
              </Link>
              <a
                href="#roadmap"
                className="border border-[#fdfff9] text-[#fdfff9] rounded-full px-6 py-3 font-semibold hover:border-[#d3f54c] hover:text-[#d3f54c] transition"
              >
                View roadmap
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatPill label="Latency" value="Sub-1s loops" />
              <StatPill label="Controls" value="Audit-first" />
              <StatPill label="Coverage" value="Ops, Finance, R&D" />
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 backdrop-blur-xl shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <p className="uppercase text-xs tracking-[0.3em] text-[#d3f54c]">Stack Map</p>
              <span className="text-sm text-[#fdfff9]/70">Version 1.4</span>
            </div>
            <div className="grid gap-4">
              {["Data onboarding", "Policy engine", "Realtime reasoning", "Human verification"].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between bg-[#282a1e] border border-white/10 rounded-2xl px-4 py-3"
                >
                  <span className="font-semibold tracking-tight">{item}</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-[#d3f54c]">Ready</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="capabilities" className="mt-16 grid lg:grid-cols-3 gap-6">
          <SectionCard
            badge="Operations"
            title="Autonomous"
            highlight="Bento"
            copy="Structured bento grids orchestrate procurement, vendor analysis, and compliance without opaque agent chains."
          />
          <SectionCard
            badge="Finance"
            title="Deterministic"
            highlight="Controls"
            copy="Every decision is replayable with immutable logs, policy traces, and human-in-the-loop gates where they matter."
          />
          <SectionCard
            badge="Security"
            title="Sovereign"
            highlight="Guardrails"
            copy="Data never leaves your trust boundary; we ship sealed runtimes, strict IAM, and audit-ready evidence packages."
          />
        </section>

        <section id="roadmap" className="mt-16 bg-[#fdfff9] text-[#1a1c14] rounded-[3rem] p-10 border border-[#d3f54c]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="uppercase text-xs tracking-[0.3em] text-[#d3f54c]">Roadmap</p>
              <h2 className="text-3xl font-extrabold tracking-tight mt-2">
                Shipping on a 6-week cadence
                <span className="serif-accent italic text-[#d3f54c]">.</span>
              </h2>
              <p className="text-base text-[#1a1c14]/80 mt-3 max-w-2xl">
                We ship industrial capabilities first: observability, deterministic planning, and self-hosted control planes. Join
                the early investors accelerating our rollout across every regulated workflow.
              </p>
            </div>
            <Link
              to="/invest"
              className="bg-[#d3f54c] text-[#282a1e] rounded-full px-6 py-3 font-bold hover:bg-[#c6ea3e] transition"
            >
              View the invest deck
            </Link>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              { title: 'Q4', body: 'Observability console + policy simulations' },
              { title: 'Q1', body: 'Self-hosted control plane with sealed runtimes' },
              { title: 'Q2', body: 'Vertical starter packs for supply chain & finance' }
            ].map((item) => (
              <div key={item.title} className="bg-[#1a1c14] text-[#fdfff9] rounded-[2rem] p-5 border border-white/10">
                <p className="uppercase text-xs tracking-[0.3em] text-[#d3f54c]">{item.title} Delivery</p>
                <p className="font-bold text-xl mt-2 tracking-tight">{item.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
