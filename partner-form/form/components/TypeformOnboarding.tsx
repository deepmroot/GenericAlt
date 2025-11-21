
import React, { useCallback, useEffect, useState } from 'react';
import { ArrowRight, ArrowLeft, Terminal, Circle, AlertCircle, CheckCircle } from 'lucide-react';
import { clsx } from 'clsx';
import { OnboardingWidget } from './onboardingWidgets';
import { FormData } from '../types';
import { CountryInput } from './CountryInput';

const initialData: FormData = {
  companyName: '',
  website: '',
  role: '',
  businessType: '',
  businessDescription: '',
  clientRevenue: '',
  partnershipVision: '',
  valueAdd: '',
  firstName: '',
  lastName: '',
  email: '',
  whatsapp: '',
  referralSource: '',
  brandName: '',
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
  render: (
    data: FormData, 
    setData: (patch: Partial<FormData>) => void, 
    onNext: () => void,
    errors: Record<string, string>
  ) => React.ReactNode;
  isInformational?: boolean;
  submitLabel?: string;
}

// --- COMPONENTS ---

const Field: React.FC<{label: string; children: React.ReactNode}> = ({label, children}) => (
  <label className="block w-full space-y-4">
    <div className="flex items-center gap-3">
      <div className="w-1.5 h-1.5 bg-[#d3f54c] rounded-full" />
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d3f54c] font-bold">{label}</span>
    </div>
    {children}
  </label>
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  showErrorIcon?: boolean;
}

const Input = ({ error, showErrorIcon = true, className, ...props }: InputProps) => (
  <div className="w-full relative group">
    <input
      {...props}
      className={clsx(
        "w-full bg-[#1a1c14] border-2 rounded-[2rem] px-8 py-6 text-xl text-[#fdfff9] placeholder:text-[#fdfff9]/20 focus:outline-none transition-all duration-300 font-medium",
        error 
          ? "border-red-500 focus:border-red-500 animate-shake" 
          : "border-[#fdfff9]/10 focus:border-[#d3f54c] focus:bg-[#282a1e]",
        className
      )}
    />
    {/* Error Tooltip */}
    {error && showErrorIcon && (
      <div className="absolute right-6 top-1/2 -translate-y-1/2 text-red-500 animate-fade-in flex items-center gap-2 pointer-events-none">
        <AlertCircle size={20} />
      </div>
    )}
    {error && (
      <div className="absolute top-full left-8 mt-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-md shadow-lg animate-slide-down-in z-20 uppercase tracking-widest">
        {error}
        <div className="absolute -top-1 left-4 w-2 h-2 bg-red-500 rotate-45" />
      </div>
    )}
  </div>
);

const PhoneInput = ({ value, onChange, error }: { value: string, onChange: (val: string) => void, error?: string }) => (
  <div className="w-full relative group">
    <input
      value={value}
      onChange={(e) => {
        const val = e.target.value;
        if (/^[\d\+\-\(\)\s]*$/.test(val)) onChange(val);
      }}
      placeholder="(555) 000-0000"
      type="tel"
      className={clsx(
        "w-full bg-[#1a1c14] border-2 rounded-[2rem] px-8 py-6 text-xl text-[#fdfff9] placeholder:text-[#fdfff9]/20 focus:outline-none transition-all duration-300 font-medium",
        error 
          ? "border-red-500 focus:border-red-500 animate-shake" 
          : "border-[#fdfff9]/10 focus:border-[#d3f54c] focus:bg-[#282a1e]"
      )}
    />
    {error && (
      <div className="absolute right-6 top-1/2 -translate-y-1/2 text-red-500 animate-fade-in flex items-center gap-2 pointer-events-none">
        <AlertCircle size={20} />
      </div>
    )}
    {error && (
      <div className="absolute top-full left-8 mt-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-md shadow-lg animate-slide-down-in z-20 uppercase tracking-widest">
        {error}
        <div className="absolute -top-1 left-4 w-2 h-2 bg-red-500 rotate-45" />
      </div>
    )}
  </div>
);

