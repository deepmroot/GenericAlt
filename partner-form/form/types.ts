
export interface FormData {
  // Company Info
  companyName: string;
  website: string;
  role: string;
  
  // Business Context
  businessType: string;
  businessDescription: string;
  clientRevenue: string;
  
  // Partnership
  partnershipVision: string;
  valueAdd: string;
  
  // Contact
  firstName: string;
  lastName: string;
  email: string;
  whatsapp: string;
  
  // Source
  referralSource: string;

  // Sourcing & Additional Fields
  brandName?: string;
  whatSell?: string;
  whatSource?: string;
  orderVolume?: string;
  expectedOrderSize?: string;
  country?: string;
  experience?: string;
  references?: Array<{ name: string }>;
  budget?: string;
  timeline?: string;
}
