// Set up environment variables
require('dotenv').config();

// import dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/api/taskRoutes');

// initialize app
const app = express();

// app middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// connected database
mongoose.connect(process.env.DB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
})
  .then(() => console.log('mongo connected'))
  .catch(err => console.log(err));

// Connect routes
app.use('/api/task', taskRoutes);

// app listening on port
app.listen(process.env.PORT, () => console.log(`Server Running on port ${process.env.PORT}`));