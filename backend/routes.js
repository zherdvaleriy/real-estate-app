
const express = require('express');
const router = express.Router();
const { Residency } = require('./models.js'); // Assuming you have a Residency model




// Route to get all residencies
router.get('/residencies', async (req, res) => {
    try {
        const residencies = await Residency.find({});
        res.json(residencies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching residencies' });
    }
});

// Add more routes as needed

module.exports = router;
