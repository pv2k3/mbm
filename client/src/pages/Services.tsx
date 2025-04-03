import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServicesSection from '@/components/services/ServicesSection';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Services | My Brand Managers';
  }, []);

  return (
    <div className="font-inter text-gray-800 bg-light">
      <Navbar />
      <main className="pt-24">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