const TextArea = ({ error, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: string }) => (
  <div className="relative w-full">
    <textarea
      {...props}
      className={clsx(
        "w-full bg-[#1a1c14] border-2 rounded-[2rem] px-8 py-6 text-xl text-[#fdfff9] placeholder:text-[#fdfff9]/20 focus:outline-none transition-all duration-300 font-medium min-h-[200px] resize-none leading-relaxed",
        error 
          ? "border-red-500 focus:border-red-500 animate-shake" 
          : "border-[#fdfff9]/10 focus:border-[#d3f54c] focus:bg-[#282a1e]"
      )}
    />
     {error && (
      <div className="absolute bottom-6 right-6 text-red-500 animate-fade-in flex items-center gap-2 pointer-events-none">
        <span className="text-xs font-mono uppercase bg-red-500 text-white px-2 py-1 rounded">Required</span>
        <AlertCircle size={20} />
      </div>
    )}
  </div>
);

const RadioGroup: React.FC<{value:string; onChange:(v:string)=>void; options:string[]; error?: string}> = ({value,onChange,options, error}) => (
  <div className={clsx("flex flex-col gap-3 p-1 rounded-[2.5rem] transition-all", error && "animate-shake ring-2 ring-red-500/50")}>
    {options.map((opt, idx) => {
      const active = value===opt;
      const prefix = String.fromCharCode(65 + idx); // A, B, C...
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
            <span className="font-mono text-xs opacity-30">{prefix}</span>
            <span className="font-medium text-lg tracking-tight font-sans">{opt}</span>
          </div>
          {active && <div className="w-3 h-3 bg-[#d3f54c] rounded-full" />}
        </button>
      );
    })}
  </div>
);

