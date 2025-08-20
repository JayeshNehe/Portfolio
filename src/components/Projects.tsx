import { ExternalLink, Github, Calendar, Users, Utensils } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Event Canvas",
      description: "A comprehensive system to manage all events at a college, providing facilities like poster creation and distribution using modern technologies.",
      longDescription: "Developed a complete event management platform that streamlines college event organization. Features include poster creation tools, event scheduling, attendee management, and distribution systems.",
      technologies: ["Node.js", "HTML", "CSS", "JavaScript", "MySQL"],
      icon: <Calendar className="w-8 h-8" />,
      gradient: "from-blue-500 to-blue-600",
      features: [
        "Event scheduling and management",
        "Poster creation and design tools",
        "Attendee registration system",
        "Distribution and notification system"
      ]
    },
    {
      title: "TheLeft: for the Right",
      description: "An innovative platform facilitating the donation of surplus food from events or family functions to nearby NGOs, making food redistribution easier.",
      longDescription: "Created a social impact platform that connects food donors with NGOs to reduce food waste. The system includes donation request submission, NGO review processes, and efficient food redistribution workflows.",
      technologies: ["PHP", "HTML", "CSS", "Bootstrap", "JavaScript", "MySQL"],
      icon: <Utensils className="w-8 h-8" />,
      gradient: "from-green-500 to-green-600",
      features: [
        "Donation request submission",
        "NGO review and approval system",
        "Real-time notification system",
        "Food waste tracking and analytics"
      ]
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing frontend web development skills, including responsive design, user interface creation, and interactive elements.",
      longDescription: "Designed and developed a responsive portfolio website demonstrating modern web development practices, including responsive design principles, interactive UI elements, and optimized user experience.",
      technologies: ["HTML", "CSS", "JavaScript"],
      icon: <Users className="w-8 h-8" />,
      gradient: "from-purple-500 to-purple-600",
      features: [
        "Responsive design across all devices",
        "Interactive UI elements",
        "Modern CSS animations",
        "Optimized performance"
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Github size={16} />
            Featured Projects
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            My Recent <span className="text-gradient">Work</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on, showcasing my ability to build 
            complete web solutions from concept to deployment.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Info */}
              <div className={`fade-in-${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-full mb-6`}>
                  {project.icon}
                  <span className="font-medium">Featured Project</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-poppins">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-600">
                        <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Project Visual */}
              <div className={`fade-in-${index % 2 === 0 ? 'right' : 'left'} ${
                index % 2 === 1 ? 'lg:order-first' : ''
              }`}>
                <div className="relative">
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 rounded-3xl blur-3xl transform rotate-3`}></div>
                  
                  {/* Project Card */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                    <div className="aspect-video bg-gradient-subtle rounded-2xl flex items-center justify-center relative overflow-hidden">
                      {/* Project Icon */}
                      <div className={`w-24 h-24 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center text-white mb-4`}>
                        {project.icon}
                      </div>
                      
                      {/* Overlay Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="grid grid-cols-6 h-full">
                          {Array.from({ length: 24 }).map((_, i) => (
                            <div key={i} className={`bg-gradient-to-r ${project.gradient}`}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Status */}
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-900">Completed</span>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        Full-Stack Project
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center fade-in-up">
          <div className="bg-gradient-hero text-white rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
              <Github size={120} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">
                Have a Project in Mind?
              </h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                I'm always excited to work on new challenges and innovative projects. 
                Let's collaborate and bring your ideas to life.
              </p>
              <button 
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-primary px-8 py-4 rounded-xl font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Let's Work Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;