
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';
import { 
  Package, 
  Upload, 
  DollarSign, 
  Tag, 
  Truck, 
  MessageCircle,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface ProductFormData {
  name: string;
  description: string;
  category: string;
  price: string;
  comparePrice: string;
  sku: string;
  stockQuantity: string;
  images: File[];
  weight: string;
  dimensions: string;
  shippingCost: string;
  whatsappEnabled: boolean;
  whatsappNumber: string;
  whatsappMessage: string;
}

const AddProduct = () => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    description: '',
    category: '',
    price: '',
    comparePrice: '',
    sku: '',
    stockQuantity: '',
    images: [],
    weight: '',
    dimensions: '',
    shippingCost: '',
    whatsappEnabled: false,
    whatsappNumber: '',
    whatsappMessage: 'Hi! I\'m interested in this product. Can you provide more details?'
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'Electronics', 'Clothing', 'Home & Garden', 'Beauty & Health', 
    'Sports & Outdoors', 'Books', 'Toys & Games', 'Automotive'
  ];

  const handleInputChange = (field: keyof ProductFormData, value: string | boolean | File[]) => {
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

  const generateWhatsAppLink = () => {
    const baseUrl = 'https://wa.me/';
    const phoneNumber = formData.whatsappNumber.replace(/\D/g, '');
    const message = encodeURIComponent(formData.whatsappMessage);
    return `${baseUrl}${phoneNumber}?text=${message}`;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Validate required fields
    const requiredFields = ['name', 'description', 'category', 'price', 'stockQuantity'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof ProductFormData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: `Please fill in: ${missingFields.join(', ')}`,
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (formData.whatsappEnabled && !formData.whatsappNumber) {
      toast({
        title: "WhatsApp Number Required",
        description: "Please provide your WhatsApp number for customer inquiries.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Product Added Successfully!",
      description: `${formData.name} has been added to your store.`,
    });

    // Reset form
    setFormData({
      name: '',
      description: '',
      category: '',
      price: '',
      comparePrice: '',
      sku: '',
      stockQuantity: '',
      images: [],
      weight: '',
      dimensions: '',
      shippingCost: '',
      whatsappEnabled: false,
      whatsappNumber: '',
      whatsappMessage: 'Hi! I\'m interested in this product. Can you provide more details?'
    });
    setCurrentStep(1);
    setIsSubmitting(false);
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Product Name *</Label>
          <Input
            id="name"
            placeholder="Enter product name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="category">Category *</Label>
          <select
            id="category"
            className="w-full p-2 border rounded-md"
            value={formData.category}
            onChange={(e) => handleInputChange('category', e.target.value)}
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
          placeholder="Describe your product in detail..."
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          rows={4}
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

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="price">Price *</Label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              id="price"
              type="number"
              placeholder="0.00"
              className="pl-10"
              value={formData.price}
              onChange={(e) => handleInputChange('price', e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="comparePrice">Compare at Price</Label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              id="comparePrice"
              type="number"
              placeholder="0.00"
              className="pl-10"
              value={formData.comparePrice}
              onChange={(e) => handleInputChange('comparePrice', e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="stockQuantity">Stock Quantity *</Label>
          <Input
            id="stockQuantity"
            type="number"
            placeholder="0"
            value={formData.stockQuantity}
            onChange={(e) => handleInputChange('stockQuantity', e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="sku">SKU (Stock Keeping Unit)</Label>
          <Input
            id="sku"
            placeholder="Enter SKU"
            value={formData.sku}
            onChange={(e) => handleInputChange('sku', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="weight">Weight (kg)</Label>
          <Input
            id="weight"
            type="number"
            placeholder="0.0"
            value={formData.weight}
            onChange={(e) => handleInputChange('weight', e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="dimensions">Dimensions (L x W x H cm)</Label>
          <Input
            id="dimensions"
            placeholder="e.g., 10 x 5 x 3"
            value={formData.dimensions}
            onChange={(e) => handleInputChange('dimensions', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="shippingCost">Shipping Cost</Label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              id="shippingCost"
              type="number"
              placeholder="0.00"
              className="pl-10"
              value={formData.shippingCost}
              onChange={(e) => handleInputChange('shippingCost', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
        <div className="flex items-center gap-3">
          <MessageCircle className="w-6 h-6 text-green-600" />
          <div>
            <h3 className="font-semibold text-green-800">WhatsApp Integration</h3>
            <p className="text-sm text-green-600">Allow customers to contact you directly via WhatsApp</p>
          </div>
        </div>
        <Switch
          checked={formData.whatsappEnabled}
          onCheckedChange={(checked) => handleInputChange('whatsappEnabled', checked)}
        />
      </div>

      {formData.whatsappEnabled && (
        <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
          <div className="space-y-2">
            <Label htmlFor="whatsappNumber">WhatsApp Number *</Label>
            <Input
              id="whatsappNumber"
              placeholder="+1234567890"
              value={formData.whatsappNumber}
              onChange={(e) => handleInputChange('whatsappNumber', e.target.value)}
            />
            <p className="text-xs text-gray-600">Include country code (e.g., +1 for US, +44 for UK)</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsappMessage">Default Message Template</Label>
            <Textarea
              id="whatsappMessage"
              value={formData.whatsappMessage}
              onChange={(e) => handleInputChange('whatsappMessage', e.target.value)}
              rows={3}
            />
            <p className="text-xs text-gray-600">This message will be pre-filled when customers click the WhatsApp button</p>
          </div>

          {formData.whatsappNumber && (
            <div className="p-3 bg-white rounded border">
              <p className="text-sm font-medium mb-2">Preview:</p>
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Contact Seller on WhatsApp
              </a>
            </div>
          )}
        </div>
      )}

      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-2">WhatsApp Benefits:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Direct communication with customers</li>
          <li>• Instant notifications for inquiries</li>
          <li>• Build trust and customer relationships</li>
          <li>• Handle custom orders and negotiations</li>
          <li>• Provide real-time customer support</li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-6 h-6" />
            Add New Product
          </CardTitle>
          
          {/* Step Indicator */}
          <div className="flex items-center justify-center mt-6">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep >= step ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > step ? <CheckCircle className="w-4 h-4" /> : step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    currentStep > step ? 'bg-emerald-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-2">
            <p className="text-sm text-gray-600">
              Step {currentStep} of 3: {
                currentStep === 1 ? 'Basic Information' :
                currentStep === 2 ? 'Pricing & Inventory' :
                'WhatsApp Integration'
              }
            </p>
          </div>
        </CardHeader>
        
        <CardContent>
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          
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
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                {isSubmitting ? 'Adding Product...' : 'Add Product'}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProduct;
