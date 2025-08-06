
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Users, 
  Globe, 
  TrendingUp, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  MessageCircle,
  Building2,
  ShoppingCart
} from 'lucide-react';

const NGOLanding = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Heart,
      title: "0% Commission",
      description: "Start selling with absolutely no commission fees. Keep 100% of your profits.",
      highlight: true
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Integration",
      description: "Connect directly with customers through WhatsApp for instant communication."
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Advanced security measures to protect your NGO and customer data."
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Track your sales, monitor performance, and grow your impact."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a network of NGOs making a difference through commerce."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Sell to buyers and corporate partners worldwide."
    }
  ];

  const testimonials = [
    {
      name: "Green Earth Foundation",
      role: "Environmental NGO",
      content: "This platform helped us increase our fundraising by 300% through product sales!",
      rating: 5
    },
    {
      name: "Hope for Children",
      role: "Child Welfare NGO",
      content: "The WhatsApp integration made customer communication so much easier.",
      rating: 5
    },
    {
      name: "Clean Water Initiative",
      role: "Health & Water NGO",
      content: "Zero commission means more money goes directly to our cause.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">NGO Marketplace</h1>
                <p className="text-white/60 text-sm">Empowering Change Through Commerce</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                onClick={() => navigate('/')}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Home
              </Button>
              <Button 
                onClick={() => navigate('/seller/login')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Sell with Purpose,
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}Keep Every Dollar
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Join thousands of NGOs using our platform to sell products, raise funds, and make an impact. 
            Start with 0% commission and grow your cause.
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span className="text-white">No Setup Fees</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span className="text-white">0% Commission*</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span className="text-white">WhatsApp Support</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button 
              size="lg"
              onClick={() => navigate('/seller/signup')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Start Selling Now <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/seller/login')}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Sign In
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/70">Active NGOs</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-white mb-2">$2.5M+</div>
              <div className="text-white/70">Funds Raised</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-white/70">Products Sold</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-white/70">Satisfaction Rate</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-4">Why Choose Our Platform?</h3>
          <p className="text-xl text-white/70">Everything you need to sell successfully and support your cause</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className={`bg-white/10 backdrop-blur-md border-white/20 ${
                  feature.highlight ? 'ring-2 ring-blue-400' : ''
                }`}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    feature.highlight ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-white/10'
                  }`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Target Audiences */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-4">Who Can You Sell To?</h3>
          <p className="text-xl text-white/70">Reach both individual buyers and corporate partners</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white text-2xl">Individual Buyers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white/70">Connect with consumers who care about your cause</p>
              <ul className="space-y-2 text-white/60">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Direct customer relationships
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  WhatsApp communication
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Social impact driven purchases
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white text-2xl">Corporate Partners</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white/70">Partner with businesses for bulk orders and CSR initiatives</p>
              <ul className="space-y-2 text-white/60">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Bulk order capabilities
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Corporate social responsibility
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Long-term partnerships
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-4">Success Stories</h3>
          <p className="text-xl text-white/70">See how NGOs are thriving on our platform</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-white/60 text-sm">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border-white/20">
          <CardContent className="p-12 text-center">
            <h3 className="text-4xl font-bold text-white mb-4">Ready to Make an Impact?</h3>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join our platform today and start selling with purpose. Your cause deserves the best tools to succeed.
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/seller/signup')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Start Your Journey <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-blue-400" />
                <span className="text-white font-bold">NGO Marketplace</span>
              </div>
              <p className="text-white/60 text-sm">
                Empowering NGOs to create positive change through commerce.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><button onClick={() => navigate('/seller/signup')}>Get Started</button></li>
                <li><button onClick={() => navigate('/seller/login')}>Sign In</button></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Audiences</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><button onClick={() => navigate('/')}>Buyers</button></li>
                <li><button onClick={() => navigate('/corporate')}>Corporate</button></li>
                <li><button onClick={() => navigate('/seller')}>NGOs</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="/terms">Terms & Conditions</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/commission-policy">Commission Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © 2024 NGO Marketplace. All rights reserved.
            </p>
            <p className="text-white/40 text-xs mt-2">
              *0% commission for first 3 months, then 5% on quarterly sales total. See Terms & Conditions for details.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NGOLanding;
