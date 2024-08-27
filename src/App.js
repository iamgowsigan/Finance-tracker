import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import AddTransaction from './pages/AddTransaction';
import ViewTransactions from './pages/ViewTransactions';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransactionHandler = (transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  };

  const deleteTransactionHandler = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard transactions={transactions} />} />
          <Route
            path="/add"
            element={<AddTransaction onAddTransaction={addTransactionHandler} />}
          />
          <Route
            path="/view"
            element={<ViewTransactions transactions={transactions} onDeleteTransaction={deleteTransactionHandler} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
