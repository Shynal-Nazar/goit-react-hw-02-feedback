import React, { Component } from 'react';
import StatisticsInputSection from './statisticsApp/statiscicsInput/StatisticsInput';
import StatisticsOutputSection from './statisticsApp/statiscicsOutput/StatiscicsOutput';
import { Container, StatisticsTitle } from './App.styled';

const options = [
  {
    title: 'Good',
    onLeaveFeedbackKey: 'good',
  },
  {
    title: 'Neutral',
    onLeaveFeedbackKey: 'neutral',
  },
  {
    title: 'Bad',
    onLeaveFeedbackKey: 'bad',
  },
];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = key => () => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <StatisticsTitle>Statistics of restaurant "Expresso"</StatisticsTitle>
        <StatisticsInputSection
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <StatisticsOutputSection good={good} neutral={neutral} bad={bad} />
      </Container>
    );
  }
}
