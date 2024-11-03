import React, { useState, useContext } from 'react';
import ChatMessage from './ChatMessage';
import MoodContext from '../../contexts/MoodContext';

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const { mood } = useContext(MoodContext);

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      setMessages([...messages, userMessage]);

      // API call simulation
      const aiResponse = await simulateAIResponse(input, mood);
      setMessages([...messages, userMessage, aiResponse]);
      setInput('');
    }
  };

  return (
    <div>
      <div className="messages">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

async function simulateAIResponse(input, mood) {
  // Placeholder function for AI response
  return new Promise((resolve) =>
    setTimeout(() => resolve({ text: `AI response to "${input}" in ${mood} mood`, sender: 'ai' }), 1000)
  );
}

export default ChatBox;
