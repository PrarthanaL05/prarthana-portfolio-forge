
import React from 'react';
import { MapPin, GraduationCap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-purple shadow-xl">
              {/* Placeholder for profile image - replace with actual image when available */}
              <div className="w-full h-full bg-gradient-to-br from-portfolio-lightBlue to-portfolio-purple flex items-center justify-center text-white text-5xl font-bold">
                PL
              </div>
            </div>
          </div>
          
          {/* About Text */}
          <div className="space-y-6 max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              Passionate Engineering Student
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              I am an enthusiastic Information Science Engineering student with a deep passion for Artificial Intelligence, Software Development, and Problem-Solving. I enjoy tackling complex challenges and creating elegant solutions through code.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="text-portfolio-purple mr-3" size={20} />
                <span className="text-gray-700 dark:text-gray-200">Bengaluru Urban, Karnataka</span>
              </div>
              
              <div className="flex items-center">
                <GraduationCap className="text-portfolio-purple mr-3" size={20} />
                <span className="text-gray-700 dark:text-gray-200">
                  B.E. in Information Science (RV Institute of Technology & Management)
                </span>
              </div>
              
              <div className="flex items-center">
                <Award className="text-portfolio-purple mr-3" size={20} />
                <span className="text-gray-700 dark:text-gray-200">CGPA: 8.0</span>
              </div>
            </div>
            
            <div className="pt-2">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Relevant Coursework:
              </h4>
              <div className="flex flex-wrap gap-2">
                {['AI-ML', 'Java', 'IBM-2024'].map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-portfolio-purple rounded-full text-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