// --- PARTNER FLOW DEFINITION ---
const PARTNER_STEPS: StepSpec[] = [
  {
    id: 1,
    title: 'Partner with Generic Alternatives.',
    description: 'Create more value. Earn recurring revenue.\n\nGeneric Alternatives partners with businesses, agencies, and operators connected to product-based brands that need better sourcing, manufacturing, and pricing.',
    render: () => null,
    isInformational: true,
    submitLabel: 'Apply now'
  },
  {
    id: 2,
    title: "We need a few basic details to set up your partner profile.",
    render: (d, set, next, errors) => (
      <div className="space-y-8">
        <Field label="Company Name">
          <Input 
            value={d.companyName} 
            onChange={e=>set({companyName:e.target.value})} 
            autoFocus 
            placeholder="Acme Agencies Inc."
            error={errors.companyName}
            showErrorIcon={false}
          />
        </Field>
        <Field label="Website">
          <Input 
            value={d.website} 
            onChange={e=>set({website:e.target.value})} 
            placeholder="www.acme.com"
            error={errors.website} 
            showErrorIcon={false}
          />
        </Field>
        <Field label="Your Role">
          <RadioGroup 
            value={d.role} 
            onChange={v=>set({role:v})} 
            options={['Founder', 'CEO/COO', 'Partner Manager', 'Other']} 
            error={errors.role}
          />
        </Field>
      </div>
    )
  },
  {
    id: 3,
    title: "Referral Potential & Expectations",
    render: (d,set, next, errors) => (
      <div className="space-y-10">
        <Field label="What best describes your business?">
          <RadioGroup 
            value={d.businessType} 
            onChange={v=>set({businessType:v})} 
            options={['E-commerce agency', 'Consultant', '3PL/Warehousing provider', 'Freight forwarder', 'SaaS', 'Other']} 
            error={errors.businessType}
          />
        </Field>
        <Field label="What does your business do, and who do you help?">
          <TextArea 
            value={d.businessDescription} 
            onChange={e=>set({businessDescription:e.target.value})} 
            placeholder="e.g. We help 7-figure DTC brands scale their paid social ads..." 
            error={errors.businessDescription}
          />
        </Field>
        <Field label="Average revenue of brands in your network?">
          <RadioGroup 
            value={d.clientRevenue} 
            onChange={v=>set({clientRevenue:v})} 
            options={['$1k–$10k', '$10k–$50k', '$50k–$200k', '$200k+']} 
            error={errors.clientRevenue}
          />
        </Field>
      </div>
    )
  },
  {
    id: 4,
    title: "Partnership Structure",
    description: "How do you envision this partnership working?",
    render: (d,set, next, errors) => (
      <div className="space-y-8">
        <Field label="Partnership Vision">
           <TextArea 
            value={d.partnershipVision} 
            onChange={e=>set({partnershipVision:e.target.value})} 
            autoFocus
            placeholder="e.g. I want to refer my clients who are struggling with COGS..." 
            error={errors.partnershipVision}
          />
        </Field>
        <Field label="What value would you bring?">
           <TextArea 
            value={d.valueAdd} 
            onChange={e=>set({valueAdd:e.target.value})} 
            placeholder="e.g. Access to a community of 500+ brand owners..." 
            error={errors.valueAdd}
          />
        </Field>
      </div>
    )
  },
  {
    id: 5,
    title: "Contact & Next Steps",
    render: (d,set, next, errors) => (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="First name">
            <Input 
              value={d.firstName} 
              onChange={e => {
                if (/^[a-zA-Z\s]*$/.test(e.target.value)) set({firstName:e.target.value});
              }} 
              autoFocus 
              placeholder="Jane" 
              error={errors.firstName}
            />
          </Field>
          <Field label="Last name">
            <Input 
              value={d.lastName} 
              onChange={e => {
                if (/^[a-zA-Z\s]*$/.test(e.target.value)) set({lastName:e.target.value});
              }} 
              placeholder="Doe" 
              error={errors.lastName}
            />
          </Field>
        </div>
        <Field label="Email address">
          <Input 
            type="email" 
            value={d.email} 
            onChange={e=>set({email:e.target.value})} 
            placeholder="jane@company.com" 
            error={errors.email}
          />
        </Field>
        <Field label="WhatsApp (For faster comms)">
          <PhoneInput
            value={d.whatsapp}
            onChange={v => set({whatsapp: v})}
            error={errors.whatsapp}
          />
        </Field>
      </div>
    )
  },
  {
    id: 6,
    title: 'How did you hear about our partner program?',
    submitLabel: 'Submit',
    render: (d,set, next, errors) => (
      <RadioGroup 
        value={d.referralSource} 
        onChange={v=>set({referralSource:v})} 
        options={['Social Media', 'A friend', 'Web search', 'Other']} 
        error={errors.referralSource}
      />
    )
  },
  {
    id: 7,
    title: "Application Received",
    description: "We have received your partner application. We will review your profile and reach out via WhatsApp shortly to schedule an intro call.",
    isInformational: true,
    render: () => (
      <div className="mt-8 p-6 rounded-[2rem] bg-[#d3f54c]/10 border border-[#d3f54c]/20 text-[#d3f54c] flex items-center gap-4 animate-slide-up-in">
         <CheckCircle size={32} />
         <div>
            <div className="font-bold text-xl">Submission Successful</div>
            <div className="opacity-80">Check your WhatsApp for next steps.</div>
         </div>
      </div>
    )
  }
];

