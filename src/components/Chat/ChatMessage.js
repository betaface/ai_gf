import React from 'react';

function ChatMessage({ message }) {
  return (
    <div className={`message ${message.sender}`}>
      {message.sender === 'ai' ? <strong>AI: </strong> : <strong>You: </strong>}
      {message.text}
    </div>
  );
}

export default ChatMessage;
