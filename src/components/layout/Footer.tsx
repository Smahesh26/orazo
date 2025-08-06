
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-white">
      {/* Back to top */}
      <div 
        className="bg-secondary text-center py-4 cursor-pointer hover:bg-muted transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Back to top
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Help & Navigation Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Help & Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-white">Your Account</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Returns Centre</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">100% Purchase Protection</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Help</a></li>
            </ul>
          </div>

          {/* Get to Know Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get to Know Us</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/about');
                  }}
                >
                  About Us
                </a>
              </li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Press Releases</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Orazox Science</a></li>
            </ul>
          </div>

          {/* Connect with Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect with Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-white">Facebook</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Instagram</a></li>
            </ul>
          </div>

          {/* Make Money with Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Make Money with Us</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/seller');
                  }}
                >
                  Sell on Orazox
                </a>
              </li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Sell under Orazox Accelerator</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Become an Affiliate</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Fulfilment by Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Advertise Your Products</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Orazox Global Selling</a></li>
            </ul>
          </div>
        </div>

        {/* Additional sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
          {/* Let Us Help You */}
          <div>
            <h3 className="font-bold text-lg mb-4">Let Us Help You</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-white">COVID-19 and Orazox</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Your Account</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Returns Centre</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Orazox App Download</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Help</a></li>
            </ul>
          </div>

          {/* Legal & Policy */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal & Policy</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-white">Conditions of Use & Sale</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Privacy Notice</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Interest-Based Ads</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Country & Language */}
          <div>
            <h3 className="font-bold text-lg mb-4">Country & Language</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-white">🇮🇳 India</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">🇺🇸 United States</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">🇬🇧 United Kingdom</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white">Language: English</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-secondary border-t border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-bold">Orazox</span>
            </div>
            
            <div className="text-sm text-muted-foreground text-center">
              © 2024 Orazox. All rights reserved. | Made in India 🇮🇳
            </div>
            
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>Privacy</span>
              <span>•</span>
              <span>Terms</span>
              <span>•</span>
              <span>Sitemap</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
