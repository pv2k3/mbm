import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { useAnimation } from '@/hooks/useAnimation';
import img from '@img/img3.jpg';

const Introduction = () => {
  const animationRef = useAnimation();

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in" data-animation="true" ref={animationRef}>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
            We don't just market brands - <span className="text-brand-purple">we ignite revolutions</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At My Brand Managers, we fuse data-driven strategies with boundary-pushing creativity to craft brand experiences that demand attention, spark loyalty, and dominate markets.
          </p>
          <div className="w-16 h-1 bg-brand-pink mx-auto"></div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-around items-center">
          <div className="animate-slide-right md:w-[50dvw] min-h-[500px] py-24 bg-[#e3bd01] text-white p-12 rounded-md" data-animation="true">
            <h3 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">Your Vision, Amplified</h3>
            <p className="text-white text-bold text-lg md:text-2xl mb-2 md:mb-4 leading-relaxed">
              From performance marketing that fuels ROI to SEO that conquers search rankings, SMO/SMM that turns followers into advocates, and branding strategies that carve your identity in stone—we deliver every digital solution under one roof.
            </p>
            <Link href="/services" className="inline-flex text-lg md:text-2xl items-center text-brand-purple font-semibold hover:text-brand-pink transition-colors">
              Discover our services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <img 
              src={img}
              alt="einstien" 
              className="rounded-lg min-h-[500px] max-h-[60dvh] shadow-lg md:w-[25dvw] object-cover"
              loading="lazy"
            />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
