import { useEffect, useRef, useState } from 'react';
import { Code, Database, Wrench, Globe } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Frontend Development",
      gradient: "from-primary to-primary-light",
      skills: [
        { name: "React.js", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Tailwind CSS", level: 88 }
      ]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Backend Development",
      gradient: "from-accent-green to-accent-green-light",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 82 },
        { name: "JavaScript", level: 88 },
        { name: "PHP", level: 75 }
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database & Tools",
      gradient: "from-primary-dark to-accent-green",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Git", level: 80 }
      ]
    }
  ];

  const additionalSkills = [
    'Responsive Design',
    'RESTful APIs',
    'Version Control (Git)',
    'Database Design',
    'Problem Solving',
    'Code Optimization',
    'Project Management',
    'Cyber Security Awareness',
    'Team Leadership'
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} id="skills" className="section-padding bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Code size={16} />
            Technical Skills
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6 font-poppins">
            Technologies I 
            <span className="text-gradient block">Work With</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Proficient in modern web technologies with hands-on experience in building scalable applications 
            and delivering exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-gray-700/50 rounded-2xl p-6 md:p-8 hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-600 fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${category.gradient} pulse-glow`}>
                  {category.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-100 font-poppins">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm md:text-base text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-xs md:text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2 md:h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent-green rounded-full transition-all duration-1000 ease-out hover:scale-105 transform-gpu"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * category.skills.length + skillIndex) * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Competencies */}
        <div className="text-center fade-in-up">
          <h3 className="text-2xl font-bold text-gray-100 mb-8 font-poppins">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {additionalSkills.map((skill, index) => (
              <span 
                key={index}
                className="bg-gray-700 border border-gray-600 text-gray-300 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium hover:bg-gray-600 transition-all duration-300 hover:scale-105 bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <div className="bg-gradient-hero text-white rounded-2xl p-6 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 rotate-slow">
              <Code className="w-16 md:w-24 h-16 md:h-24" />
            </div>
            <h3 className="text-xl md:text-3xl font-bold mb-4 font-poppins relative z-10">Ready to Start Your Project?</h3>
            <p className="text-base md:text-lg mb-8 opacity-90 relative z-10">
              Let's discuss how these skills can bring your vision to life
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-white text-primary px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg relative z-10"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;