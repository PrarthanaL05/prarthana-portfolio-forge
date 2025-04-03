
import React, { useEffect, useRef } from 'react';
import { Code, Database, Laptop, Terminal, Layout, CircuitBoard, CheckCircle } from 'lucide-react';

interface SkillCategory {
  icon: React.ElementType;
  title: string;
  skills: Array<{ name: string; proficiency?: number }>;
  bgColor: string;
  borderColor: string;
}

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = (bar as HTMLElement).dataset.width || '0%';
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      icon: Terminal,
      title: "Programming Languages",
      skills: [
        { name: "C", proficiency: 80 },
        { name: "Python", proficiency: 85 }
      ],
      bgColor: "bg-gradient-to-br from-portfolio-softPink to-white",
      borderColor: "border-pink-300"
    },
    {
      icon: Laptop,
      title: "Software & Tools",
      skills: [
        { name: "MATLAB", proficiency: 75 },
        { name: "SolidWorks", proficiency: 70 },
        { name: "CodeBlocks", proficiency: 85 },
        { name: "VS Code", proficiency: 90 },
        { name: "Ubuntu", proficiency: 80 },
        { name: "Eclipse", proficiency: 75 },
        { name: "PyCharm", proficiency: 85 }
      ],
      bgColor: "bg-gradient-to-br from-portfolio-softBlue to-white",
      borderColor: "border-blue-300"
    },
    {
      icon: Database,
      title: "Databases",
      skills: [
        { name: "MySQL", proficiency: 80 }
      ],
      bgColor: "bg-gradient-to-br from-portfolio-softGreen to-white",
      borderColor: "border-green-300"
    },
    {
      icon: Layout,
      title: "Web Development",
      skills: [
        { name: "HTML", proficiency: 85 },
        { name: "JavaScript", proficiency: 75 }
      ],
      bgColor: "bg-gradient-to-br from-portfolio-softYellow to-white",
      borderColor: "border-yellow-300"
    },
    {
      icon: CircuitBoard,
      title: "Other Skills",
      skills: [
        { name: "Data Structures & Algorithms", proficiency: 85 },
        { name: "Machine Learning", proficiency: 80 }
      ],
      bgColor: "bg-gradient-to-br from-portfolio-softPurple to-white",
      borderColor: "border-purple-300"
    }
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white via-portfolio-softGreen to-white opacity-80 z-0"></div>
      <div className="absolute inset-0 bg-pattern-grid opacity-5 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-portfolio-softBlue rounded-full opacity-20 animate-float z-0"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-portfolio-softOrange rounded-full opacity-20 animate-float animation-delay-1000 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-gray-900">Technical Skills</h2>
        
        <div ref={skillsRef} className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`${category.bgColor} backdrop-blur-sm border-2 ${category.borderColor} rounded-2xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-portfolio-purple mr-4 shadow-md">
                  <category.icon size={26} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 font-heading">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-white/60 rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium flex items-center">
                        <CheckCircle size={16} className="text-portfolio-purple mr-2" />
                        {skill.name}
                      </span>
                      {skill.proficiency && (
                        <span className="text-gray-600">{skill.proficiency}%</span>
                      )}
                    </div>
                    {skill.proficiency && (
                      <div className="skill-bar bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="skill-progress bg-gradient-to-r from-portfolio-lightBlue to-portfolio-purple rounded-full h-full" 
                          data-width={`${skill.proficiency}%`}
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
