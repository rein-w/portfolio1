// server/index.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001; // Using 5001 to avoid conflicts

app.use(cors());

app.get('/api', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});