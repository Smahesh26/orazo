
import { CheckCircle } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  const getStepTitle = (step: number) => {
    switch (step) {
      case 1: return 'NGO & Product Information';
      case 2: return 'Pricing & Corporate Sales';
      case 3: return 'WhatsApp Integration';
      default: return '';
    }
  };

  return (
    <>
      <div className="flex items-center justify-center mt-6">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <div key={step} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
              currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              {currentStep > step ? <CheckCircle className="w-4 h-4" /> : step}
            </div>
            {step < totalSteps && (
              <div className={`w-16 h-1 mx-2 ${
                currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
              }`} />
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center mt-2">
        <p className="text-sm text-gray-600">
          Step {currentStep} of {totalSteps}: {getStepTitle(currentStep)}
        </p>
      </div>
    </>
  );
};

export default StepIndicator;
