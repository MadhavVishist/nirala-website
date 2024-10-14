const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

// Setup the Express server
const app = express();
app.use(cors());
app.use(express.json());

// Path to the JSON file where data will be stored
const dataFilePath = path.join(__dirname, 'newsEvents.json');

// Helper function to read data from the file
const readDataFromFile = () => {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(data || '[]'); // Return parsed data or an empty array
    } catch (error) {
        console.error('Error reading data from file:', error);
        return [];
    }
};

// Helper function to write data to the file
const writeDataToFile = (data) => {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing data to file:', error);
    }
};

// API to get all news/events
app.get('/api/news-events', (req, res) => {
    try {
        const events = readDataFromFile();
        res.json(events);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch events' });
    }
});

// API to add a new event
app.post('/api/news-events', (req, res) => {
    const { content } = req.body;
    if (!content) {
        return res.status(400).json({ error: 'Content is required' });
    }

    try {
        const events = readDataFromFile();
        const newEvent = { id: Date.now(), content, createdAt: new Date().toISOString() };
        events.push(newEvent);
        writeDataToFile(events);
        res.status(201).json({ message: 'Event added successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to add event' });
    }
});

// API to delete an event by ID
app.delete('/api/news-events/:id', (req, res) => {
    const { id } = req.params;

    try {
        let events = readDataFromFile();
        events = events.filter(event => event.id !== parseInt(id));
        writeDataToFile(events);
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete event' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
