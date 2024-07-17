const express = require('express');
const connectDB = require('./config/db');
const expenseRoutes = require('./routes/expenseRoutes');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

connectDB();

const corsOptions = {
    origin: 'http://localhost:3000', // React app URL
    optionsSuccessStatus: 200
  };
app.use(cors());


app.use(express.json());
app.use('/api/expenses', expenseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
