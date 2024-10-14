const express = require('express');
const PORT = 7000;

// Setup the Express server
const app = express();
app.use(express.json());

// Set up the connection to PostgreSQL using Pool
app.get('/',(req, res)=>{
    res.json({message : "testing this web"})
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
});
