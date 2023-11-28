import React, { useState } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = event => {
    const { name } = event.target;
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [name]: prevFeedback[name] + 1,
    }));
  };

  const totalFeedback = Object.values(feedback).reduce(
    (total, value) => total + value,
    0
  );
  const positivePercentage =
    Math.round((feedback.good / totalFeedback) * 100) || 0;
  const options = Object.keys(feedback);
  const feedbackData = Object.entries(feedback).map(([label, value]) => ({
    label,
    value,
  }));

  return (
    <div className="container">
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>
      {totalFeedback > 0 ? (
        <Section title={'Statistics'}>
          <Statistics
            list={feedbackData}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </div>
  );
}

export default App;
