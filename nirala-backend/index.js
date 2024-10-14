const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

// Setup the Express server
const app = express();
app.use(cors());
app.use(express.json());

// Set up the connection to PostgreSQL using Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'nirala_db',
    password: 'Madhav@26',
    port: 5432,
});

// API to get all news/events
app.get('/api/news-events', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM news_events ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch events' });
    }
});

// API to add a new event
app.post('/api/news-events', async (req, res) => {
    const { content } = req.body;
    if (!content) {
        return res.status(400).json({ error: 'Content is required' });
    }

    try {
        await pool.query('INSERT INTO news_events (content) VALUES ($1)', [content]);
        res.status(201).json({ message: 'Event added successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to add event' });
    }
});

// API to delete an event by ID
app.delete('/api/news-events/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM news_events WHERE id = $1', [id]);
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
