
import { NGOProductFormData } from './types';

export const getInitialFormData = (): NGOProductFormData => ({
  name: '',
  description: '',
  category: '',
  cause: '',
  price: '',
  impactDescription: '',
  sku: '',
  stockQuantity: '',
  images: [],
  whatsappEnabled: true,
  whatsappNumber: '',
  whatsappMessage: 'Hi! I\'m interested in supporting your cause through this product. Can you tell me more about the impact of my purchase?',
  allowBulkOrders: true,
  corporateDiscount: '',
  ngoName: '',
  ngoDescription: '',
  impactMetrics: ''
});

export const validateForm = (formData: NGOProductFormData) => {
  const requiredFields = ['name', 'description', 'category', 'cause', 'price', 'stockQuantity', 'ngoName'];
  const missingFields = requiredFields.filter(field => !formData[field as keyof NGOProductFormData]);
  
  if (missingFields.length > 0) {
    return { isValid: false, error: `Please fill in: ${missingFields.join(', ')}` };
  }

  if (formData.whatsappEnabled && !formData.whatsappNumber) {
    return { isValid: false, error: 'Please provide your WhatsApp number for customer inquiries.' };
  }

  return { isValid: true, error: null };
};
