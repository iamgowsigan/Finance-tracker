import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ transactions, onDelete }) => {
  return (
    <ul className="list-group">
      {transactions.map((transaction) => (
        <ExpenseItem
          key={transaction.id}
          transaction={transaction}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
