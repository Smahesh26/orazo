
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Zap, Shield, Users, Settings, Database, ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CorporateLanding = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const solutions = [
    {
      icon: Database,
      title: 'Bulk Management',
      description: 'Manage thousands of products and orders efficiently with our enterprise-grade tools'
    },
    {
      icon: Zap,
      title: 'API Integration',
      description: 'Seamlessly integrate with your existing systems using our comprehensive API suite'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption and compliance certifications'
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Advanced user roles and permissions for large teams and multi-department access'
    }
  ];

  const features = [
    'Dedicated account manager',
    'Custom API endpoints',
    'White-label solutions',
    'Advanced analytics & reporting',
    'Priority technical support',
    'Custom integrations',
    'SLA guarantees',
    'Multi-tenant architecture'
  ];

  const plans = [
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with complex needs',
      features: ['Unlimited products', 'Advanced API access', 'Dedicated support', 'Custom integrations']
    },
    {
      name: 'Enterprise Plus',
      price: 'Custom',
      description: 'For multinational corporations',
      features: ['Everything in Enterprise', 'White-label solution', 'Multi-region deployment', 'SLA guarantees']
    }
  ];

  const stats = [
    { label: 'Enterprise Clients', value: '500+' },
    { label: 'API Calls/Month', value: '100M+' },
    { label: 'Uptime Guarantee', value: '99.99%' },
    { label: 'Support Response', value: '<1 Hour' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm mb-6 animate-fade-in">
              <Building2 className="w-4 h-4" />
              Trusted by Fortune 500 companies
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Enterprise
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent block">
                E-Commerce
              </span>
              Solutions
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in">
              Scale your business with our enterprise-grade e-commerce platform designed for large organizations
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 text-lg"
                onClick={() => navigate('/corporate/login')}
              >
                Get Started <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                Schedule Demo <Phone className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Solutions Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Enterprise Solutions
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <Card
                    key={index}
                    className={`bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-500 cursor-pointer transform ${
                      hoveredCard === index ? 'scale-105' : ''
                    }`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                      <p className="text-white/70">{solution.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Features and Security */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Enterprise Features</h2>
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <Shield className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-white/70 mb-6">
                Your data security is our top priority. We maintain industry-leading security standards and compliance certifications.
              </p>
              <ul className="space-y-2 text-white/80">
                <li>• SOC 2 Type II certified</li>
                <li>• GDPR & CCPA compliant</li>
                <li>• 256-bit SSL encryption</li>
                <li>• Regular security audits</li>
              </ul>
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Enterprise Plans</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {plans.map((plan, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-orange-400 mb-4">{plan.price}</div>
                    <p className="text-white/70 mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-white/80">
                          <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                      Contact Sales
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Scale Your Enterprise?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our enterprise solutions can transform your business operations
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 text-lg"
                onClick={() => navigate('/corporate/login')}
              >
                Get Started <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                Schedule Demo <Phone className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateLanding;
