const express = require('express');
const dotenv = require('dotenv');

// Route files
const bootcamps = require('./routes/bootcamps');
// mount router onto single url

// Load env vars by loading the config file we created in config/config.env
// since we put it in a special location then within an object we need to specify that location
dotenv.config({ path: './config/config.env' });

// Initialize app variable with express
const app = express();

// Mount routers
// We want to connect this to the bootcamps file on line 5
// we no longer need to include api/v1/bootcamps in our routes because on this
// so we can go ahead and remove that from routes/bootcamp.js
app.use('/api/v1/bootcamps', bootcamps);

// If the first port isnt available then it will run on PORT 5000
const PORT = process.env.PORT || 5000;

// In order to run a server then we need to call .listen
// before we can do this we need to specify a PORT
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
// Now when I run 'rpm run dev' = Server running in development mode on port 5000
// 'npm start' = Server running in production mode on port 5000
// When I open POSTMAN and got to GET http://localhost:5000/ it will
// return a html template with a body of 'Cannot GET' because there are
// Now I can add my routes