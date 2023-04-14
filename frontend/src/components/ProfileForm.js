// frontend/src/components/ProfileForm.js
import React, { useState } from 'react';

const ProfileForm = ({ profile, onSubmit }) => {
  const [goals, setGoals] = useState(profile.goals);
  const [interests, setInterests] = useState(profile.interests);
  const [experience, setExperience] = useState(profile.experience);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ goals, interests, experience });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Goals:</label>
        <input
          type="text"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
        />
      </div>
      <div>
        <label>Interests:</label>
        <input
          type="text"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
        />
      </div>
      <div>
        <label>Experience:</label>
        <input
          type="text"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
      </div>
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ProfileForm;
