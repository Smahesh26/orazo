
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { DollarSign, Building2 } from 'lucide-react';
import { NGOProductFormData } from './types';

interface Step2PricingInventoryProps {
  formData: NGOProductFormData;
  onInputChange: (field: keyof NGOProductFormData, value: string | boolean | File[]) => void;
}

const Step2PricingInventory = ({ formData, onInputChange }: Step2PricingInventoryProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              onChange={(e) => onInputChange('price', e.target.value)}
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
            onChange={(e) => onInputChange('stockQuantity', e.target.value)}
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
            onChange={(e) => onInputChange('sku', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="impactMetrics">Impact Metrics</Label>
          <Input
            id="impactMetrics"
            placeholder="e.g., 1 purchase = 1 meal donated"
            value={formData.impactMetrics}
            onChange={(e) => onInputChange('impactMetrics', e.target.value)}
          />
        </div>
      </div>

      {/* Corporate Sales Options */}
      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Building2 className="w-6 h-6 text-purple-600" />
            <div>
              <h3 className="font-semibold text-purple-800">Corporate Sales</h3>
              <p className="text-sm text-purple-600">Enable bulk orders for corporate partners</p>
            </div>
          </div>
          <Switch
            checked={formData.allowBulkOrders}
            onCheckedChange={(checked) => onInputChange('allowBulkOrders', checked)}
          />
        </div>

        {formData.allowBulkOrders && (
          <div className="space-y-2">
            <Label htmlFor="corporateDiscount">Corporate Discount (%)</Label>
            <Input
              id="corporateDiscount"
              type="number"
              placeholder="10"
              value={formData.corporateDiscount}
              onChange={(e) => onInputChange('corporateDiscount', e.target.value)}
            />
            <p className="text-xs text-purple-600">Discount for bulk orders (minimum 10 items)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Step2PricingInventory;
