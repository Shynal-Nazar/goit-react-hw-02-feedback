import styled from '@emotion/styled';

export const StatisticsOutput = styled.div`
  width: 400px;
  border: 2px solid #9e9e9e;
  border-radius: 4px;
  margin-top: 10px;
  padding: 10px;
  box-shadow: 0px 4px 4px hsla(0, 0%, 0%, 0.15);
`;

export const StatisticsOutputName = styled.h2`
  font-weight: 900;
  font-size: 25px;
  text-align: center;
`;

export const StatisticsOutputList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StatisticsOutputItem = styled.li`
  display: flex;
  justify-content: center;
  border: 2px solid #9e9e9e;
  border-radius: 30%;
  cursor: pointer;
  width: 230px;
  padding: 0 10px;
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const StatisticsOutputText = styled.p`
  font-weight: 600;
  font-size: 20px;
`;
