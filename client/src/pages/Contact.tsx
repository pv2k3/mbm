import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactSection from '@/components/contact/ContactSection';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact Us | My Brand Managers';
  }, []);

  return (
    <div className="font-inter text-gray-800 bg-light">
      <Navbar />
      <main className="pt-24">
        <div className="py-8 bg-gray-50">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-center">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
              Ready to start your brand journey? Get in touch with our team today.
            </p>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
