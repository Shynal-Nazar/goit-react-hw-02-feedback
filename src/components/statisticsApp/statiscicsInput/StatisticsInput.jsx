import React from 'react';
import {
  StatisticsInputList,
  StatisticsInputName,
  StatisticsInput,
  StatisticsInputItem,
} from './StatisticsInput.styled';

const StatisticsInputSection = ({ goodAdd, neutralAdd, badAdd }) => (
  <StatisticsInput>
    <StatisticsInputName>Please leave feedbaack</StatisticsInputName>
    <StatisticsInputList>
      <li>
        <StatisticsInputItem type="button" onClick={goodAdd}>
          Good
        </StatisticsInputItem>
      </li>
      <li>
        <StatisticsInputItem type="button" onClick={neutralAdd}>
          Neutral
        </StatisticsInputItem>
      </li>
      <li>
        <StatisticsInputItem type="button" onClick={badAdd}>
          Bad
        </StatisticsInputItem>
      </li>
    </StatisticsInputList>
  </StatisticsInput>
);

export default StatisticsInputSection;
