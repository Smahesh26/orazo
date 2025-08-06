
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { MessageCircle, Phone, Heart, CheckCircle } from 'lucide-react';
import { NGOProductFormData } from './types';
import { generateWhatsAppLink } from './whatsappUtils';

interface Step3WhatsAppIntegrationProps {
  formData: NGOProductFormData;
  onInputChange: (field: keyof NGOProductFormData, value: string | boolean | File[]) => void;
}

const Step3WhatsAppIntegration = ({ formData, onInputChange }: Step3WhatsAppIntegrationProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
        <div className="flex items-center gap-3">
          <MessageCircle className="w-6 h-6 text-green-600" />
          <div>
            <h3 className="font-semibold text-green-800">WhatsApp Customer Support</h3>
            <p className="text-sm text-green-600">Enable direct communication with supporters</p>
          </div>
        </div>
        <Switch
          checked={formData.whatsappEnabled}
          onCheckedChange={(checked) => onInputChange('whatsappEnabled', checked)}
        />
      </div>

      {formData.whatsappEnabled && (
        <div className="space-y-6 p-4 bg-gray-50 rounded-lg">
          <div className="space-y-2">
            <Label htmlFor="whatsappNumber">WhatsApp Number *</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                id="whatsappNumber"
                placeholder="+1234567890"
                className="pl-10"
                value={formData.whatsappNumber}
                onChange={(e) => onInputChange('whatsappNumber', e.target.value)}
              />
            </div>
            <p className="text-xs text-gray-600">Include country code (e.g., +1 for US, +91 for India)</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsappMessage">Default Customer Message</Label>
            <Textarea
              id="whatsappMessage"
              value={formData.whatsappMessage}
              onChange={(e) => onInputChange('whatsappMessage', e.target.value)}
              rows={4}
            />
            <p className="text-xs text-gray-600">This message will be pre-filled when customers contact you</p>
          </div>

          {formData.whatsappNumber && (
            <div className="p-4 bg-white rounded border">
              <p className="text-sm font-medium mb-3">WhatsApp Button Preview:</p>
              <a
                href={generateWhatsAppLink(formData)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Support This Cause via WhatsApp
              </a>
            </div>
          )}
        </div>
      )}

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
          <Heart className="w-5 h-5" />
          WhatsApp Benefits for NGOs:
        </h4>
        <ul className="text-sm text-blue-700 space-y-2">
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Build personal connections with supporters
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Share real-time impact updates
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Handle custom orders and donations
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Provide instant customer support
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Share photos and videos of your work
          </li>
        </ul>
      </div>

      <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
        <h4 className="font-semibold text-amber-800 mb-2">Pro Tips:</h4>
        <ul className="text-sm text-amber-700 space-y-1">
          <li>• Respond to WhatsApp messages within 2 hours for better engagement</li>
          <li>• Share impact stories and photos with your customers</li>
          <li>• Use WhatsApp status to showcase your NGO's daily activities</li>
          <li>• Create WhatsApp groups for regular supporters</li>
        </ul>
      </div>
    </div>
  );
};

export default Step3WhatsAppIntegration;
