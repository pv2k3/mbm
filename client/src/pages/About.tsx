import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import About from '@/components/home/About';
import Introduction from '@/components/home/Introduction';
import OurTeam from '@/components/OurTeam';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About Us | My Brand Managers';
  }, []);

  return (
    <div className="font-inter text-gray-800 bg-light">
      <Navbar />
      <main className="pt-24">
        <div className="py-8 bg-gray-50">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-center">About Us</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
              Get to know the team behind the bold brand experiences
            </p>
          </div>
        </div>
        <About />
        <Introduction />
        <span id="ourteam"><OurTeam/></span>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
