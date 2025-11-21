import React, { useCallback, useEffect, useState } from 'react';
import { ArrowRight, Check, ArrowLeft, Command, Terminal, Circle } from 'lucide-react';
import { clsx } from 'clsx';
import { OnboardingWidget } from './onboardingWidgets';
import { CountryInput } from './CountryInput';
import { FormData } from '../types';

const initialData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  whatsapp: '',
  brandName: '',
  website: '',
  whatSell: '',
  whatSource: '',
  orderVolume: '',
  expectedOrderSize: '',
  country: '',
  experience: '',
  references: [],
  budget: '',
  timeline: ''
};

interface StepSpec {
  id: number;
  title: string;
  description?: string;
  render: (data: FormData, setData: (patch: Partial<FormData>) => void, onNext: () => void) => React.ReactNode;
  isInformational?: boolean;
  submitLabel?: string;
}

// Validation Helpers
const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhone = (phone: string) => /^[\d\+\-\(\)\s]{7,}$/.test(phone);

// Styled Components
const Field: React.FC<{label: string; children: React.ReactNode}> = ({label, children}) => (
  <label className="block w-full space-y-4">
    <div className="flex items-center gap-3">
      <div className="w-1.5 h-1.5 bg-[#d3f54c] rounded-full" />
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d3f54c] font-bold">{label}</span>
    </div>
    {children}
  </label>
);

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className="w-full bg-[#1a1c14] border-2 border-[#fdfff9]/10 rounded-[2rem] px-8 py-6 text-xl text-[#fdfff9] placeholder:text-[#fdfff9]/20 focus:outline-none focus:border-[#d3f54c] focus:bg-[#282a1e] transition-all duration-300 font-medium"
  />
);

const TextArea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    {...props}
    className="w-full bg-[#1a1c14] border-2 border-[#fdfff9]/10 rounded-[2rem] px-8 py-6 text-xl text-[#fdfff9] placeholder:text-[#fdfff9]/20 focus:outline-none focus:border-[#d3f54c] focus:bg-[#282a1e] transition-all duration-300 font-medium min-h-[240px] resize-none leading-relaxed"
  />
);

const RadioGroup: React.FC<{value:string; onChange:(v:string)=>void; options:string[]}> = ({value,onChange,options}) => (
  <div className="flex flex-col gap-3">
    {options.map((opt, idx) => {
      const active = value===opt;
      return (
        <button 
          type="button" 
          key={opt} 
          onClick={()=>onChange(opt)} 
          className={clsx(
            'w-full text-left px-8 py-6 rounded-[2rem] border-2 transition-all duration-300 group relative overflow-hidden flex items-center justify-between',
            active 
              ? 'border-[#d3f54c] bg-[#1a1c14] text-[#d3f54c]' 
              : 'border-[#fdfff9]/5 hover:border-[#d3f54c] bg-[#1a1c14]/40 text-[#fdfff9]/60 hover:text-[#fdfff9]'
          )}
        > 
          <div className="flex items-center gap-6">
            <span className="font-mono text-xs opacity-30">0{idx+1}</span>
            <span className="font-medium text-lg tracking-tight font-sans">{opt}</span>
          </div>
          {active && <div className="w-3 h-3 bg-[#d3f54c] rounded-full" />}
        </button>
      );
    })}
  </div>
);

