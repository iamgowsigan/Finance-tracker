import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = ({ transactions }) => {
  const income = transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const expenses = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const balance = income - expenses;

  // Categorize expenses
  const expenseCategories = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((categories, transaction) => {
      const { category, amount } = transaction;
      categories[category] = (categories[category] || 0) + amount;
      return categories;
    }, {});

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const categoryColors = Object.keys(expenseCategories).map(() => getRandomColor());

  // Prepare data for the chart
  const data = {
    labels: Object.keys(expenseCategories),
    datasets: [
      {
        label: 'Expenses by Category',
        data: Object.values(expenseCategories),
        backgroundColor: categoryColors,
        borderColor: categoryColors.map(color => color.replace('1.0', '0.8')),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: $${context.raw.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `$${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="my-4">
      <h2>Dashboard</h2>
      <div className="alert alert-success" role="alert">
        Current Balance: ${balance.toFixed(2)}
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card bg-success text-black mb-3">
            <div className="card-header">Income</div>
            <div className="card-body">
              <h5 className="card-title">${income.toFixed(2)}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card bg-danger text-black mb-3">
            <div className="card-header">Expenses</div>
            <div className="card-body">
              <h5 className="card-title">${expenses.toFixed(2)}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4">
        <h3>Expenses by Category</h3>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;
