import miniaiLogo from '../assets/images/miniaiLogo.png';
import { useEffect, useState } from 'react';
import user from '../assets/images/user.png';
import '../index.css';

export default function ConversationBox() {
  const [conversations, setConversations] = useState(() => JSON.parse(localStorage.getItem('responses')) || []);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'responses') {
        setConversations(prevConversations => {
          const updatedConversations = JSON.parse(event.newValue) || [];
          if (JSON.stringify(prevConversations) !== JSON.stringify(updatedConversations)) {
            return updatedConversations;
          }
          return prevConversations;
        });
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const conversationContainer = document.getElementById('conversation-container');
    if (conversationContainer) {
      conversationContainer.scrollTop = conversationContainer.scrollHeight;
    }
  }, [conversations]);

  return (
    <div id="conversation-container" className="overflow-y-auto h-full">
      {
        conversations?.map((conversation, index) => (
          <div key={index} className="w-full">
            <div className="flex flex-row bg-white items-start justify-start mb-4 mt-4 p-4">
              <img src={user} alt="User" className="h-auto w-auto mr-4" />
              <div className="text-lg flex flex-wrap text-gray-800 leading-relaxed">
                {conversation.query}
              </div>
            </div>
            <div className="flex flex-row bg-white items-start justify-start p-4">
              <img src={miniaiLogo} alt="Logo" className="h-auto w-auto mr-4" />
              <div className="text-lg flex flex-wrap text-gray-800 leading-relaxed">
                {conversation.result}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}
