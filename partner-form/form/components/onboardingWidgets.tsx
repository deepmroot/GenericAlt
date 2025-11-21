
import React, { useState, useEffect, useRef } from 'react';
import { FormData } from '../types';
import {
  WidgetPartnerIntro,
  WidgetCompanyProfile,
  WidgetNetworkStats,
  WidgetSynergy,
  WidgetContactDetails,
  WidgetSourceChannel,
  WidgetFallback,
  WidgetBrand,
  WidgetCatalog,
  WidgetVolume,
  WidgetDestination,
  WidgetExperience,
  WidgetSourcing // Assuming this can serve as catalog/product view
} from './widget';

interface WidgetProps { step: number; data: FormData; progress: number; flowType: 'partner' | 'customer'; }

// Maps for Partner Flow
const PARTNER_WIDGET_MAP: Record<number, React.FC<{data: FormData}>> = {
  1: WidgetPartnerIntro,
  2: WidgetCompanyProfile,
  3: WidgetNetworkStats,
  4: WidgetSynergy,
  5: WidgetContactDetails,
  6: WidgetSourceChannel,
};

// Maps for Customer Flow
// 1: Intro, 2: Brand, 3: Product, 4: Volume, 5: Destination, 6: Experience, 7: Contact, 8: End
const CUSTOMER_WIDGET_MAP: Record<number, React.FC<{data: FormData}>> = {
  1: WidgetPartnerIntro, // Reusing intro style or use fallback/brand
  2: WidgetBrand,
  3: WidgetCatalog, // Or WidgetSourcing
  4: WidgetVolume,
  5: WidgetDestination,
  6: WidgetExperience,
  7: WidgetContactDetails,
};

export const OnboardingWidget: React.FC<WidgetProps> = ({step, data, progress, flowType}) => {
  const [activeWidget, setActiveWidget] = useState<{id: number; Component: React.FC<{data: FormData}>} | null>(null);
  const [exitingWidget, setExitingWidget] = useState<{id: number; Component: React.FC<{data: FormData}>} | null>(null);
  const [direction, setDirection] = useState<'up' | 'down'>('up');
  const prevStepRef = useRef(step);

  const currentMap = flowType === 'partner' ? PARTNER_WIDGET_MAP : CUSTOMER_WIDGET_MAP;

  useEffect(() => {
    const Component = currentMap[step];
    
    if (prevStepRef.current === step && activeWidget) {
      return; 
    }
    
    if (activeWidget) {
      setDirection(step < prevStepRef.current ? 'down' : 'up');
      setExitingWidget(activeWidget);
    }
    
    if (Component) {
      setActiveWidget({ id: step, Component });
    } else {
      setActiveWidget(null);
    }
    
    prevStepRef.current = step;

    const timer = setTimeout(() => {
      setExitingWidget(null);
    }, 800);

    return () => clearTimeout(timer);
  }, [step, flowType]); // Added flowType dependency

  return (
    <div className="w-full aspect-[4/5] relative">
      {/* Static Background / Fallback - Only visible when no active widget */}
      <div className={`absolute inset-0 transition-all duration-500 ease-out ${activeWidget ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100 scale-100'}`}>
         <WidgetFallback progress={progress} />
      </div>

      {/* Exiting Widget */}
      {exitingWidget && (
        <div 
          key={`exit-${exitingWidget.id}`}
          className={`absolute inset-0 z-20 origin-bottom ${direction === 'up' ? 'animate-slide-up-out' : 'animate-slide-down-out'}`}
        >
           <exitingWidget.Component data={data} />
        </div>
      )}

      {/* Active Widget */}
      {activeWidget && (
        <div 
          key={`enter-${activeWidget.id}`}
          className={`absolute inset-0 z-30 origin-bottom ${direction === 'up' ? 'animate-slide-up-in' : 'animate-slide-down-in'}`}
        >
           <activeWidget.Component data={data} />
        </div>
      )}
    </div>
  );
};
