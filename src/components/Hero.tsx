
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Code, Brain, Zap } from 'lucide-react';

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with lighter colors and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-softBlue to-portfolio-softPurple z-0"></div>
      <div className="absolute inset-0 bg-pattern-dots bg-dots-md opacity-10 z-0"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-portfolio-softYellow rounded-full opacity-40 animate-float z-0"></div>
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-portfolio-softPink rounded-full opacity-30 animate-float animation-delay-2000 z-0"></div>
      <div className="absolute top-40 right-40 w-16 h-16 bg-portfolio-softGreen rounded-full opacity-30 animate-float animation-delay-1000 z-0"></div>
      
      <div className="container mx-auto px-4 pt-20 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 animate-on-scroll opacity-0" ref={textRef}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 font-heading leading-tight">
              Hi, I'm <span className="text-portfolio-purple">Prarthana L</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-light mt-4">
              Innovating with Code | Engineering Tomorrow's Solutions
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md transition-transform hover:scale-105 duration-300">
                <Code className="text-portfolio-purple mr-2" size={20} />
                <span className="text-gray-700">Software Development</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md transition-transform hover:scale-105 duration-300">
                <Brain className="text-portfolio-purple mr-2" size={20} />
                <span className="text-gray-700">Artificial Intelligence</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md transition-transform hover:scale-105 duration-300">
                <Zap className="text-portfolio-purple mr-2" size={20} />
                <span className="text-gray-700">Problem Solving</span>
              </div>
            </div>
            
            <div className="pt-10">
              <a 
                href="#about"
                className="inline-flex items-center justify-center rounded-full bg-portfolio-purple px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-portfolio-purple/90 hover:shadow-xl hover:-translate-y-1"
              >
                Know More
                <ArrowDown className="ml-2" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <ArrowDown className="text-portfolio-purple" size={24} />
      </div>
    </section>
  );
};

export default Hero;
