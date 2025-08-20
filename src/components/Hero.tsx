import { ArrowRight, Download, MapPin } from 'lucide-react';
import jayeshHeadshot from '@/assets/jayesh-headshot.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-subtle relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-green rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-600 mb-6 border border-gray-200">
              <MapPin size={16} className="text-primary" />
              Available for Freelance Projects
            </div>
            
            <h1 className="text-hero text-gray-900 mb-6">
              Hi, I'm <span className="text-gradient">Jayesh Nehe</span>
            </h1>
            
            <p className="text-subtitle mb-8">
              Full-Stack Developer & Freelancer
            </p>
            
            <p className="text-lg text-gray-600 mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              I build innovative web solutions using modern technologies like React.js, Node.js, and MySQL. 
              Let's bring your ideas to life with clean, efficient code and exceptional user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToContact}
                className="btn-primary group"
              >
                Get In Touch
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={scrollToProjects}
                className="btn-secondary"
              >
                View My Work
              </button>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-poppins">3+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-poppins">2+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-poppins">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="fade-in-right lg:order-last">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent-green/20 rounded-3xl blur-3xl transform rotate-3"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-subtle">
                  <img
                    src={jayeshHeadshot}
                    alt="Jayesh Nehe - Full-Stack Developer"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Floating Card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-900">Available for work</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-600">Based in Pune, Maharashtra</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;