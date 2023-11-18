

import React, { useState } from 'react';
import './Feedback.css'; 

const FeedbackPage = () => {
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    email: '',
    feedback: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData({
      ...feedbackData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the feedback submission (e.g., send to a server)
    console.log('Feedback submitted:', feedbackData);
  };

  return (
    <div className="feedback-page">
      <h1>Provide Your Feedback</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={feedbackData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={feedbackData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="feedback">Feedback:</label>
        <textarea
          id="feedback"
          name="feedback"
          value={feedbackData.feedback}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackPage;
