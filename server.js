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

// initialize server
app.listen(process.env.PORT, () => console.log(`Server Running on port ${process.env.PORT}`));