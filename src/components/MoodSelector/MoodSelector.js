import React, { createContext, useState } from 'react';

const MoodContext = createContext();

export function MoodProvider({ children }) {
  const [mood, setMood] = useState('happy');

  return (
    <MoodContext.Provider value={{ mood, setMood }}>
      {children}
    </MoodContext.Provider>
  );
}

export default MoodContext;
