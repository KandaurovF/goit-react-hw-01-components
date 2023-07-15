import css from './TransactionHistory.module.css';
import { Transaction } from './Transaction';

export const TransactionHistory = ({ items }) => {
  return (
    <div className={css.transactions}>
      <table className={css.transaction__history}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <Transaction
                key={id}
                type={type}
                amount={amount}
                currency={currency}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
