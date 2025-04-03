
import React, { useEffect, useRef } from 'react';
import { Code, Database, Laptop, Terminal, Layout, CircuitBoard } from 'lucide-react';

interface SkillCategory {
  icon: React.ElementType;
  title: string;
  skills: Array<{ name: string; proficiency?: number }>;
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
      ]
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
      ]
    },
    {
      icon: Database,
      title: "Databases",
      skills: [
        { name: "MySQL", proficiency: 80 }
      ]
    },
    {
      icon: Layout,
      title: "Web Development",
      skills: [
        { name: "HTML", proficiency: 85 },
        { name: "JavaScript", proficiency: 75 }
      ]
    },
    {
      icon: CircuitBoard,
      title: "Other Skills",
      skills: [
        { name: "Circuit Design", proficiency: 75 },
        { name: "Data Structures & Algorithms", proficiency: 85 },
        { name: "Machine Learning", proficiency: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="section-title">Technical Skills</h2>
        
        <div ref={skillsRef} className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-portfolio-purple mr-4">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      {skill.proficiency && (
                        <span className="text-gray-500 dark:text-gray-400">{skill.proficiency}%</span>
                      )}
                    </div>
                    {skill.proficiency && (
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
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
