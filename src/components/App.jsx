import React, { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const feedbackValues = Object.values(this.state);
    return feedbackValues.reduce((total, value) => total + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const { good } = this.state;

    return Math.round((good / totalFeedback) * 100) || 0;
  };

  getFeedbackData = () =>
    Object.entries(this.state).map(([label, value]) => ({
      label,
      value,
    }));

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    const feedbackData = this.getFeedbackData();

    const statisticsList = Object.entries(this.state);
    return (
      <div className="container">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
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
}

export default App;
