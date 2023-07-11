import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
        <table className={css.transactionHistory}>
          <thead>
            <tr>
              <th className={css.tableHead}>Type</th>
              <th className={css.tableHead}>Amount</th>
              <th className={css.tableHead}>Currency</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map(element => (
                <tr key={element.id} className={css.tableData}>
                  <td className={css.tableDataCell}>{element.type}</td>
                  <td className={css.tableDataCell}>{element.amount}</td>
                  <td className={css.tableDataCell}>{element.currency}</td>
                </tr>
            ))}
          </tbody>
      </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
