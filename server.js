// Set up environment variables
require('dotenv').config();

// import dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

// initialize app
const app = express();

// app middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect(process.env.DB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => console.log('mongo connected'))
  .catch(err => console.log(err));

// app listening on port
app.listen(process.env.PORT, () => console.log(`Server Running on port ${process.env.PORT}`));