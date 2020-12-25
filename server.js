const express = require('express');
const dotenv = require('dotenv');

// Load env vars by loading the config file we created in config/config.env
// since we put it in a special location then within an object we need to specify that location
dotenv.config({ path: './config/config.env' });

// Initialize app variable with express
const app = express();

// Adding routes
// app.theHTTPmethodWeWant('the route path', function =>)
// you can send through html and json
// The path has v1 so users can still use the older version
// e.g. "v1 will be depracated and you have this amount of time to update it to v2 etc..."
app.get('/api/v1/bootcamps', (req, res) => {
    // res.send('Hello from express');
    res.status(200).json({ success: true, msg: 'Show all bootcamps' });
});

app.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Show bootcamp ${req.params.id}` });
});

app.post('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg: 'Create new bootcamp' });
});

app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
});

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