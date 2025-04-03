
import React from 'react';
import { MapPin, GraduationCap, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-softYellow via-white to-portfolio-softOrange z-0"></div>
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-pattern-dots bg-dots-md opacity-10 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-gray-900">About Me</h2>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl transform transition-transform hover:scale-105 duration-300">
              {/* Resume image uploaded by the user */}
              <img src="/lovable-uploads/1afb9ec5-2b91-4436-868c-39d98079e910.png" alt="Prarthana L" className="w-full h-full object-cover" />
              
              {/* Fallback if image doesn't load properly */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-portfolio-lightBlue to-portfolio-purple flex items-center justify-center text-white text-5xl font-bold opacity-0 hover:opacity-80 transition-opacity duration-300">
                PL
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-portfolio-softGreen rounded-full opacity-50 z-0"></div>
            <div className="absolute -top-5 -left-5 w-16 h-16 bg-portfolio-softPurple rounded-full opacity-50 z-0"></div>
          </div>
          
          {/* About Text */}
          <div className="space-y-6 max-w-2xl bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-heading">
              Passionate Engineering Student
            </h3>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              I am an enthusiastic Information Science Engineering student with a deep passion for Artificial Intelligence, Software Development, and Problem-Solving. I enjoy tackling complex challenges and creating elegant solutions through code.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center bg-white p-3 rounded-lg shadow-sm transform transition-all hover:-translate-y-1 hover:shadow-md duration-300">
                <div className="w-10 h-10 rounded-full bg-portfolio-softPink flex items-center justify-center mr-3">
                  <MapPin className="text-portfolio-purple" size={20} />
                </div>
                <span className="text-gray-700">Bengaluru Urban, Karnataka</span>
              </div>
              
              <div className="flex items-center bg-white p-3 rounded-lg shadow-sm transform transition-all hover:-translate-y-1 hover:shadow-md duration-300">
                <div className="w-10 h-10 rounded-full bg-portfolio-softBlue flex items-center justify-center mr-3">
                  <GraduationCap className="text-portfolio-purple" size={20} />
                </div>
                <span className="text-gray-700">
                  B.E. in Information Science (RV Institute of Technology & Management)
                </span>
              </div>
              
              <div className="flex items-center bg-white p-3 rounded-lg shadow-sm transform transition-all hover:-translate-y-1 hover:shadow-md duration-300">
                <div className="w-10 h-10 rounded-full bg-portfolio-softGreen flex items-center justify-center mr-3">
                  <Award className="text-portfolio-purple" size={20} />
                </div>
                <span className="text-gray-700">CGPA: 8.0</span>
              </div>
            </div>
            
            <div className="pt-2">
              <h4 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                <BookOpen className="text-portfolio-purple mr-2" size={20} />
                Relevant Coursework:
              </h4>
              <div className="flex flex-wrap gap-2">
                {['AI-ML', 'Java', 'IBM-2024'].map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 bg-gradient-to-r from-portfolio-softPink to-portfolio-softPurple text-gray-800 rounded-full text-sm shadow-sm transition-all hover:scale-105 hover:shadow-md duration-300"
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
