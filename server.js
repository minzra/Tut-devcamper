const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
// We aren't using tis type of logger just an example of custom middleware

// Require the route files
const bootcamps = require('./routes/bootcamps');

// Load env vars by loading the config file we created in config/config.env
dotenv.config({ path: './config/config.env' });

// Initialize app variable with express
const app = express();

// - Middleware is a function that has acces to the request/response cycle and runs during that cycle and you can set request variables.
// so any request we make this function will run
// Typically you wouldn't keep any middleware in server.js - keep as clean as possible
// const logger = (req, res, next) => {
//   // set a value on this request object and we can then access from
//   // any route after this middleware
//   console.log(
//     `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
//   );
//   next(); // You need to call this so it knows to move onto the next piece of middleware cycle
// };
// MOVED THE ABOVE TO middleware/logger.js

// to use the middleware we run app.use
app.use(logger);

// Mount routers from line 4
app.use('/api/v1/bootcamps', bootcamps);

// If the first port isnt available then it will run on PORT 5000
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
