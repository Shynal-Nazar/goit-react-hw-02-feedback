import React from 'react';
import Nofeedback from '../noFeedback/Nofeedback';
import {
  StatisticsOutput,
  StatisticsOutputName,
  StatisticsOutputList,
  StatisticsOutputItem,
  StatisticsOutputText,
} from './StatisticsOutput.styled';

const StatisticsOutputSection = ({ good, neutral, bad }) => {
  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.trunc((good * 100) / countTotalFeedback());

  return countTotalFeedback() === 0 ? (
    <Nofeedback />
  ) : (
    <StatisticsOutput>
      <StatisticsOutputName>Statistics</StatisticsOutputName>
      <StatisticsOutputList>
        <StatisticsOutputItem>
          <StatisticsOutputText>Good: {good}</StatisticsOutputText>
        </StatisticsOutputItem>
        <StatisticsOutputItem>
          <StatisticsOutputText>Neutral: {neutral}</StatisticsOutputText>
        </StatisticsOutputItem>
        <StatisticsOutputItem>
          <StatisticsOutputText>Bad: {bad}</StatisticsOutputText>
        </StatisticsOutputItem>
        <StatisticsOutputItem>
          <StatisticsOutputText>
            Total: {countTotalFeedback()}
          </StatisticsOutputText>
        </StatisticsOutputItem>
        <StatisticsOutputItem>
          <StatisticsOutputText>
            Positive feedback: {countPositiveFeedbackPercentage()}%
          </StatisticsOutputText>
        </StatisticsOutputItem>
      </StatisticsOutputList>
    </StatisticsOutput>
  );
};

export default StatisticsOutputSection;
