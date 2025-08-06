
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  MapPin, 
  ShoppingCart, 
  User, 
  Globe, 
  Menu,
  Mic,
  Bell,
  Zap,
  Star,
  TrendingUp
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount] = useState(3); // Mock cart count

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 header-glass overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-32 h-32 bg-background/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-8 left-1/4 w-16 h-16 bg-background/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-0 right-1/3 w-24 h-24 bg-background/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Top promotional banner with gradient */}
      <div className="bg-gradient-to-r from-primary/95 via-primary to-primary/95 text-primary-foreground text-center py-3 text-sm font-semibold shadow-lg glass-effect relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/10 to-transparent animate-pulse"></div>
        <div className="relative flex items-center justify-center gap-2">
          <Star className="w-4 h-4 text-background animate-pulse" />
          <span>🎉 Free delivery on orders over ₹499 | Download our app for exclusive B2B deals</span>
          <TrendingUp className="w-4 h-4 text-background animate-bounce" />
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between gap-6">
          {/* Enhanced Logo with animation */}
          <div 
            className="flex items-center gap-3 cursor-pointer group relative"
            onClick={() => navigate('/')}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300 glossy-button relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-transparent rounded-xl"></div>
                <span className="text-primary font-black text-2xl relative z-10">O</span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-ping"></div>
              </div>
            </div>
            <div className="relative">
              <span className="text-3xl font-black text-primary-foreground group-hover:text-background transition-all duration-300 tracking-tight">
                Orazox
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-background to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <Badge className="absolute -top-2 -right-8 bg-accent text-accent-foreground text-xs px-1 py-0 rounded-full animate-pulse">B2B</Badge>
            </div>
          </div>

          {/* Enhanced Location Selector */}
          <div className="hidden md:flex items-center gap-3 text-sm hover:bg-background/20 p-3 rounded-xl transition-all duration-300 glass-effect group cursor-pointer">
            <div className="relative">
              <MapPin className="w-5 h-5 text-background group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            </div>
            <div className="group-hover:translate-x-1 transition-transform duration-200">
              <div className="text-xs text-primary-foreground/80 font-medium">Deliver to</div>
              <div className="font-bold text-primary-foreground">Mumbai 400001</div>
            </div>
          </div>

          {/* Enhanced Search Bar */}
          <div className="flex-1 max-w-3xl relative">
            <div className="flex shadow-2xl glass-effect rounded-2xl overflow-hidden group border border-background/20">
              <Select defaultValue="all">
                <SelectTrigger className="w-36 rounded-r-none bg-background/95 text-foreground border-r-0 border-0 focus:ring-2 focus:ring-background/50 backdrop-blur-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-background border border-border backdrop-blur-md">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="automotive">Automotive</SelectItem>
                  <SelectItem value="textile">Textile</SelectItem>
                  <SelectItem value="industrial">Industrial</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative flex-1">
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products, suppliers, categories..."
                  className="rounded-none border-0 bg-background/95 text-foreground focus:ring-2 focus:ring-background/50 backdrop-blur-sm placeholder:text-muted-foreground/70 text-base"
                />
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 p-0 text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-200"
                >
                  <Mic className="w-4 h-4" />
                </Button>
              </div>
              <Button className="rounded-l-none glossy-button text-primary-foreground font-bold px-8 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Search className="w-5 h-5 relative z-10" />
              </Button>
            </div>
            <div className="absolute top-full left-0 right-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="bg-background/95 backdrop-blur-md rounded-lg p-3 shadow-xl border border-border/50">
                <div className="text-xs text-muted-foreground">Popular searches: Industrial Equipment, Electronics, Automotive Parts</div>
              </div>
            </div>
          </div>

          {/* Enhanced Language Selector */}
          <Select defaultValue="english">
            <SelectTrigger className="w-32 bg-transparent border-background/30 text-primary-foreground hover:bg-background/20 transition-all duration-300 glass-effect hover:scale-105">
              <Globe className="w-4 h-4 mr-2 text-background" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-background border border-border backdrop-blur-md">
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="hindi">Hindi</SelectItem>
            </SelectContent>
          </Select>

          {/* Enhanced Account Section */}
          <div 
            className="hidden md:flex items-center gap-2 cursor-pointer hover:bg-background/20 p-3 rounded-xl transition-all duration-300 glass-effect group"
            onClick={() => navigate('/user/dashboard')}
          >
            <div className="relative">
              <User className="w-5 h-5 text-background group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            </div>
            <div className="text-sm group-hover:translate-x-1 transition-transform duration-200">
              <div className="text-xs text-primary-foreground/80 font-medium">Hello, Sign in</div>
              <div className="font-bold text-primary-foreground">Your Account</div>
            </div>
          </div>

          {/* Enhanced Returns & Orders */}
          <div className="hidden lg:flex flex-col text-sm cursor-pointer hover:bg-background/20 p-3 rounded-xl transition-all duration-300 glass-effect group">
            <div className="text-xs text-primary-foreground/80 font-medium group-hover:text-background transition-colors duration-200">Returns</div>
            <div className="font-bold text-primary-foreground group-hover:text-background transition-colors duration-200">& Orders</div>
          </div>

          {/* Enhanced Prime Badge */}
          <Badge variant="outline" className="hidden lg:flex border-background text-background bg-transparent hover:bg-background/10 transition-all duration-300 glass-effect hover:scale-105 font-bold px-3 py-1">
            <Zap className="w-3 h-3 mr-1" />
            B2B Prime
          </Badge>

          {/* Enhanced Cart */}
          <div className="relative cursor-pointer hover:bg-background/20 p-3 rounded-xl flex items-center gap-2 transition-all duration-300 glass-effect group">
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-background group-hover:scale-110 transition-transform duration-200" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs w-6 h-6 rounded-full flex items-center justify-center shadow-lg glossy-button animate-bounce">
                  {cartCount}
                </Badge>
              )}
            </div>
            <span className="text-sm font-bold text-primary-foreground group-hover:translate-x-1 transition-transform duration-200">Cart</span>
          </div>

          {/* Enhanced Mobile Menu */}
          <Button variant="ghost" size="sm" className="md:hidden text-primary-foreground hover:bg-background/20 glass-effect hover:scale-110 transition-all duration-200">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Enhanced Secondary Navigation */}
      <div className="bg-primary/90 border-t border-background/20 backdrop-blur-sm glass-effect relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/5 to-transparent"></div>
        <div className="container mx-auto px-4 py-3 relative">
          <div className="flex items-center gap-8 text-sm">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-background/20 glass-effect hover:scale-105 transition-all duration-200 font-medium">
              <Menu className="w-4 h-4 mr-2" />
              All Categories
            </Button>
            {[
              "Today's Deals",
              "Bulk Orders", 
              "Verified Suppliers",
              "Trade Assurance",
              "Business Registry",
              "bliss coin"
            ].map((item, index) => (
              <span 
                key={item}
                className="cursor-pointer hover:text-background text-primary-foreground transition-all duration-300 font-medium hover:scale-105 relative group"
                onClick={() => item === "About Us" && navigate('/about')}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-background scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </span>
            ))}
            <span 
              className="cursor-pointer hover:text-background text-primary-foreground transition-all duration-300 font-medium hover:scale-105 relative group ml-auto"
              onClick={() => navigate('/about')}
            >
              About Us
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-background scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
