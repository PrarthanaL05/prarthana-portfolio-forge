
import React from 'react';
import { Mail, Phone, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Email */}
            <a 
              href="mailto:contact@prarthana.com" 
              className="group flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-portfolio-purple mb-4 group-hover:bg-portfolio-purple group-hover:text-white transition-colors duration-300">
                <Mail size={32} />
              </div>
              <h3 className="text-gray-800 dark:text-white font-semibold text-lg mb-1">Email</h3>
              <p className="text-gray-500 dark:text-gray-400 text-center">contact@prarthana.com</p>
            </a>
            
            {/* Phone */}
            <a 
              href="tel:+1234567890" 
              className="group flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-portfolio-purple mb-4 group-hover:bg-portfolio-purple group-hover:text-white transition-colors duration-300">
                <Phone size={32} />
              </div>
              <h3 className="text-gray-800 dark:text-white font-semibold text-lg mb-1">Phone</h3>
              <p className="text-gray-500 dark:text-gray-400 text-center">+123 456 7890</p>
            </a>
            
            {/* GitHub */}
            <a 
              href="https://github.com/PrarthanaL05" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-portfolio-purple mb-4 group-hover:bg-portfolio-purple group-hover:text-white transition-colors duration-300">
                <Github size={32} />
              </div>
              <h3 className="text-gray-800 dark:text-white font-semibold text-lg mb-1">GitHub</h3>
              <p className="text-gray-500 dark:text-gray-400 text-center">PrarthanaL05</p>
            </a>
          </div>
          
          <div className="mt-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-6">
              Send Me a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-4 bg-portfolio-purple text-white font-medium rounded-md shadow hover:bg-portfolio-purple/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-portfolio-purple transition-colors"
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
