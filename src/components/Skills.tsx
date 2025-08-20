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
      color: "from-blue-500 to-blue-600",
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
      color: "from-green-500 to-green-600",
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
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Git", level: 80 }
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-gray-200">
            <Wrench size={16} />
            Technical Skills
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            My <span className="text-gradient">Technical</span> Expertise
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I specialize in modern web technologies and frameworks, with a focus on creating 
            scalable, efficient, and user-friendly applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="card-hover fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                {category.icon}
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-6 font-poppins text-lg">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className={`skill-progress bg-gradient-to-r ${category.color}`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="text-center fade-in-up">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 font-poppins">
            Additional Competencies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Responsive Design',
              'RESTful APIs',
              'Version Control (Git)',
              'Database Design',
              'Problem Solving',
              'Code Optimization',
              'Project Management',
              'Cyber Security Awareness',
              'Team Leadership'
            ].map((skill, index) => (
              <span 
                key={index}
                className="bg-white px-4 py-2 rounded-full text-gray-700 border border-gray-200 hover:border-primary hover:text-primary transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">
              Ready to Work Together?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how my skills can help bring your project to life.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;