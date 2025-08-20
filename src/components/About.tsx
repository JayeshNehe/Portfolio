import { GraduationCap, Code, Award, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education Excellence",
      description: "MSc Computer Applications from Fergusson College, Pune (2025) and BCA from SN Arts College (2023)"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Expertise",
      description: "Full-stack development with React.js, Node.js, Express.js, and MySQL"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Achievement",
      description: "1st place in intercollege E-sports competition, demonstrating competitive spirit"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership",
      description: "Sub-Coordinator role and Cyber Security Awareness presentations"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="fade-in-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users size={16} />
              About Me
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Passionate About Building 
              <span className="text-gradient block">Digital Solutions</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I'm a dedicated Full-Stack Developer and Computer Science graduate with a passion for learning 
              new technologies and building innovative web solutions. Currently pursuing my Master's degree 
              in Computer Applications, I combine academic excellence with practical experience to deliver 
              exceptional digital experiences.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My journey in technology has been driven by curiosity and a commitment to continuous learning. 
              From developing event management systems to creating food donation platforms, I enjoy tackling 
              real-world problems with clean, efficient code.
            </p>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-gray-600">📧</span>
                  <a href="mailto:jayeshbnehe@gmail.com" className="text-primary hover:underline">
                    jayeshbnehe@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-600">📱</span>
                  <a href="tel:+919762070805" className="text-primary hover:underline">
                    +91 9762070805
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-600">📍</span>
                  <span className="text-gray-700">Pune, Maharashtra</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/jayesh-nehe"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/JayeshNehe"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="fade-in-right">
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="card-hover group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 font-poppins">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-8 bg-gradient-hero text-white rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10">
                <div className="text-6xl font-bold">"</div>
              </div>
              <p className="text-lg font-medium mb-4 relative z-10">
                "Learning new technologies and solving complex problems through code is what drives me every day."
              </p>
              <p className="text-white/80 text-sm">
                - Jayesh Nehe, Full-Stack Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;