// Steps Definition
const Steps: StepSpec[] = [
  {
    id: 1,
    title: 'Welcome to Generic Alternatives',
    description: 'Let’s quickly learn about your business so we can see if we’re the right sourcing partner for you.\n\nDuring Q4 we only take on clients who ship 30+ orders per day or meet our MOQ requirements.',
    render: () => null,
    isInformational: true
  },
  {
    id: 2,
    title: "What's your name and email?",
    render: (d, set) => (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="First name">
            <Input 
              value={d.firstName} 
              onChange={e=>set({firstName:e.target.value})} 
              autoFocus 
              placeholder="Jane" 
            />
          </Field>
          <Field label="Last name">
            <Input 
              value={d.lastName} 
              onChange={e=>set({lastName:e.target.value})} 
              placeholder="Doe" 
            />
          </Field>
        </div>
        <Field label="Email address">
          <Input 
            type="email" 
            value={d.email} 
            onChange={e=>set({email:e.target.value})} 
            placeholder="jane@company.com" 
            className={clsx(
              "w-full bg-[#1a1c14] border-2 rounded-[2rem] px-8 py-6 text-xl text-[#fdfff9] placeholder:text-[#fdfff9]/20 focus:outline-none transition-all duration-300 font-medium",
              d.email && !isValidEmail(d.email) ? "border-red-500 focus:border-red-500" : "border-[#fdfff9]/10 focus:border-[#d3f54c]"
            )}
          />
        </Field>
      </div>
    )
  },
  {
    id: 3,
    title: "What's your WhatsApp number?",
    description: "We'll be reaching out to you on WhatsApp soon, so please keep an eye out.",
    render: (d,set) => (
      <Field label="WhatsApp Number">
        <Input 
          value={d.whatsapp} 
          onChange={e => {
            // Only allow phone characters
            const val = e.target.value;
            if (/^[\d\+\-\(\)\s]*$/.test(val)) {
              set({whatsapp: val});
            }
          }} 
          autoFocus 
          placeholder="+1 (555) 000-0000" 
          type="tel"
        />
      </Field>
    )
  },
  {
    id: 4,
    title: "What's your business or brand name?",
    description: 'If you don’t have a brand name yet, you can enter “N/A”.',
    render: (d,set) => (
      <div className="space-y-8">
        <Field label="Business / Brand Name">
          <Input value={d.brandName} onChange={e=>set({brandName:e.target.value})} autoFocus placeholder="Acme Corp" />
        </Field>
        <Field label="Website (optional)">
          <Input value={d.website} onChange={e=>set({website:e.target.value})} placeholder="www.acme.com" />
        </Field>
      </div>
    )
  },
  {
    id: 5,
    title: 'What products are you selling or planning to sell?',
    description: 'Give a simple description. This helps us match you with the right factories.',
    render: (d,set) => (
      <Field label="Products description">
        <TextArea value={d.whatSell} onChange={e=>set({whatSell:e.target.value})} autoFocus placeholder="e.g. Ergonomic office chairs made from recycled materials..." />
      </Field>
    )
  },
  {
    id: 6,
    title: 'What are you currently looking to source?',
    description: 'List the products you want quotes for.',
    render: (d,set) => (
      <Field label="Items to source">
        <TextArea value={d.whatSource} onChange={e=>set({whatSource:e.target.value})} autoFocus placeholder="e.g. 500 units of Model X Chair in Black..." />
      </Field>
    )
  },
  {
    id: 7,
    title: 'How many orders do you ship per day?',
    render: (d,set) => (
      <RadioGroup value={d.orderVolume} onChange={v=>set({orderVolume:v})} options={['0 (just researching)','1–10 per day','10–30 per day','30–100 per day','100+ per day']} />
    )
  },
  {
    id: 8,
    title: 'What order size are you expecting?',
    render: (d,set) => (
      <RadioGroup value={d.expectedOrderSize} onChange={v=>set({expectedOrderSize:v})} options={['Under $500','$500–$1,000','$1,000–$3,000','$3,000–$10,000','$10,000+']} />
    )
  },
  {
    id: 9,
    title: 'Where will this order ship to?',
    description: 'We route your request to the correct logistics partner.',
    render: (d,set) => (
      <Field label="Destination Country">
        <CountryInput value={d.country} onChange={val=>set({country:val})} autoFocus placeholder="United States" />
      </Field>
    )
  },
  {
    id: 10,
    title: 'Have you sourced from China before?',
    render: (d,set) => (
      <RadioGroup value={d.experience} onChange={v=>set({experience:v})} options={['Yes, multiple times','Once or twice','No, this is my first time']} />
    )
  },
  {
    id: 11,
    title: 'Do you have any reference images?',
    description: 'Upload photos, sketches, links, screenshots — anything that helps us get your quote right.',
    render: (d,set) => (
      <Field label="Upload Reference Files">
         <div className="relative w-full h-64 rounded-[2rem] border-2 border-dashed border-[#fdfff9]/10 hover:border-[#d3f54c] bg-[#1a1c14] transition-all duration-300 flex flex-col items-center justify-center group cursor-pointer overflow-hidden">
            <input 
              type="file" 
              multiple 
              className="absolute inset-0 opacity-0 cursor-pointer z-10"
              onChange={e=>set({references: Array.from(e.target.files||[])})} 
            />
            <div className="w-16 h-16 rounded-full bg-[#282a1e] flex items-center justify-center mb-6 border border-[#fdfff9]/5 group-hover:scale-110 transition-transform duration-500">
              <ArrowRight className="w-6 h-6 text-[#d3f54c] -rotate-90" />
            </div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#fdfff9]/40 group-hover:text-[#d3f54c] transition-colors">Drop files / Click to Browse</span>
         </div>
         {d.references.length > 0 && (
            <div className="mt-6 space-y-3">
              {d.references.map((f, i) => (
                <div key={i} className="text-xs font-mono text-[#d3f54c] flex items-center justify-between px-6 py-4 rounded-[1.5rem] bg-[#d3f54c]/5 border border-[#d3f54c]/20">
                   <span className="truncate">{f.name}</span>
                   <Check className="w-4 h-4" />
                </div>
              ))}
            </div>
         )}
      </Field>
    )
  },
  {
    id: 12,
    title: "What's your target budget and timeline?",
    render: (d,set) => (
      <div className="space-y-8">
        <Field label="Target budget">
          <Input 
            value={d.budget} 
            onChange={e => {
               // Allow currency symbols, numbers, commas, dots
               const val = e.target.value;
               if (/^[\d\.,\$\s]*$/.test(val)) {
                 set({budget: val});
               }
            }} 
            autoFocus 
            placeholder="$5,000 USD" 
          />
        </Field>
        <Field label="Production Start">
          <Input value={d.timeline} onChange={e=>set({timeline:e.target.value})} placeholder="e.g. ASAP, 30 days..." />
        </Field>
      </div>
    )
  },
  {
    id: 13,
    title: 'How our process works',
    description: '• We match you with the right factory\n• We negotiate prices and prepare quotes\n• We oversee QC, packaging, and shipment\n• We provide transparent pricing with no hidden agent fees\n• We communicate directly with you via WhatsApp and CRM',
    render: () => null,
    isInformational: true
  },
  {
    id: 14,
    title: 'Ready to get started?',
    description: 'By submitting, you’ll receive:\n\n✔ Your sourcing summary\n✔ Price estimates\n✔ Factory match\n✔ Next steps',
    render: () => null,
    isInformational: true,
    submitLabel: 'Submit Request'
  },
  {
    id: 15,
    title: "You're all set!",
    description: 'We have received your request. We will be reaching out to you on WhatsApp shortly to finalize your sourcing details.',
    render: () => null,
    isInformational: true
  }
];

