
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const ChatbotBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl flex flex-col" style={{ width: '350px', height: '500px' }}>
          <div className="bg-portfolio-purple text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="font-medium">Chat with Prarthana</h3>
            <button 
              onClick={toggleChatbot}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close chatbot"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex-grow overflow-hidden">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/HQK3IXKlN3F_Ikd67loQk"
              width="100%"
              height="100%"
              frameBorder="0"
              className="h-full"
              title="Prarthana's Chatbot"
            />
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChatbot}
          className="bg-portfolio-purple text-white rounded-full p-3 shadow-lg hover:bg-portfolio-lightBlue transition-colors duration-300 flex items-center justify-center"
          aria-label="Open chatbot"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
};

export default ChatbotBubble;
