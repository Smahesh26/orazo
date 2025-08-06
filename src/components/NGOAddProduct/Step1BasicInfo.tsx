
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { NGOProductFormData, categories, causes } from './types';

interface Step1BasicInfoProps {
  formData: NGOProductFormData;
  onInputChange: (field: keyof NGOProductFormData, value: string | boolean | File[]) => void;
}

const Step1BasicInfo = ({ formData, onInputChange }: Step1BasicInfoProps) => {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 5) {
      // Handle error - could be passed as prop if needed
      return;
    }
    onInputChange('images', files);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="ngoName">NGO Name *</Label>
          <Input
            id="ngoName"
            placeholder="Your NGO name"
            value={formData.ngoName}
            onChange={(e) => onInputChange('ngoName', e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="cause">Primary Cause *</Label>
          <select
            id="cause"
            className="w-full p-2 border rounded-md"
            value={formData.cause}
            onChange={(e) => onInputChange('cause', e.target.value)}
          >
            <option value="">Select your cause</option>
            {causes.map(cause => (
              <option key={cause} value={cause}>{cause}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="ngoDescription">NGO Description</Label>
        <Textarea
          id="ngoDescription"
          placeholder="Tell people about your NGO and its mission..."
          value={formData.ngoDescription}
          onChange={(e) => onInputChange('ngoDescription', e.target.value)}
          rows={3}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Product Name *</Label>
          <Input
            id="name"
            placeholder="Enter product name"
            value={formData.name}
            onChange={(e) => onInputChange('name', e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="category">Product Category *</Label>
          <select
            id="category"
            className="w-full p-2 border rounded-md"
            value={formData.category}
            onChange={(e) => onInputChange('category', e.target.value)}
          >
            <option value="">Select a category</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Product Description *</Label>
        <Textarea
          id="description"
          placeholder="Describe your product and how it supports your cause..."
          value={formData.description}
          onChange={(e) => onInputChange('description', e.target.value)}
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="impactDescription">Impact Description</Label>
        <Textarea
          id="impactDescription"
          placeholder="Explain how purchasing this product creates positive impact..."
          value={formData.impactDescription}
          onChange={(e) => onInputChange('impactDescription', e.target.value)}
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="images">Product Images (Max 5)</Label>
        <Input
          id="images"
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
        />
        {formData.images.length > 0 && (
          <p className="text-sm text-gray-600">{formData.images.length} image(s) selected</p>
        )}
      </div>
    </div>
  );
};

export default Step1BasicInfo;
