import { useAnimation } from '@/hooks/useAnimation';
import { Users, Star, Heart } from 'lucide-react';

const OurTeam = () => {
  const animationRef = useAnimation();

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
      description: "Brand storyteller and creative strategist with 10+ years of experience",
      color: "bg-[#602680]"
    },
    {
      name: "Michael Chen",
      role: "Digital Marketing Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500",
      description: "SEO wizard and paid advertising expert driving real results",
      color: "bg-[#de1e5a]"
    },
    {
      name: "Emma Wilson",
      role: "Content Strategist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
      description: "Content creator turning ideas into engaging narratives",
      color: "bg-[#006351]"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background elements similar to Services section */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-purple via-brand-cyan to-brand-magenta opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-purple opacity-70"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in" data-animation="true" ref={animationRef}>
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-4">Meet The <span className="text-[#602680]">Dream Team</span></h2>
          <p className="text-xl text-[#006351] font-semibold mb-6 animate-pulse-slow tracking-widest">
            PASSIONATE EXPERTS DRIVING YOUR SUCCESS
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A collective of creative minds, strategic thinkers, and digital innovators dedicated to elevating your brand.
          </p>
        </div>

        <div className="flex flex-wrap justify-around gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className={`${member.color} rounded-lg overflow-hidden w-1/4 shadow-md team-card animate-scale`}
              data-animation="true"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold font-montserrat mb-2">{member.name}</h3>
                <p className="text-white/80 text-sm mb-4">{member.role}</p>
                <p className="text-white/90">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg animate-fade-in relative overflow-hidden" data-animation="true">
          <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-brand-purple via-brand-pink to-brand-yellow animate-width-expand"></div>
          
          <h3 className="text-2xl font-bold font-montserrat mb-8 text-center">Why Work With Us</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 hover-lift">
              <div className="w-20 h-20 bg-brand-purple bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-lg font-bold font-montserrat mb-2">Collaborative Spirit</h4>
              <p className="text-gray-600">Your success is our success. We work as an extension of your team.</p>
            </div>
            <div className="text-center p-4 hover-lift">
              <div className="w-20 h-20 bg-brand-pink bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                <Star className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-lg font-bold font-montserrat mb-2">Industry Expertise</h4>
              <p className="text-gray-600">Deep knowledge across multiple sectors and platforms.</p>
            </div>
            <div className="text-center p-4 hover-lift">
              <div className="w-20 h-20 bg-brand-yellow bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-lg font-bold font-montserrat mb-2">Passionate Dedication</h4>
              <p className="text-gray-600">We pour our hearts into every project, big or small.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;