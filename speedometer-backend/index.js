const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

// Simulate speed data
app.get('/speed', (req, res) => {
    const speed = Math.floor(Math.random() * 101); // Random speed between 0 and 100
    res.json({ speed });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
