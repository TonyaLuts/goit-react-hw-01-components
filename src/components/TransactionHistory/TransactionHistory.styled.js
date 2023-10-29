import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
  min-width: 360px;
  width: 50%;
  text-align: center;
  margin-bottom: ${p => p.theme.spasing(10)};
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.15);
  background-color: ${p => p.theme.color.white};
`;

export const Thead = styled.th`
  padding: ${p => p.theme.spasing(2)};
  border: 0.2px solid ${p => p.theme.color.secondText};
  background-color: #3eb8d6;
  text-transform: uppercase;
  color: #fff;
`;

export const TableBody = styled.tbody`
  &:nth-child(odd) {
    background: ${p => p.theme.color.secondBg};
  }
`;

export const TableData = styled.td`
  padding: ${p => p.theme.spasing(2)};
  border: 0.2px solid ${p => p.theme.color.secondText};
  color: ${p => p.theme.color.secondText};
`;
