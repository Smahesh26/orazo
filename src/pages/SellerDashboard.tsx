
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, TrendingUp, Package, DollarSign, Users, ShoppingCart, Star, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NGOAddProduct from '@/components/NGOAddProduct';

const SellerDashboard = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState<'dashboard' | 'add-product'>('dashboard');

  const stats = [
    { label: 'Impact Created', value: '$24,500', change: '+12%', icon: Heart, color: 'text-red-400' },
    { label: 'Orders', value: '148', change: '+8%', icon: ShoppingCart, color: 'text-blue-400' },
    { label: 'Products', value: '32', change: '+3', icon: Package, color: 'text-purple-400' },
    { label: 'Rating', value: '4.8', change: '+0.2', icon: Star, color: 'text-yellow-400' }
  ];

  const recentOrders = [
    { id: '#12345', customer: 'John Doe', product: 'Handcrafted Jewelry', amount: '$299', status: 'Shipped', cause: 'Women Empowerment' },
    { id: '#12346', customer: 'Jane Smith', product: 'Educational Kit', amount: '$599', status: 'Processing', cause: 'Child Education' },
    { id: '#12347', customer: 'Mike Johnson', product: 'Eco-Friendly Bags', amount: '$149', status: 'Delivered', cause: 'Environment' },
    { id: '#12348', customer: 'Sarah Wilson', product: 'Health Supplements', amount: '$199', status: 'Pending', cause: 'Healthcare' }
  ];

  const topProducts = [
    { name: 'Handcrafted Jewelry Set', sales: 45, revenue: '$13,455', cause: 'Women Empowerment' },
    { name: 'Educational Learning Kit', sales: 32, revenue: '$19,168', cause: 'Child Education' },
    { name: 'Organic Food Products', sales: 18, revenue: '$5,400', cause: 'Sustainable Agriculture' },
    { name: 'Eco-Friendly Home Items', sales: 28, revenue: '$8,400', cause: 'Environment' }
  ];

  const renderDashboard = () => (
    <>
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Welcome back, Change Maker!</h2>
        <p className="text-white/70">Here's the impact you're creating today</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/70 text-sm font-medium">{stat.label}</p>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                      <span className={`text-sm ${stat.color}`}>{stat.change}</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Impact Chart */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Impact Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <div className="text-center">
                <Heart className="w-16 h-16 text-red-400 mx-auto mb-4" />
                <p className="text-white/70">Impact visualization</p>
                <p className="text-white/50 text-sm">Chart showing your social impact</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Top Impact Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div>
                    <h4 className="text-white font-medium">{product.name}</h4>
                    <p className="text-white/60 text-sm">{product.sales} sales • {product.cause}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-400 font-semibold">{product.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <CardTitle className="text-white">Recent Impact Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-white/70 text-left py-3">Order ID</th>
                  <th className="text-white/70 text-left py-3">Supporter</th>
                  <th className="text-white/70 text-left py-3">Product</th>
                  <th className="text-white/70 text-left py-3">Cause</th>
                  <th className="text-white/70 text-left py-3">Amount</th>
                  <th className="text-white/70 text-left py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
                  <tr key={index} className="border-b border-white/5">
                    <td className="text-white py-4">{order.id}</td>
                    <td className="text-white py-4">{order.customer}</td>
                    <td className="text-white/80 py-4">{order.product}</td>
                    <td className="text-white/80 py-4">{order.cause}</td>
                    <td className="text-emerald-400 py-4 font-semibold">{order.amount}</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        order.status === 'Delivered' ? 'bg-green-500/20 text-green-400' :
                        order.status === 'Shipped' ? 'bg-blue-500/20 text-blue-400' :
                        order.status === 'Processing' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Commission Notice */}
      <Card className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-md border-amber-200/20 mt-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-amber-400" />
            <div>
              <h3 className="text-white font-semibold">0% Commission Period Active!</h3>
              <p className="text-white/70 text-sm mt-1">
                You're currently in your commission-free period. After 3 months, a 5% fee applies on quarterly sales totals. 
                <a href="/terms" className="text-amber-400 hover:underline ml-1">View terms & conditions</a>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">NGO Dashboard</h1>
                <p className="text-white/60 text-sm">Creating Impact Through Commerce</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button 
                onClick={() => setActiveView('add-product')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                disabled={activeView === 'add-product'}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
              {activeView === 'add-product' && (
                <Button 
                  variant="outline"
                  onClick={() => setActiveView('dashboard')}
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  Back to Dashboard
                </Button>
              )}
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
        {activeView === 'dashboard' ? renderDashboard() : <NGOAddProduct />}
      </div>
    </div>
  );
};

export default SellerDashboard;
