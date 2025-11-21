import React, { useState, useEffect, useRef } from 'react';
import { FormData } from '../types';
import {
  WidgetIdentity,
  WidgetWhatsApp,
  WidgetBrand,
  WidgetCatalog,
  WidgetSourcing,
  WidgetVolume,
  WidgetOrderSize,
  WidgetDestination,
  WidgetExperience,
  WidgetReferences,
  WidgetBudget,
  WidgetFallback
} from './widget';

interface WidgetProps { step: number; data: FormData; progress: number; }

const WIDGET_MAP: Record<number, React.FC<{data: FormData}>> = {
  2: WidgetIdentity,
  3: WidgetWhatsApp,
  4: WidgetBrand,
  5: WidgetCatalog,
  6: WidgetSourcing,
  7: WidgetVolume,
  8: WidgetOrderSize,
  9: WidgetDestination,
  10: WidgetExperience,
  11: WidgetReferences,
  12: WidgetBudget,
};

export const OnboardingWidget: React.FC<WidgetProps> = ({step, data, progress}) => {
  const [activeWidget, setActiveWidget] = useState<{id: number; Component: React.FC<{data: FormData}>} | null>(null);
  const [exitingWidget, setExitingWidget] = useState<{id: number; Component: React.FC<{data: FormData}>} | null>(null);
  const [direction, setDirection] = useState<'up' | 'down'>('up');
  const prevStepRef = useRef(step);

  useEffect(() => {
    const Component = WIDGET_MAP[step];
    
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
  }, [step]);

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