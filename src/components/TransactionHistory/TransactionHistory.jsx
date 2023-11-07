import { TransactionItem } from './TransactionItem/TransactionItem';
import PropTypes from 'prop-types';
import { Section } from '../Common/Section';
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
} from './TransactionHistory.style';

export const TransactionHistory = ({ items }) => {
  return (
    <Section>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Currency</TableCell>
          </TableRow>
        </TableHead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <TransactionItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          ))}
        </tbody>
      </Table>
    </Section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
