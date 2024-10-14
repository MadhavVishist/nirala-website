const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

// Setup the Express server
const app = express();
app.use(cors());
app.use(express.json());

// Set up the connection to PostgreSQL using Pool

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
});
