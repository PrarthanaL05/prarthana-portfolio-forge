
import React from 'react';
import { Award, ExternalLink, Calendar, BookOpen } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  url?: string;
  bgColor: string;
  borderColor: string;
  icon: React.ElementType;
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: "AI-ML Certification",
      issuer: "Teachnook, Wissenaire IIT Bhubaneshwar",
      date: "2024",
      description: "Comprehensive certification in Artificial Intelligence and Machine Learning fundamentals and applications.",
      url: "#",
      bgColor: "bg-gradient-to-br from-portfolio-softPink to-white",
      borderColor: "border-pink-300",
      icon: BookOpen
    },
    // Placeholder for future certifications
    {
      title: "Future Certification",
      issuer: "Coursera/Udemy/Other Platform",
      date: "Coming Soon",
      description: "Placeholder for future certifications and courses.",
      bgColor: "bg-gradient-to-br from-portfolio-softYellow to-white",
      borderColor: "border-yellow-300",
      icon: Award
    }
  ];

  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-portfolio-softBlue to-white z-0"></div>
      <div className="absolute inset-0 bg-pattern-dots bg-dots-sm opacity-10 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-portfolio-softPurple rounded-full opacity-20 animate-float z-0"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-portfolio-softPink rounded-full opacity-20 animate-float animation-delay-1000 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-gray-900">Certifications & Courses</h2>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={`${cert.bgColor} backdrop-blur-sm border-2 ${cert.borderColor} rounded-2xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col`}
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-portfolio-purple mr-3 shadow-md">
                  <cert.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 font-heading">{cert.title}</h3>
              </div>
              
              <div className="mb-3 flex items-center text-sm text-gray-600 bg-white/50 rounded-full px-3 py-1 w-fit">
                <Calendar size={16} className="mr-2" />
                <span>{cert.date}</span>
              </div>
              
              <p className="text-gray-700 text-sm mb-3">
                <span className="font-medium">Issuer:</span> {cert.issuer}
              </p>
              
              {cert.description && (
                <p className="text-gray-700 text-sm mb-6 flex-grow bg-white/50 p-3 rounded-lg">
                  {cert.description}
                </p>
              )}
              
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-portfolio-purple bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all mt-auto"
                >
                  View Certificate
                  <ExternalLink size={16} className="ml-2" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
