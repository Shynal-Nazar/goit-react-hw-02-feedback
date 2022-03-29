import React from 'react';
import {
  StatisticsOutput,
  StatisticsOutputName,
  StatisticsOutputList,
  StatisticsOutputItem,
  StatisticsOutputText,
} from './StatisticsView.styled';

const StatisticsView = ({ good, neutral, bad, total, feedbackPercentage }) => (
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
        <StatisticsOutputText>Total: {total()}</StatisticsOutputText>
      </StatisticsOutputItem>
      <StatisticsOutputItem>
        <StatisticsOutputText>
          Positive feedback: {feedbackPercentage()}%
        </StatisticsOutputText>
      </StatisticsOutputItem>
    </StatisticsOutputList>
  </StatisticsOutput>
);

export default StatisticsView;
