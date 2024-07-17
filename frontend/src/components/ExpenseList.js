import React from 'react';
import axios from 'axios';

const ExpenseList = ({ expenses, fetchExpenses }) => {
  const deleteExpense = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/expenses/${id}`);
      fetchExpenses();
    } catch (error) {
      console.error('Error deleting expense:');
    }
  };

  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense._id} className="flex justify-between items-center">
          <span>{expense.description} - ${expense.amount}</span>
          <button onClick={() => deleteExpense(expense._id)} className="bg-red-500 text-white p-2">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
