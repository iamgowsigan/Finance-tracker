import React, { useState } from 'react';

const AddTransaction = ({ onAddTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState(''); // New state for category

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount || !category) {
      alert('Please fill in all fields');
      return;
    }

    onAddTransaction({
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type,
      category, // Include category in transaction
      date: new Date(),
    });

    // Clear the form
    setDescription('');
    setAmount('');
    setCategory(''); // Clear category
  };

  return (
    <div className="card my-4">
      <div className="card-header">Add Transaction</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input
              type="number"
              className="form-control"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Type</label>
            <select
              className="form-control"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div className="form-group">
            <label>Category</label> {/* New category field */}
            <input
              type="text"
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
