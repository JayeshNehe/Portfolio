import { MapPin } from 'lucide-react';
import ghibliPortrait from '@/assets/ghibli-portrait.jpg';

const Hero = () => {

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gray-900 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-green rounded-full blur-3xl float-animation"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary/50 rounded-full blur-2xl rotate-slow"></div>
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-300 mb-6 border border-gray-700 hover:scale-105 transition-transform">
              <MapPin size={16} className="text-primary animate-pulse" />
              Available for Freelance Projects
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-100 mb-6 font-poppins leading-tight">
              Hi, I'm <span className="text-gradient">Jayesh Nehe</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 font-medium mb-8 bounce-in">
              Full-Stack Developer & Freelancer
            </p>
            
            <p className="text-base md:text-lg text-gray-300 mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed fade-in-up" style={{ animationDelay: '0.3s' }}>
              I build innovative web solutions using modern technologies. 
              Let's bring your ideas to life with clean, efficient code and exceptional user experiences.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-8 mt-8 pt-8 border-t border-gray-700">
              <div className="text-center fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-xl md:text-2xl font-bold text-primary font-poppins pulse-glow">3+</div>
                <div className="text-xs md:text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="text-xl md:text-2xl font-bold text-primary font-poppins pulse-glow">5+</div>
                <div className="text-xs md:text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="text-xl md:text-2xl font-bold text-primary font-poppins pulse-glow">100%</div>
                <div className="text-xs md:text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Enhanced Ghibli Image */}
          <div className="fade-in-right lg:order-last">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent-green/30 rounded-3xl blur-3xl transform rotate-3 float-animation"></div>
              
              {/* Main Avatar Container */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl float-animation border border-gray-700">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent-green/20 hover:scale-105 transition-transform duration-500">
                  <img 
                    src={ghibliPortrait} 
                    alt="Jayesh Nehe - Ghibli Style Portrait" 
                    className="w-full h-full object-cover pulse-glow"
                  />
                </div>
                
                {/* Floating Card */}
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-xl border border-gray-600 bounce-in">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
                    <span className="text-xs md:text-sm font-medium text-gray-100">Available for work</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-400">Based in Pune, Maharashtra</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;