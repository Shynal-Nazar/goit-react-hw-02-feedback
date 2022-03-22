import React, { Component } from 'react';
import StatisticsInputSection from './statisticsApp/statiscicsInput/StatisticsInput';
import StatisticsOutputSection from './statisticsApp/statiscicsOutput/StatiscicsOutput';
import { Container, StatisticsTitle } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addToStatistics = key => () => {
    this.setState(prevState => ({
      [`${key}`]: prevState[key] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <StatisticsTitle>Statistics of restaurant "Expresso"</StatisticsTitle>
        <StatisticsInputSection
          goodAdd={this.addToStatistics('good')}
          neutralAdd={this.addToStatistics('neutral')}
          badAdd={this.addToStatistics('bad')}
        />
        <StatisticsOutputSection good={good} neutral={neutral} bad={bad} />
      </Container>
    );
  }
}
