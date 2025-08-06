import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingBag, Search, Heart, ShoppingCart, User, Bell, Package, Star, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SubscriptionOptions from '@/components/SubscriptionOptions';

const BuyerDashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeView, setActiveView] = useState<'dashboard' | 'subscription'>('dashboard');

  const featuredProducts = [
    { id: 1, name: 'Premium Wireless Headphones', price: '$299', rating: 4.8, image: '/placeholder.svg', seller: 'TechStore Pro' },
    { id: 2, name: 'Smart Watch Series X', price: '$599', rating: 4.9, image: '/placeholder.svg', seller: 'GadgetWorld' },
    { id: 3, name: 'Professional Camera Lens', price: '$899', rating: 4.7, image: '/placeholder.svg', seller: 'PhotoGear Ltd' },
    { id: 4, name: 'Organic Skincare Set', price: '$149', rating: 4.9, image: '/placeholder.svg', seller: 'Beauty Naturals' }
  ];

  const categories = [
    { name: 'Electronics', icon: '💻', count: '12,450' },
    { name: 'Fashion', icon: '👗', count: '8,230' },
    { name: 'Home & Garden', icon: '🏠', count: '6,780' },
    { name: 'Sports', icon: '⚽', count: '4,560' },
    { name: 'Books', icon: '📚', count: '15,670' },
    { name: 'Beauty', icon: '💄', count: '3,890' }
  ];

  const renderDashboard = () => (
    <>
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Welcome back!</h2>
        <p className="text-white/70">Discover amazing products from verified sellers worldwide</p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
        <Input
          type="text"
          placeholder="Search for products, brands, or categories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50 text-lg"
        />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Orders', value: '24', icon: Package },
          { label: 'Wishlist', value: '12', icon: Heart },
          { label: 'Cart Items', value: '3', icon: ShoppingCart },
          { label: 'Reviews', value: '18', icon: Star }
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6 text-center">
                <Icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-white/60">{stat.label}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">Shop by Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="font-semibold text-white mb-1">{category.name}</div>
                <div className="text-white/60 text-sm">{category.count} items</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">Featured Products</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all cursor-pointer">
              <CardHeader className="p-4">
                <div className="aspect-square bg-white/20 rounded-lg mb-3 flex items-center justify-center">
                  <Package className="w-12 h-12 text-white/60" />
                </div>
                <CardTitle className="text-white text-lg">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white/80 text-sm">{product.rating}</span>
                  </div>
                  <span className="text-white/60 text-sm">by {product.seller}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{product.price}</span>
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">Buyer Dashboard</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <Button 
                onClick={() => setActiveView('subscription')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                disabled={activeView === 'subscription'}
              >
                <Crown className="w-4 h-4 mr-2" />
                Subscription
              </Button>
              {activeView === 'subscription' && (
                <Button 
                  variant="outline"
                  onClick={() => setActiveView('dashboard')}
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  Back to Dashboard
                </Button>
              )}
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white">
                <ShoppingCart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white">
                <User className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/')}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {activeView === 'dashboard' ? renderDashboard() : <SubscriptionOptions userType="buyer" />}
      </div>
    </div>
  );
};

export default BuyerDashboard;
