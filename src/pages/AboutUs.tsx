
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Globe, 
  Heart, 
  Award,
  ShoppingBag,
  Truck,
  Shield,
  Star
} from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About Orazox</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're building India's most trusted e-commerce platform, connecting millions of customers 
            with quality products and empowering businesses to grow.
          </p>
          <Badge variant="outline" className="border-yellow-400 text-yellow-400 bg-transparent text-lg px-6 py-2">
            Made in India 🇮🇳
          </Badge>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                To democratize commerce in India by providing a platform where every business, 
                from small local stores to large enterprises, can reach customers nationwide 
                while offering consumers the best shopping experience possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-yellow-500" />
                  <span className="text-lg">Customer-first approach</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-yellow-500" />
                  <span className="text-lg">Empowering local businesses</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-6 h-6 text-yellow-500" />
                  <span className="text-lg">Connecting all of India</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-gray-800">10M+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800">500K+</div>
                  <div className="text-gray-600">Sellers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800">50M+</div>
                  <div className="text-gray-600">Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800">1000+</div>
                  <div className="text-gray-600">Cities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Trust & Security</h3>
                <p className="text-gray-600">
                  We prioritize the security of every transaction and protect our customers' data with industry-leading measures.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Excellence</h3>
                <p className="text-gray-600">
                  We maintain strict quality standards and work only with verified sellers to ensure authentic products.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Truck className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
                <p className="text-gray-600">
                  Our extensive logistics network ensures quick and reliable delivery to every corner of India.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2020, Orazox started with a simple vision: to create an inclusive 
              digital marketplace that serves every Indian, regardless of their location or background. 
              What began as a small team with big dreams has grown into India's fastest-growing 
              e-commerce platform.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Today, we're proud to serve millions of customers across 1000+ cities, supporting 
              local businesses and contributing to India's digital economy. Our journey continues 
              as we innovate and expand to make shopping more convenient, affordable, and accessible for all.
            </p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
              Join Our Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
              <p className="text-gray-300">24/7 support for all your needs</p>
              <p className="text-yellow-400">1800-ORAZOX</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Business Inquiries</h3>
              <p className="text-gray-300">Partner with us to grow your business</p>
              <p className="text-yellow-400">business@orazox.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Careers</h3>
              <p className="text-gray-300">Join our team of innovators</p>
              <p className="text-yellow-400">careers@orazox.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
