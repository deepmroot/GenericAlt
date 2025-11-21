
import React, { useEffect, useState } from 'react';
import { TypeformOnboarding } from './components/TypeformOnboarding';

export default function FormPage() {
  const [flowType, setFlowType] = useState<'partner' | 'customer'>('customer');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('flow') === 'partner') {
      setFlowType('partner');
    } else {
      setFlowType('customer');
    }
  }, []);

  return <TypeformOnboarding flowType={flowType} />;
}
