const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8888; // Common port for Spotify back-ends

app.use(cors()); // Allows your React app to talk to this server
app.use(express.json());

app.get('/api/ping', (req, res) => {
  res.json({ message: "Pong! The server is alive." });
});

app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});