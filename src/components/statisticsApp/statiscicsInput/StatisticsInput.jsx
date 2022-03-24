import React from 'react';
import {
  StatisticsInputList,
  StatisticsInputName,
  StatisticsInput,
  StatisticsInputBtn,
} from './StatisticsInput.styled';

const StatisticsInputSection = ({ options, onLeaveFeedback }) => (
  <StatisticsInput>
    <StatisticsInputName>Please leave feedbaack</StatisticsInputName>
    <StatisticsInputList>
      {options.map(item => (
        <StatisticsInputBtn
          type="button"
          onClick={onLeaveFeedback(item.onLeaveFeedbackKey)}
        >
          {item.title}
        </StatisticsInputBtn>
      ))}
    </StatisticsInputList>
  </StatisticsInput>
);

export default StatisticsInputSection;
