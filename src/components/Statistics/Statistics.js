import {
  Stats,
  TitleStats,
  StatList,
  StatItem,
  Label,
  Ppercentage,
} from './Statistics.styled.js';

export const Statistics = ({ title, stats }) => {
  return (
    <Stats>
      {/* <TitleStats ></TitleStats> */}
      {title ? <TitleStats>{title}</TitleStats> : null}

      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id}>
            <Label>{stat.label}</Label>
            <Ppercentage>{stat.percentage}%</Ppercentage>
          </StatItem>
        ))}
      </StatList>
    </Stats>
  );
};
