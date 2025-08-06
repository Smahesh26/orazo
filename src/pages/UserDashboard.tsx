
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  ShoppingBag, 
  Heart, 
  MapPin, 
  CreditCard,
  Bell,
  Settings,
  Package,
  Truck,
  Star,
  Gift,
  HelpCircle
} from 'lucide-react';

const UserDashboard = () => {
  const [user] = useState({
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+91 98765 43210",
    memberSince: "January 2023",
    blissCoins: 2500
  });

  const [recentOrders] = useState([
    {
      id: "ORD001",
      date: "2024-06-10",
      status: "Delivered",
      total: "₹1,299",
      items: 3,
      product: "Wireless Headphones"
    },
    {
      id: "ORD002", 
      date: "2024-06-08",
      status: "In Transit",
      total: "₹899",
      items: 1,
      product: "Smart Watch"
    },
    {
      id: "ORD003",
      date: "2024-06-05",
      status: "Processing",
      total: "₹2,499",
      items: 2,
      product: "Laptop Accessories"
    }
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Delivered':
        return <Badge className="bg-green-100 text-green-800">Delivered</Badge>;
      case 'In Transit':
        return <Badge className="bg-blue-100 text-blue-800">In Transit</Badge>;
      case 'Processing':
        return <Badge className="bg-yellow-100 text-yellow-800">Processing</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-black to-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-black" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {user.name}!</h1>
              <p className="text-gray-300">Member since {user.memberSince}</p>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{user.blissCoins}</div>
                <div className="text-sm text-gray-300">Bliss Coins</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">My Orders</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            <TabsTrigger value="addresses">Addresses</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <ShoppingBag className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">24</div>
                  <div className="text-gray-600">Total Orders</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">18</div>
                  <div className="text-gray-600">Wishlist Items</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Gift className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{user.blissCoins}</div>
                  <div className="text-gray-600">Bliss Coins</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">4.8</div>
                  <div className="text-gray-600">Avg Rating</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <Package className="w-8 h-8 text-gray-400" />
                        <div>
                          <div className="font-semibold">{order.product}</div>
                          <div className="text-sm text-gray-600">Order #{order.id} • {order.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{order.total}</div>
                        {getStatusBadge(order.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <Package className="w-8 h-8 text-gray-400" />
                        <div>
                          <div className="font-semibold">{order.product}</div>
                          <div className="text-sm text-gray-600">Order #{order.id} • {order.date} • {order.items} items</div>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <div className="font-semibold">{order.total}</div>
                        {getStatusBadge(order.status)}
                        <div>
                          <Button variant="outline" size="sm">Track Order</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wishlist">
            <Card>
              <CardHeader>
                <CardTitle>My Wishlist</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Your wishlist is empty</h3>
                  <p className="text-gray-600 mb-4">Save items you love to buy them later</p>
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    Continue Shopping
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="addresses">
            <Card>
              <CardHeader>
                <CardTitle>Saved Addresses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                        <div>
                          <div className="font-semibold">Home</div>
                          <div className="text-gray-600">
                            123 Main Street, Sector 15<br />
                            Mumbai, Maharashtra 400001<br />
                            India
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Add New Address
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CreditCard className="w-5 h-5 text-gray-400" />
                        <div>
                          <div className="font-semibold">**** **** **** 1234</div>
                          <div className="text-sm text-gray-600">Expires 12/25</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Add New Payment Method
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <div className="text-gray-600">{user.name}</div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <div className="text-gray-600">{user.email}</div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Phone</label>
                    <div className="text-gray-600">{user.phone}</div>
                  </div>
                  <Button variant="outline">Edit Profile</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Bell className="w-5 h-5 text-gray-400" />
                        <span>Order Updates</span>
                      </div>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Bell className="w-5 h-5 text-gray-400" />
                        <span>Promotional Offers</span>
                      </div>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserDashboard;
