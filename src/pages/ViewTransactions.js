import React, { useState, useEffect } from 'react';
import ExpenseList from '../components/ExpenseList';
import FilterExpenses from '../components/FilterExpenses';

const ViewTransactions = ({ transactions, onDeleteTransaction }) => {
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  useEffect(() => {
    setFilteredTransactions(transactions);
  }, [transactions]);

  const handleFilter = ({ type, category }) => {
    let filtered = transactions || [];

    if (type) {
      filtered = filtered.filter(transaction => transaction.type === type);
    }

    if (category) {
      filtered = filtered.filter(transaction => transaction.category.toLowerCase().includes(category.toLowerCase()));
    }

    setFilteredTransactions(filtered);
  };

  return (
    <div className="my-4">
      <h2>View Transactions</h2>
      <FilterExpenses onFilter={handleFilter} />
      <ExpenseList transactions={filteredTransactions} onDelete={onDeleteTransaction} />
    </div>
  );
};

export default ViewTransactions;