// --- CUSTOMER (NORMAL) FLOW DEFINITION ---
const CUSTOMER_STEPS: StepSpec[] = [
  {
    id: 1,
    title: 'Start your sourcing request.',
    description: 'Tell us what you need. We source, manufacture, and deliver better alternatives.\n\nComplete this brief to get a quote from our network of verified factories.',
    render: () => null,
    isInformational: true,
    submitLabel: 'Start Request'
  },
  {
    id: 2,
    title: "Brand Identity",
    description: "Who are we sourcing for?",
    render: (d, set, next, errors) => (
      <div className="space-y-8">
        <Field label="Brand Name">
           <Input 
            value={d.brandName} 
            onChange={e=>set({brandName:e.target.value})} 
            autoFocus
            placeholder="e.g. Lumos Lighting" 
            error={errors.brandName}
            showErrorIcon={false}
          />
        </Field>
        <Field label="Website / Store Link">
           <Input 
            value={d.website} 
            onChange={e=>set({website:e.target.value})} 
            placeholder="www.lumos.com" 
            error={errors.website}
            showErrorIcon={false}
          />
        </Field>
      </div>
    )
  },
  {
    id: 3,
    title: "Product Parameters",
    render: (d, set, next, errors) => (
      <div className="space-y-8">
         <Field label="What are you selling currently?">
            <TextArea 
               value={d.whatSell} 
               onChange={e=>set({whatSell:e.target.value})}
               placeholder="Describe your current product line..."
               error={errors.whatSell}
               style={{minHeight: '140px'}}
            />
         </Field>
         <Field label="What exactly do you want to source?">
            <TextArea 
               value={d.whatSource} 
               onChange={e=>set({whatSource:e.target.value})}
               placeholder="Specifics on the product you need (materials, specs, changes)..."
               error={errors.whatSource}
               style={{minHeight: '140px'}}
            />
         </Field>
      </div>
    )
  },
  {
    id: 4,
    title: "Volume & Scale",
    render: (d, set, next, errors) => (
      <div className="space-y-10">
         <Field label="Current Daily Order Volume">
            <RadioGroup 
              value={d.orderVolume || ''} 
              onChange={v=>set({orderVolume:v})}
              options={['Just starting', '10-50 orders/day', '50-100 orders/day', '100+ orders/day']}
              error={errors.orderVolume}
            />
         </Field>
         <Field label="Target Order Value (Per SKU)">
            <RadioGroup 
              value={d.expectedOrderSize || ''} 
              onChange={v=>set({expectedOrderSize:v})}
              options={['Under $500', '$500–$1,000', '$1,000–$3,000', '$3,000–$10,000', '$10,000+']}
              error={errors.expectedOrderSize}
            />
         </Field>
      </div>
    )
  },
  {
    id: 5,
    title: "Logistics",
    render: (d, set, next, errors) => (
      <div className="space-y-8">
         <Field label="Destination Country">
            <CountryInput 
              value={d.country || ''} 
              onChange={v=>set({country:v})}
              placeholder="Select destination..."
              autoFocus
            />
            {errors.country && <div className="text-red-500 text-sm mt-2 font-bold">{errors.country}</div>}
         </Field>
      </div>
    )
  },
  {
    id: 6,
    title: "Project Details",
    render: (d, set, next, errors) => (
       <div className="space-y-10">
          <Field label="Have you sourced directly from factories before?">
             <RadioGroup 
               value={d.experience || ''}
               onChange={v=>set({experience:v})}
               options={['Yes, multiple times', 'Once or twice', 'No, this is my first time']}
               error={errors.experience}
             />
          </Field>
          <Field label="Estimated Budget for this project">
             <Input 
               value={d.budget || ''}
               onChange={e=>set({budget:e.target.value})}
               placeholder="e.g. $5,000"
               error={errors.budget}
             />
          </Field>
          <Field label="Target Timeline">
             <Input 
               value={d.timeline || ''}
               onChange={e=>set({timeline:e.target.value})}
               placeholder="e.g. ASAP, Q4 Launch, etc."
               error={errors.timeline}
             />
          </Field>
       </div>
    )
  },
  {
    id: 7,
    title: "Contact Information",
    submitLabel: 'Submit Request',
    render: (d,set, next, errors) => (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="First name">
            <Input 
              value={d.firstName} 
              onChange={e => {
                if (/^[a-zA-Z\s]*$/.test(e.target.value)) set({firstName:e.target.value});
              }} 
              autoFocus 
              placeholder="Jane" 
              error={errors.firstName}
            />
          </Field>
          <Field label="Last name">
            <Input 
              value={d.lastName} 
              onChange={e => {
                if (/^[a-zA-Z\s]*$/.test(e.target.value)) set({lastName:e.target.value});
              }} 
              placeholder="Doe" 
              error={errors.lastName}
            />
          </Field>
        </div>
        <Field label="Email address">
          <Input 
            type="email" 
            value={d.email} 
            onChange={e=>set({email:e.target.value})} 
            placeholder="jane@company.com" 
            error={errors.email}
          />
        </Field>
        <Field label="WhatsApp (For faster quotes)">
          <PhoneInput
            value={d.whatsapp}
            onChange={v => set({whatsapp: v})}
            error={errors.whatsapp}
          />
        </Field>
      </div>
    )
  },
  {
    id: 8,
    title: "Request Recieved!",
    description: 'Your sourcing request has been logged. A sourcing agent will review your details and contact you via WhatsApp shortly.',
    isInformational: true,
    render: () => (
      <div className="flex flex-col gap-4 mt-8 w-full max-w-md animate-slide-up-in">
         {/* Raising Card */}
         <button className="text-left w-full p-8 rounded-[2rem] bg-[#d3f54c] text-[#282a1e] hover:scale-[1.02] active:scale-95 transition-all duration-300 group relative overflow-hidden">
             <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                   <div className="w-2 h-2 bg-[#282a1e] rounded-full animate-pulse" />
                   <span className="font-mono text-[10px] uppercase tracking-widest font-bold opacity-80">Announcement</span>
                </div>
                <div className="text-3xl font-bold tracking-tighter mb-1">NEW: WE'RE RAISING!</div>
                <div className="font-medium opacity-80">Join our growth journey</div>
             </div>
             <div className="absolute top-8 right-8 opacity-50 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={24} className="-rotate-45" />
             </div>
             {/* Decorative bg noise */}
             <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#282a1e 1px, transparent 1px)', backgroundSize: '8px 8px' }}></div>
         </button>

         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Blogs */}
            <a href="/blogs" className="block p-6 rounded-[2rem] border-2 border-[#fdfff9]/10 hover:border-[#d3f54c] hover:bg-[#282a1e] transition-all duration-300 group relative overflow-hidden">
               <div className="relative z-10">
                 <div className="font-mono text-[10px] uppercase tracking-widest text-[#fdfff9]/40 mb-4 group-hover:text-[#d3f54c] transition-colors">Resources</div>
                 <div className="text-xl font-bold mb-1">Read Blogs</div>
                 <div className="text-sm text-[#fdfff9]/60 group-hover:text-[#fdfff9] transition-colors">Latest insights</div>
               </div>
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-[#d3f54c]">
                  <ArrowRight size={20} />
                </div>
            </a>
            
            {/* Home */}
            <a href="/" className="block p-6 rounded-[2rem] border-2 border-[#fdfff9]/10 hover:border-[#d3f54c] hover:bg-[#282a1e] transition-all duration-300 group relative overflow-hidden">
               <div className="relative z-10">
                 <div className="font-mono text-[10px] uppercase tracking-widest text-[#fdfff9]/40 mb-4 group-hover:text-[#d3f54c] transition-colors">Navigation</div>
                 <div className="text-xl font-bold mb-1">Return Home</div>
                 <div className="text-sm text-[#fdfff9]/60 group-hover:text-[#fdfff9] transition-colors">Back to start</div>
               </div>
               <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-[#d3f54c]">
                  <ArrowLeft size={20} />
                </div>
            </a>
         </div>
      </div>
    )
  }
];

export const TypeformOnboarding: React.FC<{ flowType?: 'partner' | 'customer' }> = ({ flowType = 'customer' }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const Steps = flowType === 'partner' ? PARTNER_STEPS : CUSTOMER_STEPS;
  const current = Steps[stepIndex];

  const patch = useCallback((p: Partial<FormData>) => {
    setData(d => ({...d, ...p}));
    // Clear errors for fields being updated
    setErrors(prev => {
      const next = {...prev};
      Object.keys(p).forEach(key => delete next[key]);
      return next;
    });
  }, []);
  
  const validateStep = useCallback((): boolean => {
    const newErrors: Record<string, string> = {};
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation Logic Switch
    if (flowType === 'partner') {
        switch (current.id) {
          case 2: // Company
            if (!data.companyName.trim()) newErrors.companyName = "Required";
            if (!data.website.trim()) newErrors.website = "Required";
            if (!data.role) newErrors.role = "Select a role";
            break;
          case 3: // Business
            if (!data.businessType) newErrors.businessType = "Select a type";
            if (!data.businessDescription.trim()) newErrors.businessDescription = "Required";
            if (!data.clientRevenue) newErrors.clientRevenue = "Select range";
            break;
          case 4: // Vision
            if (!data.partnershipVision.trim()) newErrors.partnershipVision = "Required";
            if (!data.valueAdd.trim()) newErrors.valueAdd = "Required";
            break;
          case 5: // Contact
            if (!data.firstName.trim()) newErrors.firstName = "Required";
            if (!data.lastName.trim()) newErrors.lastName = "Required";
            if (!data.email.trim()) { newErrors.email = "Required"; } 
            else if (!emailRegex.test(data.email)) { newErrors.email = "Invalid"; }
            if (!data.whatsapp.trim()) { newErrors.whatsapp = "Required"; }
            break;
          case 6: // Source
            if (!data.referralSource) newErrors.referralSource = "Required";
            break;
        }
    } else {
        // CUSTOMER FLOW
        switch(current.id) {
           case 2: // Brand
             if (!data.brandName.trim()) newErrors.brandName = "Required";
             if (!data.website.trim()) newErrors.website = "Required";
             break;
           case 3: // Product
             if (!data.whatSell?.trim()) newErrors.whatSell = "Required";
             if (!data.whatSource?.trim()) newErrors.whatSource = "Required";
             break;
           case 4: // Volume
             if (!data.orderVolume) newErrors.orderVolume = "Select volume";
             if (!data.expectedOrderSize) newErrors.expectedOrderSize = "Select size";
             break;
           case 5: // Logistics
             if (!data.country) newErrors.country = "Required";
             break;
           case 6: // Details
             if (!data.experience) newErrors.experience = "Select option";
             if (!data.budget?.trim()) newErrors.budget = "Required";
             if (!data.timeline?.trim()) newErrors.timeline = "Required";
             break;
           case 7: // Contact
             if (!data.firstName.trim()) newErrors.firstName = "Required";
             if (!data.lastName.trim()) newErrors.lastName = "Required";
             if (!data.email.trim()) { newErrors.email = "Required"; } 
             else if (!emailRegex.test(data.email)) { newErrors.email = "Invalid"; }
             if (!data.whatsapp.trim()) { newErrors.whatsapp = "Required"; }
             break;
        }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      isValid = false;
    }

    return isValid;
  }, [current.id, data, flowType]);

  const next = useCallback(() => { 
    if (!validateStep()) return;

    if (stepIndex < Steps.length - 1) {
      setStepIndex(i => i + 1); 
      // Scroll top of content on step change
      document.getElementById('content-scroll-area')?.scrollTo(0,0);
    }
  }, [stepIndex, validateStep, Steps.length]);
  
  const prev = useCallback(() => { 
    if (stepIndex > 0) {
      setStepIndex(i => i - 1); 
      setErrors({});
    }
  }, [stepIndex]);

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) return; 
      if (document.activeElement?.tagName === 'TEXTAREA') return; 
      // Disable enter for final steps where no next action exists
      if ((flowType === 'partner' && current.id === 7) || (flowType === 'customer' && current.id === 8)) return;
      next();
    }
  }, [current, next, flowType]);

  useEffect(() => { 
    window.addEventListener('keydown', handleKey); 
    return () => window.removeEventListener('keydown', handleKey); 
  }, [handleKey]);

  const progress = ((stepIndex + 1) / Steps.length) * 100;

  return (
    <div className="h-screen w-full bg-[#282a1e] text-[#fdfff9] overflow-hidden flex">
      
      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-50" style={{ backgroundImage: 'radial-gradient(#d3f54c 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>

      {/* Left Panel: Form - Fixed Layout Structure */}
      <div className="w-full lg:w-[55%] h-full flex flex-col relative z-10">
        
        {/* Header - Fixed Top */}
        <div className="shrink-0 px-8 md:px-16 lg:px-24 pt-8 md:pt-16 lg:pt-20">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#d3f54c] rounded-full animate-pulse" />
              <div className="font-bold tracking-tight text-xl">GENERIC<span className="text-[#d3f54c]">.{flowType === 'partner' ? 'PARTNERS' : 'SOURCING'}</span></div>
            </div>
            <div className="font-mono text-[10px] tracking-[0.2em] opacity-30">APPLY_V1.0</div>
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-xl mb-8">
            <div className="flex justify-between text-[10px] font-mono uppercase tracking-[0.2em] mb-4">
                <span className="text-[#d3f54c]">Sequence {current.id.toString().padStart(2, '0')}</span>
                <span className="opacity-30">Total {Steps.length}</span>
            </div>
            <div className="h-[2px] w-full bg-[#fdfff9]/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#d3f54c] transition-all duration-700 ease-out" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div id="content-scroll-area" className="flex-1 overflow-y-auto px-8 md:px-16 lg:px-24 no-scrollbar relative">
           <div className="min-h-full w-full max-w-xl flex flex-col justify-center pb-32"> {/* pb-32 ensures content isn't hidden behind footer */}
              <div className="mb-6">
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.05] mb-4">
                  {current.id === 1 ? (
                    flowType === 'partner' ? (
                      <>
                        <span className="text-[#d3f54c] block mb-2">Partner with</span>
                        Generic Alternatives.
                      </>
                    ) : (
                       <>
                        <span className="text-[#d3f54c] block mb-2">Start your</span>
                        Sourcing Request.
                      </>
                    )
                  ) : (
                    current.title
                  )}
                </h1>
                {current.description && (
                    <p className={clsx(
                      "leading-relaxed whitespace-pre-line max-w-lg transition-all duration-300",
                      (current.id === Steps.length) // End steps
                        ? "text-2xl lg:text-3xl text-[#d3f54c] font-medium tracking-tight" 
                        : "text-lg text-[#fdfff9]/60"
                    )}>
                      {current.description}
                    </p>
                )}
              </div>

              <div className="animate-fadeIn">
                {current.render(data, patch, next, errors)}
              </div>
           </div>
        </div>

        {/* Fixed Footer with Gradient Mask */}
        <div className="shrink-0 px-8 md:px-16 lg:px-24 pb-8 md:pb-12 pt-8 relative">
           {/* Gradient fade to transition content behind footer */}
           <div className="absolute bottom-full left-0 right-0 h-24 bg-gradient-to-t from-[#282a1e] to-transparent pointer-events-none" />
           <div className="absolute inset-0 bg-[#282a1e] -z-10" /> {/* Solid background for footer */}

           <div className="flex items-center gap-6">
              {stepIndex > 0 && stepIndex < (Steps.length - 1) && (
                  <button onClick={prev} className="w-16 h-16 rounded-full border-2 border-[#fdfff9]/10 hover:border-[#d3f54c] text-[#fdfff9]/40 hover:text-[#d3f54c] flex items-center justify-center transition-all duration-300">
                    <ArrowLeft size={24} />
                  </button>
              )}
              
              {current.id < Steps.length && (
                <button 
                  onClick={next}
                  className={clsx(
                    "h-16 px-10 rounded-full font-bold tracking-wide text-base flex items-center gap-4 transition-all duration-300 group",
                    "bg-[#d3f54c] hover:bg-[#fdfff9] text-[#282a1e] hover:scale-105"
                  )}
                >
                  <span>{current.submitLabel || (stepIndex === Steps.length - 2 ? 'Submit' : 'OK')}</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              )}
              
              {current.id === 1 && (
                <div className="text-xs font-mono opacity-40 flex items-center gap-2 ml-4">
                  <div className="w-2 h-2 bg-[#d3f54c] rounded-full animate-pulse"/>
                  Takes 30 sec
                </div>
              )}
           </div>
        </div>
      </div>

      {/* Right Panel: Widget - Fixed */}
      <div className="hidden lg:flex w-[45%] h-full bg-[#1a1c14] relative flex-col items-center justify-center p-16 border-l border-[#fdfff9]/5 overflow-hidden">
         {/* Background Accents */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-[#282a1e] via-[#1a1c14] to-[#1a1c14] opacity-80" />
         <div className="absolute top-0 right-0 p-12 opacity-20">
            <Terminal size={32} className="text-[#d3f54c]" />
         </div>
         <div className="absolute bottom-12 left-12 flex items-center gap-3 opacity-20">
            <Circle size={10} className="text-[#d3f54c] fill-[#d3f54c] animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]">{flowType === 'partner' ? 'Partner_Network_Node' : 'Sourcing_Matrix_v1'}</span>
         </div>

         {/* The Widget Render */}
         <div className="relative z-10 w-full max-w-md">
            <OnboardingWidget step={current.id} data={data} progress={progress} flowType={flowType} />
         </div>
      </div>

    </div>
  );
};
