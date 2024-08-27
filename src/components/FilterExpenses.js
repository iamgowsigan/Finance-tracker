import React, { useState } from 'react';

const FilterExpenses = ({ onFilter }) => {
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');

  const handleFilter = (e) => {
    e.preventDefault();
    onFilter({ type, category });
  };

  return (
    <div className="filter-form">
      <h3>Filter Transactions</h3>
      <form onSubmit={handleFilter}>
        <div className="form-group">
          <label>Type</label>
          <select
            className="form-control"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Apply Filter
        </button>
      </form>
    </div>
  );
};

export default FilterExpenses;
