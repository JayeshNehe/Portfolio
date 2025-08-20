import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Project Supervisor",
      company: "Fergusson College",
      content: "Jayesh demonstrated exceptional technical skills and dedication during his project work. His ability to learn new technologies quickly and implement them effectively is remarkable.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Rajesh Sharma",
      role: "Team Lead",
      company: "College Event Committee",
      content: "Working with Jayesh on the Event Canvas project was fantastic. He brought innovative solutions and maintained excellent code quality throughout the development process.",
      rating: 5,
      avatar: "RS"
    },
    {
      name: "Priya Patel",
      role: "NGO Coordinator",
      company: "Food For All NGO",
      content: "The food donation platform Jayesh developed has made a significant impact in our community. The system is user-friendly and has helped us reach more donors efficiently.",
      rating: 5,
      avatar: "PP"
    },
    {
      name: "Mark Williams",
      role: "Cyber Security Expert",
      company: "SecureNet Solutions",
      content: "Jayesh's presentation on cyber security awareness was well-structured and informative. His understanding of security principles and ability to communicate them clearly is impressive.",
      rating: 5,
      avatar: "MW"
    }
  ];

  const achievements = [
    {
      title: "1st Place Winner",
      subtitle: "Intercollege E-sports Competition",
      description: "Demonstrated competitive spirit and strategic thinking"
    },
    {
      title: "Sub-Coordinator",
      subtitle: "College Technical Committee",
      description: "Led team initiatives and organized technical events"
    },
    {
      title: "Speaker",
      subtitle: "Cyber Security Awareness Program",
      description: "Conducted educational sessions on digital security"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-gray-200">
            <Star size={16} />
            Testimonials & Achievements
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            What People <span className="text-gradient">Say</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here's what colleagues, supervisors, and collaborators have to say about 
            working with me, along with some of my key achievements.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-hover fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-8 h-8 text-primary/30" />
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent-green rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-primary">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="fade-in-up">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center font-poppins">
            Key Achievements & Leadership
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="text-center fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                  {/* Achievement Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent-green rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                    {index + 1}
                  </div>
                  
                  <h4 className="font-bold text-gray-900 mb-2 font-poppins">
                    {achievement.title}
                  </h4>
                  
                  <p className="text-primary font-medium mb-3">
                    {achievement.subtitle}
                  </p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-3xl p-12 shadow-xl border border-gray-100 fade-in-up">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2 font-poppins">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2 font-poppins">3+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2 font-poppins">5+</div>
              <div className="text-gray-600">Technologies Mastered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2 font-poppins">2+</div>
              <div className="text-gray-600">Years of Learning</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center fade-in-up">
          <div className="bg-gradient-hero text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 font-poppins">
              Ready to Add Your Testimonial?
            </h3>
            <p className="text-white/90 mb-6">
              Let's work together and create something amazing that you'll be excited to recommend.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-primary px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;