import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = ({ fetchExpenses }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(' http://localhost:5000/api/expenses', { description, amount });
    fetchExpenses();
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={onSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mr-2"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
