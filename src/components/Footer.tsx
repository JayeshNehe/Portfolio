import { Heart, ArrowUp, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const services = [
    'Frontend Development',
    'Backend Development',
    'Full-Stack Solutions',
    'Database Design',
    'API Development',
    'Technical Consulting'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-green rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="font-poppins font-bold text-2xl mb-6">
              Jayesh<span className="text-primary">.</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full-Stack Developer & Freelancer passionate about creating innovative 
              web solutions that make a difference.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/jayesh-nehe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/JayeshNehe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:jayeshbnehe@gmail.com"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 font-poppins">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 font-poppins">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6 font-poppins">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:jayeshbnehe@gmail.com" className="hover:text-white transition-colors">
                  jayeshbnehe@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:+919762070805" className="hover:text-white transition-colors">
                  +91 9762070805
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                <span>Pune, Maharashtra</span>
              </div>
            </div>

            {/* Availability Status */}
            <div className="mt-6 bg-gray-800 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for work</span>
              </div>
              <p className="text-xs text-gray-400">
                Currently accepting new projects and opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© 2024 Jayesh Nehe. Built with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>using React.js & Tailwind CSS</span>
            </div>
            
            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection('#contact')}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Hire Me
              </button>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary hover:bg-primary-dark rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Back to top"
              >
                <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;