import PropTypes from 'prop-types';
import { TableCell, TableRow } from '../TransactionHistory.style';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <TableRow>
      <TableCell>{type}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{currency}</TableCell>
    </TableRow>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
