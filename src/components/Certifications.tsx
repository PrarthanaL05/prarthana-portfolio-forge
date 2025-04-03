
import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  url?: string;
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: "AI-ML Certification",
      issuer: "Teachnook, Wissenaire IIT Bhubaneshwar",
      date: "2024",
      description: "Comprehensive certification in Artificial Intelligence and Machine Learning fundamentals and applications.",
      url: "#"
    },
    // Placeholder for future certifications
    {
      title: "Future Certification",
      issuer: "Coursera/Udemy/Other Platform",
      date: "Coming Soon",
      description: "Placeholder for future certifications and courses.",
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="section-title">Certifications & Courses</h2>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 transition-transform duration-300 hover:-translate-y-2 h-full flex flex-col"
            >
              <div className="flex items-center mb-4">
                <Award className="text-portfolio-purple mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{cert.title}</h3>
              </div>
              
              <div className="mb-3 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Calendar size={16} className="mr-2" />
                <span>{cert.date}</span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                <span className="font-medium">Issuer:</span> {cert.issuer}
              </p>
              
              {cert.description && (
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-grow">
                  {cert.description}
                </p>
              )}
              
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-portfolio-purple hover:text-portfolio-darkBlue transition-colors mt-auto"
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
