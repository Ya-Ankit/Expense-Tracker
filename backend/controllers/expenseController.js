const Expense = require('../models/Expense');

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.addExpense = async (req, res) => {
  const { description, amount } = req.body;
  try {
    const newExpense = new Expense({ description, amount });
    await newExpense.save();
    res.json(newExpense);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);
    if (!expense) {
      return res.status(404).json({ msg: 'Expense not found' });
    }
    res.json({ msg: 'Expense removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
