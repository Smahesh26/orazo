import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Search, Shield, Truck, Star, ArrowRight, Store, Factory, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: Search,
      title: 'Smart B2B Discovery',
      description: 'Find verified suppliers and manufacturers with our AI-powered search and industry-specific recommendations'
    },
    {
      icon: Shield,
      title: 'Trade Protection',
      description: 'Secure B2B transactions with our comprehensive trade protection and verified supplier network'
    },
    {
      icon: Truck,
      title: 'Global Logistics',
      description: 'Streamlined shipping solutions for bulk orders with our worldwide network of logistics partners'
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'Every supplier is verified and products are quality-checked to ensure reliable business partnerships'
    }
  ];

  const categories = [
    { 
      name: 'Agriculture & Food', 
      count: '15K+ suppliers',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
      description: 'Fresh produce & food processing'
    },
    { 
      name: 'Consumer Electronics', 
      count: '25K+ suppliers',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop',
      description: 'Latest tech & electronic devices'
    },
    { 
      name: 'Apparel & Accessories', 
      count: '30K+ suppliers',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
      description: 'Fashion & clothing manufacturers'
    },
    { 
      name: 'Furniture & Home Decor', 
      count: '18K+ suppliers',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      description: 'Home furnishing solutions'
    },
    { 
      name: 'Industrial Equipment', 
      count: '12K+ suppliers',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      description: 'Manufacturing & industrial tools'
    },
    { 
      name: 'Health & Medicine', 
      count: '8K+ suppliers',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      description: 'Medical equipment & supplies'
    }
  ];

  const allCategories = [
    'Agriculture & Food',
    'Apparel & Accessories',
    'Arts & Crafts',
    'Auto, Motorcycle Parts & Accessories',
    'Bags, Cases & Boxes',
    'Baby & Children Products',
    'Consumer Electronics',
    'Electrical & Electronics',
    'Electronics Components',
    'Fashion Accessories & Footwear',
    'Fashion Apparel & Fabrics',
    'Food, Household & Pets',
    'Furniture & Home Decor',
    'Gifts, Toys & Premiums',
    'Health & Medicine',
    'Health & Personal Care',
    'Home Appliances',
    'Industrial Equipment & Components',
    'Metallurgy, Mineral & Energy',
    'Mobile Electronics',
    'Office Supplies',
    'Packaging & Printing',
    'Textile',
    'Transportation'
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Industrial Coffee Roasting Machine',
      price: 'MOQ: 1 unit',
      originalPrice: '$15,000 - $25,000',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 125,
      badge: 'Verified Supplier'
    },
    {
      id: 2,
      name: 'Smart Factory Automation System',
      price: 'MOQ: 5 units',
      originalPrice: '$50,000 - $100,000',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 89,
      badge: 'Gold Supplier'
    },
    {
      id: 3,
      name: 'Commercial LED Display Panel',
      price: 'MOQ: 10 units',
      originalPrice: '$2,000 - $5,000',
      image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 234,
      badge: 'Trade Assured'
    },
    {
      id: 4,
      name: 'Textile Manufacturing Loom',
      price: 'MOQ: 2 units',
      originalPrice: '$30,000 - $45,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 156,
      badge: 'Premium Supplier'
    }
  ];

  const stats = [
    { label: 'Verified Suppliers', value: '200K+' },
    { label: 'Product Categories', value: '24' },
    { label: 'Countries Covered', value: '180+' },
    { label: 'Annual Trade Volume', value: '$50B+' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/10 to-muted/10"></div>
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full text-foreground text-sm mb-6 animate-fade-in">
              <Building2 className="w-4 h-4" />
              Trusted by 200,000+ businesses worldwide
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
              Global B2B
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                Trading Platform
              </span>
              for Businesses
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in">
              Connect with verified suppliers and manufacturers across 24 categories. Source products, negotiate deals, and scale your business globally.
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <Button 
                size="lg"
                className="glossy-button text-primary-foreground px-8 py-4 text-lg"
                onClick={() => navigate('/buyer/login')}
              >
                Start Sourcing <Factory className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-foreground/20 text-foreground hover:bg-foreground/10 px-8 py-4 text-lg glass-effect"
                onClick={() => navigate('/seller')}
              >
                Become a Supplier
              </Button>
            </div>
          </div>

          {/* Categories Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Browse by Industry
            </h2>
            <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
              Discover suppliers across 24 major business categories
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <Card
                  key={index}
                  className="glass-card border-border hover:bg-background/15 transition-all duration-300 cursor-pointer group overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-foreground mb-1">{category.name}</h3>
                      <p className="text-foreground/80 text-sm mb-1">{category.description}</p>
                      <p className="text-foreground/60 text-sm">{category.count}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* All Categories List */}
            <div className="mt-12 glass-card rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">All Business Categories</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {allCategories.map((category, index) => (
                  <div
                    key={index}
                    className="text-foreground/80 hover:text-foreground cursor-pointer p-2 rounded-lg hover:bg-background/10 transition-colors text-sm glass-effect"
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Products Section */}
          <div className="mb-20">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Featured Business Products
                </h2>
                <p className="text-foreground/70">Quality products from verified suppliers</p>
              </div>
              <Button 
                variant="outline"
                className="border-border text-foreground hover:bg-background/10 glass-effect"
              >
                View All Products <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="glass-card border-border hover:bg-background/15 transition-all duration-300 cursor-pointer group overflow-hidden"
                >
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold glossy-button">
                        {product.badge}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-primary fill-current' : 'text-muted'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-foreground/60 text-sm">({product.reviews})</span>
                    </div>
                    <div className="mb-3">
                      <span className="text-sm text-foreground/80">{product.price}</span>
                      <div className="text-lg font-bold text-foreground">{product.originalPrice}</div>
                    </div>
                    <Button 
                      className="w-full glossy-button text-primary-foreground"
                      size="sm"
                    >
                      Contact Supplier
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Why Choose Orazox for B2B Trading?
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className={`glass-card border-border hover:bg-background/15 transition-all duration-500 cursor-pointer transform ${
                      hoveredCard === index ? 'scale-105' : ''
                    }`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 glossy-button rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-foreground/70">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center glass-card p-6 rounded-xl">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center glass-card rounded-3xl p-12 border border-border">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already trading on our platform. Start sourcing from verified suppliers today.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg"
                className="glossy-button text-primary-foreground px-8 py-4 text-lg"
                onClick={() => navigate('/buyer/login')}
              >
                Start Sourcing <Building2 className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-background/10 px-8 py-4 text-lg glass-effect"
                onClick={() => navigate('/seller')}
              >
                Become a Supplier <Users className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 border-t border-border glass-card">
          <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Orazox</h3>
                <p className="text-foreground/60">Your trusted global B2B trading platform connecting businesses worldwide.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">For Buyers</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Find Suppliers</a></li>
                  <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Request Quotes</a></li>
                  <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Trade Assurance</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">For Suppliers</h4>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => navigate('/seller')}
                      className="text-foreground/60 hover:text-foreground transition-colors flex items-center gap-2"
                    >
                      <Store className="w-4 h-4" />
                      Start Selling
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => navigate('/corporate')}
                      className="text-foreground/60 hover:text-foreground transition-colors flex items-center gap-2"
                    >
                      <Building2 className="w-4 h-4" />
                      Premium Membership
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Support</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Help Center</a></li>
                  <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Trade Services</a></li>
                  <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border mt-8 pt-8 text-center">
              <p className="text-foreground/60">&copy; 2024 Orazox. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
