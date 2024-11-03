import React, { useContext } from 'react';
import MoodContext from '../contexts/MoodContext';

function ProfilePage() {
  const { mood, setMood } = useContext(MoodContext);

  return (
    <div>
      <h1>Your Profile</h1>
      <label>
        Set Mood:
        <select value={mood} onChange={(e) => setMood(e.target.value)}>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="romantic">Romantic</option>
        </select>
      </label>
    </div>
  );
}

export default ProfilePage;
