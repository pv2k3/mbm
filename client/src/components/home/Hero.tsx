import { Link } from 'wouter';
import { useAnimation } from '@/hooks/useAnimation';
import top2 from '@img/top2.png';

const Hero = () => {
  const animationRef = useAnimation();

  return (
    <section id="home" className="bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden brice">
      {/* Animated background glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#B347FF]/30 via-[#FF26E2]/20 to-[#00E5FF]/30 mix-blend-multiply animate-color-shift"></div>
      
      {/* Animated shapes with more vibrant colors and opacity */}
      <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-brand-purple opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-56 h-56 rounded-full bg-brand-pink opacity-30 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-2/3 left-1/4 w-32 h-32 rounded-full bg-brand-yellow opacity-30 animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-28 h-28 rounded-full bg-brand-magenta opacity-30 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full bg-brand-cyan opacity-30 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      
      {/* Animated geometric shapes */}
      <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-brand-orange opacity-20 rotate-45 animate-float" style={{animationDelay: '1.2s'}}></div>
      <div className="absolute bottom-1/2 left-2/3 w-16 h-16 bg-brand-blue opacity-20 rotate-12 animate-float" style={{animationDelay: '0.8s'}}></div>
      
      {/* Animated lines with more vibrant gradients */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-cyan opacity-80"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-brand-blue via-brand-pink to-brand-purple opacity-80"></div>
      
      {/* Diagonal animated lines */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-purple via-brand-pink to-brand-cyan opacity-50"></div>
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-brand-cyan via-brand-yellow to-brand-purple opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <div className="text-white w-full md:w-1/2 animate-slide-right" data-animation="true" ref={animationRef}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight mb-3  animate-color-shift">
              A <span className="text-brand-pink">Creative Agency</span> That Builds <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Bold Brand</span> Experiences
            </h1>
            <p className="text-xl mb-4 text-gray-200 font-montserrat font-medium">
              <span className="text-brand-cyan">Evasive.</span> <span className="text-brand-pink">Creative.</span> <span className="text-brand-yellow">Assertive.</span> <span className="text-brand-magenta">Aggressive.</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="px-8 py-2 bg-gradient-purple-pink hover:shadow-[0_0_15px_rgba(255,45,158,0.5)] text-white rounded-md font-semibold transition-all hover-lift">
                View Services
              </Link>
              <Link href="/about" className="px-8 py-2 border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-md font-semibold transition-all hover:shadow-lg hover-lift relative overflow-hidden group ">
                <span className="relative z-10">About Us</span>
                <span className="absolute top-0 left-0 w-full h-0 bg-gradient-to-r from-brand-cyan to-brand-blue group-hover:h-full transition-all duration-300 -z-0"></span>
              </Link>
            </div>
          </div>
          <div className="animate-slide-lef w-full md:w-1/2 h-[80dvh] object-contain mt-4 md:mt-0 relative" data-animation="true">
            {/* Multiple colorful borders for dramatic effect */}
            {/* <div className="absolute -top-5 -left-5 w-full h-full bg-brand-purple rounded-lg opacity-30 animate-float" style={{animationDelay: '0.2s'}}></div>
            <div className="absolute -bottom-5 -right-5 w-full h-full bg-brand-pink rounded-lg opacity-30 animate-float" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute -bottom-3 -left-3 w-full h-full bg-brand-yellow rounded-lg opacity-20 animate-float" style={{animationDelay: '0.7s'}}></div>
            <div className="absolute -top-3 -right-3 w-full h-full bg-brand-cyan rounded-lg opacity-20 animate-float" style={{animationDelay: '0.3s'}}></div>
             */}
            {/* Image with colorful shadow effect */}
            <div className="relative rounded-lg overflow-hidden z-10">
              <img 
                src={top2}
                alt="Creative team meeting" 
                className="w-full h-[80dvh] object-contain relative z-10"
                loading="lazy"
              />
              {/* Colorful overlay gradient */}
              {/* <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/10 to-brand-pink/10 mix-blend-overlay"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
