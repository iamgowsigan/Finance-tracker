import React from 'react';

const ExpenseItem = ({ transaction, onDelete }) => {
  return (
    <li
      className={`list-group-item ${
        transaction.type === 'income' ? 'list-group-item-success' : 'list-group-item-danger'
      }`}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <strong>{transaction.description}</strong>
          <br />
          <small>Category: {transaction.category}</small>
        </div>
        <div>
          <span>${transaction.amount.toFixed(2)}</span>
          <button
            className="btn btn-danger btn-sm ml-2"
            onClick={() => onDelete(transaction.id)} 
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default ExpenseItem;
