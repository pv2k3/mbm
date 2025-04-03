import { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import { useAnimation } from '@/hooks/useAnimation';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const ContactSection = () => {
  const animationRef = useAnimation();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      const response = await apiRequest('POST', '/api/contact', formData);
      const data = await response.json();
      
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll be in touch soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple via-brand-pink to-brand-yellow opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-yellow via-brand-magenta to-brand-purple opacity-70"></div>
      
      {/* Animated shapes */}
      <div className="absolute top-40 left-10 w-40 h-40 rounded-full bg-brand-purple opacity-5 animate-pulse-slow"></div>
      <div className="absolute bottom-40 right-10 w-60 h-60 rounded-full bg-brand-pink opacity-5 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in" data-animation="true" ref={animationRef}>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-2 animate-color-shift">Get In <span className="text-brand-pink">Touch</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-purple to-brand-pink mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to transform your brand? Reach out to us and let's create something extraordinary together.
          </p>
        </div>
      
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-right" data-animation="true">
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg relative overflow-hidden">
              {/* Animated border */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-brand-purple to-brand-pink animate-height-expand"></div>
              
              <h3 className="text-2xl font-bold font-montserrat mb-6">Our Information</h3>
              <div className="mb-8">
                <div className="flex items-start mb-6 hover-lift group">
                  <div className="w-12 h-12 bg-brand-purple bg-opacity-10 rounded-full flex items-center justify-center mr-4 group-hover:bg-opacity-20 transition-all">
                    <MapPin className="h-5 w-5 text-brand-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Visit Us</h4>
                    <p className="text-gray-700">N-1/B Asha Tower, Sant Market Mahanagar</p>
                    <p className="text-gray-700">Lucknow-226006</p>
                  </div>
                </div>
                <div className="flex items-start mb-6 hover-lift group">
                  <div className="w-12 h-12 bg-brand-pink bg-opacity-10 rounded-full flex items-center justify-center mr-4 group-hover:bg-opacity-20 transition-all">
                    <Phone className="h-5 w-5 text-brand-pink" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Call Us</h4>
                    <a href='tel:+91790514595' className="text-gray-700">+91-790514595</a>
                    <a href='tel:+917754847149' className="text-gray-700">+91-7754847149</a>
                  </div>
                </div>
                <div className="flex items-start hover-lift group">
                  <div className="w-12 h-12 bg-brand-yellow bg-opacity-10 rounded-full flex items-center justify-center mr-4  transition-all">
                    <Mail className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email Us</h4>
                    <p className="text-gray-700">sales@mybrandmanagers.com</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold font-montserrat mb-4">Connect With Us</h3>
                <div className="flex space-x-5">
                  <a href="https://www.instagram.com/mybrandmanagers/" className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-all hover-lift animate-pulse-slow" style={{animationDelay: '0.1s'}}>
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://twitter.com/mybrandmanagers" className="w-12 h-12 bg-brand-pink rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-all hover-lift animate-pulse-slow" style={{animationDelay: '0.3s'}}>
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/53512459/admin/" className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-all hover-lift animate-pulse-slow" style={{animationDelay: '0.5s'}}>
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://www.facebook.com/mybrandmanagersindia/" className="w-12 h-12 bg-brand-magenta rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-all hover-lift animate-pulse-slow" style={{animationDelay: '0.7s'}}>
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-left" data-animation="true">
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg relative overflow-hidden">
              {/* Animated line */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-brand-purple via-brand-pink to-brand-yellow animate-width-expand"></div>
              
              <h3 className="text-2xl font-bold font-montserrat mb-6 animate-color-shift">Send Us a Message</h3>
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="mb-6 group">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2 group-hover:text-brand-purple transition-colors">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all hover:border-brand-purple"
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="mb-6 group">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2 group-hover:text-brand-pink transition-colors">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-pink transition-all hover:border-brand-pink"
                    required
                    placeholder="john@example.com"
                  />
                </div>
                <div className="mb-6 group">
                  <label htmlFor="company" className="block text-gray-700 font-medium mb-2 group-hover:text-brand-yellow transition-colors">Company (Optional)</label>
                  <input 
                    type="text" 
                    id="company" 
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all hover:border-brand-yellow"
                    placeholder="Your Company Inc."
                  />
                </div>
                <div className="mb-6 group">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2 group-hover:text-brand-magenta transition-colors">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-magenta transition-all hover:border-brand-magenta"
                    required
                    placeholder="I'm interested in working with My Brand Managers..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-brand-purple to-brand-pink hover:from-brand-pink hover:to-brand-purple text-white rounded-md font-semibold transition-all hover:shadow-lg disabled:opacity-70 animate-color-shift"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
