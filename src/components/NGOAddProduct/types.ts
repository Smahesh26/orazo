
export interface NGOProductFormData {
  name: string;
  description: string;
  category: string;
  cause: string;
  price: string;
  impactDescription: string;
  sku: string;
  stockQuantity: string;
  images: File[];
  whatsappEnabled: boolean;
  whatsappNumber: string;
  whatsappMessage: string;
  allowBulkOrders: boolean;
  corporateDiscount: string;
  ngoName: string;
  ngoDescription: string;
  impactMetrics: string;
}

export const categories = [
  'Handcrafts', 'Education Materials', 'Health & Wellness', 'Environmental', 
  'Food & Agriculture', 'Art & Culture', 'Technology', 'Clothing & Accessories'
];

export const causes = [
  'Education', 'Healthcare', 'Environment', 'Poverty Alleviation',
  'Women Empowerment', 'Child Welfare', 'Disaster Relief', 'Animal Welfare'
];
