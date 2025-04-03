import React, { useEffect, useRef } from 'react';
import { ArrowDown, Code, Brain, Zap, Star } from 'lucide-react';

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
      {/* Background with brighter colors and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-softBlue via-white to-portfolio-softPink z-0"></div>
      <div className="absolute inset-0 bg-pattern-dots bg-dots-md opacity-10 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-portfolio-softYellow rounded-full opacity-40 animate-float z-0"></div>
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-portfolio-softPink rounded-full opacity-30 animate-float animation-delay-2000 z-0"></div>
      <div className="absolute top-40 right-40 w-16 h-16 bg-portfolio-softGreen rounded-full opacity-30 animate-float animation-delay-1000 z-0"></div>
      <div className="absolute bottom-20 left-40 w-20 h-20 bg-portfolio-softPurple rounded-full opacity-30 animate-float animation-delay-1500 z-0"></div>
      
      {/* Animated floating shapes */}
      <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-yellow-300 rotate-45 opacity-30 animate-float animation-delay-700 z-0"></div>
      <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-blue-300 rounded-md opacity-20 animate-float animation-delay-1200 z-0"></div>
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-green-300 rounded-full opacity-20 animate-float animation-delay-1800 z-0"></div>
      
      <div className="container mx-auto px-4 pt-20 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6" ref={textRef}>
            <div className="relative">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 font-heading leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-portfolio-purple to-portfolio-lightBlue bg-clip-text text-transparent">Prarthana L</span>
              </h1>
              <div className="absolute -top-6 -right-6 text-yellow-400 animate-pulse-slow">
                <Star size={24} fill="currentColor" />
              </div>
            </div>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-light mt-4">
              Innovating with Code | Engineering Tomorrow's Solutions
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md transition-all hover:scale-105 hover:shadow-lg hover:bg-white duration-300">
                <Code className="text-portfolio-purple mr-2" size={20} />
                <span className="text-gray-700">Software Development</span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md transition-all hover:scale-105 hover:shadow-lg hover:bg-white duration-300">
                <Brain className="text-portfolio-purple mr-2" size={20} />
                <span className="text-gray-700">Artificial Intelligence</span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md transition-all hover:scale-105 hover:shadow-lg hover:bg-white duration-300">
                <Zap className="text-portfolio-purple mr-2" size={20} />
                <span className="text-gray-700">Problem Solving</span>
              </div>
            </div>
            
            <div className="pt-10">
              <a 
                href="#about"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-lightBlue px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 duration-300"
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
        <div className="p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
          <ArrowDown className="text-portfolio-purple" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