export const TypeformOnboarding: React.FC = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [data, setData] = useState<FormData>(initialData);
  const current = Steps[stepIndex];

  const patch = useCallback((p: Partial<FormData>) => setData(d => ({...d, ...p})), []);
  
  const next = useCallback(() => { 
    if (stepIndex < Steps.length - 1) {
      setStepIndex(i => i + 1); 
    }
  }, [stepIndex]);
  
  const prev = useCallback(() => { 
    if (stepIndex > 0) {
      setStepIndex(i => i - 1); 
    }
  }, [stepIndex]);

  // Determine if the user can proceed based on the current step's validation logic
  const canProceed = (() => {
    switch (current.id) {
      case 2: // Name & Email
        return !!(data.firstName.trim() && data.lastName.trim() && isValidEmail(data.email));
      case 3: // WhatsApp
        return !!data.whatsapp.trim();
      case 4: // Brand Name (Website is optional)
        return !!data.brandName.trim();
      case 5: // What are you selling
        return !!data.whatSell.trim();
      case 6: // What to source
        return !!data.whatSource.trim();
      case 7: // Order volume
        return !!data.orderVolume;
      case 8: // Expected order size
        return !!data.expectedOrderSize;
      case 9: // Country
        return !!data.country.trim();
      case 10: // Experience
        return !!data.experience;
      case 12: // Budget & Timeline
        return !!(data.budget.trim() && data.timeline.trim());
      default: // Informational steps or optional file uploads (Step 11)
        return true;
    }
  })();

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (document.activeElement?.tagName === 'TEXTAREA') return;
      if (current.id === 15) return;
      
      if (!canProceed) return;

      if (current.submitLabel === 'Submit Request') { 
        console.log('Submitting onboarding data', data); 
        next(); 
      } else { 
        next(); 
      }
    }
  }, [current, data, next, canProceed]);

  useEffect(() => { 
    window.addEventListener('keydown', handleKey); 
    return () => window.removeEventListener('keydown', handleKey); 
  }, [handleKey]);

  const progress = ((stepIndex + 1) / Steps.length) * 100;
  
  const words = current.title.split(' ');
  const accent = words.slice(0, 3).join(' ');
  const rest = words.slice(3).join(' ');

  return (
    <div className="min-h-screen w-full bg-[#282a1e] text-[#fdfff9] overflow-hidden flex">
      
      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-50" style={{ backgroundImage: 'radial-gradient(#d3f54c 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>

      {/* Left Panel: Form - Fixed width or % */}
      <div className="w-full lg:w-[55%] h-screen flex flex-col p-8 md:p-16 lg:p-24 overflow-y-auto relative z-10 no-scrollbar">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12 shrink-0">
          <div className="flex items-center gap-3">
             <div className="w-3 h-3 bg-[#d3f54c] rounded-full animate-pulse" />
             <div className="font-bold tracking-tight text-xl">GENERIC<span className="text-[#d3f54c]">.ALT</span></div>
          </div>
          <div className="font-mono text-[10px] tracking-[0.2em] opacity-30">SYS_V2.4</div>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-xl mb-8 shrink-0">
           <div className="flex justify-between text-[10px] font-mono uppercase tracking-[0.2em] mb-4">
              <span className="text-[#d3f54c]">Sequence {current.id.toString().padStart(2, '0')}</span>
              <span className="opacity-30">Total {Steps.length}</span>
           </div>
           <div className="h-[2px] w-full bg-[#fdfff9]/5 rounded-full overflow-hidden">
              <div className="h-full bg-[#d3f54c] transition-all duration-700 ease-out" style={{ width: `${progress}%` }} />
           </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 w-full max-w-xl flex flex-col justify-center min-h-0">
          <div className="mb-6">
             <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.05] mb-4">
               <span className="font-serif italic text-[#d3f54c] block mb-2">{accent}</span>
               {rest}
             </h1>
             {current.description && (
                <p className={clsx(
                  "leading-relaxed whitespace-pre-line max-w-lg transition-all duration-300",
                  current.id === 15 
                    ? "text-2xl lg:text-3xl text-[#d3f54c] font-medium tracking-tight" 
                    : "text-lg text-[#fdfff9]/60"
                )}>
                   {current.description}
                </p>
             )}
          </div>

          <div className="animate-fadeIn">
             {current.render(data, patch, next)}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-10 flex items-center gap-6 shrink-0 pb-8">
           {stepIndex > 0 && stepIndex < 14 && (
              <button onClick={prev} className="w-16 h-16 rounded-full border-2 border-[#fdfff9]/10 hover:border-[#d3f54c] text-[#fdfff9]/40 hover:text-[#d3f54c] flex items-center justify-center transition-all duration-300">
                 <ArrowLeft size={24} />
              </button>
           )}
           
           {current.id < 15 && (
             <button 
               onClick={() => {
                 if (current.submitLabel === 'Submit Request') console.log(data);
                 next();
               }}
               disabled={!canProceed}
               className={clsx(
                 "h-16 px-10 rounded-full font-bold tracking-wide text-base flex items-center gap-4 transition-all duration-300 group",
                 canProceed ? "bg-[#d3f54c] hover:bg-[#fdfff9] text-[#282a1e]" : "bg-[#1a1c14] border border-[#fdfff9]/10 text-[#fdfff9]/20 cursor-not-allowed"
               )}
             >
               <span>{current.submitLabel || 'Continue'}</span>
               <ArrowRight size={20} className={clsx("transition-transform", canProceed && "group-hover:translate-x-1")} />
             </button>
           )}
        </div>
      </div>

      {/* Right Panel: Widget - Sticky/Fixed */}
      <div className="hidden lg:flex w-[45%] h-screen bg-[#1a1c14] relative flex-col items-center justify-center p-16 border-l border-[#fdfff9]/5 overflow-hidden">
         {/* Background Accents */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-[#282a1e] via-[#1a1c14] to-[#1a1c14] opacity-80" />
         <div className="absolute top-0 right-0 p-12 opacity-20">
            <Terminal size={32} className="text-[#d3f54c]" />
         </div>
         <div className="absolute bottom-12 left-12 flex items-center gap-3 opacity-20">
            <Circle size={10} className="text-[#d3f54c] fill-[#d3f54c] animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Live_Input_Stream</span>
         </div>

         {/* The Widget Render */}
         <div className="relative z-10 w-full max-w-md">
            <OnboardingWidget step={current.id} data={data} progress={progress} />
         </div>
      </div>

    </div>
  );
};