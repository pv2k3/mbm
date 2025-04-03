import { Link } from 'wouter';
import { useAnimation } from '@/hooks/useAnimation';
import img from "@img/whyus.png";
import camera from "@img/camera.png"

const About = () => {
  const animationRef = useAnimation();

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-right" data-animation="true" ref={animationRef}>
            <img
              src={img}
              alt="Our creative team"
              className="rounded-lg bg-[] w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div className="animate-slide-left" data-animation="true">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">Who We Are?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We don't just market - we create experiences that inspire, engage, and convert. As a full-service digital marketing agency, we blend data-driven strategies with creative brilliance to build brands that stand out in the digital world.
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-bold font-montserrat mb-4">Why Choose Us?</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We're relentless. We're unconventional. And we're obsessed with your success. Whether you're scaling startups or reinventing giants, our team blends agility with expertise to turn goals into measurable triumphs.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block px-4 py-2 bg-brand-purple bg-opacity-10 text-white rounded-full font-medium">Relentless</span>
              <span className="inline-block px-4 py-2 bg-brand-pink bg-opacity-10 text-white rounded-full font-medium">Unconventional</span>
              <span className="inline-block px-4 py-2 bg-brand-yellow bg-opacity-10 text-white rounded-full font-medium">Innovative</span>
            </div>
          </div>
        </div>

        <div className="mt-20 flex text-center flex-wrap justify-between animate-fade-in" data-animation="true">
          <div className='flex flex-col justify-center ml-0 lg:ml-24 items-center mx-auto'>
            <h3 className="text-2xl md:text-3xl font-bold font-montserrat mb-6">Ready to Outthink, Outperform, Outlast?</h3>
            <Link href="/contact" className="min-w-[200px] max-w-[300px] px-8 py-4 bg-brand-pink hover:bg-opacity-90 text-white rounded-md font-semibold transition-all hover:shadow-lg hover-lift">
              Let's Work Together
            </Link>
          </div>
          <div >
            <img 
                src={camera}
                alt="Creative camera" 
                className="w-full min-h-[200px] h-[50dvh] object-contain relative z-10"
                loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
