
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Store, ArrowLeft, ArrowRight, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SellerSignup = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    
    // Business Information
    businessName: '',
    businessType: '',
    businessRegistration: '',
    taxId: '',
    yearEstablished: '',
    businessAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    
    // Product Information
    productCategories: [],
    monthlyVolume: '',
    averageOrderValue: '',
    productDescription: '',
    
    // Verification Documents
    businessLicense: null,
    taxCertificate: null,
    identityDocument: null,
    
    // Additional Information
    previousExperience: '',
    marketingPlan: '',
    agreeToTerms: false,
    agreeToPolicy: false
  });

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Final submission
      navigate('/seller/dashboard');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <Button
          variant="ghost"
          className="text-white/80 hover:text-white mb-6"
          onClick={() => navigate('/seller/login')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Login
        </Button>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Store className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-white">
              Seller Registration
            </CardTitle>
            <p className="text-white/70">Step {currentStep} of {totalSteps}</p>
            
            {/* Progress Bar */}
            <div className="w-full bg-white/20 rounded-full h-2 mt-4">
              <div 
                className="bg-gradient-to-r from-emerald-600 to-teal-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </CardHeader>
          
          <CardContent>
            <form className="space-y-6">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-white/90">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-white/90">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/90">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white/90">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-white/90">Password *</Label>
                      <Input
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        placeholder="••••••••"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-white/90">Confirm Password *</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Business Information */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Business Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="businessName" className="text-white/90">Business Name *</Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="Your Business LLC"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessType" className="text-white/90">Business Type *</Label>
                      <Select value={formData.businessType} onValueChange={(value) => setFormData({...formData, businessType: value})}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="llc">LLC</SelectItem>
                          <SelectItem value="corporation">Corporation</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="yearEstablished" className="text-white/90">Year Established</Label>
                      <Input
                        id="yearEstablished"
                        value={formData.yearEstablished}
                        onChange={(e) => setFormData({...formData, yearEstablished: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        placeholder="2020"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessRegistration" className="text-white/90">Business Registration #</Label>
                      <Input
                        id="businessRegistration"
                        value={formData.businessRegistration}
                        onChange={(e) => setFormData({...formData, businessRegistration: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        placeholder="REG123456789"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="taxId" className="text-white/90">Tax ID / EIN</Label>
                      <Input
                        id="taxId"
                        value={formData.taxId}
                        onChange={(e) => setFormData({...formData, taxId: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        placeholder="12-3456789"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessAddress" className="text-white/90">Business Address *</Label>
                    <Input
                      id="businessAddress"
                      value={formData.businessAddress}
                      onChange={(e) => setFormData({...formData, businessAddress: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="123 Business St"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-white/90">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        placeholder="New York"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state" className="text-white/90">State/Province *</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => setFormData({...formData, state: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        placeholder="NY"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="postalCode" className="text-white/90">Postal Code *</Label>
                      <Input
                        id="postalCode"
                        value={formData.postalCode}
                        onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        placeholder="10001"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-white/90">Country *</Label>
                      <Select value={formData.country} onValueChange={(value) => setFormData({...formData, country: value})}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Product Information */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Product Information</h3>
                  
                  <div className="space-y-2">
                    <Label className="text-white/90">Product Categories *</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Books', 'Beauty', 'Automotive', 'Other'].map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox 
                            id={category}
                            className="border-white/20 data-[state=checked]:bg-emerald-600"
                          />
                          <Label htmlFor={category} className="text-white/80 text-sm">{category}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="monthlyVolume" className="text-white/90">Expected Monthly Sales Volume</Label>
                      <Select value={formData.monthlyVolume} onValueChange={(value) => setFormData({...formData, monthlyVolume: value})}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select volume" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-100">0-100 items</SelectItem>
                          <SelectItem value="100-500">100-500 items</SelectItem>
                          <SelectItem value="500-1000">500-1000 items</SelectItem>
                          <SelectItem value="1000+">1000+ items</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="averageOrderValue" className="text-white/90">Average Order Value</Label>
                      <Select value={formData.averageOrderValue} onValueChange={(value) => setFormData({...formData, averageOrderValue: value})}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-50">$0-50</SelectItem>
                          <SelectItem value="50-100">$50-100</SelectItem>
                          <SelectItem value="100-250">$100-250</SelectItem>
                          <SelectItem value="250+">$250+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="productDescription" className="text-white/90">Product Description</Label>
                    <Textarea
                      id="productDescription"
                      value={formData.productDescription}
                      onChange={(e) => setFormData({...formData, productDescription: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="Describe the products you plan to sell..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="previousExperience" className="text-white/90">Previous E-commerce Experience</Label>
                    <Textarea
                      id="previousExperience"
                      value={formData.previousExperience}
                      onChange={(e) => setFormData({...formData, previousExperience: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="Tell us about your previous selling experience..."
                      rows={3}
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Verification & Terms */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Verification & Terms</h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-white/90">Document Upload</Label>
                      <div className="space-y-3">
                        {[
                          { name: 'Business License', key: 'businessLicense' },
                          { name: 'Tax Certificate', key: 'taxCertificate' },
                          { name: 'Identity Document', key: 'identityDocument' }
                        ].map((doc) => (
                          <div key={doc.key} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                            <Upload className="w-5 h-5 text-white/60" />
                            <span className="text-white/80 flex-1">{doc.name}</span>
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                            >
                              Choose File
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="marketingPlan" className="text-white/90">Marketing Strategy</Label>
                      <Textarea
                        id="marketingPlan"
                        value={formData.marketingPlan}
                        onChange={(e) => setFormData({...formData, marketingPlan: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        placeholder="How do you plan to market your products on our platform?"
                        rows={3}
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="terms"
                          checked={formData.agreeToTerms}
                          onCheckedChange={(checked) => setFormData({...formData, agreeToTerms: checked === true})}
                          className="border-white/20 data-[state=checked]:bg-emerald-600"
                        />
                        <Label htmlFor="terms" className="text-white/80 text-sm">
                          I agree to the Terms of Service and Seller Agreement
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="policy"
                          checked={formData.agreeToPolicy}
                          onCheckedChange={(checked) => setFormData({...formData, agreeToPolicy: checked === true})}
                          className="border-white/20 data-[state=checked]:bg-emerald-600"
                        />
                        <Label htmlFor="policy" className="text-white/80 text-sm">
                          I agree to the Privacy Policy and Data Processing Agreement
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                <Button
                  type="button"
                  onClick={handleNext}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                >
                  {currentStep === totalSteps ? 'Submit Application' : 'Next'}
                  {currentStep !== totalSteps && <ArrowRight className="w-4 h-4 ml-2" />}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SellerSignup;
