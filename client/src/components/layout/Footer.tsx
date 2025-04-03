import { Link } from 'wouter';
import { Facebook, Instagram, Twitter, Linkedin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="text-xl font-bold font-montserrat tracking-tight flex flex-wrap items-center mb-4">
              <span className="text-brand-purple">MY</span>
              <span className="text-brand-pink ml-1">BRAND</span>
              <span className="text-white ml-1">MANAGERS</span>
            </Link>
            <p className="text-gray-400 mb-6">
              A Creative Agency That Builds Bold Brand Experiences
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/mybrandmanagers/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/mybrandmanagers" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/53512459/admin/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/mybrandmanagersindia/" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold font-montserrat mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Brand Strategy</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Social Media</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">SEO & Digital</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Paid Advertising</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Content Creation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold font-montserrat mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold font-montserrat mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to receive marketing tips and updates.</p>
            <form className="flex w-5/6">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-gray-800 w-1/12 text-white border border-gray-700 rounded-l-md focus:outline-none flex-grow"
              />
              <button type="submit" className="px-4 py-2 bg-brand-pink text-white rounded-r-md hover:bg-opacity-90 transition-colors">
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} My Brand Managers. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
