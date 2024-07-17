import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await axios.get(' http://localhost:5000/api/expenses');
    setExpenses(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Expense Tracker</h1>
      <ExpenseForm fetchExpenses={fetchExpenses} />
      <ExpenseList expenses={expenses} fetchExpenses={fetchExpenses} />
    </div>
  );
};

export default App;
