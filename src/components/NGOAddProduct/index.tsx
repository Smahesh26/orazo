
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Heart } from 'lucide-react';
import { NGOProductFormData } from './types';
import { getInitialFormData, validateForm } from './formUtils';
import StepIndicator from './StepIndicator';
import Step1BasicInfo from './Step1BasicInfo';
import Step2PricingInventory from './Step2PricingInventory';
import Step3WhatsAppIntegration from './Step3WhatsAppIntegration';

const NGOAddProduct = () => {
  const [formData, setFormData] = useState<NGOProductFormData>(getInitialFormData());
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof NGOProductFormData, value: string | boolean | File[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 5) {
      toast({
        title: "Too many images",
        description: "You can upload a maximum of 5 images.",
        variant: "destructive",
      });
      return;
    }
    handleInputChange('images', files);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    const validation = validateForm(formData);
    if (!validation.isValid) {
      toast({
        title: "Missing Information",
        description: validation.error!,
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Product Added Successfully!",
      description: `${formData.name} has been added to your NGO store and is ready to make an impact!`,
    });

    setFormData(getInitialFormData());
    setCurrentStep(1);
    setIsSubmitting(false);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1BasicInfo formData={formData} onInputChange={handleInputChange} />;
      case 2:
        return <Step2PricingInventory formData={formData} onInputChange={handleInputChange} />;
      case 3:
        return <Step3WhatsAppIntegration formData={formData} onInputChange={handleInputChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-red-500" />
            Add Product for Your Cause
          </CardTitle>
          
          <StepIndicator currentStep={currentStep} totalSteps={3} />
        </CardHeader>
        
        <CardContent>
          {renderCurrentStep()}
          
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
              disabled={currentStep === 1}
            >
              Previous
            </Button>
            
            {currentStep < 3 ? (
              <Button
                onClick={() => setCurrentStep(prev => Math.min(3, prev + 1))}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {isSubmitting ? 'Adding Product...' : 'Add Product & Start Making Impact'}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NGOAddProduct;
