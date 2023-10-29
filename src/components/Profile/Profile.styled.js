import styled from 'styled-components';

export const Container = styled.div`
  width: 360px;
  padding-top: ${p => p.theme.spasing(10)};
  margin-top: ${p => p.theme.spasing(10)};
  margin-left: auto;
  margin-right: auto;
  background-color: ${p => p.theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.15);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spasing(5)};
  margin-bottom: ${p => p.theme.spasing(10)};
`;

export const Avatar = styled.img`
  display: block;
  width: 200px;
  object-fit: cover;
  border-radius: 50%;
  background-color: ${p => p.theme.color.bg};
`;

export const Name = styled.p`
  font-size: 35px;
  font-weight: 500;
`;

export const TextInfo = styled.p`
  font-size: 20px;
  color: ${p => p.theme.color.secondText};
`;

export const Stats = styled.ul`
  display: flex;
  width: 100%;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spasing(2)};
  border: 0.2px solid ${p => p.theme.color.secondText};
  width: 120px;
  height: 120px;
  background-color: ${p => p.theme.color.secondBg};
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 500;
`;
