
import React from 'react';
import { Trophy, Users, Music } from 'lucide-react';

interface Achievement {
  title: string;
  year: string;
  description?: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      title: "NCC Contingent Drill",
      year: "2024",
      description: "Participated in the National Cadet Corps contingent drill, demonstrating discipline and teamwork.",
      icon: Trophy,
      color: "text-yellow-700 dark:text-yellow-500",
      bgColor: "bg-portfolio-softYellow"
    },
    {
      title: "Group Dance Competition",
      year: "2024",
      description: "Participated in a group dance competition, showcasing coordination and artistic expression.",
      icon: Music,
      color: "text-purple-700 dark:text-purple-500",
      bgColor: "bg-portfolio-softPurple"
    }
  ];

  // Skills section
  const softSkills = [
    { name: "Teamwork", icon: Users, description: "Strong ability to collaborate effectively in group settings" },
    { name: "Problem-Solving", icon: Trophy, description: "Analytical approach to tackling complex challenges" },
    { name: "Leadership", icon: Trophy, description: "Ability to guide and motivate team members" },
    { name: "Communication", icon: Users, description: "Clear and effective verbal and written communication" },
    { name: "Critical Thinking", icon: Trophy, description: "Logical analysis and evaluation of information" }
  ];

  // Languages section
  const languages = [
    { name: "English", proficiency: 90 },
    { name: "Hindi", proficiency: 100 },
    { name: "Kannada", proficiency: 100 },
    { name: "Telugu", proficiency: 90 }
  ];

  return (
    <section id="achievements" className="section-padding bg-gradient-to-br from-white to-portfolio-softGreen relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-grid opacity-5 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-gray-900">Achievements & Skills</h2>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Achievements Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-6 font-heading">
              Extracurricular Activities
            </h3>
            
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`${achievement.bgColor} bg-opacity-40 rounded-lg shadow-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-white ${achievement.color} flex items-center justify-center mr-4 shadow-md`}>
                    <achievement.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 font-heading">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{achievement.year}</p>
                  </div>
                </div>
                
                {achievement.description && (
                  <p className="text-gray-700 text-sm">{achievement.description}</p>
                )}
              </div>
            ))}
          </div>
          
          {/* Soft Skills Column */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-6 font-heading">
              Soft Skills
            </h3>
            
            <div className="bg-portfolio-softBlue bg-opacity-30 rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-white shadow-sm flex flex-col items-center text-center transition-transform hover:scale-105 duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-portfolio-softPurple bg-opacity-40 text-portfolio-purple flex items-center justify-center mb-3 shadow-sm">
                      <skill.icon size={24} />
                    </div>
                    <h4 className="text-gray-800 font-medium mb-1">{skill.name}</h4>
                    <p className="text-gray-600 text-xs">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Languages Column */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-6 font-heading">
              Languages
            </h3>
            
            <div className="bg-portfolio-softPink bg-opacity-30 rounded-lg shadow-md p-6">
              <div className="space-y-6">
                {languages.map((language, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{language.name}</span>
                      <span className="text-gray-600">{language.proficiency / 10}/10</span>
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full">
                      <div 
                        className="h-2.5 rounded-full bg-gradient-to-r from-portfolio-lightBlue to-portfolio-purple transition-all duration-1000" 
                        style={{ width: `${language.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
