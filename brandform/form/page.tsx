import React from 'react';
import { TypeformOnboarding } from '../../form/form/components/TypeformOnboarding';

// Brand form: explicitly use customer flow for sourcing requests.
export default function BrandFormPage() {
  return <TypeformOnboarding flowType="customer" />;
}
