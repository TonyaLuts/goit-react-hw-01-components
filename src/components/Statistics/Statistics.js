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
    <Stats className="statistics">
      <TitleStats className="title">Upload stats</TitleStats>

      <StatList className="stat-list">
        {stats.map(stat => (
          <StatItem className="item" key={stat.id}>
            <Label className="label">{stat.label}</Label>
            <Ppercentage className="percentage">{stat.percentage}%</Ppercentage>
          </StatItem>
        ))}
      </StatList>
    </Stats>
  );
};
