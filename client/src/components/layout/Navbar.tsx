import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import img from "@img/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-md py-2' : 'py-4'
      }`}
    >
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple via-brand-pink to-brand-yellow opacity-70"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold font-montserrat tracking-tight flex items-center animate-color-shift">
            <img className="h-16" src={img} alt="logo" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" 
              className={`text-gray-800 hover:text-brand-purple font-medium transition-colors relative group ${
                location === '/' ? 'text-brand-purple' : ''
              }`}
            >
              <h3>Home</h3>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/services" 
              className={`text-gray-800 hover:text-brand-purple font-medium transition-colors relative group ${
                location === '/services' ? 'text-brand-purple' : ''
              }`}
            >
              <h3>Services</h3>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-pink transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/about" 
              className={`text-gray-800 hover:text-brand-purple font-medium transition-colors relative group ${
                location === '/about' ? 'text-brand-purple' : ''
              }`}
            >
              <h3>About</h3>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all group-hover:w-full"></span>
            </Link>
            <a href="/about#ourteam" 
              className={`text-gray-800 hover:text-brand-purple font-medium transition-colors relative group ${
                location === '/about#ourteam' ? 'text-brand-purple' : ''
              }`}
            >
              <h3>Our Team</h3>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all group-hover:w-full"></span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-brand-purple focus:outline-none hover-lift"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-4/5 bg-white shadow-xl z-50 flex flex-col pt-20 px-6 transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-purple via-brand-magenta to-brand-pink"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-brand-purple opacity-5 animate-pulse-slow"></div>
        <div className="absolute top-40 left-10 w-16 h-16 rounded-full bg-brand-pink opacity-5 animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
        
        <button 
          onClick={closeMobileMenu}
          className="absolute top-5 right-5 text-brand-pink focus:outline-none hover:text-brand-purple transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="mb-8">
          <div className="text-xl font-bold font-montserrat tracking-tight flex items-center mb-6 animate-color-shift">
            <span className="text-brand-purple">MY</span>
            <span className="text-brand-pink ml-1">BRAND</span>
            <span className="text-gray-900 ml-1">MANAGERS</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">A Creative Agency That Builds Bold Brand Experiences</p>
        </div>
        
        <Link 
          href="/" 
          onClick={closeMobileMenu}
          className="py-4 text-lg border-b border-gray-100 text-gray-800 hover:text-brand-purple transition-colors relative group"
        >
          <span>Home</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-purple transition-all group-hover:w-1/4"></span>
        </Link>
        <Link 
          href="/services" 
          onClick={closeMobileMenu}
          className="py-4 text-lg border-b border-gray-100 text-gray-800 hover:text-brand-pink transition-colors relative group"
        >
          <span>Services</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-pink transition-all group-hover:w-1/4"></span>
        </Link>
        <Link 
          href="/about" 
          onClick={closeMobileMenu}
          className="py-4 text-lg border-b border-gray-100 text-gray-800 hover:text-brand-yellow transition-colors relative group"
        >
          <span>About</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-yellow transition-all group-hover:w-1/4"></span>
        </Link>
        <Link 
          href="/contact" 
          onClick={closeMobileMenu}
          className="mt-6 bg-gradient-to-r from-brand-purple to-brand-pink hover:from-brand-pink hover:to-brand-purple text-white py-3 px-4 rounded-md text-center transition-all hover:shadow-lg"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
