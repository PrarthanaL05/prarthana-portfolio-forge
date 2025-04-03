
import React from 'react';
import { Mail, Phone, Github, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-portfolio-softBlue to-white z-0"></div>
      <div className="absolute inset-0 bg-pattern-dots bg-dots-md opacity-10 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-portfolio-softPink rounded-full opacity-20 animate-float z-0"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-portfolio-softGreen rounded-full opacity-20 animate-float animation-delay-1000 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-gray-900">Get In Touch</h2>
        
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Email */}
            <a 
              href="mailto:prarthujvm05@gmail.com" 
              className="group flex flex-col items-center p-6 bg-gradient-to-br from-portfolio-softPink to-white border-2 border-pink-300 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-portfolio-purple mb-4 group-hover:bg-portfolio-purple group-hover:text-white transition-colors duration-300 shadow-md">
                <Mail size={32} />
              </div>
              <h3 className="text-gray-800 font-semibold text-lg mb-1">Email</h3>
              <p className="text-gray-600 text-center">prarthujvm05@gmail.com</p>
            </a>
            
            {/* Phone */}
            <a 
              href="tel:+6361864795" 
              className="group flex flex-col items-center p-6 bg-gradient-to-br from-portfolio-softGreen to-white border-2 border-green-300 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-portfolio-purple mb-4 group-hover:bg-portfolio-purple group-hover:text-white transition-colors duration-300 shadow-md">
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
              className="group flex flex-col items-center p-6 bg-gradient-to-br from-portfolio-softYellow to-white border-2 border-yellow-300 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-portfolio-purple mb-4 group-hover:bg-portfolio-purple group-hover:text-white transition-colors duration-300 shadow-md">
                <Github size={32} />
              </div>
              <h3 className="text-gray-800 font-semibold text-lg mb-1">GitHub</h3>
              <p className="text-gray-600 text-center">PrarthanaL05</p>
            </a>
          </div>
          
          <div className="mt-16 bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-6 font-heading flex items-center justify-center">
              <MessageSquare className="text-portfolio-purple mr-3" size={24} />
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-purple focus:border-transparent bg-white/90 text-gray-900 shadow-sm"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-purple focus:border-transparent bg-white/90 text-gray-900 shadow-sm"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-purple focus:border-transparent bg-white/90 text-gray-900 shadow-sm"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-purple focus:border-transparent bg-white/90 text-gray-900 resize-none shadow-sm"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-portfolio-purple to-portfolio-lightBlue text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-portfolio-purple flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
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
