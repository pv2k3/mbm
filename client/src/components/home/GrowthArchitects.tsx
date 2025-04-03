import { Link } from 'wouter';
import { TrendingUp, Search, Lightbulb, Users } from 'lucide-react';
import { useAnimation } from '@/hooks/useAnimation';

const GrowthArchitects = () => {
  const animationRef = useAnimation();

  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in" data-animation="true" ref={animationRef}>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">We Are Your Growth Architects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We build the foundation for your brand's success through strategic planning, innovative execution, and measurable results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div className="bg-[#602680] rounded-lg p-8 shadow-md service-card animate-scale" data-animation="true">
            <div className="w-16 h-16 bg-brand-purple bg-opacity-10 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl text-white font-bold font-montserrat mb-4">Performance Marketing</h3>
            <p className="text-white">
              Laser-focused campaigns that convert visitors into customers and maximize your ROI.
            </p>
          </div>
          
          {/* Service 2 */}
          <div className="bg-[#36c3ef] rounded-lg p-8 shadow-md service-card animate-scale" data-animation="true" style={{animationDelay: '0.2s'}}>
            <div className="w-16 h-16 bg-brand-pink bg-opacity-10 rounded-full flex items-center justify-center mb-6">
              <Search className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl text-white font-bold font-montserrat mb-4">SEO & SMO</h3>
            <p className="text-white">
              Dominating visibility, from search engines to social feeds for maximum brand exposure.
            </p>
          </div>
          
          {/* Service 3 */}
          <div className="bg-[#006351] rounded-lg p-8 shadow-md service-card animate-scale" data-animation="true" style={{animationDelay: '0.4s'}}>
            <div className="w-16 h-16 bg-brand-yellow bg-opacity-10 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl text-white font-bold font-montserrat mb-4">Brand Strategy</h3>
            <p className="text-white">
              Crafting narratives that resonate with your audience and endure market changes.
            </p>
          </div>
          
          {/* Service 4 */}
          <div className="bg-[#de1e5a] rounded-lg p-8 shadow-md service-card animate-scale" data-animation="true" style={{animationDelay: '0.6s'}}>
            <div className="w-16 h-16 bg-brand-magenta bg-opacity-10 rounded-full flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl text-white font-bold font-montserrat mb-4">Social Media Mastery</h3>
            <p className="text-white">
              Building communities, not just audiences, to create loyal brand advocates.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/services" className="inline-block px-8 py-4 bg-brand-purple hover:bg-opacity-90 text-white rounded-md font-semibold transition-all hover:shadow-lg hover-lift">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GrowthArchitects;
