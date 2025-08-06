
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Store, TrendingUp, Globe, Users, DollarSign, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SellerLanding = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const benefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Sell to customers in 180+ countries with our worldwide marketplace platform'
    },
    {
      icon: TrendingUp,
      title: 'Boost Sales',
      description: 'Increase your revenue with our advanced marketing tools and promotional features'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track your performance with detailed insights and real-time sales analytics'
    },
    {
      icon: Users,
      title: 'Seller Support',
      description: '24/7 dedicated support team to help you succeed and grow your business'
    }
  ];

  const features = [
    'Easy product listing and management',
    'Integrated payment processing',
    'Inventory management tools',
    'Customer communication system',
    'Marketing and promotion tools',
    'Mobile seller app',
    'Multi-currency support',
    'Detailed sales reporting'
  ];

  const stats = [
    { label: 'Active Sellers', value: '50K+' },
    { label: 'Average Monthly Revenue', value: '$2,500' },
    { label: 'Countries Reached', value: '180+' },
    { label: 'Seller Satisfaction', value: '98%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm mb-6 animate-fade-in">
              <Store className="w-4 h-4" />
              Join 50,000+ successful sellers
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Grow Your
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent block">
                Business
              </span>
              Globally
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in">
              Join our premium marketplace and reach millions of customers worldwide with our powerful seller tools
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg"
                onClick={() => navigate('/seller/signup')}
              >
                Start Selling <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg"
                onClick={() => navigate('/seller/login')}
              >
                Seller Login
              </Button>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Sell With Us?
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
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
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-white/70">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Features List */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Everything You Need to Succeed</h2>
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <DollarSign className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Competitive Commission Rates</h3>
              <p className="text-white/70 mb-6">
                Keep more of what you earn with our transparent, low commission structure. No hidden fees, no surprises.
              </p>
              <ul className="space-y-2 text-white/80">
                <li>• Standard rate: 5% per transaction</li>
                <li>• High-volume sellers: 3% per transaction</li>
                <li>• No monthly subscription fees</li>
                <li>• Fast payouts within 24 hours</li>
              </ul>
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
              Ready to Start Your Selling Journey?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of successful sellers and start building your global business today
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg"
              onClick={() => navigate('/seller/signup')}
            >
              Get Started Now <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerLanding;
