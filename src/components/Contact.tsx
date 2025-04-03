
import React from 'react';
import { Mail, Phone, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-portfolio-softBlue to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-dots bg-dots-md opacity-10 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-gray-900">Get In Touch</h2>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Email */}
            <a 
              href="mailto:prarthujvm05@gmail.com" 
              className="group flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-portfolio-softPink bg-opacity-50 flex items-center justify-center text-portfolio-purple mb-4 group-hover:bg-portfolio-purple group-hover:text-white transition-colors duration-300 shadow-md">
                <Mail size={32} />
              </div>
              <h3 className="text-gray-800 font-semibold text-lg mb-1">Email</h3>
              <p className="text-gray-600 text-center">prarthujvm05@gmail.com</p>
            </a>
            
            {/* Phone */}
            <a 
              href="tel:+6361864795" 
              className="group flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-portfolio-softGreen bg-opacity-50 flex items-center justify-center text-portfolio-purple mb-4 group-hover:bg-portfolio-purple group-hover:text-white transition-colors duration-300 shadow-md">
                <Phone size={32} />
              </div>
              <h3 className="text-gray-800 font-semibold text-lg mb-1">Phone</h3>
              <p className="text-gray-600 text-center">+91 6361864795</p>
            </a>
            
            {/* GitHub */}
            <a 
              href="https://github.com/PrarthanaL05" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-portfolio-softYellow bg-opacity-50 flex items-center justify-center text-portfolio-purple mb-4 group-hover:bg-portfolio-purple group-hover:text-white transition-colors duration-300 shadow-md">
                <Github size={32} />
              </div>
              <h3 className="text-gray-800 font-semibold text-lg mb-1">GitHub</h3>
              <p className="text-gray-600 text-center">PrarthanaL05</p>
            </a>
          </div>
          
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-6 font-heading">
              Send Me a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple bg-white text-gray-900"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple bg-white text-gray-900"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple bg-white text-gray-900"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple bg-white text-gray-900 resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-4 bg-portfolio-purple text-white font-medium rounded-md shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-portfolio-purple"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
