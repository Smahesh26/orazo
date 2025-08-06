
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Check, CreditCard, RefreshCw, Crown, Building2 } from 'lucide-react';

interface SubscriptionOptionsProps {
  userType: 'buyer' | 'corporate';
}

const SubscriptionOptions = ({ userType }: SubscriptionOptionsProps) => {
  const [selectedOption, setSelectedOption] = useState<'one-time' | 'subscription'>('one-time');

  const buyerPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: '$9.99/month',
      oneTimePrice: '$99.99/year',
      features: [
        'Access to all products',
        'Standard customer support',
        'Basic search filters',
        '5 wishlist items',
        'Mobile app access'
      ]
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: '$19.99/month',
      oneTimePrice: '$199.99/year',
      features: [
        'Everything in Basic',
        'Priority customer support',
        'Advanced search & filters',
        'Unlimited wishlist',
        'Early access to new products',
        'Exclusive deals & discounts'
      ],
      popular: true
    },
    {
      id: 'vip',
      name: 'VIP Plan',
      price: '$39.99/month',
      oneTimePrice: '$399.99/year',
      features: [
        'Everything in Premium',
        'Personal shopping assistant',
        'Free shipping on all orders',
        'VIP customer support',
        'Access to limited editions',
        'Personalized recommendations'
      ]
    }
  ];

  const corporatePlans = [
    {
      id: 'starter',
      name: 'Starter Plan',
      price: '$49.99/month',
      oneTimePrice: '$499.99/year',
      features: [
        'Up to 50 employees',
        'Basic analytics dashboard',
        'Standard API access',
        'Email support',
        'Monthly reports'
      ]
    },
    {
      id: 'business',
      name: 'Business Plan',
      price: '$99.99/month',
      oneTimePrice: '$999.99/year',
      features: [
        'Up to 200 employees',
        'Advanced analytics',
        'Full API access',
        'Priority support',
        'Weekly reports',
        'Custom integrations'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plan',
      price: '$199.99/month',
      oneTimePrice: '$1,999.99/year',
      features: [
        'Unlimited employees',
        'Enterprise analytics',
        'White-label solutions',
        'Dedicated account manager',
        'Daily reports',
        'Custom development'
      ]
    }
  ];

  const plans = userType === 'buyer' ? buyerPlans : corporatePlans;

  const handleSubscribe = (planId: string) => {
    console.log(`Subscribing to ${planId} with ${selectedOption} option`);
    // Here you would integrate with Stripe or payment processor
  };

  return (
    <div className="space-y-6">
      {/* Payment Type Selection */}
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Choose Payment Option
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={selectedOption}
            onValueChange={(value) => setSelectedOption(value as 'one-time' | 'subscription')}
            className="flex gap-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="one-time" id="one-time" />
              <label htmlFor="one-time" className="text-white cursor-pointer">
                One-time Payment (Annual)
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="subscription" id="subscription" />
              <label htmlFor="subscription" className="text-white cursor-pointer">
                Monthly Subscription
              </label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card 
            key={plan.id} 
            className={`bg-white/10 backdrop-blur-md border-white/20 relative ${
              plan.popular ? 'ring-2 ring-blue-400' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm flex items-center gap-1">
                  <Crown className="w-4 h-4" />
                  Most Popular
                </div>
              </div>
            )}
            
            <CardHeader className="text-center">
              <CardTitle className="text-white text-xl">{plan.name}</CardTitle>
              <div className="text-3xl font-bold text-white">
                {selectedOption === 'subscription' ? plan.price : plan.oneTimePrice}
              </div>
              <p className="text-white/60 text-sm">
                {selectedOption === 'subscription' ? 'per month' : 'per year (save 17%)'}
              </p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-white/80">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                onClick={() => handleSubscribe(plan.id)}
                className={`w-full ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                    : 'bg-white/20 hover:bg-white/30 text-white'
                }`}
              >
                {selectedOption === 'subscription' ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Start Subscription
                  </>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4 mr-2" />
                    Buy Now
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Info */}
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-white/80 text-sm">
            {userType === 'buyer' ? (
              <Crown className="w-4 h-4 text-yellow-400" />
            ) : (
              <Building2 className="w-4 h-4 text-blue-400" />
            )}
            <span>
              {selectedOption === 'subscription' 
                ? 'Cancel anytime. No long-term commitments.' 
                : 'One-time payment includes 12 months of full access.'}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubscriptionOptions;
