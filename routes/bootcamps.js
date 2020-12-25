const express = require('express');
const router = express.Router();

// Link the route to the file
// Which we did via requiring the bootcamps.js in server.js
// then we mounted the routers app.use('/api/v1/bootcamps', bootcamps);
// so I can go ahead and remove '/api/v1/bootcamps' from all my paths
router.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Show all bootcamps' });
});

router.get('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Show bootcamp ${req.params.id}` });
});

router.post('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Create new bootcamp' });
});

router.put('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
});

// Finally you want to export the router
module.exports = router;