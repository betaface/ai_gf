import { useState } from 'react';

function useChat() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return { messages, sendMessage };
}

export default useChat;
