const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Require the route files
const bootcamps = require('./routes/bootcamps');

// Load env vars by loading the config file we created in config/config.env
dotenv.config({ path: './config/config.env' });

// Initialize app variable with express
const app = express();

// Dev logging middleware morgan
// I only want this to run when we are in the development environment
// instead of using our own logger and this is simple
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers from line 4
app.use('/api/v1/bootcamps', bootcamps);

// If the first port isnt available then it will run on PORT 5000
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
