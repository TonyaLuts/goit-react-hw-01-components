import {
  TransactionTable,
  Thead,
  TableData,
  TableBody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <Thead>Type</Thead>
          <Thead>Amount</Thead>
          <Thead>Currency</Thead>
        </tr>
      </thead>
      {items.map(item => (
        <TableBody key={item.id}>
          <tr>
            <TableData>{item.type}</TableData>
            <TableData>{item.amount}</TableData>
            <TableData>{item.currency}</TableData>
          </tr>
        </TableBody>
      ))}
    </TransactionTable>
  );
};
