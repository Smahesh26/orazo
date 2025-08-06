
import { NGOProductFormData } from './types';

export const generateWhatsAppLink = (formData: NGOProductFormData) => {
  const baseUrl = 'https://wa.me/';
  const phoneNumber = formData.whatsappNumber.replace(/\D/g, '');
  const message = encodeURIComponent(
    `${formData.whatsappMessage}\n\nProduct: ${formData.name}\nCause: ${formData.cause}\nNGO: ${formData.ngoName}`
  );
  return `${baseUrl}${phoneNumber}?text=${message}`;
};
