import React, { useState } from 'react';
import FilterExpenses from './FilterExpenses';
import ExpenseList from './ExpenseList';

const ParentComponent = ({ transactions }) => {
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const handleFilter = ({ type, category }) => {
    let filtered = transactions;

    if (type) {
      filtered = filtered.filter(transaction => transaction.type === type);
    }

    if (category) {
      filtered = filtered.filter(transaction =>
        transaction.category.toLowerCase().includes(category.toLowerCase())
      );
    }

    setFilteredTransactions(filtered);
  };

  // Define the onDelete function
  const handleDelete = (id) => {
    const updatedTransactions = filteredTransactions.filter(transaction => transaction.id !== id);
    setFilteredTransactions(updatedTransactions);
  };

  return (
    <div>
      <FilterExpenses onFilter={handleFilter} />
      <ExpenseList transactions={filteredTransactions} onDelete={handleDelete} />
    </div>
  );
};

export default ParentComponent;
