import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Users, Store, ShoppingBag, TrendingUp, DollarSign, Globe, Shield, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SubscriptionOptions from '@/components/SubscriptionOptions';

const CorporateDashboard = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState<'dashboard' | 'subscription'>('dashboard');

  const platformStats = [
    { label: 'Total Users', value: '2.4M', change: '+15%', icon: Users, color: 'text-blue-400' },
    { label: 'Active Sellers', value: '54,230', change: '+8%', icon: Store, color: 'text-emerald-400' },
    { label: 'Total Orders', value: '890K', change: '+22%', icon: ShoppingBag, color: 'text-purple-400' },
    { label: 'Platform Revenue', value: '$12.8M', change: '+18%', icon: DollarSign, color: 'text-yellow-400' }
  ];

  const regionalData = [
    { region: 'North America', revenue: '$5.2M', users: '980K', growth: '+12%' },
    { region: 'Europe', revenue: '$3.8M', users: '720K', growth: '+18%' },
    { region: 'Asia Pacific', revenue: '$2.9M', users: '540K', growth: '+25%' },
    { region: 'Others', revenue: '$0.9M', users: '160K', growth: '+8%' }
  ];

  const topCategories = [
    { name: 'Electronics', volume: '$3.2M', percentage: '25%' },
    { name: 'Fashion', volume: '$2.8M', percentage: '22%' },
    { name: 'Home & Garden', volume: '$1.9M', percentage: '15%' },
    { name: 'Sports', volume: '$1.5M', percentage: '12%' },
    { name: 'Books', volume: '$1.2M', percentage: '9%' },
    { name: 'Others', volume: '$2.2M', percentage: '17%' }
  ];

  const systemAlerts = [
    { type: 'warning', message: 'High server load detected in EU region', time: '5 min ago' },
    { type: 'info', message: 'New seller verification batch completed', time: '15 min ago' },
    { type: 'success', message: 'Payment system update deployed successfully', time: '1 hour ago' },
    { type: 'warning', message: 'Unusual transaction pattern detected', time: '2 hours ago' }
  ];

  const renderDashboard = () => (
    <>
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Corporate Overview</h2>
        <p className="text-white/70">Monitor and manage the entire platform ecosystem</p>
      </div>

      {/* Platform Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {platformStats.map((stat, index) => {
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
        {/* Regional Performance */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Regional Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {regionalData.map((region, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div>
                    <h4 className="text-white font-medium">{region.region}</h4>
                    <p className="text-white/60 text-sm">{region.users} users</p>
                  </div>
                  <div className="text-right">
                    <p className="text-orange-400 font-semibold">{region.revenue}</p>
                    <p className="text-green-400 text-sm">{region.growth}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Categories */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Top Categories by Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCategories.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-8 bg-gradient-to-t from-orange-600 to-red-600 rounded-full"></div>
                    <span className="text-white">{category.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-orange-400 font-semibold">{category.volume}</span>
                    <span className="text-white/60 text-sm w-12">{category.percentage}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* System Health */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Shield className="w-5 h-5" />
              System Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                <span className="text-white">API Response Time</span>
                <span className="text-green-400">125ms</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                <span className="text-white">Server Uptime</span>
                <span className="text-green-400">99.98%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <span className="text-white">Database Load</span>
                <span className="text-yellow-400">78%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                <span className="text-white">Security Status</span>
                <span className="text-green-400">Secure</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Alerts */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white">System Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {systemAlerts.map((alert, index) => (
                <div key={index} className={`p-3 rounded-lg border ${
                  alert.type === 'warning' ? 'bg-yellow-500/10 border-yellow-500/20' :
                  alert.type === 'success' ? 'bg-green-500/10 border-green-500/20' :
                  'bg-blue-500/10 border-blue-500/20'
                }`}>
                  <div className="flex items-start justify-between">
                    <p className="text-white text-sm">{alert.message}</p>
                    <span className="text-white/50 text-xs">{alert.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Corporate Dashboard</h1>
                <p className="text-white/60 text-sm">Platform Management Center</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button 
                onClick={() => setActiveView('subscription')}
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                disabled={activeView === 'subscription'}
              >
                <Crown className="w-4 h-4 mr-2" />
                Enterprise Plans
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
              <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">All Systems Operational</span>
              </div>
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
        {activeView === 'dashboard' ? renderDashboard() : <SubscriptionOptions userType="corporate" />}
      </div>
    </div>
  );
};

export default CorporateDashboard;
