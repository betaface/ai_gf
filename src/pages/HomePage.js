import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to Your AI Girlfriend</h1>
      <Link to="/chat">Start Chat</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default HomePage;
