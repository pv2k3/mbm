import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Introduction from '@/components/home/Introduction';
import GrowthArchitects from '@/components/home/GrowthArchitects';
import About from '@/components/home/About';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'My Brand Managers | Creative Agency';
  }, []);

  return (
    <div className="font-inter text-gray-800 bg-light">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <GrowthArchitects />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
