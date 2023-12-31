import styled from 'styled-components';
import { getRandomHexColor } from '../utils/RandomColor';

export const Stats = styled.section`
  min-width: 360px;
  max-width: 500px;
  width: 50%;
  margin-top: ${p => p.theme.spasing(10)};
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
`;

export const TitleStats = styled.h2`
  font-size: 25px;
  text-align: center;
  text-transform: uppercase;
  opacity: 0.7;
  padding-top: ${p => p.theme.spasing(10)};
  padding-bottom: ${p => p.theme.spasing(10)};
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
  /* margin-top: ${p => p.theme.spasing(10)}; */
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.spasing(2)};
  gap: ${p => p.theme.spasing(2)};
  background-color: ${getRandomHexColor};
  width: 100px;
`;

export const Label = styled.span`
  font-weight: 500;
  color: ${p => p.theme.color.white};
`;

export const Ppercentage = styled.span`
  font-weight: 500;
  font-size: 25px;
  color: ${p => p.theme.color.white};
`;
