
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Building2, ArrowLeft, Eye, EyeOff, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CorporateLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    companyCode: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/corporate/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Button
          variant="ghost"
          className="text-white/80 hover:text-white mb-6"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-white">
              Corporate Portal
            </CardTitle>
            <p className="text-white/70">
              Enterprise access for authorized personnel
            </p>
            <div className="flex items-center justify-center gap-2 mt-2 text-amber-400">
              <Shield className="w-4 h-4" />
              <span className="text-sm">Secure Enterprise Login</span>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="companyCode" className="text-white/90">Company Code</Label>
                <Input
                  id="companyCode"
                  value={formData.companyCode}
                  onChange={(e) => setFormData({...formData, companyCode: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="CORP-12345"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/90">Corporate Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="admin@company.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white/90">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 pr-10"
                    placeholder="••••••••"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 text-white/70 hover:text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
              >
                Access Corporate Dashboard
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-white/60 text-sm">
                Need access? Contact your system administrator
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CorporateLogin;
