import { Link } from 'wouter';
import { Check, Rocket, Cpu, BarChart } from 'lucide-react';
import { useAnimation } from '@/hooks/useAnimation';

const ServicesSection = () => {
  const animationRef = useAnimation();

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-purple via-brand-cyan to-brand-magenta opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-purple opacity-70"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-40 left-10 w-48 h-48 rounded-full bg-brand-pink opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 right-10 w-64 h-64 rounded-full bg-brand-purple opacity-10 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/3 right-20 w-32 h-32 rounded-full bg-brand-cyan opacity-10 animate-pulse-slow" style={{animationDelay: '0.7s'}}></div>
      <div className="absolute bottom-1/3 left-20 w-36 h-36 rounded-full bg-brand-yellow opacity-10 animate-pulse-slow" style={{animationDelay: '1.1s'}}></div>
      
      {/* Diagonal animated lines */}
      <div className="absolute top-0 left-20 w-1 h-40 bg-gradient-to-b from-brand-purple to-transparent opacity-30"></div>
      <div className="absolute top-0 right-40 w-1 h-60 bg-gradient-to-b from-brand-cyan to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-40 w-1 h-60 bg-gradient-to-t from-brand-orange to-transparent opacity-30"></div>
      <div className="absolute bottom-0 right-20 w-1 h-40 bg-gradient-to-t from-brand-yellow to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8 animate-fade-in" data-animation="true" ref={animationRef}>
          <div className="inline-block relative mb-6">
            <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-2 animate-color-shift">Where Ideas Get a <span className=" bg-clip-text">Glow-Up</span></h2>
            {/* <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-brand-purple via-brand-pink to-brand-cyan"></div> */}
          </div>
          <h3 className="text-xl text-[#006351] font-semibold mb-6 animate-pulse-slow tracking-widest">THE GLOW-UP YOUR BRAND DESERVES</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <span className="text-brand-purple font-semibold">Idea Architects.</span> <span className="text-brand-pink font-semibold">Strategy Engineers.</span> <span className="text-brand-cyan font-semibold">Results Alchemists.</span>
          </p>
        </div>
        
        <div className="mb-8 animate-fade-in" data-animation="true">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-brand-purple opacity-5 animate-pulse-slow"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-brand-pink opacity-5 animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
            <p className="text-center text-gray-700 relative z-10">
              At <span className="font-bold">MY BRAND MANAGERS</span>, we don't just dream - we do. Because great ideas are nothing without bold execution. We fuse creativity, cutting-edge tech, and data-driven strategy to turn your brand's potential into <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent font-semibold">measurable magic</span>.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Service 1 */}
          <div className="bg-[#602680] rounded-lg overflow-hidden shadow-md service-card animate-scale" data-animation="true">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1493421419110-74f4e85ba126?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Brand Strategy" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 text-white">
              <h3 className="text-xl font-bold font-montserrat mb-3">Brand Strategy & Storycrafting</h3>
              <p className=" mb-4">
                Building empires, not just logos. We dig deep to uncover your brand's soul, then craft a narrative so compelling it converts scrollers into loyalists.
              </p>
              <div className="flex items-center text-white">
                <Check className="mr-2 h-4 w-4" />
                <span className="text-sm font-medium">Mission statements</span>
              </div>
              <div className="flex items-center text-white mt-2">
                <Check className="mr-2 h-4 w-4" />
                <span className="text-sm font-medium">Visual identity</span>
              </div>
              <div className="flex items-center text-white mt-2">
                <Check className="mr-2 h-4 w-4" />
                <span className="text-sm font-medium">Tone of voice</span>
              </div>
            </div>
          </div>
          
          {/* Service 2 */}
          <div className="bg-[#de1e5a] rounded-lg overflow-hidden shadow-md service-card animate-scale" data-animation="true" style={{animationDelay: '0.2s'}}>
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Social Media" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 text-white">
              <h3 className="text-xl font-bold font-montserrat mb-3">Social Media Mastery</h3>
              <p className="mb-4">
                From whispers to viral roars. Content that doesn't just fill feeds - it dominates them with scroll-stopping visuals and trend-jacking wit.
              </p>
              <div className="flex items-center text-white">
                <Check className="mr-2 h-4 w-4" />
                <span className="text-sm font-medium">Content strategy</span>
              </div>
              <div className="flex items-center text-white mt-2">
                <Check className="mr-2 h-4 w-4" />
                <span className="text-sm font-medium">Community management</span>
              </div>
              <div className="flex items-center text-white mt-2">
                <Check className="mr-2 h-4 w-4" />
                <span className="text-sm font-medium">Viral campaigns</span>
              </div>
            </div>
          </div>
          
          {/* Service 3 */}
          <div className="bg-[#006351] rounded-lg overflow-hidden shadow-md service-card animate-scale" data-animation="true" style={{animationDelay: '0.4s'}}>
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="SEO" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 text-white">
              <h3 className="text-xl font-bold font-montserrat mb-3">SEO & Digital Dominance</h3>
              <p className=" mb-4">
                Your ticket to the top of Google's A-list. Keywords? Optimized. Algorithms? Hacked. We engineer organic growth for your brand.
              </p>
              <div className="flex items-center text-white">
                <Check className="mr-2 h-4 w-4" />
                <span className="text-sm font-medium">Technical SEO</span>
              </div>
              <div className="flex items-center text-white mt-2">
                <Check className="mr-2 h-4 w-4" />
                <span className="text-sm font-medium">Content optimization</span>
              </div>
              <div className="flex items-center text-white mt-2">
                <Check className="mr-2 h-4 w-4" />
                <span className="text-sm font-medium">Link building</span>
              </div>
            </div>
          </div>
          
          {/* Service 4 */}
          <div className="bg-[#de1e5a] rounded-lg overflow-hidden shadow-md service-card animate-scale" data-animation="true" style={{animationDelay: '0.6s'}}>
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Paid Advertising" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 text-white">
              <h3 className="text-xl font-bold font-montserrat mb-3">Paid Advertising That Performs</h3>
              <p className=" mb-4">
                No guesswork, just ROI. Hyper-targeted campaigns that speak directly to your audience's needs (and wallets) for maximum returns.
              </p>
              <div className="flex items-center text-white">
                <Check className="mr-2 h-4 w-4" />
                <span className="text-sm font-medium">PPC campaigns</span>
              </div>
              <div className="flex items-center text-white mt-2">
                <Check className="mr-2 h-4 w-4" />
                <span className="text-sm font-medium">Retargeting</span>
              </div>
              <div className="flex items-center text-white mt-2">
                <Check className="mr-2 h-4 w-4" />
                <span className="text-sm font-medium">Social ads</span>
              </div>
            </div>
          </div>
          
          {/* Service 5 */}
          <div className="bg-[#006351] rounded-lg overflow-hidden shadow-md service-card animate-scale" data-animation="true" style={{animationDelay: '0.8s'}}>
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29udGVudCUyMHRoYXQlMjBjb252ZXJ0c3xlbnwwfHwwfHx8MA%3D%3D" 
                alt="Content Creation" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 text-white">
              <h3 className="text-xl font-bold font-montserrat mb-3">Content That Converts</h3>
              <p className=" mb-4">
                Words that work harder than a 3 a.m. brainstorming session. Blogs, videos, emails—every piece is designed to educate and entertain.
              </p>
              <div className="flex items-center text-white">
                <Check className="mr-2 h-4 w-4" />
                <span className="text-sm font-medium">Blog content</span>
              </div>
              <div className="flex items-center text-white mt-2">
                <Check className="mr-2 h-4 w-4" />
                <span className="text-sm font-medium">Video production</span>
              </div>
              <div className="flex items-center text-white mt-2">
                <Check className="mr-2 h-4 w-4" />
                <span className="text-sm font-medium">Email campaigns</span>
              </div>
            </div>
          </div>
          
          {/* Service 6 */}
          <div className="bg-[#602680] rounded-lg overflow-hidden shadow-md service-card animate-scale" data-animation="true" style={{animationDelay: '1s'}}>
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Analytics" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 text-white">
              <h3 className="text-xl font-bold font-montserrat mb-3">Analytics & Growth Alchemy</h3>
              <p className="mb-4">
                Turning data into your secret weapon. We track, tweak, and transform metrics into actionable insights for continuous improvement.
              </p>
              <div className="flex items-center text-white">
                <Check className="mr-2 h-4 w-4" />
                <span className="text-sm font-medium">Performance tracking</span>
              </div>
              <div className="flex items-center text-white mt-2">
                <Check className="mr-2 h-4 w-4" />
                <span className="text-sm font-medium">Conversion optimization</span>
              </div>
              <div className="flex items-center text-white mt-2">
                <Check className="mr-2 h-4 w-4" />
                <span className="text-sm font-medium">ROI measurement</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-8 shadow-lg animate-fade-in relative overflow-hidden" data-animation="true">
          {/* Animated background line */}
          <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-brand-purple via-brand-pink to-brand-yellow animate-width-expand"></div>
          
          <h3 className="text-2xl font-bold font-montserrat mb-6 text-center animate-color-shift">Why We're <span className="text-brand-pink">Different</span></h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 hover-lift">
              <div className="w-20 h-20 bg-brand-purple bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                <Rocket className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-lg font-bold font-montserrat mb-2">Ideas + Execution = No BS</h4>
              <p className="text-gray-600">We're equal parts dreamers and doers. No fluff, just done.</p>
            </div>
            <div className="text-center p-4 hover-lift">
              <div className="w-20 h-20 bg-brand-pink bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow" style={{animationDelay: '0.3s'}}>
                <Cpu className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-lg font-bold font-montserrat mb-2">Tech-Savvy Storytellers</h4>
              <p className="text-gray-600">AI, automation, Metaverse trends—we speak innovation fluently.</p>
            </div>
            <div className="text-center p-4 hover-lift">
              <div className="w-20 h-20 bg-brand-yellow bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow" style={{animationDelay: '0.6s'}}>
                <BarChart className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-lg font-bold font-montserrat mb-2">Your Growth, Our Obsession</h4>
              <p className="text-gray-600">We're not happy until your KPIs are flexing harder than a marathon runner's calves.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center animate-fade-in" data-animation="true">
          <h3 className="text-2xl md:text-3xl font-bold font-montserrat mb-6 animate-color-shift">Let's Build Something <span className="text-[#602680]">Unignorable</span></h3>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Whether you're a scrappy startup or an established player craving reinvention, we're here to make your brand the <span className="text-brand-pink font-semibold">hero</span> of its own story.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-brand-magenta to-brand-purple hover:from-brand-purple hover:to-brand-magenta text-white rounded-md font-semibold transition-all hover:shadow-[0_0_25px_rgba(255,38,226,0.4)] hover-lift">
            Ready to outthink, outcreate, and outshine?
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
