import { Award, Users, Presentation, Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "1st Place E-Sports Champion",
      description: "Won 1st place in intercollege E-sports competition, demonstrating competitive spirit and strategic thinking",
      category: "Achievement"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Sub-Coordinator Leadership",
      description: "Successfully managed and coordinated multiple college events and initiatives",
      category: "Leadership"
    },
    {
      icon: <Presentation className="w-6 h-6" />,
      title: "Cyber Security Awareness",
      description: "Conducted presentations on cyber security awareness, educating students and faculty",
      category: "Leadership"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Academic Excellence",
      description: "Maintaining outstanding academic performance throughout Bachelor's and Master's programs",
      category: "Achievement"
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award size={16} />
            Key Achievements & Leadership
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6 font-poppins">
            Accomplishments &
            <span className="text-gradient block">Leadership Impact</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Highlighting key achievements, leadership roles, and contributions that demonstrate my commitment to excellence and community impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="group bg-gray-700/50 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-600 fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform pulse-glow">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium text-accent-green bg-accent-green/20 px-2 py-1 rounded-full">
                      {achievement.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-100 mb-3 font-poppins group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Leadership Quote */}
        <div className="mt-16 bg-gradient-hero text-white rounded-2xl p-8 relative overflow-hidden text-center fade-in-up">
          <div className="absolute top-0 right-0 opacity-10 rotate-slow">
            <Award className="w-24 h-24" />
          </div>
          <p className="text-xl font-medium mb-4 relative z-10">
            "Leadership is not about being in charge. It's about taking care of those in your charge and making a positive impact."
          </p>
          <p className="text-white/80 text-sm">
            - Jayesh Nehe's Leadership Philosophy
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;