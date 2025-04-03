
import React from 'react';
import { Trophy, Users, Music } from 'lucide-react';

interface Achievement {
  title: string;
  year: string;
  description?: string;
  icon: React.ElementType;
  color: string;
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      title: "NCC Contingent Drill",
      year: "2024",
      description: "Participated in the National Cadet Corps contingent drill, demonstrating discipline and teamwork.",
      icon: Trophy,
      color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-500"
    },
    {
      title: "Group Dance Competition",
      year: "2024",
      description: "Participated in a group dance competition, showcasing coordination and artistic expression.",
      icon: Music,
      color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-500"
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
    <section id="achievements" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="section-title">Achievements & Skills</h2>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Achievements Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-6">
              Extracurricular Activities
            </h3>
            
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full ${achievement.color} flex items-center justify-center mr-4`}>
                    <achievement.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{achievement.year}</p>
                  </div>
                </div>
                
                {achievement.description && (
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{achievement.description}</p>
                )}
              </div>
            ))}
          </div>
          
          {/* Soft Skills Column */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-6">
              Soft Skills
            </h3>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 flex flex-col items-center text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 text-portfolio-purple flex items-center justify-center mb-3">
                      <skill.icon size={24} />
                    </div>
                    <h4 className="text-gray-800 dark:text-white font-medium mb-1">{skill.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-xs">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Languages Column */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-6">
              Languages
            </h3>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="space-y-6">
                {languages.map((language, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{language.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{language.proficiency / 10}/10</span>
                    </div>
                    <div className="progress-container">
                      <div 
                        className="progress-bar" 
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
